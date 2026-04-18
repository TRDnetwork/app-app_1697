import { render, screen, fireEvent } from '@testing-library/react'
import Contact from './Contact'

describe('Contact Component', () => {
  it('renders the form title correctly', () => {
    render(<Contact />)
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
  })

  it('has name, email, and message fields', () => {
    render(<Contact />)
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument()
  })

  it('shows error message when name is empty on submit', async () => {
    render(<Contact />)
    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }))
    expect(await screen.findByText('Name is required')).toBeInTheDocument()
  })

  it('shows error message for invalid email format', async () => {
    render(<Contact />)
    const emailInput = screen.getByLabelText(/Email/i)
    fireEvent.change(emailInput, { target: { value: 'not-an-email' } })
    fireEvent.blur(emailInput)
    expect(await screen.findByText('Invalid email address')).toBeInTheDocument()
  })

  it('requires message to be at least 10 characters', async () => {
    render(<Contact />)
    const messageInput = screen.getByLabelText(/Message/i)
    fireEvent.change(messageInput, { target: { value: 'short' } })
    fireEvent.blur(messageInput)
    expect(await screen.findByText('Message must be at least 10 characters')).toBeInTheDocument()
  })
})
---