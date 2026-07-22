"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Activity, Cpu, ShieldCheck, Box } from "lucide-react";
import Link from "next/link";
import { categories } from "@/lib/materialsData";

export const CanadaProducts = () => {
  const [activeSpec, setActiveSpec] = useState(categories[0] || null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Force play loop initialization on active video tracks
  useEffect(() => {
    if (videoRef.current && activeSpec && !activeSpec.image) {
      videoRef.current.load();
      videoRef.current.play().catch((err) => console.log("Video flow optimization:", err));
    }
  }, [activeSpec]);

  if (!activeSpec) return null;

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 py-24 bg-white text-[#D80621] font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Typography Branding Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#cccccc] pb-8 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <div className="flex items-center gap-3 text-[11px] font-bold tracking-[0.3em] uppercase text-[#D80621]">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>Advanced Production Nodes</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase text-[#D80621]">
              NEW INNOVATIONS
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm text-[#666666] max-w-sm leading-relaxed font-mono"
          >
            Precision-engineered casting matrices and high-tensile material guidelines configured for extreme loading parameters.
          </motion.p>
        </div>

        {/* Combined Matrix Split Panel Viewport */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Navigation Timeline Directory List (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <span className="text-[10px] font-mono text-[#666666] uppercase tracking-wider block pl-1">
              Select Innovation Matrix Framework
            </span>
            <div className="space-y-3 flex-grow flex flex-col justify-start">
              {categories.map((item, index) => {
                const IconComponent = item.icon || Box;
                const isSelected = activeSpec.slug === item.slug;
                
                return (
                  <motion.button
                    key={item.slug}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setActiveSpec(item)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
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
                          : "bg-white border-[#cccccc] text-[#D80621] group-hover:bg-[#D80621]/5"
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="space-y-0.5 truncate">
                        <span className={`text-[9px] font-mono uppercase tracking-widest block ${
                          isSelected ? "text-white/70" : "text-[#666666]"
                        }`}>
                          Node Index 0{index + 1}
                        </span>
                        <h3 className="font-bold text-base tracking-tight truncate">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <ArrowRight className={`w-4 h-4 shrink-0 transition-transform duration-300 relative z-10 ${
                      isSelected ? "translate-x-1 text-white" : "text-[#cccccc] group-hover:text-[#D80621] group-hover:translate-x-1"
                    }`} />
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Right Live Visual Telemetry Monitor Panel (7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-[#cccccc] p-4 lg:p-6 rounded-xl shadow-sm flex flex-col justify-between min-h-[520px]">
            <div className="space-y-6">
              
              {/* Active Media Preview Window Box Container */}
              <div className="relative rounded-lg border border-[#cccccc] bg-[#ffffff] overflow-hidden h-72 w-full group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSpec.slug}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full relative"
                  >
                    {activeSpec.image ? (
                      /* High Resolution Asset Module */
                      <img
                        src={activeSpec.image}
                        alt={activeSpec.title}
                        className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 transition-all duration-700"
                      />
                    ) : (
                      /* Telemetry Looping Video Asset Module */
                      <video
                        ref={videoRef}
                        src={activeSpec.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-85 mix-blend-screen"
                      />
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Industrial Grid & Scanline Blueprint Graphic Overlay Masks */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px] pointer-events-none opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

                <div className="absolute bottom-3 left-3 bg-[#ffffff] backdrop-blur border border-[#cccccc] px-3 py-1 rounded text-[9px] font-mono tracking-widest text-emerald-400 uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Video Render Matrix
                </div>
              </div>

              {/* Dynamic Information Block Readings */}
              <div className="space-y-4">
                <div className="border-b border-[#cccccc] pb-3 flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-mono text-[#666666] uppercase tracking-wider block">
                      Active Parameter Diagnostics
                    </span>
                    <h4 className="text-2xl font-black text-[#D80621] uppercase tracking-tight mt-0.5">
                      {activeSpec.title}
                    </h4>
                  </div>
                  <Link
                    href={`/categories/${activeSpec.slug}`}
                    className="shrink-0 text-xs font-bold tracking-wider uppercase border border-[#D80621] text-[#D80621] px-4 py-2 rounded-lg bg-transparent hover:bg-[#D80621] hover:text-white transition-all duration-300"
                  >
                    Analyze Specifications
                  </Link>
                </div>

                <p className="text-sm text-[#cccccc] font-mono leading-relaxed bg-[#ffffff] p-4 rounded-lg border border-[#cccccc]">
                  {activeSpec.description}
                </p>
              </div>
            </div>

            {/* Custom Technical Status Telemetry Metrics Box */}
            <div className="grid grid-cols-3 gap-4 border-t border-[#cccccc] pt-5 mt-6 font-mono text-xs">
              <div className="space-y-1">
                <span className="text-[9px] uppercase tracking-wider text-[#666666] block">Alloy Target</span>
                <span className="font-bold text-[#D80621] flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[#D80621]" /> High Tensile
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[9px] uppercase tracking-wider text-[#666666] block">Testing Status</span>
                <span className="font-bold text-[#D80621] flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D80621]" /> ASTM Certified
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[9px] uppercase tracking-wider text-[#666666] block">Density Vector</span>
                <span className="font-bold text-emerald-600 animate-pulse">98.42% Operational</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};