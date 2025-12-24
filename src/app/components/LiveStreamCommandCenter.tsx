'use client';
import { Play } from 'lucide-react';
import React from 'react';
import InfiniteLiveFeed from './InfiniteLiveFeed'; // Your existing center feed

// --- HELPER COMPONENT: Side Video Player ---
const SideStreamPlayer = ({ title, src, color }: { title: string, src: string, color: string }) => (
  <div className="w-[200px] h-[calc(100vh-100px)] sticky top-24 flex flex-col gap-4">
    
    {/* Video Container 1 */}
    <div className={`relative w-full h-1/2 bg-black rounded-xl overflow-hidden border-2 border-${color}-500 shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
       <div className="absolute top-2 left-2 z-10 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-white">
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span> LIVE
       </div>
       {/* Use iframe or video tag here. Using placeholder for demo */}
       <div className="w-full h-full bg-neutral-800 flex flex-col items-center justify-center text-gray-500 text-xs">
          <Play className="w-8 h-8 text-white/20 mb-2" />
          {title} Cam 1
       </div>
       {/* Gradient Overlay */}
       <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 to-transparent"></div>
       <div className="absolute bottom-3 left-3 text-white text-xs font-bold">
          {title} - Unit A
       </div>
    </div>

    {/* Video Container 2 (Stacked below) */}
    <div className={`relative w-full h-1/2 bg-black rounded-xl overflow-hidden border border-neutral-800 opacity-80 hover:opacity-100 transition-opacity`}>
       <div className="w-full h-full bg-neutral-800 flex flex-col items-center justify-center text-gray-500 text-xs">
          <Play className="w-8 h-8 text-white/20 mb-2" />
          {title} Cam 2
       </div>
        <div className="absolute bottom-3 left-3 text-white text-xs font-bold">
          {title} - Unit B
       </div>
    </div>

  </div>
);

export default function LiveStreamCommandCenter() {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      
      {/* MAIN LAYOUT GRID */}
      <div className="container mx-auto px-2 md:px-6 py-6 flex justify-between gap-4 md:gap-8 relative">

        {/* === LEFT COLUMN: USA LIVE STREAMS === */}
        {/* Hidden on small mobile, visible on lg screens */}
        <aside className="hidden lg:block shrink-0">
          <SideStreamPlayer title="USA Ops" src="" color="blue" />
        </aside>

        {/* === CENTER COLUMN: MEGA FOUNDRIES FEED === */}
        <main className="flex-1 min-w-0 flex flex-col items-center">
            
            {/* Header / Stats */}
            <div className="w-full text-center mb-8 border-b border-white/10 pb-6">
                <h1 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-2 uppercase tracking-tight">
                    Mega Global Command
                </h1>
                <div className="flex justify-center gap-6 text-xs text-gray-400 font-mono mt-4">
                    <span className="flex items-center gap-1"><span className="text-[#cc2221]">●</span> 54,201 FACTORIES ONLINE</span>
                    <span className="flex items-center gap-1"><span className="text-green-500">●</span> 98.4% UPTIME</span>
                </div>
            </div>

            {/* THE INFINITE SCROLL FEED (Your main content) */}
            <div className="w-full max-w-4xl">
               <InfiniteLiveFeed />
            </div>

            {/* Extra Content to enable scrolling */}
            <div className="w-full max-w-4xl mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="h-40 bg-neutral-900/50 border border-neutral-800 rounded-lg p-4 flex items-center justify-center text-gray-600">
                    Analytics Graph Placeholder
                </div>
                <div className="h-40 bg-neutral-900/50 border border-neutral-800 rounded-lg p-4 flex items-center justify-center text-gray-600">
                    Production Output Placeholder
                </div>
                 <div className="h-40 bg-neutral-900/50 border border-neutral-800 rounded-lg p-4 flex items-center justify-center text-gray-600">
                    Energy Consumption
                </div>
                 <div className="h-40 bg-neutral-900/50 border border-neutral-800 rounded-lg p-4 flex items-center justify-center text-gray-600">
                    Logistics Map
                </div>
            </div>

        </main>

        {/* === RIGHT COLUMN: ASIA LIVE STREAMS === */}
        {/* Hidden on small mobile, visible on lg screens */}
        <aside className="hidden lg:block shrink-0">
          <SideStreamPlayer title="Asia Ops" src="" color="red" />
        </aside>

      </div>
    </div>
  );
}