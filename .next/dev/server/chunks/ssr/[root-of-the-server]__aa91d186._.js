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
        blocks = attrs.blocks.map((block)=>{
            // Find the first content-like field that is a string
            const contentField = [
                'block1',
                'content',
                'body',
                'text',
                'richText',
                'markdown',
                'description',
                'html',
                'quote'
            ].find((prop)=>block[prop] && typeof block[prop] === 'string' && block[prop].trim().length > 0);
            return {
                ...block,
                __component: block.__component || 'unknown',
                id: block.id,
                block1: contentField ? block[contentField] : block.block1 || ''
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
            avatar: avatarUrl
        },
        date: attrs.publishedAt ? new Date(attrs.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }) : '',
        category: (()=>{
            if (attrs.category?.data) {
                return {
                    id: attrs.category.data.id || 0,
                    documentId: attrs.category.data.documentId || '',
                    name: attrs.category.data.attributes?.name || 'Insights'
                };
            }
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
        blocks: blocks
    };
};
const fetchPosts = async ()=>{
    try {
        const res = await fetch(API_URL, {
            ...fetchOptions,
            cache: 'no-store'
        });
        console.log('Response status:', res.status);
        if (!res.ok) throw new Error(`Failed to fetch posts: ${res.status}`);
        const json = await res.json();
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
        // Use deep population to ensure blocks are included
        const url = `${STRAPI_URL}/api/articles?filters[slug][$eq]=${slug}&populate[0]=cover&populate[1]=author&populate[2]=author.avatar&populate[3]=category&populate[4]=blocks`;
        const res = await fetch(url, {
            ...fetchOptions,
            cache: 'no-store'
        });
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
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs) <export default as minpath>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "minpath",
    ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
}),
"[externals]/node:process [external] (node:process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:process", () => require("node:process"));

module.exports = mod;
}),
"[externals]/node:process [external] (node:process, cjs) <export default as minproc>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "minproc",
    ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:process [external] (node:process, cjs)");
}),
"[externals]/node:url [external] (node:url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:url", () => require("node:url"));

module.exports = mod;
}),
"[externals]/node:url [external] (node:url, cjs) <export fileURLToPath as urlToPath>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "urlToPath",
    ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__["fileURLToPath"]
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:url [external] (node:url, cjs)");
}),
"[project]/components/insights_page/BlockRenderer.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/react-markdown/lib/index.js [app-rsc] (ecmascript) <export Markdown as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remark-gfm/lib/index.js [app-rsc] (ecmascript)");
;
;
;
const BlockRenderer = ({ blocks })=>{
    if (!blocks || blocks.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: blocks.map((block)=>{
            switch(block.__component){
                case 'shared.rich-text':
                    // Fallback check for content if block1 is missing but body/text exists
                    const content = block.block1 || block.body || block.text || block.content || '';
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "prose prose-lg max-w-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
                            remarkPlugins: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
                            ],
                            components: {
                                // Custom heading styles
                                h1: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "h2 mt-12 mb-6",
                                        ...props
                                    }, void 0, false, {
                                        fileName: "[project]/components/insights_page/BlockRenderer.tsx",
                                        lineNumber: 38,
                                        columnNumber: 45
                                    }, void 0),
                                h2: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "h2 mt-10 mb-5",
                                        ...props
                                    }, void 0, false, {
                                        fileName: "[project]/components/insights_page/BlockRenderer.tsx",
                                        lineNumber: 41,
                                        columnNumber: 45
                                    }, void 0),
                                h3: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "h3 mt-8 mb-4 ",
                                        ...props
                                    }, void 0, false, {
                                        fileName: "[project]/components/insights_page/BlockRenderer.tsx",
                                        lineNumber: 44,
                                        columnNumber: 45
                                    }, void 0),
                                // Custom paragraph styles
                                p: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-body mb-6",
                                        ...props
                                    }, void 0, false, {
                                        fileName: "[project]/components/insights_page/BlockRenderer.tsx",
                                        lineNumber: 48,
                                        columnNumber: 45
                                    }, void 0),
                                // Custom link styles
                                a: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "link-std text-brand-primary hover:text-brand-dark border-brand-primary/30 hover:border-brand-dark",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        ...props
                                    }, void 0, false, {
                                        fileName: "[project]/components/insights_page/BlockRenderer.tsx",
                                        lineNumber: 52,
                                        columnNumber: 45
                                    }, void 0),
                                // Custom image rendering with Next.js Image
                                img: ({ node, ...props })=>{
                                    const src = props.src || '';
                                    const alt = props.alt || 'Blog image';
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "my-10 rounded-xl overflow-hidden shadow-lg border border-gray-100",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: src,
                                            alt: alt,
                                            className: "w-full h-auto",
                                            loading: "lazy"
                                        }, void 0, false, {
                                            fileName: "[project]/components/insights_page/BlockRenderer.tsx",
                                            lineNumber: 66,
                                            columnNumber: 53
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/components/insights_page/BlockRenderer.tsx",
                                        lineNumber: 65,
                                        columnNumber: 49
                                    }, void 0);
                                },
                                // Custom list styles
                                ul: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "list-disc list-outside ml-6 space-y-2 mb-6 text-body marker:text-brand-primary",
                                        ...props
                                    }, void 0, false, {
                                        fileName: "[project]/components/insights_page/BlockRenderer.tsx",
                                        lineNumber: 77,
                                        columnNumber: 45
                                    }, void 0),
                                ol: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                        className: "list-decimal list-outside ml-6 space-y-2 mb-6 text-body marker:text-brand-primary font-bold",
                                        ...props
                                    }, void 0, false, {
                                        fileName: "[project]/components/insights_page/BlockRenderer.tsx",
                                        lineNumber: 80,
                                        columnNumber: 45
                                    }, void 0),
                                // Custom blockquote styles
                                blockquote: ({ node, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                        className: "border-l-4 border-brand-primary pl-6 pr-4 py-2 italic my-8 text-xl text-brand-dark bg-gray-50/50 rounded-r-lg",
                                        ...props
                                    }, void 0, false, {
                                        fileName: "[project]/components/insights_page/BlockRenderer.tsx",
                                        lineNumber: 84,
                                        columnNumber: 45
                                    }, void 0),
                                // Custom code block styles
                                code: ({ node, className, children, ...props })=>{
                                    const match = /language-(\w+)/.exec(className || '');
                                    const isInline = !match;
                                    if (isInline) {
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                            className: "bg-gray-100 rounded px-1.5 py-0.5 text-sm font-mono text-brand-primary font-semibold",
                                            ...props,
                                            children: children
                                        }, void 0, false, {
                                            fileName: "[project]/components/insights_page/BlockRenderer.tsx",
                                            lineNumber: 96,
                                            columnNumber: 53
                                        }, void 0);
                                    }
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        className: "block bg-gray-900 text-gray-100 rounded-xl p-6 overflow-x-auto text-sm font-mono my-8 shadow-inner",
                                        ...props,
                                        children: children
                                    }, void 0, false, {
                                        fileName: "[project]/components/insights_page/BlockRenderer.tsx",
                                        lineNumber: 105,
                                        columnNumber: 49
                                    }, void 0);
                                }
                            },
                            children: content
                        }, void 0, false, {
                            fileName: "[project]/components/insights_page/BlockRenderer.tsx",
                            lineNumber: 33,
                            columnNumber: 33
                        }, ("TURBOPACK compile-time value", void 0))
                    }, block.id, false, {
                        fileName: "[project]/components/insights_page/BlockRenderer.tsx",
                        lineNumber: 30,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0));
                // Add other block types here as needed
                case 'shared.quote':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                        className: "border-l-4 border-brand-primary pl-6 py-6 my-10 text-2xl font-serif italic text-brand-dark bg-brand-bg-main",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-brand-primary text-4xl mr-2",
                                children: "“"
                            }, void 0, false, {
                                fileName: "[project]/components/insights_page/BlockRenderer.tsx",
                                lineNumber: 127,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0)),
                            block.quote
                        ]
                    }, block.id, true, {
                        fileName: "[project]/components/insights_page/BlockRenderer.tsx",
                        lineNumber: 123,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0));
                case 'shared.media':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "my-8",
                        children: block.file?.url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: block.file.url,
                            alt: block.file.alternativeText || 'Media',
                            className: "w-full h-auto rounded-lg"
                        }, void 0, false, {
                            fileName: "[project]/components/insights_page/BlockRenderer.tsx",
                            lineNumber: 136,
                            columnNumber: 37
                        }, ("TURBOPACK compile-time value", void 0))
                    }, block.id, false, {
                        fileName: "[project]/components/insights_page/BlockRenderer.tsx",
                        lineNumber: 134,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0));
                default:
                    console.warn(`Unknown block component: ${block.__component}`);
                    return null;
            }
        })
    }, void 0, false, {
        fileName: "[project]/components/insights_page/BlockRenderer.tsx",
        lineNumber: 21,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = BlockRenderer;
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
    return content.replace(/\s*<\/p>\s*(]*>[\s\S]*?<\/h[1-6]>)\s*<\/p>/gi, '$1');
};
async function BlogPostPage({ params }) {
    const { slug } = await params;
    const post = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchPostBySlug"])(slug);
    if (!post) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Post Not Found"
        }, void 0, false, {
            fileName: "[project]/app/insights/[slug]/page.tsx",
            lineNumber: 32,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-brand-bg-main section-std text-brand-dark",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: "container-std max-w-4xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: "/insights",
                    className: "link-std mb-8 inline-block text-brand-primary",
                    children: "← Back to Insights"
                }, void 0, false, {
                    fileName: "[project]/app/insights/[slug]/page.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "h1 mb-6",
                    children: post.title
                }, void 0, false, {
                    fileName: "[project]/app/insights/[slug]/page.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                post.excerpt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl md:text-2xl text-brand-gray mb-8 leading-relaxed font-light",
                    children: post.excerpt
                }, void 0, false, {
                    fileName: "[project]/app/insights/[slug]/page.tsx",
                    lineNumber: 49,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4 mb-10 border-b border-gray-200 pb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: post.author.avatar,
                            alt: post.author.name,
                            className: "w-14 h-14 rounded-full border-2 border-brand-primary/20"
                        }, void 0, false, {
                            fileName: "[project]/app/insights/[slug]/page.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-bold text-brand-dark",
                                    children: post.author.name
                                }, void 0, false, {
                                    fileName: "[project]/app/insights/[slug]/page.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-brand-gray font-medium uppercase tracking-wider",
                                    children: post.date
                                }, void 0, false, {
                                    fileName: "[project]/app/insights/[slug]/page.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/insights/[slug]/page.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/insights/[slug]/page.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                post.cover && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-12 rounded-2xl overflow-hidden shadow-xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: post.cover,
                        alt: post.title,
                        className: "w-full h-auto transform hover:scale-105 transition-transform duration-700"
                    }, void 0, false, {
                        fileName: "[project]/app/insights/[slug]/page.tsx",
                        lineNumber: 70,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/insights/[slug]/page.tsx",
                    lineNumber: 69,
                    columnNumber: 11
                }, this),
                post.blocks && post.blocks.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "prose prose-lg max-w-none text-brand-gray",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$insights_page$2f$BlockRenderer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        blocks: post.blocks
                    }, void 0, false, {
                        fileName: "[project]/app/insights/[slug]/page.tsx",
                        lineNumber: 81,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/insights/[slug]/page.tsx",
                    lineNumber: 80,
                    columnNumber: 11
                }, this) : /* Fallback to regular content if no blocks */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "prose prose-lg max-w-none text-brand-gray",
                    children: typeof post.content === 'string' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        dangerouslySetInnerHTML: {
                            __html: cleanContent(post.content)
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/insights/[slug]/page.tsx",
                        lineNumber: 87,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: String(post.content)
                    }, void 0, false, {
                        fileName: "[project]/app/insights/[slug]/page.tsx",
                        lineNumber: 93,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/insights/[slug]/page.tsx",
                    lineNumber: 85,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/insights/[slug]/page.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/insights/[slug]/page.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/insights/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/insights/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__aa91d186._.js.map