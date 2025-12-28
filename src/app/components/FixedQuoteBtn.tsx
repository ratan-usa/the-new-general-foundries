import Link from "next/link";
import React from "react";

const FixedQuoteBtn = () => {
  return (
    // 1. Position wrapper fixed at right-center
    // 2. z-[9999] ensures it sits on top of everything
    <div className="fixed top-1/2 right-0 z-[9999]">
      <Link
        href="#"
        className="
          flex items-center gap-2
          bg-[#D32F2F] hover:bg-red-700 text-white font-bold
          py-3 px-8 rounded-t-lg shadow-[0_0_10px_rgba(0,0,0,0.3)]
          transition-all duration-300 ease-in-out
          
          /* === THE FIX === */
          /* Pivot around the bottom-right corner */
          origin-bottom-right 
          /* Rotate counter-clockwise */
          rotate-[-90deg]
          /* Shift it down slightly to center it better vertically if needed */
          translate-y-[50%] 
          /* Ensure no extra X translation pushes it off screen */
          translate-x-0
        "
      >
        <span>Get a Quote</span>
      </Link>
    </div>
  );
};

export default FixedQuoteBtn;