import React from 'react';

const Partners: React.FC = () => {
    // Array of logo names
    const logos = [
        { name: 'APG', url: '/apg.png' },
        { name: 'Dunkin Donuts', url: '/dunkin donuts.png' },
        { name: 'Gift Wift', url: '/gift wift.png' },
        { name: 'Leopards', url: '/leopards.png' },
        { name: 'Qatar Airways', url: '/qatar airways.png' },
        { name: 'SGL', url: '/sgl.png' },
    ];

    // Triple the logos for smoother infinite scroll
    const extendedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

    return (
        <section className="py-20 bg-white border-b border-gray-100 overflow-hidden relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
                <h3 className="text-sm font-bold font-heading text-[#94A3B8] tracking-[0.25em] uppercase">
                    Trusted by Global Industry Leaders
                </h3>
            </div>

            <div className="relative w-full group">
                <div className="absolute left-0 top-0 h-full w-32 md:w-64 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 h-full w-32 md:w-64 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                <div className="flex animate-scroll hover:[animation-play-state:paused] items-center">
                    {extendedLogos.map((logo, index) => (
                        <div
                            key={`${logo.name}-${index}`}
                            className="flex-shrink-0 mx-12 md:mx-16 flex items-center justify-center transition-all duration-500 cursor-pointer group/logo"
                        >
                            <img
                                src={logo.url}
                                alt={logo.name}
                                className="h-32 md:h-36 lg:h-16 w-auto object-contain transform group-hover/logo:scale-105 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
