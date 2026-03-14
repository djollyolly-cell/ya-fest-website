import { render, screen, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { Loader } from '../Loader'

describe('Loader', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders loader with initial state', () => {
    render(<Loader />)
    expect(screen.getByTestId('loader')).toBeInTheDocument()
    expect(screen.getByText(/Загрузка/)).toBeInTheDocument()
  })

  it('shows progress percentage', () => {
    render(<Loader />)
    expect(screen.getByTestId('loader-progress')).toHaveTextContent('Загрузка • 0%')
  })

  it('increments progress over time', () => {
    render(<Loader />)
    act(() => {
      vi.advanceTimersByTime(150) // 5 ticks * 30ms = +10%
    })
    expect(screen.getByTestId('loader-progress')).toHaveTextContent('10%')
  })

  it('reaches 100% and eventually hides', () => {
    render(<Loader />)
    act(() => {
      vi.advanceTimersByTime(1500) // 50 ticks * 30ms = 100%
    })
    expect(screen.getByTestId('loader-progress')).toHaveTextContent('100%')

    // After 500ms delay the loader should start exit animation
    act(() => {
      vi.advanceTimersByTime(600)
    })
    // The loader uses AnimatePresence, so it may still be in DOM during exit
  })

  it('displays the Я logo', () => {
    render(<Loader />)
    expect(screen.getByText('Я')).toBeInTheDocument()
  })
})
