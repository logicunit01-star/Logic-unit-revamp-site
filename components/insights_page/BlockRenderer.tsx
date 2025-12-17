import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';

interface Block {
    __component: string;
    id: number;
    block1?: string;
    [key: string]: any;
}

interface BlockRendererProps {
    blocks: Block[];
}

const BlockRenderer: React.FC<BlockRendererProps> = ({ blocks }) => {
    if (!blocks || blocks.length === 0) return null;

    return (
        <div className="space-y-8">

            {blocks.map((block) => {
                switch (block.__component) {
                    case 'shared.rich-text':
                        // Fallback check for content if block1 is missing but body/text exists
                        const content = block.block1 || block.body || block.text || block.content || '';

                        return (
                            <div key={block.id} className="prose prose-lg max-w-none">


                                <ReactMarkdown
                                    remarkPlugins={[remarkGfm]}
                                    components={{
                                        // Custom heading styles
                                        h1: ({ node, ...props }) => (
                                            <h1 className="h2 mt-12 mb-6" {...props} />
                                        ),
                                        h2: ({ node, ...props }) => (
                                            <h2 className="h2 mt-10 mb-5" {...props} />
                                        ),
                                        h3: ({ node, ...props }) => (
                                            <h3 className="h3 mt-8 mb-4 " {...props} />
                                        ),
                                        // Custom paragraph styles
                                        p: ({ node, ...props }) => (
                                            <p className="text-body mb-6" {...props} />
                                        ),
                                        // Custom link styles
                                        a: ({ node, ...props }) => (
                                            <a
                                                className="link-std text-brand-primary hover:text-brand-dark border-brand-primary/30 hover:border-brand-dark"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                {...props}
                                            />
                                        ),
                                        // Custom image rendering with Next.js Image
                                        img: ({ node, ...props }) => {
                                            const src = props.src || '';
                                            const alt = props.alt || 'Blog image';

                                            return (
                                                <div className="my-10 rounded-xl overflow-hidden shadow-lg border border-gray-100">
                                                    <img
                                                        src={src}
                                                        alt={alt}
                                                        className="w-full h-auto"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            );
                                        },
                                        // Custom list styles
                                        ul: ({ node, ...props }) => (
                                            <ul className="list-disc list-outside ml-6 space-y-2 mb-6 text-body marker:text-brand-primary" {...props} />
                                        ),
                                        ol: ({ node, ...props }) => (
                                            <ol className="list-decimal list-outside ml-6 space-y-2 mb-6 text-body marker:text-brand-primary font-bold" {...props} />
                                        ),
                                        // Custom blockquote styles
                                        blockquote: ({ node, ...props }) => (
                                            <blockquote
                                                className="border-l-4 border-brand-primary pl-6 pr-4 py-2 italic my-8 text-xl text-brand-dark bg-gray-50/50 rounded-r-lg"
                                                {...props}
                                            />
                                        ),
                                        // Custom code block styles
                                        code: ({ node, className, children, ...props }: any) => {
                                            const match = /language-(\w+)/.exec(className || '');
                                            const isInline = !match;

                                            if (isInline) {
                                                return (
                                                    <code
                                                        className="bg-gray-100 rounded px-1.5 py-0.5 text-sm font-mono text-brand-primary font-semibold"
                                                        {...props}
                                                    >
                                                        {children}
                                                    </code>
                                                );
                                            }
                                            return (
                                                <code
                                                    className="block bg-gray-900 text-gray-100 rounded-xl p-6 overflow-x-auto text-sm font-mono my-8 shadow-inner"
                                                    {...props}
                                                >
                                                    {children}
                                                </code>
                                            );
                                        },
                                    }}
                                >
                                    {content}
                                </ReactMarkdown>
                            </div>
                        );

                    // Add other block types here as needed
                    case 'shared.quote':
                        return (
                            <blockquote
                                key={block.id}
                                className="border-l-4 border-brand-primary pl-6 py-6 my-10 text-2xl font-serif italic text-brand-dark bg-brand-bg-main"
                            >
                                <span className="text-brand-primary text-4xl mr-2">“</span>
                                {block.quote}
                            </blockquote>
                        );

                    case 'shared.media':
                        return (
                            <div key={block.id} className="my-8">
                                {block.file?.url && (
                                    <img
                                        src={block.file.url}
                                        alt={block.file.alternativeText || 'Media'}
                                        className="w-full h-auto rounded-lg"
                                    />
                                )}
                            </div>
                        );

                    default:
                        console.warn(`Unknown block component: ${block.__component}`);
                        return null;
                }
            })}
        </div >
    );
};

export default BlockRenderer;