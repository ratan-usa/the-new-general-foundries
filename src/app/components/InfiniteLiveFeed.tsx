'use client';
import { Play } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

// 1. Mock Data Generator (Simulating 50,000 factories)
const generateFactories = (startId: number, count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: startId + i,
    name: `Mega Factory Unit ${startId + i}`,
    location: i % 2 === 0 ? "Texas, USA" : "Gujarat, India",
    thumbnail: `/assets/factory${(i % 5) + 1}.jpg`, // Cycles through dummy images
    isLive: true,
  }));
};

export default function InfiniteLiveFeed() {
  const [items, setItems] = useState(generateFactories(1, 10)); // Start with 10
  const [loading, setLoading] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // 2. The "Load More" Function
  const loadMoreItems = () => {
    if (loading) return;
    setLoading(true);
    
    // Simulate API delay (0.5s)
    setTimeout(() => {
      const newItems = generateFactories(items.length + 1, 10); // Fetch next 10
      setItems((prev) => [...prev, ...newItems]);
      setLoading(false);
    }, 500);
  };

  // 3. Detect Scroll End (Infinite Scroll Logic)
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      // If user is near the right edge (within 100px), load more
      if (scrollLeft + clientWidth >= scrollWidth - 100) {
        loadMoreItems();
      }
    }
  };

  return (
    <div className="w-full py-10 bg-neutral-900 border-y border-neutral-800">
      
      <div className="container mx-auto px-4 mb-4 flex justify-between items-end">
        <div>
           <h2 className="text-xl font-bold text-white flex items-center gap-2">
             <span className="relative flex h-3 w-3">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-3 w-3 bg-[#cc2221]"></span>
             </span>
             Live Factory Network
           </h2>
           <p className="text-xs text-gray-400">Showing {items.length} of 50,000+ Streams</p>
        </div>
        {/* Visual Cue for Scrolling */}
        <div className="text-xs text-gray-500 hidden md:block">Scroll for more →</div>
      </div>

      {/* 4. Horizontal Scroll Container */}
      <div 
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto gap-4 px-4 pb-4 no-scrollbar scroll-smooth"
      >
        {items.map((item) => (
          <div 
            key={item.id} 
            className="
              relative shrink-0 w-[280px] h-[180px] 
              bg-neutral-800 rounded-lg overflow-hidden 
              border border-neutral-700 hover:border-[#cc2221] 
              group cursor-pointer transition-all
            "
          >
            {/* Lazy Loaded Image (Next.js handles lazy loading automatically) */}
            {/* For real backend images, use valid src */}
             <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center text-gray-600 text-xs">
                Factory Img Placeholder
             </div>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            {/* Live Badge */}
            <div className="absolute top-2 right-2 bg-[#cc2221] text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
              LIVE
            </div>

            {/* Play Button (Appears on Hover) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
               <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                  <Play className="w-6 h-6 text-white fill-current" />
               </div>
            </div>

            {/* Text Content */}
            <div className="absolute bottom-3 left-3 right-3">
              <h3 className="text-white text-sm font-bold truncate">{item.name}</h3>
              <p className="text-gray-400 text-xs truncate">{item.location}</p>
            </div>
          </div>
        ))}

        {/* Loading Skeleton (Shows while fetching more) */}
        {loading && (
          <div className="shrink-0 w-[280px] h-[180px] flex items-center justify-center">
             <div className="w-6 h-6 border-2 border-[#cc2221] border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

      </div>
    </div>
  );
}