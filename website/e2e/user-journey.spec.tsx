/**
 * E2E-like test for the main user journey:
 * Journey 1: Руководитель подаёт заявку на коллектив
 * Hero → О фестивале → Условия → Жюри → Форма заявки
 */
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { HomePage } from '../src/pages/HomePage'

// Mock Three.js
vi.mock('@react-three/fiber', () => ({
  Canvas: ({ children }: { children: React.ReactNode }) => <div data-testid="canvas-mock">{children}</div>,
  useFrame: vi.fn(),
}))

vi.mock('@react-three/drei', () => ({
  Float: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Points: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  PointMaterial: () => null,
}))

vi.mock('../src/scenes/MaskScene', () => ({
  MaskScene: () => <div data-testid="mask-scene-mock" />,
}))

describe('E2E: User Journey — Руководитель подаёт заявку', () => {
  it('Step 1: Hero section is first visible with CTA', () => {
    render(<HomePage />)
    expect(screen.getByTestId('hero')).toBeInTheDocument()
    const ctaButtons = screen.getAllByText('Подать заявку')
    expect(ctaButtons.length).toBeGreaterThan(0)
    const grantTexts = screen.getAllByText('200 000 ₽')
    expect(grantTexts.length).toBeGreaterThan(0)
  })

  it('Step 2: About section explains the company', () => {
    render(<HomePage />)
    expect(screen.getByTestId('about')).toBeInTheDocument()
    const aboutTexts = screen.getAllByText(/Продюсерский центр «Я»/)
    expect(aboutTexts.length).toBeGreaterThan(0)
    expect(screen.getByText('10 000+')).toBeInTheDocument() // Participants stat
  })

  it('Step 3: Festivals section shows upcoming event', () => {
    render(<HomePage />)
    expect(screen.getByText('Кино и Театр у моря')).toBeInTheDocument()
    expect(screen.getByText('8–11 апреля 2026')).toBeInTheDocument()
    expect(screen.getByText('Открыт прием заявок')).toBeInTheDocument()
    expect(screen.getByText('27 500 ₽')).toBeInTheDocument()
  })

  it('Step 4: Jury section builds trust with known experts', () => {
    render(<HomePage />)
    expect(screen.getByTestId('jury')).toBeInTheDocument()
    expect(screen.getByText('Дмитрий Чеботарёв')).toBeInTheDocument()
    expect(screen.getByText('Вениамин Фильштинский')).toBeInTheDocument()
    expect(screen.getByText(/ГИТИС, ВГИК, РГИСИ/)).toBeInTheDocument()
  })

  it('Step 5: Gallery shows atmosphere', () => {
    render(<HomePage />)
    expect(screen.getByTestId('gallery')).toBeInTheDocument()
    expect(screen.getByText('Атмосфера Я-Fest')).toBeInTheDocument()
  })

  it('Step 6: Contact form allows submitting application', async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: true })

    render(<HomePage />)

    // Fill form
    fireEvent.change(screen.getByPlaceholderText('Иван Иванов'), {
      target: { value: 'Мария Иванова' }
    })
    fireEvent.change(screen.getByPlaceholderText('+7 (___) ___-__-__'), {
      target: { value: '+79601234567' }
    })
    fireEvent.change(screen.getByPlaceholderText(/Театральная студия/), {
      target: { value: 'Театральная студия «Радуга»' }
    })
    fireEvent.change(screen.getByPlaceholderText(/Драматический спектакль/), {
      target: { value: 'Драматический спектакль' }
    })

    fireEvent.click(screen.getByTestId('submit-btn'))

    await waitFor(() => {
      expect(screen.getByText('Заявка отправлена!')).toBeInTheDocument()
    })
  })

  it('Full page has all sections in correct order', () => {
    render(<HomePage />)

    const main = screen.getByRole('main')
    const sections = ['home', 'about', 'festivals', 'jury', 'gallery', 'contacts']

    sections.forEach(id => {
      expect(main.querySelector(`#${id}`)).toBeInTheDocument()
    })
  })

  it('Footer shows copyright info', () => {
    render(<HomePage />)
    expect(screen.getByText(/2026 Продюсерский центр «Я»/)).toBeInTheDocument()
  })
})
