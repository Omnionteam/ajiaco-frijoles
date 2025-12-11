'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const sectionIds = ['inicio', 'nosotros', 'menu', 'historia', 'franquicias', 'noticias'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const isRedSection = activeSection === 'inicio' || activeSection === 'menu';
  const textClass = isRedSection ? 'text-white' : 'text-coffee-brown';
  const linkHoverClass = isRedSection ? 'hover:text-brand-yellow' : 'hover:text-terracotta';
  const buttonClasses = isRedSection
    ? 'bg-white text-coffee-brown hover:bg-brand-yellow hover:text-coffee-brown'
    : 'bg-brand-yellow text-coffee-brown hover:bg-coffee-brown hover:text-white';
  const navStyle = {
    backgroundColor: isRedSection ? 'rgba(210, 77, 62, 0.92)' : 'rgba(250, 247, 240, 0.95)',
    backdropFilter: 'blur(12px)',
  };

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/#nosotros' },
    { name: 'Menú', href: '/#menu' },
    { name: 'Sedes', href: '/sedes' },
    { name: 'Franquicias', href: '/#franquicias' },
    { name: 'Noticias', href: '/#noticias' },
  ];

  return (
    <nav
      className="fixed w-full z-50 transition-all duration-300 shadow-sm py-3"
      style={navStyle}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/logo-ajiaco.png"
                alt="Ajiaco & Frijoles Logo"
                className="w-full h-full object-contain drop-shadow-md"
              />
            </div>
            <span className={`font-serif font-bold text-xl md:text-2xl tracking-tight transition-colors ${textClass}`}>
              Ajiaco <span className="text-brand-yellow">&</span> Frijoles
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors ${textClass} ${linkHoverClass}`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/573171503273"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all transform hover:-translate-y-0.5 hover:shadow-lg ${buttonClasses}`}
            >
              Pedir en Línea
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${textClass}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-600 font-medium hover:text-brand-yellow transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/573171503273"
              className="btn-primary text-center mt-2"
              onClick={() => setIsOpen(false)}
            >
              Pedir en Línea
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
