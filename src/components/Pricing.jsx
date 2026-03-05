const plans = [
    {
        name: 'Starter',
        icon: '🌱',
        price: '8,000',
        period: 'one-time',
        desc: 'Perfect for individuals & small businesses getting started online.',
        color: '#06B6D4',
        features: [
            'Landing Page (1 Page)',
            'Mobile Responsive Design',
            'Contact Form',
            'Basic SEO Setup',
            'Google Analytics',
            '7-Day Support',
        ],
        cta: 'Get Started',
        featured: false,
    },
    {
        name: 'Growth',
        icon: '🚀',
        price: '25,000',
        period: 'one-time',
        desc: 'Our most popular package for growing businesses that need a full web presence.',
        color: '#7C3AED',
        features: [
            'Up to 8 Pages',
            'Custom UI/UX Design',
            'CMS (Content Management)',
            'Advanced SEO',
            'Payment Gateway',
            'Performance Optimization',
            '30-Day Support',
            'Free Domain Setup',
        ],
        cta: 'Start Building',
        featured: true,
    },
    {
        name: 'Enterprise',
        icon: '💎',
        price: '60,000',
        period: 'starting from',
        desc: 'Full-stack applications, SaaS platforms, and large-scale custom solutions.',
        color: '#EC4899',
        features: [
            'Custom Web Application',
            'React / Next.js Stack',
            'Database Architecture',
            'Auth & User Management',
            'Admin Dashboard',
            'API Development',
            'CI/CD Setup',
            '90-Day Support',
        ],
        cta: 'Contact Us',
        featured: false,
    },
];

export default function Pricing() {
    const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <section className="pricing" id="pricing">
            <div className="container">
                <div className="pricing-header">
                    <div className="section-tag">💰 Pricing</div>
                    <h2 className="section-title">
                        Transparent, <span className="gradient-text">Fair Pricing</span>
                    </h2>
                    <p className="section-subtitle">
                        No hidden fees. No surprises. Just honest pricing for world-class work.
                        All prices in INR — EMI options available.
                    </p>
                </div>

                <div className="pricing-grid">
                    {plans.map((plan, i) => (
                        <div key={i} className={`card pricing-card ${plan.featured ? 'featured' : ''}`} id={`plan-${i}`}>
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{plan.icon}</div>
                            <div className="price-plan-name">{plan.name}</div>
                            <p style={{ fontSize: '0.85rem', color: 'var(--clr-muted)', marginBottom: '0.75rem' }}>{plan.desc}</p>
                            <div className="price-value" style={{
                                background: `linear-gradient(135deg, ${plan.color}, #fff)`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}>
                                <sup>₹</sup>{plan.price}
                            </div>
                            <div className="price-period">{plan.period}</div>

                            <div className="price-divider" />

                            {plan.features.map((f, j) => (
                                <div key={j} className="price-feature">
                                    <div className="price-feature-check" style={{ borderColor: `${plan.color}66`, background: `${plan.color}22`, color: plan.color }}>✓</div>
                                    {f}
                                </div>
                            ))}

                            <button
                                className={`btn price-cta ${plan.featured ? 'btn-primary' : 'btn-outline'}`}
                                onClick={() => scrollTo('contact')}
                                id={`plan-cta-${i}`}
                                style={plan.featured ? {} : { borderColor: `${plan.color}88`, color: plan.color }}
                            >
                                {plan.cta} →
                            </button>
                        </div>
                    ))}
                </div>

                <p style={{ textAlign: 'center', color: 'var(--clr-muted)', fontSize: '0.85rem', marginTop: '2rem' }}>
                    💡 Need something custom? <a href="#contact" onClick={e => { e.preventDefault(); scrollTo('contact'); }} style={{ color: 'var(--clr-violet)', fontWeight: 600 }}>Let's talk</a> — we love unique challenges.
                </p>
            </div>
        </section>
    );
}
