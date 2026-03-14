/**
 * Unit tests for api/contact.ts — Vercel serverless function.
 * Tests: HTTP methods, honeypot, message formatting, Telegram API, errors.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import handler from '../contact'

// Mock fetch for Telegram API calls
const mockFetch = vi.fn()
global.fetch = mockFetch

function makeRequest(method: string, body?: object): Request {
  return new Request('https://ya-fest.ru/api/contact', {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  })
}

const validData = {
  name: 'Мария Иванова',
  phone: '+7 (960) 134-34-00',
  collective: 'Театр Солнце',
  direction: 'theater',
  age_group: 'under_11',
  nomination: 'Драматический спектакль',
}

describe('API: /api/contact', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
    mockFetch.mockReset()
  })

  it('rejects non-POST requests with 405', async () => {
    const req = new Request('https://ya-fest.ru/api/contact', { method: 'GET' })
    const res = await handler(req)
    expect(res.status).toBe(405)
    const json = await res.json()
    expect(json.error).toBe('Method not allowed')
  })

  it('returns Content-Type: application/json for all responses', async () => {
    const req = new Request('https://ya-fest.ru/api/contact', { method: 'GET' })
    const res = await handler(req)
    expect(res.headers.get('Content-Type')).toBe('application/json')
  })

  it('silently accepts honeypot-filled requests (returns 200 without sending)', async () => {
    const req = makeRequest('POST', { ...validData, website: 'spam-bot.com' })
    const res = await handler(req)
    expect(res.status).toBe(200)
    const json = await res.json()
    expect(json.ok).toBe(true)
    // Should NOT call Telegram API
    expect(mockFetch).not.toHaveBeenCalled()
  })

  it('sends correctly formatted message to Telegram on valid submission', async () => {
    mockFetch.mockResolvedValue({ ok: true })
    const req = makeRequest('POST', validData)
    const res = await handler(req)

    expect(res.status).toBe(200)
    expect(mockFetch).toHaveBeenCalledTimes(1)

    const [url, options] = mockFetch.mock.calls[0]
    expect(url).toContain('api.telegram.org/bot')
    expect(url).toContain('/sendMessage')
    expect(options.method).toBe('POST')

    const body = JSON.parse(options.body)
    expect(body.parse_mode).toBe('HTML')
    expect(body.text).toContain('Новая заявка на фестиваль')
    expect(body.text).toContain('Мария Иванова')
    expect(body.text).toContain('+7 (960) 134-34-00')
    expect(body.text).toContain('Театр Солнце')
    expect(body.text).toContain('Театральное искусство')
    expect(body.text).toContain('до 11 лет')
    expect(body.text).toContain('Драматический спектакль')
  })

  it('maps direction enum to Russian text', async () => {
    mockFetch.mockResolvedValue({ ok: true })
    const req = makeRequest('POST', { ...validData, direction: 'cinema' })
    await handler(req)

    const body = JSON.parse(mockFetch.mock.calls[0][1].body)
    expect(body.text).toContain('Киноискусство')
  })

  it('maps age_group enum to Russian text', async () => {
    mockFetch.mockResolvedValue({ ok: true })

    const ageTests = [
      { age_group: 'under_11', expected: 'до 11 лет' },
      { age_group: '12-16', expected: '12-16 лет' },
      { age_group: '17plus', expected: '17+ лет' },
      { age_group: 'mixed', expected: 'Смешанная' },
    ]

    for (const { age_group, expected } of ageTests) {
      mockFetch.mockClear()
      const req = makeRequest('POST', { ...validData, age_group })
      await handler(req)
      const body = JSON.parse(mockFetch.mock.calls[0][1].body)
      expect(body.text).toContain(expected)
    }
  })

  it('returns 500 when Telegram API fails', async () => {
    mockFetch.mockResolvedValue({ ok: false, status: 500 })
    const req = makeRequest('POST', validData)
    const res = await handler(req)
    expect(res.status).toBe(500)
    const json = await res.json()
    expect(json.error).toBe('Failed to send notification')
  })

  it('returns 500 on malformed JSON body', async () => {
    const req = new Request('https://ya-fest.ru/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: 'not-json',
    })
    const res = await handler(req)
    expect(res.status).toBe(500)
    const json = await res.json()
    expect(json.error).toBe('Internal server error')
  })

  it('returns 500 when fetch throws network error', async () => {
    mockFetch.mockRejectedValue(new Error('Network error'))
    const req = makeRequest('POST', validData)
    const res = await handler(req)
    expect(res.status).toBe(500)
  })

  it('accepts submission without honeypot field', async () => {
    mockFetch.mockResolvedValue({ ok: true })
    const { website, ...dataWithoutHoneypot } = { ...validData, website: undefined }
    const req = makeRequest('POST', dataWithoutHoneypot)
    const res = await handler(req)
    expect(res.status).toBe(200)
    expect(mockFetch).toHaveBeenCalledTimes(1)
  })
})
