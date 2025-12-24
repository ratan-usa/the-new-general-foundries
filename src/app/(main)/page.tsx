import { Button } from "@/components/ui/button";
import Link from "next/link";
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


export default function Home() {
  return (
    <div className="">
<div className="relative w-full overflow-hidden flex items-center justify-center min-h-[500px] md:min-h-[700px]">
        
        {/* === 1. BACKGROUND VIDEO (Fixed z-0) === */}
        <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
        >
            {/* Replace with your video path */}
            <source src="/video/282244_small.mp4" type="video/mp4" />
        </video>

        {/* === 2. RED OVERLAY (Stronger on mobile for readability) === */}
        <div className="absolute inset-0 bg-[#cc2221]/10 md:bg-[#cc2221]/30 z-0 pointer-events-none" />
        
        {/* === 3. CONTENT WRAPPER === */}
        <div className="relative z-10 container mx-auto px-4 py-12 md:py-24 text-center">
            
            {/* MOBILE CARD EFFECT: Adds a white glass box on mobile only so text is readable */}
            <div className="inline-block md:inline w-full md:w-auto bg-white/60 md:bg-transparent backdrop-blur-md md:backdrop-blur-none rounded-xl p-6 md:p-0 shadow-lg md:shadow-none border border-white/50 md:border-none">

                {/* Top Label */}
                <p className="text-[8px] md:text-[16px] font-bold uppercase tracking-widest text-[#cc2221] mb-2 md:mb-4 bg-white/80 md:bg-white/90 px-3 py-2 rounded-full inline-block shadow-sm">
                    MEGA FOUNDRIES | the best industry services
                </p>

                {/* HEADINGS */}
                <h1 className="text-gray-800 md:text-white font-bold leading-tight tracking-tight mt-2">
                    
                    {/* Line 1 */}
                    <span className="block text-[18px] md:text-[40px] whitespace-normal md:whitespace-nowrap">
                        The World's Largest and Advanced
                    </span>
                    
                    {/* Line 2 */}
                    <span className="block text-[18px] md:text-[40px]">
                        Consortium of
                    </span>

                    {/* Highlighted Line */}
                    <span className="block mt-2 text-[10px] py-2 md:text-[28px] text-[#cc2221] uppercase tracking-wide font-black drop-shadow-sm bg-white/50 md:bg-transparent rounded px-2">
                        Foundries, Forge Shops & Fabricators
                    </span>

                    {/* Big Finish */}
                    <span className="block mt-2 text-[28px] md:text-[70px] font-light text-gray-800 md:text-white">
                        Under One Universe
                    </span>
                </h1>

                {/* Quote */}
                <p className="text-[14px] md:text-[22px] text-[#cc2221] font-medium italic mt-4 mb-6">
                    "Think Fast and Succeed Faster"
                </p>

                {/* BUTTONS */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
                    <Button className="w-full sm:w-auto bg-[#cc2221] hover:bg-red-700 text-white rounded-md font-bold shadow-lg md:px-10 md:py-7 md:text-xl">
                        Explore Capabilities
                    </Button>
                    
                    <Button variant="outline" className="w-full sm:w-auto text-[#cc2221] border-2 border-[#cc2221] bg-white/80 hover:bg-white backdrop-blur-sm md:px-10 md:py-7 md:text-xl">
                        <Link href={'/sellerHomepage'}>Succeed With Us</Link>
                    </Button>
                </div>

                {/* Bottom Text */}
                <p className="text-[11px] md:text-[18px] text-gray-800 md:text-white mt-6 font-semibold uppercase tracking-wide">
                    Engage with dedicated experts
                </p>
            </div>

        </div>
    </div>
      <HeroSection />
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
      {/* <MarketplacePage/> */}
      <FloatingQuoteBtn />
      <HotProductVideos
        title={newInnovationData.title}
        videos={newInnovationData.videos}
      />
      <VerticalAccordion />
      <AssociationsCarousel />
    </div>
  );
}
