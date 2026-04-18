# Security Scan Report
## Critical Issues
- [src/lib/email.js, line 1] Exposed API Keys: `RESEND_API_KEY` is imported from `$env/static/private` but used in frontend code. This is a critical security vulnerability as secrets should never be loaded via private env imports in a frontend-only Vite app. The key would be exposed in client-side bundles.
- [src/lib/email.js, line 11] Exposed API Keys: `RESEND_API_KEY` is used directly in frontend fetch request headers. This exposes the API key to anyone viewing page source or network tab.
- [src/emails/welcome.js, line 25] XSS (Cross-Site Scripting): `name` parameter is directly interpolated into HTML email template without sanitization.
- [src/emails/reset-password.js, line 25] XSS (Cross-Site Scripting): `name` parameter is directly interpolated into HTML email template without sanitization.
- [src/emails/reset-password.js, line 48] XSS (Cross-Site Scripting): `resetLink` parameter is directly interpolated into HTML email template without sanitization.

## Warnings
- [Contact.tsx, line 13] Insecure Dependencies: Using `@emailjs/browser` but not actually using it - package is installed but no valid configuration present.
- [index.html, line 11] CORS Misconfiguration: Tailwind CSS loaded from CDN with no Subresource Integrity (SRI) check.
- [index.html, line 12] CORS Misconfiguration: Google Fonts loaded with no SRI check.
- [Contact.tsx, line 48] Missing Rate Limiting: Contact form has no rate limiting protection.
- [vite.config.ts, line 10] Insecure Headers: No Content Security Policy (CSP) implemented.

## Passed Checks
- No SQL Injection vulnerabilities found
- No Path Traversal vulnerabilities found
- No Authentication Issues (appropriate for static site)
- No data exposure in error messages
- No obvious DOM-based XSS in main components