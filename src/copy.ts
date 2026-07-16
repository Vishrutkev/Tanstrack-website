// ── Every string on the site lives here. ───────────────────────────
// Rule: every capability claim must be verifiable in the TMS codebase.
// See README "Editing copy". Do not add claims without verifying.

export const SITE = {
  name: 'TansTrack',
  wordmark: 'tanstrack', // lowercase, per logo kit
  domain: 'tanstrack.com',
  url: 'https://tanstrack.com',
  appUrl: 'https://app.tanstrack.com',
  email: 'hello@tanstrack.com',
  linkedin: 'https://www.linkedin.com/company/tanstrack/',
  city: 'Toronto, Canada',
  title: 'TansTrack — TMS for freight brokerages',
  description:
    'TansTrack is the TMS freight brokerages run on: loads built from rate-con Excels, dispatched and edited at grid speed, invoiced in CAD or USD with the Bank of Canada rate locked per event — and every change on the record.',
  ogTitle: 'TansTrack — From rate con to paid.',
  ogDescription:
    'One system for the load and the money: Excel import, grid-speed dispatch, CAD/USD locked per event, every change on the record.',
};

// The one load whose journey structures the page.
export const LOAD = {
  id: 'LD-2481',
  lane: 'TOR → CHI',
  chips: {
    dispatched: ['LD-2481', 'DISPATCHED', 'TOR 04:12'],
    transit: ['LD-2481', 'IN TRANSIT', 'I-90 W'],
    delivered: ['LD-2481', 'DELIVERED', 'CHI 19:47'],
    invoiced: ['LD-2481', 'INVOICED', 'USD→CAD @ 1.3642 · BOC'],
    roadmap: ['NEXT LANES', 'IN DEVELOPMENT'],
    paid: ['LD-2481', 'PAID', 'SETTLED'],
  },
};

export const NAV = {
  links: [
    { href: '#product', label: 'Product' },
    { href: '#teams', label: 'Who it’s for' },
    { href: '#trust', label: 'Trust' },
    { href: '#roadmap', label: 'Roadmap' },
    { href: '#faq', label: 'FAQ' },
    { href: '#demo', label: 'Contact' },
  ],
  login: { href: 'https://app.tanstrack.com', label: 'Log in' },
  cta: { href: '#demo', label: 'Request a demo' },
};

export const HERO = {
  h1: 'From rate con to paid.',
  sub: 'TansTrack is the TMS your brokerage runs on: loads built straight from the rate-con Excels you already get, dispatched and edited at grid speed, invoiced in CAD or USD with the exchange rate locked to the event — and every change on the record.',
  ctaPrimary: { href: '#demo', label: 'Request a demo' },
  ctaSecondary: { href: '#product', label: 'Follow the load ↓' },
};

// Verified product facts — each traces to the TMS codebase. Rendered
// as the manifest strip under the hero.
export const FACTS = {
  aria: 'Product facts',
  items: [
    { n: '200', label: 'loads per bulk edit · all or nothing', count: true },
    { n: '100%', label: 'of changes carry their audit row', count: true },
    { n: '0', label: 'floats ever touch a dollar', count: false },
    { n: 'CA', label: 'built & hosted in Canada · aws ca-central-1', count: false },
  ],
};

export const TRANSIT = {
  id: 'product',
  status: '02 · IN TRANSIT',
  h2: 'The day, at grid speed.',
  lede: 'Dispatch lives in one keyboard-first grid — built to move at the pace of a phone that never stops ringing.',
  blocks: [
    {
      title: 'Excel in, loads out.',
      body: 'Drop in the sheet you already get. TansTrack maps the columns and builds the loads — no retyping.',
    },
    {
      title: 'Edit 200 loads in one move.',
      body: 'Bulk edits apply in a single all-or-nothing transaction: all of them change, or none do.',
    },
    {
      title: 'Undo, not “are you sure?”.',
      body: 'Every save shows an Undo toast; only money-moving changes ask first. Deleted loads sit in Recently Deleted until you restore them.',
    },
  ],
  figures: [
    { n: 'FIG. 01', caption: 'LOADS GRID · KEYBOARD-FIRST · VIRTUALIZED', slot: 'loads-grid' },
    { n: 'FIG. 02', caption: 'EXCEL IMPORT · COLUMNS MAPPED, LOADS BUILT', slot: 'excel-import' },
    { n: 'FIG. 03', caption: 'BULK EDIT · 200 LOADS · ONE TRANSACTION', slot: 'bulk-edit' },
  ],
  note: 'Figures drawn from the product — layout true, data illustrative.',
};

// ── Product vignettes (the three figures above) ─────────────────────
// Layout true, data illustrative. Every company and person here is
// fictional — real tenant/client names must never appear.
export const VIZ = {
  grid: {
    title: 'LOADS · JUNE',
    tools: ['IMPORT XLSX', '? SHORTCUTS'],
    cols: ['LOAD', 'LANE', 'CARRIER', 'STATUS', 'RATE USD'],
    rows: [
      ['LD-2478', 'TOR → MTL', 'Northline Xpress', 'DELIVERED', '1,420.00'],
      ['LD-2479', 'BUF → TOR', 'GreatLakes Carriers', 'IN TRANSIT', '980.00'],
      ['LD-2480', 'TOR → DAL', 'Prairie Route Co.', 'DISPATCHED', '3,150.00'],
      ['LD-2481', 'TOR → CHI', 'Maplecrest Haulage', 'DISPATCHED', '1,790.00'],
      ['LD-2482', 'MTL → NJ', 'Harbourline Freight', 'IN TRANSIT', '1,660.00'],
      ['LD-2483', 'CHI → ATL', 'Bluewater Logistics', 'DELIVERED', '2,240.00'],
    ],
    focusRow: 3, // LD-2481 — status flips DISPATCHED → IN TRANSIT
    flipTo: 'IN TRANSIT',
    toast: ['Saved · 1 field', 'UNDO'],
  },
  xlsx: {
    file: 'june_rate_cons.xlsx',
    sheetCols: ['PU CITY', 'DEL CITY', 'RATE'],
    sheetRows: [
      ['TOR', 'CHI', '1,790'],
      ['TOR', 'MTL', '1,420'],
      ['BUF', 'TOR', '980'],
    ],
    fields: [
      ['ORIGIN', 'Toronto, ON'],
      ['DESTINATION', 'Chicago, IL'],
      ['CARRIER RATE', '1,790.00 USD'],
    ],
    result: '42 LOADS BUILT · 0 RETYPED',
  },
  bulk: {
    banner: '200 SELECTED',
    change: 'PICKUP +1 DAY',
    dateFrom: 'JUL 14',
    dateTo: 'JUL 15',
    // one origin, one storm — the classic reason for a 200-load edit
    ids: ['LD-2490', 'LD-2491', 'LD-2492', 'LD-2493', 'LD-2494', 'LD-2495', 'LD-2496', 'LD-2497'],
    lanes: ['TOR → CHI', 'TOR → MTL', 'TOR → NJ', 'TOR → CHI', 'TOR → BUF', 'TOR → ATL', 'TOR → CHI', 'TOR → DAL'],
    more: '+ 192 MORE',
    toast: ['200 updated · one transaction', 'UNDO'],
  },
};

export const HANDOFF = {
  id: 'teams',
  status: '03 · DELIVERED',
  h2: 'Delivered is a handoff.',
  lede: 'The moment a load delivers, it changes departments. TansTrack is built so nothing falls in the gap.',
  road: {
    label: 'THE ROAD SIDE',
    title: 'Dispatch',
    items: [
      'A keyboard-first grid with a shortcuts overlay — hands never leave the keys.',
      'Bulk edit with an Undo toast, not a confirmation maze.',
      'Tender and confirmation PDFs generated per carrier, branded to your company.',
    ],
  },
  office: {
    label: 'THE OFFICE SIDE',
    title: 'Accounting',
    items: [
      'AR and AP ledgers per load, with partial carrier payments tracked.',
      'Invoice packages built from the loads you already run.',
      'USD/CAD stamped with the Bank of Canada rate at each event’s date — never today’s.',
    ],
  },
  owner: {
    label: 'OWNERS — READS ACROSS BOTH',
    body: 'P&L per load — revenue, carrier cost, profit, margin — with breakdowns by customer, carrier, and lane. Monthly matrix, period comparisons, reconciliation checks, Excel and PDF exports. Visible to admins only.',
  },
  seam: 'THE HANDOFF · ROAD → OFFICE',
};

export const TRUST = {
  id: 'trust',
  status: '04 · INVOICED',
  h2: 'Money, on the record.',
  lede: 'The quiet machinery underneath — the part serious buyers ask about.',
  points: [
    {
      title: 'The audit isn’t a log — it’s part of the write.',
      body: 'A change and its audit row commit in the same transaction. If the audit can’t be written, the change doesn’t happen.',
    },
    {
      title: 'Append-only history.',
      body: 'Audit rows are never updated or deleted — the API has no way to. There’s a test that fails if anyone tries.',
    },
    {
      title: 'FX you can defend.',
      body: 'Bank of Canada USD/CAD rates, stamped onto each financial event when it happens. Realized gain or loss is its own line, not a rounding surprise.',
    },
    {
      title: 'Money is decimal.',
      body: 'Amounts are stored and computed as decimals. Float never touches a dollar.',
    },
  ],
  bar: [
    'Tenant isolation on every table and every query',
    'Roles enforced on the server, not in the browser',
    'Built and hosted in Canada (AWS ca-central-1)',
  ],
  // Fictional but shape-accurate: field-level diff, actor, same-transaction audit, FX stamp.
  ledger: [
    { t: '06-29 04:12:07', field: 'LD-2481 · dispatched', change: 'TOR → CHI · carrier assigned', who: 'k.osei · dispatcher', ref: '#88401' },
    { t: '06-30 14:02:11', field: 'rate_to_carrier', change: '1,850.00 → 1,790.00 USD', who: 'k.osei · dispatcher', ref: '#88412' },
    { t: '06-30 14:02:11', field: 'audit row', change: 'committed — same transaction as the write', who: 'system', ref: '#88412' },
    { t: '07-02 09:15:40', field: 'invoiced · INV-1188', change: '2,860.00 CAD · USD→CAD @ 1.3642 · Bank of Canada', who: 'a.moreau · admin', ref: '#88549' },
    { t: '07-06 11:03:22', field: 'customer_payment', change: 'Unpaid → Paid', who: 'a.moreau · admin', ref: '#88710' },
  ],
};

export const ROADMAP = {
  id: 'roadmap',
  status: 'NEXT LANES',
  h2: 'The map grows.',
  body: 'TansTrack runs brokerages today. Fleet is next — asset-based carriers, drivers, trucks — and it’s already carved into the data model: every load has carried its mode since day one. Ask us about early access.',
  lanes: ['FLEET', 'DRIVERS', 'TRUCKS'],
};

// Every answer here traces to verified capability or stated policy —
// same rule as everywhere else. No promises the product doesn't keep.
export const FAQ = {
  id: 'faq',
  chip: ['FAQ', 'PLAIN ANSWERS'],
  h2: 'Asked on the first call.',
  lede: 'The questions brokerages ask before they commit — answered the way we’d answer in person.',
  items: [
    {
      q: 'Where does our data live?',
      a: 'In Canada — AWS ca-central-1 (Montréal). Every table and every query is scoped to your company, and roles are enforced on the server, not in the browser.',
    },
    {
      q: 'How do loads get into the system?',
      a: 'From the rate-con Excels you already receive. TansTrack maps the columns and builds the loads — no retyping, no template to force on your customers.',
    },
    {
      q: 'We invoice in CAD and pay carriers in USD. Handled?',
      a: 'Yes — that split is the reason TansTrack exists. Every financial event is stamped with the Bank of Canada USD/CAD rate at that event’s date, never today’s, and realized FX gain or loss shows up as its own line.',
    },
    {
      q: 'What happens when someone edits the wrong load?',
      a: 'They undo it. Every save shows an Undo toast, deleted loads sit in Recently Deleted until restored, and only money-moving changes ask before they apply. Underneath, every change writes an audit row in the same transaction — so the history is always whole.',
    },
    {
      q: 'Who can see the money?',
      a: 'Only the roles you allow. Access is enforced server-side — master admin, admin, dispatcher, user — and P&L, margins, and reporting are visible to admins only.',
    },
    {
      q: 'We run our own trucks too. Does TansTrack do fleet?',
      a: 'Brokerage is what TansTrack does today. Fleet — drivers, trucks, asset-based work — is in development, and every load has carried a mode field since day one, so the switch is architected in. Ask us about early access.',
    },
    {
      q: 'What does it cost?',
      a: 'Pricing is by team size and volume, quoted straight after we see your operation — no per-load surprises.',
    },
  ],
};

export const CTA = {
  id: 'demo',
  status: '05 · PAID',
  h2: 'See your loads in it.',
  lede: 'Tell us about your operation — lanes, monthly volume, team size — and we’ll walk you through TansTrack with loads like yours.',
  pricing: 'Pricing is by team size and volume. We’ll quote it straight — no per-load surprises.',
  next: {
    label: 'WHAT HAPPENS NEXT',
    steps: [
      'Write us — lanes, monthly volume, team size.',
      'We set up a walkthrough with loads shaped like yours.',
      'Bring a rate-con Excel and watch it become loads, live.',
    ],
  },
  emailLede: 'Or write to us directly at',
  form: {
    name: { label: 'Name', placeholder: 'Your name' },
    company: { label: 'Company', placeholder: 'Brokerage name' },
    email: { label: 'Email', placeholder: 'you@company.com' },
    message: { label: 'Your operation', placeholder: 'Lanes, loads per month, team size…' },
    submit: 'Request a demo',
    sending: 'Sending…',
    sent: 'Thanks — your request is in. We’ll reply from hello@tanstrack.com.',
    error: 'Couldn’t send right now — please email hello@tanstrack.com directly.',
  },
};

export const FOOTER = {
  line: 'TMS for freight brokerages.',
  journey: ['DISPATCHED', 'IN TRANSIT', 'DELIVERED', 'INVOICED', 'PAID'],
  links: [
    { href: '#product', label: 'Product' },
    { href: '#trust', label: 'Trust' },
    { href: '#roadmap', label: 'Roadmap' },
    { href: '#faq', label: 'FAQ' },
    { href: '#demo', label: 'Contact' },
  ],
};
