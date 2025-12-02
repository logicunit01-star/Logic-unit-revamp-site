
import React from 'react';
import Link from 'next/link';
import { LOGO_URL_WHITE, FOOTER_LINKS, SOCIAL_LINKS, MailIcon, LocationPinIcon } from '@/constants';

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-dark text-white pt-20 pb-10 border-t border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">

                    <div className="lg:col-span-2 pr-8">
                        <Link href="/" className="inline-block mb-8">
                            <img src={LOGO_URL_WHITE} alt="Logic-Unit Logo" className="h-8 md:h-10 opacity-90" />
                        </Link>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Architecting the digital future for global enterprises. We deliver resilient, scalable, and secure technology ecosystems.
                        </p>

                        <div className="mb-8 space-y-4">
                            <div className="flex items-start">
                                <LocationPinIcon className="w-5 h-5 mr-3 mt-0.5 text-brand-secondary flex-shrink-0" />
                                <div>
                                    <span className="block text-white font-bold text-sm">Houston, USA</span>
                                    <span className="text-gray-500 text-sm">Global Headquarters</span>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <LocationPinIcon className="w-5 h-5 mr-3 mt-0.5 text-brand-secondary flex-shrink-0" />
                                <div>
                                    <span className="block text-white font-bold text-sm">Karachi, PK</span>
                                    <span className="text-gray-500 text-sm">Development Center</span>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <MailIcon className="w-5 h-5 mr-3 mt-0.5 text-brand-secondary flex-shrink-0" />
                                <a href="mailto:info@logic-unit.com" className="text-gray-400 hover:text-white text-sm transition-colors">info@logic-unit.com</a>
                            </div>
                        </div>

                        <div className="flex space-x-6">
                            {SOCIAL_LINKS.map(link => (
                                <a key={link.name} href={link.href} className="text-gray-500 hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-brand-primary" aria-label={link.name}>
                                    <link.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6 font-heading text-lg">Services</h4>
                        <ul className="space-y-4">
                            {FOOTER_LINKS.services.map(link => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-400 hover:text-brand-secondary transition-colors text-sm block">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6 font-heading text-lg">Industries</h4>
                        <ul className="space-y-4">
                            {FOOTER_LINKS.industries.map(link => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-400 hover:text-brand-secondary transition-colors text-sm block">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6 font-heading text-lg">Company</h4>
                        <ul className="space-y-4">
                            {FOOTER_LINKS.company.map(link => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-400 hover:text-brand-secondary transition-colors text-sm block">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6 font-heading text-lg">Resources</h4>
                        <ul className="space-y-4">
                            {FOOTER_LINKS.resources.map(link => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-400 hover:text-brand-secondary transition-colors text-sm block">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Logic-Unit. All rights reserved.</p>
                    <div className="flex space-x-8 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
