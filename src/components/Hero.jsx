import { useEffect, useRef } from 'react';

export default function Hero() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animId;
        let particles = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        // Create particles
        for (let i = 0; i < 90; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 1.8 + 0.3,
                dx: (Math.random() - 0.5) * 0.4,
                dy: (Math.random() - 0.5) * 0.4,
                color: ['255,120,255', '100,200,255', '180,100,255', '255,180,100'][Math.floor(Math.random() * 4)],
                alpha: Math.random() * 0.6 + 0.1,
            });
        }

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
                ctx.fill();

                p.x += p.dx;
                p.y += p.dy;

                if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
            });

            // Draw connecting lines
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
                    if (dist < 130) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(124,58,237,${0.12 * (1 - dist / 130)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            animId = requestAnimationFrame(draw);
        };
        draw();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    const scrollToWork = () => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });

    return (
        <section className="hero" id="home">
            <div className="hero-bg" />
            <div className="hero-bg-glow" />
            <canvas ref={canvasRef} className="hero-canvas" />

            {/* Orbs */}
            <div className="orb orb-purple" style={{ width: 500, height: 500, top: '-10%', left: '-5%' }} />
            <div className="orb orb-cyan" style={{ width: 350, height: 350, bottom: '5%', right: '20%' }} />
            <div className="orb orb-pink" style={{ width: 300, height: 300, top: '30%', right: '-5%' }} />

            {/* Floating shapes */}
            <div className="hero-shapes">
                <div className="shape-glow" />
                <div className="shape shape-1">
                    <div style={{
                        position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '1.5rem', opacity: 0.7, flexDirection: 'column', gap: '0.5rem', padding: '1.5rem'
                    }}>
                        <div style={{ width: '100%', height: 8, background: 'rgba(255,255,255,0.1)', borderRadius: 4 }} />
                        <div style={{ width: '80%', height: 8, background: 'rgba(255,255,255,0.07)', borderRadius: 4 }} />
                        <div style={{ width: '90%', height: 8, background: 'rgba(255,255,255,0.07)', borderRadius: 4 }} />
                        <div style={{ marginTop: '0.5rem', fontSize: '2.5rem' }}>⚡</div>
                    </div>
                </div>
                <div className="shape shape-2">
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>🎨</div>
                </div>
                <div className="shape shape-3">
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>🚀</div>
                </div>
            </div>

            <div className="container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <div className="hero-badge-dot" />
                        Open for projects — Limited spots this month
                    </div>

                    <h1>
                        We Build{' '}
                        <span
                            className="gradient-text"
                            style={{
                                backgroundSize: '200% 200%',
                                animation: 'gradient-shift 4s ease infinite',
                            }}
                        >
                            Digital Experiences
                        </span>{' '}
                        That Convert
                    </h1>

                    <p className="hero-sub">
                        Premium web development studio crafting stunning, high-performance websites
                        and web applications tailored exactly to your business vision — on time, on budget.
                    </p>

                    <div className="hero-actions">
                        <button className="btn btn-primary" onClick={scrollToContact} id="hero-cta-primary">
                            🚀 Start Your Project
                        </button>
                        <button className="btn btn-outline" onClick={scrollToWork} id="hero-cta-secondary">
                            View Our Work ↓
                        </button>
                    </div>

                    <div className="hero-stats">
                        {[
                            { num: '150+', label: 'Projects Delivered' },
                            { num: '98%', label: 'Client Satisfaction' },
                            { num: '5★', label: 'Average Rating' },
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
