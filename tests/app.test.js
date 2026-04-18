import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../src/App'
import { BrowserRouter } from 'react-router-dom'

describe('Portfolio App', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
  })

  it('displays the hero section with correct name and role', () => {
    expect(screen.getByText('Jane Doe')).toBeInTheDocument()
    expect(screen.getByText(/Full-Stack Developer & UI Designer/)).toBeInTheDocument()
  })

  it('renders the about section with correct content', () => {
    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByText(/I'm a passionate developer with over 5 years/)).toBeInTheDocument()
  })

  it('shows three project cards with correct titles and links', () => {
    expect(screen.getByText('TaskFlow')).toBeInTheDocument()
    expect(screen.getByText('DesignKit')).toBeInTheDocument()
    expect(screen.getByText('DataViz Studio')).toBeInTheDocument()

    const links = screen.getAllByText('View Project →')
    expect(links).toHaveLength(3)
    links.forEach(link => {
      expect(link.closest('a')).toHaveAttribute('target', '_blank')
      expect(link.closest('a')).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  it('validates contact form and shows errors for empty submission', async () => {
    const submitButton = screen.getByRole('button', { name: /Send Message/i })
    fireEvent.click(submitButton)

    expect(await screen.findByText('Name is required')).toBeInTheDocument()
    expect(screen.getByText('Invalid email address')).toBeInTheDocument()
    expect(screen.getByText('Message must be at least 10 characters')).toBeInTheDocument()
  })

  it('submits contact form successfully with valid data', async () => {
    const user = userEvent.setup()

    await user.type(screen.getByLabelText(/Name/i), 'John Doe')
    await user.type(screen.getByLabelText(/Email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/Message/i), 'This is a test message with ten chars')

    const submitButton = screen.getByRole('button', { name: /Send Message/i })
    await user.click(submitButton)

    // Success is indicated by toast message
    expect(await screen.findByText('Message sent successfully!')).toBeInTheDocument()
  })
})