const techs = [
    { icon: '⚛️', name: 'React', color: '#61DAFB' },
    { icon: '▲', name: 'Next.js', color: '#fff' },
    { icon: '⚡', name: 'Vite', color: '#BD34FE' },
    { icon: '🎨', name: 'Tailwind CSS', color: '#06B6D4' },
    { icon: '🟡', name: 'JavaScript', color: '#F7DF1E' },
    { icon: '📘', name: 'TypeScript', color: '#3178C6' },
    { icon: '🟢', name: 'Node.js', color: '#339933' },
    { icon: '🔷', name: 'MongoDB', color: '#47A248' },
    { icon: '🐘', name: 'PostgreSQL', color: '#4169E1' },
    { icon: '🔥', name: 'Firebase', color: '#FFCA28' },
    { icon: '☁️', name: 'AWS', color: '#FF9900' },
    { icon: '🌊', name: 'Supabase', color: '#3ECF8E' },
    { icon: '🛡️', name: 'Auth.js', color: '#8B5CF6' },
    { icon: '📦', name: 'Redux', color: '#764ABC' },
    { icon: '🎭', name: 'Framer Motion', color: '#EC4899' },
    { icon: '💳', name: 'Stripe', color: '#635BFF' },
    { icon: '🤖', name: 'OpenAI API', color: '#10a37f' },
    { icon: '📊', name: 'Chart.js', color: '#FF6384' },
];

export default function TechStack() {
    return (
        <section className="tech-section" id="tech">
            <div className="container">
                <div className="tech-header">
                    <div className="section-tag">🛠️ Tech Stack</div>
                    <h2 className="section-title">
                        Built with <span className="gradient-text">Best-in-Class</span> Technologies
                    </h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        We use the latest, battle-tested technologies to ensure your product is
                        scalable, maintainable, and blazing fast.
                    </p>
                </div>

                <div className="tech-grid">
                    {techs.map((t, i) => (
                        <div key={i} className="tech-badge" id={`tech-${i}`}
                            style={{ '--tech-color': t.color }}
                        >
                            <span className="tech-icon">{t.icon}</span>
                            <span style={{ color: 'var(--clr-text)' }}>{t.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
