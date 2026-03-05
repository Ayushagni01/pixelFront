export default function Footer() {
    const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <footer className="footer">
            {/* Top glow */}
            <div style={{
                position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
                width: 600, height: 1,
                background: 'linear-gradient(90deg, transparent, var(--clr-purple), transparent)',
            }} />

            <div className="container">
                <div className="footer-top">
                    {/* Brand */}
                    <div className="footer-brand">
                        <div className="footer-logo">Pixel<span>Forge</span> Studio</div>
                        <p className="footer-desc">
                            Premium web development agency crafting stunning, high-performance digital
                            experiences. India-based, serving clients worldwide.
                        </p>
                        <div className="footer-social">
                            {[
                                { icon: '𝕏', label: 'Twitter' },
                                { icon: 'in', label: 'LinkedIn' },
                                { icon: '📸', label: 'Instagram' },
                                { icon: '▶', label: 'YouTube' },
                                { icon: '💬', label: 'WhatsApp' },
                            ].map((s, i) => (
                                <a key={i} href="#" className="social-btn" aria-label={s.label} id={`social-${i}`}>
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div className="footer-col">
                        <h4>Services</h4>
                        <div className="footer-links">
                            {['Landing Pages', 'Custom Websites', 'React Web Apps', 'E-Commerce', 'Website Revamp', 'Monthly Maintenance'].map(s => (
                                <a key={s} href="#services" onClick={e => { e.preventDefault(); scrollTo('services'); }}>{s}</a>
                            ))}
                        </div>
                    </div>

                    {/* Company */}
                    <div className="footer-col">
                        <h4>Company</h4>
                        <div className="footer-links">
                            {['About Us', 'Portfolio', 'Process', 'Pricing', 'Blog', 'Careers'].map(s => (
                                <a key={s} href={`#${s.toLowerCase()}`} onClick={e => { e.preventDefault(); scrollTo(s.toLowerCase()); }}>{s}</a>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="footer-col">
                        <h4>Contact</h4>
                        <div className="footer-links">
                            <a href="mailto:hello@pixelforge.studio">hello@pixelforge.studio</a>
                            <a href="tel:+919876543210">+91 98765 43210</a>
                            <a href="#contact" onClick={e => { e.preventDefault(); scrollTo('contact'); }}>Get Free Quote</a>
                            <a href="#contact" onClick={e => { e.preventDefault(); scrollTo('contact'); }}>Schedule a Call</a>
                        </div>
                        <div style={{ marginTop: '1.25rem' }}>
                            <div style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                                background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)',
                                borderRadius: 'var(--r-full)', padding: '0.4rem 0.8rem',
                                fontSize: '0.75rem', color: '#22c55e', fontWeight: 600,
                            }}>
                                <span style={{ width: 8, height: 8, background: '#22c55e', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 6px #22c55e' }} />
                                Available for new projects
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div>© 2026 PixelForge Studio. Crafted with ❤️ in India.</div>
                    <div className="footer-bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Refund Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
