import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App'

describe('App', () => {
  it('renders skip-to-content link', async () => {
    render(<App />)
    await waitFor(() => {
      expect(screen.getByTestId('skip-link')).toBeInTheDocument()
    })
  })

  it('skip link has correct href', async () => {
    render(<App />)
    await waitFor(() => {
      const skipLink = screen.getByTestId('skip-link')
      expect(skipLink).toHaveAttribute('href', '#main-content')
    })
  })

  it('skip link text is in Russian', async () => {
    render(<App />)
    await waitFor(() => {
      expect(screen.getByText('Перейти к содержимому')).toBeInTheDocument()
    })
  })

  it('renders with Suspense (shows loading or page)', async () => {
    render(<App />)
    // Either shows loading fallback or the loaded page
    await waitFor(() => {
      const loading = screen.queryByTestId('page-loading')
      const home = screen.queryByText('Я-Fest')
      expect(loading || home).toBeTruthy()
    })
  })
})
