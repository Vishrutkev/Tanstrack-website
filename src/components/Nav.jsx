export default function Nav() {
  return (
    <nav className="nav container" aria-label="Main">
      <a href="#top" className="brand">
        <span className="brand-tile">T</span>
        <span className="brand-name">tanstrack</span>
      </a>
      <div className="nav-links">
        <a href="#features">Features</a>
        <a href="#how-it-works">How it works</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
        <a href="https://app.tanstrack.com" className="nav-login">Log in</a>
        <a href="#contact" className="nav-cta">Request a demo</a>
      </div>
    </nav>
  );
}
