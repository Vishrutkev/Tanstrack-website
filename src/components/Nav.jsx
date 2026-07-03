import { useState } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="nav container" aria-label="Main">
      <a href="#top" className="brand" onClick={close}>
        <img className="brand-tile" src="/logo.svg" alt="tanstrack logo" width="34" height="34" />
        <span className="brand-name">tanstrack</span>
      </a>

      <button
        type="button"
        className="nav-toggle"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={`nav-toggle-bars${open ? ' open' : ''}`} />
      </button>

      <div className={`nav-links${open ? ' open' : ''}`}>
        <a href="#features" onClick={close}>Features</a>
        <a href="#how-it-works" onClick={close}>How it works</a>
        <a href="#pricing" onClick={close}>Pricing</a>
        <a href="#contact" onClick={close}>Contact</a>
        <a href="https://app.tanstrack.com" className="nav-login">Log in</a>
        <a href="#contact" className="nav-cta" onClick={close}>Request a demo</a>
      </div>
    </nav>
  );
}
