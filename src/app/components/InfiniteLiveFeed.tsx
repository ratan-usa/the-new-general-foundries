'use client';
import { allFactoryVideos } from '@/lib/videosData';
import { Play } from 'lucide-react';
import React, { useRef, useState } from 'react';
 
export default function InfiniteLiveFeed() {
  // 2. State now initializes with the first 10 items from your JSON
  const [items, setItems] = useState(allFactoryVideos.slice(0, 10));
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true); // Track if we have more data
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // 3. Updated "Load More" Function (Slices from JSON)
  const loadMoreItems = () => {
    if (loading || !hasMore) return;
    setLoading(true);
    
    // Simulate network delay for smooth UX (optional, can be removed)
    setTimeout(() => {
      const currentLength = items.length;
      const nextBatch = allFactoryVideos.slice(currentLength, currentLength + 10);
      
      if (nextBatch.length === 0) {
        setHasMore(false); // No more videos in JSON
      } else {
        setItems((prev) => [...prev, ...nextBatch]);
      }
      
      setLoading(false);
    }, 500);
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 100) {
        loadMoreItems();
      }
    }
  };

  return (
    <div className="w-full py-10 bg-neutral-900 border-y border-neutral-800">
      
      <div className=" mx-auto px-4 mb-4 flex justify-between items-end">
        <div>
           <h2 className="text-xl font-bold text-white flex items-center gap-2">
             <span className="relative flex h-3 w-3">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-3 w-3 bg-[#cc2221]"></span>
             </span>
             Live Factory Network
           </h2>
           {/* Show real count from JSON */}
           <p className="text-xs text-gray-400">Showing {items.length} of {allFactoryVideos.length} Streams</p>
        </div>
        <div className="text-xs text-gray-500 hidden md:block">Scroll for more →</div>
      </div>

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
            {/* === VIDEO / IMAGE LOGIC === */}
            {/* If you want autoplaying videos in the feed (like TikTok/Reels style), use <video> */}
            {/* Otherwise, use an <img> thumbnail for better performance */}
            
            <video
                muted
                loop
                playsInline
                // Play only on hover to save performance
                onMouseOver={(e) => e.currentTarget.play()}
                onMouseOut={(e) => e.currentTarget.pause()}
                className="absolute inset-0 w-full h-full object-cover"
                poster={item.thumbnail} // Shows image until video loads/plays
                src={item.videoUrl} // READS FROM JSON
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

            {item.isLive && (
                <div className="absolute top-2 right-2 bg-[#cc2221] text-white text-[9px] font-bold px-1.5 py-0.5 rounded z-10">
                LIVE
                </div>
            )}

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
               <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                  <Play className="w-6 h-6 text-white fill-current" />
               </div>
            </div>

            <div className="absolute bottom-3 left-3 right-3 pointer-events-none">
              <h3 className="text-white text-sm font-bold truncate">{item.name}</h3>
              <p className="text-gray-400 text-xs truncate">{item.location}</p>
            </div>
          </div>
        ))}

        {loading && (
          <div className="shrink-0 w-[280px] h-[180px] flex items-center justify-center">
             <div className="w-6 h-6 border-2 border-[#cc2221] border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

      </div>
    </div>
  );
}