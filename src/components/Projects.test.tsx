import { render, screen } from '@testing-library/react'
import Projects from './Projects'

describe('Projects Component', () => {
  it('renders the section title correctly', () => {
    render(<Projects />)
    expect(screen.getByText('Featured Projects')).toBeInTheDocument()
  })

  it('renders exactly 3 project cards', () => {
    render(<Projects />)
    const cards = screen.getAllByRole('heading', { level: 3 })
    expect(cards).toHaveLength(3)
  })

  it('displays correct project titles', () => {
    render(<Projects />)
    expect(screen.getByText('TaskFlow')).toBeInTheDocument()
    expect(screen.getByText('DesignKit')).toBeInTheDocument()
    expect(screen.getByText('DataViz Studio')).toBeInTheDocument()
  })

  it('renders project descriptions', () => {
    render(<Projects />)
    expect(screen.getByText(/A productivity app that helps teams manage workflows/i)).toBeInTheDocument()
    expect(screen.getByText(/A Figma plugin that auto-generates design tokens/i)).toBeInTheDocument()
    expect(screen.getByText(/Interactive dashboard builder for non-technical users/i)).toBeInTheDocument()
  })

  it('has external links with proper attributes', () => {
    render(<Projects />)
    const links = screen.getAllByRole('link', { name: /View Project →/i })
    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })
})
---