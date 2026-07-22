"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Grip, Accessibility, ShieldAlert, ArrowUpRight, Activity, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const PERFORMANCE_FEATURES = [
  {
    id: "ada-domes",
    title: "ADA Truncated Dome Compliance",
    shortTitle: "ADA Domes",
    icon: Accessibility,
    description: "Features clean, dimensionally strict raised domes matching municipal accessibility laws. Delivers immediate orientation feedback for white canes and pedestrian foot travel.",
    metric: "Strict Form Factor Compliance",
    details: "Domes are mathematically aligned across the iron substrate to prevent cane-tip snagging while maximizing audio-tactile signature resonance."
  },
  {
    id: "slip-texture",
    title: "Slip-Resistant Micro Texture Ground",
    shortTitle: "Traction Floor",
    icon: Grip,
    description: "The primary spacing floor matrix is cast using raw structural texturing elements, preventing traction slippage during severe freezing rain or oil wash overruns.",
    metric: "Coefficient of Friction > 0.80",
    details: "Micro-grooves integrated into the gray iron casting draw liquid away from the dome peaks, ensuring safety vectors in intense weather."
  },
  {
    id: "lug-anchors",
    title: "Monolithic Wet-Set Lug Anchors",
    shortTitle: "Lug Anchors",
    icon: ShieldAlert,
    description: "Heavy bottom iron anchors drop directly into wet municipal concrete pours, creating a unified substrate bond that entirely stops mechanical displacement.",
    metric: "Anti-Displacement Rigidity",
    details: "Features heavy-gauge perpendicular locking tabs extending 3 inches into the concrete base framework, rendering thermal shifts harmless."
  }
];

export default function canadaTactilePlates() {
  const [activeFeature, setActiveFeature] = useState(PERFORMANCE_FEATURES[0]);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 py-24 bg-white text-[#D80621] font-sans overflow-hidden border-b border-[#cccccc]">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* --- SECTION HEADER --- */}
        <div className="border-b border-[#cccccc] pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6 w-full">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#D80621] block">
              Infrastructure Accessibility Index
            </span>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase text-[#D80621]">
              TACTILE PLATES &mdash; DETECTABLE WARNINGS
            </h2>
          </div>
          <p className="text-sm text-[#cccccc] font-mono leading-relaxed max-w-sm">
            ADA-compliant infrastructure castings built to outlast the concrete surrounding them. Engineered with high-fidelity truncated domes to secure busy transit paths.
          </p>
        </div>

        {/* --- MAIN CORE ARCHITECTURE DISPLAY --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch w-full">

          {/* LEFT COLUMN: CRITICAL PERFORMANCE FEATURES TIMELINE (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <span className="text-[10px] font-mono text-[#cccccc] uppercase tracking-wider block pl-1">
              Select Performance Feature Vector
            </span>
            <div className="space-y-3 flex-grow flex flex-col justify-start">
              {PERFORMANCE_FEATURES.map((feature, index) => {
                const IconComponent = feature.icon;
                const isSelected = activeFeature.id === feature.id;

                return (
                  <button
                    key={feature.id}
                    onClick={() => setActiveFeature(feature)}
                    className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex items-center justify-between group relative overflow-hidden ${isSelected
                        ? "bg-[#D80621] border-[#D80621] text-white shadow-md"
                        : "bg-white border-[#cccccc] text-[#D80621] hover:border-[#D80621]"
                      }`}
                  >
                    <div className="flex items-center gap-4 max-w-[85%] relative z-10">
                      <div className={`p-2.5 rounded-lg border transition-colors ${isSelected
                          ? "bg-white/10 border-white/20 text-white"
                          : "bg-[#ffffff] border-[#cccccc] text-[#D80621] group-hover:bg-[#D80621]/5"
                        }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="space-y-0.5 truncate">
                        <span className={`text-[9px] font-mono uppercase tracking-widest block ${isSelected ? "text-white/70" : "text-[#cccccc]"
                          }`}>
                          Feature Module 0{index + 1}
                        </span>
                        <h3 className="font-bold text-base tracking-tight truncate uppercase">
                          {feature.shortTitle}
                        </h3>
                      </div>
                    </div>

                    <ArrowUpRight className={`w-4 h-4 shrink-0 transition-transform duration-300 relative z-10 ${isSelected ? "translate-x-0.5 -translate-y-0.5 text-white" : "text-[#cccccc] group-hover:text-[#D80621] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      }`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: CAD VIEWPORT METADATA MONITOR (7 Columns) */}
          <div className="lg:col-span-7 bg-white border border-[#cccccc] p-4 lg:p-6 rounded-xl shadow-sm flex flex-col justify-between min-h-[520px]">
            <div className="space-y-6">

              {/* Image Viewport Container Box */}
              <div className="relative rounded-lg border border-[#cccccc] bg-[#ffffff] overflow-hidden h-72 w-full group flex items-center justify-center p-4">
                <div className="relative w-full h-full">
                  <Image
                    src="/assets/MEGA/detectable Warning Plates.jpeg"
                    alt="Cast Iron Tactile Plate Mechanical Profile"
                    fill
                    className="object-contain p-2 grayscale group-hover:grayscale-0 transition-all duration-700"
                    priority
                  />
                </div>

                {/* Grid Crosshair Blueprint Elements */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-[#cccccc]" />
                <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-[#cccccc]" />
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-[#cccccc]" />
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-[#cccccc]" />

                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur border border-[#cccccc] px-3 py-1 rounded text-[9px] font-mono tracking-widest text-[#D80621] uppercase flex items-center gap-1.5 font-bold">
                  <Activity className="w-3.5 h-3.5 animate-pulse" />
                  CAD Blueprint Matrix
                </div>
              </div>

              {/* Dynamic Reading Diagnostics Box */}
              <div className="space-y-4">
                <div className="border-b border-[#cccccc] pb-3 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono text-[#cccccc] uppercase tracking-wider block">
                      Active Telemetry Component Clause
                    </span>
                    <h4 className="text-xl font-black text-[#D80621] uppercase tracking-tight">
                      {activeFeature.title}
                    </h4>
                  </div>
                  <span className="shrink-0 text-[10px] font-mono font-bold border border-emerald-600 text-emerald-600 px-3 py-1 rounded-md bg-emerald-50 max-self-start">
                    {activeFeature.metric}
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature.id}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="text-xs md:text-sm text-[#cccccc] font-mono leading-relaxed bg-[#ffffff] p-4 rounded-lg border border-[#cccccc] space-y-2"
                  >
                    <p className="text-[#D80621] font-medium">{activeFeature.description}</p>
                    <p className="text-[#cccccc] border-t border-[#cccccc] pt-2 text-[11px] flex items-start gap-1.5">
                      <Info className="w-3.5 h-3.5 text-[#D80621] shrink-0 mt-0.5" />
                      <span>{activeFeature.details}</span>
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* CTA Trigger Integration */}
            <div className="mt-6">
              <Button className="w-full bg-[#D80621] hover:bg-[#b01e1d] text-white font-black uppercase tracking-widest text-xs h-12 rounded-xl transition-all duration-200 flex items-center justify-center gap-2">
                Download ADA Blueprint Matrices <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>

          </div>
        </div>

        {/* --- BASE PERFORMANCE SPEC INDEX --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t border-[#cccccc] w-full text-left font-mono text-xs">
          <div className="p-4 bg-[#ffffff] border border-[#cccccc] rounded-xl flex flex-col justify-center gap-0.5">
            <span className="text-[9px] uppercase tracking-wider text-[#cccccc] block">Material Core</span>
            <span className="font-bold text-[#D80621] uppercase tracking-wide">Class 35B Gray Iron</span>
          </div>
          <div className="p-4 bg-[#ffffff] border border-[#cccccc] rounded-xl flex flex-col justify-center gap-0.5">
            <span className="text-[9px] uppercase tracking-wider text-[#cccccc] block">Load Limits</span>
            <span className="font-bold text-[#D80621] uppercase tracking-wide">AASHTO H-20 Wheel Load</span>
          </div>
          <div className="p-4 bg-[#ffffff] border border-[#cccccc] rounded-xl flex flex-col justify-center gap-0.5">
            <span className="text-[9px] uppercase tracking-wider text-[#cccccc] block">Coating Finish</span>
            <span className="font-bold text-[#D80621] uppercase tracking-wide">Natural Patina or Safety Red</span>
          </div>
        </div>

      </div>
    </section>
  );
}