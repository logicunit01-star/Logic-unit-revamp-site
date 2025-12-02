
import React from 'react';

const techLogos = [
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', name: 'React' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', name: 'Node.js' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', name: 'Python' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', name: 'AWS' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', name: 'Docker' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', name: 'Kubernetes' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', name: 'TypeScript' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', name: 'PostgreSQL' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', name: 'MongoDB' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg', name: 'Swift' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg', name: 'Kotlin' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', name: 'TensorFlow' }
];

const Technologies: React.FC = () => {
    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h4 className="inline-block mb-6 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-semibold text-sm tracking-wider uppercase">Core Architecture</h4>
                    <h2 className="text-4xl font-bold font-heading text-brand-dark mb-8 leading-tight">Future-Ready <br />Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Ecosystem</span></h2>
                    <p className="text-brand-gray max-w-2xl mx-auto text-lg">
                        We leverage a best-in-class, open-source, and enterprise technology stack to power our software development services and deliver resilient, scalable solutions.
                    </p>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-px bg-gray-100 border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                    {techLogos.map((tech, index) => (
                        <div key={index} className="bg-white p-8 flex flex-col items-center justify-center group hover:bg-brand-bg-secondary transition-colors duration-300 min-h-[140px]">
                            <img
                                src={tech.url}
                                alt={`${tech.name} Logo`}
                                className="h-12 w-12 mb-4 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"
                            />
                            <span className="text-xs font-semibold text-brand-dark/60 group-hover:text-brand-dark transition-colors">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technologies;
