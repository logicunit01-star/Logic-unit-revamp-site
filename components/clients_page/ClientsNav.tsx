import React from 'react';

const navItems = [
    { name: 'About Our Partners', href: '#our-partners' },
    { name: 'Success Stories', href: '#success-stories' },
    { name: 'Why Client Choose Us', href: '#why-choose-us' },
];

const ClientsNav: React.FC = () => {
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const headerOffset = 140; 
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                 top: offsetPosition,
                 behavior: "smooth"
            });
        }
    };

    return (
        <div className="sticky top-[93px] bg-white/90 backdrop-blur-md shadow-sm z-40 border-b border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex items-center justify-center -mb-px space-x-4 sm:space-x-8" aria-label="Tabs">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            className="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-brand-primary hover:border-brand-primary transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default ClientsNav;