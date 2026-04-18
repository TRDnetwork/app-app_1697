// This is a stub file to indicate that authentication is intentionally not implemented.
// This is a static portfolio site with no user sessions, roles, or protected routes.
// Contact form is handled client-side via Resend (see contact form component).

export const auth = {
  isAuthenticated: false,
  getUser: () => null,
  login: () => Promise.reject(new Error("Authentication is not supported on this site.")),
  logout: () => {},
  onAuthStateChange: () => {},
};

// No Supabase auth client initialized.
// No session management needed.
// All content is publicly accessible.