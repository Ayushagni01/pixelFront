const services = [
    {
        icon: '🖥️',
        color: 'linear-gradient(135deg, #7C3AED, #A855F7)',
        shadow: 'rgba(124,58,237,0.4)',
        title: 'Custom Website Design',
        text: 'Pixel-perfect, responsive websites that capture your brand identity and keep visitors glued to the screen.',
        price: '₹15,000',
        period: 'starting from',
        features: ['Custom UI/UX Design', 'Mobile Responsive', '5 Pages Included', 'CMS Integration'],
    },
    {
        icon: '⚡',
        color: 'linear-gradient(135deg, #06B6D4, #0891B2)',
        shadow: 'rgba(6,182,212,0.4)',
        title: 'React / Next.js Web App',
        text: 'Blazing-fast, modern web apps built with the latest React ecosystem for peak performance.',
        price: '₹40,000',
        period: 'starting from',
        features: ['React / Next.js', 'API Integration', 'Auth & Dashboard', 'Deployment Included'],
    },
    {
        icon: '🛒',
        color: 'linear-gradient(135deg, #EC4899, #BE185D)',
        shadow: 'rgba(236,72,153,0.4)',
        title: 'E-Commerce Store',
        text: 'Feature-rich online stores with payment gateways, inventory management, and beautiful product pages.',
        price: '₹30,000',
        period: 'starting from',
        features: ['Product Catalogue', 'Payment Gateway', 'Order Management', 'Admin Panel'],
    },
    {
        icon: '📱',
        color: 'linear-gradient(135deg, #F59E0B, #D97706)',
        shadow: 'rgba(245,158,11,0.4)',
        title: 'Landing Page',
        text: 'High-converting landing pages designed to turn visitors into customers, leads, and fans.',
        price: '₹8,000',
        period: 'starting from',
        features: ['1 Page Design', 'CTA Optimization', 'Fast Load Time', 'Analytics Setup'],
    },
    {
        icon: '🔧',
        color: 'linear-gradient(135deg, #84CC16, #65A30D)',
        shadow: 'rgba(132,204,22,0.35)',
        title: 'Website Revamp',
        text: 'Transform your outdated website into a modern, fast, and beautiful digital experience.',
        price: '₹20,000',
        period: 'starting from',
        features: ['Full Redesign', 'Performance Boost', 'SEO Overhaul', 'Content Migration'],
    },
    {
        icon: '🤝',
        color: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
        shadow: 'rgba(139,92,246,0.4)',
        title: 'Monthly Maintenance',
        text: 'Ongoing support, updates, security patches, and feature additions to keep your site running perfectly.',
        price: '₹3,500',
        period: '/ month',
        features: ['Bug Fixes', 'Content Updates', 'Security Patches', 'Performance Reports'],
    },
];

export default function Services() {
    return (
        <section className="services" id="services">
            {/* Background orbs */}
            <div className="orb orb-purple" style={{ width: 400, height: 400, top: 0, right: '-10%', opacity: 0.2 }} />
            <div className="orb orb-cyan" style={{ width: 300, height: 300, bottom: '10%', left: '-5%', opacity: 0.15 }} />

            <div className="container">
                <div className="services-header">
                    <div className="section-tag">💼 Our Services</div>
                    <h2 className="section-title">
                        Everything Your Business<br />
                        <span className="gradient-text">Needs Online</span>
                    </h2>
                    <p className="section-subtitle">
                        From sleek landing pages to full-stack applications — we deliver premium
                        web solutions at transparent, affordable prices.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((s, i) => (
                        <div key={i} className="card service-card" id={`service-${i}`}>
                            <div style={{
                                width: 56, height: 56, borderRadius: 14,
                                background: s.color,
                                boxShadow: `0 8px 24px ${s.shadow}`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '1.6rem', marginBottom: '1.25rem',
                            }}>
                                {s.icon}
                            </div>
                            <div className="service-card-title">{s.title}</div>
                            <p className="service-card-text">{s.text}</p>
                            <div className="service-price" style={{ background: s.color, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                {s.price} <span>{s.period}</span>
                            </div>
                            <div className="service-features">
                                {s.features.map((f, j) => (
                                    <div key={j} className="service-feature">{f}</div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
