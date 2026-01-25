'use client';

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";

// --- IMPORTS ---
import HeroSection from "../components/hero";
import BusinessSolutions from "../components/busineesSolution";
import CosmoBlog from "../components/cosmoBlog";
import ChatBlog from "../components/chatBlog";
import ProductCarousel from "../components/productCarousel";
import Taglines from "../components/tagline/page";
import SourcingRequest from "../components/SourcingRequest";
import EngagementAnalytics from "./sellerHomepage/EngagementAnalytics";
import IndustryNews from "./news/IndustryNews";
import FloatingQuoteBtn from "../components/FloatingQuoteBtn";
import HotProductVideos from "./category/HotProductVideos";
import { newInnovationData } from "@/lib/newsData";
import { MegaStories } from "../components/mega-stories";
import { VerticalAccordion } from "../components/VerticalAccordion";
import { DesignCapabilities } from "../components/design-capabilities";
import AssociationsCarousel from "../components/productCarousel2";
import LiveStreamCommandCenter from "../components/LiveStreamCommandCenter";
import InfiniteLiveFeed from "../components/InfiniteLiveFeed";
import FactoryStories from '../private/dashboard/FactoryStories';

// --- THE NEW STORIES COMPONENT --- 

export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const [isMounted, setIsMounted] = useState(false);

    // --- CHECK LOGIN STATUS ---
    useEffect(() => {
        setIsMounted(true);
        const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;

        if (token) {
            setIsLoggedIn(true);
            const name = localStorage.getItem('userName') || 'Member';
            setUserName(name);
        }
    }, []);

    if (!isMounted) return null;

    return (
        <div className="">
            
            {/* ========================================= */}
            {/* 1. HERO VIDEO SECTION (Visible to ALL)    */}
            {/* ========================================= */}
            <div className="relative w-full overflow-hidden flex items-center justify-center min-h-[500px] md:min-h-[700px]">
                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src="/video/282244_small.mp4" type="video/mp4" />
                </video>

                {/* Red Overlay */}
                <div className="absolute inset-0 bg-[#cc2221]/10 md:bg-[#cc2221]/30 z-0 pointer-events-none" />

                {/* Hero Content */}
                <div className="relative z-10 container mx-auto px-4 py-12 md:py-24 text-center">
                    <div className="inline-block md:inline w-full md:w-auto bg-white/60 md:bg-transparent backdrop-blur-md md:backdrop-blur-none rounded-xl p-6 md:p-0 shadow-lg md:shadow-none border border-white/50 md:border-none">
                        <p className="text-[8px] md:text-[16px] font-bold uppercase tracking-widest text-[#cc2221] mb-2 md:mb-4 bg-white/80 md:bg-white/90 px-3 py-2 rounded-full inline-block shadow-sm">
                            MEGA FOUNDRIES | the best industry services
                        </p>

                        <h1 className="text-gray-800 md:text-white font-bold leading-tight tracking-tight mt-2">
                            <span className="block text-[18px] md:text-[40px] whitespace-normal md:whitespace-nowrap">
                                The World's Largest and Advanced
                            </span>
                            <span className="block text-[18px] md:text-[40px]">
                                Consortium of
                            </span>
                            <span className="block mt-2 text-[10px] py-2 md:text-[28px] text-[#cc2221] uppercase tracking-wide font-black drop-shadow-sm bg-white/50 md:bg-transparent rounded px-2">
                                Foundries, Forge Shops & Fabricators
                            </span>
                            <span className="block mt-2 text-[28px] md:text-[70px] font-light text-gray-800 md:text-white">
                                Under One Universe
                            </span>
                        </h1>

                        <p className="text-[14px] md:text-[22px] text-[#cc2221] font-medium italic mt-4 mb-6">
                            "Think Fast and Succeed Faster"
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
                            <Button className="w-full sm:w-auto bg-[#cc2221] hover:bg-red-700 text-white rounded-md font-bold shadow-lg md:px-10 md:py-7 md:text-xl">
                                Explore Capabilities
                            </Button>

                            <Button variant="outline" className="w-full sm:w-auto text-[#cc2221] border-2 border-[#cc2221] bg-white/80 hover:bg-white backdrop-blur-sm md:px-10 md:py-7 md:text-xl">
                                <Link href={'/sellerHomepage'}>Succeed With Us</Link>
                            </Button>
                        </div>

                        <p className="text-[11px] md:text-[18px] text-gray-800 md:text-white mt-6 font-semibold uppercase tracking-wide">
                            Engage with dedicated experts
                        </p>
                    </div>
                </div>
            </div>

            {/* ========================================= */}
            {/* 2. FACTORY STORIES (LOGGED IN ONLY)       */}
            {/* ========================================= */}
            {isLoggedIn && (
                <div className="bg-slate-50 border-b border-slate-200 py-8">
                    <div className=" mx-auto px-4">
 
                        
                        {/* THE STORIES COMPONENT */}
                    </div>
                </div>
            )}

            {/* ========================================= */}
            {/* 3. REST OF HOME PAGE (Visible to ALL)     */}
            <FactoryStories />
            {/* ========================================= */}
            <LiveStreamCommandCenter />
            
            <HeroSection />
            
            {/* You can keep or remove the old MegaStories depending on your preference */}
            <MegaStories /> 
            
            <BusinessSolutions />
            <CosmoBlog />
            <ChatBlog />
            <ProductCarousel />
            {/* <Taglines /> */}
            <DesignCapabilities />
            <SourcingRequest />
            <EngagementAnalytics />
            <IndustryNews />
            <FloatingQuoteBtn />
            <HotProductVideos
                title={newInnovationData.title}
                videos={newInnovationData.videos}
            />
            <VerticalAccordion />
            <InfiniteLiveFeed />
            <AssociationsCarousel />
        </div>
    );
}