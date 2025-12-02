
import React from 'react';
import Link from 'next/link';
import { CONTACT_HERO_SERVICES } from '../../constants';

const ContactBreadcrumb: React.FC = () => (
    <nav aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-brand-primary">Home</Link></li>
            <li>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
            </li>
            <li className="font-semibold text-brand-dark">Contact</li>
        </ol>
    </nav>
);

const ContactHeroForm: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Form submitted!');
    };

    return (
        <section className="pt-16 sm:pt-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column: Info */}
                    <div className="space-y-6">
                        <ContactBreadcrumb />
                        <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-brand-dark !leading-tight">
                            YOUR SUCCESS STORY STARTS HERE!
                        </h1>
                        <p className="text-lg text-brand-dark/80">
                            We're ready to turn your vision into reality with these key services:
                        </p>
                        <ul className="space-y-4">
                            {CONTACT_HERO_SERVICES.map(service => (
                                <li key={service.title}>
                                    <h3 className="font-bold text-brand-dark">{service.title}</h3>
                                    <p className="text-brand-dark/80">{service.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <input type="text" placeholder="Full Name*" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-brand-primary focus:border-brand-primary" />
                                <input type="text" placeholder="Company Name*" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-brand-primary focus:border-brand-primary" />
                                <input type="tel" placeholder="Phone Number" className="w-full p-3 border border-gray-300 rounded-md focus:ring-brand-primary focus:border-brand-primary" />
                                <input type="email" placeholder="Business Email*" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-brand-primary focus:border-brand-primary" />
                            </div>
                            <textarea placeholder="Describe Your Project or Goals*" required rows={5} className="w-full p-3 border border-gray-300 rounded-md focus:ring-brand-primary focus:border-brand-primary"></textarea>
                            <div className="w-full p-4 border border-gray-300 rounded-md flex items-center justify-center bg-gray-100">
                                <span className="text-gray-500">Captcha</span>
                            </div>
                            <div>
                                <button type="submit" className="bg-brand-dark text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-primary transition-all duration-300 shadow-lg hover:scale-105 border border-slate-700">
                                    Submit Button &rarr;
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactHeroForm;
