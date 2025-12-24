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
  <div className="relative z-10 container mx-auto px-1 text-center">
    
    {/* 1. Top Line */}
    {/* Mobile: 9px | Desktop: 16px (Restored your size) */}
    <p className="text-[9px] md:text-[16px] pt-4 font-semibold uppercase tracking-widest text-[#cc2221] mb-2 whitespace-nowrap">
      MEGA FOUNDRIES | the best industry services
    </p>

    <div className="relative z-10 container mx-auto px-1 text-center">

      {/* 2. Main Heading Wrapper */}
      {/* Mobile: 14px | Desktop: 40px */}
      <h1 className="text-[14px] lg:text-[40px] font-bold leading-tight tracking-tight">
        
        {/* Line 1: Forces one line on mobile */}
        <span className="block whitespace-nowrap">
          The World's Largest and Advanced
        </span>
        
        {/* Line 2 */}
        <span className="block whitespace-nowrap">
          Consortium of
        </span>

        {/* 3. Sub Heading (Foundries...) */}
        {/* Mobile: 10px | Desktop: 25px */}
        <span className="block mt-1 lg:mt-2 text-[10px] lg:text-[25px] text-[#cc2221] uppercase tracking-wide drop-shadow-lg whitespace-nowrap">
          Foundries, Forge Shops & Fabricators
        </span>

        {/* 4. Big Heading (Universe) */}
        {/* Mobile: 24px (Small enough to fit 1 line) | Desktop: 70px (Your original big size) */}
        <span className="block mt-1 lg:mt-2 text-[24px] lg:text-[70px] font-light whitespace-nowrap">
          Under One Universe
        </span>
      </h1>

      {/* 5. Quote */}
      {/* Mobile: 14px | Desktop: 22px */}
      <p className="text-[14px] md:text-[22px] text-[#cc2221] font-medium italic mt-2">
        "Think Fast and Succeed Faster"
      </p>

      {/* 6. Buttons */}
      {/* Mobile: Small padding/text | Desktop: Your original px-10 py-7 text-xl */}
      <div className="flex flex-col py-4 sm:flex-row items-center justify-center gap-3 mt-4 lg:mt-8">
        <Button className="w-full sm:w-auto bg-[#cc2221] hover:bg-red-700 text-white rounded-md font-bold shadow-[0_0_20px_rgba(204,34,33,0.4)] transition-all transform hover:scale-105 
          px-6 py-3 text-sm 
          lg:px-10 lg:py-7 lg:text-xl">
          Explore Capabilities
        </Button>
        
        <Button variant="outline" className="w-full sm:w-auto text-[#cc2221] border-2 border-[#cc2221] hover:bg-white/10 backdrop-blur-sm 
          px-6 py-3 text-sm 
          lg:px-10 lg:py-7 lg:text-xl">
          <Link href={'/sellerHomepage'}>Succeed With Us</Link>
        </Button>
      </div>

    </div>

    {/* 7. Bottom Text */}
    <p className="text-[12px] md:text-[18px] text-gray-700 max-w-4xl mx-auto mb-8 lg:mb-16">
      Engage with dedicated experts
    </p>
  </div> 
      <HeroSection />
      <MegaStories />
      <BusinessSolutions />
      <CosmoBlog />
      <ChatBlog />
      <ProductCarousel />
      {/* <Taglines /> */}
      <DesignCapabilities/>
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
