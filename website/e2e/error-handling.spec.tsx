/**
 * E2E-like tests for error handling and edge cases.
 * Tests: 404 pages, loading states, Suspense fallback.
 */
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { FestivalPage } from '../src/pages/FestivalPage'
import App from '../src/App'

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

describe('E2E: Error Handling', () => {
  it('festival 404 page displays friendly message', () => {
    render(
      <MemoryRouter initialEntries={['/festivals/does-not-exist']}>
        <Routes>
          <Route path="/festivals/:slug" element={<FestivalPage />} />
        </Routes>
      </MemoryRouter>
    )
    expect(screen.getByTestId('festival-not-found')).toBeInTheDocument()
    expect(screen.getByText('Фестиваль не найден')).toBeInTheDocument()
  })

  it('404 page has a link to homepage', () => {
    render(
      <MemoryRouter initialEntries={['/festivals/xyz']}>
        <Routes>
          <Route path="/festivals/:slug" element={<FestivalPage />} />
        </Routes>
      </MemoryRouter>
    )
    const link = screen.getByText('Вернуться на главную')
    expect(link).toBeInTheDocument()
    expect(link.getAttribute('href')).toBe('/')
  })

  it('404 page has main landmark for accessibility', () => {
    render(
      <MemoryRouter initialEntries={['/festivals/nonexistent']}>
        <Routes>
          <Route path="/festivals/:slug" element={<FestivalPage />} />
        </Routes>
      </MemoryRouter>
    )
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('App component renders skip-link for accessibility', () => {
    render(<App />)
    const skipLink = screen.getByTestId('skip-link')
    expect(skipLink).toBeInTheDocument()
    expect(skipLink).toHaveTextContent('Перейти к содержимому')
    expect(skipLink.getAttribute('href')).toBe('#main-content')
  })

  it('App shows loading fallback during lazy load', () => {
    render(<App />)
    // During lazy loading, either the page or the loading spinner should be visible
    const loadingOrPage = screen.queryByTestId('page-loading') || screen.queryByTestId('hero') || screen.queryByRole('main')
    expect(loadingOrPage).toBeInTheDocument()
  })

  it('multiple invalid festival slugs all show 404', () => {
    const invalidSlugs = ['unknown', '123', 'test-festival', 'кириллица']
    invalidSlugs.forEach(slug => {
      const { unmount } = render(
        <MemoryRouter initialEntries={[`/festivals/${slug}`]}>
          <Routes>
            <Route path="/festivals/:slug" element={<FestivalPage />} />
          </Routes>
        </MemoryRouter>
      )
      expect(screen.getByTestId('festival-not-found')).toBeInTheDocument()
      unmount()
    })
  })
})
