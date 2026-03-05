import { useLanguage } from '../context/LanguageContext';

const projectMeta = [
    { emoji: '🛒', bg: 'linear-gradient(135deg,#1a0533,#0a1628)', accent: '#7C3AED', dots: ['#7C3AED', '#EC4899', '#06B6D4'] },
    { emoji: '📊', bg: 'linear-gradient(135deg,#051628,#0a0a20)', accent: '#06B6D4', dots: ['#06B6D4', '#84CC16', '#F59E0B'] },
    { emoji: '🏥', bg: 'linear-gradient(135deg,#051218,#051a12)', accent: '#22C55E', dots: ['#22C55E', '#06B6D4', '#84CC16'] },
    { emoji: '🏡', bg: 'linear-gradient(135deg,#1a0a05,#100510)', accent: '#F59E0B', dots: ['#F59E0B', '#EC4899', '#7C3AED'] },
];

function MockupCard({ meta }) {
    return (
        <div style={{ position: 'absolute', inset: 0, background: meta.bg, display: 'flex', flexDirection: 'column', padding: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
                {meta.dots.map((c, i) => <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />)}
                <div style={{ flex: 1, height: 8, background: 'rgba(255,255,255,0.06)', borderRadius: 4, marginLeft: '0.25rem' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: `${meta.accent}33`, border: `1px solid ${meta.accent}55`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>{meta.emoji}</div>
                <div>
                    <div style={{ height: 8, width: 80, background: 'rgba(255,255,255,0.15)', borderRadius: 4, marginBottom: 4 }} />
                    <div style={{ height: 6, width: 55, background: 'rgba(255,255,255,0.07)', borderRadius: 4 }} />
                </div>
            </div>
            {[100, 85, 90, 70].map((w, i) => <div key={i} style={{ height: 7, width: `${w}%`, background: i === 0 ? `${meta.accent}44` : 'rgba(255,255,255,0.06)', borderRadius: 4, marginBottom: 6 }} />)}
            <div style={{ marginTop: 'auto', display: 'flex', gap: '0.5rem' }}>
                <div style={{ height: 28, flex: 1, background: meta.accent, borderRadius: 6, opacity: 0.7 }} />
                <div style={{ height: 28, flex: 1, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6 }} />
            </div>
        </div>
    );
}

export default function Portfolio() {
    const { tr } = useLanguage();
    const p = tr.portfolio;
    const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <section className="portfolio" id="portfolio">
            <div className="container">
                <div className="portfolio-header">
                    <div>
                        <div className="section-tag">{p.tag}</div>
                        <h2 className="section-title">{p.title1} <span className="gradient-text">{p.title2}</span></h2>
                    </div>
                    <a href="#contact" className="btn btn-outline" onClick={e => { e.preventDefault(); scrollTo('contact'); }}>{p.seeAll}</a>
                </div>
                <div className="portfolio-grid">
                    {projectMeta.map((meta, i) => {
                        const item = p.items[i];
                        return (
                            <div key={i} className="portfolio-item" id={`proj-${i}`}>
                                <MockupCard meta={meta} />
                                <div className="portfolio-overlay">
                                    <div className="portfolio-tag">{item.tag}</div>
                                    <div className="portfolio-name">{item.name}</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--clr-muted)', marginTop: '0.25rem' }}>{item.desc}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
