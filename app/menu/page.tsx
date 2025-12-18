'use client';

import { useEffect, useState, useRef } from 'react';

export default function Menu() {
    const [showFade, setShowFade] = useState(false);
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const hero = document.getElementById('menu-hero');
            if (!hero) return;

            const trigger = hero.offsetHeight * 0.35;
            setShowFade(window.scrollY > trigger);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setVisible(entry.isIntersecting);
                });
            },
            { threshold: 0.3 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <main ref={sectionRef} className="bg-brand-gray min-h-screen">
            {/* Page Header */}
            <section id="menu-hero" className="relative py-32 md:py-36 bg-brand-red overflow-hidden">
                <div className="absolute inset-0 colombian-weave opacity-10"></div>
                <div
                    className={`pointer-events-none absolute bottom-0 left-0 w-full h-28 bg-gradient-to-b from-transparent to-brand-gray transition-opacity duration-500 ${showFade ? 'opacity-100' : 'opacity-0'}`}
                />
                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-serif">Nuestro Menú</h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
                        Menos es más. Nos especializamos en dos íconos de la gastronomía colombiana.
                    </p>
                </div>
            </section>

            {/* Menu Content */}
            <section className="py-28 md:py-32">
                <div className="max-w-6xl mx-auto px-6 space-y-24">

                    {/* El Ajiaco */}
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div
                            className={`lg:w-1/2 menu-fly ${visible ? 'menu-fly-in' : 'menu-fly-out'}`}
                            style={{ ['--from-x' as any]: '-20vw', ['--from-y' as any]: '6vh' }}
                        >
                            <div className="aspect-square rounded-full bg-brand-yellow/20 relative p-8">
                                <div className="w-full h-full rounded-full bg-white shadow-2xl flex items-center justify-center overflow-hidden border-8 border-white">
                                    {/* Placeholder for Ajiaco Image */}
                                    <div className="text-center">
                                        <span className="text-6xl">🍲</span>
                                        <p className="text-xs text-gray-400 mt-2 uppercase tracking-widest">Foto Ajiaco</p>
                                    </div>
                                </div>
                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 bg-brand-yellow text-coffee-brown font-bold py-2 px-6 rounded-full shadow-lg transform rotate-12">
                                    ¡El Favorito!
                                </div>
                            </div>
                        </div>
                        <div
                            className={`lg:w-1/2 text-center lg:text-left menu-fly ${visible ? 'menu-fly-in' : 'menu-fly-out'}`}
                            style={{ ['--from-x' as any]: '24vw', ['--from-y' as any]: '8vh' }}
                        >
                            <span className="text-terracotta font-bold tracking-widest uppercase text-sm mb-2 block">Bogotá en un plato</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-coffee-brown mb-6 font-serif">
                                Ajiaco Santafereño
                            </h2>
                            <p className="text-charcoal text-lg leading-relaxed mb-8">
                                Nuestra receta secreta perfeccionada por años. Una sopa espesa y reconfortante preparada con tres tipos de papa (criolla, pastusa y sabanera), guascas frescas y pechuga de pollo desmenuzada.
                            </p>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 inline-block w-full">
                                <h3 className="text-coffee-brown font-bold mb-4 border-b border-gray-100 pb-2">Incluye:</h3>
                                <ul className="grid grid-cols-2 gap-4 text-left">
                                    <li className="flex items-center text-gray-600">
                                        <span className="w-2 h-2 bg-brand-yellow rounded-full mr-2"></span>
                                        Arroz Blanco
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <span className="w-2 h-2 bg-brand-yellow rounded-full mr-2"></span>
                                        Aguacate Fresco
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <span className="w-2 h-2 bg-brand-yellow rounded-full mr-2"></span>
                                        Alcaparras
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <span className="w-2 h-2 bg-brand-yellow rounded-full mr-2"></span>
                                        Crema de Leche
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-gray-200"></div>

                    {/* Los Frijoles */}
                    <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
                        <div
                            className={`lg:w-1/2 menu-fly ${visible ? 'menu-fly-in' : 'menu-fly-out'}`}
                            style={{ ['--from-x' as any]: '20vw', ['--from-y' as any]: '6vh' }}
                        >
                            <div className="aspect-square rounded-full bg-terracotta/20 relative p-8">
                                <div className="w-full h-full rounded-full bg-white shadow-2xl flex items-center justify-center overflow-hidden border-8 border-white">
                                    {/* Placeholder for Frijoles Image */}
                                    <div className="text-center">
                                        <span className="text-6xl">🥘</span>
                                        <p className="text-xs text-gray-400 mt-2 uppercase tracking-widest">Foto Frijoles</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`lg:w-1/2 text-center lg:text-left menu-fly ${visible ? 'menu-fly-in' : 'menu-fly-out'}`}
                            style={{ ['--from-x' as any]: '-24vw', ['--from-y' as any]: '8vh' }}
                        >
                            <span className="text-terracotta font-bold tracking-widest uppercase text-sm mb-2 block">Tradición Antioqueña</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-coffee-brown mb-6 font-serif">
                                Fríjoles con Garra
                            </h2>
                            <p className="text-charcoal text-lg leading-relaxed mb-8">
                                Un homenaje a la montaña. Fríjoles bola roja cocinados lentamente hasta lograr la textura perfecta, cargados de sabor y tradición. El plato que te da energía para todo el día.
                            </p>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 inline-block w-full">
                                <h3 className="text-coffee-brown font-bold mb-4 border-b border-gray-100 pb-2">Acompañados de:</h3>
                                <ul className="grid grid-cols-2 gap-4 text-left">
                                    <li className="flex items-center text-gray-600">
                                        <span className="w-2 h-2 bg-terracotta rounded-full mr-2"></span>
                                        Chicharrón Crocante
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <span className="w-2 h-2 bg-terracotta rounded-full mr-2"></span>
                                        Arroz Blanco
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <span className="w-2 h-2 bg-terracotta rounded-full mr-2"></span>
                                        Tajadas de Maduro
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <span className="w-2 h-2 bg-terracotta rounded-full mr-2"></span>
                                        Arepa
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
