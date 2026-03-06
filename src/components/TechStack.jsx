import { useLanguage } from '../context/LanguageContext';

const techCategories = [
    { color: '#06B6D4', techs: [{ icon: '⚛️', name: 'React' }, { icon: '▲', name: 'Next.js' }, { icon: '🟢', name: 'Vue.js' }, { icon: '🔴', name: 'Angular' }, { icon: '⚡', name: 'Vite' }, { icon: '🎨', name: 'Tailwind CSS' }, { icon: '🎭', name: 'Framer Motion' }] },
    { color: '#7C3AED', techs: [{ icon: '🟢', name: 'Node.js' }, { icon: '☕', name: 'Java' }, { icon: '🐍', name: 'Python' }, { icon: '🐘', name: 'PHP' }, { icon: '💎', name: 'Ruby on Rails' }, { icon: '🔷', name: 'Go (Golang)' }] },
    { color: '#EC4899', techs: [{ icon: '🌿', name: 'Spring Boot' }, { icon: '🚀', name: 'FastAPI' }, { icon: '🌶️', name: 'Django' }, { icon: '🍃', name: 'Flask' }, { icon: '⚡', name: 'Express.js' }, { icon: '🦁', name: 'NestJS' }, { icon: '🔗', name: 'GraphQL' }, { icon: '📡', name: 'REST APIs' }] },
    { color: '#F59E0B', techs: [{ icon: '🔷', name: 'MongoDB' }, { icon: '🐘', name: 'PostgreSQL' }, { icon: '🐬', name: 'MySQL' }, { icon: '🔴', name: 'Redis' }, { icon: '🌊', name: 'Supabase' }, { icon: '🔥', name: 'Firebase' }] },
    { color: '#22C55E', techs: [{ icon: '🐳', name: 'Docker' }, { icon: '☸️', name: 'Kubernetes' }, { icon: '☁️', name: 'AWS' }, { icon: '🌩️', name: 'Google Cloud' }, { icon: '🔵', name: 'Azure' }, { icon: '🔁', name: 'CI/CD' }, { icon: '🏗️', name: 'Terraform' }] },
    { color: '#A855F7', techs: [{ icon: '📱', name: 'React Native' }, { icon: '🦋', name: 'Flutter' }, { icon: '🤖', name: 'OpenAI / AI APIs' }, { icon: '🔒', name: 'Auth & OAuth' }, { icon: '💳', name: 'Stripe / Razorpay' }] },
];

export default function TechStack() {
    const { tr } = useLanguage();
    const t = tr.tech;

    return (
        <section className="tech-section" id="tech">
            <div className="container">
                <div className="tech-header">
                    <div className="section-tag">{t.tag}</div>
                    <h2 className="section-title">{t.title1} <span className="gradient-text">{t.title2}</span></h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>{t.sub}</p>
                </div>
                <div className="tech-categories">
                    {techCategories.map((cat, i) => (
                        <div key={i} className="tech-category" id={`tech-cat-${i}`}>
                            <div className="tech-category-label" style={{ color: cat.color }}>
                                <span className="tech-category-dot" style={{ background: cat.color, boxShadow: `0 0 8px ${cat.color}` }} />
                                {t.categories[i]}
                            </div>
                            <div className="tech-grid">
                                {cat.techs.map((tech, j) => (
                                    <div key={j} className="tech-badge" id={`tech-${i}-${j}`}>
                                        <span className="tech-icon">{tech.icon}</span>
                                        <span>{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <p style={{ textAlign: 'center', marginTop: '2.5rem', color: 'var(--clr-muted)', fontSize: '0.875rem' }}>
                    {t.note1}{' '}
                    <a href="#contact" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} style={{ color: 'var(--clr-violet)', fontWeight: 600 }}>
                        {t.note2}
                    </a>{' '}
                    {t.note3}
                </p>
            </div>
        </section>
    );
}
