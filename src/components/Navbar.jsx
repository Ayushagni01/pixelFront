import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <div className="nav-logo">
          Pixel<span>Forge</span>
        </div>

        <ul className="nav-links">
          {['services', 'portfolio', 'process', 'pricing', 'contact'].map(link => (
            <li key={link}>
              <a href={`#${link}`} onClick={e => { e.preventDefault(); scrollTo(link); }}>
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-cta">
          <button className="btn btn-outline" onClick={() => scrollTo('contact')}>
            Let's Talk
          </button>
          <button className="btn btn-primary" onClick={() => scrollTo('pricing')}>
            Get Started →
          </button>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(5,3,15,0.97)',
          borderBottom: '1px solid var(--clr-border)',
          padding: '1rem 1.5rem 1.5rem',
          backdropFilter: 'blur(20px)',
        }}>
          {['services', 'portfolio', 'process', 'pricing', 'contact'].map(link => (
            <div key={link} style={{ padding: '0.75rem 0', borderBottom: '1px solid var(--clr-border)' }}>
              <a
                href={`#${link}`}
                onClick={e => { e.preventDefault(); scrollTo(link); }}
                style={{ color: 'var(--clr-text)', fontWeight: 500, fontSize: '1rem' }}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </div>
          ))}
          <button className="btn btn-primary" style={{ marginTop: '1.25rem', width: '100%', justifyContent: 'center' }} onClick={() => scrollTo('contact')}>
            Get a Free Quote →
          </button>
        </div>
      )}
    </nav>
  );
}
