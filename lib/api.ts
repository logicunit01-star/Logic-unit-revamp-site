import { Post } from './cms';

const STRAPI_URL = 'https://backend.logic-unit.com';
const API_URL = `${STRAPI_URL}/api/articles?populate=*`;
const AUTH_TOKEN = 'ff6f080426c4a6cffbce2e0cb11d8beff8638180b0d17094e1166813f95291ee6ac515431620d047d922517743c3dbfc6b90600b492ce7130547e2ade343be2872a7b7a10cd43038df969628bd5722214da5ac5de0f51999bcb2536b0d952c4c886d0287ecf7ba5d0fec25f9b68126dd88973b986a61476dd8517fae63ea824d';

const fetchOptions = {
  headers: {
    Authorization: `Bearer ${AUTH_TOKEN}`,
  },
};

export type StrapiPost = {
  id: number;
  attributes?: any;
} & Record<string, any>;

export const mapStrapiPostToPost = (strapiPost: StrapiPost): Post => {
  if (!strapiPost) {
    throw new Error("Invalid Strapi post structure");
  }

  const attrs = strapiPost.attributes || strapiPost;

  if (!attrs) {
    throw new Error("Invalid Strapi post structure: missing attributes");
  }

  // Handle cover image
  let imageUrl = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop';
  if (attrs.cover) {
    if (attrs.cover.url) {
      imageUrl = attrs.cover.url.startsWith('http') ? attrs.cover.url : `${STRAPI_URL}${attrs.cover.url}`;
    } else if (attrs.cover.data?.attributes?.url) {
      const coverUrl = attrs.cover.data.attributes.url;
      imageUrl = coverUrl.startsWith('http') ? coverUrl : `${STRAPI_URL}${coverUrl}`;
    }
  }

  // Handle avatar
  let avatarUrl = 'https://logic-unit.com/wp-content/uploads/2019/06/cropped-logic-unit-logo.png';
  if (attrs.author) {
    if (attrs.author.avatar?.url) {
      avatarUrl = attrs.author.avatar.url.startsWith('http') ? attrs.author.avatar.url : `${STRAPI_URL}${attrs.author.avatar.url}`;
    } else if (attrs.author.data?.attributes?.avatar?.data?.attributes?.url) {
      const avatarAttr = attrs.author.data.attributes.avatar.data.attributes.url;
      avatarUrl = avatarAttr.startsWith('http') ? avatarAttr : `${STRAPI_URL}${avatarAttr}`;
    }
  }

  // Handle blocks - map them properly
  let blocks = [];
  if (attrs.blocks && Array.isArray(attrs.blocks)) {
    blocks = attrs.blocks.map((block: any) => {
      // Find the first content-like field that is a string
      const contentField = ['block1', 'content', 'body', 'text', 'richText', 'markdown', 'description', 'html', 'quote'].find(
        prop => block[prop] && typeof block[prop] === 'string' && block[prop].trim().length > 0
      );

      return {
        ...block,
        __component: block.__component || 'unknown',
        id: block.id,
        block1: contentField ? block[contentField] : (block.block1 || ''),
      };
    });
  }

  return {
    slug: attrs.slug || '',
    title: attrs.title || 'Untitled',
    postDescription: attrs.postDescription || attrs.description || (attrs.content ? attrs.content.replace(/<[^>]*>?/gm, '').slice(0, 150) + '...' : ''),
    excerpt: attrs.excerpt || '',
    cover: imageUrl,
    author: {
      name: attrs.author?.data?.attributes?.name || attrs.author?.name || 'Logic-Unit Team',
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
      if (attrs.category?.data) {
        return {
          id: attrs.category.data.id || 0,
          documentId: attrs.category.data.documentId || '',
          name: attrs.category.data.attributes?.name || 'Insights',
        };
      }
      if (attrs.category?.id) {
        return {
          id: attrs.category.id,
          documentId: attrs.category.documentId || '',
          name: attrs.category.name || 'Insights',
        };
      }
      return {
        id: 0,
        documentId: '',
        name: 'Insights',
      };
    })(),
    content: attrs.content || '',
    blocks: blocks,
  };
};

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const res = await fetch(API_URL, { ...fetchOptions, cache: 'no-store' });
    console.log('Response status:', res.status);

    if (!res.ok) throw new Error(`Failed to fetch posts: ${res.status}`);

    const json = await res.json();



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

    return mappedPosts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

export const fetchPostBySlug = async (slug: string): Promise<Post | null> => {
  try {
    // Use deep population to ensure blocks are included
    const url = `${STRAPI_URL}/api/articles?filters[slug][$eq]=${slug}&populate[0]=cover&populate[1]=author&populate[2]=author.avatar&populate[3]=category&populate[4]=blocks`;

    const res = await fetch(url, { ...fetchOptions, cache: 'no-store' });

    if (!res.ok) throw new Error(`Failed to fetch post: ${res.status}`);

    const json = await res.json();


    if (!json.data || !Array.isArray(json.data) || json.data.length === 0) {
      return null;
    }

    const mappedPost = mapStrapiPostToPost(json.data[0]);

    return mappedPost;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
};