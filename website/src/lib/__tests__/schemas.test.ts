import { describe, it, expect } from 'vitest'
import { applicationSchema } from '../schemas'

describe('applicationSchema', () => {
  const validData = {
    name: 'Иван Иванов',
    phone: '+7 (999) 123-45-67',
    collective: 'Студия Браво',
    direction: 'theater' as const,
    age_group: 'under_11' as const,
    nomination: 'Драматический спектакль',
  }

  it('accepts valid complete data', () => {
    const result = applicationSchema.safeParse(validData)
    expect(result.success).toBe(true)
  })

  it('accepts all direction values', () => {
    for (const direction of ['theater', 'cinema'] as const) {
      const result = applicationSchema.safeParse({ ...validData, direction })
      expect(result.success).toBe(true)
    }
  })

  it('accepts all age_group values', () => {
    for (const age_group of ['under_11', '12-16', '17plus', 'mixed'] as const) {
      const result = applicationSchema.safeParse({ ...validData, age_group })
      expect(result.success).toBe(true)
    }
  })

  it('rejects name shorter than 2 characters', () => {
    const result = applicationSchema.safeParse({ ...validData, name: 'А' })
    expect(result.success).toBe(false)
  })

  it('rejects empty name', () => {
    const result = applicationSchema.safeParse({ ...validData, name: '' })
    expect(result.success).toBe(false)
  })

  it('rejects invalid phone format', () => {
    const result = applicationSchema.safeParse({ ...validData, phone: '12345' })
    expect(result.success).toBe(false)
  })

  it('accepts phone without spaces', () => {
    const result = applicationSchema.safeParse({ ...validData, phone: '+7(999)123-45-67' })
    expect(result.success).toBe(true)
  })

  it('accepts phone with dashes', () => {
    const result = applicationSchema.safeParse({ ...validData, phone: '+7-999-123-45-67' })
    expect(result.success).toBe(true)
  })

  it('rejects collective shorter than 2 characters', () => {
    const result = applicationSchema.safeParse({ ...validData, collective: 'А' })
    expect(result.success).toBe(false)
  })

  it('rejects nomination shorter than 2 characters', () => {
    const result = applicationSchema.safeParse({ ...validData, nomination: 'Д' })
    expect(result.success).toBe(false)
  })

  it('rejects invalid direction enum', () => {
    const result = applicationSchema.safeParse({ ...validData, direction: 'dance' })
    expect(result.success).toBe(false)
  })

  it('rejects invalid age_group enum', () => {
    const result = applicationSchema.safeParse({ ...validData, age_group: 'toddler' })
    expect(result.success).toBe(false)
  })

  it('accepts empty website (honeypot)', () => {
    const result = applicationSchema.safeParse({ ...validData, website: '' })
    expect(result.success).toBe(true)
  })

  it('accepts undefined website (honeypot)', () => {
    const result = applicationSchema.safeParse({ ...validData })
    expect(result.success).toBe(true)
  })

  it('rejects non-empty website (honeypot triggered)', () => {
    const result = applicationSchema.safeParse({ ...validData, website: 'http://spam.com' })
    expect(result.success).toBe(false)
  })
})
