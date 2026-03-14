/**
 * E2E-like tests for Countdown (FOMO timer) on the Festival Page.
 * Tests: countdown display, price rendering, expired state.
 */
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, afterEach } from 'vitest'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { FestivalPage } from '../src/pages/FestivalPage'
import { EARLY_PRICE, LATE_PRICE } from '../src/components/Countdown'

function renderFestival(slug = 'kino-i-teatr-u-morya') {
  return render(
    <MemoryRouter initialEntries={[`/festivals/${slug}`]}>
      <Routes>
        <Route path="/festivals/:slug" element={<FestivalPage />} />
      </Routes>
    </MemoryRouter>
  )
}

describe('E2E: Countdown on Festival Page', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('countdown section renders on upcoming festival page', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-03-01T12:00:00+03:00'))
    renderFestival()
    expect(screen.getByTestId('festival-pricing')).toBeInTheDocument()
    expect(screen.getByTestId('countdown')).toBeInTheDocument()
    vi.useRealTimers()
  })

  it('shows early price before deadline', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-03-01T12:00:00+03:00'))
    renderFestival()
    const priceEl = screen.getByTestId('countdown-price')
    expect(priceEl).toHaveTextContent(`${EARLY_PRICE} ₽`)
    vi.useRealTimers()
  })

  it('shows countdown values (days, hours, minutes, seconds)', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-03-01T12:00:00+03:00'))
    renderFestival()
    const values = screen.getAllByTestId('countdown-value')
    expect(values.length).toBe(4) // days, hours, minutes, seconds
    vi.useRealTimers()
  })

  it('shows expired state with late price after deadline', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-03-15T12:00:00+03:00'))
    renderFestival()
    const expiredEl = screen.getByTestId('countdown-expired')
    expect(expiredEl).toBeInTheDocument()
    expect(expiredEl).toHaveTextContent('Регистрация продолжается')
    expect(expiredEl).toHaveTextContent(`${LATE_PRICE} ₽`)
    vi.useRealTimers()
  })

  it('countdown is NOT shown on archived festival page', () => {
    renderFestival('zimniy-teatr')
    expect(screen.queryByTestId('festival-pricing')).not.toBeInTheDocument()
    expect(screen.queryByTestId('countdown')).not.toBeInTheDocument()
  })

  it('pricing amount matches festival price', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-03-01T12:00:00+03:00'))
    renderFestival()
    expect(screen.getByTestId('pricing-amount')).toBeInTheDocument()
    vi.useRealTimers()
  })
})
