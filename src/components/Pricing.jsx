import { useLanguage } from '../context/LanguageContext';

const planMeta = [
    { icon: '🌱', color: '#06B6D4', price: '₹8,000', featured: false },
    { icon: '🚀', color: '#7C3AED', price: '₹25,000', featured: true },
    { icon: '💎', color: '#EC4899', price: '₹60,000', featured: false },
];

export default function Pricing() {
    const { tr } = useLanguage();
    const p = tr.pricing;
    const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <section className="pricing" id="pricing">
            <div className="container">
                <div className="pricing-header">
                    <div className="section-tag">{p.tag}</div>
                    <h2 className="section-title">{p.title1} <span className="gradient-text">{p.title2}</span></h2>
                    <p className="section-subtitle">{p.sub}</p>
                </div>
                <div className="pricing-grid">
                    {planMeta.map((meta, i) => {
                        const plan = p.plans[i];
                        return (
                            <div key={i} className={`card pricing-card ${meta.featured ? 'featured' : ''}`} id={`plan-${i}`}>
                                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{meta.icon}</div>
                                <div className="price-plan-name">{plan.name}</div>
                                <p style={{ fontSize: '0.85rem', color: 'var(--clr-muted)', marginBottom: '0.75rem' }}>{plan.desc}</p>
                                <div className="price-value" style={{ background: `linear-gradient(135deg,${meta.color},#fff)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                    <sup>₹</sup>{meta.price.replace('₹', '')}
                                </div>
                                <div className="price-period">{plan.period}</div>
                                <div className="price-divider" />
                                {plan.features.map((f, j) => (
                                    <div key={j} className="price-feature">
                                        <div className="price-feature-check" style={{ borderColor: `${meta.color}66`, background: `${meta.color}22`, color: meta.color }}>✓</div>
                                        {f}
                                    </div>
                                ))}
                                <button className={`btn price-cta ${meta.featured ? 'btn-primary' : 'btn-outline'}`} onClick={() => scrollTo('contact')} id={`plan-cta-${i}`} style={meta.featured ? {} : { borderColor: `${meta.color}88`, color: meta.color }}>
                                    {plan.cta} →
                                </button>
                            </div>
                        );
                    })}
                </div>
                <p style={{ textAlign: 'center', color: 'var(--clr-muted)', fontSize: '0.85rem', marginTop: '2rem' }}>
                    {p.custom1}{' '}
                    <a href="#contact" onClick={e => { e.preventDefault(); scrollTo('contact'); }} style={{ color: 'var(--clr-violet)', fontWeight: 600 }}>{p.custom2}</a>
                    {' '}{p.custom3}
                </p>
            </div>
        </section>
    );
}
