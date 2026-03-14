/**
 * E2E-like tests for the Contact Form.
 */
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { Contact } from '../src/components/Contact'

describe('E2E: Contact Form', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('form is accessible and has all required fields', () => {
    render(<Contact />)
    const form = screen.getByTestId('contact-form')
    expect(form).toBeInTheDocument()

    // Check required inputs
    const nameInput = screen.getByPlaceholderText('Иван Иванов')
    const phoneInput = screen.getByPlaceholderText('+7 (___) ___-__-__')
    const collectiveInput = screen.getByPlaceholderText(/Театральная студия/)
    const nominationInput = screen.getByPlaceholderText(/Драматический спектакль/)

    expect(nameInput).toHaveAttribute('required')
    expect(phoneInput).toHaveAttribute('required')
    expect(collectiveInput).toHaveAttribute('required')
    expect(nominationInput).toHaveAttribute('required')
  })

  it('form has direction and age group selects', () => {
    render(<Contact />)
    const selects = screen.getByTestId('contact-form').querySelectorAll('select')
    expect(selects.length).toBe(2)

    // Direction select
    const directionOptions = selects[0].querySelectorAll('option')
    expect(directionOptions).toHaveLength(2)

    // Age group select
    const ageOptions = selects[1].querySelectorAll('option')
    expect(ageOptions).toHaveLength(4)
  })

  it('complete user journey: fill form and submit', async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: true })

    render(<Contact />)

    // Fill all fields
    fireEvent.change(screen.getByPlaceholderText('Иван Иванов'), {
      target: { value: 'Мария Петрова' }
    })
    fireEvent.change(screen.getByPlaceholderText('+7 (___) ___-__-__'), {
      target: { value: '+79601234567' }
    })
    fireEvent.change(screen.getByPlaceholderText(/Театральная студия/), {
      target: { value: 'Театральная студия «Звездочки»' }
    })
    fireEvent.change(screen.getByPlaceholderText(/Драматический спектакль/), {
      target: { value: 'Драматический спектакль' }
    })

    // Submit
    fireEvent.click(screen.getByTestId('submit-btn'))

    // Wait for success
    await waitFor(() => {
      expect(screen.getByTestId('form-success')).toBeInTheDocument()
    })
    expect(screen.getByText('Заявка отправлена!')).toBeInTheDocument()

    // Verify fetch was called
    expect(global.fetch).toHaveBeenCalledWith('/api/contact', expect.objectContaining({
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    }))
  })

  it('handles API error gracefully', async () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    global.fetch = vi.fn().mockResolvedValue({ ok: false })

    render(<Contact />)

    fireEvent.change(screen.getByPlaceholderText('Иван Иванов'), { target: { value: 'Тест' } })
    fireEvent.change(screen.getByPlaceholderText('+7 (___) ___-__-__'), { target: { value: '+79001234567' } })
    fireEvent.change(screen.getByPlaceholderText(/Театральная студия/), { target: { value: 'Студия' } })
    fireEvent.change(screen.getByPlaceholderText(/Драматический спектакль/), { target: { value: 'Номинация' } })

    fireEvent.click(screen.getByTestId('submit-btn'))

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalled()
    })

    consoleSpy.mockRestore()
  })

  it('contact info is complete and correct', () => {
    render(<Contact />)

    // Phone
    const phone = screen.getByText('+7 (960) 134-34-00')
    expect(phone.closest('a')).toHaveAttribute('href', 'tel:+79601343400')

    // Email
    const email = screen.getByText('producer.ya@mail.ru')
    expect(email.closest('a')).toHaveAttribute('href', 'mailto:producer.ya@mail.ru')

    // VK
    expect(screen.getByText('Личные VK').closest('a')).toHaveAttribute('href', 'https://vk.com/producer_ya')
    expect(screen.getByText('Группа VK').closest('a')).toHaveAttribute('href', 'https://vk.com/i_festgo')
  })
})
