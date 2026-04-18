# Portfolio App Tests

## How to Run
1. Install dependencies: `npm install`
2. Run tests: `npm test`
3. Run with coverage: `npm run test:coverage`

## Test Coverage
- `app.test.js`: Tests the main UI components and user flows
  - Hero section rendering
  - About section content
  - Project cards display and links
  - Contact form validation and submission
- `api.test.js`: Tests the email integration with Resend API
  - API endpoint and headers
  - Request payload structure
  - Success and error handling
  - Retry logic (indirectly through error cases)