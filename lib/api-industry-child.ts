const STRAPI_URL = 'http://139.59.8.119:1337';
const TOKEN = '5480c7e3127312abe8295542a51f525b7e7ade343a94dbca668c911032a5b325918ca30f80052b5ab5ebfb9be1e107f30b193be41017f58fbe5617b5ca1b1f4856f9c7458df7caa442a39f77395dc10818f6f04bce50d8de3eb55390349c83c8c6e76e62cb496d8694b45fa7a40bec452839deefbcdb2ae75e32b1676ad3637e';

const FETCH_OPTIONS = {
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    },
};

export interface IndustryChildData {
    id: number;
    slug: string;
    heroHeading: string;
    heroTagline: string;
    heroHeadingSpan: string;
    heroContent: string;
    metaTitle: string;
    metaDescription: string;
    ctaHeading: string;
    ctaContent: string;
    ctabtnText: string;
    navName: string;

    // Challenges
    challengesTagline: string;
    challengesHeading: string;
    challengesHeadingSpan: string;
    challengesContent: string;
    challenges: {
        title: string;
        description: string;
    }[];

    // Approach / Process
    approachTagline: string;
    approachHeading: string;
    approachHeadingSpan: string;
    approachContent: string;
    approaches: {
        title: string;
        description: string;
    }[];

    // Why Choose / Why Us
    whyChooseTagline: string;
    whyChooseHeading: string;
    whyChooseHeadingSpan: string;
    whyChooseContent: string;
    choose: {
        title: string;
        description: string;
    }[];

    // Engagement / CTA
    engagementTagline: string;
    engagementHeading: string;
    engagementHeadingSpan: string;
    engagementContent: string;

    // Sector / Grid
    sectorTagline: string;
    sectorHeading: string;
    sectorHeadingSpan: string;
    sectorHeadingContent: string;
    industryGrid: {
        slug: string;
        industryName: string;
        industryDescription: string;
        subIndustries: {
            id: number;
            name: string;
            slug: string;
        }[];
    }[];

    // FAQ
    faqs: {
        id: number;
        question: string;
        answer: string;
    }[];
}

export async function fetchIndustryChild(slug: string): Promise<IndustryChildData | null> {
    try {
        // Construct the URL with all populations
        // Added deep population for subchildindustries
        const url = `${STRAPI_URL}/api/industry-children?populate[industryChild][populate][challenges]=true&populate[industryChild][populate][approaches]=true&populate[industryChild][populate][choose]=true&populate[industryChild][populate][industryFaq]=true&populate[industryChild][populate][industryGrid][populate]=subchildindustries`;

        const res = await fetch(url, {
            headers: FETCH_OPTIONS.headers,
            next: { revalidate: 3600 }
        });

        if (!res.ok) {
            console.error('Failed to fetch industry children:', res.status, res.statusText);
            return null;
        }

        const json = await res.json();

        if (!json.data || !Array.isArray(json.data) || json.data.length === 0) {
            return null;
        }

        // The API returns a list of "industry-children" entries
        let foundItem: any = null;

        for (const entry of json.data) {
            if (entry.industryChild && Array.isArray(entry.industryChild)) {
                foundItem = entry.industryChild.find((item: any) => item.slug === slug);
                if (foundItem) break;
            }
        }

        if (!foundItem) {
            return null;
        }

        return mapIndustryChild(foundItem);

    } catch (error) {
        console.error('Error fetching industry child:', error);
        return null;
    }
}

function mapIndustryChild(item: any): IndustryChildData {
    return {
        id: item.id,
        slug: item.slug,
        heroHeading: item.heroHeadng || '', // Note tyop in API response "heroHeadng"
        heroTagline: item.heroTagline || '',
        heroHeadingSpan: item.heroheadingSpan || '',
        heroContent: item.heroContent || '',
        metaTitle: item.metaTitle || '',
        metaDescription: item.metaDescription || '',
        ctaHeading: item.ctaHeading || '',
        ctaContent: item.ctaContent || '',
        ctabtnText: item.ctabtnText || '',
        navName: item.navName || '',

        challengesTagline: item.challengesTagline || '',
        challengesHeading: item.challengesHeading || '',
        challengesHeadingSpan: item.challengesheadingSpan || '',
        challengesContent: item.challengesContent || '',
        challenges: item.challenges?.map((c: any) => ({
            title: c.challengesHeading || '',
            description: c.challengesContent || '',
        })) || [],

        approachTagline: item.approachTagline || '',
        approachHeading: item.approachHeading || '',
        approachHeadingSpan: item.approachheadingSpan || '',
        approachContent: item.approachContent || '',
        approaches: item.approaches?.map((a: any) => ({
            title: a.approacesHeading || '', // Note typo in API "approacesHeading"
            description: a.approacesContent || '',
        })) || [],

        whyChooseTagline: item.whychooseTagline || '',
        whyChooseHeading: item.whychooseHeading || '',
        whyChooseHeadingSpan: item.whychooseheadingSpan || '',
        whyChooseContent: item.whychooseContent || '',
        choose: item.choose?.map((c: any) => ({
            title: c.chooseHeading || '',
            description: c.chooseContent || '',
        })) || [],

        engagementTagline: item.engagementTagline || '',
        engagementHeading: item.engagementHeading || '',
        engagementHeadingSpan: item.engagementheadingSpan || '',
        engagementContent: item.engagementContent || '',

        sectorTagline: item.sectorTagline || '',
        sectorHeading: item.sectorHeading || '',
        sectorHeadingSpan: item.sectorHeadingSpan || '',
        sectorHeadingContent: item.sectorHeadingContent || '',
        industryGrid: item.industryGrid?.map((g: any) => ({
            slug: g.slug || '',
            industryName: g.industryName || '',
            industryDescription: g.industrydesrciption || '',
            subIndustries: g.subchildindustries?.map((s: any) => ({
                id: s.id,
                name: s.featuresubChild || '',
                slug: s.subchildSlug || ''
            })) || [],
        })) || [],

        faqs: item.industryFaq?.map((f: any, index: number) => ({
            id: f.id || index,
            question: f.question || '',
            answer: f.answer || '',
        })) || [],
    };
}

export async function fetchIndustryNavigation(): Promise<{
    name: string;
    slug: string;
    subIndustries: { name: string; slug: string }[];
}[]> {
    try {
        // Fetch with deeper population to get industryGrid and subchildindustries
        // Using explicit population for subchildindustries
        const url = `${STRAPI_URL}/api/industry-children?populate[industryChild][populate][industryGrid][populate][subchildindustries]=*`;

        const res = await fetch(url, {
            headers: FETCH_OPTIONS.headers,
            next: { revalidate: 3600 }
        });

        if (!res.ok) {
            console.error('Failed to fetch industry navigation:', res.status);
            return [];
        }

        const json = await res.json();
        if (!json.data || !Array.isArray(json.data)) return [];

        const industries: { name: string; slug: string; subIndustries: { name: string; slug: string }[] }[] = [];

        for (const entry of json.data) {
            if (entry.industryChild && Array.isArray(entry.industryChild)) {
                entry.industryChild.forEach((item: any) => {
                    if (item.slug && item.heroHeadng) {
                        const subIndustries: { name: string; slug: string }[] = [];

                        // Check for both industryGrid and industriesGrid (defensive)
                        const grid = item.industryGrid || item.industriesGrid;

                        if (grid && Array.isArray(grid)) {
                            const allSubIndustries: { name: string; slug: string }[] = [];

                            grid.forEach((gridItem: any) => {
                                const subchilds = gridItem.subchildindustries || gridItem.subchildIndustries;
                                if (subchilds && Array.isArray(subchilds)) {
                                    subchilds.forEach((sub: any) => {
                                        // Try various field names for the title and slug
                                        const name = sub.featuresubChild || sub.featureSubChild || sub.title || sub.name;
                                        const slug = sub.subchildSlug || sub.subchildslug || sub.slug;

                                        if (name && slug) {
                                            allSubIndustries.push({
                                                name: name,
                                                slug: slug
                                            });
                                        }
                                    });
                                }
                            });

                            // Remove duplicates by slug
                            const uniqueSubIndustries = allSubIndustries.filter((sub, index, self) =>
                                index === self.findIndex((t) => t.slug === sub.slug)
                            );

                            subIndustries.push(...uniqueSubIndustries.slice(0, 4));
                        }

                        industries.push({
                            name: item.navName,
                            slug: item.slug,
                            subIndustries
                        });
                    }
                });
            }
        }

        return industries;
    } catch (error) {
        console.error('Error fetching industry navigation:', error);
        return [];
    }
}


export async function fetchAllIndustriesFaqs(): Promise<{
    name: string;
    slug: string;
    faqs: { question: string; answer: string }[];
}[]> {
    try {
        const url = `${STRAPI_URL}/api/industry-children?populate[industryChild][populate][industryFaq]=true`;

        const res = await fetch(url, {
            headers: FETCH_OPTIONS.headers,
            next: { revalidate: 3600 }
        });

        if (!res.ok) {
            console.error('Failed to fetch industry FAQs:', res.status);
            return [];
        }

        const json = await res.json();
        if (!json.data || !Array.isArray(json.data)) return [];

        const industryFaqs: { name: string; slug: string; faqs: { question: string; answer: string }[] }[] = [];

        for (const entry of json.data) {
            if (entry.industryChild && Array.isArray(entry.industryChild)) {
                entry.industryChild.forEach((item: any) => {
                    if (item.navName && item.industryFaq && item.industryFaq.length > 0) {
                        industryFaqs.push({
                            name: item.navName,
                            slug: item.slug,
                            faqs: item.industryFaq.map((f: any) => ({
                                question: f.question,
                                answer: f.answer
                            }))
                        });
                    }
                });
            }
        }

        return industryFaqs;
    } catch (error) {
        console.error('Error fetching industry FAQs:', error);
        return [];
    }
}
