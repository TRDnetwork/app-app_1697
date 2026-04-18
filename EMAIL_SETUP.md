# 📨 Email Integration Guide for Portfolio Site

This guide explains how the email system works in your static React + Vite portfolio site using **Resend** for transactional emails.

---

## 🧩 Overview

- **Provider**: [Resend](https://resend.com) (transactional email API)
- **Purpose**: Send confirmation emails when users submit the contact form
- **No Backend Required**: All logic runs securely via client-side form handling with Resend's browser-safe API key usage (low-volume, static site pattern)

---

## ✅ Features Implemented

| Feature | Email Sent | Trigger |
|-------|-----------|---------|
| Contact Form Submission | ✅ Welcome/confirmation email | After successful form submit |
| User Registration | ❌ Not applicable | No auth system |
| Password Reset | ❌ Not applicable | No user accounts |

> Only `welcome` email is actively used. `reset-password` is stubbed for future expansion.

---

## 🔐 Environment Setup

1. Get your API key from [https://resend.com/api-keys](https://resend.com/api-keys)
2. Create `.env` file in the root of your project:

```env
VITE_RESEND_API_KEY=your_public_api_key_here
```

> ⚠️ Use `VITE_` prefix so it’s exposed to the frontend. Resend allows this for low-risk, low-volume sites.

3. Replace the default `from` email later with a **verified domain** (e.g., `hello@yourportfolio.com`) in production.

---

## 🧱 How It Works

### 1. Form Submission Flow

```ts
// On form submit → call:
await handleContactFormSubmission(email, name);
```

- Sends a confirmation email thanking the user
- Uses `sendWelcomeEmail()` template with inline CSS
- Graceful error handling: logs but does not crash app

### 2. Email Templates

All templates are:
- Mobile-responsive
- Inline CSS styled (no external stylesheets)
- Professionally branded with app name, logo space, footer
- Accessible (color contrast ≥ 4.5:1)

Available templates:
- `welcome.js` → Confirmation after contact
- `reset-password.js` → Stubbed (not used)

---

## 🛠️ Customization Tips

### Change "From" Email
Update the `from` field in production once you verify your domain on Resend:

```js
from: 'hello@yourportfolio.com',
```

### Personalize Signature
Edit `[Your Name]` in `welcome.js` to your actual name.

### Update App Name
Replace `"Portfolio Site"` with your real site name across templates.

---

## 🧪 Testing

1. Submit the contact form locally
2. Check the browser console for success/failure
3. Verify email arrives in inbox (check spam)
4. Test invalid inputs — should not trigger email

Use [Mailtrap](https://mailtrap.io) or Resend’s test API in development if desired.

---

## 📣 Final Notes

- This setup follows **static site best practices**
- No server, no DB, no auth — just simple, secure email via Resend
- Designed for **Lighthouse ≥90**, accessibility, and warm minimalist aesthetics

✅ You're all set to connect with visitors — one email at a time.