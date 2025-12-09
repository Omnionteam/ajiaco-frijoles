'use client';

export default function Historia() {
    return (
        <section id="historia" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20 animate-fade-in-up">
                    <h2 className="section-header">Nuestra Historia</h2>
                    <div className="decorative-line"></div>
                    <p className="section-subtitle">
                        Un viaje de sabores que comenzó hace cuatro décadas, llevando lo mejor de nuestra tierra a tu mesa.
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-terracotta/30 hidden md:block"></div>

                    <div className="space-y-24">
                        {/* 1985 */}
                        <div className="relative flex flex-col md:flex-row items-center justify-between group">
                            <div className="md:w-5/12 mb-8 md:mb-0 text-right pr-0 md:pr-12 animate-fade-in-up">
                                <div className="elegant-card inline-block text-left w-full transform transition-transform group-hover:-translate-y-2">
                                    <span className="text-6xl font-bold text-terracotta/20 absolute -top-8 -left-4 z-0">1985</span>
                                    <h3 className="text-2xl font-bold mb-4 text-coffee-brown relative z-10">El Comienzo</h3>
                                    <p className="text-charcoal relative z-10">
                                        Nace un sueño en una pequeña cocina familiar. Con recetas heredadas de la abuela y un amor profundo por el ajiaco santafereño, abrimos nuestras puertas para compartir el sabor de hogar.
                                    </p>
                                </div>
                            </div>

                            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-brand-yellow rounded-full border-4 border-white shadow-lg z-20 hidden md:block"></div>

                            <div className="md:w-5/12 pl-0 md:pl-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                <div className="aspect-video rounded-xl overflow-hidden shadow-xl relative group-hover:shadow-2xl transition-all duration-500">
                                    <div className="w-full h-full bg-coffee-brown/10 flex items-center justify-center">
                                        <span className="text-coffee-brown font-serif italic">Foto de la primera sede</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2000 */}
                        <div className="relative flex flex-col md:flex-row-reverse items-center justify-between group">
                            <div className="md:w-5/12 mb-8 md:mb-0 text-left pl-0 md:pl-12 animate-fade-in-up">
                                <div className="elegant-card inline-block text-left w-full transform transition-transform group-hover:-translate-y-2">
                                    <span className="text-6xl font-bold text-terracotta/20 absolute -top-8 -right-4 z-0">2000</span>
                                    <h3 className="text-2xl font-bold mb-4 text-coffee-brown relative z-10">Expansión</h3>
                                    <p className="text-charcoal relative z-10">
                                        La pasión por nuestros frijoles antioqueños conquistó corazones. Inauguramos nuestra décima sede, consolidándonos como referentes de la cocina típica colombiana.
                                    </p>
                                </div>
                            </div>

                            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-brand-yellow rounded-full border-4 border-white shadow-lg z-20 hidden md:block"></div>

                            <div className="md:w-5/12 pr-0 md:pr-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                <div className="aspect-video rounded-xl overflow-hidden shadow-xl relative group-hover:shadow-2xl transition-all duration-500">
                                    <div className="w-full h-full bg-coffee-brown/10 flex items-center justify-center">
                                        <span className="text-coffee-brown font-serif italic">Inauguración sede norte</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2025 */}
                        <div className="relative flex flex-col md:flex-row items-center justify-between group">
                            <div className="md:w-5/12 mb-8 md:mb-0 text-right pr-0 md:pr-12 animate-fade-in-up">
                                <div className="elegant-card inline-block text-left w-full transform transition-transform group-hover:-translate-y-2">
                                    <span className="text-6xl font-bold text-terracotta/20 absolute -top-8 -left-4 z-0">2025</span>
                                    <h3 className="text-2xl font-bold mb-4 text-coffee-brown relative z-10">Innovación y Tradición</h3>
                                    <p className="text-charcoal relative z-10">
                                        Hoy, con más de 150 sedes, seguimos innovando sin perder nuestra esencia. Llevamos la experiencia Ajiaco & Frijoles a nuevas generaciones, manteniendo viva nuestra herencia.
                                    </p>
                                </div>
                            </div>

                            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-brand-yellow rounded-full border-4 border-white shadow-lg z-20 hidden md:block"></div>

                            <div className="md:w-5/12 pl-0 md:pl-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                <div className="aspect-video rounded-xl overflow-hidden shadow-xl relative group-hover:shadow-2xl transition-all duration-500">
                                    <div className="w-full h-full bg-coffee-brown/10 flex items-center justify-center">
                                        <span className="text-coffee-brown font-serif italic">Nuevos platos fusión</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
