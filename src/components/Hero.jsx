const ROWS = [
  { po: '6100041182', customer: 'Harvest Row Foods', carrier: 'Blue Spruce Freight', pill: 'pending', label: 'pending' },
  { po: '6100041165', customer: 'Cascade Provisions', carrier: 'Ironline Transport', pill: 'picked', label: 'picked_up' },
  { po: '6100041158', customer: 'Meridian Paper Co.', carrier: 'Red Cedar Carriers', pill: 'assigned', label: 'assigned' },
  { po: '6100041144', customer: 'Northgate Beverage', carrier: 'Lakeshore Logistics', pill: 'delivered', label: 'delivered' },
];

const LANES = [
  'LD-2481 · CHI → DAL · IN TRANSIT',
  'LD-2482 · ATL → MEM · DELIVERED',
  'LD-2483 · TOR → BUF · BOOKED',
  'LD-2484 · SEA → PDX · ASSIGNED',
  'LD-2485 · HOU → LRD · PICKED UP',
  'LD-2486 · KCM → OKC · INVOICED',
];

function Mockup() {
  return (
    <div className="mock-wrap">
      <div className="mock-glow" aria-hidden="true" />
      <div className="mock" aria-hidden="true">
        <div className="mock-head">
          <span className="mock-logo"><span /></span>
          <div>
            <div className="mock-title">Load Management</div>
            <div className="mock-subtitle">Manage, import, and edit all loads at a glance</div>
          </div>
          <span className="mock-count">45 loads</span>
        </div>
        <div className="mock-tabs">
          <span className="mock-tab active">Current Loads (45)</span>
          <span className="mock-tab">Delivered (11)</span>
          <span className="mock-tab">Invoiced (175)</span>
        </div>
        <div className="mock-toolbar">
          <span className="mock-search">Search loads, customers, carriers…</span>
          <span className="mock-btn">↑ Upload Excel/PDF</span>
          <span className="mock-btn green">+ Add Work Order</span>
        </div>
        <div className="mock-table">
          <div className="mock-cols">
            <span>Freight PO</span><span>Customer</span><span>Carrier</span>
            <span style={{ textAlign: 'right' }}>Status</span>
          </div>
          {ROWS.map((r, i) => (
            <div className={`mock-row${i % 2 ? ' alt' : ''}`} key={r.po}>
              <span className="po">{r.po}</span>
              <span>{r.customer}</span>
              <span>{r.carrier}</span>
              <span className="status"><span className={`pill ${r.pill}`}>{r.label}</span></span>
            </div>
          ))}
        </div>
        <div className="mock-import">
          <span className="dot" />
          <span className="file">ratecon_41190.pdf</span>
          <span style={{ color: 'var(--indigo)', fontSize: 12 }}>→</span>
          <span className="note">extracting load details…</span>
          <span className="tag">AUTO-IMPORT</span>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <>
      <header id="top" className="hero container">
        <div>
          <h1>From rate con to invoice. One system<span className="accent">.</span></h1>
          <p className="hero-sub">
            Import loads straight from Excel and PDF, dispatch and track them in
            real time, keep every document in one place, and bill without spreadsheets.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-yellow">Request a demo</a>
            <a href="#how-it-works" className="btn btn-ghost">See how it works</a>
          </div>
        </div>
        <Mockup />
      </header>
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          <span className="ticker-set">{LANES.map((l) => <span key={l}>{l}</span>)}</span>
          <span className="ticker-set">{LANES.map((l) => <span key={l}>{l}</span>)}</span>
        </div>
      </div>
    </>
  );
}
