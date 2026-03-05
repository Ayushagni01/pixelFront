import { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
    const canvasRef = useRef(null);
    const { tr } = useLanguage();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animId;
        let particles = [];
        const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
        resize();
        window.addEventListener('resize', resize);
        for (let i = 0; i < 90; i++) {
            particles.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, r: Math.random() * 1.8 + 0.3, dx: (Math.random() - 0.5) * 0.4, dy: (Math.random() - 0.5) * 0.4, color: ['255,120,255', '100,200,255', '180,100,255', '255,180,100'][Math.floor(Math.random() * 4)], alpha: Math.random() * 0.6 + 0.1 });
        }
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${p.color},${p.alpha})`; ctx.fill();
                p.x += p.dx; p.y += p.dy;
                if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
            });
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
                    if (dist < 130) { ctx.beginPath(); ctx.strokeStyle = `rgba(124,58,237,${0.12 * (1 - dist / 130)})`; ctx.lineWidth = 0.5; ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke(); }
                }
            }
            animId = requestAnimationFrame(draw);
        };
        draw();
        return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
    }, []);

    const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <section className="hero" id="home">
            <div className="hero-bg" />
            <div className="hero-bg-glow" />
            <canvas ref={canvasRef} className="hero-canvas" />
            <div className="orb orb-purple" style={{ width: 500, height: 500, top: '-10%', left: '-5%' }} />
            <div className="orb orb-cyan" style={{ width: 350, height: 350, bottom: '5%', right: '20%' }} />
            <div className="orb orb-pink" style={{ width: 300, height: 300, top: '30%', right: '-5%' }} />
            <div className="hero-shapes">
                <div className="shape-glow" />
                <div className="shape shape-1"><div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '0.5rem', padding: '1.5rem' }}><div style={{ width: '100%', height: 8, background: 'rgba(255,255,255,0.1)', borderRadius: 4 }} /><div style={{ width: '80%', height: 8, background: 'rgba(255,255,255,0.07)', borderRadius: 4 }} /><div style={{ marginTop: '0.5rem', fontSize: '2.5rem' }}>⚡</div></div></div>
                <div className="shape shape-2"><div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>🎨</div></div>
                <div className="shape shape-3"><div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>🚀</div></div>
            </div>
            <div className="container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <div className="hero-badge-dot" />
                        {tr.hero.badge}
                    </div>
                    <h1>
                        {tr.hero.h1_1}{' '}
                        <span className="gradient-text" style={{ backgroundSize: '200% 200%', animation: 'gradient-shift 4s ease infinite' }}>
                            {tr.hero.h1_gradient}
                        </span>{' '}
                        {tr.hero.h1_2}
                    </h1>
                    <p className="hero-sub">{tr.hero.sub}</p>
                    <div className="hero-actions">
                        <button className="btn btn-primary" onClick={() => scrollTo('contact')} id="hero-cta-primary">{tr.hero.btn1}</button>
                        <button className="btn btn-outline" onClick={() => scrollTo('portfolio')} id="hero-cta-secondary">{tr.hero.btn2}</button>
                    </div>
                    <div className="hero-stats">
                        {[
                            { num: tr.hero.stat1, label: tr.hero.stat1Label },
                            { num: tr.hero.stat2, label: tr.hero.stat2Label },
                            { num: tr.hero.stat3, label: tr.hero.stat3Label },
                        ].map(s => (
                            <div key={s.label}>
                                <div className="hero-stat-num">{s.num}</div>
                                <div className="hero-stat-label">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
