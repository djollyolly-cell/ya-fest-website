import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { FestivalPage } from '../FestivalPage'

function renderWithRoute(slug: string) {
  return render(
    <MemoryRouter initialEntries={[`/festivals/${slug}`]}>
      <Routes>
        <Route path="/festivals/:slug" element={<FestivalPage />} />
      </Routes>
    </MemoryRouter>
  )
}

describe('FestivalPage', () => {
  describe('with valid slug "kino-i-teatr-u-morya"', () => {
    it('renders the festival page', () => {
      renderWithRoute('kino-i-teatr-u-morya')
      expect(screen.getByTestId('festival-page')).toBeInTheDocument()
    })

    it('displays festival title', () => {
      renderWithRoute('kino-i-teatr-u-morya')
      expect(screen.getByTestId('festival-page-title')).toHaveTextContent('Кино и Театр у моря')
    })

    it('shows upcoming status badge', () => {
      renderWithRoute('kino-i-teatr-u-morya')
      expect(screen.getByTestId('festival-page-status')).toHaveTextContent('Открыт приём заявок')
    })

    it('renders hero section', () => {
      renderWithRoute('kino-i-teatr-u-morya')
      expect(screen.getByTestId('festival-hero')).toBeInTheDocument()
    })

    it('renders about section', () => {
      renderWithRoute('kino-i-teatr-u-morya')
      expect(screen.getByTestId('festival-about')).toBeInTheDocument()
    })

    it('renders nominations section', () => {
      renderWithRoute('kino-i-teatr-u-morya')
      expect(screen.getByTestId('nominations')).toBeInTheDocument()
    })

    it('renders pricing section for upcoming festival', () => {
      renderWithRoute('kino-i-teatr-u-morya')
      expect(screen.getByTestId('festival-pricing')).toBeInTheDocument()
    })

    it('displays price amount', () => {
      renderWithRoute('kino-i-teatr-u-morya')
      expect(screen.getByTestId('pricing-amount')).toHaveTextContent('27 500 ₽')
    })

    it('renders FAQ section', () => {
      renderWithRoute('kino-i-teatr-u-morya')
      expect(screen.getByTestId('faq')).toBeInTheDocument()
    })

    it('renders contact section', () => {
      renderWithRoute('kino-i-teatr-u-morya')
      expect(screen.getByTestId('contact')).toBeInTheDocument()
    })

    it('has back-to-home link', () => {
      renderWithRoute('kino-i-teatr-u-morya')
      expect(screen.getByText('На главную')).toBeInTheDocument()
    })

    it('shows date and location', () => {
      renderWithRoute('kino-i-teatr-u-morya')
      expect(screen.getByText('8–11 апреля 2026')).toBeInTheDocument()
      expect(screen.getAllByText(/Сочи/).length).toBeGreaterThan(0)
    })
  })

  describe('with valid slug "zimniy-teatr"', () => {
    it('renders the festival page', () => {
      renderWithRoute('zimniy-teatr')
      expect(screen.getByTestId('festival-page')).toBeInTheDocument()
    })

    it('displays correct title', () => {
      renderWithRoute('zimniy-teatr')
      expect(screen.getByTestId('festival-page-title')).toHaveTextContent('Зимний театр')
    })

    it('shows archived status', () => {
      renderWithRoute('zimniy-teatr')
      expect(screen.getByTestId('festival-page-status')).toHaveTextContent('Архив мероприятия')
    })

    it('does NOT render pricing section for archived festival', () => {
      renderWithRoute('zimniy-teatr')
      expect(screen.queryByTestId('festival-pricing')).not.toBeInTheDocument()
    })
  })

  describe('with invalid slug', () => {
    it('shows not-found message', () => {
      renderWithRoute('nonexistent-festival')
      expect(screen.getByTestId('festival-not-found')).toBeInTheDocument()
    })

    it('shows link to home page', () => {
      renderWithRoute('nonexistent-festival')
      expect(screen.getByText('Вернуться на главную')).toBeInTheDocument()
    })
  })
})
