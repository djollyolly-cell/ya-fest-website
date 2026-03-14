import { useRef, useMemo, useEffect, useState, useCallback } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const PARTICLE_COUNT = 5000

/** Load SVG logo image, rasterize it onto a canvas, and sample white pixel positions */
function sampleLogoPositions(
  img: HTMLImageElement,
  count: number,
  worldWidth: number,
  worldHeight: number
): Float32Array {
  const w = img.naturalWidth || 400
  const h = img.naturalHeight || 480
  const canvas = document.createElement('canvas')
  canvas.width = w
  canvas.height = h
  const ctx = canvas.getContext('2d')!
  ctx.fillStyle = '#000'
  ctx.fillRect(0, 0, w, h)
  ctx.drawImage(img, 0, 0, w, h)

  const imageData = ctx.getImageData(0, 0, w, h)
  const pixels = imageData.data
  const validPositions: [number, number][] = []

  // Collect all bright pixels (white areas of the logo)
  const step = 2
  for (let y = 0; y < h; y += step) {
    for (let x = 0; x < w; x += step) {
      const i = (y * w + x) * 4
      // Check if pixel is bright enough (white in SVG)
      if (pixels[i] > 180 && pixels[i + 1] > 180 && pixels[i + 2] > 180) {
        validPositions.push([x, y])
      }
    }
  }

  const positions = new Float32Array(count * 3)
  const scaleX = worldWidth / w
  const scaleY = worldHeight / h

  if (validPositions.length === 0) {
    // Fallback: circle shape
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2
      const r = Math.random() * 3
      positions[i * 3] = Math.cos(angle) * r
      positions[i * 3 + 1] = Math.sin(angle) * r
      positions[i * 3 + 2] = 0
    }
    return positions
  }

  for (let i = 0; i < count; i++) {
    const [px, py] = validPositions[Math.floor(Math.random() * validPositions.length)]
    positions[i * 3] = (px - w / 2) * scaleX
    positions[i * 3 + 1] = -(py - h / 2) * scaleY // flip Y
    positions[i * 3 + 2] = (Math.random() - 0.5) * 0.4
  }

  return positions
}

export const MaskScene = () => {
  const pointsRef = useRef<THREE.Points>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const progressRef = useRef(0)
  const [logoPositions, setLogoPositions] = useState<Float32Array | null>(null)

  // Load logo SVG and generate target positions
  useEffect(() => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      const positions = sampleLogoPositions(img, PARTICLE_COUNT, 10, 12)
      setLogoPositions(positions)
    }
    img.src = '/logo-silhouette.svg'
  }, [])

  // Random cloud positions (initial state)
  const { cloudPositions, colors, randomOffsets } = useMemo(() => {
    const cloud = new Float32Array(PARTICLE_COUNT * 3)
    const cols = new Float32Array(PARTICLE_COUNT * 3)
    const offsets = new Float32Array(PARTICLE_COUNT)

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Start as a spread-out cloud
      const angle = Math.random() * Math.PI * 2
      const radius = 3 + Math.random() * 8
      cloud[i * 3] = Math.cos(angle) * radius
      cloud[i * 3 + 1] = Math.sin(angle) * radius * 0.7
      cloud[i * 3 + 2] = (Math.random() - 0.5) * 6
      offsets[i] = Math.random() * Math.PI * 2

      // Brand colors: pink, cyan, gold, white
      const r = Math.random()
      const color =
        r < 0.35
          ? new THREE.Color('#E91E8C')
          : r < 0.65
            ? new THREE.Color('#00BCD4')
            : r < 0.8
              ? new THREE.Color('#FFD700')
              : new THREE.Color('#ffffff')
      color.multiplyScalar(0.7 + Math.random() * 0.5)
      cols[i * 3] = color.r
      cols[i * 3 + 1] = color.g
      cols[i * 3 + 2] = color.b
    }
    return { cloudPositions: cloud, colors: cols, randomOffsets: offsets }
  }, [])

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(cloudPositions.slice(), 3))
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
    return geo
  }, [cloudPositions, colors])

  const material = useMemo(() => {
    return new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    })
  }, [])

  // Track mouse
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  useEffect(() => {
    return () => {
      geometry.dispose()
      material.dispose()
    }
  }, [geometry, material])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    // Morph progress: 0 = cloud, 1 = logo. Start morphing after logo loads, with 1s delay
    const shouldMorph = logoPositions !== null && time > 1.0
    const targetProgress = shouldMorph ? 1 : 0
    progressRef.current += (targetProgress - progressRef.current) * 0.006

    const progress = progressRef.current
    const mx = mouseRef.current.x
    const my = mouseRef.current.y

    if (!pointsRef.current) return

    const posAttr = pointsRef.current.geometry.attributes.position
    const arr = posAttr.array as Float32Array
    const targets = logoPositions || cloudPositions

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const idx = i * 3
      const offset = randomOffsets[i]

      const tx = targets[idx]
      const ty = targets[idx + 1]
      const tz = targets[idx + 2]

      const cx = cloudPositions[idx]
      const cy = cloudPositions[idx + 1]
      const cz = cloudPositions[idx + 2]

      // Stagger: each particle starts morphing at a different time
      const stagger = offset / (Math.PI * 2)
      const localProgress = Math.max(0, Math.min(1, (progress - stagger * 0.35) / 0.65))
      // Smooth ease-in-out
      const ease = localProgress * localProgress * (3 - 2 * localProgress)

      let x = cx + (tx - cx) * ease
      let y = cy + (ty - cy) * ease
      let z = cz + (tz - cz) * ease

      // Gentle breathing when assembled
      if (ease > 0.7) {
        const breatheStrength = (ease - 0.7) / 0.3
        x += Math.sin(time * 0.6 + offset) * 0.04 * breatheStrength
        y += Math.cos(time * 0.5 + offset * 1.3) * 0.03 * breatheStrength
        z += Math.sin(time * 0.8 + offset * 0.7) * 0.06
      }

      // Cloud floating when not assembled
      if (ease < 0.5) {
        const drift = 1 - ease * 2
        x += Math.sin(time * 0.3 + offset) * 0.25 * drift
        y += Math.cos(time * 0.2 + offset * 1.5) * 0.25 * drift
        z += Math.sin(time * 0.4 + offset * 0.8) * 0.2 * drift
      }

      // Mouse repulsion
      const dx = x - mx * 5
      const dy = y - my * 4
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 2.5) {
        const force = (2.5 - dist) / 2.5 * 0.5 * (1 - ease * 0.6)
        x += (dx / dist) * force * 0.4
        y += (dy / dist) * force * 0.4
      }

      arr[idx] = x
      arr[idx + 1] = y
      arr[idx + 2] = z
    }

    posAttr.needsUpdate = true

    // Slow rotation when in cloud state
    pointsRef.current.rotation.y = Math.sin(time * 0.08) * 0.06 * (1 - progress)
  })

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 4, 6]} intensity={120} color="#E91E8C" />
      <pointLight position={[-5, 4, 6]} intensity={120} color="#00BCD4" />
      <pointLight position={[0, -4, 5]} intensity={60} color="#FFD700" />
      <points ref={pointsRef} geometry={geometry} material={material} />
    </>
  )
}
