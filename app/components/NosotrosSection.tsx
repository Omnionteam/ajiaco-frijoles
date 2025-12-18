'use client';

const pilares = [
  {
    titulo: 'Tradición auténtica',
    descripcion:
      'Recetas heredadas, respetando cada ingrediente y técnica para mantener vivo el sabor de hogar.',
  },
  {
    titulo: 'Servicio ágil',
    descripcion:
      'Procesos optimizados para que disfrutes de tu plato favorito sin largas esperas.',
  },
  {
    titulo: 'Ingredientes locales',
    descripcion:
      'Seleccionamos proveedores colombianos para garantizar frescura y apoyar a nuestra comunidad.',
  },
  {
    titulo: 'Cercanía real',
    descripcion:
      'Un equipo que te conoce por tu nombre y te hace sentir parte de la familia Ajiaco & Frijoles.',
  },
];

export default function NosotrosSection() {
  return (
    <section id="nosotros" className="py-24 relative overflow-hidden bg-brand-gray">
      <div className="absolute inset-0 colombian-weave opacity-40 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <span className="text-sm tracking-[0.3em] text-terracotta uppercase font-semibold">
            Nosotros
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-brown leading-tight">
            Sabores con raíz, servicio cercano
          </h2>
          <p className="text-lg text-charcoal leading-relaxed">
            Somos la mezcla de tradición santafereña y paisa, servida con la calidez de un equipo que
            disfruta verte volver. Aquí el ajiaco y los fríjoles saben a casa, y el servicio se siente
            personal.
          </p>
          <p className="text-lg text-charcoal leading-relaxed">
            Crecemos escuchando a nuestros clientes y manteniendo lo esencial: platos honestos,
            consistentes y llenos de cariño.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="/nosotros" className="btn-primary">
              Conócenos a fondo
            </a>
            <a
              href="#historia"
              className="btn-secondary border-coffee-brown text-coffee-brown hover:bg-coffee-brown hover:text-white"
            >
              Nuestra historia
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {pilares.map((pilar) => (
            <div
              key={pilar.titulo}
              className="elegant-card shadow-lg border border-terracotta/10 bg-white/90 backdrop-blur"
            >
              <h3 className="text-xl font-bold mb-2">{pilar.titulo}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{pilar.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
