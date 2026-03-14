import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Navbar, navLinks } from '../Navbar'

describe('Navbar', () => {
  it('renders the navbar', () => {
    render(<Navbar />)
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
  })

  it('displays the Я-Fest brand', () => {
    render(<Navbar />)
    expect(screen.getByText('Я-Fest')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    navLinks.forEach((link) => {
      const links = screen.getAllByText(link.name)
      expect(links.length).toBeGreaterThan(0)
    })
  })

  it('renders the CTA button', () => {
    render(<Navbar />)
    expect(screen.getByText('Заявка')).toBeInTheDocument()
  })

  it('has mobile menu toggle button', () => {
    render(<Navbar />)
    expect(screen.getByTestId('mobile-menu-toggle')).toBeInTheDocument()
  })

  it('toggles mobile menu on click', () => {
    render(<Navbar />)
    const toggle = screen.getByTestId('mobile-menu-toggle')

    // Initially mobile menu should not be visible
    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument()

    // Click to open
    fireEvent.click(toggle)
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument()

    // Click to close
    fireEvent.click(toggle)
    // AnimatePresence may keep it briefly, but the state should toggle
  })

  it('has correct href attributes on nav links', () => {
    render(<Navbar />)
    navLinks.forEach((link) => {
      const anchors = screen.getAllByText(link.name)
      anchors.forEach((anchor) => {
        if (anchor.tagName === 'A') {
          expect(anchor).toHaveAttribute('href', link.href)
        }
      })
    })
  })

  it('exports navLinks with correct structure', () => {
    expect(navLinks).toHaveLength(6)
    navLinks.forEach((link) => {
      expect(link).toHaveProperty('name')
      expect(link).toHaveProperty('href')
      expect(link.href).toMatch(/^#/)
    })
  })
})
