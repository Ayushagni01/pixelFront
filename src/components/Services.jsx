import { useLanguage } from '../context/LanguageContext';

const serviceBase = [
    { icon: '🖥️', color: 'linear-gradient(135deg,#7C3AED,#A855F7)', shadow: 'rgba(124,58,237,0.4)', price: '₹15,000', isMonth: false },
    { icon: '⚛️', color: 'linear-gradient(135deg,#06B6D4,#0891B2)', shadow: 'rgba(6,182,212,0.4)', price: '₹40,000', isMonth: false },
    { icon: '☕', color: 'linear-gradient(135deg,#F59E0B,#D97706)', shadow: 'rgba(245,158,11,0.4)', price: '₹50,000', isMonth: false },
    { icon: '🐍', color: 'linear-gradient(135deg,#22C55E,#16A34A)', shadow: 'rgba(34,197,94,0.4)', price: '₹35,000', isMonth: false },
    { icon: '🐳', color: 'linear-gradient(135deg,#2563EB,#1D4ED8)', shadow: 'rgba(37,99,235,0.4)', price: '₹25,000', isMonth: false },
    { icon: '🛒', color: 'linear-gradient(135deg,#EC4899,#BE185D)', shadow: 'rgba(236,72,153,0.4)', price: '₹30,000', isMonth: false },
    { icon: '🤖', color: 'linear-gradient(135deg,#8B5CF6,#6D28D9)', shadow: 'rgba(139,92,246,0.4)', price: '₹45,000', isMonth: false },
    { icon: '📱', color: 'linear-gradient(135deg,#F59E0B,#EC4899)', shadow: 'rgba(245,158,11,0.35)', price: '₹60,000', isMonth: false },
    { icon: '🔧', color: 'linear-gradient(135deg,#84CC16,#65A30D)', shadow: 'rgba(132,204,22,0.35)', price: '₹3,500', isMonth: true },
];

export default function Services() {
    const { tr } = useLanguage();
    const s = tr.services;

    return (
        <section className="services" id="services">
            <div className="orb orb-purple" style={{ width: 400, height: 400, top: 0, right: '-10%', opacity: 0.2 }} />
            <div className="orb orb-cyan" style={{ width: 300, height: 300, bottom: '10%', left: '-5%', opacity: 0.15 }} />
            <div className="container">
                <div className="services-header">
                    <div className="section-tag">{s.tag}</div>
                    <h2 className="section-title">{s.title1}<br /><span className="gradient-text">{s.title2}</span></h2>
                    <p className="section-subtitle">{s.sub}</p>
                </div>
                <div className="services-grid">
                    {serviceBase.map((base, i) => {
                        const item = s.items[i];
                        return (
                            <div key={i} className="card service-card" id={`service-${i}`}>
                                <div style={{ width: 56, height: 56, borderRadius: 14, background: base.color, boxShadow: `0 8px 24px ${base.shadow}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem', marginBottom: '1.25rem' }}>
                                    {base.icon}
                                </div>
                                <div className="service-card-title">{item.title}</div>
                                <p className="service-card-text">{item.text}</p>
                                <div className="service-price" style={{ background: base.color, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                    {base.price} <span>{base.isMonth ? s.periodMonth : s.periodDefault}</span>
                                </div>
                                <div className="service-features">
                                    {item.features.map((f, j) => <div key={j} className="service-feature">{f}</div>)}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
