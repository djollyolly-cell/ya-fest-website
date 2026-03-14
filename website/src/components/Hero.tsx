import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { MaskScene } from '../scenes/MaskScene'
import { motion } from 'framer-motion'

export const Hero = () => {
  return (
    <section id="home" data-testid="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.03] bg-repeat" />

      <div className="absolute inset-0 z-0">
        <Canvas
          shadows
          dpr={[1, 2]}
          camera={{ position: [0, 0, 8], fov: 45 }}
          gl={{ alpha: true, antialias: true }}
          style={{ background: 'transparent' }}
          onCreated={({ gl }) => {
            gl.setClearColor(0x000000, 0)
          }}
        >
          <Suspense fallback={null}>
            <MaskScene />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-block px-6 py-2 rounded-full glass text-xs font-bold tracking-[0.5em] uppercase text-primary mb-8"
          >
            Всероссийский Грантовый Фестиваль
          </motion.span>
          
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-8 leading-none">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/20 inline-block">Я</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-secondary inline-block italic font-serif ml-4">Fest</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="text-lg md:text-xl text-white/50 mb-12 max-w-2xl mx-auto leading-relaxed font-light tracking-wide"
          >
            Иммерсивное пространство, где театральная маска встречается с кинопленкой.
            Гранты до <span className="text-white font-bold">200 000 ₽</span> на ваше творчество.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <button data-testid="hero-cta" className="group relative px-10 py-5 bg-primary rounded-full font-bold text-white transition-all overflow-hidden">
              <span className="relative z-10">Подать заявку</span>
            </button>
            <button className="px-10 py-5 glass rounded-full font-bold text-white hover:bg-white hover:text-dark transition-all duration-500 border-white/10">
              Программа 2026
            </button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold">Scroll to Explore</span>
      </div>
    </section>
  )
}
