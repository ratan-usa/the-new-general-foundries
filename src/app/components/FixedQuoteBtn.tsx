import Link from "next/link";
import React from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";

const FixedQuoteBtn = () => {
  return (
    <>
      <div className="fixed top-30 right-0 z-[9999]">
        <Link
          href="/quote"
          className="
            flex items-center gap-2
            bg-[#cc2221] hover:bg-[#cc2221] text-white font-bold
            py-3 px-8 rounded-t-lg shadow-[0_0_10px_rgba(0,0,0,0.3)]
            transition-all duration-300 ease-in-out
            origin-bottom-right 
            rotate-[-90deg]
            translate-y-[50%] 
            translate-x-0
          "
        >
          <span>Get a Quote</span>
        </Link>
      </div>

      {/* ========================================= */}
      {/* 2. BOTTOM SIDE: 3 ROUNDED CONTACT ICONS   */}
      {/* ========================================= */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-4">
        
        {/* A. WhatsApp (Green) */}
        <Link
          href="https://wa.me/15127828880" // Replace with actual number
          target="_blank"
          className="
            w-12 h-12 flex items-center justify-center 
            bg-[#cc2221] hover:bg-[#cc2221] text-white 
            rounded-full shadow-lg shadow-[#cc2221]/30
            transition-transform hover:scale-110
          "
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </Link>

        {/* B. Phone Call (Blue) */}
        <Link
          href="tel:+15127828880"
          className="
            w-12 h-12 flex items-center justify-center 
            bg-[#cc2221] hover:bg-[#cc2221] text-white 
            rounded-full shadow-lg shadow-[#cc2221]/30
            transition-transform hover:scale-110
          "
          title="Call Us"
        >
          <Phone className="w-5 h-5" />
        </Link>

        {/* C. Email (Slate/Gray or Brand Red) */}
        <Link
          href="mailto:sales@megafoundries.com"
          className="
            w-12 h-12 flex items-center justify-center 
            bg-[#cc2221] hover:bg-[#cc2221] text-white 
            rounded-full shadow-lg shadow-[#cc2221]/30
            transition-transform hover:scale-110
          "
          title="Send Email"
        >
          <Mail className="w-5 h-5" />
        </Link>

      </div>
    </>
  );
};

export default FixedQuoteBtn;