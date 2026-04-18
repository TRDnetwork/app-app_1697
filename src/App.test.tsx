import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

describe('App Component', () => {
  it('renders the main layout with all sections', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    expect(screen.getByText('Jane Doe')).toBeInTheDocument()
    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByText('Featured Projects')).toBeInTheDocument()
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
  })

  it('renders Toaster component for notifications', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    // Toaster doesn't render visible content but adds aria-live regions
    const toastContainer = document.querySelector('[data-sonner-toaster]')
    expect(toastContainer).toBeInTheDocument()
  })

  it('applies correct layout container styles', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const main = screen.getByRole('main')
    expect(main).toHaveClass('max-w-4xl', 'mx-auto', 'px-6', 'py-12')
  })
})
---