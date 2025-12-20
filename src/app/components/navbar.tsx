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
import React, { useState } from 'react';

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


// 2. MENU ITEMS
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
    const [selectedCountry, setSelectedCountry] = useState(countryOptions[0])


    return (
        <header className="bg-white shadow-md z-50 sticky top-0">
            <div className="w-full   px-4 sm:px-6 lg:px-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                    <div className="w-full lg:w-auto flex justify-between item-start gap-6 shrink-0">

                        <div className='flex flex-col'>
                            <div className="items-center gap-4 hidden lg:flex">
                                <Link href={'/'} className="shrink-0">
                                    <Image
                                        src={'/MEGA FOUNDRIES.png'}
                                        alt='Mega Foundries'
                                        height={80}
                                        width={80}
                                        className="object-contain h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20"
                                    />
                                </Link>
                                <Link href={'/'} className="shrink-0 ">
                                    <Image
                                        src={'/MEGA FABRICATORS.png'}
                                        alt='Fabricator'
                                        height={80}
                                        width={80}
                                        className="object-contain h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20"
                                    />
                                </Link>
                                <Link href={'/'} className="shrink-0 ">
                                    <Image
                                        src={'/MEGA METALS.png'}
                                        alt='Fabricator'
                                        height={80}
                                        width={80}
                                        className="object-contain h-24 w-24 sm:h-16 sm:w-16 lg:h-20 lg:w-20"
                                    />
                                </Link>
                            </div>
                            <div className="pt-4 hidden lg:flex">
                                <div className="w-full flex items-center border border-red-200 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white h-10 lg:h-12">
                                    <div className="relative grow h-full">
                                        <input
                                            type="text"
                                            placeholder="Enter a keyword to search products"
                                            className="w-full h-full pl-4 pr-10 text-sm lg:text-base text-neutral-700 focus:outline-none placeholder:text-neutral-400"
                                        />
                                        <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 lg:w-5 lg:h-5 text-gray-400" />
                                    </div>
                                    <Button className="h-full rounded-none px-4 lg:px-8 bg-[#cc2221] hover:bg-red-700 text-white font-semibold text-sm lg:text-lg">
                                        <span className="hidden lg:inline">Search</span>
                                        <Search className="lg:hidden w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="pt-2 lg:hidden">
                            <div className="grid grid-cols-7 gap-4 items-center justify-items-center">
                                {/* Logo 1: Mega */}
                                <Image src={'/MEGA FOUNDRIES.png'} alt='Mega' width={60} height={60} className="object-contain h-12 w-12" />
                                {/* Logo 2: Fabricator */}
                                <Image src={'/MEGA FABRICATORS.png'} alt='Fabricator' width={60} height={60} className="object-contain h-12 w-12" />
                                {/* Logo 3: Forge */}
                                <Image src={'/MEGA-INDUSTRIES-LOGO.PNG'} alt='Fabricator' width={60} height={60} className="object-contain h-12 w-12" />
                                <Image src={'/MEGA METALS.png'} alt='Fabricator' width={100} height={100} className="object-contain h-24 w-24" />
                                <Image src={'/MEGA-MINING-LOGO.png'} alt='Fabricator' width={60} height={60} className="object-contain h-12 w-12" />
                                <Image src={'/MEGA FORGE.png'} alt='Forge' width={60} height={60} className="object-contain h-12 w-12" />
                                {/* Logo 4: Canada */}
                                <Image src={'/MEGA MOLDS.png'} alt='Canada' width={60} height={60} className="object-contain h-12 w-12" />
                            </div>
                        </div>
                        {/* Mobile Toggle */}
                        <div className="flex items-center gap-2 lg:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 text-neutral-600 hover:text-[#cc2221] transition-colors"
                            >
                                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>

                    <div className="hidden lg:block items-center gap-4">
                        <Link href={'/'} className="shrink-0">
                            <Image src={'/MEGA-INDUSTRIES-LOGO.png'} alt='Canada Foundries' height={160} width={300} className="object-contain h-30 w-30 md:w-90 lg:h-44 lg:110  " />
                        </Link>
                    </div>
                    <div className="hidden lg:block shrink-0 items-center space-x-6">
                        <div>
                            {/* Right Logos Group */}
                            <div className="hidden lg:flex items-center gap-4">
                                <Link href={'/'} className="shrink-0">
                                    <Image src={'/MEGA-MINING-LOGO.png'} alt='Canada Foundries' height={80} width={80} className="object-contain h-14 w-14 lg:h-20 lg:w-20" />
                                </Link>
                                <Link href={'/'} className="shrink-0">
                                    <Image src={'/MEGA FORGE.png'} alt='Forge Shop' height={80} width={80} className="object-contain h-14 w-14 lg:h-20 lg:w-20" />
                                </Link>
                                <Link href={'/'} className="shrink-0">
                                    <Image src={'/MEGA MOLDS.png'} alt='Canada Foundries' height={80} width={80} className="object-contain h-14 w-14 lg:h-20 lg:w-20" />
                                </Link>
                            </div>
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
                                                <DropdownMenuContent
                                                    align="end"
                                                    className="w-[420px] p-3 bg-white border border-gray-100 shadow-lg rounded-md"
                                                >
                                                    <div className="grid grid-cols-2 gap-2">
                                                        {loginOptions.map((group) => (
                                                            <div key={group.id} className="space-y-1">
                                                                <h4 className="text-[13px] font-semibold text-gray-500 px-2">
                                                                    {group.title}
                                                                </h4>

                                                                {group.links.map((item) => (
                                                                    <DropdownMenuItem key={item.href} asChild>
                                                                        <Link
                                                                            href={item.href}
                                                                            className="cursor-pointer flex items-center gap-2 py-2 hover:bg-red-50 rounded px-2 group"
                                                                        >
                                                                            <ChevronRight className="w-4 h-4 text-[#cc2221] opacity-0 group-hover:opacity-100 transition-opacity" />
                                                                            <span className="font-medium text-[13px] text-gray-700 group-hover:text-[#cc2221]">
                                                                                {item.label}
                                                                            </span>
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
                        </div>
                    </div>

                </div>
            </div>

            {/* === MOBILE MENU (UNCHANGED) === */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-neutral-50 border-t border-neutral-200 px-4 py-4 shadow-inner space-y-4 h-[calc(100vh-80px)] overflow-y-auto">
                    {topMenuItems.map((item) => (
                        <div key={item.label}>
                            {item.isLogin ? (
                                <div className="space-y-2 bg-white p-3 rounded-lg border border-gray-100">
                                    {/* Heading Row */}
                                    <div className='flex items-center gap-4 text-[#cc2221] mb-3'>
                                        <item.icon size={24} />
                                        <div>
                                            <p className='text-xs text-neutral-500'>{item.label}</p>
                                            <p className='text-sm font-bold'>Select Login Type</p>
                                        </div>
                                    </div>

                                    {/* Two Columns Login Grid */}
                                    <div className="grid grid-cols-2 gap-3 px-1">
                                        {loginOptions.map((group) => (
                                            <div key={group.id} className="space-y-1">
                                                {/* Group Title */}
                                                <h4 className="text-[12px] font-semibold text-gray-500 pl-1">
                                                    {group.title}
                                                </h4>
                                                {/* Group Items */}
                                                {group.links.map((link) => (
                                                    <Link
                                                        key={link.href}
                                                        href={link.href}
                                                        className="flex items-center gap-2 p-2 rounded text-[13px] text-neutral-600 hover:bg-red-50 hover:text-[#cc2221]"
                                                    >
                                                        <ChevronRight className="w-3 h-3" />
                                                        {link.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    className='flex items-center gap-4 p-2 rounded-lg hover:bg-white hover:shadow-sm transition-all'
                                    href={item.href}
                                >
                                    <div className='text-[#cc2221]'>
                                        <item.icon size={24} />
                                    </div>
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


            <div className="border-t border-neutral-100 bg-neutral-50/50">
                <div className="w-full px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-0">

                    {/* SCROLL WRAPPER */}
                    <div className="
            w-full md:w-auto 
            overflow-x-auto 
            pb-2 md:pb-0
            
            /* === SCROLLBAR STYLING === */
            /* Height of the scrollbar */
            [&::-webkit-scrollbar]:h-1.5
            /* Color of the moving part (thumb) */
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            /* Roundness of the thumb */
            [&::-webkit-scrollbar-thumb]:rounded-full
            /* Color of the track */
            [&::-webkit-scrollbar-track]:bg-transparent
        ">

                        <Menubar className="border-none bg-transparent shadow-none p-0 h-auto flex w-max">
                            {Object.values(menuData).map((section) => (
                                <MenubarMenu key={section.id}>
                                    <MenubarTrigger className="
                            flex items-center gap-2 text-[#cc2221] cursor-pointer transition-colors text-sm font-semibold px-3 py-1.5 rounded-md  
                            hover:text-[#cc2221] hover:bg-red-50
                            focus:bg-red-50 focus:text-[#cc2221]
                            data-[state=open]:bg-red-50 data-[state=open]:text-[#cc2221]
                            whitespace-nowrap
                        ">
                                        <section.icon className="h-3.5 w-3.5 shrink-0" />
                                        {section.label}
                                    </MenubarTrigger>

                                    {/* Dropdown Content */}
                                    <MenubarContent className="bg-white border border-gray-100 shadow-xl rounded-md min-w-[220px] p-1">
                                        {section.categories.map((category, index) => (
                                            <MenubarSub key={index}>
                                                <MenubarSubTrigger className="cursor-pointer text-sm py-2 px-3 rounded-sm text-gray-700 hover:text-[#cc2221] hover:bg-red-50">
                                                    {category.name}
                                                </MenubarSubTrigger>
                                                <MenubarSubContent className="max-h-[400px] overflow-y-auto bg-white border border-gray-100 shadow-lg min-w-[200px] p-1 ml-1">
                                                    {category.items.map((item, i) => (
                                                        <MenubarItem key={i} asChild>
                                                            <Link
                                                                href={`/products/${item.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}`}
                                                                className="cursor-pointer text-sm py-1.5 px-2 block w-full hover:text-[#cc2221] hover:bg-red-50"
                                                            >
                                                                {item}
                                                            </Link>
                                                        </MenubarItem>
                                                    ))}
                                                </MenubarSubContent>
                                            </MenubarSub>
                                        ))}
                                    </MenubarContent>
                                </MenubarMenu>
                            ))}
                        </Menubar>
                    </div>

                    {/* View All Button */}
                    <div className="flex items-center pl-0 md:pl-2 pt-2 md:pt-0 shrink-0">
                        <Link href="/category/list" className='text-xs font-semibold text-neutral-700 flex items-center gap-2 hover:text-[#cc2221] transition-colors'>
                            <Menu className='h-3.5 w-3.5' /> View All Categories
                        </Link>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Navbar
