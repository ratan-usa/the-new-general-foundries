"use client";

import React from "react";
import Image from "next/image";
import { Grip, Accessibility, ShieldAlert, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MegaTactilePlates() {
  return (
    <section className="bg-white text-[#0a0a0a] py-16 font-sans border-b border-gray-100 w-full">
      {/* Absolute strict fluid full width padding bounds */}
      <div className="w-full px-4 sm:px-6 lg:px-10 space-y-16">

        {/* --- SECTION HEADER --- */}
        <div className="border-b border-gray-200 pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6 w-full">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] font-black text-[#cc2221] block mb-3">
              Infrastructure Accessibility Index
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#0a0a0a] leading-none">
              Tactile Plates <br />
              <span className="text-[#cc2221]">Detectable Warnings</span>
            </h2>
          </div>
          <p className="text-gray-500 text-base font-light leading-relaxed max-w-xl">
            ADA-compliant infrastructure castings built to outlast the concrete surrounding them. Engineered with high-fidelity truncated domes to secure busy transit paths.
          </p>
        </div>

        {/* --- MAIN CORE ARCHITECTURE DISPLAY --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">

          {/* LEFT COLUMN: CRITICAL PERFORMANCE FEATURES (Expanded to 8 Columns Wide) */}
          <div className="lg:col-span-8 space-y-8 w-full">

            {/* Feature 1 */}
            <div className="flex items-start gap-4 p-5 bg-gray-50 border border-gray-100 rounded-none group hover:border-[#cc2221] hover:bg-white transition-all duration-300">
              <div className="w-10 h-10 bg-white border border-gray-200 flex items-center justify-center text-[#cc2221] shrink-0">
                <Accessibility className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-black uppercase tracking-wide text-[#0a0a0a] mb-1">
                  ADA Truncated Dome Compliance
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed font-light">
                  Features clean, dimensionally strict raised domes matching municipal accessibility laws. Delivers immediate orientation feedback for white canes and pedestrian foot travel.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4 p-5 bg-gray-50 border border-gray-100 rounded-none group hover:border-[#cc2221] hover:bg-white transition-all duration-300">
              <div className="w-10 h-10 bg-white border border-gray-200 flex items-center justify-center text-[#cc2221] shrink-0">
                <Grip className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-black uppercase tracking-wide text-[#0a0a0a] mb-1">
                  Slip-Resistant Micro Texture Ground
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed font-light">
                  The primary spacing floor matrix is cast using raw structural texturing elements, preventing traction slippage during severe freezing rain or oil wash overruns.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4 p-5 bg-gray-50 border border-gray-100 rounded-none group hover:border-[#cc2221] hover:bg-white transition-all duration-300">
              <div className="w-10 h-10 bg-white border border-gray-200 flex items-center justify-center text-[#cc2221] shrink-0">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-black uppercase tracking-wide text-[#0a0a0a] mb-1">
                  Monolithic Wet-Set Lug Anchors
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed font-light">
                  Heavy bottom iron anchors drop directly into wet municipal concrete pours, creating a unified substrate bond that entirely stops mechanical displacement.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: CAD SPEC FRAMEWORK (Reduced to 4 Columns Wide for a slightly smaller layout display) */}
          <div className="lg:col-span-4 w-full flex flex-col gap-6 items-center lg:items-end">

            <div className="relative w-full aspect-square bg-gray-50 border border-gray-200 rounded-none overflow-hidden p-4 flex items-center justify-center group shadow-inner hover:border-[#cc2221] transition-colors duration-300">

              {/* Static Asset Visual - Visibility fixed by clearing transparency filters */}
              <div className="relative w-full h-full opacity-100">
                <Image
                  // src="/assets/image5.jpeg" 
                  src="/assets/MEGA/Detectable%20Warning%20Plates.jpeg"

                  alt="Cast Iron Tactile Plate Mechanical Profile"
                  fill
                  className="object-contain p-2 grayscale group-hover:grayscale-0 transition-all duration-500 opacity-100"
                  priority
                />
              </div>

              {/* Grid Crosshair Indicators */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-gray-300" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-gray-300" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-gray-300" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-gray-300" />

              <div className="absolute bottom-4 left-4 right-4 bg-[#0a0a0a]/95 text-[9px] font-mono uppercase font-bold tracking-wider text-zinc-400 text-center py-2 z-20">
                Component Blueprint Configuration Preview
              </div>
            </div>

            {/* Specification Configuration Output Trigger */}
            <div className="w-full">
              <Button className="w-full bg-[#cc2221] hover:bg-[#b01e1d] text-white font-black uppercase tracking-widest text-xs h-12 rounded-none transition-all duration-200 flex items-center justify-center gap-2">
                Download ADA Blueprint Matrices <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>

          </div>

        </div>

        {/* --- BASE PERFORMANCE SPEC INDEX --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-gray-200 w-full bg-white text-center md:text-left">
          <div className="p-4 bg-gray-50 border border-gray-100 rounded-none">
            <span className="text-[10px] font-mono uppercase text-gray-400 block mb-1">Material Core</span>
            <span className="text-sm font-black text-[#0a0a0a] uppercase tracking-wide">Class 35B Gray Iron</span>
          </div>
          <div className="p-4 bg-gray-50 border border-gray-100 rounded-none">
            <span className="text-[10px] font-mono uppercase text-gray-400 block mb-1">Load Limits</span>
            <span className="text-sm font-black text-[#0a0a0a] uppercase tracking-wide">AASHTO H-20 Wheel Load</span>
          </div>
          <div className="p-4 bg-gray-50 border border-gray-100 rounded-none">
            <span className="text-[10px] font-mono uppercase text-gray-400 block mb-1">Coating Finish</span>
            <span className="text-sm font-black text-[#0a0a0a] uppercase tracking-wide">Natural Patina or Safety Red</span>
          </div>
        </div>

      </div>
    </section>
  );
}