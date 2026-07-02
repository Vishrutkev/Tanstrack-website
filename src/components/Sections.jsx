/* Problem strip + Features grid + How it works */

export function Problem() {
  return (
    <section className="problem container reveal">
      <p className="eyebrow">THE PROBLEM</p>
      <div className="problem-grid">
        <h2 className="display">Freight ops shouldn't run on retyping<span className="accent-dark">.</span></h2>
        <p>
          Dispatchers retype load data from rate confirmations. Documents scatter
          across email threads. Invoicing lives in a spreadsheet nobody trusts.
          Tanstrack replaces all of it with one system your whole team works in.
        </p>
      </div>
    </section>
  );
}

/* Tiny geometric icons, drawn with plain spans. */
const iconStyles = {
  bars: [
    { width: 26, height: 6, borderRadius: 2, background: 'var(--navy)' },
    { width: 18, height: 6, borderRadius: 2, background: 'var(--yellow-deep)' },
    { width: 12, height: 6, borderRadius: 2, background: '#D8D4C8' },
  ],
  docs: [
    { width: 12, height: 16, borderRadius: 2, background: 'var(--navy)' },
    { width: 12, height: 16, borderRadius: 2, background: 'var(--yellow-deep)' },
    { width: 12, height: 16, borderRadius: 2, background: '#D8D4C8' },
  ],
  send: [
    { width: 8, height: 8, borderRadius: '50%', background: 'var(--navy)' },
    { width: 14, height: 2, background: 'var(--yellow-deep)' },
    { width: 8, height: 8, borderRadius: '50%', background: 'var(--yellow-deep)' },
  ],
  chart: [
    { width: 7, height: 9, borderRadius: 2, background: '#D8D4C8', alignSelf: 'flex-end' },
    { width: 7, height: 13, borderRadius: 2, background: 'var(--navy)', alignSelf: 'flex-end' },
    { width: 7, height: 18, borderRadius: 2, background: 'var(--yellow-deep)', alignSelf: 'flex-end' },
  ],
  roles: [
    { width: 16, height: 16, borderRadius: '50%', background: 'var(--navy)' },
    { width: 16, height: 16, borderRadius: '50%', background: 'var(--yellow-deep)', marginLeft: -10 },
  ],
  live: [
    { width: 10, height: 10, borderRadius: '50%', background: 'var(--yellow-deep)' },
    { width: 10, height: 10, borderRadius: '50%', border: '2px solid var(--navy)', boxSizing: 'border-box' },
  ],
};

const FEATURES = [
  { icon: 'bars', title: 'Load management & dispatch', text: 'Create, assign, and track every load from booking to delivery.' },
  { icon: 'docs', title: 'Document management', text: 'Rate cons, BOLs, PODs, and invoices — organized per load, in one place.' },
  { icon: 'send', title: 'Load tenders by email', text: 'Send tenders to carriers with documents attached, straight from the platform.' },
  { icon: 'chart', title: 'Invoicing & accounting', text: 'Generate invoices and manage receivables tied to each load.' },
  { icon: 'bars', title: 'Reporting', text: 'Operational and financial numbers across loads, customers, and revenue.' },
  { icon: 'roles', title: 'Roles & permissions', text: 'Control what each team member can see and do, with secure isolation between companies.' },
  { icon: 'live', title: 'Real-time updates', text: 'Dispatch boards update live across the whole team. No refreshing.' },
];

export function Features() {
  return (
    <section id="features" className="section container reveal">
      <p className="eyebrow">FEATURES</p>
      <h2 className="display">Everything a freight operation runs on</h2>
      <div className="cards">
        <div className="card-hero">
          <div>
            <div style={{ display: 'flex', gap: 6, marginBottom: 16 }}>
              <span style={{ width: 26, height: 26, borderRadius: 6, background: 'var(--yellow)' }} />
              <span style={{ width: 26, height: 26, borderRadius: 6, background: 'rgba(255,201,29,.45)' }} />
              <span style={{ width: 26, height: 26, borderRadius: 6, background: 'rgba(255,201,29,.2)' }} />
            </div>
            <h3>Automatic load import</h3>
            <p>
              Drop in an Excel file or a PDF rate confirmation and Tanstrack builds
              the load record for you. No manual data entry.
            </p>
          </div>
          <div className="demo" aria-hidden="true">
            <span className="in">ratecon.pdf</span>
            <span className="arrow">→</span>
            <span className="out">Load LD-2484</span>
          </div>
        </div>
        {FEATURES.map((f) => (
          <div className="card" key={f.title}>
            <div className="icon">
              {iconStyles[f.icon].map((s, i) => <span key={i} style={s} />)}
            </div>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const STEPS = [
  { title: 'Upload or create loads', text: 'Drop in a rate con — Excel or PDF — and Tanstrack extracts the details into a load. Or create one by hand when you need to.' },
  { title: 'Dispatch and track', text: 'Assign carriers, send tenders by email, update statuses, and share documents — live across your whole team.' },
  { title: 'Invoice and report', text: 'Bill customers from the loads you already track, manage receivables, and see the numbers across your operation.' },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section container reveal">
      <p className="eyebrow">HOW IT WORKS</p>
      <h2 className="display">Three steps, no retyping</h2>
      <div className="steps">
        {STEPS.map((s, i) => (
          <div className="step" key={s.title}>
            <div className="step-num">{i + 1}</div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
