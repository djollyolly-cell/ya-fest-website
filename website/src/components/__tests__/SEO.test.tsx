import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { SEO } from '../SEO'

describe('SEO', () => {
  it('renders title tag', () => {
    render(<SEO title="Тестовая страница" description="Описание" />)
    expect(document.title).toBe('Тестовая страница')
  })

  it('renders meta description', () => {
    render(<SEO title="Тест" description="Тестовое описание страницы" />)
    const meta = document.querySelector('meta[name="description"]')
    expect(meta).not.toBeNull()
    expect(meta?.getAttribute('content')).toBe('Тестовое описание страницы')
  })

  it('renders og:title', () => {
    render(<SEO title="Тест" description="Описание" ogTitle="OG Заголовок" />)
    const og = document.querySelector('meta[property="og:title"]')
    expect(og).not.toBeNull()
    expect(og?.getAttribute('content')).toBe('OG Заголовок')
  })

  it('uses title as fallback for og:title', () => {
    render(<SEO title="Фоллбэк" description="Описание" />)
    const og = document.querySelector('meta[property="og:title"]')
    expect(og?.getAttribute('content')).toBe('Фоллбэк')
  })

  it('renders og:description', () => {
    render(<SEO title="Тест" description="Описание" ogDescription="OG Описание" />)
    const og = document.querySelector('meta[property="og:description"]')
    expect(og?.getAttribute('content')).toBe('OG Описание')
  })

  it('renders canonical link when provided', () => {
    render(<SEO title="Тест" description="Описание" canonicalUrl="https://ya-fest.ru/" />)
    const link = document.querySelector('link[rel="canonical"]')
    expect(link).not.toBeNull()
    expect(link?.getAttribute('href')).toBe('https://ya-fest.ru/')
  })

  it('does not render canonical link when not provided', () => {
    render(<SEO title="Тест" description="Описание" />)
    const link = document.querySelector('link[rel="canonical"]')
    expect(link).toBeNull()
  })

  it('renders JSON-LD structured data when provided', () => {
    const jsonLd = { "@context": "https://schema.org", "@type": "Organization", name: "Я-Fest" }
    render(<SEO title="Тест" description="Описание" jsonLd={jsonLd} />)
    const script = document.querySelector('script[type="application/ld+json"]')
    expect(script).not.toBeNull()
    expect(JSON.parse(script!.textContent!)).toEqual(jsonLd)
  })

  it('does not render JSON-LD when not provided', () => {
    render(<SEO title="Тест" description="Описание" />)
    const script = document.querySelector('script[type="application/ld+json"]')
    expect(script).toBeNull()
  })
})
