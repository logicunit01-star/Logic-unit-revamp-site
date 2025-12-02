
import React from 'react';

const navItems = [
    { name: 'Our Core Capabilities', href: '#core-capabilities' },
    { name: 'Methodology', href: '#how-we-build-it' },
    { name: 'Delivery Models', href: '#delivery-models' },
    { name: 'Consultancy', href: '#consultancy' },
];

const CapabilitiesNav: React.FC = () => {
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const headerOffset = 94; // Height of main header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                 top: offsetPosition,
                 behavior: "smooth"
            });
        }
    };

    return (
        <div className="sticky top-[60px] md:top-[93px] bg-white/95 backdrop-blur-md shadow-sm z-40 border-b border-gray-200 transition-all duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex items-center justify-center -mb-px space-x-6 md:space-x-10 overflow-x-auto no-scrollbar py-4" aria-label="Tabs">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            className="whitespace-nowrap font-medium text-sm text-gray-500 hover:text-brand-primary transition-colors flex items-center gap-1"
                        >
                            {item.name} <span className="text-xs opacity-50">↓</span>
                        </a>
                    ))}
                </nav>
            </div>
            <style>{`.no-scrollbar::-webkit-scrollbar { display: none; } .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
        </div>
    );
};

export default CapabilitiesNav;
