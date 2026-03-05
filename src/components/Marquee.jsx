import { useLanguage } from '../context/LanguageContext';

export default function Marquee() {
    const { tr } = useLanguage();
    const doubled = [...tr.marquee, ...tr.marquee];
    const icons = [...tr.marqueeIcons, ...tr.marqueeIcons];

    return (
        <div className="marquee-section">
            <div className="marquee-track">
                {doubled.map((text, i) => (
                    <div key={i} className="marquee-item">
                        <span>{icons[i % tr.marqueeIcons.length]}</span>
                        {text}
                    </div>
                ))}
            </div>
        </div>
    );
}
