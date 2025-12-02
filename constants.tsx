
import React from 'react';

export const LOGO_URL = 'https://logic-unit.com/wp-content/uploads/2019/06/cropped-logic-unit-logo.png';
export const LOGO_URL_WHITE = 'https://logic-unit.com/wp-content/uploads/2019/04/logic-unit-w.png';

// --- ICONS ---
export const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

export const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

export const ChevronLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
    </svg>
);

export const ChevronRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
    </svg>
);

export const LocationPinIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

// --- DATA CONSTANTS ---

export const STATS = [
    { value: '25+', label: 'Years of Excellence' },
    { value: '100+', label: 'Global Experts' },
    { value: '1.5k', label: 'Success Stories' },
    { value: '98%', label: 'Client Retention' }
];

export const ABOUT_PAGE_STATS = [
    { value: '25+', label: 'years of expertise' },
    { value: '150+', label: 'IT Professionals' },
    { value: '1500+', label: 'Projects Success' },
    { value: '25+', label: 'Industries covered' }
];

export const WHY_US_POINTS = [
    { title: 'Legacy of Excellence', description: 'Top-tier engineers delivering world-class custom software development services.' },
    { title: 'Tailored Solutions', description: 'Fully bespoke software built around your workflows and business goals.' },
    { title: 'Proven Results', description: 'From SaaS to enterprise apps, our software drives growth and efficiency.' },
    { title: 'End-to-End Support', description: 'From consulting to development, deployment, and long-term maintenance.' }
];

export const FAQS = [
    { question: "What does Logic-unit do as a custom software development company?", answer: "Logic-unit builds tailored digital solutions, including custom software, AI systems, ERP, CRM, mobile apps, SaaS platforms, and cloud infrastructure for business growth" },
    { question: "Q2. What is custom software development?", answer: "Custom software development is the process of designing and building software specifically for a business unique requirements instead of using off-the-shelf tools." },
    { question: "Q3. How to choose a custom software development company?", answer: "Choose a company like Logic-unit with proven experience, strong technical skills, a clear development process, solid security practices, and a portfolio of successful custom software projects." },
    { question: "Can Logic-unit integrate AI and automation into my existing system?", answer: "Yes. Logic-unit integrates AI automation, chatbots, predictive analytics, and intelligent workflows into ERP, CRM, and web platforms without disrupting operations." },
    { question: "Are Logic-unit software and apps scalable for business growth?", answer: "Yes. All Logic-unit solutions are built with scalability, cloud readiness, and high performance to support growing data, users, and operations." },
    { question: "How does Logic-unit ensure quality and security in software solutions?", answer: "Logic-unit follows secure coding standards, performs detailed QA testing, applies encryption, and uses cloud-grade security measures to keep your software safe and reliable." }
];

export const CASE_STUDIES = [
    {
        title: 'Global Logistics Optimization',
        description: 'Re-engineered the entire supply chain visibility platform for a logistics giant, resulting in 30% faster delivery times.',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'FinTech Core Modernization',
        description: 'Migrated a legacy banking system to a microservices architecture, improving transaction speed by 500%.',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'AI-Driven Healthcare Analytics',
        description: 'Developed a predictive model for patient care that reduced readmission rates by 15% for a hospital network.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop'
    }
];

export const CLIENT_LOGOS = [
    { name: 'GiftWifts', url: 'https://logic-unit.com/wp-content/uploads/2019/04/giftwifts-1-300x225.png' },
    { name: 'AGP', url: 'https://logic-unit.com/wp-content/uploads/2019/04/AGP-1-150x150.png' },
    { name: 'Leopards', url: 'https://logic-unit.com/wp-content/uploads/2019/04/leopards-1-150x150.png' },
    { name: 'Qatar Airways', url: 'https://logic-unit.com/wp-content/uploads/2019/04/qatarairways-1-300x225.png' },
    { name: 'Seagold', url: 'https://logic-unit.com/wp-content/uploads/2019/04/SGL-1-150x150.png' }
];

export const TRUSTED_BY_LOGOS = CLIENT_LOGOS;

export const PARTNERS_DATA = [
    { category: 'Cloud', title: 'AWS Partner', description: 'Advanced tier consulting partner.', image: 'https://logic-unit.com/wp-content/uploads/2019/06/pasha-logo.png' },
    { category: 'Enterprise', title: 'Microsoft', description: 'Gold Certified Partner.', image: 'https://logic-unit.com/wp-content/uploads/2019/04/PSEB-logo.png' },
    { category: 'Analytics', title: 'Google Cloud', description: 'Data analytics specialization.', image: 'https://logic-unit.com/wp-content/uploads/2019/11/titan-y.png' }
];

export const WHY_CHOOSE_US_DATA = [
    { title: 'Expert Team', description: 'Top 1% of talent.' },
    { title: 'Proven Track Record', description: 'Hundreds of successful projects.' },
    { title: 'Client Centric', description: 'Your success is our success.' }
];

export const HOME_PAGE_INDUSTRIES = [
    { name: 'Healthcare', industrySlug: 'healthcare' },
    { name: 'FinTech', industrySlug: 'fintech' },
    { name: 'Banking', industrySlug: 'banking' },
    { name: 'Insurance', industrySlug: 'insurance' },
    { name: 'Retail', industrySlug: 'retail' },
    { name: 'Logistics', industrySlug: 'transportation-logistics' },
    { name: 'Manufacturing', industrySlug: 'manufacturing' },
    { name: 'Real Estate', industrySlug: 'real-estate' }
];

export const SERVICES_PAGE_INDUSTRIES = [
    { name: 'Healthcare', industrySlug: 'healthcare', icon: '🩺' },
    { name: 'FinTech', industrySlug: 'fintech', icon: '💳' },
    { name: 'Banking', industrySlug: 'banking', icon: '🏦' },
    { name: 'Retail', industrySlug: 'retail', icon: '🛍️' },
    { name: 'Logistics', industrySlug: 'transportation-logistics', icon: '🚚' },
    { name: 'Education', industrySlug: 'education', icon: '🎓' }
];

export const CORE_CAPABILITIES = [
    'Custom Software Development',
    'Mobile App Development',
    'Web Development',
    'UI/UX Design',
    'QA & Testing',
    'DevOps Services'
];

export const DELIVERY_MODELS = [
    { title: 'Dedicated Team', description: 'Full-time team integrated with your processes.' },
    { title: 'Fixed Price', description: 'Defined scope and budget for clear deliverables.' }
];

export const PROCESS_STEPS = [
    { title: 'Discovery', description: 'Understanding your goals.' },
    { title: 'Design', description: 'Creating the blueprint.' },
    { title: 'Development', description: 'Building the solution.' },
    { title: 'Testing', description: 'Ensuring quality.' },
    { title: 'Deployment', description: 'Going live.' }
];

// AI PAGE DATA
export const AI_PAGE_DEV_AREAS = ['Generative AI', 'Machine Learning', 'Computer Vision', 'NLP'];
export const AI_PAGE_EXPERTISE = ['TensorFlow', 'PyTorch', 'OpenAI', 'Keras'];
export const AI_PAGE_SERVICES = ['Custom Models', 'Integration', 'Consulting'];
export const AI_PAGE_APPROACH_STEPS = [
    { title: 'Assess', description: 'Data readiness check.' },
    { title: 'Model', description: 'Select and train.' },
    { title: 'Integrate', description: 'Embed in workflow.' },
    { title: 'Deploy', description: 'Launch and monitor.' },
    { title: 'Scale', description: 'Expand capabilities.' }
];
export const AI_PAGE_FAQS = [
    { question: 'How much data do I need?', answer: 'It depends on the complexity, but we can start small.' },
    { question: 'Is my data secure?', answer: 'Yes, we use enterprise-grade security.' }
];

// CONTACT PAGE DATA
export const CONTACT_HERO_SERVICES = [
    { title: 'Consulting', description: 'Strategic advice.' },
    { title: 'Development', description: 'Building solutions.' },
    { title: 'Support', description: 'Long-term care.' }
];
export const OFFICE_LOCATIONS = [
    { country: 'USA', address: 'Houston, Texas' },
    { country: 'Pakistan', address: 'Karachi, Sindh' }
];
export const CONTACT_TESTIMONIALS = [
    { name: 'John Doe', quote: 'Great service!', logo: '', avatar: 'https://picsum.photos/100' }
];
export const CONTACT_TESTIMONIALS_DATA = [
    { name: 'Jane Doe', quote: 'Excellent work.', logo: 'https://logic-unit.com/wp-content/uploads/2019/04/giftwifts-1-300x225.png', avatar: 'https://picsum.photos/seed/jane/100' },
    { name: 'John Smith', quote: 'Highly recommended.', logo: 'https://logic-unit.com/wp-content/uploads/2019/04/AGP-1-150x150.png', avatar: 'https://picsum.photos/seed/john/100' }
];

// HELPER TO GENERATE INDUSTRY CONTENT
const generateIndustry = (slug: string, name: string, description: string, solutions: string[]) => ({
    id: slug,
    name,
    industrySlug: slug,
    description,
    solutions: solutions.map(s => ({ name: s })),
    icon: '🏢' // Default icon
});

export const INDUSTRIES_PAGE_DATA = [
    generateIndustry('healthcare', 'Healthcare', 'Transforming patient care with digital innovation.', ['Telemedicine Platforms', 'EHR/EMR Systems', 'Medical IoT', 'Healthcare Analytics']),
    generateIndustry('fintech', 'FinTech', 'Revolutionizing financial services with secure tech.', ['Digital Wallets', 'Blockchain Solutions', 'Trading Platforms', 'Fraud Detection']),
    generateIndustry('banking', 'Banking', 'Modernizing banking infrastructure for the digital age.', ['Core Banking Systems', 'Mobile Banking Apps', 'Payment Gateways', 'KYC/AML Solutions']),
    generateIndustry('insurance', 'Insurance', 'Streamlining claims and policy management.', ['Claims Processing Automation', 'Policy Management Systems', 'InsurTech Apps', 'Risk Assessment AI']),
    generateIndustry('lending', 'Lending', 'Digital lending platforms for faster loan processing.', ['Loan Origination Systems', 'Credit Scoring Models', 'P2P Lending Platforms', 'Debt Management']),
    generateIndustry('investment', 'Investment', 'Tools for smarter investment decisions.', ['Portfolio Management', 'Robo-Advisors', 'Market Analysis Tools', 'Trading Algorithms']),
    generateIndustry('payments', 'Payments', 'Secure and fast payment processing solutions.', ['Payment Gateways', 'Cross-Border Payments', 'Mobile Wallets', 'POS Systems']),
    generateIndustry('retail', 'Retail', 'Omnichannel experiences for modern retail.', ['E-commerce Platforms', 'Inventory Management', 'POS Systems', 'Customer Loyalty Apps']),
    generateIndustry('manufacturing', 'Manufacturing', 'Industry 4.0 solutions for smart factories.', ['Supply Chain Management', 'Predictive Maintenance', 'IoT Monitoring', 'Production Planning']),
    generateIndustry('transportation-logistics', 'Logistics', 'Optimizing supply chains and fleet management.', ['Fleet Management', 'Route Optimization', 'Warehouse Management', 'Last-Mile Delivery']),
    generateIndustry('oil-gas', 'Energy', 'Digital solutions for the energy sector.', ['Asset Management', 'Field Operations Apps', 'Energy Trading', 'Safety Monitoring']),
    generateIndustry('telecommunications', 'Telecommunications', 'Connecting the world with advanced telecom tech.', ['Network Management', 'OSS/BSS Systems', 'VoIP Solutions', '5G Applications']),
    generateIndustry('professional-services', 'Professional Services', 'Tools for service-based businesses.', ['Project Management', 'Resource Scheduling', 'Time Tracking', 'Client Portals']),
    generateIndustry('construction', 'Construction', 'Tech for smarter construction management.', ['Project Management', 'BIM Integration', 'Safety Compliance', 'Equipment Tracking']),
    generateIndustry('travel-hospitality', 'Travel & Hospitality', 'Enhancing guest experiences.', ['Booking Engines', 'Property Management', 'Travel Apps', 'Guest Services']),
    generateIndustry('real-estate', 'Real Estate', 'PropTech solutions for the property market.', ['Property Listings', 'Virtual Tours', 'Tenant Management', 'Real Estate CRM']),
];

// HELPER TO GENERATE GENERIC SERVICE CONTENT
const generateService = (slug: string, title: string, description: string, subServices: string[]) => ({
    slug,
    title,
    heroImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
    description,
    longDescription: `${title} is critical for modern enterprises. We provide comprehensive solutions tailored to your industry needs, ensuring scalability, security, and performance.`,
    stats: [
        { value: '100%', label: 'Commitment' },
        { value: '24/7', label: 'Support' },
        { value: 'Global', label: 'Reach' },
        { value: 'Agile', label: 'Delivery' }
    ],
    techStack: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
    ],
    benefits: [
        { title: 'Efficiency', description: 'Streamline operations with our advanced solutions.' },
        { title: 'Innovation', description: 'Stay ahead of the curve with cutting-edge technology.' },
        { title: 'Scalability', description: 'Grow your business without technical debt.' },
        { title: 'Security', description: 'Enterprise-grade protection for your data.' }
    ],
    subServices: subServices,
    process: [
        { title: 'Discovery', description: 'Understanding your specific needs and goals.' },
        { title: 'Strategy', description: 'Developing a roadmap for success.' },
        { title: 'Implementation', description: 'Deploying the solution efficiently.' },
        { title: 'Optimization', description: 'Continuous improvement and support.' }
    ],
    caseStudies: CASE_STUDIES,
    testimonials: [
        { quote: "Logic-Unit delivered exceptional results, transforming our operations.", author: "Client Executive", role: "CEO" },
        { quote: "Their technical expertise is unmatched in the industry.", author: "Tech Lead", role: "CTO" }
    ],
    industries: [
        { title: 'Healthcare', description: 'Patient-centric digital solutions.' },
        { title: 'Finance', description: 'Secure and high-speed financial platforms.' },
        { title: 'Retail', description: 'Omnichannel commerce experiences.' }
    ],
    faqs: [
        { question: 'How can this help my business?', answer: 'Our solutions are designed to optimize your processes and drive growth.' },
        { question: 'What is the implementation timeline?', answer: 'Timelines vary by project scope, but we prioritize agile delivery to show value quickly.' },
        { question: 'Do you provide support?', answer: 'Yes, we offer 24/7 maintenance and support for all our solutions.' }
    ]
});

// Helper to clean slug from name
export const toSlug = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

// --- ROUTING HELPERS ---

export const SERVICES_DATA = [
    // Manually curated major services
    {
        slug: 'erp-enterprise-systems',
        title: 'ERP & Enterprise Systems',
        heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
        description: 'Implement powerful ERP systems that streamline operations and boost business efficiency.',
        longDescription: 'In the modern enterprise, fragmented data is a liability. Our ERP & Enterprise Systems solutions are designed to create a single, immutable source of truth across your organization. We specialize in both bespoke ERP architecture and robust integrations with major platforms (SAP, Oracle, Dynamics), ensuring that your finance, retail, manufacturing, and educational workflows operate in perfect synchronization.',
        stats: [
            { value: '100%', label: 'Data Integrity' },
            { value: '30%', label: 'Cost Reduction' },
            { value: 'Real-time', label: 'Analytics' },
            { value: 'Seamless', label: 'Integration' }
        ],
        techStack: [
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
        ],
        benefits: [
            { title: 'Operational Synergy', description: 'Break down silos between departments, allowing finance, HR, and operations to work from the same data set.' },
            { title: 'Scalable Architecture', description: 'Systems designed to handle multi-entity, multi-currency, and multi-language operations for global expansion.' },
            { title: 'Automated Compliance', description: 'Built-in regulatory adherence for diverse industries including retail, education, and manufacturing.' }
        ],
        subServices: [
            'Custom ERP Development',
            'Retail & POS ERP',
            'Manufacturing ERP',
            'School & Education ERP',
            'ERP Integrations (SAP, Oracle, Dynamics)'
        ],
        process: [
            { title: 'Process Mapping', description: 'We map every workflow in your organization to identify redundancies and optimization opportunities.' },
            { title: 'Architecture Design', description: 'Designing a modular ERP structure that fits your specific industry needs.' },
            { title: 'Data Migration', description: 'Securely transferring legacy data with integrity checks and validation.' },
            { title: 'Integration', description: 'Connecting the ERP with CRM, E-commerce, and other peripheral systems.' },
            { title: 'Training & Rollout', description: 'Comprehensive change management to ensure user adoption.' }
        ],
        caseStudies: [
            { title: 'Manufacturing Grid Unification', description: 'Integrated 5 production plants into a single custom ERP, reducing inventory waste by 22%.', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop' },
            { title: 'Retail POS Ecosystem', description: 'Deployed a cloud-syncing POS ERP for a retailer with 200+ locations, enabling real-time stock visibility.', image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop' }
        ],
        testimonials: [
            { quote: "We finally have a single view of our truth. Decisions that took weeks now take minutes.", author: "Robert Vance", role: "COO, Industrial Corp" }
        ],
        industries: [
            { title: 'Manufacturing', description: 'Production planning and supply chain visibility.' },
            { title: 'Retail', description: 'Omnichannel inventory and POS integration.' },
            { title: 'Education', description: 'Student information systems and campus management.' },
            { title: 'Logistics', description: 'Fleet management and warehouse optimization.' }
        ],
        engagementModels: [
            { title: 'Bespoke Build', description: 'Ground-up development of an ERP tailored exactly to your unique workflows.' },
            { title: 'Platform Customization', description: 'Tailoring major ERP platforms (SAP/Oracle) to fit your specific business logic.' },
            { title: 'Integration Services', description: 'Building middleware to connect your diverse software ecosystem.' }
        ],
        partners: [
            { name: 'SAP', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/2560px-SAP_2011_logo.svg.png' },
            { name: 'Oracle', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png' },
            { name: 'Microsoft Dynamics', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png' }
        ],
        faqs: [
            { question: "Why build a custom ERP vs buying off-the-shelf?", answer: "Off-the-shelf solutions often require you to change your business processes to fit the software. Custom ERPs are built around your unique competitive advantages and workflows." },
            { question: "How long does implementation take?", answer: "It varies by complexity, but a typical module-based rollout takes 4-8 months, ensuring minimal disruption to daily operations." }
        ]
    },
    {
        slug: 'ai-development-services',
        title: 'AI Development Services',
        heroImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
        description: 'End-to-end engineering of intelligent systems that drive automation and innovation.',
        longDescription: 'Our AI Development Services encompass the full spectrum of artificial intelligence engineering. From building foundational models to deploying user-facing applications, we provide the technical expertise to turn abstract AI concepts into robust, production-grade software. We partner with enterprises to build custom solutions that leverage Machine Learning, Generative AI, and autonomous agents to solve complex business challenges.',
        stats: [{ value: 'End-to-End', label: 'Engineering' }, { value: 'Scalable', label: 'Architecture' }, { value: 'Secure', label: 'Deployment' }, { value: 'Custom', label: 'Models' }],
        techStack: ['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'],
        benefits: [{ title: 'Custom Engineering', description: 'Solutions built specifically for your unique data and workflows.' }, { title: 'Future-Proof Design', description: 'Architectures designed to evolve with rapid advancements in AI.' }, { title: 'Seamless Integration', description: 'AI that works within your existing software ecosystem, not against it.' }],
        subServices: ['Enterprise AI Development', 'Generative AI Development', 'AI/ML Development', 'Custom AI Development', 'AI Agent Development', 'AI Chatbot Development', 'AI App Development', 'AI Software Development'],
        process: [{ title: 'AI Readiness Audit', description: 'Assessing data infrastructure and identifying high-value use cases.' }, { title: 'Model Selection & Training', description: 'Choosing the right LLM or ML model and fine-tuning it on your data.' }, { title: 'System Integration', description: 'Embedding the AI model into your existing enterprise software stack via robust APIs.' }, { title: 'Deployment & MLOps', description: 'Setting up CI/CD pipelines for continuous model retraining and monitoring.' }],
        industries: [{ title: 'Finance', description: 'Algorithmic trading and fraud detection systems.' }, { title: 'Healthcare', description: 'Diagnostic assistance and patient data analysis.' }, { title: 'Retail', description: 'Personalized shopping experiences and inventory forecasting.' }],
        caseStudies: [{ title: 'Global Logistics AI', description: 'Reduced route planning time by 40% using reinforcement learning.', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop' }],
        testimonials: [{ quote: "Logic-Unit transformed our messy data into a powerful predictive engine.", author: "CTO, Logistics Corp", role: "Technical Lead" }],
        faqs: [{ question: 'Do you build from scratch or use APIs?', answer: 'We do both. We leverage powerful APIs (OpenAI, Anthropic) for speed, but also train and deploy custom open-source models (Llama, Mistral) when data privacy and control are paramount.' }, { question: 'How do you handle data privacy?', answer: 'We adhere to strict data governance protocols, often deploying models within your own private cloud (VPC) so data never leaves your infrastructure.' }]
    },
    // Generate ALL other missing pages to prevent 404s
    generateService('web-applications-saas', 'Web Applications & SaaS', 'Develop secure, high-performing web apps and SaaS platforms tailored for business growths.', ['SaaS MVP Development', 'Multi-Tenant Applications', 'Admin Dashboards & BI Systems', 'API-Driven Architectures', 'Product Redesign & Modernization']),
    generateService('cloud-infrastructure', 'Cloud & Infrastructure', 'Modernize with secure cloud infrastructure that improves speed, reliability, and scalability.', ['Cloud Architecture & Deployment', 'DevOps & CI/CD Automation', 'Containerization (Docker & Kubernetes)', 'Infrastructure Monitoring & Scaling', 'Cloud Security & Optimization']),
    generateService('crm-customer-platforms', 'CRM & Customer Platforms', 'Enhance customer journeys with smart CRM platforms designed for engagement and retention.', ['Custom CRM Development', 'Customer Portals', 'Membership & Loyalty Systems', 'Sales & Service Automation', 'CRM Integration & Migration']),
    generateService('cms-web-rebuilds', 'CMS & Web Rebuilds', 'Rebuild your website with a modern CMS for faster performance, flexibility, and control.', ['Headless CMS Development', 'WordPress Development', 'Shopify Development', 'Framer Development', 'Webflow Development', 'E-commerce Development', 'Custom Website Development', 'Corporate Website Rebuilds', 'Multilingual & SEO Websites', 'System Migrations']),
    generateService('consultancy-support', 'Consultancy and Support', 'Expert consultancy and ongoing support to optimize systems, reduce risks, and drive results.', ['Software Consulting', 'DevOps Consulting', 'Mobile App Consulting', 'Project Management Consulting', 'Application Maintenance and Support', 'Software Modernization', 'Code Review', 'Security Assessment', 'Compliance Assessment', 'Application Management']),
    generateService('bespoke-mobile-apps-engineering', 'Bespoke Mobile Apps Engineering', 'Native and cross-platform mobile solutions for the modern world.', ['Native iOS Engineering', 'Native Android Engineering', 'Cross-Platform Development', 'Progressive Web App (PWA) Engineering', 'Hybrid App Frameworks', 'Enterprise Mobility Integration', 'Mobile DevOps & CI/CD Automation', 'Mobile Security & Compliance', 'Offline-First & Edge-Enabled Systems', 'AI-Powered Mobile Experiences', 'Performance Optimization & Observability', 'App Store Engineering & Release Automation']),
    generateService('delivery-models', 'Delivery Models', 'Flexible engagement models tailored to your business needs.', ['Software Development Outsourcing', 'Dedicated Development Team Augmentation']),

    // AI Parent Page 2
    generateService('ai-solutions-technologies', 'AI Solutions & Technologies', 'Advanced technologies solving complex problems.', ['Predictive Modeling', 'Computer Vision', 'Natural Language Processing', 'Big Data Analytics', 'Agentic AI Development', 'AI-Assisted Software', 'AI Development Solutions']),

    // AI Sub-Pages
    generateService('enterprise-ai-development', 'Enterprise AI Development', 'Scalable AI solutions designed for large organizations.', []),
    generateService('generative-ai-development', 'Generative AI Development', 'Leveraging LLMs for content creation and automation.', []),
    generateService('ai-ml-development', 'AI/ML Development', 'Custom machine learning models for predictive insights.', []),
    generateService('custom-ai-development', 'Custom AI Development', 'Bespoke AI solutions for unique business challenges.', []),
    generateService('ai-agent-development', 'AI Agent Development', 'Autonomous agents that perform complex tasks.', []),
    generateService('ai-chatbot-development', 'AI Chatbot Development', 'Intelligent conversational interfaces for customer support.', []),
    generateService('ai-app-development', 'AI App Development', 'Infusing mobile and web apps with intelligent features.', []),
    generateService('ai-software-development', 'AI Software Development', 'Building software with AI at its core.', []),
    generateService('predictive-modeling', 'Predictive Modeling', 'Forecasting future trends with historical data.', []),
    generateService('computer-vision', 'Computer Vision', 'Enabling machines to see and interpret visual data.', []),
    generateService('natural-language-processing', 'Natural Language Processing', 'Understanding and generating human language.', []),
    generateService('big-data-analytics', 'Big Data Analytics', 'Turning massive datasets into actionable insights.', []),
    generateService('agentic-ai-development', 'Agentic AI Development', 'Building agents with agency and goal-oriented behavior.', []),
    generateService('ai-assisted-software', 'AI-Assisted Software', 'Software tools enhanced by AI copilots.', []),
    generateService('ai-development-solutions', 'AI Development Solutions', 'Comprehensive toolkits for AI implementation.', []),

    // Detailed Capability Sub-Pages (Generated for ALL items in MEGA_MENU_SERVICES to avoid 404s)
    generateService('custom-erp-development', 'Custom ERP Development', 'Tailored ERP solutions designed for your unique business processes.', []),
    generateService('retail-pos-erp', 'Retail & POS ERP', 'Integrated retail management systems.', []),
    generateService('manufacturing-erp', 'Manufacturing ERP', 'Streamlining production and supply chain.', []),
    generateService('school-education-erp', 'School & Education ERP', 'Comprehensive education management systems.', []),
    generateService('erp-integrations-sap-oracle-dynamics', 'ERP Integrations (SAP, Oracle, Dynamics)', 'Seamlessly connecting your enterprise ecosystem.', []),

    generateService('saas-mvp-development', 'SaaS MVP Development', 'Launch your product faster with our MVP acceleration services.', []),
    generateService('multi-tenant-applications', 'Multi-Tenant Applications', 'Scalable SaaS architectures for multiple customers.', []),
    generateService('admin-dashboards-bi-systems', 'Admin Dashboards & BI Systems', 'Visualize your data with powerful dashboards.', []),
    generateService('api-driven-architectures', 'API-Driven Architectures', 'Headless and API-first solutions for flexibility.', []),
    generateService('product-redesign-modernization', 'Product Redesign & Modernization', 'Revitalize your legacy software.', []),

    generateService('cloud-architecture-deployment', 'Cloud Architecture & Deployment', 'Robust cloud foundations.', []),
    generateService('devops-ci-cd-automation', 'DevOps & CI/CD Automation', 'Automating your delivery pipeline.', []),
    generateService('containerization-docker-kubernetes', 'Containerization (Docker & Kubernetes)', 'Scalable microservices deployment.', []),
    generateService('infrastructure-monitoring-scaling', 'Infrastructure Monitoring & Scaling', 'Keep your systems healthy and performant.', []),
    generateService('cloud-security-optimization', 'Cloud Security & Optimization', 'Protecting your cloud assets.', []),

    generateService('custom-crm-development', 'Custom CRM Development', 'Relationship management built for you.', []),
    generateService('customer-portals', 'Customer Portals', 'Self-service portals for better engagement.', []),
    generateService('membership-loyalty-systems', 'Membership & Loyalty Systems', 'Retain customers with rewards programs.', []),
    generateService('sales-service-automation', 'Sales & Service Automation', 'Automate your revenue operations.', []),
    generateService('crm-integration-migration', 'CRM Integration & Migration', 'Connect and move your customer data.', []),

    generateService('headless-cms-development', 'Headless CMS Development', 'Content management without limits.', []),
    generateService('wordpress-development', 'WordPress Development', 'Enterprise-grade WordPress solutions.', []),
    generateService('shopify-development', 'Shopify Development', 'Custom E-commerce stores on Shopify.', []),
    generateService('framer-development', 'Framer Development', 'High-fidelity sites with Framer.', []),
    generateService('webflow-development', 'Webflow Development', 'Visual development for marketing sites.', []),
    generateService('e-commerce-development', 'E-commerce Development', 'Online stores that convert.', []),
    generateService('custom-website-development', 'Custom Website Development', 'Unique web experiences.', []),
    generateService('corporate-website-rebuilds', 'Corporate Website Rebuilds', 'Modernize your brand presence.', []),
    generateService('multilingual-seo-websites', 'Multilingual & SEO Websites', 'Reach a global audience.', []),
    generateService('system-migrations', 'System Migrations', 'Safe and secure platform transfers.', []),

    generateService('software-consulting', 'Software Consulting', 'Expert advice for your tech challenges.', []),
    generateService('devops-consulting', 'DevOps Consulting', 'Optimize your development lifecycle.', []),
    generateService('mobile-app-consulting', 'Mobile App Consulting', 'Strategy for mobile success.', []),
    generateService('project-management-consulting', 'Project Management Consulting', 'Deliver projects on time and budget.', []),
    generateService('application-maintenance-and-support', 'Application Maintenance and Support', 'Keep your software running smoothly.', []),
    generateService('software-modernization', 'Software Modernization', 'Upgrade your legacy systems.', []),
    generateService('code-review', 'Code Review', 'Ensure code quality and security.', []),
    generateService('security-assessment', 'Security Assessment', 'Identify and fix vulnerabilities.', []),
    generateService('compliance-assessment', 'Compliance Assessment', 'Meet regulatory requirements.', []),
    generateService('application-management', 'Application Management', 'Full lifecycle management.', []),

    generateService('native-ios-engineering', 'Native iOS Engineering', 'Swift and Objective-C expertise.', []),
    generateService('native-android-engineering', 'Native Android Engineering', 'Kotlin and Java development.', []),
    generateService('cross-platform-development', 'Cross-Platform Development', 'Flutter and React Native solutions.', []),
    generateService('progressive-web-app-pwa-engineering', 'Progressive Web App (PWA) Engineering', 'Web apps that feel native.', []),
    generateService('hybrid-app-frameworks', 'Hybrid App Frameworks', 'Efficient mobile development.', []),
    generateService('enterprise-mobility-integration', 'Enterprise Mobility Integration', 'Connect mobile to your enterprise.', []),
    generateService('mobile-devops-ci-cd-automation', 'Mobile DevOps & CI/CD Automation', 'Automated mobile builds.', []),
    generateService('mobile-security-compliance', 'Mobile Security & Compliance', 'Secure mobile applications.', []),
    generateService('offline-first-edge-enabled-systems', 'Offline-First & Edge-Enabled Systems', 'Apps that work anywhere.', []),
    generateService('ai-powered-mobile-experiences', 'AI-Powered Mobile Experiences', 'Intelligent mobile apps.', []),
    generateService('performance-optimization-observability', 'Performance Optimization & Observability', 'Fast and reliable apps.', []),
    generateService('app-store-engineering-release-automation', 'App Store Engineering & Release Automation', 'Seamless app publishing.', []),

    generateService('software-development-outsourcing', 'Software Development Outsourcing', 'Your remote engineering team.', []),
    generateService('dedicated-development-team-augmentation', 'Dedicated Development Team Augmentation', 'Scale your team instantly.', []),
];








export const industriesForNav = [
    { name: 'Healthcare', industrySlug: 'healthcare' },
    { name: 'Finance', industrySlug: 'finance' },
    { name: 'Banking', industrySlug: 'banking' },
    { name: 'Insurance', industrySlug: 'insurance' },
    { name: 'Lending', industrySlug: 'lending' },
    { name: 'Investment', industrySlug: 'investment' },
    { name: 'FinTech', industrySlug: 'fintech' },
    { name: 'Payments', industrySlug: 'payments' },
    { name: 'Retail', industrySlug: 'retail' },
    { name: 'Manufacturing', industrySlug: 'manufacturing' },
    { name: 'Logistics', industrySlug: 'transportation-logistics' },
    { name: 'Energy', industrySlug: 'oil-gas' },
    { name: 'Telecommunications', industrySlug: 'telecommunications' },
    { name: 'Professional Services', industrySlug: 'professional-services' },
    { name: 'Construction', industrySlug: 'construction' },
    { name: 'Travel & Hospitality', industrySlug: 'travel-hospitality' },
    { name: 'Real Estate', industrySlug: 'real-estate' },
];

const MEGA_MENU_AI = {
    main: [
        {
            title: 'AI Development Services',
            path: '/services/ai-development-services',
            slug: 'ai-development-services',
            items: [
                { name: 'Enterprise AI Development', path: '/services/enterprise-ai-development', slug: 'enterprise-ai-development' },
                { name: 'Generative AI Development', path: '/services/generative-ai-development', slug: 'generative-ai-development' },
                { name: 'AI/ML Development', path: '/services/ai-ml-development', slug: 'ai-ml-development' },
                { name: 'Custom AI Development', path: '/services/custom-ai-development', slug: 'custom-ai-development' },
                { name: 'AI Agent Development', path: '/services/ai-agent-development', slug: 'ai-agent-development' },
                { name: 'AI Chatbot Development', path: '/services/ai-chatbot-development', slug: 'ai-chatbot-development' },
                { name: 'AI App Development', path: '/services/ai-app-development', slug: 'ai-app-development' },
                { name: 'AI Software Development', path: '/services/ai-software-development', slug: 'ai-software-development' },
            ],
        },
        {
            title: 'AI Solutions & Technologies',
            path: '/services/ai-solutions-technologies',
            slug: 'ai-solutions-technologies',
            items: [
                { name: 'Predictive Modeling', path: '/services/predictive-modeling', slug: 'predictive-modeling' },
                { name: 'Computer Vision', path: '/services/computer-vision', slug: 'computer-vision' },
                { name: 'Natural Language Processing', path: '/services/natural-language-processing', slug: 'natural-language-processing' },
                { name: 'Big Data Analytics', path: '/services/big-data-analytics', slug: 'big-data-analytics' },
                { name: 'Agentic AI Development', path: '/services/agentic-ai-development', slug: 'agentic-ai-development' },
                { name: 'AI-Assisted Software', path: '/services/ai-assisted-software', slug: 'ai-assisted-software' },
                { name: 'AI Development Solutions', path: '/services/ai-development-solutions', slug: 'ai-development-solutions' },
            ],
        },
    ],
    side: {
        title: 'AI TALENT',
        items: [
            { name: 'Engage AI Experts', href: '/contact' },
        ],
        ctaBox: {
            title: 'Need Expert Advice?',
            description: 'Schedule a consultation with our technical architects.',
            buttonText: 'CONTACT US',
            href: '/contact'
        }
    },
};

export const MEGA_MENU_SERVICES = {
    main: [
        {
            title: 'ERP & Enterprise Systems',
            path: '/services/erp-enterprise-systems',
            slug: 'erp-enterprise-systems',
            items: [
                { name: 'Custom ERP Development', path: '/services/custom-erp-development', slug: 'custom-erp-development' },
                { name: 'Retail & POS ERP', path: '/services/retail-pos-erp', slug: 'retail-pos-erp' },
                { name: 'Manufacturing ERP', path: '/services/manufacturing-erp', slug: 'manufacturing-erp' },
                { name: 'School & Education ERP', path: '/services/school-education-erp', slug: 'school-education-erp' },
                { name: 'ERP Integrations (SAP, Oracle, Dynamics)', path: '/services/erp-integrations-sap-oracle-dynamics', slug: 'erp-integrations-sap-oracle-dynamics' },
            ],
        },
        {
            title: 'Web Applications & SaaS Platforms',
            path: '/services/web-applications-saas-platforms',
            slug: 'web-applications-saas-platforms',
            items: [
                { name: 'SaaS MVP Development', path: '/services/saas-mvp-development', slug: 'saas-mvp-development' },
                { name: 'Multi-Tenant Applications', path: '/services/multi-tenant-applications', slug: 'multi-tenant-applications' },
                { name: 'Admin Dashboards & BI Systems', path: '/services/admin-dashboards-bi-systems', slug: 'admin-dashboards-bi-systems' },
                { name: 'API-Driven Architectures', path: '/services/api-driven-architectures', slug: 'api-driven-architectures' },
                { name: 'Product Redesign & Modernization', path: '/services/product-redesign-modernization', slug: 'product-redesign-modernization' },
            ],
        },
        {
            title: 'Cloud & Infrastructure',
            path: '/services/cloud-infrastructure',
            slug: 'cloud-infrastructure',
            items: [
                { name: 'Cloud Architecture & Deployment', path: '/services/cloud-architecture-deployment', slug: 'cloud-architecture-deployment' },
                { name: 'DevOps & CI/CD Automation', path: '/services/devops-ci-cd-automation', slug: 'devops-ci-cd-automation' },
                { name: 'Containerization (Docker & Kubernetes)', path: '/services/containerization-docker-kubernetes', slug: 'containerization-docker-kubernetes' },
                { name: 'Infrastructure Monitoring & Scaling', path: '/services/infrastructure-monitoring-scaling', slug: 'infrastructure-monitoring-scaling' },
                { name: 'Cloud Security & Optimization', path: '/services/cloud-security-optimization', slug: 'cloud-security-optimization' },
            ],
        },
        {
            title: 'CRM & Customer Platforms',
            path: '/services/crm-customer-platforms',
            slug: 'crm-customer-platforms',
            items: [
                { name: 'Custom CRM Development', path: '/services/custom-crm-development', slug: 'custom-crm-development' },
                { name: 'Customer Portals', path: '/services/customer-portals', slug: 'customer-portals' },
                { name: 'Membership & Loyalty Systems', path: '/services/membership-loyalty-systems', slug: 'membership-loyalty-systems' },
                { name: 'Sales & Service Automation', path: '/services/sales-service-automation', slug: 'sales-service-automation' },
                { name: 'CRM Integration & Migration', path: '/services/crm-integration-migration', slug: 'crm-integration-migration' },
            ],
        },
        {
            title: 'CMS & Web Rebuilds',
            path: '/services/cms-web-rebuilds',
            slug: 'cms-web-rebuilds',
            items: [
                { name: 'Headless CMS Development', path: '/services/headless-cms-development', slug: 'headless-cms-development' },
                { name: 'WordPress Development', path: '/services/wordpress-development', slug: 'wordpress-development' },
                { name: 'Shopify Development', path: '/services/shopify-development', slug: 'shopify-development' },
                { name: 'Framer Development', path: '/services/framer-development', slug: 'framer-development' },
                { name: 'Webflow Development', path: '/services/webflow-development', slug: 'webflow-development' },
                { name: 'E-commerce Development', path: '/services/e-commerce-development', slug: 'e-commerce-development' },
                { name: 'Custom Website Development', path: '/services/custom-website-development', slug: 'custom-website-development' },
                { name: 'Corporate Website Rebuilds', path: '/services/corporate-website-rebuilds', slug: 'corporate-website-rebuilds' },
                { name: 'Multilingual & SEO Websites', path: '/services/multilingual-seo-websites', slug: 'multilingual-seo-websites' },
                { name: 'System Migrations', path: '/services/system-migrations', slug: 'system-migrations' },
            ],
        },
        {
            title: 'Consultancy and Support',
            path: '/services/consultancy-support',
            slug: 'consultancy-support',
            items: [
                { name: 'Software Consulting', path: '/services/software-consulting', slug: 'software-consulting' },
                { name: 'DevOps Consulting', path: '/services/devops-consulting', slug: 'devops-consulting' },
                { name: 'Mobile App Consulting', path: '/services/mobile-app-consulting', slug: 'mobile-app-consulting' },
                { name: 'Project Management Consulting', path: '/services/project-management-consulting', slug: 'project-management-consulting' },
                { name: 'Application Maintenance and Support', path: '/services/application-maintenance-and-support', slug: 'application-maintenance-and-support' },
                { name: 'Software Modernization', path: '/services/software-modernization', slug: 'software-modernization' },
                { name: 'Code Review', path: '/services/code-review', slug: 'code-review' },
                { name: 'Security Assessment', path: '/services/security-assessment', slug: 'security-assessment' },
                { name: 'Compliance Assessment', path: '/services/compliance-assessment', slug: 'compliance-assessment' },
                { name: 'Application Management', path: '/services/application-management', slug: 'application-management' },
            ],
        },
        {
            title: 'Bespoke Mobile Apps Engineering',
            path: '/services/bespoke-mobile-apps-engineering',
            slug: 'bespoke-mobile-apps-engineering',
            items: [
                { name: 'Native iOS Engineering', path: '/services/native-ios-engineering', slug: 'native-ios-engineering' },
                { name: 'Native Android Engineering', path: '/services/native-android-engineering', slug: 'native-android-engineering' },
                { name: 'Cross-Platform Development', path: '/services/cross-platform-development', slug: 'cross-platform-development' },
                { name: 'Progressive Web App (PWA) Engineering', path: '/services/progressive-web-app-pwa-engineering', slug: 'progressive-web-app-pwa-engineering' },
                { name: 'Hybrid App Frameworks', path: '/services/hybrid-app-frameworks', slug: 'hybrid-app-frameworks' },
                { name: 'Enterprise Mobility Integration', path: '/services/enterprise-mobility-integration', slug: 'enterprise-mobility-integration' },
                { name: 'Mobile DevOps & CI/CD Automation', path: '/services/mobile-devops-ci-cd-automation', slug: 'mobile-devops-ci-cd-automation' },
                { name: 'Mobile Security & Compliance', path: '/services/mobile-security-compliance', slug: 'mobile-security-compliance' },
                { name: 'Offline-First & Edge-Enabled Systems', path: '/services/offline-first-edge-enabled-systems', slug: 'offline-first-edge-enabled-systems' },
                { name: 'AI-Powered Mobile Experiences', path: '/services/ai-powered-mobile-experiences', slug: 'ai-powered-mobile-experiences' },
                { name: 'Performance Optimization & Observability', path: '/services/performance-optimization-observability', slug: 'performance-optimization-observability' },
                { name: 'App Store Engineering & Release Automation', path: '/services/app-store-engineering-release-automation', slug: 'app-store-engineering-release-automation' },
            ],
        },
        {
            title: 'Delivery Models',
            path: '/services/delivery-models',
            slug: 'delivery-models',
            items: [
                { name: 'Software Development Outsourcing', path: '/services/software-development-outsourcing', slug: 'software-development-outsourcing' },
                { name: 'Dedicated Development Team Augmentation', path: '/services/dedicated-development-team-augmentation', slug: 'dedicated-development-team-augmentation' },
            ],
        },
    ]
};

export const NAV_LINKS = [
    {
        name: 'Intelligence',
        href: '/intelligence',
        isMega: true,
        megaContent: MEGA_MENU_AI,
    },
    {
        name: 'Capabilities',
        href: '/services',
        isMega: true,
        megaContent: MEGA_MENU_SERVICES,
    },
    {
        name: 'Company',
        href: '/about',
        isMega: false,
        dropdownContent: [
            { name: 'Our Story', href: '/about' },
            { name: 'Careers', href: '/about' },
        ],
    },
    {
        name: 'Industries',
        href: '/industries',
        isMega: false,
        dropdownContent: industriesForNav.map(industry => ({
            ...industry,
            href: `/industries/${industry.industrySlug}`,
        })),
    },
    {
        name: 'Portfolio',
        href: '/case-studies',
        isMega: false,
        dropdownContent: [
            {
                name: 'Partners & Clients',
                href: '/clients',
            },
            { name: 'Impact Stories', href: '/case-studies' },
        ],
    },
    { name: 'Insights', href: '/insights' },
];

export const FOOTER_LINKS = {
    services: [
        { name: 'Intelligent Automation', href: '/intelligence' },
        { name: 'Enterprise Systems', href: '/services/erp-enterprise-systems' },
        { name: 'Cloud Architecture', href: '/services/cloud-infrastructure' },
        { name: 'SaaS Engineering', href: '/services/web-applications-saas-platforms' },
        { name: 'Mobility Solutions', href: '/services/bespoke-mobile-apps-engineering' },
    ],
    company: [
        { name: 'Corporate Profile', href: '/about' },
        { name: 'Our Team', href: '/about' },
        { name: 'Careers', href: '/about' },
        { name: 'Strategic Contact', href: '/contact' },
    ],
    industries: [
        { name: 'Healthcare', href: '/industries/healthcare' },
        { name: 'FinTech', href: '/industries/fintech' },
        { name: 'Retail & Logistics', href: '/industries/retail' },
        { name: 'Energy & Utilities', href: '/industries/oil-gas' },
        { name: 'Manufacturing', href: '/industries/manufacturing' },
    ],
    resources: [
        { name: 'Impact Stories', href: '/case-studies' },
        { name: 'Knowledge Hub', href: '/insights' },
        { name: 'FAQs', href: '/contact' },
    ]
};

export const SOCIAL_LINKS = [
    { name: 'Facebook', href: '#', icon: (props: any) => <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg> },
    { name: 'Twitter', href: '#', icon: (props: any) => <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg> },
    { name: 'LinkedIn', href: '#', icon: (props: any) => <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg> },
];

// --- ROUTING HELPERS ---

// 1. Build a map of Child -> Parent for O(1) lookups
// We derive this from two sources:
// a) MEGA_MENU_SERVICES (Categories -> Services)
// b) SERVICES_DATA (Services -> SubServices)

const PARENT_MAP: Record<string, string> = {};
let isMapInitialized = false;

const initializeParentMap = () => {
    if (isMapInitialized) return;

    // A. Map Categories to Services (Level 1 -> Level 2)
    const processMenu = (menu: any) => {
        menu.main.forEach((group: any) => {
            group.items.forEach((item: any) => {
                PARENT_MAP[item.slug] = group.slug;
            });
        });
    };
    processMenu(MEGA_MENU_SERVICES);
    processMenu(MEGA_MENU_AI);

    // B. Map Services to SubServices (Level 2 -> Level 3+)
    // We iterate through all services and map their sub-services to them
    SERVICES_DATA.forEach(parentService => {
        if (parentService.subServices && parentService.subServices.length > 0) {
            parentService.subServices.forEach(subName => {
                const subSlug = toSlug(subName);
                // Only set if not already set (Menu takes precedence or first parent wins)
                if (!PARENT_MAP[subSlug]) {
                    PARENT_MAP[subSlug] = parentService.slug;
                }
            });
        }
    });

    isMapInitialized = true;
};

export const getAncestors = (slug: string): string[] => {
    initializeParentMap();
    const ancestors: string[] = [];
    let currentSlug = slug;

    // Traverse up the tree
    while (PARENT_MAP[currentSlug]) {
        const parent = PARENT_MAP[currentSlug];
        // Prevent infinite loops (circular references)
        if (ancestors.includes(parent)) break;
        ancestors.unshift(parent);
        currentSlug = parent;
    }

    return ancestors;
};

export const getParentSlug = (childSlug: string): string | null => {
    const ancestors = getAncestors(childSlug);
    return ancestors.length > 0 ? ancestors[ancestors.length - 1] : null;
};

export const getServiceCanonicalPath = (slug: string): string => {
    const ancestors = getAncestors(slug);
    if (ancestors.length > 0) {
        return `/services/${ancestors.join('/')}/${slug}`;
    }
    return `/services/${slug}`;
};
