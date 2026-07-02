import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import { Problem, Features, HowItWorks } from './components/Sections.jsx';
import { Audience, Security } from './components/Audience.jsx';
import { Pricing, CtaBanner } from './components/Pricing.jsx';
import { Contact, Footer } from './components/Contact.jsx';
import { useReveal } from './useReveal.js';

export default function App() {
  useReveal();
  return (
    <>
      <div className="dark">
        <Nav />
        <Hero />
      </div>
      <Problem />
      <Features />
      <HowItWorks />
      <Audience />
      <Security />
      {/* [TESTIMONIAL] — add a client quote section here when available */}
      <Pricing />
      <CtaBanner />
      <Contact />
      <Footer />
    </>
  );
}
