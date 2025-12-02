import React from 'react';
import { industriesForNav, CASE_STUDIES } from '../constants';

export interface Post {
    slug: string;
    title: string;
    postDescription: string;
    excerpt?: string;
    image: string;
    author: {
        name: string;
        avatar: string;
    };
    date: string;
    category: {
        id: number;
        documentId: string;
        name: string;
    };
    content: React.ReactNode | string;
    blocks?: any[]; // Strapi blocks/rich content
}

// Static posts as fallback or initial state
const posts: Post[] = [
    {
        slug: '2026-ai-everywhere',
        title: 'The Unseen Revolution: How AI Will Weave Itself into the Fabric of Our Lives by 2026',
        postDescription: 'Explore the profound and subtle ways AI will reshape our daily routines, workplaces, and societies by 2026.',
        image: 'https://picsum.photos/seed/ai2026/800/450',
        author: {
            name: 'Alex Johnson',
            avatar: 'https://picsum.photos/seed/author1/100'
        },
        date: 'October 26, 2024',
        category: {
            id: 1,
            documentId: 'static-ai',
            name: 'AI & ML'
        },
        content: (
            <div className="prose lg:prose-xl max-w-none text-brand-dark/80">
                <p className="lead">The year is 2026. Artificial Intelligence is no longer a buzzword...</p>
            </div>
        )
    }
];

export const getPosts = (): Post[] => {
    return posts;
};

export const getPostBySlug = (slug: string): Post | undefined => {
    return posts.find(post => post.slug === slug);
};

export const getCategories = (): string[] => {
    const categories = posts.map(post => post.category?.name ?? "Unknown");
    return ['All', ...Array.from(new Set(categories))];
}

export const createIndustryData = (industry: { name: string, industrySlug: string }) => {
    const { name, industrySlug } = industry;
    return {
        slug: industrySlug,
        name: name,
        hero: {
            title: `${name} Software Development`,
            description: `As a strategic technology partner for the ${name.toLowerCase()} sector, we deliver mission-critical digital ecosystems. Our engineering precision ensures compliance, security, and scalability for global market leaders.`,
            image: `https://picsum.photos/seed/${industrySlug}/1200/800`
        },
        stats: [
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '100%', label: 'Compliance' },
            { value: '30%', label: 'Cost Savings' },
            { value: '2x', label: 'Innovation Rate' },
        ],
        stickyNav: [
            { name: 'Solutions', href: '#solutions' },
            { name: 'Why Us', href: '#why-choose' },
            { name: 'Success Stories', href: '#success-stories' },
            { name: 'Methodology', href: '#process' },
            { name: 'Technology', href: '#tech' },
            { name: 'FAQ', href: '#faq' },
        ],
        solutions: {
            title: `Specialized ${name} Capabilities`,
            items: [
                { title: `Enterprise ${name} Platforms`, description: `Architecting robust, secure platforms that integrate disparate data streams for real-time decision making in ${name.toLowerCase()}.` },
                { title: `Digital Transformation`, description: `Modernizing legacy systems to cloud-native architectures, ensuring ${name.toLowerCase()} organizations remain agile.` },
                { title: `Data Analytics & AI`, description: `Leveraging predictive modeling and big data to drive operational efficiency and strategic foresight.` },
                { title: `Customer Experience (CX)`, description: `Designing seamless, omnichannel experiences that increase engagement and loyalty.` },
                { title: `Regulatory Compliance`, description: `Embedding automated compliance checks (GDPR, HIPAA, SOC2) directly into the software architecture.` },
                { title: `IoT & Connected Ops`, description: `Connecting physical assets with digital twins for real-time monitoring and predictive maintenance.` },
            ]
        },
        techStack: [
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
        ],
        whyChoose: {
            title: `Engineering the Future of ${name}`,
            description: `We don't just write code; we understand the strategic nuances of the ${name.toLowerCase()} industry. Our solutions are built on a foundation of deep domain expertise, ensuring every line of code contributes to your bottom line.`,
            image: `https://picsum.photos/seed/${industrySlug}-why/800/800`
        },
        successStories: CASE_STUDIES.map(cs => ({ ...cs, image: cs.image })),
        process: {
            title: "Our Execution Framework",
            description: `A rigorous, transparent, and agile methodology designed to mitigate risk and accelerate time-to-value.`,
            steps: [
                { title: 'Strategic Discovery', description: 'Deep-dive workshops to align technology with business KPIs.' },
                { title: 'Architecture Design', description: 'Blueprinting scalable, secure systems.' },
                { title: 'Agile Engineering', description: 'Iterative development sprints with bi-weekly deliverables.' },
                { title: 'Quality & Compliance', description: 'Automated testing and regulatory validation.' },
                { title: 'Deployment & Scale', description: 'CI/CD pipelines for seamless global rollout.' },
            ]
        },
        featuredInsights: posts.slice(0, 3), // Static posts as placeholder
        faq: {
            title: "Strategic Inquiries",
            items: [
                { question: `How do you handle ${name} regulatory compliance?`, answer: `We bake compliance into our CI/CD pipelines. Our engineers are trained in industry-specific standards (like HIPAA for Healthcare, PCI-DSS for Finance) to ensure every release is audit-ready.` },
                { question: `Can you integrate with legacy ${name} systems?`, answer: 'Yes. We specialize in building secure API layers that modernize legacy mainframes without requiring a risky "rip and replace" approach.' },
                { question: `What is your data security protocol?`, answer: 'We employ a Zero Trust architecture, encrypting data at rest and in transit, with strict role-based access controls (RBAC) to protect sensitive IP.' },
            ]
        }
    };
};

export const createAllIndustryData = () => {
    const allData: { [key: string]: any } = {};
    industriesForNav.forEach(industry => {
        allData[industry.industrySlug] = createIndustryData(industry);
    });
    return allData;
};

export const ALL_INDUSTRIES_DATA = createAllIndustryData();
