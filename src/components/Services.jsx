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
        icon: '⚛️',
        color: 'linear-gradient(135deg, #06B6D4, #0891B2)',
        shadow: 'rgba(6,182,212,0.4)',
        title: 'React / Next.js Web App',
        text: 'Blazing-fast, modern web apps built with the latest React ecosystem for peak performance.',
        price: '₹40,000',
        period: 'starting from',
        features: ['React / Next.js', 'API Integration', 'Auth & Dashboard', 'Deployment Included'],
    },
    {
        icon: '☕',
        color: 'linear-gradient(135deg, #F59E0B, #D97706)',
        shadow: 'rgba(245,158,11,0.4)',
        title: 'Java Backend Development',
        text: 'Robust, enterprise-grade backend systems built with Java Spring Boot — scalable, secure, and production-ready.',
        price: '₹50,000',
        period: 'starting from',
        features: ['Spring Boot APIs', 'Microservices', 'PostgreSQL / MySQL', 'JWT Auth & Security'],
    },
    {
        icon: '🐍',
        color: 'linear-gradient(135deg, #22C55E, #16A34A)',
        shadow: 'rgba(34,197,94,0.4)',
        title: 'Python Development',
        text: 'From Django web apps and FastAPI backends to AI/ML integrations and data automation scripts.',
        price: '₹35,000',
        period: 'starting from',
        features: ['Django / FastAPI', 'AI & ML Integration', 'Data Pipelines', 'REST & GraphQL APIs'],
    },
    {
        icon: '🐳',
        color: 'linear-gradient(135deg, #2563EB, #1D4ED8)',
        shadow: 'rgba(37,99,235,0.4)',
        title: 'DevOps & Docker Setup',
        text: 'Containerise your apps, automate deployments, and set up full CI/CD pipelines on AWS, GCP, or Azure.',
        price: '₹25,000',
        period: 'starting from',
        features: ['Docker & Kubernetes', 'CI/CD Pipelines', 'AWS / GCP / Azure', 'Monitoring & Alerts'],
    },
    {
        icon: '🛒',
        color: 'linear-gradient(135deg, #EC4899, #BE185D)',
        shadow: 'rgba(236,72,153,0.4)',
        title: 'E-Commerce Store',
        text: 'Feature-rich online stores with payment gateways, inventory management, and beautiful product pages.',
        price: '₹30,000',
        period: 'starting from',
        features: ['Product Catalogue', 'Razorpay / Stripe', 'Order Management', 'Admin Panel'],
    },
    {
        icon: '🤖',
        color: 'linear-gradient(135deg, #8B5CF6, #6D28D9)',
        shadow: 'rgba(139,92,246,0.4)',
        title: 'AI / ML Integration',
        text: 'Integrate ChatGPT, custom ML models, computer vision, or NLP into your existing product or a new one.',
        price: '₹45,000',
        period: 'starting from',
        features: ['OpenAI / Gemini APIs', 'Custom ML Models', 'Chatbots & Agents', 'Python + FastAPI'],
    },
    {
        icon: '📱',
        color: 'linear-gradient(135deg, #F59E0B, #EC4899)',
        shadow: 'rgba(245,158,11,0.35)',
        title: 'Mobile App (React Native)',
        text: 'Cross-platform iOS & Android apps built with React Native — one codebase, both platforms.',
        price: '₹60,000',
        period: 'starting from',
        features: ['iOS & Android', 'React Native', 'Push Notifications', 'App Store Deployment'],
    },
    {
        icon: '🔧',
        color: 'linear-gradient(135deg, #84CC16, #65A30D)',
        shadow: 'rgba(132,204,22,0.35)',
        title: 'Monthly Maintenance',
        text: 'Ongoing support, updates, security patches, and feature additions across any tech stack.',
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
                        Full-Stack Solutions,<br />
                        <span className="gradient-text">Any Technology</span>
                    </h2>
                    <p className="section-subtitle">
                        From React frontends to Java Spring Boot backends, Python AI services,
                        Docker infrastructure, and mobile apps — we build whatever your business needs.
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
