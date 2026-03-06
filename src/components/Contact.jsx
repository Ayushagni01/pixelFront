import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
    const { tr } = useLanguage();
    const c = tr.contact;
    const f = c.form;

    const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', budget: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
    };

    return (
        <section className="contact-section" id="contact">
            <div className="orb orb-purple" style={{ width: 450, height: 450, bottom: '-10%', right: '-5%', opacity: 0.15 }} />
            <div className="orb orb-pink" style={{ width: 300, height: 300, top: '5%', left: '-8%', opacity: 0.12 }} />
            <div className="container">
                <div className="contact-grid">
                    {/* Left */}
                    <div>
                        <div className="section-tag">{c.tag}</div>
                        <h2 className="section-title">{c.title1} <span className="gradient-text">{c.title2}</span></h2>
                        <p style={{ color: 'var(--clr-muted)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
                            {c.sub} <strong style={{ color: 'var(--clr-violet)' }}>{c.subFree}</strong> {c.subEnd}
                        </p>
                        {c.infos.map((info, i) => (
                            <div key={i} className="contact-info-item">
                                <div className="contact-info-icon">{info.icon}</div>
                                <div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--clr-muted)', fontWeight: 600, letterSpacing: '0.08em', marginBottom: '0.2rem' }}>{info.label}</div>
                                    <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{info.value}</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--clr-muted)' }}>{info.sub}</div>
                                </div>
                            </div>
                        ))}
                        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                            {c.badges.map((b, i) => (
                                <div key={i} style={{ padding: '0.4rem 0.9rem', background: 'rgba(124,58,237,0.1)', border: '1px solid var(--clr-border)', borderRadius: 'var(--r-full)', fontSize: '0.78rem', color: 'var(--clr-muted)' }}>{b}</div>
                            ))}
                        </div>
                    </div>
                    {/* Form */}
                    <div className="contact-form">
                        <div className="card">
                            {submitted ? (
                                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
                                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '0.75rem' }}>{f.successTitle}</h3>
                                    <p style={{ color: 'var(--clr-muted)' }}>{f.successMsg}</p>
                                    <button className="btn btn-primary" style={{ marginTop: '1.5rem' }} onClick={() => setSubmitted(false)}>{f.successBtn}</button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group"><label>{f.name} *</label><input type="text" name="name" id="contact-name" placeholder={f.namePh} value={form.name} onChange={handleChange} required /></div>
                                        <div className="form-group"><label>{f.email} *</label><input type="email" name="email" id="contact-email" placeholder={f.emailPh} value={form.email} onChange={handleChange} required /></div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group"><label>{f.phone}</label><input type="tel" name="phone" id="contact-phone" placeholder={f.phonePh} value={form.phone} onChange={handleChange} /></div>
                                        <div className="form-group">
                                            <label>{f.service} *</label>
                                            <select name="service" id="contact-service" value={form.service} onChange={handleChange} required>
                                                {f.serviceOpts.map(o => <option key={o.v} value={o.v}>{o.l}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>{f.budget}</label>
                                        <select name="budget" id="contact-budget" value={form.budget} onChange={handleChange}>
                                            {f.budgetOpts.map(o => <option key={o.v} value={o.v}>{o.l}</option>)}
                                        </select>
                                    </div>
                                    <div className="form-group"><label>{f.message} *</label><textarea name="message" id="contact-message" placeholder={f.messagePh} value={form.message} onChange={handleChange} required /></div>
                                    <button type="submit" className="btn btn-primary form-submit" id="contact-submit" disabled={loading} style={{ justifyContent: 'center', opacity: loading ? 0.7 : 1 }}>
                                        {loading ? f.submitting : f.submit}
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
