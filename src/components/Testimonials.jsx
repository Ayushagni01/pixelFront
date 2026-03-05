const testimonials = [
    {
        stars: '★★★★★',
        text: 'PixelForge completely transformed our online presence. The website they built tripled our leads in the first month. Absolutely stunning work and delivered ahead of schedule!',
        name: 'Rahul Sharma',
        role: 'CEO, TechNova Pvt Ltd',
        initials: 'RS',
        gradient: 'linear-gradient(135deg, #7C3AED, #EC4899)',
    },
    {
        stars: '★★★★★',
        text: 'I was blown away by the quality and attention to detail. They understood our brand instantly and delivered a masterpiece. The whole team is super professional and responsive.',
        name: 'Priya Patel',
        role: 'Founder, Bloom Beauty',
        initials: 'PP',
        gradient: 'linear-gradient(135deg, #EC4899, #F59E0B)',
    },
    {
        stars: '★★★★★',
        text: 'Best web development experience I\'ve ever had. From discovery call to launch in just 3 weeks. The team is extraordinary — they turned our vision into reality perfectly.',
        name: 'Arjun Mehta',
        role: 'Director, Skyline Realty',
        initials: 'AM',
        gradient: 'linear-gradient(135deg, #06B6D4, #7C3AED)',
    },
    {
        stars: '★★★★★',
        text: 'Our e-commerce revenue doubled after the revamp. They handled everything — design, development, Razorpay integration, even SEO. Truly a one-stop shop for web excellence.',
        name: 'Sneha Gupta',
        role: 'Owner, StyleHub India',
        initials: 'SG',
        gradient: 'linear-gradient(135deg, #22C55E, #06B6D4)',
    },
    {
        stars: '★★★★★',
        text: 'Exceptional communication throughout the project. The React dashboard they built handles 50k daily active users flawlessly. Highly recommend for any serious business.',
        name: 'Vikram Singh',
        role: 'CTO, LogiTrack Systems',
        initials: 'VS',
        gradient: 'linear-gradient(135deg, #F59E0B, #EC4899)',
    },
    {
        stars: '★★★★★',
        text: 'From a simple idea explained over WhatsApp to a full-blown web app in 4 weeks. These guys are magicians. The UI is breathtaking and the performance is next level.',
        name: 'Kavya Reddy',
        role: 'Startup Founder, EduMind',
        initials: 'KR',
        gradient: 'linear-gradient(135deg, #A855F7, #EC4899)',
    },
];

export default function Testimonials() {
    return (
        <section className="testimonials" id="testimonials">
            <div className="container">
                <div className="testimonials-header">
                    <div className="section-tag">💬 Testimonials</div>
                    <h2 className="section-title">
                        Clients Love What <span className="gradient-text">We Build</span>
                    </h2>
                    <p className="section-subtitle">
                        Don't just take our word for it — here's what our clients say about
                        working with PixelForge Studio.
                    </p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((t, i) => (
                        <div key={i} className="card testimonial-card" id={`testimonial-${i}`}>
                            <div className="testimonial-stars">{t.stars}</div>
                            <p className="testimonial-text">{t.text}</p>
                            <div className="testimonial-author">
                                <div
                                    className="author-avatar"
                                    style={{ background: t.gradient }}
                                >
                                    {t.initials}
                                </div>
                                <div>
                                    <div className="author-name">{t.name}</div>
                                    <div className="author-role">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
