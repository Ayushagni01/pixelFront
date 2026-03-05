const steps = [
    {
        num: '01',
        emoji: '💬',
        color: '#7C3AED',
        title: 'Free Discovery Call',
        desc: 'We start with a 30-min call to understand your goals, audience, budget, and vision for the project.',
    },
    {
        num: '02',
        emoji: '📐',
        color: '#06B6D4',
        title: 'Design & Prototype',
        desc: 'Our designers craft stunning mockups and wireframes. You review, we refine until it\'s perfect.',
    },
    {
        num: '03',
        emoji: '⚡',
        color: '#EC4899',
        title: 'Build & Develop',
        desc: 'Engineering team builds the product with clean code, modern frameworks, and best practices.',
    },
    {
        num: '04',
        emoji: '🧪',
        color: '#F59E0B',
        title: 'Test & Review',
        desc: 'Rigorous cross-device testing, performance audits and your feedback round before going live.',
    },
    {
        num: '05',
        emoji: '🚀',
        color: '#22C55E',
        title: 'Launch & Support',
        desc: 'Go live with zero downtime. We provide 30 days of free post-launch support and bug fixes.',
    },
];

export default function Process() {
    return (
        <section className="process" id="process">
            <div className="container">
                <div className="process-header">
                    <div className="section-tag">⚙️ How We Work</div>
                    <h2 className="section-title">
                        Our Proven <span className="gradient-text">5-Step Process</span>
                    </h2>
                    <p className="section-subtitle">
                        A streamlined, transparent workflow that keeps you in the loop at every stage
                        and ensures perfect results every time.
                    </p>
                </div>

                <div className="process-grid">
                    {steps.map((step, i) => (
                        <div key={i} className="process-step" id={`step-${i}`}>
                            <div
                                className="step-num"
                                style={{
                                    border: `2px solid ${step.color}`,
                                    boxShadow: `0 0 24px ${step.color}55`,
                                }}
                            >
                                <span className="gradient-text">{step.num}</span>
                            </div>
                            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{step.emoji}</div>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
