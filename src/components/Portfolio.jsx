const projects = [
    {
        emoji: '🛒',
        bg: 'linear-gradient(135deg, #1a0533 0%, #0a1628 100%)',
        accent: '#7C3AED',
        tag: 'E-Commerce',
        name: 'ShopVibe — Fashion Store',
        desc: 'Full-stack Next.js store with Razorpay integration',
        dots: ['#7C3AED', '#EC4899', '#06B6D4'],
    },
    {
        emoji: '📊',
        bg: 'linear-gradient(135deg, #051628 0%, #0a0a20 100%)',
        accent: '#06B6D4',
        tag: 'SaaS Dashboard',
        name: 'DataPulse Analytics',
        desc: 'Real-time analytics dashboard for 10k+ users',
        dots: ['#06B6D4', '#84CC16', '#F59E0B'],
    },
    {
        emoji: '🏥',
        bg: 'linear-gradient(135deg, #051218 0%, #051a12 100%)',
        accent: '#22C55E',
        tag: 'Healthcare',
        name: 'MediBook Clinic App',
        desc: 'Patient management & appointment booking system',
        dots: ['#22C55E', '#06B6D4', '#84CC16'],
    },
    {
        emoji: '🏡',
        bg: 'linear-gradient(135deg, #1a0a05 0%, #100510 100%)',
        accent: '#F59E0B',
        tag: 'Real Estate',
        name: 'PropLux — Property Portal',
        desc: 'Premium real estate listings with virtual tours',
        dots: ['#F59E0B', '#EC4899', '#7C3AED'],
    },
];

function MockupCard({ p }) {
    return (
        <div style={{
            position: 'absolute', inset: 0,
            background: p.bg,
            display: 'flex', flexDirection: 'column',
            padding: '1.25rem',
        }}>
            {/* Browser bar */}
            <div style={{
                display: 'flex', alignItems: 'center', gap: '0.4rem',
                marginBottom: '0.75rem',
            }}>
                {p.dots.map((c, i) => (
                    <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
                ))}
                <div style={{ flex: 1, height: 8, background: 'rgba(255,255,255,0.06)', borderRadius: 4, marginLeft: '0.25rem' }} />
            </div>
            {/* Content lines */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <div style={{
                    width: 36, height: 36, borderRadius: 8,
                    background: `${p.accent}33`, border: `1px solid ${p.accent}55`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem',
                }}>{p.emoji}</div>
                <div>
                    <div style={{ height: 8, width: 80, background: 'rgba(255,255,255,0.15)', borderRadius: 4, marginBottom: 4 }} />
                    <div style={{ height: 6, width: 55, background: 'rgba(255,255,255,0.07)', borderRadius: 4 }} />
                </div>
            </div>
            {[100, 85, 90, 70].map((w, i) => (
                <div key={i} style={{ height: 7, width: `${w}%`, background: i === 0 ? `${p.accent}44` : 'rgba(255,255,255,0.06)', borderRadius: 4, marginBottom: 6 }} />
            ))}
            <div style={{ marginTop: 'auto', display: 'flex', gap: '0.5rem' }}>
                <div style={{ height: 28, flex: 1, background: p.accent, borderRadius: 6, opacity: 0.7 }} />
                <div style={{ height: 28, flex: 1, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6 }} />
            </div>
        </div>
    );
}

export default function Portfolio() {
    return (
        <section className="portfolio" id="portfolio">
            <div className="container">
                <div className="portfolio-header">
                    <div>
                        <div className="section-tag">✨ Our Work</div>
                        <h2 className="section-title">
                            Crafted with <span className="gradient-text">Passion & Precision</span>
                        </h2>
                    </div>
                    <a
                        href="#contact"
                        className="btn btn-outline"
                        onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                    >
                        See All Projects →
                    </a>
                </div>

                <div className="portfolio-grid">
                    {projects.map((p, i) => (
                        <div key={i} className="portfolio-item" id={`proj-${i}`}>
                            <MockupCard p={p} />
                            <div className="portfolio-overlay">
                                <div className="portfolio-tag">{p.tag}</div>
                                <div className="portfolio-name">{p.name}</div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--clr-muted)', marginTop: '0.25rem' }}>{p.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
