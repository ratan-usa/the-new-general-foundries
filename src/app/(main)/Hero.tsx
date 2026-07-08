"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button'; // Adjust path if needed
import localFont from 'next/font/local'
import { motion, AnimatePresence } from "framer-motion";

interface HeroProps {
  videoSrc?: string;
}
const apricotsFont = localFont({
  src: '../../lib/fonts/Horizon.otf',
  display: 'swap',
})

// --- Dynamic Typing Logic ---
// const words = ["ENGINEERS.", "AGENCIES.", "CUSTOMERS.", "VENDORS.", "TEAM.", "ENTRY."];
const words = ["Foundries.", "Forge Shops", "Fabricators."]; 
export const Hero = ({
  videoSrc = "/video/282244_small.mp4"
}: HeroProps) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1500);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <header className="relative w-full overflow-hidden flex items-center justify-center min-h-[500px] md:min-h-[650px] bg-[#cc2221]">

      {/* 1. HERO VIDEO BACKGROUND - 100% OPACITY */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-100"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Clean Light Blue Vivid Wash */}
      <div className="absolute inset-0 bg-[#cc2221]/10 z-0 pointer-events-none" />

      {/* 2. SPLIT LAYOUT CONTAINER */}
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-10 my-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

          {/* LEFT SIDE CONTENT */}
          <div className="lg:col-span-6 text-left space-y-3">
 

            {/* Main Title Tagline (More compact text sizes) */}
            <h1 className="text-white font-black uppercase tracking-tighter leading-none">
              <span className="block text-2xl sm:text-3xl md:text-4xl xl:text-5xl italic font-black text-white shadow-[0_4px_20px_rgba(204,34,33,0.3)]">
                The World's Advanced Consortium of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#cc2221]">
                  {/* WATERWORKS <br />AUTHORITY */}

                </span>
                <span className="relative min-w-[320px] text-left text-white inline-flex items-center">
                  <span style={{ WebkitTextStroke: "2px #ffffff", color: "transparent" }}>
                    {words[index].substring(0, subIndex)}
                  </span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-2 h-14 md:h-20 bg-[#cc2221] ml-2"
                  />
                </span>
                {/* <span className="text-[#cc2221]">...</span> */}

              </span>
            </h1>

            {/* Sub-Bar Text Frame */}
            <div className="inline-block text-[10px] sm:text-[12px] text-white tracking-[0.08em] font-black bg-[#cc2221] border border-[#cc2221] shadow-[0_4px_20px_rgba(204,34,33,0.3)] px-3.5 py-2 w-full max-w-sm">
              MEGA FOUNDRIES | Global Industrial Hub
            </div>

          </div>

          {/* CENTER GAP (Keeps center clear for the swan imagery) */}
          <div className="hidden lg:block lg:col-span-2 h-10"></div>

          {/* RIGHT SIDE CONTENT */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center text-center lg:text-right space-y-4">

            {/* Secondary Statement (Scaled Down) */}
            <div className="w-full">
              <span className="block text-lg sm:text-xl md:text-2xl font-black tracking-tight uppercase italic text-white drop-shadow-[0_4px_10px_rgba(0,74,173,0.95)]">
                Under One Universe
              </span>
            </div>

            {/* Actions / Buttons (Standard height sizing) */}
            <div className="flex flex-col gap-2.5 w-full max-w-[260px]">
              <Button className="w-full bg-[#cc2221] hover:bg-[#cc2221] text-white font-bold uppercase tracking-wider h-11 text-xs rounded-none border-b-2 border-[#cc2221] shadow-md transition-all duration-150">
                Explore Capabilities
              </Button>

              <Button variant="outline" asChild className="w-full border border-white text-white bg-[#cc2221]/80 hover:bg-white hover:text-[#cc2221] font-bold uppercase tracking-wider h-11 text-xs rounded-none shadow-md transition-colors duration-200">
                <Link href="/sellerHomepage">Succeed With Us</Link>
              </Button>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Pure Corporate Identity Accent Bar */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#cc2221] via-[#000000] to-[#cc2221]"></div>
    </header>
  );
};