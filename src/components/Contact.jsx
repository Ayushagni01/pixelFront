import { useState } from 'react';

const contactInfo = [
    {
        icon: '📧',
        label: 'Email Us',
        value: 'hello@pixelforge.studio',
        sub: 'We reply within 2 hours',
    },
    {
        icon: '📱',
        label: 'WhatsApp',
        value: '+91 98765 43210',
        sub: 'Available 9 AM – 9 PM IST',
    },
    {
        icon: '📍',
        label: 'Location',
        value: 'India (Remote Worldwide)',
        sub: 'Serving clients globally',
    },
];

export default function Contact() {
    const [form, setForm] = useState({
        name: '', email: '', phone: '', service: '', budget: '', message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1500);
    };

    return (
        <section className="contact-section" id="contact">
            {/* Orbs */}
            <div className="orb orb-purple" style={{ width: 450, height: 450, bottom: '-10%', right: '-5%', opacity: 0.15 }} />
            <div className="orb orb-pink" style={{ width: 300, height: 300, top: '5%', left: '-8%', opacity: 0.12 }} />

            <div className="container">
                <div className="contact-grid">
                    {/* Left side */}
                    <div>
                        <div className="section-tag">📨 Get In Touch</div>
                        <h2 className="section-title">
                            Let's Build Something <span className="gradient-text">Amazing Together</span>
                        </h2>
                        <p style={{ color: 'var(--clr-muted)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
                            Ready to start your project? Fill out the form or reach us directly.
                            First consultation is always <strong style={{ color: 'var(--clr-violet)' }}>100% free</strong> — no strings attached.
                        </p>

                        {contactInfo.map((c, i) => (
                            <div key={i} className="contact-info-item">
                                <div className="contact-info-icon">{c.icon}</div>
                                <div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--clr-muted)', fontWeight: 600, letterSpacing: '0.08em', marginBottom: '0.2rem' }}>
                                        {c.label}
                                    </div>
                                    <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{c.value}</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--clr-muted)' }}>{c.sub}</div>
                                </div>
                            </div>
                        ))}

                        {/* Trust badges */}
                        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                            {['🔒 Secure & Confidential', '⚡ Fast Response', '✅ Free Consultation'].map((badge, i) => (
                                <div key={i} style={{
                                    padding: '0.4rem 0.9rem',
                                    background: 'rgba(124,58,237,0.1)',
                                    border: '1px solid var(--clr-border)',
                                    borderRadius: 'var(--r-full)',
                                    fontSize: '0.78rem',
                                    color: 'var(--clr-muted)',
                                }}>{badge}</div>
                            ))}
                        </div>
                    </div>

                    {/* Form */}
                    <div className="contact-form">
                        <div className="card">
                            {submitted ? (
                                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
                                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '0.75rem' }}>
                                        Message Received!
                                    </h3>
                                    <p style={{ color: 'var(--clr-muted)' }}>
                                        Thank you! We'll reach out within 2 hours to schedule your free discovery call.
                                    </p>
                                    <button
                                        className="btn btn-primary"
                                        style={{ marginTop: '1.5rem' }}
                                        onClick={() => setSubmitted(false)}
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Full Name *</label>
                                            <input
                                                type="text" name="name" id="contact-name"
                                                placeholder="Rahul Sharma"
                                                value={form.name} onChange={handleChange} required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Email Address *</label>
                                            <input
                                                type="email" name="email" id="contact-email"
                                                placeholder="rahul@company.com"
                                                value={form.email} onChange={handleChange} required
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Phone / WhatsApp</label>
                                            <input
                                                type="tel" name="phone" id="contact-phone"
                                                placeholder="+91 98765 43210"
                                                value={form.phone} onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Service Needed *</label>
                                            <select name="service" id="contact-service" value={form.service} onChange={handleChange} required>
                                                <option value="">Select a service</option>
                                                <option value="landing">Landing Page</option>
                                                <option value="website">Custom Website</option>
                                                <option value="ecommerce">E-Commerce Store</option>
                                                <option value="webapp">Web Application</option>
                                                <option value="revamp">Website Revamp</option>
                                                <option value="maintenance">Monthly Maintenance</option>
                                                <option value="other">Other / Custom</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Budget Range</label>
                                        <select name="budget" id="contact-budget" value={form.budget} onChange={handleChange}>
                                            <option value="">Select budget range</option>
                                            <option value="under10k">Under ₹10,000</option>
                                            <option value="10k-25k">₹10,000 – ₹25,000</option>
                                            <option value="25k-60k">₹25,000 – ₹60,000</option>
                                            <option value="60k+">Above ₹60,000</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>Project Details *</label>
                                        <textarea
                                            name="message" id="contact-message"
                                            placeholder="Tell us about your project, goals, timeline, and any special requirements..."
                                            value={form.message} onChange={handleChange} required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary form-submit"
                                        id="contact-submit"
                                        disabled={loading}
                                        style={{ justifyContent: 'center', opacity: loading ? 0.7 : 1 }}
                                    >
                                        {loading ? '⏳ Sending...' : '🚀 Send Message & Get Free Quote'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
