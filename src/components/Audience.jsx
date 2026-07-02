/* Built for brokers & carriers + Security bar */

export function Audience() {
  return (
    <section className="section container reveal">
      <h2 className="display">Built for brokers. Carriers next<span className="accent-dark">.</span></h2>
      <div className="aud-grid">
        <div className="aud-dark">
          <p className="aud-label">FOR BROKERAGES &amp; DISPATCH — TODAY</p>
          <ul className="aud-list">
            <li><span className="tick">—</span>Automatic load import from Excel and PDF rate cons</li>
            <li><span className="tick">—</span>Live dispatch boards across the whole team</li>
            <li><span className="tick">—</span>Load tenders sent to carriers by email, documents attached</li>
            <li><span className="tick">—</span>Every document filed against its load</li>
            <li><span className="tick">—</span>Invoicing, receivables, and reporting built in</li>
          </ul>
        </div>
        <div className="aud-light">
          <p className="aud-label">
            FOR CARRIERS <span className="badge-dev">IN DEVELOPMENT</span>
          </p>
          <ul className="aud-list">
            <li><span className="tick">—</span>Truck tracking across your fleet</li>
            <li><span className="tick">—</span>Driver and asset scheduling</li>
          </ul>
          <p className="aud-note">Carrier operations are in active development. Ask us about early access.</p>
        </div>
      </div>
    </section>
  );
}

export function Security() {
  return (
    <section className="security container reveal">
      <div className="security-bar">
        <h2>Security &amp; reliability</h2>
        <div className="security-items">
          <span><i />Multi-tenant isolation</span>
          <span><i />Role-based access control</span>
          <span><i />Encrypted in transit</span>
          <span><i />Hosted on AWS</span>
        </div>
      </div>
    </section>
  );
}
