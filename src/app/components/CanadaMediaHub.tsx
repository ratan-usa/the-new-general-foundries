"use client";

import React, { useState } from "react";
import { Youtube, ExternalLink, Activity, Tv, ChevronRight, Play, Cpu, ShieldAlert } from "lucide-react";

interface MediaAsset {
  id: string;
  title: string;
  source: string;
  badge: string;
  description: string;
  embedUrl: string;
  nativeUrl: string;
}

const VIDEO_RESOURCES: MediaAsset[] = [
  {
    id: "hydraulic-grates",
    title: "Grate Inlets: Hydraulic Interception Lab Test",
    source: "Federal Highway Administration (FHWA)",
    badge: "Hydraulic Performance Model",
    description: "Full fluid dynamic test showcasing parallel, curved, and cross-bar casting matrices under localized street section flows. Highlights frontal interception capability versus bypass side flow rates.",
    embedUrl: "https://www.youtube.com/embed/-TLP3uBB55o?autoplay=1&mute=1&loop=1&playlist=-TLP3uBB55o&start=785",
    nativeUrl: "https://www.youtube.com/watch?v=-TLP3uBB55o&t=785s"
  },
  {
    id: "fdm-foundry",
    title: "Fused Deposition Modeling (FDM) Technology",
    source: "Industrial Grade Additive Manufacturing",
    badge: "Additive Tooling Matrix",
    description: "Layer additive manufacturing breakdown utilizing high-grade thermoplastic matrices to construct precision patterns, low-volume components, and casting mold mockups directly from CAD layers.",
    embedUrl: "https://www.youtube.com/embed/WHO6G67GJbM?autoplay=1&mute=1&loop=1&playlist=WHO6G67GJbM",
    nativeUrl: "https://www.youtube.com/watch?v=WHO6G67GJbM"
  }
];

export default function CanadaMediaHub() {
  const [activeFeed, setActiveFeed] = useState<MediaAsset>(VIDEO_RESOURCES[0]);

  return (
    <section className="bg-white text-[#D80621] py-4 font-sans border-b border-[#cccccc] w-full px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* --- HEADER LOGISTICS SECTION --- */}
        <div className="border-b border-[#cccccc] pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6 w-full">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] font-black text-[#D80621] block mb-3">
              Technical Streaming Terminal
            </span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#D80621] leading-none">
              Simulation <span className="text-[#D80621]">& Lab Feeds</span>
            </h2>
          </div>
          <p className="text-[#cccccc] text-sm font-mono leading-relaxed max-w-sm">
            Live infrastructure benchmarks. Real-time rendering streams visualizing hydraulic grate flow intercept dynamics and production tooling cycles.
          </p>
        </div>

        {/* --- HIGH-INNOVATION WORKSPACE MODULAR INTERFACE --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Timeline Access Directory Selector List (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <span className="text-[10px] font-mono text-[#cccccc] uppercase tracking-wider block pl-1">
              Select Active Diagnostic Pipeline Feed
            </span>
            <div className="space-y-3 flex-grow flex flex-col justify-start">
              {VIDEO_RESOURCES.map((video, index) => {
                const isSelected = activeFeed.id === video.id;
                return (
                  <button
                    key={video.id}
                    onClick={() => setActiveFeed(video)}
                    className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex items-center justify-between group relative overflow-hidden ${
                      isSelected
                        ? "bg-[#D80621] border-[#D80621] text-white shadow-md"
                        : "bg-white border-[#cccccc] text-[#D80621] hover:border-[#D80621]"
                    }`}
                  >
                    <div className="flex items-center gap-4 max-w-[85%] relative z-10">
                      <div className={`p-2.5 rounded-lg border transition-colors ${
                        isSelected 
                          ? "bg-white/10 border-white/20 text-white" 
                          : "bg-[#ffffff] border-[#cccccc] text-[#D80621] group-hover:bg-[#D80621]/5"
                      }`}>
                        <Tv className="w-5 h-5" />
                      </div>
                      <div className="space-y-0.5 truncate">
                        <span className={`text-[9px] font-mono uppercase tracking-widest block ${
                          isSelected ? "text-white/70" : "text-[#cccccc]"
                        }`}>
                          STREAM NODE 0{index + 1} // {video.badge}
                        </span>
                        <h3 className="font-bold text-base tracking-tight truncate uppercase">
                          {video.title}
                        </h3>
                      </div>
                    </div>

                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform duration-300 relative z-10 ${
                      isSelected ? "translate-x-1 text-white" : "text-[#cccccc] group-hover:text-[#D80621] group-hover:translate-x-1"
                    }`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Large Scale Simulation Broadcast Viewport (7 Columns) */}
          <div className="lg:col-span-7 bg-white border border-[#cccccc] p-4 lg:p-6 rounded-xl shadow-sm flex flex-col justify-between min-h-[540px]">
            <div className="space-y-6">
              
              {/* Main Embed Display Window Box */}
              <div className="relative w-full aspect-video bg-[#ffffff] border border-[#cccccc] overflow-hidden rounded-lg group shadow-inner">
                <iframe
                  key={activeFeed.id}
                  src={activeFeed.embedUrl}
                  title={activeFeed.title}
                  allow="autoplay; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full object-cover border-none"
                />

                {/* Technical Raster Overlay Layer */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%)] bg-[length:100%_4px] pointer-events-none opacity-30" />
                
                <div className="absolute bottom-3 left-3 bg-[#ffffff] backdrop-blur border border-[#cccccc] px-3 py-1 rounded text-[9px] font-mono tracking-widest text-emerald-400 uppercase flex items-center gap-1.5 pointer-events-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Stream Output
                </div>
              </div>

              {/* Dynamic Information Specifications Abstract */}
              <div className="space-y-4">
                <div className="border-b border-[#cccccc] pb-3 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono text-[#cccccc] uppercase tracking-wider block">
                      Authority: {activeFeed.source}
                    </span>
                    <h4 className="text-xl font-black text-[#D80621] uppercase tracking-tight">
                      {activeFeed.title}
                    </h4>
                  </div>
                  <a
                    href={activeFeed.nativeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-xs font-bold tracking-wider uppercase border border-[#D80621] text-[#D80621] px-4 py-2 rounded-lg bg-transparent hover:bg-[#D80621] hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
                  >
                    Launch <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <p className="text-xs md:text-sm text-[#cccccc] font-mono leading-relaxed bg-[#ffffff] p-4 rounded-lg border border-[#cccccc]">
                  {activeFeed.description}
                </p>
              </div>
            </div>

            {/* Simulated Live Stream Feed Telemetry Data Row */}
            <div className="grid grid-cols-3 gap-4 border-t border-[#cccccc] pt-5 mt-6 font-mono text-xs">
              <div className="space-y-1">
                <span className="text-[9px] uppercase tracking-wider text-[#cccccc] block">Signal Source</span>
                <span className="font-bold text-[#D80621] flex items-center gap-1.5 uppercase">
                  <Youtube className="w-3.5 h-3.5 text-[#D80621]" /> HD Network
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[9px] uppercase tracking-wider text-[#cccccc] block">Protocol Integrity</span>
                <span className="font-bold text-[#D80621] flex items-center gap-1.5 uppercase">
                  <Cpu className="w-3.5 h-3.5 text-[#D80621]" /> Matrix Sync
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[9px] uppercase tracking-wider text-[#cccccc] block">Telemetry State</span>
                <span className="font-bold text-emerald-600 animate-pulse flex items-center gap-1">
                  <Activity className="w-3.5 h-3.5" /> 100% Active
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}