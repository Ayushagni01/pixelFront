import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import TechStack from './components/TechStack';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Floating CTA Banner (CTA Section)
function CTABanner() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <section className="cta-section">
      <div className="orb orb-purple" style={{ width: 500, height: 500, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.15 }} />
      <div className="container">
        <div className="cta-inner">
          <div className="section-tag" style={{ justifyContent: 'center' }}>✨ Ready to Start?</div>
          <h2>
            Your Dream Website is<br />
            <span className="gradient-text">One Click Away</span>
          </h2>
          <p>Join 150+ happy businesses who chose PixelForge. Get a free consultation today.</p>
          <div className="cta-actions">
            <button className="btn btn-primary" onClick={() => scrollTo('contact')} id="cta-banner-primary">
              🚀 Get Your Free Quote
            </button>
            <button className="btn btn-outline" onClick={() => scrollTo('portfolio')} id="cta-banner-secondary">
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Floating scroll-to-top button
function ScrollTop() {
  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <button
      id="scroll-top"
      onClick={handleClick}
      aria-label="Scroll to top"
      style={{
        position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 999,
        width: 48, height: 48, borderRadius: '50%',
        background: 'var(--grad-primary)',
        boxShadow: '0 4px 24px rgba(124,58,237,0.5)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.2rem', color: '#fff',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        cursor: 'pointer', border: 'none',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1) translateY(-2px)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1) translateY(0)'; }}
    >
      ↑
    </button>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Process />
        <Portfolio />
        <TechStack />
        <Testimonials />
        <CTABanner />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
