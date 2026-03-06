import { useLanguage } from '../context/LanguageContext';

const stepMeta = [
    { num: '01', emoji: '💬', color: '#7C3AED' },
    { num: '02', emoji: '📐', color: '#06B6D4' },
    { num: '03', emoji: '⚡', color: '#EC4899' },
    { num: '04', emoji: '🧪', color: '#F59E0B' },
    { num: '05', emoji: '🚀', color: '#22C55E' },
];

export default function Process() {
    const { tr } = useLanguage();
    const p = tr.process;

    return (
        <section className="process" id="process">
            <div className="container">
                <div className="process-header">
                    <div className="section-tag">{p.tag}</div>
                    <h2 className="section-title">{p.title1} <span className="gradient-text">{p.title2}</span></h2>
                    <p className="section-subtitle">{p.sub}</p>
                </div>
                <div className="process-grid">
                    {stepMeta.map((meta, i) => {
                        const step = p.steps[i];
                        return (
                            <div key={i} className="process-step" id={`step-${i}`}>
                                <div className="step-num" style={{ border: `2px solid ${meta.color}`, boxShadow: `0 0 24px ${meta.color}55` }}>
                                    <span className="gradient-text">{meta.num}</span>
                                </div>
                                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{meta.emoji}</div>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
