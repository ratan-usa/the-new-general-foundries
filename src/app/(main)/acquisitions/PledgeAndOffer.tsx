'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PledgeAndOffer() {
  return (
    <section className="relative bg-slate-500 py-20 overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-red-600 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute left-0 bottom-0 w-[300px] h-[300px] bg-blue-600 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* === LEFT: THE PLEDGE === */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-bold tracking-wider uppercase">
              <ShieldCheck className="w-4 h-4" />
              Our Guarantee & Challenge
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Our <span className="text-[#D80621]">Pledge</span>
            </h2>
            
            <blockquote className="border-l-4 border-[#D80621] pl-6 py-2">
              <p className="text-xl md:text-2xl text-[#D80621] italic font-light leading-relaxed">
                "We will undertake every casting that is presented to us... regardless."
              </p>
            </blockquote>
            
            <p className="text-[#D80621] text-lg">
              No geometry is too complex, no alloy too difficult. We challenge the industry standards to deliver what others say is impossible.
            </p>
          </div>

          {/* === RIGHT: THE FREE PROTOTYPE OFFER === */}
          <div className="relative group">
            {/* Glowing Border Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative bg-white rounded-xl p-8 md:p-10 text-center shadow-2xl">
              
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gift className="w-8 h-8 text-[#D80621]" />
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-[#D80621] uppercase mb-2">
                Order Your Prototypes
              </h3>
              
              <div className="text-4xl md:text-5xl font-black text-[#D80621] mb-6 tracking-tight">
                ON US <span className="-[#D80621]">FREE</span>
              </div>

              <p className="text-[#D80621] mb-8">
                Experience our quality risk-free. Submit your design today and let us prove our pledge to you.
              </p>

              <Link href="/contact">
                <Button className="w-full bg-[#D80621] hover:bg-red-700 text-white text-lg font-bold py-7 rounded-lg shadow-lg hover:shadow-red-500/25 transition-all transform hover:-translate-y-1">
                  Claim Your Free Prototype
                </Button>
              </Link>
              
              <p className="text-xs text-[#D80621] mt-4">
                *Terms and conditions apply. Valid for new partners and verified projects.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}