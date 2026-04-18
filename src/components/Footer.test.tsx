import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer Component', () => {
  it('renders copyright text with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`© ${year} Portfolio Site`, 'i'))).toBeInTheDocument()
  })

  it('renders social media links section', () => {
    render(<Footer />)
    expect(screen.getByText('Connect With Me')).toBeInTheDocument()
  })

  it('has link to GitHub profile', () => {
    render(<Footer />)
    const githubLink = screen.getByRole('link', { name: /GitHub/i })
    expect(githubLink).toHaveAttribute('href', 'https://github.com/username')
  })

  it('has link to LinkedIn profile', () => {
    render(<Footer />)
    const linkedinLink = screen.getByRole('link', { name: /LinkedIn/i })
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/username')
  })

  it('applies correct background and text color', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveClass('bg-[#f8f7f5]', 'text-[#1a1a1a]')
  })
})
---