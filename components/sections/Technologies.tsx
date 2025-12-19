'use client';

import React, { useState } from 'react';

const allTechLogos = [
    // Frontend
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', name: 'React', category: 'Frontend' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', name: 'Next.js', category: 'Frontend' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', name: 'Vue.js', category: 'Frontend' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', name: 'Angular', category: 'Frontend' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', name: 'TypeScript', category: 'Frontend' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', name: 'JavaScript', category: 'Frontend' },

    // Backend
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', name: 'Node.js', category: 'Backend' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', name: 'Python', category: 'Backend' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', name: 'Java', category: 'Backend' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg', name: 'Go', category: 'Backend' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', name: 'PHP', category: 'Backend' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg', name: 'Ruby', category: 'Backend' },

    // Mobile
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg', name: 'Swift', category: 'Mobile' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg', name: 'Kotlin', category: 'Mobile' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', name: 'Flutter', category: 'Mobile' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', name: 'React Native', category: 'Mobile' },

    // Cloud & DevOps
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', name: 'AWS', category: 'Cloud' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', name: 'Google Cloud', category: 'Cloud' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', name: 'Azure', category: 'Cloud' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', name: 'Docker', category: 'DevOps' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', name: 'Kubernetes', category: 'DevOps' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg', name: 'Jenkins', category: 'DevOps' },

    // Databases
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', name: 'PostgreSQL', category: 'Database' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', name: 'MongoDB', category: 'Database' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', name: 'MySQL', category: 'Database' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', name: 'Redis', category: 'Database' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg', name: 'Elasticsearch', category: 'Database' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', name: 'Firebase', category: 'Database' },

    // AI/ML
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', name: 'TensorFlow', category: 'AI/ML' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', name: 'PyTorch', category: 'AI/ML' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg', name: 'OpenCV', category: 'AI/ML' },

    // Other Popular Technologies
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', name: 'GraphQL', category: 'API' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', name: 'Git', category: 'Tools' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', name: 'GitHub', category: 'Tools' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg', name: 'GitLab', category: 'Tools' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg', name: 'Nginx', category: 'Infrastructure' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg', name: 'Apache', category: 'Infrastructure' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', name: 'Linux', category: 'Infrastructure' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg', name: 'Ubuntu', category: 'Infrastructure' },

    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', name: 'Bootstrap', category: 'Frontend' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg', name: 'Sass', category: 'Frontend' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg', name: 'Webpack', category: 'Tools' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', name: 'VS Code', category: 'Tools' },
    { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', name: 'Figma', category: 'Design' },
];

const Technologies: React.FC = () => {
    const [showAll, setShowAll] = useState(false);
    const initialDisplayCount = 12;
    const displayedTechs = showAll ? allTechLogos : allTechLogos.slice(0, initialDisplayCount);

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
                    {displayedTechs.map((tech, index) => (
                        <div key={index} className="bg-white p-8 flex flex-col items-center justify-center group hover:bg-brand-bg-secondary transition-colors duration-300 min-h-[140px]">
                            <img
                                src={tech.url}
                                alt={`${tech.name} Logo`}
                                className="h-12 w-12 mb-4 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"
                            />
                            <span className="text-xs font-semibold text-brand-dark/60 group-hover:text-brand-dark transition-colors text-center">{tech.name}</span>
                        </div>
                    ))}
                </div>

                {!showAll && allTechLogos.length > initialDisplayCount && (
                    <div className="text-center mt-12">
                        <button
                            onClick={() => setShowAll(true)}
                            className="inline-flex items-center gap-2 bg-brand-primary text-white hover:bg-brand-dark px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 shadow-lg shadow-brand-primary/20 hover:shadow-xl hover:-translate-y-0.5"
                        >
                            Load More Technologies
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                    </div>
                )}

                {showAll && (
                    <div className="text-center mt-12">
                        <button
                            onClick={() => setShowAll(false)}
                            className="inline-flex items-center gap-2 bg-white text-brand-primary hover:bg-brand-bg-secondary border-2 border-brand-primary px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:-translate-y-0.5"
                        >
                            Show Less
                            <svg className="w-5 h-5 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Technologies;
