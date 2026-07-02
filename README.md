# Tanstrack — Marketing Website

Single-page marketing site for Tanstrack (TMS for freight brokerages, dispatch
operations, and carriers). Built with React + Vite, no other dependencies.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Deploy on Vercel (auto-deploy on every commit)

1. Push this folder to a GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Tanstrack website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/tanstrack-website.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) → **Add New → Project** → import the repo.
3. Vercel auto-detects Vite. Click **Deploy** — done.
4. From now on, every `git push` to `main` redeploys automatically.
5. To use your domain: Vercel project → **Settings → Domains** → add
   `tanstrack.com` and follow the DNS instructions.

## Wire up the demo form (email to hello@tanstrack.com)

1. Go to [web3forms.com](https://web3forms.com), enter `hello@tanstrack.com`,
   and copy the access key they email you.
2. Paste it into `src/config.js` → `web3formsKey`.
3. Commit and push. Submissions now arrive in your inbox (free tier ≈ 250/month).

Until the key is set, the form falls back to opening the visitor's mail client.

## Where to edit things

| What | Where |
|---|---|
| Email, LinkedIn, domain, form key | `src/config.js` |
| Colors, fonts, spacing | `src/index.css` (CSS variables at the top) |
| Hero copy + product mockup | `src/components/Hero.jsx` |
| Feature cards, steps | `src/components/Sections.jsx` |
| Broker/carrier columns, security | `src/components/Audience.jsx` |
| Pricing, CTA banner | `src/components/Pricing.jsx` |
| Demo form, footer | `src/components/Contact.jsx` |
| SEO / meta tags | `index.html` |

## Placeholders still to fill

- `[COMPANY_LINKEDIN_URL]` in `src/config.js`
- `web3formsKey` in `src/config.js`
- `[TESTIMONIAL]` — commented slot in `src/App.jsx`
