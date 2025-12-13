'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
    const [showFade, setShowFade] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const hero = document.getElementById('inicio');
            if (!hero) return;
            const scrollY = window.scrollY;
            const trigger = hero.offsetHeight * 0.35; // start fade when scrolling past ~35% of hero
            setShowFade(scrollY > trigger);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden colombian-weave" style={{ backgroundColor: 'var(--brand-red)' }}>
            {/* Gradient Overlay removed */}
            {/* <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent pointer-events-none"></div> */}
            {/* Fade into next section when transitioning out */}
            <div
                className={`pointer-events-none absolute bottom-0 left-0 w-full h-28 bg-gradient-to-b from-transparent to-brand-gray transition-opacity duration-500 ${showFade ? 'opacity-100' : 'opacity-0'
                    }`}
            ></div>

            <div className="pointer-events-none absolute inset-0 z-0">
                <span
                    className="floating-ingredient absolute text-5xl"
                    style={{
                        left: '45%',
                        top: '18%',
                        animationDelay: '0.05s',
                        ['--from-x' as any]: '-70vw',
                        ['--from-y' as any]: '-20vh',
                    }}
                >
                    🌽
                </span>
                <span
                    className="floating-ingredient absolute text-4xl"
                    style={{
                        left: '58%',
                        top: '22%',
                        animationDelay: '0.15s',
                        ['--from-x' as any]: '70vw',
                        ['--from-y' as any]: '-25vh',
                    }}
                >
                    🥕
                </span>
                <span
                    className="floating-ingredient absolute text-3xl"
                    style={{
                        left: '42%',
                        bottom: '20%',
                        animationDelay: '0.25s',
                        ['--from-x' as any]: '-60vw',
                        ['--from-y' as any]: '40vh',
                    }}
                >
                    🌿
                </span>
                <span
                    className="floating-ingredient absolute text-5xl"
                    style={{
                        left: '62%',
                        bottom: '18%',
                        animationDelay: '0.3s',
                        ['--from-x' as any]: '60vw',
                        ['--from-y' as any]: '35vh',
                    }}
                >
                    🍗
                </span>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
                {/* Main heading */}
                <div
                    className="mb-12 animate-liquid-once"
                    style={{
                        animationDelay: '0s',
                        ['--from-x' as any]: '-60vw',
                        ['--from-y' as any]: '-12vh',
                    }}
                >
                    <span className="block text-sm tracking-[0.3em] text-brand-yellow uppercase mb-4 font-medium">
                        Gastronomía Colombiana
                    </span>
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white leading-tight">
                        Ajiaco <span className="text-brand-yellow font-light">&</span> Frijoles
                    </h1>
                    <div className="decorative-line mt-8 bg-white/20"></div>
                </div>

                {/* Subtitle */}
                <p
                    className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-12 font-light leading-relaxed animate-liquid-once"
                    style={{
                        animationDelay: '0.2s',
                        ['--from-x' as any]: '60vw',
                        ['--from-y' as any]: '-10vh',
                    }}
                >
                    Una experiencia culinaria que honra la tradición de nuestros ancestros con la sofisticación de la cocina contemporánea.
                </p>

                {/* CTA Buttons */}
                <div
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-liquid-once"
                    style={{
                        animationDelay: '0.35s',
                        ['--from-x' as any]: '0vw',
                        ['--from-y' as any]: '30vh',
                    }}
                >
                    <a href="#historia" className="btn-primary">
                        Descubrir Historia
                    </a>
                    <a href="#franquicias" className="btn-secondary">
                        Franquicias
                    </a>
                </div>

                {/* Stats - Minimalist */}
                <div
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-32 border-t border-white/20 pt-12 animate-liquid-once"
                    style={{
                        animationDelay: '0.5s',
                        ['--from-x' as any]: '0vw',
                        ['--from-y' as any]: '-30vh',
                    }}
                >
                    <div className="text-center">
                        <div className="text-4xl font-bold text-brand-yellow mb-1 font-serif">40+</div>
                        <p className="text-xs tracking-widest uppercase text-white/80">Años de Legado</p>
                    </div>

                    <div className="text-center border-l border-r border-white/20 px-4">
                        <div className="text-4xl font-bold text-brand-yellow mb-1 font-serif">150+</div>
                        <p className="text-xs tracking-widest uppercase text-white/80">Sedes Nacionales</p>
                    </div>

                    <div className="text-center">
                        <div className="text-4xl font-bold text-brand-yellow mb-1 font-serif">1M+</div>
                        <p className="text-xs tracking-widest uppercase text-white/80">Paladares Felices</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
