'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils'; // Assuming you have shadcn utils, or remove this and use template literals

// --- DATA MODEL ---
interface AccordionItem {
    id: string;
    title: string;
    category: string;
    description: string;
    image: string;
    color: string; // Background color for the active card
}

const items: AccordionItem[] = [
    {
        id: "1",
        category: "Heavy Casting",
        title: "Mega Cast™ Iron",
        description: "High-durability grey and ductile iron castings engineered for extreme industrial environments.",
        image: "/assets/image12.jpg", // Foundry/Sparks
        color: "bg-[#cc2221]" // Red for Tech/Highlight
    },
    {
        id: "2",
        category: "Precision Forging",
        title: "Mega Forge X",
        description: "Custom drop and press forging solutions providing superior structural integrity for automotive parts.",
        image: "/assets/image13.jpg",
        color: "bg-[#cc2221]" // Red for Tech/Highlight
    },
    {
        id: "3",
        category: "CNC Machining",
        title: "Precision Pro",
        description: "State-of-the-art 5-axis CNC machining ensuring micron-level tolerance for aerospace components.",
        image: "/assets/image14.jpeg",
        color: "bg-[#cc2221]" // Red for Tech/Highlight
    },
    {
        id: "4",
        category: "Precast Systems",
        title: "Mega Wall Panels",
        description: "Modular precast concrete walls designed for rapid construction and thermal efficiency.",
        image: "/assets/image15.jpg",
        color: "bg-[#cc2221]" // Red for Tech/Highlight
    },
    {
        id: "5",
        category: "Industrial IoT",
        title: "Smart Foundry Connect",
        description: "Real-time sensor networks for monitoring furnace temperatures and production line efficiency.",
        image: "/assets/image16.jpg",
        color: "bg-[#cc2221]" // Red for Tech/Highlight
    },
    {
        id: "6",
        category: "Supply Chain",
        title: "Mega Logistics Fleet",
        description: "Integrated freight and warehousing solutions ensuring just-in-time delivery for raw materials.",
        image: "/assets/image17.jpg",
        color: "bg-[#cc2221]" // Red for Tech/Highlight
    },
    {
        id: "7",
        category: "Engineering",
        title: "CAD/CAM Services",
        description: "Full-cycle product design, from 3D prototyping to mold flow analysis and optimization.",
        image: "/assets/image18.jpeg",
        color: "bg-[#cc2221]" // Red for Tech/Highlight
    },
    {
        id: "8",
        category: "Green Tech",
        title: "Eco-Alloy Recycling",
        description: "Sustainable metal recycling processes that reduce carbon footprint without compromising quality.",
        image: "/assets/image19.jpeg",
        color: "bg-[#cc2221]" // Red for Tech/Highlight
    }
];

export default function VerticalAccordion() {
    // Default to the middle one open, or null if you want them all closed initially
    const [activeId, setActiveId] = useState<string | null>("5");

    return (
        <div className="w-full flex justify-center items-center py-10 bg-slate-50">
            {/* Container Height determines the height of the accordion */}
            <div className="flex w-full max-w-7xl h-[600px] overflow-hidden shadow-2xl rounded-xl">

                {items.map((item) => {
                    const isActive = activeId === item.id;

                    return (
                        <div
                            key={item.id}
                            onMouseEnter={() => setActiveId(item.id)}
                            className={cn(
                                "relative flex-1 cursor-pointer overflow-hidden transition-all duration-500 ease-in-out border-r border-white/20 last:border-r-0",
                                // Active state: grow flex, change background
                                isActive ? `flex-[4] ${item.color}` : "flex-[1] bg-[#00338D] hover:bg-[#002266]"
                            )}
                        >
                            {/* --- CONTENT WHEN EXPANDED --- */}
                            <div
                                className={cn(
                                    "absolute inset-0 flex flex-col justify-between transition-opacity duration-300 delay-100",
                                    isActive ? "opacity-100 visible" : "opacity-0 invisible"
                                )}
                            >
                                {/* Top Image */}
                                <div className="relative h-[45%] w-full overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Text Content */}
                                <div className="flex flex-col items-center text-center px-6 py-4 text-white h-full justify-center">
                                    <h3 className="text-xl font-bold mb-3">{item.category}</h3>
                                    <p className="text-sm leading-relaxed max-w-md">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Red Footer Bar */}
                                <div className="w-full bg-red-600 py-3 text-center text-white font-bold uppercase tracking-wide text-sm mt-auto">
                                    {item.category}
                                </div>
                            </div>

                            {/* --- VERTICAL TEXT (When Collapsed) --- */}
                            <div
                                className={cn(
                                    "absolute inset-0 flex items-center justify-center transition-opacity duration-300",
                                    isActive ? "opacity-0 invisible" : "opacity-100 visible"
                                )}
                            >
                                <h3
                                    className="text-white whitespace-nowrap text-lg font-medium tracking-wide"
                                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                                >
                                    {item.category}
                                </h3>
                            </div>
                        </div>
                    );
                })}

                {/* Right Label (From your image "Precast Engineering" floating on right) */}
                {/* This is stylistic optional based on your screenshot */}
                <div className="absolute right-10 top-1/2 -translate-y-1/2 pointer-events-none hidden xl:block">
                    <div className="text-right text-slate-800">
                    </div>
                </div>

            </div>
        </div>
    );
}