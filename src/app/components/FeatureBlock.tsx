// src/components/FeatureBlockItem.tsx

import React from 'react';
import Image from 'next/image';
import { FeatureBlockContent } from '../(main)/our-values/content';

interface FeatureBlockItemProps {
    data: FeatureBlockContent;
    /** If true, the image will be on the left and the text on the right. */
    imageOnLeft?: boolean;
    className?: string;
}

export function FeatureBlockItem({ data, imageOnLeft = false, className }: FeatureBlockItemProps) {

    // Determine the order for desktop view based on the imageOnLeft prop
    const imageOrderClass = imageOnLeft ? 'md:order-1' : 'md:order-2';
    const textOrderClass = imageOnLeft ? 'md:order-2' : 'md:order-1';

    return (
        // Outer section wrapper with responsive padding and max width
        <section className={`w-full  px-4 sm:px-6 lg:px-10 py-3 ${className}`}>

            {/* Grid Container: Stacks columns on mobile, uses a 2-column grid on medium screens and up */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mx-auto'>

                {/* 1. Text Content Column */}
                <div className={`order-2 ${textOrderClass}`}>

                    {/* Main Heading and Subtitle */}
                    <div className='mb-10'>
                        <h2 className='text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight'>
                            {data.headline}
                        </h2>
                        <p className='mt-4 text-base text-gray-600'>
                            {data.tagline}
                        </p>
                    </div>

                    {/* Features List */}
                    <div className='space-y-8'>
                        {data.features.map((item, index) => (
                            <div key={index} className='flex gap-4'>

                                {/* Icon Container */}
                                <div className='shrink-0 pt-1'>
                                    <item.icon className='h-6 w-6 text-gray-900' />
                                </div>

                                {/* Text Container */}
                                <div>
                                    <h3 className='text-lg font-bold text-gray-900'>
                                        {item.title}
                                    </h3>
                                    <p className='mt-1 text-sm text-gray-600'>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2. Image Column */}
                <div className={`order-1 ${imageOrderClass}`}>
                    <div className="relative w-full aspect-[4/3] rounded-lg shadow-2xl overflow-hidden">
                        <Image
                            src={data.imgSrc}
                            alt={data.headline}
                            fill
                            style={{ objectFit: 'contain' }}
                            className='rounded-lg'
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}