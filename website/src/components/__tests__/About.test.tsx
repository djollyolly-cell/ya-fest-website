import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { About, stats } from '../About'

describe('About', () => {
  it('renders the about section', () => {
    render(<About />)
    expect(screen.getByTestId('about')).toBeInTheDocument()
  })

  it('displays the section title', () => {
    render(<About />)
    expect(screen.getByText('О продюсерском центре')).toBeInTheDocument()
  })

  it('displays the main heading', () => {
    render(<About />)
    expect(screen.getByText('идеи в события')).toBeInTheDocument()
  })

  it('displays description about the company', () => {
    render(<About />)
    expect(screen.getByText(/Продюсерский центр «Я»/)).toBeInTheDocument()
  })

  it('renders all stat cards', () => {
    render(<About />)
    const cards = screen.getAllByTestId('stat-card')
    expect(cards).toHaveLength(4)
  })

  it('displays stat values', () => {
    render(<About />)
    stats.forEach((stat) => {
      expect(screen.getByText(stat.value)).toBeInTheDocument()
    })
  })

  it('displays stat labels', () => {
    render(<About />)
    stats.forEach((stat) => {
      expect(screen.getByText(stat.label)).toBeInTheDocument()
    })
  })

  it('exports stats with correct structure', () => {
    expect(stats).toHaveLength(4)
    stats.forEach((stat) => {
      expect(stat).toHaveProperty('value')
      expect(stat).toHaveProperty('label')
      expect(stat).toHaveProperty('icon')
    })
  })

  it('mentions key institutions (ГИТИС, ВГИК)', () => {
    render(<About />)
    expect(screen.getByText(/ГИТИСа и ВГИКа/)).toBeInTheDocument()
  })
})
