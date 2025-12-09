'use client';

const sedes = [
    {
        name: 'Santa Bárbara',
        address: 'Carrera 13 #118-29',
        phone: '+57 317 150 3273',
        hours: 'Lun-Dom: 11:30am - 9:00pm',
        mapLink: 'https://maps.google.com/?q=Ajiaco+y+Frijoles+Santa+Barbara'
    },
    {
        name: 'Cedritos',
        address: 'Calle 140 #12-15',
        phone: '+57 317 150 3273',
        hours: 'Lun-Dom: 11:30am - 9:00pm',
        mapLink: 'https://maps.google.com/?q=Ajiaco+y+Frijoles+Cedritos'
    },
    {
        name: 'Niza-Colina',
        address: 'Av. Suba #127-10',
        phone: '+57 317 150 3273',
        hours: 'Lun-Dom: 11:30am - 9:00pm',
        mapLink: 'https://maps.google.com/?q=Ajiaco+y+Frijoles+Niza'
    },
    {
        name: 'Suba',
        address: 'Calle 145 #90-25',
        phone: '+57 317 150 3273',
        hours: 'Lun-Dom: 11:30am - 9:00pm',
        mapLink: 'https://maps.google.com/?q=Ajiaco+y+Frijoles+Suba'
    },
    {
        name: 'Toberín',
        address: 'Calle 166 #20-15',
        phone: '+57 317 150 3273',
        hours: 'Lun-Dom: 11:30am - 9:00pm',
        mapLink: 'https://maps.google.com/?q=Ajiaco+y+Frijoles+Toberin'
    }
];

export default function Sedes() {
    return (
        <main className="bg-brand-gray min-h-screen">
            {/* Page Header */}
            <section className="relative py-24 bg-brand-red overflow-hidden">
                <div className="absolute inset-0 colombian-weave opacity-10"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-serif">Nuestras Sedes</h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
                        Estamos cada vez más cerca de ti. Visítanos en nuestros puntos de venta en Bogotá.
                    </p>
                </div>
            </section>

            {/* Locations Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sedes.map((sede, index) => (
                            <div key={index} className="elegant-card group hover:border-brand-yellow/50 transition-colors">
                                <h3 className="text-2xl font-bold text-coffee-brown mb-4 font-serif">{sede.name}</h3>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start text-gray-600">
                                        <svg className="w-5 h-5 text-terracotta mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                        <span>{sede.address}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <svg className="w-5 h-5 text-terracotta mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                        <span>{sede.phone}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <svg className="w-5 h-5 text-terracotta mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <span>{sede.hours}</span>
                                    </div>
                                </div>

                                <a
                                    href={sede.mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full py-3 text-center border-2 border-coffee-brown text-coffee-brown font-bold rounded-lg hover:bg-coffee-brown hover:text-white transition-all"
                                >
                                    Cómo Llegar
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
