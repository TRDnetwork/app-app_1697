/**
 * Welcome email sent after contact form submission
 */
export function sendWelcomeEmail({ to, name }) {
  const appName = "Portfolio Site";

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to ${appName}</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Satoshi', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8f7f5; color: #1a1a1a;">
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width: 640px; margin: 40px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        <!-- Header -->
        <tr>
          <td style="padding: 40px 24px 24px; text-align: center; background: linear-gradient(to bottom, #f8f7f5, #ffffff);">
            <h1 style="margin: 0; font-size: 28px; color: #3a5a40; font-weight: 600;">${appName}</h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding: 24px;">
            <h2 style="margin: 0 0 16px; font-size: 20px; color: #1a1a1a; font-weight: 600;">Hi ${name},</h2>
            <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6; color: #6b6b6b;">
              Thanks for reaching out through my portfolio site. I'll review your message and get back to you as soon as possible.
            </p>
            <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6; color: #6b6b6b;">
              This is just a confirmation that I’ve received your inquiry — no need to reply to this email.
            </p>
            <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #6b6b6b;">
              Best,<br>
              [Your Name]
            </p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding: 24px; text-align: center; font-size: 14px; color: #6b6b6b; border-top: 1px solid #eaeaea;">
            <p style="margin: 0 0 8px;">
              Sent from <a href="https://portfolio-site.example.com" style="color: #3a5a40; text-decoration: none; font-weight: 500;">${appName}</a>
            </p>
            <p style="margin: 0;">
              © ${new Date().getFullYear()} ${appName}. All rights reserved.
            </p>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  return { to, subject: `Thanks for contacting me`, html };
}