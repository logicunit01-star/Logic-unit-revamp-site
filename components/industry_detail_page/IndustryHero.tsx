
import React from 'react';
import Link from 'next/link';

interface IndustryHeroProps {
    data: {
        title: string;
        description: string;
        image: string;
    },
    industryName: string;
}

const Breadcrumb: React.FC<{industryName: string}> = ({ industryName }) => (
    <nav aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-brand-dark/60">
            <li><Link href="/" className="hover:text-brand-primary">Home</Link></li>
            <li>/</li>
            <li><Link href="/industries" className="hover:text-brand-primary">Industries</Link></li>
            <li>/</li>
            <li className="font-medium text-brand-dark">{industryName}</li>
        </ol>
    </nav>
);

const IndustryHero: React.FC<IndustryHeroProps> = ({ data, industryName }) => {
    return (
        <section className="bg-white pt-24 pb-24 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-brand-primary/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="mb-6">
                            <Breadcrumb industryName={industryName} />
                        </div>
                        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider">
                            Industry Solutions
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-brand-dark leading-[1.1] mb-8 tracking-tight">
                            {data.title}
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-xl mb-10">
                            {data.description}
                        </p>
                        <div className="flex gap-4">
                            <Link href="/contact" className="bg-brand-dark text-white hover:bg-brand-primary px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-brand-primary/20 inline-block">
                                Discuss Strategy
                            </Link>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <img 
                            src={data.image} 
                            alt={data.title} 
                            className="relative rounded-2xl shadow-2xl w-full h-auto aspect-[4/3] object-cover border-4 border-white" 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustryHero;
