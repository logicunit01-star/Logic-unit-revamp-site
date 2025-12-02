'use client';

import React, { useState, useEffect, useRef, Fragment } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LOGO_URL, NAV_LINKS, ChevronLeftIcon, ChevronRightIcon } from '@/constants';

const ChevronDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
);

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState<(typeof NAV_LINKS[0]) | null>(null);
    const [activeMobileMenu, setActiveMobileMenu] = useState('main');
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const headerRef = useRef<HTMLElement>(null);
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);

        const updateHeaderHeight = () => {
            if (headerRef.current) {
                setHeaderHeight(headerRef.current.offsetHeight);
            }
        };
        updateHeaderHeight();
        window.addEventListener('resize', updateHeaderHeight);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', updateHeaderHeight);
        };
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
        setActiveMenu(null);
    }, [pathname]);

    useEffect(() => {
        if (!isMenuOpen) {
            setActiveMobileMenu('main');
        }
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    const handleMobileSubMenuOpen = (menuName: string) => {
        setActiveMobileMenu(menuName);
    };

    const renderMobileSubMenu = (link: typeof NAV_LINKS[0]) => {
        return (
            <div className="px-2 pt-2 pb-20 space-y-1 sm:px-3">
                {link.megaContent?.main?.map(category => (
                    <div key={category.title}>
                        {(category as any).path ? (
                            <Link
                                href={(category as any).path}
                                className="block font-bold text-brand-primary px-3 py-2 text-sm uppercase tracking-wider"
                            >
                                {category.title}
                            </Link>
                        ) : (
                            <h4 className="font-bold text-brand-dark/50 px-3 py-2 text-sm uppercase tracking-wider cursor-default">
                                {category.title}
                            </h4>
                        )}

                        {category.items.map(item => (
                            (item as any).path ? (
                                <Link
                                    key={item.name}
                                    href={(item as any).path}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-brand-dark/80 hover:bg-brand-secondary/5 hover:text-brand-secondary"
                                >
                                    {item.name}
                                </Link>
                            ) : (
                                <span key={item.name} className="block px-3 py-2 rounded-md text-base font-medium text-brand-dark/60 cursor-default">{item.name}</span>
                            )
                        ))}
                    </div>
                ))}
                {(link.megaContent as any)?.side && (
                    <div>
                        <h4 className="font-bold text-brand-primary px-3 py-2 text-sm uppercase tracking-wider">{(link.megaContent as any).side.title}</h4>
                        {((link.megaContent as any).side as any).items && ((link.megaContent as any).side as any).items.map((item: any) => (
                            <Link key={item.name} href={item.href || '#'} className="block px-3 py-2 rounded-md text-base font-medium text-brand-dark/80 hover:bg-brand-secondary/5 hover:text-brand-secondary">{item.name}</Link>
                        ))}
                        {((link.megaContent as any).side as any).ctaBox && (
                            <div className="px-3 py-4 mt-4 bg-gray-100 rounded-lg">
                                <h5 className="font-bold text-brand-dark mb-1">{((link.megaContent as any).side as any).ctaBox.title}</h5>
                                <p className="text-xs text-gray-500 mb-3">{((link.megaContent as any).side as any).ctaBox.description}</p>
                                <Link href={((link.megaContent as any)!.side as any).ctaBox.href || '/contact'} className="text-brand-primary font-bold text-sm">{((link.megaContent as any).side as any).ctaBox.buttonText}</Link>
                            </div>
                        )}
                    </div>
                )}
                {link.dropdownContent?.map(item => (
                    <div key={item.name}>
                        <Link href={item.href || '#'} className="block px-3 py-2 rounded-md text-base font-medium text-brand-dark hover:bg-brand-secondary/5 hover:text-brand-secondary transition-colors">{item.name}</Link>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <header
            ref={headerRef}
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
                ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 py-2'
                : 'bg-white/80 backdrop-blur-sm border-b border-white/10 py-4'
                }`}
        >
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8 relative" onMouseLeave={() => setActiveMenu(null)}>
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 flex items-center gap-4">
                        <Link href="/" className="flex items-center">
                            <img className="h-8 md:h-10 w-auto transition-all duration-300" src={LOGO_URL} alt="Logic-Unit Logo" />
                        </Link>
                    </div>

                    <div className="hidden lg:flex items-center space-x-1">
                        {NAV_LINKS.map((link) => (
                            <div
                                key={link.name}
                                className="relative group"
                                onMouseEnter={() => setActiveMenu(link)}
                            >
                                <Link
                                    href={link.href}
                                    className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${pathname?.startsWith(link.href) && link.href !== '/'
                                        ? 'text-brand-primary bg-brand-primary/5'
                                        : 'text-brand-gray hover:text-brand-dark hover:bg-gray-50'
                                        }`}
                                >
                                    {link.name}
                                    {(link.isMega || link.dropdownContent) && (
                                        <ChevronDownIcon className={`w-3 h-3 transition-transform duration-300 ${activeMenu === link ? 'rotate-180' : ''}`} />
                                    )}
                                </Link>

                                {activeMenu === link && !link.isMega && link.dropdownContent && (
                                    <div className="absolute top-full left-0 mt-2 animate-fade-in-down-small pt-2">
                                        <div className="bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-2 min-w-[240px] border border-gray-100 overflow-hidden">
                                            <ul className="space-y-1">
                                                {link.dropdownContent.map(item => (
                                                    <li key={item.name} className="relative group/item">
                                                        <Link
                                                            href={item.href || '#'}
                                                            className="flex items-center justify-between px-4 py-3 rounded-lg text-sm text-brand-dark hover:bg-brand-secondary/5 hover:text-brand-secondary transition-colors"
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="hidden lg:flex items-center space-x-4">
                        <Link
                            href="/contact"
                            className="bg-brand-primary text-white hover:bg-brand-dark px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 shadow-lg shadow-brand-primary/20 hover:shadow-xl hover:-translate-y-0.5"
                        >
                            Get in Touch
                        </Link>
                    </div>

                    <div className="flex lg:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            type="button"
                            className="text-brand-dark p-2 rounded-md hover:bg-gray-100 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {activeMenu && activeMenu.isMega && activeMenu.megaContent && (
                    <div
                        className="absolute top-full left-0 right-0 pt-4 animate-fade-in-down"
                        style={{ width: '100%', maxHeight: 'calc(100vh - 80px)', overflowY: 'auto' }}
                        onMouseEnter={() => setActiveMenu(activeMenu)}
                    >
                        <div className="bg-white backdrop-blur-xl shadow-[0_30px_60px_rgba(0,0,0,0.12)] rounded-2xl border border-gray-100 overflow-hidden mx-4 lg:mx-0">
                            <div className="grid grid-cols-12 divide-x divide-gray-100">
                                {(() => {
                                    const hasSide = !!(activeMenu.megaContent as any).side;
                                    const isSmallMenu = activeMenu.megaContent.main?.length <= 2;
                                    const mainColSpan = hasSide ? (isSmallMenu ? 'col-span-8' : 'col-span-9') : 'col-span-12';
                                    const sideColSpan = hasSide ? (isSmallMenu ? 'col-span-4' : 'col-span-3') : 'hidden';

                                    return (
                                        <>
                                            <div className={`${mainColSpan} p-10`}>
                                                <div className={`grid ${isSmallMenu ? 'grid-cols-2 gap-x-16' : 'grid-cols-4 gap-x-8'} gap-y-10`}>
                                                    {activeMenu.megaContent.main?.map(category => (
                                                        <div key={category.title}>
                                                            {(category as any).path ? (
                                                                <Link
                                                                    href={(category as any).path}
                                                                    className="font-bold text-brand-dark mb-4 text-xs uppercase tracking-widest border-b border-gray-100 pb-2 hover:text-brand-primary transition-colors flex items-center group"
                                                                >
                                                                    {category.title}
                                                                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                                                </Link>
                                                            ) : (
                                                                <h3 className="font-bold text-brand-gray mb-4 text-xs uppercase tracking-widest border-b border-gray-100 pb-2 cursor-default">
                                                                    {category.title}
                                                                </h3>
                                                            )}
                                                            <ul className="space-y-2.5">
                                                                {category.items.map(item => (
                                                                    <li key={item.name}>
                                                                        {(item as any).path ? (
                                                                            <Link
                                                                                href={(item as any).path}
                                                                                className="text-sm text-gray-600 py-0.5 px-1 hover:bg-brand-secondary/5 hover:text-brand-secondary font-medium block transition-colors rounded"
                                                                            >
                                                                                {item.name}
                                                                            </Link>
                                                                        ) : (
                                                                            <span className="text-sm text-gray-500 py-0.5 px-1 block cursor-default select-none">
                                                                                {item.name}
                                                                            </span>
                                                                        )}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            {(activeMenu.megaContent as any).side && (
                                                <div className={`${sideColSpan} col-span-3 bg-gray-50 p-8 flex flex-col justify-between`}>
                                                    <span className="font-bold text-brand-dark mb-4 text-xs uppercase tracking-widest border-b border-gray-200 pb-2">
                                                        {(activeMenu.megaContent as any).side.title}
                                                    </span>
                                                    {((activeMenu.megaContent as any).side as any).items?.map((item: any) => (
                                                        <Link key={item.name} href={item.href || '/contact'} className="text-sm text-brand-primary font-bold hover:text-brand-dark flex items-center group mb-4">
                                                            {item.name} <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
                                                        </Link>
                                                    ))}
                                                    {((activeMenu.megaContent as any).side as any).ctaBox && (
                                                        <div className="bg-brand-primary/5 rounded-xl p-6 mt-8">
                                                            <h5 className="font-bold text-brand-dark mb-2 text-base font-heading">{((activeMenu.megaContent as any).side as any).ctaBox.title}</h5>
                                                            <p className="text-xs text-gray-500 mb-4 leading-relaxed">{((activeMenu.megaContent as any).side as any).ctaBox.description}</p>
                                                            <Link href={((activeMenu.megaContent as any)!.side as any).ctaBox.href || '/contact'} className="text-xs font-bold text-brand-primary uppercase tracking-wider hover:underline flex items-center gap-1">
                                                                {((activeMenu.megaContent as any).side as any).ctaBox.buttonText} <span>→</span>
                                                            </Link>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </>
                                    );
                                })()}
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            <div className={`lg:hidden fixed left-0 right-0 bottom-0 z-[999] transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} style={{ top: headerHeight ? `${headerHeight}px` : '80px' }}>
                <div className={`absolute inset-0 bg-white shadow-lg overflow-hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className={`absolute inset-0 transition-transform duration-300 ease-in-out ${activeMobileMenu === 'main' ? 'translate-x-0' : '-translate-x-full'} overflow-y-auto`}>
                        <div className="p-4 space-y-2">
                            {NAV_LINKS.map((link) => (
                                <Fragment key={link.name}>
                                    {link.isMega || link.dropdownContent ? (
                                        <button onClick={() => handleMobileSubMenuOpen(link.name)} className="w-full flex justify-between items-center px-4 py-4 rounded-lg text-lg font-medium text-brand-dark hover:bg-gray-50 text-left">
                                            <span>{link.name}</span>
                                            <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                                        </button>
                                    ) : (
                                        <Link href={link.href} className="block px-4 py-4 rounded-lg text-lg font-medium text-brand-dark hover:bg-gray-50">
                                            {link.name}
                                        </Link>
                                    )}
                                </Fragment>
                            ))}
                            <div className="pt-6 mt-4 border-t border-gray-100 px-4">
                                <Link href="/contact" className="block w-full text-center bg-brand-primary text-white hover:bg-brand-dark px-6 py-3 rounded-full font-bold transition-colors shadow-lg">
                                    Get in Touch
                                </Link>
                            </div>
                        </div>
                    </div>
                    {NAV_LINKS.filter(l => l.isMega || l.dropdownContent).map(link => (
                        <div key={`${link.name}-submenu`} className={`absolute inset-0 transition-transform duration-300 ease-in-out overflow-y-auto bg-white ${activeMobileMenu === link.name ? 'translate-x-0' : 'translate-x-full'}`}>
                            <div className="p-4 border-b flex items-center sticky top-0 bg-white/95 backdrop-blur-sm z-10">
                                <button onClick={() => setActiveMobileMenu('main')} className="p-2 -ml-2 text-brand-dark hover:text-brand-primary">
                                    <ChevronLeftIcon className="w-6 h-6" />
                                </button>
                                <h3 className="text-lg font-bold text-brand-dark text-center flex-grow -ml-8">{link.name}</h3>
                            </div>
                            {renderMobileSubMenu(link)}
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                @keyframes fade-in-down { 0% { opacity: 0; transform: translateY(-10px); } 100% { opacity: 1; transform: translateY(0); } }
                @keyframes fade-in-down-small { 0% { opacity: 0; transform: translateY(-5px); } 100% { opacity: 1; transform: translateY(0); } }
                .animate-fade-in-down { animation: fade-in-down 0.3s ease-out forwards; }
                .animate-fade-in-down-small { animation: fade-in-down-small 0.2s ease-out forwards; }
            `}</style>
        </header>
    );
};

export default Header;
