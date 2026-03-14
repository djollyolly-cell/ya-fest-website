import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ContactForm } from '../ContactForm'

describe('ContactForm', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('renders the form', () => {
    render(<ContactForm />)
    expect(screen.getByTestId('zod-contact-form')).toBeInTheDocument()
  })

  it('has all required input fields', () => {
    render(<ContactForm />)
    expect(screen.getByPlaceholderText('Иван Иванов')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('+7 (999) 123-45-67')).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Театральная студия/)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Драматический спектакль/)).toBeInTheDocument()
  })

  it('has direction and age_group selects', () => {
    render(<ContactForm />)
    const form = screen.getByTestId('zod-contact-form')
    const selects = form.querySelectorAll('select')
    expect(selects).toHaveLength(2)
  })

  it('has submit button', () => {
    render(<ContactForm />)
    expect(screen.getByTestId('zod-submit-btn')).toBeInTheDocument()
    expect(screen.getByText('Отправить заявку')).toBeInTheDocument()
  })

  it('has a hidden honeypot field', () => {
    render(<ContactForm />)
    const form = screen.getByTestId('zod-contact-form')
    const hiddenDiv = form.querySelector('[aria-hidden="true"]')
    expect(hiddenDiv).toBeInTheDocument()
    const honeypot = hiddenDiv?.querySelector('input')
    expect(honeypot).toBeInTheDocument()
    expect(honeypot).toHaveAttribute('tabindex', '-1')
  })

  it('shows validation error for empty name on submit', async () => {
    render(<ContactForm />)
    fireEvent.click(screen.getByTestId('zod-submit-btn'))
    await waitFor(() => {
      expect(screen.getByTestId('error-name')).toBeInTheDocument()
    })
  })

  it('shows validation error for invalid phone', async () => {
    render(<ContactForm />)
    fireEvent.change(screen.getByPlaceholderText('Иван Иванов'), { target: { value: 'Иван Иванов' } })
    fireEvent.change(screen.getByPlaceholderText('+7 (999) 123-45-67'), { target: { value: '12345' } })
    fireEvent.change(screen.getByPlaceholderText(/Театральная студия/), { target: { value: 'Студия' } })
    fireEvent.change(screen.getByPlaceholderText(/Драматический спектакль/), { target: { value: 'Драма' } })
    fireEvent.click(screen.getByTestId('zod-submit-btn'))
    await waitFor(() => {
      expect(screen.getByTestId('error-phone')).toBeInTheDocument()
    })
  })

  it('shows validation error for short collective name', async () => {
    render(<ContactForm />)
    fireEvent.change(screen.getByPlaceholderText('Иван Иванов'), { target: { value: 'Иван' } })
    fireEvent.change(screen.getByPlaceholderText('+7 (999) 123-45-67'), { target: { value: '+7 (999) 123-45-67' } })
    fireEvent.change(screen.getByPlaceholderText(/Театральная студия/), { target: { value: 'А' } })
    fireEvent.change(screen.getByPlaceholderText(/Драматический спектакль/), { target: { value: 'Драма' } })
    fireEvent.click(screen.getByTestId('zod-submit-btn'))
    await waitFor(() => {
      expect(screen.getByTestId('error-collective')).toBeInTheDocument()
    })
  })

  it('submits valid form and shows success', async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: true })

    render(<ContactForm />)
    fireEvent.change(screen.getByPlaceholderText('Иван Иванов'), { target: { value: 'Иван Иванов' } })
    fireEvent.change(screen.getByPlaceholderText('+7 (999) 123-45-67'), { target: { value: '+7 (999) 123-45-67' } })
    fireEvent.change(screen.getByPlaceholderText(/Театральная студия/), { target: { value: 'Студия Браво' } })
    fireEvent.change(screen.getByPlaceholderText(/Драматический спектакль/), { target: { value: 'Драматический спектакль' } })
    fireEvent.click(screen.getByTestId('zod-submit-btn'))

    await waitFor(() => {
      expect(screen.getByTestId('zod-form-success')).toBeInTheDocument()
    })
    expect(screen.getByText('Заявка отправлена!')).toBeInTheDocument()
  })

  it('calls fetch with correct data on submit', async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: true })

    render(<ContactForm />)
    fireEvent.change(screen.getByPlaceholderText('Иван Иванов'), { target: { value: 'Тест Тестов' } })
    fireEvent.change(screen.getByPlaceholderText('+7 (999) 123-45-67'), { target: { value: '+7 (999) 123-45-67' } })
    fireEvent.change(screen.getByPlaceholderText(/Театральная студия/), { target: { value: 'Коллектив' } })
    fireEvent.change(screen.getByPlaceholderText(/Драматический спектакль/), { target: { value: 'Номинация' } })
    fireEvent.click(screen.getByTestId('zod-submit-btn'))

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith('/api/contact', expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      }))
    })
  })

  it('allows sending another form after success', async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: true })

    render(<ContactForm />)
    fireEvent.change(screen.getByPlaceholderText('Иван Иванов'), { target: { value: 'Тест' } })
    fireEvent.change(screen.getByPlaceholderText('+7 (999) 123-45-67'), { target: { value: '+7 (999) 123-45-67' } })
    fireEvent.change(screen.getByPlaceholderText(/Театральная студия/), { target: { value: 'Студия' } })
    fireEvent.change(screen.getByPlaceholderText(/Драматический спектакль/), { target: { value: 'Номинация' } })
    fireEvent.click(screen.getByTestId('zod-submit-btn'))

    await waitFor(() => {
      expect(screen.getByText('Отправить еще одну')).toBeInTheDocument()
    })

    fireEvent.click(screen.getByText('Отправить еще одну'))
    expect(screen.getByTestId('zod-contact-form')).toBeInTheDocument()
  })

  it('does not submit when honeypot is filled (silently)', async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: true })

    render(<ContactForm />)
    // Fill all valid fields
    fireEvent.change(screen.getByPlaceholderText('Иван Иванов'), { target: { value: 'Бот' } })
    fireEvent.change(screen.getByPlaceholderText('+7 (999) 123-45-67'), { target: { value: '+7 (999) 123-45-67' } })
    fireEvent.change(screen.getByPlaceholderText(/Театральная студия/), { target: { value: 'Спам' } })
    fireEvent.change(screen.getByPlaceholderText(/Драматический спектакль/), { target: { value: 'Спам' } })

    // Fill honeypot — schema will reject with max(0) validation error, so the form won't submit
    const form = screen.getByTestId('zod-contact-form')
    const honeypotInput = form.querySelector('[aria-hidden="true"] input')!
    fireEvent.change(honeypotInput, { target: { value: 'http://spam.com' } })
    fireEvent.click(screen.getByTestId('zod-submit-btn'))

    // Zod will reject because website field has max(0), so fetch should NOT be called
    await waitFor(() => {
      expect(global.fetch).not.toHaveBeenCalled()
    })
  })

  it('has direction select with theater and cinema options', () => {
    render(<ContactForm />)
    expect(screen.getByText('Театральное искусство')).toBeInTheDocument()
    expect(screen.getByText('Киноискусство')).toBeInTheDocument()
  })

  it('has age group select with all options', () => {
    render(<ContactForm />)
    expect(screen.getByText('до 11 лет')).toBeInTheDocument()
    expect(screen.getByText('12–16 лет')).toBeInTheDocument()
    expect(screen.getByText('17+ лет')).toBeInTheDocument()
    expect(screen.getByText('Смешанная')).toBeInTheDocument()
  })
})
