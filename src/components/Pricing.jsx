/* Pricing + full-width demo CTA banner */

export function Pricing() {
  return (
    <section id="pricing" className="pricing container reveal">
      <div className="pricing-box">
        <p className="eyebrow">PRICING</p>
        <h2 className="display">Subscription pricing that scales with your operation</h2>
        <p>
          Priced by team size and volume — no per-load surprises. Tell us about
          your operation and we'll quote it.
        </p>
        <a href="#contact" className="btn btn-navy">Contact us for pricing</a>
      </div>
    </section>
  );
}

export function CtaBanner() {
  return (
    <section className="dark reveal">
      <div className="banner container">
        <h2 className="display">See your loads in Tanstrack<span className="accent">.</span></h2>
        <a href="#contact" className="btn btn-yellow">Request a demo</a>
      </div>
    </section>
  );
}
