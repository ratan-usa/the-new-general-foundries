'use client';
import InfiniteLiveFeed from './InfiniteLiveFeed'; // Import your feed component
import React from 'react';

const AdPlaceholder = ({ side }: { side: 'Left' | 'Right' }) => (
  <div className="w-[160px] h-[600px] bg-[#ffffff] border border-[#000000] rounded-lg flex flex-col items-center justify-center text-[#D80621] text-xs gap-2 sticky top-24">
    <span className="font-bold tracking-widest text-[#D80621]">ADVERTISEMENT</span>
    <div className="w-full h-full bg-[#ffffff] flex items-center justify-center">
      {/* Replace this with your Google AdSense / Vimeo Ad Code */}
      {side} Sidebar Ad
    </div>
  </div>
);

export default function LiveStreamLayout() {
  return (
    <div className="min-h-screen -[#D80621] text-white">
      
      {/* MAIN CONTAINER */}
      <div className="container mx-auto px-4 py-8 flex justify-center gap-6">

        {/* === LEFT AD COLUMN (Hidden on Mobile/Tablet) === */}
        {/* 'hidden xl:block' means it ONLY loads on very large screens */}
        <aside className="hidden xl:block w-[160px] shrink-0">
          <AdPlaceholder side="Left" />
        </aside>

        {/* === CENTER CONTENT (Expands to fill space) === */}
        <main className="flex-1 max-w-5xl min-w-0">
            {/* Header */}
            <div className="mb-8 border-b border-[#000000] pb-6">
                <h1 className="text-3xl font-bold text-white mb-2">Global Factory Live Stream</h1>
                <p className="text-[#D80621]">Watch real-time operations from our verified partners.</p>
            </div>

            {/* YOUR INFINITE FEED COMPONENT */}
            <InfiniteLiveFeed />
            
            {/* Example of more content below to demonstrate scrolling */}
            <div className="mt-12 space-y-4">
               <div className="h-64 bg-[#ffffff] rounded-xl border border-[#000000] p-6">
                  <h3 className="font-bold text-lg mb-2">Factory Analytics</h3>
                  <div className="h-40 bg-[#ffffff] rounded animate-pulse"></div>
               </div>
               <div className="h-64 bg-[#ffffff] rounded-xl border border-[#000000] p-6">
                  <h3 className="font-bold text-lg mb-2">Production Output</h3>
                  <div className="h-40 bg-[#ffffff] rounded animate-pulse"></div>
               </div>
            </div>
        </main>

        {/* === RIGHT AD COLUMN (Hidden on Mobile/Tablet) === */}
        <aside className="hidden xl:block w-[160px] shrink-0">
          <AdPlaceholder side="Right" />
        </aside>

      </div>
    </div>
  );
}
