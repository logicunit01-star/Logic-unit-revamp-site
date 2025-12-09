(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/insights_page/BlockRenderer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const BlockRenderer = ({ blocks })=>{
    if (!blocks || blocks.length === 0) return null;
    const renderBlock = (block, index)=>{
        if (!block || !block.__component) return null;
        const type = block.__component;
        // Handle different block types
        switch(type){
            case 'shared.rich-text':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "prose lg:prose-xl max-w-none text-brand-dark/80 prose-headings:font-heading prose-headings:text-brand-dark prose-a:text-brand-primary prose-img:rounded-lg prose-p:leading-relaxed prose-p:mb-6",
                    dangerouslySetInnerHTML: {
                        __html: block.body || ''
                    }
                }, index, false, {
                    fileName: "[project]/components/insights_page/BlockRenderer.tsx",
                    lineNumber: 21,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0));
            case 'shared.quote':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                    className: "border-l-4 border-brand-primary pl-6 py-4 my-8 italic text-xl text-brand-dark/90 bg-brand-bg-main rounded-r-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-2",
                            children: block.body
                        }, void 0, false, {
                            fileName: "[project]/components/insights_page/BlockRenderer.tsx",
                            lineNumber: 34,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        block.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                            className: "text-sm font-semibold text-brand-primary not-italic",
                            children: [
                                "— ",
                                block.title
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/insights_page/BlockRenderer.tsx",
                            lineNumber: 36,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, index, true, {
                    fileName: "[project]/components/insights_page/BlockRenderer.tsx",
                    lineNumber: 30,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0));
            case 'shared.media':
                if (block.file?.data?.attributes?.url) {
                    const mediaUrl = block.file.data.attributes.url.startsWith('http') ? block.file.data.attributes.url : `http://localhost:1337${block.file.data.attributes.url}`;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                        className: "my-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: mediaUrl,
                                alt: block.file.data.attributes.alternativeText || '',
                                className: "w-full h-auto rounded-lg shadow-lg"
                            }, void 0, false, {
                                fileName: "[project]/components/insights_page/BlockRenderer.tsx",
                                lineNumber: 51,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            block.file.data.attributes.caption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                className: "text-center text-sm text-gray-600 mt-2",
                                children: block.file.data.attributes.caption
                            }, void 0, false, {
                                fileName: "[project]/components/insights_page/BlockRenderer.tsx",
                                lineNumber: 57,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, index, true, {
                        fileName: "[project]/components/insights_page/BlockRenderer.tsx",
                        lineNumber: 50,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0));
                }
                return null;
            case 'shared.slider':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "my-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: block.files?.data?.map((file, i)=>{
                            const fileUrl = file.attributes.url.startsWith('http') ? file.attributes.url : `http://localhost:1337${file.attributes.url}`;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: fileUrl,
                                alt: file.attributes.alternativeText || '',
                                className: "w-full h-auto rounded-lg shadow-md"
                            }, i, false, {
                                fileName: "[project]/components/insights_page/BlockRenderer.tsx",
                                lineNumber: 75,
                                columnNumber: 37
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/insights_page/BlockRenderer.tsx",
                        lineNumber: 69,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, index, false, {
                    fileName: "[project]/components/insights_page/BlockRenderer.tsx",
                    lineNumber: 68,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0));
            default:
                // Fallback for unknown block types
                console.warn('Unknown block type:', type, block);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "my-4 p-4 bg-gray-100 rounded",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600",
                        children: [
                            "Unsupported block type: ",
                            type
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/insights_page/BlockRenderer.tsx",
                        lineNumber: 92,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, index, false, {
                    fileName: "[project]/components/insights_page/BlockRenderer.tsx",
                    lineNumber: 91,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "blocks-content",
        children: blocks.map((block, index)=>renderBlock(block, index))
    }, void 0, false, {
        fileName: "[project]/components/insights_page/BlockRenderer.tsx",
        lineNumber: 101,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = BlockRenderer;
const __TURBOPACK__default__export__ = BlockRenderer;
var _c;
__turbopack_context__.k.register(_c, "BlockRenderer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_insights_page_BlockRenderer_tsx_a09e902a._.js.map