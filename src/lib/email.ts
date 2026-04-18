import { z } from 'zod';

// Environment variable is exposed to frontend via Vite (safe for Resend on static sites)
const RESEND_API_KEY = import.meta.env.VITE_RESEND_API_KEY;

// Request/Response validation schemas
const SendEmailRequestSchema = z.object({
  to: z.string().email(),
  from: z.string().email(),
  subject: z.string().min(1).max(100),
  html: z.string().min(10),
});

const SendEmailResponseSchema = z.object({
  id: z.string(),
  data: z.object({
    id: z.string(),
  }),
  error: z.nullable(z.any()),
});

type SendEmailRequest = z.infer<typeof SendEmailRequestSchema>;
type SendEmailResponse = z.infer<typeof SendEmailResponseSchema>;

const RESEND_API_URL = 'https://api.resend.com/emails';

/**
 * Typed, secure email sender using Resend API
 * Uses exponential backoff retry logic and structured error handling
 */
export async function sendEmail(payload: Omit<SendEmailRequest, 'from'>): Promise<{ success: boolean; error?: string }> {
  const validatedPayload = SendEmailRequestSchema.safeParse({
    ...payload,
    from: 'onboarding@resend.dev', // Replace with your verified sender in production
  });

  if (!validatedPayload.success) {
    console.error('Invalid email payload:', validatedPayload.error);
    return { success: false, error: 'Invalid data provided' };
  }

  const { to, subject, html } = validatedPayload.data;

  // Exponential backoff config
  const MAX_RETRIES = 3;
  const BASE_DELAY = 1000; // 1 second

  for (let i = 0; i <= MAX_RETRIES; i++) {
    try {
      const response = await fetch(RESEND_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({ to, from: 'onboarding@resend.dev', subject, html }),
      });

      const data: unknown = await response.json();
      const parsedResponse = SendEmailResponseSchema.safeParse(data);

      if (!response.ok || parsedResponse.success === false || data === null) {
        const errorMsg = parsedResponse.success
          ? (data as { error?: { message?: string } }).error?.message || 'Email send failed'
          : 'Invalid response from email service';

        if (i === MAX_RETRIES) {
          console.error('Max retries exceeded for email send:', errorMsg);
          return { success: false, error: errorMsg };
        }

        // Exponential backoff
        await new Promise(resolve => setTimeout(resolve, BASE_DELAY * Math.pow(2, i)));
        continue;
      }

      return { success: true };
    } catch (error) {
      if (i === MAX_RETRIES) {
        console.error('Network or server error after retries:', error);
        return { success: false, error: 'Failed to connect to email service' };
      }

      await new Promise(resolve => setTimeout(resolve, BASE_DELAY * Math.pow(2, i)));
    }
  }

  // This line should never be reached due to loop control
  return { success: false, error: 'Unexpected error in email delivery' };
}