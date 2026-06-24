"use client";

import React, { useState } from "react";

interface CastingProduct {
  id: number;
  title: string;
  image: string;
}

const CAROUSEL_PRODUCTS: CastingProduct[] = [
  { id: 1, title: "Heavy Duty Manhole Cover", image: "/assets/image1.jpeg" },
  { id: 2, title: "Ductile Iron Gully Grating", image: "/assets/image2.jpeg" },
  { id: 3, title: "Heavy Traffic Airport Grating", image: "/assets/image3.jpeg" },
  { id: 4, title: "Industrial Oil & Grease Separator", image: "/assets/image4.jpg" },
  { id: 5, title: "Electrical Junction Box Cover", image: "/assets/image5.jpeg" },
  { id: 6, title: "Multi-Flanged Slurry Valve Body", image: "/assets/image6.jpg" },
  { id: 7, title: "Surface Linear Drainage Casting", image: "/assets/image7.jpeg" },
  { id: 8, title: "Telecom Inspection Chamber Hatch", image: "/assets/image8.jpg" },
];

export default function CastingCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const totalItems = CAROUSEL_PRODUCTS.length;
  
  const angleStep = 360 / totalItems;
  const radius = 320; 

  return (
    <section className="bg-[#0a0a0a] py-20 overflow-hidden flex flex-col items-center justify-center font-sans">
      
      {/* Header Section */}
      <div className="text-center mb-16 px-4">
        <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#cc2221] block mb-3">
          Standard Castings
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
          New Product Innovations
        </h2>
      </div>

      {/* 3D Viewport Container */}
      <div 
        className="w-full max-w-5xl h-[380px] flex items-center justify-center relative"
        style={{ perspective: "1200px" }}
      >
        {/* Central Axis Core */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="w-[240px] h-[180px] relative transition-transform duration-700"
          style={{
            transformStyle: "preserve-3d",
            animation: isPaused 
              ? "none" 
              : "megaSpin 25s infinite linear",
            transform: "rotateX(-6deg)" 
          }}
        >
          {CAROUSEL_PRODUCTS.map((product, index) => {
            const currentAngle = angleStep * index;
            return (
              <div
                key={product.id}
                className="absolute top-0 left-0 w-full h-full bg-[#141414] border border-zinc-900 rounded-sm p-4 shadow-[0_15px_35px_rgba(0,0,0,0.9)] flex flex-col items-center justify-between backface-hidden group hover:border-[#cc2221] transition-all duration-300"
                style={{
                  transform: `rotateY(${currentAngle}deg) translateZ(${radius}px)`,
                  WebkitTransform: `rotateY(${currentAngle}deg) translateZ(${radius}px)`,
                }}
              >
                {/* Casting Image Display Area */}
                <div className="w-full h-[75%] relative flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain filter drop-shadow-[0_12px_16px_rgba(0,0,0,0.9)] transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/240x140/0a0a0a/fff?text=Mega+Casting";
                    }}
                  />
                </div>

                {/* Subtitle Label */}
                <div className="w-full text-center pt-2 border-t border-zinc-900/50">
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider truncate group-hover:text-[#cc2221] transition-colors duration-200">
                    {product.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Global CSS for Infinite Rotation */}
      <style jsx global>{`
        @keyframes megaSpin {
          from {
            transform: rotateX(-6deg) rotateY(0deg);
          }
          to {
            transform: rotateX(-6deg) rotateY(360deg);
          }
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}