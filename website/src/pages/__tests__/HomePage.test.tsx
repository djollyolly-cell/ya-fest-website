import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { HomePage } from '../HomePage'

// Mock Three.js components
vi.mock('@react-three/fiber', () => ({
  Canvas: ({ children }: { children: React.ReactNode }) => <div data-testid="canvas-mock">{children}</div>,
  useFrame: vi.fn(),
}))

vi.mock('@react-three/drei', () => ({
  Float: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Points: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  PointMaterial: () => null,
}))

vi.mock('../../scenes/MaskScene', () => ({
  MaskScene: () => <div data-testid="mask-scene-mock" />,
}))

describe('HomePage', () => {
  it('renders the main layout', () => {
    render(<HomePage />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('renders all major sections', () => {
    render(<HomePage />)
    expect(screen.getByTestId('hero')).toBeInTheDocument()
    expect(screen.getByTestId('about')).toBeInTheDocument()
    expect(screen.getByTestId('festivals')).toBeInTheDocument()
    expect(screen.getByTestId('jury')).toBeInTheDocument()
    expect(screen.getByTestId('gallery')).toBeInTheDocument()
    expect(screen.getByTestId('contact')).toBeInTheDocument()
  })

  it('renders the navbar', () => {
    render(<HomePage />)
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
  })

  it('renders the loader', () => {
    render(<HomePage />)
    expect(screen.getByTestId('loader')).toBeInTheDocument()
  })

  it('has section anchors for navigation', () => {
    render(<HomePage />)
    expect(document.getElementById('home')).toBeInTheDocument()
    expect(document.getElementById('about')).toBeInTheDocument()
    expect(document.getElementById('festivals')).toBeInTheDocument()
    expect(document.getElementById('jury')).toBeInTheDocument()
    expect(document.getElementById('gallery')).toBeInTheDocument()
    expect(document.getElementById('contacts')).toBeInTheDocument()
  })
})
