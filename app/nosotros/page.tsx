'use client';

export default function Nosotros() {
    return (
        <main className="bg-brand-gray min-h-screen">
            {/* Page Header */}
            <section className="relative py-24 bg-brand-red overflow-hidden">
                <div className="absolute inset-0 colombian-weave opacity-10"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-serif">Nuestra Esencia</h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
                        Tradición, autenticidad y el sabor de hogar que nos define.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6 space-y-16">

                    {/* Nuestra Esencia */}
                    <div className="elegant-card">
                        <h2 className="text-3xl font-bold text-coffee-brown mb-6 font-serif border-b border-gray-100 pb-4">
                            Tradición Auténtica
                        </h2>
                        <p className="text-charcoal text-lg leading-relaxed mb-6">
                            En <span className="font-bold text-terracotta">Ajiaco & Fríjoles</span> creemos que la tradición se disfruta de forma auténtica: dos platos, dos sabores profundamente colombianos, preparados con el mejor esmero y servidos con agilidad.
                        </p>
                        <p className="text-charcoal text-lg leading-relaxed">
                            Nos hemos especializado en lo que hacemos mejor para que tu almuerzo sea sabroso, rápido y con un precio justo. No buscamos complicar el menú, sino perfeccionar la experiencia de los sabores que todos amamos.
                        </p>
                    </div>

                    {/* Nuestra Propuesta */}
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="order-2 md:order-1">
                            <h2 className="text-3xl font-bold text-coffee-brown mb-6 font-serif">
                                Nuestra Propuesta
                            </h2>
                            <p className="text-charcoal text-lg leading-relaxed mb-6">
                                Nos centramos en ofrecerte un ajiaco o unos fríjoles de calidad, con el sabor de hogar, en un ambiente cómodo, sin complicaciones.
                            </p>
                            <div className="bg-brand-yellow/10 p-6 rounded-xl border-l-4 border-brand-yellow">
                                <p className="text-coffee-brown italic font-medium">
                                    "Porque a veces lo simple es lo más valioso."
                                </p>
                            </div>
                        </div>
                        <div className="order-1 md:order-2 h-64 bg-terracotta/10 rounded-xl flex items-center justify-center relative overflow-hidden">
                            {/* Pattern placeholder */}
                            <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
                            <span className="text-terracotta font-serif text-6xl opacity-20">A&F</span>
                        </div>
                    </div>

                    {/* Claves del Éxito */}
                    <div>
                        <h2 className="text-center text-3xl font-bold text-coffee-brown mb-12 font-serif">
                            Nuestros Pilares
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                                <div className="w-16 h-16 bg-brand-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-yellow">
                                    <svg className="w-8 h-8 text-coffee-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                </div>
                                <h3 className="text-xl font-bold text-coffee-brown mb-2">Velocidad</h3>
                                <p className="text-gray-600">Tu tiempo es valioso. Servimos con agilidad sin sacrificar la calidad.</p>
                            </div>
                            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                                <div className="w-16 h-16 bg-brand-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-yellow">
                                    <svg className="w-8 h-8 text-coffee-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <h3 className="text-xl font-bold text-coffee-brown mb-2">Simplicidad</h3>
                                <p className="text-gray-600">Dos platos perfectos. Sin complicaciones, solo sabor auténtico.</p>
                            </div>
                            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                                <div className="w-16 h-16 bg-brand-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-yellow">
                                    <svg className="w-8 h-8 text-coffee-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <h3 className="text-xl font-bold text-coffee-brown mb-2">Valor Justo</h3>
                                <p className="text-gray-600">La mejor relación calidad-precio para tu almuerzo diario.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
