// ── Site configuration ─────────────────────────────────────────────
// Edit these values, commit, push — Vercel redeploys automatically.

export const CONFIG = {
  email: "hello@tanstrack.com",

  // Get a free access key at https://web3forms.com (tie it to your email).
  // Set it via VITE_WEB3FORMS_KEY in .env (locally) and in Vercel's
  // Environment Variables. While this is empty, the demo form falls back to
  // opening the visitor's mail client addressed to `email` above.
  web3formsKey: import.meta.env.VITE_WEB3FORMS_KEY || "",

  linkedinUrl: "https://www.linkedin.com/company/tanstrack/?viewAsMember=true",
  domain: "tanstrack.com",
  city: "Toronto, Canada",
  year: new Date().getFullYear(),
};
