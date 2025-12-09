module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[project]/lib/api.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchPostBySlug",
    ()=>fetchPostBySlug,
    "fetchPosts",
    ()=>fetchPosts,
    "mapStrapiPostToPost",
    ()=>mapStrapiPostToPost
]);
const STRAPI_URL = 'https://backend.logic-unit.com';
const API_URL = `${STRAPI_URL}/api/articles?populate=*`;
const AUTH_TOKEN = 'ff6f080426c4a6cffbce2e0cb11d8beff8638180b0d17094e1166813f95291ee6ac515431620d047d922517743c3dbfc6b90600b492ce7130547e2ade343be2872a7b7a10cd43038df969628bd5722214da5ac5de0f51999bcb2536b0d952c4c886d0287ecf7ba5d0fec25f9b68126dd88973b986a61476dd8517fae63ea824d';
const fetchOptions = {
    headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`
    }
};
const mapStrapiPostToPost = (strapiPost)=>{
    if (!strapiPost) {
        throw new Error("Invalid Strapi post structure");
    }
    const attrs = strapiPost.attributes || strapiPost;
    if (!attrs) {
        throw new Error("Invalid Strapi post structure: missing attributes");
    }
    // Handle cover image - Strapi v5 format (direct object) vs v4 format (data wrapper)
    let imageUrl = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop';
    if (attrs.cover) {
        // Strapi v5 format: cover is a direct object with url property
        if (attrs.cover.url) {
            imageUrl = attrs.cover.url.startsWith('http') ? attrs.cover.url : `${STRAPI_URL}${attrs.cover.url}`;
        } else if (attrs.cover.data?.attributes?.url) {
            const coverUrl = attrs.cover.data.attributes.url;
            imageUrl = coverUrl.startsWith('http') ? coverUrl : `${STRAPI_URL}${coverUrl}`;
        }
    }
    // Handle avatar - similar logic
    let avatarUrl = 'https://logic-unit.com/wp-content/uploads/2019/06/cropped-logic-unit-logo.png';
    if (attrs.author) {
        // Strapi v5 format: direct nested object
        if (attrs.author.avatar?.url) {
            avatarUrl = attrs.author.avatar.url.startsWith('http') ? attrs.author.avatar.url : `${STRAPI_URL}${attrs.author.avatar.url}`;
        } else if (attrs.author.data?.attributes?.avatar?.data?.attributes?.url) {
            const avatarAttr = attrs.author.data.attributes.avatar.data.attributes.url;
            avatarUrl = avatarAttr.startsWith('http') ? avatarAttr : `${STRAPI_URL}${avatarAttr}`;
        }
    }
    return {
        slug: attrs.slug || '',
        title: attrs.title || 'Untitled',
        postDescription: attrs.postDescription || attrs.description || (attrs.content ? attrs.content.replace(/<[^>]*>?/gm, '').slice(0, 150) + '...' : ''),
        excerpt: attrs.excerpt || '',
        cover: imageUrl,
        author: {
            name: attrs.author?.data?.attributes?.name || attrs.author?.name || 'Logic-Unit Team',
            avatar: avatarUrl
        },
        date: attrs.publishedAt ? new Date(attrs.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }) : '',
        category: (()=>{
            // Strapi v4 format
            if (attrs.category?.data) {
                return {
                    id: attrs.category.data.id || 0,
                    documentId: attrs.category.data.documentId || '',
                    name: attrs.category.data.attributes?.name || 'Insights'
                };
            }
            // Strapi v5 format (direct object)
            if (attrs.category?.id) {
                return {
                    id: attrs.category.id,
                    documentId: attrs.category.documentId || '',
                    name: attrs.category.name || 'Insights'
                };
            }
            return {
                id: 0,
                documentId: '',
                name: 'Insights'
            };
        })(),
        content: attrs.content || '',
        blocks: attrs.block || attrs.blocks || []
    };
};
const fetchPosts = async ()=>{
    try {
        console.log('Fetching posts from:', API_URL);
        const res = await fetch(API_URL, {
            ...fetchOptions,
            cache: 'no-store'
        });
        console.log('Response status:', res.status);
        if (!res.ok) throw new Error(`Failed to fetch posts: ${res.status}`);
        const json = await res.json();
        if (!Array.isArray(json.data)) {
            console.error("Invalid API response structure", json);
            return [];
        }
        const mappedPosts = json.data.map((p)=>{
            try {
                return mapStrapiPostToPost(p);
            } catch (e) {
                console.error("Error mapping post:", e);
                return null;
            }
        }).filter((p)=>p !== null);
        return mappedPosts;
    } catch (error) {
        console.error("Error fetching posts:", error);
        return [];
    }
};
const fetchPostBySlug = async (slug)=>{
    try {
        const url = `${STRAPI_URL}/api/articles?filters[slug][$eq]=${slug}&populate=*`;
        const res = await fetch(url, {
            ...fetchOptions,
            cache: 'no-store'
        });
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
}),
"[project]/components/insights_page/BlockRenderer.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/insights_page/BlockRenderer.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/insights_page/BlockRenderer.tsx <module evaluation>", "default");
}),
"[project]/components/insights_page/BlockRenderer.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/insights_page/BlockRenderer.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/insights_page/BlockRenderer.tsx", "default");
}),
"[project]/components/insights_page/BlockRenderer.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$insights_page$2f$BlockRenderer$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/insights_page/BlockRenderer.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$insights_page$2f$BlockRenderer$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/insights_page/BlockRenderer.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$insights_page$2f$BlockRenderer$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/insights/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogPostPage,
    "generateMetadata",
    ()=>generateMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$insights_page$2f$BlockRenderer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/insights_page/BlockRenderer.tsx [app-rsc] (ecmascript)");
;
;
;
;
async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchPostBySlug"])(slug);
    if (!post) {
        return {
            title: 'Post Not Found'
        };
    }
    return {
        title: post.title.replace(/<[^>]*>/g, ''),
        description: post.excerpt || post.postDescription || 'Read this article on Logic-Unit Insights.'
    };
}
// Helper function to clean content strings
const cleanContent = (content)=>{
    if (typeof content !== 'string') return '';
    return content.replace(/<p>\s*(<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>)\s*<\/p>/gi, '$1');
};
async function BlogPostPage({ params }) {
    const { slug } = await params;
    const post = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchPostBySlug"])(slug);
    if (!post) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "py-32 text-center text-2xl",
            children: "Post Not Found"
        }, void 0, false, {
            fileName: "[project]/app/insights/[slug]/page.tsx",
            lineNumber: 31,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "bg-white py-16 sm:py-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/insights",
                        className: "mb-8 inline-block font-semibold text-brand-accent hover:text-brand-secondary transition-colors",
                        children: "← Back to Insights"
                    }, void 0, false, {
                        fileName: "[project]/app/insights/[slug]/page.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl md:text-5xl font-extrabold font-heading bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-accent pb-2 mb-4",
                        dangerouslySetInnerHTML: {
                            __html: post.title
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/insights/[slug]/page.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    post.excerpt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl text-brand-gray mb-8 leading-relaxed italic border-l-4 border-brand-primary pl-6 py-2",
                        children: post.excerpt
                    }, void 0, false, {
                        fileName: "[project]/app/insights/[slug]/page.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-4 mb-8 text-brand-dark/70",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: post.author.avatar,
                                alt: post.author.name,
                                className: "w-12 h-12 rounded-full border-2 border-brand-secondary object-cover"
                            }, void 0, false, {
                                fileName: "[project]/app/insights/[slug]/page.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold",
                                        children: post.author.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/insights/[slug]/page.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm",
                                        children: post.date
                                    }, void 0, false, {
                                        fileName: "[project]/app/insights/[slug]/page.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/insights/[slug]/page.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/insights/[slug]/page.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    post.cover && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: post.cover,
                        alt: post.title,
                        className: "w-full h-auto max-h-[500px] object-cover rounded-lg shadow-xl mb-12"
                    }, void 0, false, {
                        fileName: "[project]/app/insights/[slug]/page.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this),
                    post.blocks && post.blocks.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$insights_page$2f$BlockRenderer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        blocks: post.blocks
                    }, void 0, false, {
                        fileName: "[project]/app/insights/[slug]/page.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this) : /* Fallback to regular content if no blocks */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "prose lg:prose-xl max-w-none text-brand-dark/80 prose-headings:font-heading prose-headings:text-brand-dark prose-a:text-brand-primary prose-img:rounded-lg prose-p:leading-relaxed prose-p:mb-6",
                        children: typeof post.content === 'string' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            dangerouslySetInnerHTML: {
                                __html: cleanContent(post.content)
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/insights/[slug]/page.tsx",
                            lineNumber: 75,
                            columnNumber: 15
                        }, this) : post.content
                    }, void 0, false, {
                        fileName: "[project]/app/insights/[slug]/page.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/insights/[slug]/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-24"
            }, void 0, false, {
                fileName: "[project]/app/insights/[slug]/page.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/insights/[slug]/page.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/insights/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/insights/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__71405f79._.js.map