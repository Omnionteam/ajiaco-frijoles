'use client';

export default function MenuSection() {
  return (
    <section
      id="menu"
      className="py-24 relative overflow-hidden min-h-screen flex items-center"
      style={{ backgroundColor: '#d24d3e' }}
    >
      <div className="relative max-w-7xl mx-auto px-6 w-full space-y-16">
        <div className="text-center max-w-3xl mx-auto text-white">
          <span className="text-sm tracking-widest uppercase mb-2 block text-brand-yellow">Nuestro Menú</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Dos platos, cero dudas</h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light">
            Especialistas en dos íconos colombianos: ajiaco santafereño y fríjoles antioqueños. Calidad, rapidez y
            sabor de hogar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="elegant-card bg-white/95 h-full">
            <div className="flex flex-col gap-6 h-full">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-brand-yellow/20 flex items-center justify-center text-3xl">🍲</div>
                <div>
                  <h3 className="text-2xl font-bold text-coffee-brown">Ajiaco Santafereño</h3>
                  <p className="text-sm uppercase tracking-widest text-terracotta">Bogotá en un plato</p>
                </div>
              </div>
              <p className="text-charcoal leading-relaxed">
                Receta clásica con tres papas, guascas frescas y pechuga desmechada. Espeso, reconfortante y con todo lo
                necesario para sentirte en casa.
              </p>
              <ul className="grid grid-cols-2 gap-3 text-gray-700 text-sm">
                {['Arroz blanco', 'Aguacate', 'Alcaparras', 'Crema de leche'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-brand-yellow rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="elegant-card bg-white/95 h-full">
            <div className="flex flex-col gap-6 h-full">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-terracotta/20 flex items-center justify-center text-3xl">🥘</div>
                <div>
                  <h3 className="text-2xl font-bold text-coffee-brown">Fríjoles con garra</h3>
                  <p className="text-sm uppercase tracking-widest text-terracotta">Tradición antioqueña</p>
                </div>
              </div>
              <p className="text-charcoal leading-relaxed">
                Fríjoles bola roja cocinados a fuego lento, cargados de sabor y acompañados de lo mejor de la montaña.
                Porciones generosas, listas para darte energía todo el día.
              </p>
              <ul className="grid grid-cols-2 gap-3 text-gray-700 text-sm">
                {['Chicharrón crocante', 'Arroz blanco', 'Tajadas de maduro', 'Arepa'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-terracotta rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
