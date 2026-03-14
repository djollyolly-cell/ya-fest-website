import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Jury, juryMembers } from '../Jury'

describe('Jury', () => {
  it('renders the jury section', () => {
    render(<Jury />)
    expect(screen.getByTestId('jury')).toBeInTheDocument()
  })

  it('displays the section heading', () => {
    render(<Jury />)
    expect(screen.getByText('Звездный состав')).toBeInTheDocument()
    expect(screen.getByText('Наше жюри и эксперты')).toBeInTheDocument()
  })

  it('mentions key institutions', () => {
    render(<Jury />)
    expect(screen.getByText(/ГИТИС, ВГИК, РГИСИ/)).toBeInTheDocument()
  })

  it('renders all jury member cards', () => {
    render(<Jury />)
    const cards = screen.getAllByTestId('jury-card')
    expect(cards).toHaveLength(juryMembers.length)
  })

  it('displays jury member names', () => {
    render(<Jury />)
    juryMembers.forEach((member) => {
      expect(screen.getByText(member.name)).toBeInTheDocument()
    })
  })

  it('displays jury member roles', () => {
    render(<Jury />)
    const uniqueRoles = [...new Set(juryMembers.map(m => m.role))]
    uniqueRoles.forEach((role) => {
      const elements = screen.getAllByText(role)
      expect(elements.length).toBeGreaterThan(0)
    })
  })

  it('renders jury member images with alt text', () => {
    render(<Jury />)
    juryMembers.forEach((member) => {
      const img = screen.getByAltText(member.name)
      expect(img).toBeInTheDocument()
      expect(img.tagName).toBe('IMG')
    })
  })

  it('exports juryMembers with correct structure', () => {
    expect(juryMembers).toHaveLength(6)
    juryMembers.forEach((member) => {
      expect(member).toHaveProperty('name')
      expect(member).toHaveProperty('role')
      expect(member).toHaveProperty('description')
      expect(member).toHaveProperty('image')
      expect(member).toHaveProperty('color')
    })
  })
})
