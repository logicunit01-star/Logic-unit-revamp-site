import { Post } from './cms';

const STRAPI_URL = 'https://backend.logic-unit.com';
const API_URL = `${STRAPI_URL}/api/articles?populate=*`;

// Generic Strapi type supporting BOTH wrapped and unwrapped responses
export type StrapiPost = {
  id: number;
  attributes?: any; // If attributes wrapper exists
} & Record<string, any>; // If attributes wrapper was removed

// Safe mapper for Strapi → Your Post type
export const mapStrapiPostToPost = (strapiPost: StrapiPost): Post => {
  if (!strapiPost) {
    throw new Error("Invalid Strapi post structure");
  }

  // SUPPORT BOTH STRUCTURES:
  // 1) { id, attributes: { ... } }
  // 2) { id, title, slug, ... }
  const attrs = strapiPost.attributes || strapiPost;

  if (!attrs) {
    throw new Error("Invalid Strapi post structure: missing attributes");
  }

  // Handle cover image
  let imageUrl = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop';

  const coverUrl = attrs.cover?.data?.attributes?.url;
  if (coverUrl) {
    imageUrl = coverUrl.startsWith('http') ? coverUrl : `${STRAPI_URL}${coverUrl}`;
  }

  // Handle author avatar
  let avatarUrl = 'https://logic-unit.com/wp-content/uploads/2019/06/cropped-logic-unit-logo.png';

  const avatarAttr = attrs.author?.data?.attributes?.avatar?.data?.attributes?.url;
  if (avatarAttr) {
    avatarUrl = avatarAttr.startsWith('http') ? avatarAttr : `${STRAPI_URL}${avatarAttr}`;
  }

  return {
    slug: attrs.slug || '',
    title: attrs.title || 'Untitled',
    postDescription:
      attrs.description ||
      (attrs.content
        ? attrs.content.replace(/<[^>]*>?/gm, '').slice(0, 150) + '...'
        : ''),
    excerpt: attrs.excerpt || '',
    image: imageUrl,

    author: {
      name: attrs.author?.data?.attributes?.name || 'Logic-Unit Team',
      avatar: avatarUrl,
    },

    date: attrs.publishedAt
      ? new Date(attrs.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
      : '',

    category: (() => {
      // Debug: log the category structure
      console.log('Category structure:', JSON.stringify(attrs.category, null, 2));

      // Handle wrapped structure: { data: { id, documentId, attributes: { name } } }
      if (attrs.category?.data) {
        return {
          id: attrs.category.data.id || 0,
          documentId: attrs.category.data.documentId || '',
          name: attrs.category.data.attributes?.name || 'Insights',
        };
      }

      // Handle unwrapped structure: { id, documentId, name }
      if (attrs.category?.id) {
        return {
          id: attrs.category.id,
          documentId: attrs.category.documentId || '',
          name: attrs.category.name || 'Insights',
        };
      }

      // Default fallback
      return {
        id: 0,
        documentId: '',
        name: 'Insights',
      };
    })(),

    content: attrs.content || '',
    blocks: attrs.block || attrs.blocks || [], // Support both 'block' and 'blocks' field names
  };
};

// Fetch ALL posts
export const fetchPosts = async (): Promise<Post[]> => {
  try {
    console.log('Fetching posts from:', API_URL);
    const res = await fetch(API_URL, { cache: 'no-store' });

    console.log('Response status:', res.status);
    if (!res.ok) throw new Error(`Failed to fetch posts: ${res.status}`);

    const json = await res.json();

    console.log('API Response data length:', json.data?.length);

    if (!Array.isArray(json.data)) {
      console.error("Invalid API response structure", json);
      return [];
    }

    const mappedPosts = json.data
      .map((p) => {
        try {
          return mapStrapiPostToPost(p);
        } catch (e) {
          console.error("Error mapping post:", e);
          return null;
        }
      })
      .filter((p): p is Post => p !== null);

    console.log(`Returning ${mappedPosts.length} mapped posts`);
    return mappedPosts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

// Fetch SINGLE POST by slug
export const fetchPostBySlug = async (slug: string): Promise<Post | null> => {
  try {
    const url = `${STRAPI_URL}/api/articles?filters[slug][$eq]=${slug}&populate=*`;
    const res = await fetch(url, { cache: 'no-store' });

    if (!res.ok) throw new Error(`Failed to fetch post: ${res.status}`);

    const json = await res.json();

    if (!json.data || !Array.isArray(json.data) || json.data.length === 0) {
      return null;
    }

    return mapStrapiPostToPost(json.data[0]);
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
};