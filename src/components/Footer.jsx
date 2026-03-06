import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
    const { tr } = useLanguage();
    const f = tr.footer;
    const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    const sectionIds = ['services', 'portfolio', 'process', 'pricing', 'blog', 'careers'];

    return (
        <footer className="footer">
            <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 600, height: 1, background: 'linear-gradient(90deg,transparent,var(--clr-purple),transparent)' }} />
            <div className="container">
                <div className="footer-top">
                    {/* Brand */}
                    <div>
                        <div className="footer-logo">Pixel<span>Forge</span> Studio</div>
                        <p className="footer-desc">{f.desc}</p>
                        <div className="footer-social">
                            {[{ icon: '𝕏', l: 'Twitter' }, { icon: 'in', l: 'LinkedIn' }, { icon: '📸', l: 'Instagram' }, { icon: '▶', l: 'YouTube' }, { icon: '💬', l: 'WhatsApp' }].map((s, i) => (
                                <a key={i} href="#" className="social-btn" aria-label={s.l} id={`social-${i}`}>{s.icon}</a>
                            ))}
                        </div>
                    </div>
                    {/* Services col */}
                    <div className="footer-col">
                        <h4>{f.col1}</h4>
                        <div className="footer-links">
                            {f.serviceLinks.map((s, i) => (
                                <a key={i} href="#services" onClick={e => { e.preventDefault(); scrollTo('services'); }}>{s}</a>
                            ))}
                        </div>
                    </div>
                    {/* Company col */}
                    <div className="footer-col">
                        <h4>{f.col2}</h4>
                        <div className="footer-links">
                            {f.companyLinks.map((s, i) => (
                                <a key={i} href={`#${sectionIds[i]}`} onClick={e => { e.preventDefault(); scrollTo(sectionIds[i]); }}>{s}</a>
                            ))}
                        </div>
                    </div>
                    {/* Contact col */}
                    <div className="footer-col">
                        <h4>{f.col3}</h4>
                        <div className="footer-links">
                            <a href="mailto:hello@pixelforge.studio">hello@pixelforge.studio</a>
                            <a href="tel:+919876543210">+91 98765 43210</a>
                            <a href="#contact" onClick={e => { e.preventDefault(); scrollTo('contact'); }}>pixelforge.studio</a>
                        </div>
                        <div style={{ marginTop: '1.25rem' }}>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 'var(--r-full)', padding: '0.4rem 0.8rem', fontSize: '0.75rem', color: '#22c55e', fontWeight: 600 }}>
                                <span style={{ width: 8, height: 8, background: '#22c55e', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 6px #22c55e' }} />
                                {f.available}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div>{f.copy}</div>
                    <div className="footer-bottom-links">
                        {f.legal.map((l, i) => <a key={i} href="#">{l}</a>)}
                    </div>
                </div>
            </div>
        </footer>
    );
}
