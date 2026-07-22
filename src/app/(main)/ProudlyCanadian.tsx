"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Compass, Heart, Award, Sparkles } from "lucide-react";

export default function ProudlyCanadian() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 py-20 bg-[#D80621] text-[#ffffff] font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Card Container */}
        <div className="relative rounded-2xl bg-[#D80621] border border-[#ffffff] p-8 lg:p-12 text-[#ffffff] overflow-hidden">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* LEFT COLUMN: Canadian Pride Messaging (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#D80621] border border-[#cccccc] px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest text-[#ffffff] uppercase">
                <Heart className="w-3.5 h-3.5 fill-[#ffffff]" />
                <span>Coast to Coast Quality</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-tight text-[#ffffff]">
                  PROUDLY CANADIAN <br />
                  <span className="text-[#cccccc]">BUILT TO ENDURE</span>
                </h2>
                <p className="text-sm sm:text-base text-[#cccccc] font-medium leading-relaxed max-w-xl pt-2">
                  Forged for harsh winters, heavy municipal loads, and extreme thermal shifts. Every casting carrying the Canada Foundries mark is engineered locally to support Canada’s growing infrastructure.
                </p>
              </div>

              {/* National Values Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#cccccc] font-mono text-xs">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-[#ffffff]">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="font-bold uppercase">OPSD & CSA</span>
                  </div>
                  <p className="text-[11px] text-[#cccccc] font-medium">Exceeds national municipal standards.</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-[#ffffff]">
                    <Compass className="w-4 h-4" />
                    <span className="font-bold uppercase">13 Regions</span>
                  </div>
                  <p className="text-[11px] text-[#cccccc] font-medium">Serving all provinces & territories.</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-[#ffffff]">
                    <Award className="w-4 h-4" />
                    <span className="font-bold uppercase">100% Recyclable</span>
                  </div>
                  <p className="text-[11px] text-[#cccccc] font-medium">Sustainable local iron casting.</p>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Display of canada.png with Ripple Frame (5 Cols) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end min-h-[300px]">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative w-full max-w-md aspect-[4/3] rounded-xl overflow-hidden border border-[#ffffff] bg-[#ffffff] p-3 group"
              >
                {/* Flag Image Viewport */}
                <div className="relative w-full h-full rounded-lg overflow-hidden border border-[#cccccc] bg-[#cccccc]">
                  <Image
                    src="/assets/canada.png"
                    alt="Canadian Flag - Canada Foundries Heritage"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Floating Authenticity Tag */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#ffffff] border border-[#cccccc] p-3 rounded-lg flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#D80621]" />
                    <span className="font-bold text-[#D80621] tracking-wider uppercase">Authentic Canadian Grade</span>
                  </div>
                  <span className="text-[10px] text-[#cccccc] font-bold">EST. CANADA</span>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-[#D80621]" />
                <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-[#D80621]" />
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-[#D80621]" />
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-[#D80621]" />
              </motion.div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}