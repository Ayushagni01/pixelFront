export default function Marquee() {
    const items = [
        { emoji: '⚛️', text: 'React & Next.js' },
        { emoji: '☕', text: 'Java Spring Boot' },
        { emoji: '🐍', text: 'Python & Django' },
        { emoji: '🐳', text: 'Docker & Kubernetes' },
        { emoji: '☁️', text: 'AWS & Cloud' },
        { emoji: '🌿', text: 'Spring Boot' },
        { emoji: '🚀', text: 'FastAPI' },
        { emoji: '📱', text: 'React Native' },
        { emoji: '🔒', text: 'Secure & Scalable' },
        { emoji: '🗄️', text: 'Databases & APIs' },
        { emoji: '🔁', text: 'CI/CD Pipelines' },
        { emoji: '🤖', text: 'AI Integration' },
        { emoji: '☸️', text: 'Kubernetes' },
        { emoji: '🌐', text: 'SEO Optimised' },
        { emoji: '💳', text: 'Payment Integration' },
        // Duplicate for infinite loop
        { emoji: '⚛️', text: 'React & Next.js' },
        { emoji: '☕', text: 'Java Spring Boot' },
        { emoji: '🐍', text: 'Python & Django' },
        { emoji: '🐳', text: 'Docker & Kubernetes' },
        { emoji: '☁️', text: 'AWS & Cloud' },
        { emoji: '🌿', text: 'Spring Boot' },
        { emoji: '🚀', text: 'FastAPI' },
        { emoji: '📱', text: 'React Native' },
        { emoji: '🔒', text: 'Secure & Scalable' },
        { emoji: '🗄️', text: 'Databases & APIs' },
        { emoji: '🔁', text: 'CI/CD Pipelines' },
        { emoji: '🤖', text: 'AI Integration' },
        { emoji: '☸️', text: 'Kubernetes' },
        { emoji: '🌐', text: 'SEO Optimised' },
        { emoji: '💳', text: 'Payment Integration' },
    ];

    return (
        <div className="marquee-section">
            <div className="marquee-track">
                {items.map((item, i) => (
                    <div key={i} className="marquee-item">
                        <span>{item.emoji}</span>
                        {item.text}
                    </div>
                ))}
            </div>
        </div>
    );
}
