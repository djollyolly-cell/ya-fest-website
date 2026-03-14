import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Nominations, theaterNominations, cinemaНоминации } from '../Nominations'

describe('Nominations', () => {
  it('renders the nominations section', () => {
    render(<Nominations />)
    expect(screen.getByTestId('nominations')).toBeInTheDocument()
  })

  it('displays section headings', () => {
    render(<Nominations />)
    expect(screen.getByText('Направления')).toBeInTheDocument()
    expect(screen.getByText('Номинации')).toBeInTheDocument()
  })

  it('renders theater and cinema tabs', () => {
    render(<Nominations />)
    expect(screen.getByTestId('tab-theater')).toBeInTheDocument()
    expect(screen.getByTestId('tab-cinema')).toBeInTheDocument()
  })

  it('theater tab is active by default', () => {
    render(<Nominations />)
    const theaterTab = screen.getByTestId('tab-theater')
    expect(theaterTab.className).toContain('bg-primary')
  })

  it('shows theater nominations by default', () => {
    render(<Nominations />)
    const cards = screen.getAllByTestId('nomination-card')
    expect(cards).toHaveLength(theaterNominations.length)
    theaterNominations.forEach((nom) => {
      expect(screen.getByText(nom.title)).toBeInTheDocument()
    })
  })

  it('switches to cinema nominations on tab click', () => {
    render(<Nominations />)
    fireEvent.click(screen.getByTestId('tab-cinema'))
    const cards = screen.getAllByTestId('nomination-card')
    expect(cards).toHaveLength(cinemaНоминации.length)
    cinemaНоминации.forEach((nom) => {
      expect(screen.getByText(nom.title)).toBeInTheDocument()
    })
  })

  it('cinema tab becomes active after click', () => {
    render(<Nominations />)
    fireEvent.click(screen.getByTestId('tab-cinema'))
    const cinemaTab = screen.getByTestId('tab-cinema')
    expect(cinemaTab.className).toContain('bg-secondary')
  })

  it('switches back to theater tab', () => {
    render(<Nominations />)
    fireEvent.click(screen.getByTestId('tab-cinema'))
    fireEvent.click(screen.getByTestId('tab-theater'))
    const cards = screen.getAllByTestId('nomination-card')
    expect(cards).toHaveLength(theaterNominations.length)
  })

  it('shows card descriptions', () => {
    render(<Nominations />)
    theaterNominations.forEach((nom) => {
      expect(screen.getByText(nom.desc)).toBeInTheDocument()
    })
  })

  it('theater nominations has 3 items', () => {
    expect(theaterNominations).toHaveLength(3)
  })

  it('cinema nominations has 4 items', () => {
    expect(cinemaНоминации).toHaveLength(4)
  })

  it('renders nominations grid', () => {
    render(<Nominations />)
    expect(screen.getByTestId('nominations-grid')).toBeInTheDocument()
  })
})
