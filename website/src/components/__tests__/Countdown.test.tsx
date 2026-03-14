import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { Countdown, EARLY_PRICE, LATE_PRICE } from '../Countdown'

describe('Countdown', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('exports correct price constants', () => {
    expect(EARLY_PRICE).toBe('27 500')
    expect(LATE_PRICE).toBe('30 000')
  })

  describe('when deadline has not passed', () => {
    beforeEach(() => {
      // Set current time to March 5, 2026 — 5 days before deadline
      vi.setSystemTime(new Date('2026-03-05T12:00:00+03:00'))
    })

    it('renders the countdown section', () => {
      render(<Countdown />)
      expect(screen.getByTestId('countdown')).toBeInTheDocument()
    })

    it('displays countdown values', () => {
      render(<Countdown />)
      const values = screen.getAllByTestId('countdown-value')
      expect(values.length).toBe(4) // days, hours, minutes, seconds
    })

    it('shows early price', () => {
      render(<Countdown />)
      expect(screen.getByTestId('countdown-price')).toHaveTextContent(`${EARLY_PRICE} ₽`)
    })

    it('shows late price with strikethrough', () => {
      render(<Countdown />)
      expect(screen.getByText(`${LATE_PRICE} ₽`)).toBeInTheDocument()
    })

    it('renders compact mode', () => {
      render(<Countdown compact />)
      expect(screen.getByTestId('countdown-compact')).toBeInTheDocument()
    })

    it('compact mode shows early price', () => {
      render(<Countdown compact />)
      expect(screen.getByText(`${EARLY_PRICE} ₽`)).toBeInTheDocument()
    })

    it('shows "До повышения цены" label', () => {
      render(<Countdown />)
      expect(screen.getByText('До повышения цены')).toBeInTheDocument()
    })
  })

  describe('when deadline has passed', () => {
    beforeEach(() => {
      // Set current time to March 15, 2026 — after deadline
      vi.setSystemTime(new Date('2026-03-15T12:00:00+03:00'))
    })

    it('renders expired state', () => {
      render(<Countdown />)
      expect(screen.getByTestId('countdown-expired')).toBeInTheDocument()
    })

    it('shows late price when expired', () => {
      render(<Countdown />)
      expect(screen.getByText(`${LATE_PRICE} ₽`)).toBeInTheDocument()
    })

    it('shows "Регистрация продолжается" text', () => {
      render(<Countdown />)
      expect(screen.getByText('Регистрация продолжается')).toBeInTheDocument()
    })
  })
})
