import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FAQ, faqItems } from '../FAQ'

describe('FAQ', () => {
  it('renders the FAQ section', () => {
    render(<FAQ />)
    expect(screen.getByTestId('faq')).toBeInTheDocument()
  })

  it('displays section headings', () => {
    render(<FAQ />)
    expect(screen.getByText('Частые вопросы')).toBeInTheDocument()
    expect(screen.getByText('FAQ')).toBeInTheDocument()
  })

  it('renders all FAQ items', () => {
    render(<FAQ />)
    const items = screen.getAllByTestId('faq-item')
    expect(items).toHaveLength(faqItems.length)
  })

  it('displays all questions', () => {
    render(<FAQ />)
    faqItems.forEach((item) => {
      expect(screen.getByText(item.q)).toBeInTheDocument()
    })
  })

  it('first item is open by default', () => {
    render(<FAQ />)
    const toggles = screen.getAllByTestId('faq-toggle')
    expect(toggles[0]).toHaveAttribute('aria-expanded', 'true')
  })

  it('other items are closed by default', () => {
    render(<FAQ />)
    const toggles = screen.getAllByTestId('faq-toggle')
    for (let i = 1; i < toggles.length; i++) {
      expect(toggles[i]).toHaveAttribute('aria-expanded', 'false')
    }
  })

  it('clicking a closed item opens it', () => {
    render(<FAQ />)
    const toggles = screen.getAllByTestId('faq-toggle')
    fireEvent.click(toggles[1])
    expect(toggles[1]).toHaveAttribute('aria-expanded', 'true')
  })

  it('clicking an open item closes it', () => {
    render(<FAQ />)
    const toggles = screen.getAllByTestId('faq-toggle')
    // First item is open by default
    fireEvent.click(toggles[0])
    expect(toggles[0]).toHaveAttribute('aria-expanded', 'false')
  })

  it('only one item can be open at a time', () => {
    render(<FAQ />)
    const toggles = screen.getAllByTestId('faq-toggle')
    // Open second item
    fireEvent.click(toggles[1])
    // First should close, second should open
    expect(toggles[0]).toHaveAttribute('aria-expanded', 'false')
    expect(toggles[1]).toHaveAttribute('aria-expanded', 'true')
  })

  it('has 7 FAQ items in data', () => {
    expect(faqItems).toHaveLength(7)
  })

  it('FAQ items have question and answer strings', () => {
    faqItems.forEach((item) => {
      expect(item.q).toBeTruthy()
      expect(item.a).toBeTruthy()
    })
  })
})
