/**
 * E2E-like tests for cross-page navigation.
 * Tests: route resolution, back navigation, homepage ↔ festival page.
 */
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '../src/pages/HomePage'
import { FestivalPage } from '../src/pages/FestivalPage'

// Mock Three.js
vi.mock('@react-three/fiber', () => ({
  Canvas: ({ children }: { children: React.ReactNode }) => <div data-testid="canvas-mock">{children}</div>,
  useFrame: vi.fn(),
  useThree: vi.fn(() => ({ viewport: { width: 10, height: 10 } })),
}))

vi.mock('@react-three/drei', () => ({
  Float: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Points: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  PointMaterial: () => null,
}))

vi.mock('../src/scenes/MaskScene', () => ({
  MaskScene: () => <div data-testid="mask-scene-mock" />,
}))

function renderWithRouter(initialRoute = '/') {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/festivals/:slug" element={<FestivalPage />} />
      </Routes>
    </MemoryRouter>
  )
}

describe('E2E: Cross-page Navigation', () => {
  it('homepage renders with festival cards and CTA buttons', () => {
    renderWithRouter('/')
    expect(screen.getByTestId('hero')).toBeInTheDocument()
    expect(screen.getByText('Кино и Театр у моря')).toBeInTheDocument()
    expect(screen.getByText('Принять участие')).toBeInTheDocument()
    expect(screen.getByText('Смотреть итоги')).toBeInTheDocument()
  })

  it('festival page renders correctly when accessed via direct URL', () => {
    renderWithRouter('/festivals/kino-i-teatr-u-morya')
    expect(screen.getByTestId('festival-page')).toBeInTheDocument()
    expect(screen.getByTestId('festival-page-title')).toHaveTextContent('Кино и Театр у моря')
  })

  it('navigates back from festival page to homepage via "На главную" link', () => {
    renderWithRouter('/festivals/kino-i-teatr-u-morya')
    expect(screen.getByTestId('festival-page')).toBeInTheDocument()

    const backLink = screen.getByText('На главную')
    fireEvent.click(backLink)

    expect(screen.getByTestId('hero')).toBeInTheDocument()
  })

  it('festival page shows correct data for upcoming festival', () => {
    renderWithRouter('/festivals/kino-i-teatr-u-morya')
    expect(screen.getByTestId('festival-page-title')).toHaveTextContent('Кино и Театр у моря')
    expect(screen.getByText('8–11 апреля 2026')).toBeInTheDocument()
    expect(screen.getAllByText(/Сочи/).length).toBeGreaterThan(0)
    expect(screen.getByTestId('festival-page-status')).toHaveTextContent('Открыт приём заявок')
  })

  it('festival page shows correct data for archived festival', () => {
    renderWithRouter('/festivals/zimniy-teatr')
    expect(screen.getByTestId('festival-page-title')).toHaveTextContent('Зимний театр')
    expect(screen.getByTestId('festival-page-status')).toHaveTextContent('Архив мероприятия')
  })

  it('unknown route shows 404 with link back to homepage', () => {
    renderWithRouter('/festivals/nonexistent')
    expect(screen.getByTestId('festival-not-found')).toBeInTheDocument()
    expect(screen.getByText('Фестиваль не найден')).toBeInTheDocument()

    const homeLink = screen.getByText('Вернуться на главную')
    fireEvent.click(homeLink)
    expect(screen.getByTestId('hero')).toBeInTheDocument()
  })

  it('homepage sections have anchor IDs for navigation', () => {
    renderWithRouter('/')
    const main = screen.getByRole('main')
    const requiredSections = ['home', 'about', 'festivals', 'jury', 'gallery', 'contacts']
    requiredSections.forEach(id => {
      expect(main.querySelector(`#${id}`)).toBeInTheDocument()
    })
  })

  it('festival page "На главную" link has correct href', () => {
    renderWithRouter('/festivals/kino-i-teatr-u-morya')
    const backLink = screen.getByText('На главную')
    expect(backLink.closest('a')).toHaveAttribute('href', '/')
  })
})
