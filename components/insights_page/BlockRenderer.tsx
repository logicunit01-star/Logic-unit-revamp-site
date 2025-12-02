'use client';

import React from 'react';

interface BlockRendererProps {
    blocks: any[];
}

const BlockRenderer: React.FC<BlockRendererProps> = ({ blocks }) => {
    if (!blocks || blocks.length === 0) return null;

    const renderBlock = (block: any, index: number) => {
        if (!block || !block.__component) return null;

        const type = block.__component;

        // Handle different block types
        switch (type) {
            case 'shared.rich-text':
                return (
                    <div
                        key={index}
                        className="prose lg:prose-xl max-w-none text-brand-dark/80 prose-headings:font-heading prose-headings:text-brand-dark prose-a:text-brand-primary prose-img:rounded-lg prose-p:leading-relaxed prose-p:mb-6"
                        dangerouslySetInnerHTML={{ __html: block.body || '' }}
                    />
                );

            case 'shared.quote':
                return (
                    <blockquote
                        key={index}
                        className="border-l-4 border-brand-primary pl-6 py-4 my-8 italic text-xl text-brand-dark/90 bg-brand-bg-main rounded-r-lg"
                    >
                        <p className="mb-2">{block.body}</p>
                        {block.title && (
                            <footer className="text-sm font-semibold text-brand-primary not-italic">
                                — {block.title}
                            </footer>
                        )}
                    </blockquote>
                );

            case 'shared.media':
                if (block.file?.data?.attributes?.url) {
                    const mediaUrl = block.file.data.attributes.url.startsWith('http')
                        ? block.file.data.attributes.url
                        : `http://localhost:1337${block.file.data.attributes.url}`;

                    return (
                        <figure key={index} className="my-8">
                            <img
                                src={mediaUrl}
                                alt={block.file.data.attributes.alternativeText || ''}
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                            {block.file.data.attributes.caption && (
                                <figcaption className="text-center text-sm text-gray-600 mt-2">
                                    {block.file.data.attributes.caption}
                                </figcaption>
                            )}
                        </figure>
                    );
                }
                return null;

            case 'shared.slider':
                return (
                    <div key={index} className="my-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {block.files?.data?.map((file: any, i: number) => {
                                const fileUrl = file.attributes.url.startsWith('http')
                                    ? file.attributes.url
                                    : `http://localhost:1337${file.attributes.url}`;
                                return (
                                    <img
                                        key={i}
                                        src={fileUrl}
                                        alt={file.attributes.alternativeText || ''}
                                        className="w-full h-auto rounded-lg shadow-md"
                                    />
                                );
                            })}
                        </div>
                    </div>
                );

            default:
                // Fallback for unknown block types
                console.warn('Unknown block type:', type, block);
                return (
                    <div key={index} className="my-4 p-4 bg-gray-100 rounded">
                        <p className="text-sm text-gray-600">
                            Unsupported block type: {type}
                        </p>
                    </div>
                );
        }
    };

    return (
        <div className="blocks-content">
            {blocks.map((block, index) => renderBlock(block, index))}
        </div>
    );
};

export default BlockRenderer;
