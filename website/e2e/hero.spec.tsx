/**
 * E2E-like tests for the Hero section.
 */
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Hero } from '../src/components/Hero'

vi.mock('@react-three/fiber', () => ({
  Canvas: ({ children }: { children: React.ReactNode }) => <div data-testid="canvas-mock">{children}</div>,
  useFrame: vi.fn(),
}))

vi.mock('@react-three/drei', () => ({
  Float: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Points: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  PointMaterial: () => null,
}))

vi.mock('../src/scenes/MaskScene', () => ({
  MaskScene: () => <div data-testid="mask-scene-mock" />,
}))

describe('E2E: Hero Section', () => {
  it('loads the 3D canvas area', () => {
    render(<Hero />)
    expect(screen.getByTestId('canvas-mock')).toBeInTheDocument()
  })

  it('renders main CTA button visible', () => {
    render(<Hero />)
    const cta = screen.getByTestId('hero-cta')
    expect(cta).toBeInTheDocument()
    expect(cta).toHaveTextContent('Подать заявку')
  })

  it('displays key marketing content', () => {
    render(<Hero />)
    expect(screen.getByText('Всероссийский Грантовый Фестиваль')).toBeInTheDocument()
    expect(screen.getByText('200 000 ₽')).toBeInTheDocument()
  })

  it('has scroll indicator for user guidance', () => {
    render(<Hero />)
    expect(screen.getByText('Scroll to Explore')).toBeInTheDocument()
  })
})
