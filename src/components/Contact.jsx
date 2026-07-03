import { useState } from 'react';
import { CONFIG } from '../config.js';

export function Contact() {
  const [status, setStatus] = useState('');

  async function submit(e) {
    e.preventDefault();
    const form = e.target;
    const f = new FormData(form);
    const key = (CONFIG.web3formsKey || '').trim();

    // No access key configured — fall back to the visitor's mail client.
    if (!key) {
      const subject = encodeURIComponent(`Demo request — ${f.get('company') || ''}`);
      const body = encodeURIComponent(
        `Name: ${f.get('name')}\nCompany: ${f.get('company')}\nEmail: ${f.get('email')}\n\n${f.get('message') || ''}`
      );
      window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: key,
          subject: `Demo request — ${f.get('company') || ''}`,
          from_name: 'Tanstrack website',
          name: f.get('name'),
          company: f.get('company'),
          email: f.get('email'),
          message: f.get('message') || '',
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || 'send failed');
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="contact container">
      <div className="contact-grid">
        <div>
          <h2 className="display" style={{ marginBottom: 14 }}>Request a demo</h2>
          <p className="lede">
            Tell us a little about your operation and we'll set up a walkthrough
            with your own loads. Or email us directly at{' '}
            <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a>.
          </p>
        </div>
        <form className="form" onSubmit={submit}>
          <label>
            Name
            <input name="name" required placeholder="Your name" />
          </label>
          <label>
            Company
            <input name="company" required placeholder="Company name" />
          </label>
          <label>
            Email
            <input name="email" type="email" required placeholder="you@company.com" />
          </label>
          <label>
            Message
            <textarea name="message" rows={4} placeholder="How many loads a month? Broker, dispatch, or carrier?" />
          </label>
          <button type="submit" className="btn btn-yellow">Request a demo</button>
          {status === 'sending' && <p className="form-status sending">Sending…</p>}
          {status === 'sent' && (
            <p className="form-status sent">Thanks — your request is in. We'll reply from {CONFIG.email}.</p>
          )}
          {status === 'error' && (
            <p className="form-status error">Couldn't send right now — please email {CONFIG.email} directly.</p>
          )}
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <span className="brand">
          <img className="brand-tile" src="/logo.svg" alt="tanstrack logo" width="22" height="22" />
          <span className="brand-name">tanstrack</span>
        </span>
        <span className="footer-copy">© Tanstrack {CONFIG.year} · {CONFIG.city}</span>
        <span className="footer-links">
          <a href={CONFIG.linkedinUrl}>LinkedIn</a>
          <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a>
        </span>
      </div>
    </footer>
  );
}
