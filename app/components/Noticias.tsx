'use client';

const noticias = [
    {
        id: 1,
        category: 'Aperturas',
        date: '15 Nov 2024',
        title: 'Nueva Sede en el Norte de Bogotá',
        description: 'Inauguramos nuestro restaurante más grande hasta la fecha, con capacidad para 200 comensales y zona de eventos privados.',
        color: 'bg-coffee-brown'
    },
    {
        id: 2,
        category: 'Reconocimientos',
        date: '01 Nov 2024',
        title: 'Premio a la Excelencia Gastronómica',
        description: 'La Cámara de Comercio nos otorga el galardón por preservar la tradición culinaria bogotana.',
        color: 'bg-brand-yellow'
    },
    {
        id: 3,
        category: 'Menú',
        date: '20 Oct 2024',
        title: 'Lanzamiento de Temporada',
        description: 'Descubre nuestros nuevos platos inspirados en la región andina, disponibles por tiempo limitado.',
        color: 'bg-terracotta'
    }
];

export default function Noticias() {
    return (
        <section id="noticias" className="py-32 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-sm tracking-widest text-terracotta uppercase mb-2 block">Actualidad</span>
                        <h2 className="text-5xl md:text-6xl font-bold text-coffee-brown font-serif mb-6">Novedades</h2>
                        <p className="text-xl text-charcoal font-light">
                            Manténgase al día con las últimas noticias, eventos y lanzamientos de nuestra marca.
                        </p>
                    </div>
                    <a href="#" className="btn-secondary whitespace-nowrap">Ver Todas las Noticias</a>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-32">
                    {noticias.map((noticia) => (
                        <article key={noticia.id} className="group cursor-pointer">
                            <div className={`h-64 w-full ${noticia.color} rounded-xl mb-6 relative overflow-hidden`}>
                                {/* Placeholder for image */}
                                <div className="absolute inset-0 opacity-20 bg-pattern-dots"></div>
                                <div className="absolute top-6 left-6 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full text-coffee-brown">
                                    {noticia.category}
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                <span>{noticia.date}</span>
                                <span className="w-1 h-1 bg-terracotta rounded-full"></span>
                                <span>3 min lectura</span>
                            </div>

                            <h3 className="text-2xl font-bold text-coffee-brown mb-3 group-hover:text-terracotta transition-colors font-serif">
                                {noticia.title}
                            </h3>

                            <p className="text-charcoal font-light leading-relaxed mb-4">
                                {noticia.description}
                            </p>

                            <span className="inline-flex items-center text-sm font-bold text-coffee-brown border-b-2 border-brand-yellow pb-1 group-hover:border-coffee-brown transition-colors">
                                Leer Más
                                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </span>
                        </article>
                    ))}
                </div>

                {/* Newsletter */}
                <div
                    className="rounded-2xl p-12 md:p-20 text-center relative overflow-hidden"
                    style={{ backgroundColor: 'var(--brand-red)' }}
                >
                    <div className="absolute inset-0 colombian-weave opacity-5"></div>

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">Suscríbase a nuestro Boletín</h3>
                        <p className="text-white/80 mb-10 font-light text-lg">
                            Reciba invitaciones exclusivas a catas, eventos privados y noticias de la marca directamente en su correo.
                        </p>

                        <form className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Su correo electrónico"
                                className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:bg-white/20 transition-colors"
                            />
                            <button className="px-8 py-4 bg-brand-yellow text-coffee-brown font-bold rounded-lg hover:bg-white transition-colors">
                                Suscribirse
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
