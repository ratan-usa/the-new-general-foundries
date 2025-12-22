'use client'

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from '@/components/ui/menubar';
import { menuData } from '@/lib/menuData2';
import {
    BookAIcon,
    ChevronRight,
    Menu,
    Search,
    User,
    UserCheck2Icon,
    X,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import ScrollableMenu from './scrollableMenus';
import SearchBar from './searchBar';

const loginOptions = [
    {
        id: 1,
        title: "Corporate & Operations",
        links: [
            { label: "Team Mega Login", href: "/login/team" },
            { label: "Customer Login", href: "/login/customer" },
            { label: "Logistics Login", href: "/login/logistics" },
            { label: "Foundries Login", href: "/login/foundry" },
            { label: "Forge Shops Login", href: "/login/forge" },
            { label: "Fabricators Login", href: "/login/fabricator" },
            { label: "Other Vendors Login", href: "/login/vendor" }
        ]
    },
    {
        id: 2,
        title: "Professionals",
        links: [
            { label: "Engineers / Architects Login", href: "/login/engineer" }
        ]
    }
];

const topMenuItems = [
    { label: 'New Factories', href: '/sellerHomepage', content: 'Supplier', icon: UserCheck2Icon },
    { label: 'Request for', href: '#', content: 'Quotations', icon: BookAIcon },
    { label: 'Welcome', href: '#', content: 'Sign In/Register', icon: User, isLogin: true }
];

const countryOptions = [
    { label: "USA", flag: "🇺🇸", id: "us" },
    { label: "Canada", flag: "🇨🇦", id: "ca" },
    { label: "Latin America", flag: "🇧🇷", id: "lat" },
    { label: "North America", flag: "🌎", id: "na" },
    { label: "Caribbean", flag: "🇯🇲", id: "car" },
    { label: "Europe", flag: "🇪🇺", id: "eu" },
]

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showSticky, setShowSticky] = useState(false);
    // === 1. SCROLL LISTENER ===
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowSticky(true);
            } else {
                setShowSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // === 2. REUSABLE USER MENU (Login/Icons) ===
    // We use this in both the Main Navbar and the Sticky Navbar
    const UserMenu = () => (
        <div className="flex items-center space-x-6">
            {topMenuItems.map((item) => {
                if (item.isLogin) {
                    return (
                        <DropdownMenu key={item.label}>
                            <DropdownMenuTrigger className="flex items-center gap-2 group outline-none cursor-pointer">
                                <div className='text-neutral-600 group-hover:text-[#cc2221] transition-colors'>
                                    <item.icon size={28} strokeWidth={1.5} />
                                </div>
                                <div className="flex flex-col justify-center text-left">
                                    <p className='text-sm text-neutral-500 leading-tight'>{item.label}</p>
                                    <p className='text-xs font-bold text-neutral-800 group-hover:text-[#cc2221] transition-colors'>{item.content}</p>
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-[420px] p-3 bg-white border border-gray-100 shadow-lg rounded-md">
                                <div className="grid grid-cols-2 gap-2">
                                    {loginOptions.map((group) => (
                                        <div key={group.id} className="space-y-1">
                                            <h4 className="text-[13px] font-semibold text-gray-500 px-2">{group.title}</h4>
                                            {group.links.map((item) => (
                                                <DropdownMenuItem key={item.href} asChild>
                                                    <Link href={item.href} className="cursor-pointer flex items-center gap-2 py-2 hover:bg-red-50 rounded px-2 group">
                                                        <ChevronRight className="w-4 h-4 text-[#cc2221] opacity-0 group-hover:opacity-100 transition-opacity" />
                                                        <span className="font-medium text-[13px] text-gray-700 group-hover:text-[#cc2221]">{item.label}</span>
                                                    </Link>
                                                </DropdownMenuItem>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    )
                }
                return (
                    <Link className='flex items-center gap-2 group' key={item.label} href={item.href}>
                        <div className='text-neutral-600 group-hover:text-[#cc2221] transition-colors'>
                            <item.icon size={28} strokeWidth={1.5} />
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className='text-sm text-neutral-500 leading-tight'>{item.label}</p>
                            <p className='text-xs font-bold text-neutral-800 group-hover:text-[#cc2221] transition-colors'>{item.content}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    );

    return (
        <>
            {/* =======================================
               3. MAIN NAVBAR (Your Original Design)
               ======================================= */}
            <header className="bg-white shadow-md z-40 relative">
                <div className="w-full px-4 sm:px-6 lg:px-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

                        {/* LEFT SECTION */}
                        <div className="w-full lg:w-auto flex justify-between item-start gap-6 shrink-0">
                            <div className='flex flex-col'>
                                <div className="items-center gap-4 hidden lg:flex">
                                    <Link href={'/'} className="shrink-0"><Image src={'/MEGA FOUNDRIES.png'} alt='Mega Foundries' height={80} width={80} className="object-contain h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20" /></Link>
                                    <Link href={'/'} className="shrink-0"><Image src={'/MEGA METALS.png'} alt='Fabricator' height={80} width={80} className="object-contain h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20" /></Link>
                                    <Link href={'/'} className="shrink-0"><Image src={'/MEGA FABRICATORS.png'} alt='Fabricator' height={80} width={80} className="object-contain h-24 w-24 sm:h-16 sm:w-16 lg:h-20 lg:w-20" /></Link>
                                </div>
                            </div>

                            {/* Mobile Toggle & Logos */}
                            <div className="pt-2 lg:hidden">
                                <div className="grid grid-cols-7 gap-4 items-center justify-items-center">
                                    <Image src={'/MEGA FOUNDRIES.png'} alt='Mega' width={60} height={60} className="object-contain h-12 w-12" />
                                    <Image src={'/MEGA FABRICATORS.png'} alt='Fabricator' width={60} height={60} className="object-contain h-12 w-12" />
                                    <Image src={'/MEGA INDUSTRIES.png'} alt='Fabricator' width={60} height={60} className="object-contain h-12 w-12" />
                                    <Image src={'/MEGA METALS.png'} alt='Fabricator' width={100} height={100} className="object-contain h-24 w-24" />
                                    <Image src={'/CANADA FOUNDRIES.png'} alt='Fabricator' width={60} height={60} className="object-contain h-12 w-12" />
                                    <Image src={'/MEGA FORGE.png'} alt='Forge' width={60} height={60} className="object-contain h-12 w-12" />
                                    <Image src={'/MEGA MOLDS.png'} alt='Canada' width={60} height={60} className="object-contain h-12 w-12" />
                                </div>
                            </div>
                            <div className="flex items-center gap-2 lg:hidden">
                                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-neutral-600 hover:text-[#cc2221] transition-colors">
                                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                                </button>
                            </div>
                        </div>

                        {/* CENTER SECTION */}
                        <div className="hidden lg:flex flex-col items-center gap-2"> {/* gap-3 keeps search bar close */}
                            <Link href={'/'} className="shrink-0 flex items-center justify-center">
                                <Image
                                    src={'/MEGA INDUSTRIES2.png'}
                                    alt='Mega Industries'
                                    width={300}   // Increased width for better resolution
                                    height={500}  // Increased height to maintain aspect ratio
                                    className="object-contain w-auto h-28 lg:h-26" // CONTROL SIZE HERE: h-28 (112px) to h-36 (144px)
                                    priority
                                />
                            </Link>

                            {/* SearchBar Container */}
                            <div className="w-full max-w-2xl"> {/* max-w-2xl makes the search bar wider to match the big logo */}
                                <SearchBar />
                            </div>
                        </div>

                        {/* RIGHT SECTION */}
                        <div className="hidden justify-end lg:block shrink-0 items-center space-x-6">
                            <div>
                                <div className="hidden lg:flex items-center gap-6 justify-end">
                                    <Link href={'/'} className="shrink-0"><Image src={'/MEGA MOLDS.png'} alt='Molds' height={80} width={80} className="object-contain h-14 w-14 lg:h-20 lg:w-20" /></Link>
                                    <Link href={'/'} className="shrink-0"><Image src={'/MEGA FORGE.png'} alt='Forge' height={80} width={80} className="object-contain h-14 w-14 lg:h-20 lg:w-20" /></Link>
                                    <Link href={'/'} className="shrink-0"><Image src={'/CANADA FOUNDRIES.png'} alt='Canada' height={80} width={80} className="object-contain h-14 w-14 lg:h-20 lg:w-20" /></Link>
                                </div>

                                {/* Using the Reusable User Menu */}
                                <UserMenu />
                            </div>
                        </div>
                    </div>
                </div>

                {/* === MOBILE MENU DRAWER === */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden bg-neutral-50 border-t border-neutral-200 px-4 py-4 shadow-inner space-y-4 h-[calc(100vh-80px)] overflow-y-auto">
                        {topMenuItems.map((item) => (
                            <div key={item.label}>
                                {item.isLogin ? (
                                    <div className="space-y-2 bg-white p-3 rounded-lg border border-gray-100">
                                        <div className='flex items-center gap-4 text-[#cc2221] mb-3'>
                                            <item.icon size={24} />
                                            <div>
                                                <p className='text-xs text-neutral-500'>{item.label}</p>
                                                <p className='text-sm font-bold'>Select Login Type</p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-3 px-1">
                                            {loginOptions.map((group) => (
                                                <div key={group.id} className="space-y-1">
                                                    <h4 className="text-[12px] font-semibold text-gray-500 pl-1">{group.title}</h4>
                                                    {group.links.map((link) => (
                                                        <Link key={link.href} href={link.href} className="flex items-center gap-2 p-2 rounded text-[13px] text-neutral-600 hover:bg-red-50 hover:text-[#cc2221]">
                                                            <ChevronRight className="w-3 h-3" />
                                                            {link.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link className='flex items-center gap-4 p-2 rounded-lg hover:bg-white hover:shadow-sm transition-all' href={item.href}>
                                        <div className='text-[#cc2221]'><item.icon size={24} /></div>
                                        <div>
                                            <p className='text-xs text-neutral-500'>{item.label}</p>
                                            <p className='text-sm font-bold text-neutral-800'>{item.content}</p>
                                        </div>
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                )}
                <ScrollableMenu />
            </header>

            {/* =======================================
               4. STICKY NAVBAR (Slides down on scroll)
               ======================================= */}
            <div
                className={`fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-md z-[100] transition-transform duration-300 ease-in-out ${showSticky ? 'translate-y-0' : '-translate-y-full'
                    }`}
            >
                <div className="w-full px-4 lg:px-8 -py-4">
                    <div className="flex items-center justify-between gap-4 -pb-4">

                        {/* Sticky Logo */}
                        <Link href={'/'} className="shrink-0">
                            <Image src={'/MEGA INDUSTRIES2.png'} alt='Mega Industries' height={70} width={130} className=" object-contain h-20 w-auto" />
                        </Link>

                        {/* Sticky Search */}
                        <SearchBar />

                        {/* Sticky Icons (Using Reusable Component) */}
                        <div className="hidden lg:block">
                            <UserMenu />
                        </div>

                        {/* Sticky Mobile Toggle */}
                        <div className="flex items-center gap-2 lg:hidden ml-auto">
                            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-neutral-600">
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>

                    <ScrollableMenu />
                </div>
            </div>
        </>
    )
}

export default Navbar