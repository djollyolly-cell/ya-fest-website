/**
 * E2E-like tests for Festival Page (using Vitest + jsdom).
 * Tests routing, content display, and conditional sections.
 */
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { FestivalPage } from '../src/pages/FestivalPage'
import { festivals } from '../src/components/Festivals'

function renderFestivalRoute(slug: string) {
  return render(
    <MemoryRouter initialEntries={[`/festivals/${slug}`]}>
      <Routes>
        <Route path="/festivals/:slug" element={<FestivalPage />} />
      </Routes>
    </MemoryRouter>
  )
}

describe('E2E: Festival Page', () => {
  it('renders upcoming festival with all sections', () => {
    renderFestivalRoute('kino-i-teatr-u-morya')
    expect(screen.getByTestId('festival-page')).toBeInTheDocument()
    expect(screen.getByTestId('festival-hero')).toBeInTheDocument()
    expect(screen.getByTestId('festival-about')).toBeInTheDocument()
    expect(screen.getByTestId('nominations')).toBeInTheDocument()
    expect(screen.getByTestId('festival-pricing')).toBeInTheDocument()
    expect(screen.getByTestId('faq')).toBeInTheDocument()
    expect(screen.getByTestId('contact')).toBeInTheDocument()
  })

  it('renders archived festival without pricing section', () => {
    renderFestivalRoute('zimniy-teatr')
    expect(screen.getByTestId('festival-page')).toBeInTheDocument()
    expect(screen.queryByTestId('festival-pricing')).not.toBeInTheDocument()
  })

  it('displays correct festival data from festivals array', () => {
    renderFestivalRoute('kino-i-teatr-u-morya')
    expect(screen.getByTestId('festival-page-title')).toHaveTextContent(festivals[0].title)
    expect(screen.getByText(festivals[0].date)).toBeInTheDocument()
  })

  it('nomination tabs work on festival page', () => {
    renderFestivalRoute('kino-i-teatr-u-morya')
    // Default: theater tab
    expect(screen.getByTestId('tab-theater')).toBeInTheDocument()
    expect(screen.getByTestId('tab-cinema')).toBeInTheDocument()

    // Switch to cinema
    fireEvent.click(screen.getByTestId('tab-cinema'))
    expect(screen.getByText('Кинозабег')).toBeInTheDocument()

    // Switch back to theater
    fireEvent.click(screen.getByTestId('tab-theater'))
    expect(screen.getByText('Драматический спектакль')).toBeInTheDocument()
  })

  it('FAQ accordion works on festival page', () => {
    renderFestivalRoute('kino-i-teatr-u-morya')
    const toggles = screen.getAllByTestId('faq-toggle')
    expect(toggles[0]).toHaveAttribute('aria-expanded', 'true')

    fireEvent.click(toggles[1])
    expect(toggles[1]).toHaveAttribute('aria-expanded', 'true')
    expect(toggles[0]).toHaveAttribute('aria-expanded', 'false')
  })

  it('shows 404 for unknown slug', () => {
    renderFestivalRoute('unknown-festival')
    expect(screen.getByTestId('festival-not-found')).toBeInTheDocument()
    expect(screen.getByText('Фестиваль не найден')).toBeInTheDocument()
  })
})
