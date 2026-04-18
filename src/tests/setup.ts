// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
}

// Mock scrollIntoView
Element.prototype.scrollIntoView = () => {}

// Mock fetch globally
global.fetch = global.fetch ?? require('node-fetch')

// Optional: Silence console.error during tests (uncomment if needed)
// console.error = () => {}
---