import { RESEND_API_KEY } from '$env/static/private';
import { sendWelcomeEmail } from '../emails/welcome';
import { sendResetPasswordEmail } from '../emails/reset-password';

const RESEND_API_URL = 'https://api.resend.com/emails';

// Generic email sending utility
export async function sendEmail({ to, subject, html }) {
  if (!RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set');
    return { success: false, error: 'Email service not configured' };
  }

  try {
    const response = await fetch(RESEND_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to,
        subject,
        html,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Resend API error:', data);
      return { success: false, error: data.message || 'Failed to send email' };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Email send failed:', error);
    return { success: false, error: 'Network or server error' };
  }
}

// Application-specific email triggers
export async function handleContactFormSubmission(email, name) {
  return await sendWelcomeEmail({ to: email, name });
}

// No password reset flow needed — stubbed for future
export async function sendPasswordResetLink(email, resetLink) {
  // Not used in this app
  return { success: true };
}