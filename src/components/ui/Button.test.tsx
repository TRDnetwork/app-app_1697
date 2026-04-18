import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from './Button'

describe('Button Component', () => {
  it('renders children correctly', () => {
    render(<Button>Click Me</Button>)
    expect(screen.getByText('Click Me')).toBeInTheDocument()
  })

  it('applies primary styling classes', () => {
    render(<Button>Submit</Button>)
    const button = screen.getByText('Submit')
    expect(button).toHaveClass('bg-[#3a5a40]', 'text-white', 'hover:bg-[#2d4633]')
  })

  it('shows loading state when disabled', () => {
    render(<Button disabled>Submitting...</Button>)
    const button = screen.getByText('Submitting...')
    expect(button).toBeDisabled()
    expect(button).toHaveClass('disabled:opacity-60', 'disabled:cursor-not-allowed')
  })

  it('triggers onClick when clicked', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click</Button>)
    fireEvent.click(screen.getByText('Click'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
---