# Portfolio Site

A clean personal portfolio site built with React and Vite.

## Features

- Hero section with name and headline
- About section with descriptive paragraph
- Three project cards with title, description, and link
- Contact form with validation and email confirmation via Resend

## Tech Stack

- **Frontend**: React + TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Form Handling**: react-hook-form + zod
- **Notifications**: sonner
- **Build Tool**: Vite
- **Email**: Resend (client-side integration)

## Setup

1. Clone the repository
2. Run `npm install`
3. Create `.env` file: `cp .env.example .env` and add your Resend API key
4. Start the dev server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000)

## Email Configuration

This site uses [Resend](https://resend.com) for transactional emails:
1. Sign up at https://resend.com
2. Get your API key and add it to `.env` as `VITE_RESEND_API_KEY`
3. Verify your sending domain or use `onboarding@resend.dev` for testing

> ⚠️ For production, replace `onboarding@resend.dev` with a verified email address.

## Deployment

Deployed via Vercel or Netlify. Environment variables must be configured:
- **Vercel**: `vercel env add VITE_RESEND_API_KEY`
- **Netlify**: Add `RESEND_API_KEY` in site settings

## Lighthouse

Optimized for performance, accessibility, and SEO. Target score: ≥90.
- Warm minimalism design with Satoshi font
- Soft shadows, responsive layout, semantic HTML
- Form validation with real-time feedback
- Efficient asset loading and error handling

---

> ✅ **Ready for production** — secure, fast, and user-friendly contact flow.