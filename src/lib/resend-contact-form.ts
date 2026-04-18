import { sendEmail } from './email';

/**
 * Sends a confirmation email to the user after form submission
 */
export async function sendContactFormConfirmation(to: string, name: string): Promise<{ success: boolean; error?: string }> {
  const html = `
    <h1 style="color: #1a1a1a; font-family: Satoshi, sans-serif;">Hi ${name},</h1>
    <p style="color: #6b6b6b; font-family: Satoshi, sans-serif; line-height: 1.6;">
      Thanks for reaching out through my portfolio site. I'll review your message and get back to you as soon as possible.
    </p>
    <p style="color: #6b6b6b; font-family: Satoshi, sans-serif;">
      Best,<br/>
      [Your Name]
    </p>
  `;

  return sendEmail({
    to,
    subject: 'Thanks for contacting me!',
    html,
  });
}