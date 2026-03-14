import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Hero } from '../Hero'

// Mock @react-three/fiber Canvas since WebGL is not available in jsdom
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

describe('Hero', () => {
  it('renders the hero section', () => {
    render(<Hero />)
    expect(screen.getByTestId('hero')).toBeInTheDocument()
  })

  it('displays the festival badge', () => {
    render(<Hero />)
    expect(screen.getByText('Всероссийский Грантовый Фестиваль')).toBeInTheDocument()
  })

  it('displays the title Я and Fest', () => {
    render(<Hero />)
    expect(screen.getByText('Я')).toBeInTheDocument()
    expect(screen.getByText('Fest')).toBeInTheDocument()
  })

  it('displays grant information', () => {
    render(<Hero />)
    expect(screen.getByText('200 000 ₽')).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByTestId('hero-cta')).toBeInTheDocument()
    expect(screen.getByText('Подать заявку')).toBeInTheDocument()
  })

  it('renders the program button', () => {
    render(<Hero />)
    expect(screen.getByText('Программа 2026')).toBeInTheDocument()
  })

  it('renders the 3D canvas area', () => {
    render(<Hero />)
    expect(screen.getByTestId('canvas-mock')).toBeInTheDocument()
  })

  it('has scroll indicator', () => {
    render(<Hero />)
    expect(screen.getByText('Scroll to Explore')).toBeInTheDocument()
  })
})
