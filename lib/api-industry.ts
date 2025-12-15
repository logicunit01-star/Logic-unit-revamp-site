const STRAPI_URL = 'https://backend.logic-unit.com';

const INDUSTRY_API_URL = `${STRAPI_URL}/api/industry-pages?populate[industriesGrid][populate][subchildindustries]=*&populate[industryFaq]=*`;

const AUTH_TOKEN = 'db7858d87261d71dd54774e392d95adababf24505e06545f889e7eb340ab8b78e1d62d82f24d64354c635a14ef20451d0fccb2bad707bbf2987b75d811980f1d65e130312d067d751076b08453c3ca09f033546a7f5746b36be728787cf2ebc695ba06fb42499e73d761788c03d6f417afbded4017be8965d98644e76846e331';

const fetchOptions = {
    headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
    cache: 'no-store' as RequestCache, // Ensure fresh data on server-side
};

// TS type for 1 industry page
export type IndustryPage = {
    id: number;
    tagline: string;
    heading: string;
    content: string;
    headingSpan: string;
    btnOne?: string | null; // Added based on page usage
    btnTwo?: string | null; // Added based on page usage

    sectorTagline: string;
    sectorHeading: string;
    sectorHeadingSpan: string;
    sectorHeadingContent: string;

    metaTitle: string;
    metaDescription: string;

    industries: {
        id: number;
        slug: string;
        name: string;
        description: string;
        subIndustries: {
            id: number;
            name: string;
            slug: string | null;
        }[];
    }[];

    faqs: {
        id: number;
        question: string;
        answer: string;
    }[];
};

// Map raw Strapi → clean usable object
export const mapIndustryPage = (item: any): IndustryPage => {
    const a = item; // no attributes wrapper in Strapi v5 if flat, checking usage... Step 53 code implied direct access.

    return {
        id: a.id,

        tagline: a.industryheroTagline,
        heading: a.industryheroHeading,
        headingSpan: a.industryheroheadingSpan,
        content: a.industryheroContent,
        btnOne: a.industryherobtnone,
        btnTwo: a.industryherobtnsnd,

        sectorTagline: a.sectorTagline,
        sectorHeading: a.sectorheading,
        sectorHeadingSpan: a.sectorheadingSpan,
        sectorHeadingContent: a.sectorheadingContent,

        metaTitle: a.metaTitle,
        metaDescription: a.metaDescription,

        industries: a.industriesGrid?.map((ind: any) => ({
            id: ind.id,
            slug: ind.slug,
            name: ind.industryName,
            description: ind.industrydesrciption,
            subIndustries: ind.subchildindustries?.map((child: any) => ({
                id: child.id,
                name: child.featuresubChild,
                slug: child.subchildSlug,
            })) || [],
        })) || [],

        faqs: a.industryFaq?.map((f: any) => ({
            id: f.id,
            question: f.question,
            answer: f.answer,
        })) || [],
    };
};

export const fetchIndustryPage = async (): Promise<IndustryPage | null> => {
    try {
        const res = await fetch(INDUSTRY_API_URL, fetchOptions);

        if (!res.ok) {
            console.error(`Failed to fetch industry page: ${res.status}`);
            return null;
        }

        const json = await res.json();

        if (!json.data || json.data.length === 0) return null;

        return mapIndustryPage(json.data[0]);
    } catch (err) {
        console.error("Industry Page Fetch Error:", err);
        return null;
    }
};
