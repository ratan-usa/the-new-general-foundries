'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { 
  Play, 
  Pause, 
  Rotate3d, 
  ChevronRight, 
  Layers
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const PRODUCT_VIDEOS = [
  {
    id: 1,
    title: "Pro Series Round Risers 360° View",
    description: "Full rotation showcase highlighting our high-precision ductile iron height adjustment ring mechanism.",
    duration: "0:45",
    type: "360_ROTATION",
    src: "video/paving_riser/paving riser 1.5213.mp4", // Restored valid video path to prevent .glb breaks
    thumbnail: "/assets/PAVING-RISERS/paving riser 1.5200.png" 
  },
  {
    id: 2,
    title: "Elite Manhole Systems",
    description: "Technical exploded breakdown showing the multi-ton load capacity and interlocking frame security.",
    duration: "1:10",
    type: "EXPLODED_VIEW",
    src: "video/paving_riser/paving riser 1.5213.mp4", 
    thumbnail: "/assets/PAVING-RISERS/paving riser 1.5201.png" 
  },
  {
    id: 3,
    title: "Infrastructure Valve Boxes",
    description: "Step-by-step industrial 3D animation showing a standard heavy-traffic utility utility valve box casing setup.",
    duration: "2:00",
    type: "ANIMATION", 
    src: "video/paving_riser/paving riser 1.5213.mp4", 
    thumbnail: "/assets/PAVING-RISERS/paving riser 1.5203.png" 
  },
  {
    id: 4,
    title: "Custom Foundry Components",
    description: "Finite Element Analysis (FEA) testing simulation illustrating severe shear stress distribution on custom cast matrices.",
    duration: "0:30",
    type: "SIMULATION",
    src: "video/Custom Foundry Components.mp4", 
    thumbnail: "/assets/PAVING-RISERS/paving riser 1.5204.png" 
  }
];

export default function Product3DShowcase() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const activeVideo = PRODUCT_VIDEOS[activeVideoIndex];

  // Logic: Handle automatic transitions and infinite looping
  const handleVideoEnd = () => {
    // Cycles to the next index, resetting cleanly to 0 after the last track ends
    setActiveVideoIndex((prev) => (prev + 1) % PRODUCT_VIDEOS.length);
  };

  // Effect: Guarantees continuous autoplay configurations on active state alterations
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch((err) => {
        console.log("Autoplay context wait:", err);
      });
    }
  }, [activeVideoIndex]);

  return (
    <section className="bg-zinc-950 text-white py-20 border-t border-zinc-900 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6 w-full">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Rotate3d className="text-[#cc2221] w-5 h-5 animate-spin-slow" />
              <span className="text-[#cc2221] font-bold uppercase tracking-widest text-sm">
                Interactive Showroom
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              3D Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Visualization</span>
            </h2>
          </div>

          <Button 
            disabled
            className="gap-2 font-black uppercase tracking-widest px-8 h-12 bg-[#cc2221] text-white animate-pulse opacity-100 cursor-default"
          >
            <Play className="w-4 h-4 fill-current" />
            Looping Active
          </Button>
        </div>

        {/* --- MAIN PLAYER AREA --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
          
          {/* LEFT: Continuous Main Screen Display */}
          <div className="lg:col-span-2 w-full">
            <div className="relative aspect-video bg-black rounded-none border border-zinc-800 shadow-2xl overflow-hidden group">
              
              <video
                ref={videoRef}
                key={activeVideo.src} 
                className="w-full h-full object-contain bg-black"
                controls
                autoPlay
                muted // Muting guarantees the system passes absolute web browser autoplay blocks
                playsInline
                onEnded={handleVideoEnd}
              >
                <source src={activeVideo.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Minimal Top Layout Metadata overlay overlaying active performance logs */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-[#0a0a0a]/80 backdrop-blur-sm border border-zinc-800 px-3 py-1.5">
                <span className="w-2 h-2 bg-[#cc2221] rounded-full animate-ping shrink-0" />
                <span className="text-[10px] font-mono tracking-widest text-zinc-300 uppercase font-bold">
                  Autoloop Sequence Item 0{activeVideoIndex + 1}
                </span>
              </div>
            </div>

            {/* Permanent Bottom Technical Specs Drawer */}
            <div className="mt-4 p-6 bg-zinc-900/40 border border-zinc-900 rounded-none space-y-2">
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="text-[#cc2221] border-[#cc2221] bg-[#cc2221]/10 rounded-none uppercase text-[10px] tracking-wider font-black">
                  {activeVideo.type.replace('_', ' ')}
                </Badge>
                <span className="text-xs text-gray-400 font-mono tracking-wide">{activeVideo.duration} Log Length</span>
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">{activeVideo.title}</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed max-w-4xl">{activeVideo.description}</p>
            </div>
          </div>

          {/* RIGHT: Active Playlist Index Trackers */}
          <div className="lg:col-span-1 bg-zinc-900/20 rounded-none border border-zinc-900 p-4 h-full flex flex-col justify-between min-h-[400px]">
            <div className="w-full">
              <h4 className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-4 flex items-center gap-2 border-b border-zinc-900 pb-3">
                <Layers className="w-4 h-4" /> 
                Showroom Playlist Lineup
              </h4>
              
              <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar max-h-[420px]">
                {PRODUCT_VIDEOS.map((video, idx) => {
                  const isCurrent = activeVideoIndex === idx;
                  return (
                    <div 
                      key={video.id}
                      onClick={() => setActiveVideoIndex(idx)}
                      className={cn(
                        "flex gap-4 p-3 rounded-none cursor-pointer transition-all border group items-center",
                        isCurrent 
                          ? "bg-[#cc2221]/10 border-[#cc2221]" 
                          : "bg-black border-zinc-900 hover:border-zinc-700"
                      )}
                    >
                      {/* Thumbnail Placeholder Window */}
                      <div className="relative w-24 h-16 bg-zinc-900 rounded-none overflow-hidden shrink-0 flex items-center justify-center border border-zinc-800">
                        <Image 
                          src={video.thumbnail} 
                          alt="thumb" 
                          fill 
                          className="object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                        />
                        {isCurrent && (
                          <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10">
                            <div className="w-2.5 h-2.5 bg-[#cc2221] rounded-full animate-ping" />
                          </div>
                        )}
                      </div>

                      {/* Info Text Element */}
                      <div className="flex flex-col justify-center">
                        <h5 className={cn("font-bold text-xs uppercase tracking-wide leading-tight mb-1 transition-colors", isCurrent ? "text-[#cc2221]" : "text-white group-hover:text-[#cc2221]")}>
                          {video.title}
                        </h5>
                        <p className="text-[11px] text-gray-500 line-clamp-1">{video.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Technical Assets Outbound Request */}
            <div className="mt-6 pt-4 border-t border-zinc-900 text-left w-full">
               <Button variant="outline" className="w-full text-xs text-white bg-transparent border-zinc-800 hover:bg-white hover:text-black font-black uppercase tracking-wider h-11 rounded-none transition-colors">
                 Request CAD / BIM Files <ChevronRight className="w-3 h-3 ml-2" />
               </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}