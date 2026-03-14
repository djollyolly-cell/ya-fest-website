/**
 * E2E-like accessibility tests (Vitest + jsdom).
 * Tests semantic structure, ARIA attributes, and keyboard accessibility.
 */
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '../src/pages/HomePage'
import { FestivalPage } from '../src/pages/FestivalPage'
import { Navbar } from '../src/components/Navbar'

describe('E2E: Accessibility', () => {
  it('homepage has main landmark with id for skip link', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    )
    const main = document.querySelector('main#main-content')
    expect(main).not.toBeNull()
  })

  it('festival page has main landmark with id', () => {
    render(
      <MemoryRouter initialEntries={['/festivals/kino-i-teatr-u-morya']}>
        <Routes>
          <Route path="/festivals/:slug" element={<FestivalPage />} />
        </Routes>
      </MemoryRouter>
    )
    const main = document.querySelector('main#main-content')
    expect(main).not.toBeNull()
  })

  it('navbar has navigation landmark', () => {
    render(<Navbar />)
    const nav = screen.getByTestId('navbar')
    expect(nav.tagName).toBe('NAV')
  })

  it('mobile menu toggle has aria-label', () => {
    render(<Navbar />)
    const toggle = screen.getByTestId('mobile-menu-toggle')
    expect(toggle).toHaveAttribute('aria-label')
  })

  it('FAQ items have aria-expanded attribute', () => {
    render(
      <MemoryRouter initialEntries={['/festivals/kino-i-teatr-u-morya']}>
        <Routes>
          <Route path="/festivals/:slug" element={<FestivalPage />} />
        </Routes>
      </MemoryRouter>
    )
    const toggles = screen.getAllByTestId('faq-toggle')
    toggles.forEach(toggle => {
      expect(toggle).toHaveAttribute('aria-expanded')
    })
  })

  it('gallery images have alt text', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    )
    const galleryItems = screen.getAllByTestId('gallery-item')
    galleryItems.forEach(item => {
      const img = item.querySelector('img')
      expect(img).toHaveAttribute('alt')
      expect(img?.getAttribute('alt')).not.toBe('')
    })
  })

  it('gallery images have lazy loading', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    )
    const galleryItems = screen.getAllByTestId('gallery-item')
    galleryItems.forEach(item => {
      const img = item.querySelector('img')
      expect(img).toHaveAttribute('loading', 'lazy')
    })
  })

  it('contact form inputs have labels', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    )
    const form = screen.getByTestId('contact-form')
    const labels = form.querySelectorAll('label')
    expect(labels.length).toBeGreaterThanOrEqual(4)
  })
})
