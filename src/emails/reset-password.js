/**
 * Stubbed reset password email (not used in this app)
 */
export function sendResetPasswordEmail({ to, resetLink }) {
  const appName = "Portfolio Site";

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Reset Your Password</title>
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
            <h2 style="margin: 0 0 16px; font-size: 20px; color: #1a1a1a; font-weight: 600;">Reset Your Password</h2>
            <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6; color: #6b6b6b;">
              You requested to reset your password. Click the button below to create a new one.
            </p>
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td style="padding: 16px 0;">
                  <a href="${resetLink}" style="background-color: #3a5a40; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-size: 16px; font-weight: 500; display: inline-block;">
                    Reset Password
                  </a>
                </td>
              </tr>
            </table>
            <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6; color: #6b6b6b;">
              If you didn’t request this, you can safely ignore this email.
            </p>
            <p style="margin: 0; font-size: 14px; color: #6b6b6b;">
              This link expires in 1 hour.
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

  return { to, subject: `Reset your password`, html };
}