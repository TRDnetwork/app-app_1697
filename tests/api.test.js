import { sendEmail } from '../src/lib/email'
import { sendContactFormConfirmation } from '../src/lib/resend-contact-form'

global.fetch = jest.fn()

describe('Email API Integration', () => {
  const mockFetch = global.fetch

  beforeEach(() => {
    mockFetch.mockClear()
  })

  it('attempts to send email with correct Resend API endpoint and headers', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ id: 'email_123', data: { id: 'email_123' } })
    })

    await sendEmail({
      to: 'test@example.com',
      subject: 'Test Subject',
      html: '<p>Test email</p>'
    })

    expect(mockFetch).toHaveBeenCalledWith(
      'https://api.resend.com/emails',
      expect.objectContaining({
        method: 'POST',
        headers: expect.objectContaining({
          'Authorization': 'Bearer undefined'
        })
      })
    )
  })

  it('includes correct payload in Resend API call', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ id: 'email_123', data: { id: 'email_123' } })
    })

    const payload = {
      to: 'client@client.com',
      subject: 'Hello',
      html: '<p>Message content</p>'
    }

    await sendEmail(payload)

    expect(mockFetch).toHaveBeenCalledWith(
      'https://api.resend.com/emails',
      expect.objectContaining({
        body: JSON.stringify({
          to: 'client@client.com',
          from: 'onboarding@resend.dev',
          subject: 'Hello',
          html: '<p>Message content</p>'
        })
      })
    )
  })

  it('sendContactFormConfirmation formats email with personalized content', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ id: 'email_123', data: { id: 'email_123' } })
    })

    await sendContactFormConfirmation('client@client.com', 'Alice')

    const expectedHtml = `
    <h1 style="color: #1a1a1a; font-family: Satoshi, sans-serif;">Hi Alice,</h1>
    <p style="color: #6b6b6b; font-family: Satoshi, sans-serif; line-height: 1.6;">
      Thanks for reaching out through my portfolio site. I'll review your message and get back to you as soon as possible.
    </p>
    <p style="color: #6b6b6b; font-family: Satoshi, sans-serif;">
      Best,<br/>
      [Your Name]
    </p>
  `

    expect(mockFetch).toHaveBeenCalledWith(
      'https://api.resend.com/emails',
      expect.objectContaining({
        body: expect.stringContaining(expectedHtml.trim())
      })
    )
  })

  it('returns error when Resend API call fails', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      json: () => Promise.resolve({ error: { message: 'Invalid API key' } })
    })

    const result = await sendEmail({
      to: 'test@example.com',
      subject: 'Test',
      html: '<p>Test</p>'
    })

    expect(result).toEqual({ success: false, error: 'Invalid API key' })
  })

  it('handles network errors during email sending', async () => {
    mockFetch.mockRejectedValueOnce(new Error('Network failed'))

    const result = await sendEmail({
      to: 'test@example.com',
      subject: 'Test',
      html: '<p>Test</p>'
    })

    expect(result).toEqual({ success: false, error: 'Failed to connect to email service' })
  })
})