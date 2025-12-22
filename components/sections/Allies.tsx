
import React from 'react';
import Link from 'next/link';
const allies = [
    { name: 'Analyze Quran', description: 'Ai APP to study and analyze the Quran', logo: 'https://analyzequran.com/wp-content/uploads/2023/06/analyze-quran-logo.png', link: 'https://analyzequran.com' },
    { name: 'Titan CMS', description: 'Enterprise content management', logo: 'https://titanmms.com/wp-content/uploads/2019/11/titan-y.png', link: 'https://titanmms.com' },
    { name: 'HULM Solutions', description: 'CRM & ERP solutions', logo: 'https://hulmsolutions.com/wp-content/uploads/2024/03/Hulmlogo.svg', link: 'https://hulmsolutions.com' },
    { name: 'Bike Tour Pro', description: 'Bike Touring Management Software', logo: 'https://biketourpro.com/wp-content/uploads/2023/07/fav-icon.png', link: 'https://biketourpro.com' },
];

const Allies: React.FC = () => {
    return (
        <section className="bg-brand-bg-secondary py-24 border-t border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-200 pb-8">
                    <div className="max-w-2xl">
                        <h4 className="inline-block mb-6 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-semibold text-sm tracking-wider uppercase">Partnerships</h4>
                        <h2 className="text-4xl font-bold font-heading text-brand-dark leading-tight">Trusted Global <br />Corporate <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Allies</span></h2>
                    </div>
                    <div className="max-w-md text-right hidden md:block">
                        <p className="text-brand-gray text-sm">We work with industry leaders to create custom software development solutions that accelerate growth for businesses.</p>
                    </div>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 items-center">
                    {allies.map((ally, index) => (
                        <Link href={ally.link} key={index} className="group flex flex-col items-center justify-center p-8 transition-all duration-500 hover:bg-white hover:shadow-xl hover:shadow-gray-100 rounded-xl border border-transparent hover:border-gray-100">
                            <div className="h-20 w-full flex items-center justify-center mb-6 group-hover:opacity-100 transition-all duration-500">
                                <img src={ally.logo} alt={`${ally.name} logo`} className="max-h-full max-w-[160px] object-contain" />
                            </div>
                            <h3 className="text-lg font-bold text-brand-dark mb-1 font-heading opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">{ally.name}</h3>
                            <p className="text-xs text-brand-gray text-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75">{ally.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Allies;
