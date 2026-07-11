# TansTrack — marketing site

Static one-pager for [tanstrack.com](https://tanstrack.com), built with Astro.
No framework runtime ships to the browser — the whole page is ~12KB gzipped
(HTML + CSS + JS) plus four small font subsets.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs dist/
npm run preview    # serve dist/
```

## Deploy

Vercel, auto-deploy on push to `main` (framework preset: Astro).
Set `PUBLIC_WEB3FORMS_KEY` in Vercel → Settings → Environment Variables
(same value as local `.env`). Without it the demo form falls back to opening
the visitor's mail client.

## Where to edit things

| What | Where |
|---|---|
| **All copy** (headlines, claims, ledger rows, form labels) | `src/copy.ts` |
| Colors, spacing, motion tokens, shared styles | `src/styles/tokens.css` |
| The lane-map hero graphic | `src/components/LaneMap.astro` |
| Section layouts | `src/components/*.astro` |
| SEO meta, JSON-LD, favicons | `src/layouts/Base.astro` |
| OG share image | `public/og.png` (1200×630) |

## The one rule for copy

**Every capability claim must be true in the TMS codebase.** The current copy
is verified against the app (Excel import, bulk edit ≤200 all-or-nothing,
undo toast, AR/AP, same-transaction append-only audit, Bank of Canada FX
stamping, per-load P&L, tenant isolation, RBAC, AWS ca-central-1).
Known **not** to exist as of 2026-07: PDF rate-con import, real-time sync,
emailed tenders, per-load document storage — don't claim them until built.

## Screenshots

Product figures are marked slots (`SCREENSHOT SLOT · …`) until real captures
exist. To fill one: capture from the app with **seeded fictional data**
(never real client names), save under `src/assets/`, and pass
`src`/`width`/`height` to the `<Plate>` in `src/components/Transit.astro`.
Slots are 16:10.

## Design system (short version)

Two worlds, one seam: **asphalt** (night, operations) above, **manifest
paper** (money) below — the page crosses at "Delivered", because delivery is
where dispatch hands off to accounting. Blue `#1b5bf9` = movement and
interaction. Amber `#ffb020` = money, nothing else. Type: Overpass 800
(display — digitized US highway signage), Public Sans (body), Martian Mono
(all data/chips/ledger; it's derived from Space Grotesk, the wordmark face).
Motion: one easing (`--ease-arrive`), one duration scale, ambient motion only
in the hero map; everything respects `prefers-reduced-motion`.

Fonts are self-hosted latin subsets in `public/fonts/` with metric-matched
fallbacks (no layout shift while loading). The wordmark font is Space Grotesk
600 subset to the nine letters of "tanstrack" (1.1KB).

## Regenerating og.png

It's a 1200×630 screenshot of a small HTML card. If you change the headline,
easiest path: ask Claude to re-render it, or rebuild any 1200×630 dark card
using the tokens above and screenshot it.
