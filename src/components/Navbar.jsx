import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, tr } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navKeys = ['services', 'portfolio', 'process', 'pricing', 'contact'];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <div className="nav-logo">Ind<span>Forge</span></div>

        <ul className="nav-links">
          {navKeys.map(key => (
            <li key={key}>
              <a href={`#${key}`} onClick={e => { e.preventDefault(); scrollTo(key); }}>
                {tr.nav[key]}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-cta">
          {/* ── Language Switcher ── */}
          <div className="lang-switcher" id="lang-switcher">
            <button
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
              id="lang-en"
              title="English"
            >
              🇬🇧 EN
            </button>
            <button
              className={`lang-btn ${lang === 'hi' ? 'active' : ''}`}
              onClick={() => setLang('hi')}
              id="lang-hi"
              title="हिंदी"
            >
              🇮🇳 हिं
            </button>
          </div>

          <button className="btn btn-outline" onClick={() => scrollTo('contact')} id="nav-lets-talk">
            {tr.nav.letsTalk}
          </button>
          <button className="btn btn-primary" onClick={() => scrollTo('pricing')} id="nav-get-started">
            {tr.nav.getStarted}
          </button>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: 'rgba(5,3,15,0.97)', borderBottom: '1px solid var(--clr-border)', padding: '1rem 1.5rem 1.5rem', backdropFilter: 'blur(20px)' }}>
          {/* Mobile language toggle */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
            <div className="lang-switcher" style={{ margin: '0' }}>
              <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>🇬🇧 EN</button>
              <button className={`lang-btn ${lang === 'hi' ? 'active' : ''}`} onClick={() => setLang('hi')}>🇮🇳 हिं</button>
            </div>
          </div>
          {navKeys.map(key => (
            <div key={key} style={{ padding: '0.75rem 0', borderBottom: '1px solid var(--clr-border)' }}>
              <a href={`#${key}`} onClick={e => { e.preventDefault(); scrollTo(key); }}
                style={{ color: 'var(--clr-text)', fontWeight: 500, fontSize: '1rem', fontFamily: lang === 'hi' ? 'var(--font-hindi)' : 'inherit' }}>
                {tr.nav[key]}
              </a>
            </div>
          ))}
          <button className="btn btn-primary" style={{ marginTop: '1.25rem', width: '100%', justifyContent: 'center' }} onClick={() => scrollTo('contact')}>
            {tr.nav.getStarted}
          </button>
        </div>
      )}
    </nav>
  );
}
