'use client';

import { useEffect, useState } from 'react';

type MediaBlockProps = {
  label?: string;
  colorFrom: string;
  colorTo: string;
  className?: string;
  src?: string;
  poster?: string;
  overlayText?: string;
  overlayClass?: string;
};

function MediaBlock({
  label,
  colorFrom,
  colorTo,
  className = '',
  src,
  poster,
  overlayText,
  overlayClass = '',
}: MediaBlockProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl shadow-xl ${className}`}
      style={{ background: `linear-gradient(135deg, ${colorFrom}, ${colorTo})` }}
    >
      {src ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={src}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-white/80 text-xs tracking-[0.28em] uppercase">
          Video loop
        </div>
      )}
      {overlayText && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <span
            className={`text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.45)] transition-opacity duration-500 ${overlayClass}`}
          >
            {overlayText}
          </span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/35"></div>
      {label && !overlayText && (
        <span className="absolute left-4 bottom-4 text-white text-lg font-semibold drop-shadow-sm">{label}</span>
      )}
    </div>
  );
}

export default function Hero() {
  const [showFade, setShowFade] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [fontVariantIndex, setFontVariantIndex] = useState(0);

  const videoSources = [
    'https://hcyxhuvyqvtlvfsnrhjw.supabase.co/storage/v1/object/public/ajiaco%20y%20frijoles/contenido%20audiovisual/platanos%20olla.mp4',
    'https://hcyxhuvyqvtlvfsnrhjw.supabase.co/storage/v1/object/public/ajiaco%20y%20frijoles/contenido%20audiovisual/logo%20cocina%20metal.mp4',
    'https://hcyxhuvyqvtlvfsnrhjw.supabase.co/storage/v1/object/public/ajiaco%20y%20frijoles/contenido%20audiovisual/cortando%20platanos%202.mp4',
    'https://hcyxhuvyqvtlvfsnrhjw.supabase.co/storage/v1/object/public/ajiaco%20y%20frijoles/contenido%20audiovisual/plato%20frijoles%202.mov',
    'https://hcyxhuvyqvtlvfsnrhjw.supabase.co/storage/v1/object/public/ajiaco%20y%20frijoles/contenido%20audiovisual/cocineros%20cocina.mp4',
  ];
  const wordCycle = [
    { text: 'Sabor', className: 'tracking-[0.08em]' },
    { text: 'Tradición', className: 'tracking-[0.16em] uppercase' },
    { text: 'Experiencias', className: 'tracking-[0.12em]' },
    { text: 'Colombia', className: 'tracking-[0.14em]' },
    { text: 'Ajiaco & Frijoles', className: 'tracking-[0.1em]' },
  ];
  const fontVariants = [
    { className: 'text-3xl md:text-4xl font-serif italic' },
    { className: 'text-3xl md:text-4xl font-serif font-semibold' },
    { className: 'text-3xl md:text-4xl font-semibold italic' },
    { className: 'text-3xl md:text-4xl font-serif' },
    { className: 'text-3xl md:text-4xl font-serif uppercase tracking-[0.2em]' },
    { className: 'text-3xl md:text-4xl font-semibold uppercase tracking-[0.18em]' },
    { className: 'text-3xl md:text-4xl font-serif italic tracking-[0.22em]' },
    { className: 'text-3xl md:text-4xl font-medium tracking-[0.24em]' },
    { className: 'text-3xl md:text-4xl font-semibold tracking-[0.28em]' },
    { className: 'text-3xl md:text-4xl font-serif font-bold tracking-[0.26em]' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('inicio');
      if (!hero) return;
      const trigger = hero.offsetHeight * 0.35;
      setShowFade(window.scrollY > trigger);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setVideoIndex((idx) => (idx + 1) % videoSources.length);
      setWordIndex((idx) => (idx + 1) % wordCycle.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [videoSources.length, wordCycle.length]);

  useEffect(() => {
    setFontVariantIndex(0);
    const fontInterval = setInterval(() => {
      setFontVariantIndex((idx) => (idx + 1) % fontVariants.length);
    }, 400);
    return () => clearInterval(fontInterval);
  }, [wordIndex, fontVariants.length]);

  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden colombian-weave px-4 md:px-10 lg:px-14 py-16 md:py-24"
      style={{ backgroundColor: 'var(--brand-red)' }}
    >
      <div
        className={`pointer-events-none absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-brand-gray/80 transition-opacity duration-500 ${
          showFade ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>

      <div className="pointer-events-none absolute inset-0 z-0">
        <span
          className="floating-ingredient absolute text-5xl"
          style={{
            left: '44%',
            top: '16%',
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
            left: '57%',
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
            left: '40%',
            bottom: '18%',
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
            bottom: '16%',
            animationDelay: '0.3s',
            ['--from-x' as any]: '60vw',
            ['--from-y' as any]: '35vh',
          }}
        >
          🍗
        </span>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto space-y-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div
              className="animate-liquid-once"
              style={{
                ['--from-x' as any]: '-60vw',
                ['--from-y' as any]: '-12vh',
              }}
            >
              <p className="text-xs tracking-[0.35em] text-brand-yellow/80 uppercase mb-4">Gastronomía Colombiana</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Ajiaco <span className="text-brand-yellow font-light">&</span> Frijoles
              </h1>
              <div className="decorative-line mt-6 bg-white/30"></div>
            </div>

            <p
              className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed animate-liquid-once"
              style={{
                ['--from-x' as any]: '60vw',
                ['--from-y' as any]: '-10vh',
                animationDelay: '0.15s',
              }}
            >
              Una experiencia culinaria que honra la tradición de nuestros ancestros con la sofisticación de la cocina
              contemporánea. Transformamos alimento en arte, con la idea de llegar al corazón y quedarnos en la mente.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 animate-liquid-once"
              style={{
                ['--from-x' as any]: '0vw',
                ['--from-y' as any]: '30vh',
                animationDelay: '0.3s',
              }}
            >
              <a href="#historia" className="btn-primary">
                Descubrir Historia
              </a>
              <a href="#franquicias" className="btn-secondary">
                Franquicias
              </a>
            </div>
          </div>

          <div
            className="lg:col-span-5 flex justify-center lg:justify-end animate-liquid-once"
            style={{
              ['--from-x' as any]: '60vw',
              ['--from-y' as any]: '24vh',
              animationDelay: '0.25s',
            }}
          >
            <MediaBlock
              label="Video destacado"
              colorFrom="#e0a14b"
              colorTo="#d0672c"
              className="w-full max-w-[520px] min-h-[380px]"
              src={videoSources[videoIndex]}
              overlayText={wordCycle[wordIndex].text}
              overlayClass={`${fontVariants[fontVariantIndex].className} ${wordCycle[wordIndex].className}`}
            />
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-white/20 pt-10 animate-liquid-once"
          style={{
            ['--from-x' as any]: '0vw',
            ['--from-y' as any]: '-30vh',
            animationDelay: '0.45s',
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
