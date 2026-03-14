import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Festivals, festivals } from '../Festivals'

describe('Festivals', () => {
  it('renders the festivals section', () => {
    render(<Festivals />)
    expect(screen.getByTestId('festivals')).toBeInTheDocument()
  })

  it('displays the section heading', () => {
    render(<Festivals />)
    expect(screen.getByText('События Я-Fest')).toBeInTheDocument()
  })

  it('renders all festival cards', () => {
    render(<Festivals />)
    const cards = screen.getAllByTestId('festival-card')
    expect(cards).toHaveLength(festivals.length)
  })

  it('displays festival titles', () => {
    render(<Festivals />)
    festivals.forEach((fest) => {
      expect(screen.getByText(fest.title)).toBeInTheDocument()
    })
  })

  it('displays festival dates', () => {
    render(<Festivals />)
    festivals.forEach((fest) => {
      expect(screen.getByText(fest.date)).toBeInTheDocument()
    })
  })

  it('displays festival locations', () => {
    render(<Festivals />)
    festivals.forEach((fest) => {
      expect(screen.getByText(fest.location)).toBeInTheDocument()
    })
  })

  it('displays festival prices', () => {
    render(<Festivals />)
    const prices = screen.getAllByTestId('festival-price')
    expect(prices).toHaveLength(festivals.length)
    expect(prices[0]).toHaveTextContent('27 500 ₽')
    expect(prices[1]).toHaveTextContent('20 000 ₽')
  })

  it('shows correct status badges', () => {
    render(<Festivals />)
    expect(screen.getByText('Открыт прием заявок')).toBeInTheDocument()
    expect(screen.getByText('Архив мероприятия')).toBeInTheDocument()
  })

  it('shows CTA for upcoming festivals', () => {
    render(<Festivals />)
    expect(screen.getByText('Принять участие')).toBeInTheDocument()
    expect(screen.getByText('Смотреть итоги')).toBeInTheDocument()
  })

  it('exports festivals data with correct structure', () => {
    expect(festivals).toHaveLength(2)
    festivals.forEach((fest) => {
      expect(fest).toHaveProperty('id')
      expect(fest).toHaveProperty('title')
      expect(fest).toHaveProperty('date')
      expect(fest).toHaveProperty('location')
      expect(fest).toHaveProperty('price')
      expect(fest).toHaveProperty('status')
    })
  })

  it('has an upcoming festival with status "upcoming"', () => {
    const upcoming = festivals.filter(f => f.status === 'upcoming')
    expect(upcoming).toHaveLength(1)
    expect(upcoming[0].title).toBe('Кино и Театр у моря')
  })

  it('has an archived festival with status "archived"', () => {
    const archived = festivals.filter(f => f.status === 'archived')
    expect(archived).toHaveLength(1)
    expect(archived[0].title).toBe('Зимний театр')
  })
})
