import { render, screen } from '@testing-library/react'
import Hero from './Hero'

describe('Hero Component', () => {
  it('renders the name correctly', () => {
    render(<Hero />)
    expect(screen.getByText('Jane Doe')).toBeInTheDocument()
  })

  it('renders the role/title correctly', () => {
    render(<Hero />)
    expect(
      screen.getByText(/Full-Stack Developer & UI Designer crafting thoughtful digital experiences/i)
    ).toBeInTheDocument()
  })

  it('applies correct heading level and styling', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveClass('text-4xl', 'md:text-5xl')
  })

  it('has centered text alignment', () => {
    render(<Hero />)
    const section = screen.getByRole('heading', { level: 1 }).parentElement
    expect(section).toHaveClass('text-center')
  })
})
---