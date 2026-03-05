import './App.css';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
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

function CTABanner() {
  const { tr } = useLanguage();
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <section className="cta-section">
      <div className="orb orb-purple" style={{ width: 500, height: 500, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.15 }} />
      <div className="container">
        <div className="cta-inner">
          <div className="section-tag" style={{ justifyContent: 'center' }}>{tr.cta.tag}</div>
          <h2>{tr.cta.title1}<br /><span className="gradient-text">{tr.cta.title2}</span></h2>
          <p>{tr.cta.sub}</p>
          <div className="cta-actions">
            <button className="btn btn-primary" onClick={() => scrollTo('contact')} id="cta-banner-primary">{tr.cta.btn1}</button>
            <button className="btn btn-outline" onClick={() => scrollTo('portfolio')} id="cta-banner-secondary">{tr.cta.btn2}</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScrollTop() {
  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <button id="scroll-top" onClick={handleClick} aria-label="Scroll to top"
      style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 999, width: 48, height: 48, borderRadius: '50%', background: 'var(--grad-primary)', boxShadow: '0 4px 24px rgba(124,58,237,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: '#fff', transition: 'transform 0.2s ease', cursor: 'pointer', border: 'none' }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1) translateY(-2px)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1) translateY(0)'; }}
    >↑</button>
  );
}

function AppInner() {
  const { lang } = useLanguage();
  return (
    <div className={lang === 'hi' ? 'lang-hi' : ''}>
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
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppInner />
    </LanguageProvider>
  );
}
