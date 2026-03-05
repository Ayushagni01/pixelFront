const techCategories = [
    {
        label: 'Frontend',
        color: '#06B6D4',
        techs: [
            { icon: '⚛️', name: 'React' },
            { icon: '▲', name: 'Next.js' },
            { icon: '🟢', name: 'Vue.js' },
            { icon: '🔴', name: 'Angular' },
            { icon: '⚡', name: 'Vite' },
            { icon: '🎨', name: 'Tailwind CSS' },
            { icon: '🎭', name: 'Framer Motion' },
        ],
    },
    {
        label: 'Backend',
        color: '#7C3AED',
        techs: [
            { icon: '🟢', name: 'Node.js' },
            { icon: '☕', name: 'Java' },
            { icon: '🐍', name: 'Python' },
            { icon: '🐘', name: 'PHP' },
            { icon: '💎', name: 'Ruby on Rails' },
            { icon: '🦀', name: 'Rust' },
            { icon: '🔷', name: 'Go (Golang)' },
        ],
    },
    {
        label: 'Frameworks & APIs',
        color: '#EC4899',
        techs: [
            { icon: '🌿', name: 'Spring Boot' },
            { icon: '🚀', name: 'FastAPI' },
            { icon: '🌶️', name: 'Django' },
            { icon: '🍃', name: 'Flask' },
            { icon: '⚡', name: 'Express.js' },
            { icon: '🦁', name: 'NestJS' },
            { icon: '🔗', name: 'GraphQL' },
            { icon: '📡', name: 'REST APIs' },
        ],
    },
    {
        label: 'Databases',
        color: '#F59E0B',
        techs: [
            { icon: '🔷', name: 'MongoDB' },
            { icon: '🐘', name: 'PostgreSQL' },
            { icon: '🐬', name: 'MySQL' },
            { icon: '🔴', name: 'Redis' },
            { icon: '🌊', name: 'Supabase' },
            { icon: '🔥', name: 'Firebase' },
            { icon: '❄️', name: 'Snowflake' },
        ],
    },
    {
        label: 'DevOps & Cloud',
        color: '#22C55E',
        techs: [
            { icon: '🐳', name: 'Docker' },
            { icon: '☸️', name: 'Kubernetes' },
            { icon: '☁️', name: 'AWS' },
            { icon: '🌩️', name: 'Google Cloud' },
            { icon: '🔵', name: 'Azure' },
            { icon: '🔁', name: 'CI/CD (GitHub Actions)' },
            { icon: '🏗️', name: 'Terraform' },
            { icon: '🐙', name: 'Jenkins' },
        ],
    },
    {
        label: 'Mobile & Other',
        color: '#A855F7',
        techs: [
            { icon: '📱', name: 'React Native' },
            { icon: '🦋', name: 'Flutter' },
            { icon: '🤖', name: 'OpenAI / AI APIs' },
            { icon: '🔒', name: 'Auth & OAuth' },
            { icon: '💳', name: 'Stripe / Razorpay' },
            { icon: '📊', name: 'Data Analytics' },
        ],
    },
];

export default function TechStack() {
    return (
        <section className="tech-section" id="tech">
            <div className="container">
                <div className="tech-header">
                    <div className="section-tag">🛠️ Tech Stack</div>
                    <h2 className="section-title">
                        We Build With <span className="gradient-text">Any Technology</span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        From frontend React apps to Java Spring Boot backends, Python AI services,
                        Docker deployments and cloud infrastructure — we cover the entire stack.
                    </p>
                </div>

                <div className="tech-categories">
                    {techCategories.map((cat, i) => (
                        <div key={i} className="tech-category" id={`tech-cat-${i}`}>
                            <div className="tech-category-label" style={{ '--cat-color': cat.color }}>
                                <span
                                    className="tech-category-dot"
                                    style={{ background: cat.color, boxShadow: `0 0 8px ${cat.color}` }}
                                />
                                {cat.label}
                            </div>
                            <div className="tech-grid">
                                {cat.techs.map((t, j) => (
                                    <div
                                        key={j}
                                        className="tech-badge"
                                        id={`tech-${i}-${j}`}
                                        style={{ '--tech-color': cat.color }}
                                    >
                                        <span className="tech-icon">{t.icon}</span>
                                        <span>{t.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom note */}
                <p style={{
                    textAlign: 'center', marginTop: '2.5rem',
                    color: 'var(--clr-muted)', fontSize: '0.875rem',
                }}>
                    🤝 Don't see your tech?{' '}
                    <a
                        href="#contact"
                        onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                        style={{ color: 'var(--clr-violet)', fontWeight: 600 }}
                    >
                        Contact us anyway
                    </a>{' '}
                    — we love learning new ones.
                </p>
            </div>
        </section>
    );
}
