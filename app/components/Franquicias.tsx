'use client';

import { useState } from 'react';

export default function Franquicias() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        ciudad: '',
        mensaje: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const mensaje = `Hola, estoy interesado en una franquicia. Mis datos son:%0ANombre: ${formData.nombre}%0AEmail: ${formData.email}%0ATeléfono: ${formData.telefono}%0ACiudad: ${formData.ciudad}%0AMensaje: ${formData.mensaje}`;
        window.open(`https://wa.me/573171503273?text=${mensaje}`, '_blank');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="franquicias" className="py-32 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 colombian-weave opacity-50"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="text-sm tracking-widest text-terracotta uppercase mb-2 block">Oportunidad de Negocio</span>
                    <h2 className="section-header">Únete a la Familia</h2>
                    <div className="decorative-line"></div>
                    <p className="section-subtitle">
                        Sea parte de la cadena de restaurantes de comida típica más exitosa del país.
                        Un modelo de negocio probado y rentable.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Info Column */}
                    <div className="space-y-12">
                        <div className="elegant-card bg-white">
                            <h3 className="text-2xl font-bold mb-8 text-coffee-brown font-serif">¿Por qué invertir?</h3>

                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-yellow">
                                        <svg className="w-6 h-6 text-coffee-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-coffee-brown mb-2">Alta Rentabilidad</h4>
                                        <p className="text-charcoal font-light">Retorno de inversión estimado entre 18 y 24 meses con márgenes operativos superiores al promedio.</p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-yellow">
                                        <svg className="w-6 h-6 text-coffee-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-coffee-brown mb-2">Marca Consolidada</h4>
                                        <p className="text-charcoal font-light">Respaldo de una marca con 40 años de trayectoria y reconocimiento nacional.</p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-yellow">
                                        <svg className="w-6 h-6 text-coffee-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-coffee-brown mb-2">Know-How y Soporte</h4>
                                        <p className="text-charcoal font-light">Capacitación constante, manuales operativos y acompañamiento permanente.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl border border-terracotta/20 shadow-sm text-center">
                                <div className="text-3xl font-bold text-coffee-brown mb-1">120m²</div>
                                <div className="text-xs text-terracotta uppercase tracking-wider">Área Mínima</div>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-terracotta/20 shadow-sm text-center">
                                <div className="text-3xl font-bold text-coffee-brown mb-1">500M</div>
                                <div className="text-xs text-terracotta uppercase tracking-wider">Inversión Desde</div>
                            </div>
                        </div>
                    </div>

                    {/* Form Column */}
                    <div className="elegant-card bg-white sticky top-32">
                        <h3 className="text-2xl font-bold mb-2 text-coffee-brown font-serif">Solicitar Información</h3>
                        <p className="text-charcoal mb-8 font-light">Complete el formulario para recibir nuestro dossier de franquicias.</p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-medium text-coffee-brown uppercase tracking-wider mb-2">Nombre</label>
                                    <input
                                        type="text"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-brand-gray border-transparent focus:border-terracotta focus:bg-white focus:ring-0 transition-colors"
                                        placeholder="Juan Pérez"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-coffee-brown uppercase tracking-wider mb-2">Teléfono</label>
                                    <input
                                        type="tel"
                                        name="telefono"
                                        value={formData.telefono}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg bg-brand-gray border-transparent focus:border-terracotta focus:bg-white focus:ring-0 transition-colors"
                                        placeholder="+57 300..."
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-coffee-brown uppercase tracking-wider mb-2">Email Corporativo</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-brand-gray border-transparent focus:border-terracotta focus:bg-white focus:ring-0 transition-colors"
                                    placeholder="juan@empresa.com"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-coffee-brown uppercase tracking-wider mb-2">Ciudad de Interés</label>
                                <select
                                    name="ciudad"
                                    value={formData.ciudad}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-brand-gray border-transparent focus:border-terracotta focus:bg-white focus:ring-0 transition-colors"
                                >
                                    <option value="">Seleccione una ciudad</option>
                                    <option value="Bogotá">Bogotá D.C.</option>
                                    <option value="Medellín">Medellín</option>
                                    <option value="Cali">Cali</option>
                                    <option value="Barranquilla">Barranquilla</option>
                                    <option value="Otra">Otra</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-coffee-brown uppercase tracking-wider mb-2">Mensaje</label>
                                <textarea
                                    name="mensaje"
                                    value={formData.mensaje}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-brand-gray border-transparent focus:border-terracotta focus:bg-white focus:ring-0 transition-colors"
                                    placeholder="Cuéntenos sobre su perfil empresarial..."
                                ></textarea>
                            </div>

                            <button type="submit" className="w-full btn-primary py-4 text-sm uppercase tracking-widest font-bold">
                                Enviar Solicitud
                            </button>

                            <p className="text-xs text-gray-400 text-center mt-4">
                                Al enviar este formulario acepta nuestra política de tratamiento de datos.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
