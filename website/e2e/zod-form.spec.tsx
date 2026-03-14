/**
 * E2E-like tests for Zod-validated Contact Form (using Vitest + jsdom).
 * Tests validation messages, honeypot, submission flow.
 */
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ContactForm } from '../src/components/ContactForm'

describe('E2E: Zod Contact Form', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('shows all validation errors when submitting empty form', async () => {
    render(<ContactForm />)
    fireEvent.click(screen.getByTestId('zod-submit-btn'))

    await waitFor(() => {
      expect(screen.getByTestId('error-name')).toBeInTheDocument()
    })
    // Phone has a default empty string which doesn't match regex
    expect(screen.getByTestId('error-phone')).toBeInTheDocument()
    expect(screen.getByTestId('error-collective')).toBeInTheDocument()
    expect(screen.getByTestId('error-nomination')).toBeInTheDocument()
  })

  it('clears validation error when field is corrected', async () => {
    render(<ContactForm />)
    fireEvent.click(screen.getByTestId('zod-submit-btn'))

    await waitFor(() => {
      expect(screen.getByTestId('error-name')).toBeInTheDocument()
    })

    // Fix the name field
    fireEvent.change(screen.getByPlaceholderText('Иван Иванов'), { target: { value: 'Иван Иванов' } })
    fireEvent.click(screen.getByTestId('zod-submit-btn'))

    await waitFor(() => {
      expect(screen.queryByTestId('error-name')).not.toBeInTheDocument()
    })
  })

  it('full valid submission flow works end-to-end', async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: true })

    render(<ContactForm />)

    // Fill all fields
    fireEvent.change(screen.getByPlaceholderText('Иван Иванов'), { target: { value: 'Полина Яковлева' } })
    fireEvent.change(screen.getByPlaceholderText('+7 (999) 123-45-67'), { target: { value: '+7 (960) 134-34-00' } })
    fireEvent.change(screen.getByPlaceholderText(/Театральная студия/), { target: { value: 'Театр Солнце' } })
    fireEvent.change(screen.getByPlaceholderText(/Драматический спектакль/), { target: { value: 'Художественное слово' } })

    // Submit
    fireEvent.click(screen.getByTestId('zod-submit-btn'))

    // Verify success
    await waitFor(() => {
      expect(screen.getByTestId('zod-form-success')).toBeInTheDocument()
    })
    expect(screen.getByText('Заявка отправлена!')).toBeInTheDocument()

    // Send another
    fireEvent.click(screen.getByText('Отправить еще одну'))
    expect(screen.getByTestId('zod-contact-form')).toBeInTheDocument()
  })

  it('honeypot field is hidden from visual users', () => {
    render(<ContactForm />)
    const form = screen.getByTestId('zod-contact-form')
    const hiddenDiv = form.querySelector('[aria-hidden="true"]')
    expect(hiddenDiv).toBeInTheDocument()
    expect(hiddenDiv?.className).toContain('-left-[9999px]')
  })

  it('phone validation shows correct format hint', async () => {
    render(<ContactForm />)
    fireEvent.change(screen.getByPlaceholderText('Иван Иванов'), { target: { value: 'Тест' } })
    fireEvent.change(screen.getByPlaceholderText('+7 (999) 123-45-67'), { target: { value: 'не телефон' } })
    fireEvent.change(screen.getByPlaceholderText(/Театральная студия/), { target: { value: 'Студия' } })
    fireEvent.change(screen.getByPlaceholderText(/Драматический спектакль/), { target: { value: 'Номинация' } })
    fireEvent.click(screen.getByTestId('zod-submit-btn'))

    await waitFor(() => {
      const phoneError = screen.getByTestId('error-phone')
      expect(phoneError).toHaveTextContent(/\+7/)
    })
  })

  it('select fields have correct default values', () => {
    render(<ContactForm />)
    const form = screen.getByTestId('zod-contact-form')
    const selects = form.querySelectorAll('select')
    // direction defaults to 'theater', age_group defaults to 'under_11'
    expect(selects[0]).toHaveValue('theater')
    expect(selects[1]).toHaveValue('under_11')
  })

  it('handles server error gracefully', async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: false, status: 500 })
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    render(<ContactForm />)
    fireEvent.change(screen.getByPlaceholderText('Иван Иванов'), { target: { value: 'Тест' } })
    fireEvent.change(screen.getByPlaceholderText('+7 (999) 123-45-67'), { target: { value: '+7 (999) 123-45-67' } })
    fireEvent.change(screen.getByPlaceholderText(/Театральная студия/), { target: { value: 'Студия' } })
    fireEvent.change(screen.getByPlaceholderText(/Драматический спектакль/), { target: { value: 'Номинация' } })
    fireEvent.click(screen.getByTestId('zod-submit-btn'))

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalled()
    })
    // Form should still be visible (not show success)
    expect(screen.getByTestId('zod-contact-form')).toBeInTheDocument()

    consoleSpy.mockRestore()
  })
})
