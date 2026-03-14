import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Gallery, galleryItems } from '../Gallery'

describe('Gallery', () => {
  it('renders the gallery section', () => {
    render(<Gallery />)
    expect(screen.getByTestId('gallery')).toBeInTheDocument()
  })

  it('displays the section heading', () => {
    render(<Gallery />)
    expect(screen.getByText('Галерея')).toBeInTheDocument()
    expect(screen.getByText('Атмосфера Я-Fest')).toBeInTheDocument()
  })

  it('renders all gallery items', () => {
    render(<Gallery />)
    const items = screen.getAllByTestId('gallery-item')
    expect(items).toHaveLength(galleryItems.length)
  })

  it('renders images with alt text', () => {
    render(<Gallery />)
    galleryItems.forEach((item) => {
      const img = screen.getByAltText(item.title)
      expect(img).toBeInTheDocument()
    })
  })

  it('exports galleryItems with correct structure', () => {
    expect(galleryItems).toHaveLength(6)
    galleryItems.forEach((item) => {
      expect(item).toHaveProperty('id')
      expect(item).toHaveProperty('type')
      expect(item).toHaveProperty('title')
      expect(item).toHaveProperty('url')
      expect(item).toHaveProperty('size')
      expect(['image', 'video']).toContain(item.type)
      expect(['large', 'medium', 'small']).toContain(item.size)
    })
  })

  it('contains image type items', () => {
    const images = galleryItems.filter(i => i.type === 'image')
    expect(images.length).toBeGreaterThan(0)
  })

  it('has items with different sizes', () => {
    const sizes = new Set(galleryItems.map(i => i.size))
    expect(sizes.size).toBe(3) // large, medium, small
  })
})
