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


export default function Home() {
  return (
    <div className="">
      <div className="relative z-10 container mx-auto px-4 text-center">
        <p className="text-[20px] py-5 font-semibold uppercase tracking-widest text-[#cc2221] mb-2">
          MEGA FOUNDRIES | the best industry services
        </p>
        <div className="relative z-10 container mx-auto px-4 text-center">

          <h1 className="text-[30px] lg:text-[40px] font-bold leading-tight tracking-tight">
            The World's Largest and Advanced
            Consortium of
            <span className="text-[15px] lg:text-[25px] block mt-2 text-[#cc2221] uppercase tracking-wide drop-shadow-lg">
              Foundries, Forge Shops & Fabricators
            </span>
            <span className="block mt-2 text-2xl  text-[40px] lg:text-[50px] font-light ">
              Under One Universe
            </span>
          </h1>

          <p className="text-xl text-[#cc2221] md:text-[22px] font-medium   italic">
            "Think Fast and Succeed Faster"
          </p>

          <div className="flex flex-col py-5 sm:flex-row items-center justify-center gap-4 mt-8">
            <Button className="bg-[#cc2221] hover:bg-red-700 text-white px-10 py-7 text-xl rounded-md font-bold shadow-[0_0_20px_rgba(204,34,33,0.4)] transition-all transform hover:scale-105">
              Explore Capabilities
            </Button>
            <Button variant="outline" className="px-10 text-[#cc2221] border-2 border-[#cc2221] py-7 text-xl  hover:bg-white/10 backdrop-blur-sm">
              <Link href={'/sellerHomepage'}>Succeed With Us</Link>            </Button>
          </div>
        </div>
        <p className="text-[18px] text-gray-700 max-w-4xl mx-auto mb-16">
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
    </div>
  );
}
