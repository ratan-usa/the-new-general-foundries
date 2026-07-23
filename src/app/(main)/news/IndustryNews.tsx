'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { newsArticles } from '@/lib/newsData'; // <--- IMPORT HERE

export default function IndustryNews() {
  return (
    <section className="py-16 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-10 mx-auto">
          
        <h2 className="text-2xl font-bold text-[#D80621] mb-8 border-l-4 border-[#D80621] pl-4">
          Industry News
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newsArticles.map((article) => (
            <Link 
              key={article.id} 
              href={`/news/${article.slug}`}
              className="group flex flex-col h-full border border-[#000000] rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
            > 
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md mb-4 bg-[#ffffff]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col grow"> 
                <div className="text-xs font-semibold text-[#D80621] mb-2">
                  {article.author} • {article.date}
                </div>

                <h3 className="text-lg font-bold text-[#D80621] leading-tight mb-3 group-hover:underline decoration-[#D80621] underline-offset-2">
                  {article.title}
                </h3> 
                <p className="text-sm text-[#D80621] leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
