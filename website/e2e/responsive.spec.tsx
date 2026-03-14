/**
 * E2E-like responsive tests.
 * Tests component behavior at different conceptual viewport sizes.
 */
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Navbar } from '../src/components/Navbar'
import { Festivals, festivals } from '../src/components/Festivals'
import { Gallery, galleryItems } from '../src/components/Gallery'

describe('E2E: Responsive Design', () => {
  describe('Navbar', () => {
    it('has mobile menu toggle for small screens', () => {
      render(<Navbar />)
      const toggle = screen.getByTestId('mobile-menu-toggle')
      expect(toggle).toBeInTheDocument()
      // Toggle has md:hidden class, so it's hidden on desktop
      expect(toggle.className).toContain('md:hidden')
    })

    it('desktop nav is hidden on mobile (has hidden md:flex)', () => {
      render(<Navbar />)
      const desktopNav = screen.getByText('Заявка').closest('.hidden')
      expect(desktopNav).toBeInTheDocument()
    })
  })

  describe('Festivals', () => {
    it('renders festival cards that adapt to screen size', () => {
      render(<Festivals />)
      const cards = screen.getAllByTestId('festival-card')
      cards.forEach(card => {
        // Cards have lg:flex-row class for responsive layout
        expect(card.className).toContain('lg:flex-row')
      })
    })

    it('all festival data is present regardless of viewport', () => {
      render(<Festivals />)
      festivals.forEach(f => {
        expect(screen.getByText(f.title)).toBeInTheDocument()
        expect(screen.getByText(f.date)).toBeInTheDocument()
      })
    })
  })

  describe('Gallery', () => {
    it('gallery grid adapts with md:grid-cols-3', () => {
      render(<Gallery />)
      const grid = screen.getAllByTestId('gallery-item')[0].parentElement
      expect(grid?.className).toContain('md:grid-cols-3')
    })

    it('large items span multiple columns on desktop', () => {
      render(<Gallery />)
      const items = screen.getAllByTestId('gallery-item')
      const largeItem = items.find(el => el.className.includes('md:col-span-2'))
      expect(largeItem).toBeDefined()
    })
  })
})
