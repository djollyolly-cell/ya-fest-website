import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { Contact } from '../Contact'

describe('Contact', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('renders the contact section', () => {
    render(<Contact />)
    expect(screen.getByTestId('contact')).toBeInTheDocument()
  })

  it('displays contact heading', () => {
    render(<Contact />)
    expect(screen.getByText('Контакты')).toBeInTheDocument()
    expect(screen.getByText('Свяжитесь с нами')).toBeInTheDocument()
  })

  it('displays phone number', () => {
    render(<Contact />)
    expect(screen.getByText('+7 (960) 134-34-00')).toBeInTheDocument()
  })

  it('displays email', () => {
    render(<Contact />)
    expect(screen.getByText('producer.ya@mail.ru')).toBeInTheDocument()
  })

  it('displays VK links', () => {
    render(<Contact />)
    expect(screen.getByText('Личные VK')).toBeInTheDocument()
    expect(screen.getByText('Группа VK')).toBeInTheDocument()
  })

  it('has correct phone link', () => {
    render(<Contact />)
    const phoneLink = screen.getByText('+7 (960) 134-34-00')
    expect(phoneLink).toHaveAttribute('href', 'tel:+79601343400')
  })

  it('has correct email link', () => {
    render(<Contact />)
    const emailLink = screen.getByText('producer.ya@mail.ru')
    expect(emailLink).toHaveAttribute('href', 'mailto:producer.ya@mail.ru')
  })

  it('displays venue info', () => {
    render(<Contact />)
    expect(screen.getByText(/Сочи Парк Отель/)).toBeInTheDocument()
  })

  it('renders the application form', () => {
    render(<Contact />)
    expect(screen.getByTestId('contact-form')).toBeInTheDocument()
  })

  it('form has all required fields', () => {
    render(<Contact />)
    expect(screen.getByPlaceholderText('Иван Иванов')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('+7 (___) ___-__-__')).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Театральная студия/)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Драматический спектакль/)).toBeInTheDocument()
  })

  it('form has direction select', () => {
    render(<Contact />)
    const form = screen.getByTestId('contact-form')
    const selects = form.querySelectorAll('select')
    expect(selects.length).toBeGreaterThanOrEqual(2)
  })

  it('form has submit button', () => {
    render(<Contact />)
    expect(screen.getByTestId('submit-btn')).toBeInTheDocument()
    expect(screen.getByText('Отправить заявку')).toBeInTheDocument()
  })

  it('submits form and shows success message', async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: true })

    render(<Contact />)

    fireEvent.change(screen.getByPlaceholderText('Иван Иванов'), { target: { value: 'Тест Тестов' } })
    fireEvent.change(screen.getByPlaceholderText('+7 (___) ___-__-__'), { target: { value: '+79001234567' } })
    fireEvent.change(screen.getByPlaceholderText(/Театральная студия/), { target: { value: 'Студия Тест' } })
    fireEvent.change(screen.getByPlaceholderText(/Драматический спектакль/), { target: { value: 'Драма' } })

    fireEvent.click(screen.getByTestId('submit-btn'))

    await waitFor(() => {
      expect(screen.getByTestId('form-success')).toBeInTheDocument()
    })
    expect(screen.getByText('Заявка отправлена!')).toBeInTheDocument()
  })

  it('allows sending another application after success', async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: true })

    render(<Contact />)

    fireEvent.change(screen.getByPlaceholderText('Иван Иванов'), { target: { value: 'Тест' } })
    fireEvent.change(screen.getByPlaceholderText('+7 (___) ___-__-__'), { target: { value: '+79001234567' } })
    fireEvent.change(screen.getByPlaceholderText(/Театральная студия/), { target: { value: 'Студия' } })
    fireEvent.change(screen.getByPlaceholderText(/Драматический спектакль/), { target: { value: 'Драма' } })
    fireEvent.click(screen.getByTestId('submit-btn'))

    await waitFor(() => {
      expect(screen.getByText('Отправить еще одну')).toBeInTheDocument()
    })

    fireEvent.click(screen.getByText('Отправить еще одну'))
    expect(screen.getByTestId('contact-form')).toBeInTheDocument()
  })

  it('displays footer with copyright', () => {
    render(<Contact />)
    expect(screen.getByText(/2026 Продюсерский центр «Я»/)).toBeInTheDocument()
  })
})
