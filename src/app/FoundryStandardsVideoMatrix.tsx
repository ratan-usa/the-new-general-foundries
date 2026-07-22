"use client";

import React, { useState, useRef } from "react";
import { Play, Pause, RotateCcw, ShieldCheck, Cpu, FileText, Activity } from "lucide-react";

const videoStandards = [
  {
    id: "opsd-spec",
    title: "OPSD 2001 Concrete Cast Verification",
    category: "Ontario Standards",
    src: "/video/opsd/400.021.518.mp4",
    description: "Looping structural layout analysis of sewer manhole base molds adhering to ASTM C478 and public works dimensions.",
    icon: FileText,
  },
  {
    id: "astm-test",
    title: "ASTM & AISI Molten Flow Stress-Test",
    category: "Material Guidelines",
    src: "/video/opsd/401.060.375.mp4",
    description: "Automated macro telemetry feed validating raw alloy chemistry structures and thermal stress tolerance limits.",
    icon: ShieldCheck,
  },
  {
    id: "nadca-die",
    title: "NADCA High-Pressure Die Casting Core",
    category: "Production Guidelines",
    src: "/video/opsd/401.081.377 V.mp4",
    description: "High-precision geometric dimensioning verification loop showcasing continuous automated tooling cycles.",
    icon: Cpu,
  }
];

export default function FoundryStandardsVideoMatrix() {
  const [activeSpec, setActiveSpec] = useState(videoStandards[0]);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const restartLoop = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handleSpecChange = (spec: typeof videoStandards[0]) => {
    setActiveSpec(spec);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 py-10 bg-[#D80621] text-white selection:bg-white selection:text-[#D80621]">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Minimal Typography Heading Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/30 pb-6 gap-4">
          <div>
            <div className="flex items-center gap-3 text-[11px] font-bold tracking-[0.3em] uppercase text-white">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>Production Loop Telemetry Feed</span>
            </div>
            <h1 className="text-4xl font-black tracking-tighter uppercase mt-2 text-white">
              ONTARIO STANDARDS VIDEO MATRIX
            </h1>
          </div>
          <p className="text-xs text-white/80 max-w-sm leading-relaxed font-mono">
            Real-time looping monitoring framework mapping video reference logs to OPSD, ASTM, and NADCA factory floor metrics.
          </p>
        </div>

        {/* Combined Matrix Viewport Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white border border-neutral-200 rounded-xl overflow-hidden p-3 lg:p-6 shadow-sm">
          
          {/* Looping Production Feed Viewport (Left Side) */}
          <div className="lg:col-span-8 relative rounded-lg border border-neutral-200 bg-black overflow-hidden group aspect-video lg:h-[500px] lg:aspect-auto">
            <video
              ref={videoRef}
              key={activeSpec.id}
              src={activeSpec.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-80 mix-blend-screen"
            />
 
            {/* Custom Control Bar UI Overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/70 backdrop-blur-md border border-neutral-800 px-4 py-3 rounded-lg opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="p-2 bg-neutral-900 rounded border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 transition-colors"
                >
                  {isPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white" />}
                </button>
                <button
                  onClick={restartLoop}
                  className="p-2 bg-neutral-900 rounded border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 transition-colors"
                  title="Restart Loop"
                >
                  <RotateCcw className="w-4 h-4 text-white" />
                </button>
              </div>

              <div className="text-[10px] font-mono text-neutral-400 tracking-wider">
                FEED STATUS // <span className="text-emerald-400 animate-pulse font-bold">LOOPING CONTINUOUS</span>
              </div>
            </div>

            <div className="absolute top-4 left-4 bg-black/80 backdrop-blur border border-neutral-800 px-3 py-1.5 rounded text-[10px] font-mono tracking-widest uppercase text-white font-bold">
              SYS_LOG // {activeSpec.category.replace(" ", "_").toUpperCase()}
            </div>
          </div>

          {/* Directory Panel & Specifications Readings (Right Side) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6 bg-white border border-neutral-200 p-6 rounded-lg shadow-sm">
            
            <div className="space-y-6">
              <div className="border-b border-neutral-200 pb-4">
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-1">
                  Active Reference Feed
                </span>
                <h2 className="text-2xl font-black tracking-tight text-[#D80621] uppercase leading-tight">
                  {activeSpec.title}
                </h2>
              </div>

              <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 space-y-2">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
                  Material Compliance Abstract
                </span>
                <p className="text-xs text-neutral-700 font-mono leading-relaxed">
                  {activeSpec.description}
                </p>
              </div>
            </div>

            {/* Quick-Select Reference Feed Matrix */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block">
                Select Compliance Stream Feed
              </span>
              <div className="space-y-2">
                {videoStandards.map((spec) => {
                  const IconComponent = spec.icon;
                  const isSelected = activeSpec.id === spec.id;
                  return (
                    <button
                      key={spec.id}
                      onClick={() => handleSpecChange(spec)}
                      className={`w-full text-left p-3 rounded border font-mono transition-all flex items-center gap-3 ${
                        isSelected
                          ? "bg-[#D80621] text-white border-[#D80621] font-bold shadow-sm"
                          : "bg-white text-black border-neutral-200 hover:border-[#D80621]"
                      }`}
                    >
                      <IconComponent className={`w-4 h-4 shrink-0 ${isSelected ? "text-white" : "text-[#D80621]"}`} />
                      <div className="truncate">
                        <span className={`text-[9px] uppercase tracking-wider block ${isSelected ? "text-white/80" : "text-neutral-400"}`}>
                          {spec.category}
                        </span>
                        <span className="text-xs block truncate tracking-tight">{spec.title}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}