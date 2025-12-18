'use client';

import { useMemo, useState } from 'react';

type Sede = {
  name: string;
  address: string;
  query: string;
  phone: string;
  hours: string;
  mapLink: string;
};

const sedes: Sede[] = [
  {
    name: 'Santa Bárbara',
    address: 'Carrera 13 #118-29',
    query: 'Carrera 13 #118-29, Bogotá, Colombia',
    phone: '+57 317 150 3273',
    hours: 'Lun-Dom: 11:30am - 9:00pm',
    mapLink: 'https://maps.google.com/?q=Ajiaco+y+Frijoles+Santa+Barbara',
  },
  {
    name: 'Cedritos',
    address: 'Calle 140 #12-15',
    query: 'Calle 140 #12-15, Bogotá, Colombia',
    phone: '+57 317 150 3273',
    hours: 'Lun-Dom: 11:30am - 9:00pm',
    mapLink: 'https://maps.google.com/?q=Ajiaco+y+Frijoles+Cedritos',
  },
  {
    name: 'Niza-Colina',
    address: 'Av. Suba #127-10',
    query: 'Av. Suba #127-10, Bogotá, Colombia',
    phone: '+57 317 150 3273',
    hours: 'Lun-Dom: 11:30am - 9:00pm',
    mapLink: 'https://maps.google.com/?q=Ajiaco+y+Frijoles+Niza',
  },
  {
    name: 'Suba',
    address: 'Calle 145 #90-25',
    query: 'Calle 145 #90-25, Bogotá, Colombia',
    phone: '+57 317 150 3273',
    hours: 'Lun-Dom: 11:30am - 9:00pm',
    mapLink: 'https://maps.google.com/?q=Ajiaco+y+Frijoles+Suba',
  },
  {
    name: 'Toberín',
    address: 'Calle 166 #20-15',
    query: 'Calle 166 #20-15, Bogotá, Colombia',
    phone: '+57 317 150 3273',
    hours: 'Lun-Dom: 11:30am - 9:00pm',
    mapLink: 'https://maps.google.com/?q=Ajiaco+y+Frijoles+Toberin',
  },
];

export default function SedesMap() {
  const [activeIndex, setActiveIndex] = useState(0);

  const mapUrl = useMemo(() => {
    const sede = sedes[activeIndex];
    const q = encodeURIComponent(sede.query);
    return `https://www.google.com/maps?q=${q}&output=embed`;
  }, [activeIndex]);

  return (
    <section id="sedes" className="py-24" style={{ backgroundColor: 'var(--brand-red)' }}>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-4">
          <p className="text-xs tracking-[0.35em] text-brand-yellow/80 uppercase">Sedes</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-serif">Encuentra tu Ajiaco & Frijoles</h2>
          <p className="text-white/90 max-w-xl">
            Selecciona la sede para ver la ubicación en el mapa. Estamos listos para recibirte en nuestros puntos de
            Bogotá.
          </p>

          <div className="space-y-3 mt-6">
            {sedes.map((sede, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={sede.name}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveIndex(idx)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveIndex(idx);
                    }
                  }}
                  className={`relative w-full p-3.5 rounded-xl border transition-all cursor-pointer ${
                    isActive
                      ? 'border-brand-yellow bg-white shadow-lg scale-[1.01]'
                      : 'border-white/30 bg-white/60 hover:border-brand-yellow/70 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="space-y-0.5">
                      <h3 className="text-lg font-semibold text-coffee-brown leading-tight">{sede.name}</h3>
                      <p className="text-sm text-gray-700 leading-tight">{sede.address}</p>
                      <p className="text-xs text-gray-600 leading-tight">{sede.hours}</p>
                    </div>
                    <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">{sede.phone}</span>
                  </div>
                  {isActive && (
                    <a
                      href={sede.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-2 right-2 px-2.5 py-1 text-sm font-semibold rounded-md border border-coffee-brown text-coffee-brown hover:bg-coffee-brown hover:text-white transition-colors bg-white/90"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Cómo llegar
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white flex items-center justify-center translate-y-10 lg:translate-y-20">
          <iframe
            key={mapUrl}
            src={mapUrl}
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            className="w-full h-full"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Mapa ${sedes[activeIndex].name}`}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
