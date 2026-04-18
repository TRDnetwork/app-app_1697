import { render, screen } from '@testing-library/react'
import About from './About'

describe('About Component', () => {
  it('renders the section title correctly', () => {
    render(<About />)
    expect(screen.getByText('About Me')).toBeInTheDocument()
  })

  it('renders the about paragraph text', () => {
    render(<About />)
    expect(screen.getByText(/I'm a passionate developer with over 5 years/i)).toBeInTheDocument()
  })

  it('uses correct heading level for section title', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: 'About Me' })).toBeInTheDocument()
  })

  it('applies bottom border to title', () => {
    render(<About />)
    const title = screen.getByText('About Me')
    expect(title).toHaveClass('border-b', 'pb-2', 'border-[#e0e0e0]')
  })
})
---