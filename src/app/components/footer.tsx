'use client'

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { footerColumns } from '@/lib/menuData2';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  const products = [
    { label: 'Molded Gratings', href: "/" },
    { label: 'Pultruded Grating', href: "/" },
    { label: 'Dynaform Structural Shapes', href: "/" },
    { label: 'Dynarail/DynaRound Guardrail & Handrail Products', href: "/" },
    { label: 'Dynarail Ladder Products', href: "/" },
    { label: 'Stair Solutions', href: "/" },
    { label: 'Fiberglass Plate', href: "/" },
    { label: 'Work Platforms', href: "/" },
    { label: 'Accessories / Complementary Products', href: "/" },
    { label: 'Custom Pultrusions', href: "/" },
    { label: 'Metering Pump Stands', href: "/" },
    { label: 'Rooftop Safety Products', href: "/" },
    { label: 'Unique Product Solutions', href: "/" }
  ]
  const market = [
    { label: 'Market Solutions', href: "/" },
    { label: 'Architectural & Commercial', href: "/" },
    { label: 'Chemical', href: "/" },
    { label: 'Data Center Solutions', href: "/" },
    { label: 'Docks & Decking', href: "/" },
    { label: 'Food & Beverage', href: "/" },
    { label: 'General Manufacturing', href: "/" },
    { label: 'Metals & Mining', href: "/" },
    { label: 'Oil & Gas', href: "/" },
    { label: 'Pharmaceutical', href: "/" },
    { label: 'Pulp & Paper', href: "/" },
    { label: 'Recreational', href: "/" },
    { label: 'Technology', href: "/" },
    { label: 'Telecommunications', href: "/" },
    { label: 'Transportation', href: "/" },
    { label: 'Utilities & Power', href: "/" },
    { label: 'Water & Wastewater', href: "/" },
  ]

  const resourceCenter = [
    { label: 'Product Brochures', href: "/" },
    { label: 'Market Overviews', href: "/" },
    { label: 'Case Studies', href: "/" },
    { label: 'Specifications', href: "/" },
    { label: 'Design Guides', href: "/" },
    { label: 'CAD Drawings/Details', href: "/" },
    { label: 'Installation Guides', href: "/" },
    { label: 'Other Technical Documents', href: "/" },
    { label: 'Certifications', href: "/" },
    { label: 'Videos', href: "/" },
    { label: 'SDS (formerly MSDS)', href: "/" },
    { label: 'Infographics', href: "/" },
    { label: 'FAQ', href: "/" },
    { label: 'Glossary', href: "/" },
    { label: 'Design Resources', href: "/" }
  ]

  return (
    <footer className="bg-[#1a1a1a] text-gray-300 border-t border-gray-800 font-sans">
      <div className="w-full px-4 sm:px-6 lg:px-10 py-3 pt-16 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-16 border-b border-gray-800 pb-12">

          <div className="flex flex-col space-y-6">
            <h3 className="text-[#cc2221] font-bold uppercase tracking-wider text-sm border-b border-[#cc2221]/30 pb-2 w-fit">
              USA Operations
            </h3>

            {/* OPTIMIZED LOGO PLACEMENT: Side by Side */}
            <div className="flex gap-4">
              <div className="bg-white p-2 rounded-lg w-28 h-24 flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                <Link href={'/'} className="w-full h-full relative">
                  <Image src={'/MEGA FOUNDRIES.png'} alt='Mega Foundries' fill className="object-contain" />
                </Link>
              </div>
              <div className="bg-white p-2 rounded-lg w-28 h-24 flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                <Link href={'/'} className="w-full h-full relative">
                  <Image src={'/MEGA METALS.png'} alt='MEGA METALS' fill className="object-contain" />
                </Link>
              </div>
              <div className="bg-white p-2 rounded-lg w-28 h-24 flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                <Link href={'/'} className="w-full h-full relative">
                  <Image src={'/MEGA FABRICATORS.png'} alt='Fabricators' fill className="object-contain" />
                </Link>
              </div>
            </div>

            <div className="text-sm space-y-1 text-gray-400">
              <p>105 MAXES ROAD</p>
              <p>MELVILLE, NY 11737, USA</p>
              {/* <a href="mailto:info@megafoundries.com" className="text-white hover:text-[#cc2221] transition-colors pt-2 block">
                info@megafoundries.com
              </a> */}
            </div>

            {/* <div className="flex gap-3 pt-2">
              {[Linkedin, Facebook, Instagram, Twitter].map((Icon, i) => (
                <Link key={i} href={'/'} className='p-2 border border-gray-600 rounded-full hover:border-[#cc2221] hover:text-[#cc2221] hover:bg-[#cc2221]/10 transition-all'>
                  <Icon className='w-4 h-4' />
                </Link>
              ))}
            </div> */}
          </div>

          <div className="flex flex-col items-center justify-center"> 
            {/* OPTIMIZED LOGO PLACEMENT: Side by Side */}
            <div className="flex  ">
              <div className="bg-white p-2 rounded-lg w-78 h-40 flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                <Link href={'/'} className="w-full h-full relative">
                  <Image src={'/MEGA INDUSTRIES.png'} alt='Mega Industries' fill className="object-contain" />
                </Link>
              </div> 
            </div>
          </div> 

          {/* --- COL 5: CANADA OPERATIONS (Logos + Info + Subscribe) --- */}
          <div className="flex items-end flex-col space-y-6">
            <h3 className="text-[#cc2221] text-left font-bold uppercase tracking-wider text-sm border-b border-[#cc2221]/30 pb-2 w-fit">
              Canada Operations
            </h3>

            {/* OPTIMIZED LOGO PLACEMENT: Side by Side */}
            <div className="flex gap-4 justify-end">
              <div className="bg-white p-2 rounded-lg w-28 h-24 flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                <Link href={'/'} className="w-full h-full relative">
                  <Image src={'/MEGA MOLDS.png'} alt='Canada Foundries' fill className="object-contain" />
                </Link>
              </div>
              <div className="bg-white p-2 rounded-lg w-28 h-24 flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                <Link href={'/'} className="w-full h-full relative">
                  <Image src={'/MEGA FORGE.png'} alt='Mega Forge' fill className="object-contain" />
                </Link>
              </div>
              <div className="bg-white p-2 rounded-lg w-28 h-24 flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                <Link href={'/'} className="w-full h-full relative">
                  <Image src={'/CANADA FOUNDRIES.png'} alt='Mega Forge' fill className="object-contain" />
                </Link>
              </div>
            </div>

            <div className="text-sm space-y-1 text-gray-400">
              <p>ONE YOUNGE STREET</p>
              <p>TORONTO, ONTARIO M5E 1R4 CANADA</p>
            </div>

            {/* Subscribe Form */}
            <div className="pt-4">
              {/* <h4 className="text-white font-semibold mb-3">Subscribe to Newsletter</h4>
              <div className="flex w-full">
                <Input
                  type="email"
                  placeholder="Enter Email"
                  className="rounded-r-none border-gray-600 bg-gray-800 text-white focus:border-[#cc2221] h-10"
                />
                <Button className="rounded-l-none bg-[#cc2221] hover:bg-red-700 text-white font-bold h-10 px-4">
                  Submit
                </Button>
              </div> */}
            </div>
          </div>

        </div>
      </div>
      <div className="w-full px-4 sm:px-6 lg:px-10 py-3 pb-12  ">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-start">

          {footerColumns.map((col) => (
            <div key={col.id} className="flex flex-col gap-6">

              {/* Loop through Sections inside a Column */}
              {col.sections.map((section, index) => (
                <div key={section.title}>

                  {/* Section Title */}
                  <h5 className="text-white font-semibold mb-4 uppercase text-xs tracking-wider text-opacity-70">
                    {section.title}
                  </h5>

                  {/* Links List */}
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-xs text-gray-400 hover:text-[#cc2221] transition-colors block"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* Optional Divider if a column has multiple sections (like Support & Quality) */}
                  {index < col.sections.length - 1 && (
                    <hr className="border-t border-gray-700 opacity-50 mt-6 mb-2" />
                  )}
                </div>
              ))}
            </div>
          ))}

        </div>
      </div>
      <div className="border-t border-gray-800 w-full px-4 sm:px-6 lg:px-10 py-6 pb-24 bg-[#0f0f0f]">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-xs text-gray-600">
            © 2025 Mega Foundries — All rights reserved.
          </p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link href="/" className="text-xs text-gray-600 hover:text-white">Privacy Policy</Link>
            <Link href="/" className="text-xs text-gray-600 hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;