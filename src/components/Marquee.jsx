export default function Marquee() {
    const items = [
        { emoji: '🚀', text: 'React & Next.js' },
        { emoji: '⚡', text: 'Lightning Fast' },
        { emoji: '🎨', text: 'Stunning UI/UX' },
        { emoji: '📱', text: 'Mobile First' },
        { emoji: '🔒', text: 'Secure & Scalable' },
        { emoji: '💳', text: 'Payment Integration' },
        { emoji: '🌐', text: 'SEO Optimised' },
        { emoji: '🤖', text: 'AI Powered' },
        { emoji: '📊', text: 'Analytics Ready' },
        { emoji: '🎯', text: 'Conversion Focused' },
        { emoji: '🚀', text: 'React & Next.js' },
        { emoji: '⚡', text: 'Lightning Fast' },
        { emoji: '🎨', text: 'Stunning UI/UX' },
        { emoji: '📱', text: 'Mobile First' },
        { emoji: '🔒', text: 'Secure & Scalable' },
        { emoji: '💳', text: 'Payment Integration' },
        { emoji: '🌐', text: 'SEO Optimised' },
        { emoji: '🤖', text: 'AI Powered' },
        { emoji: '📊', text: 'Analytics Ready' },
        { emoji: '🎯', text: 'Conversion Focused' },
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
