'use client'
import { Button } from '@/components/ui/button';
import { menuData } from '@/lib/menuData2';
import { ChevronDown, Search } from 'lucide-react';
import React, { useState } from 'react'

const SearchBar = () => {
    const [selectedCategory, setSelectedCategory] = useState("All Categories");

    return (
        <div className="hidden md:flex max-w-xl w-full mx-4 h-10 items-center border border-red-200 rounded-md overflow-hidden bg-white">

            {/* === 1. COMPACT CATEGORY DROPDOWN === */}
            <div className="relative h-full shrink-0 border-r border-neutral-200 bg-neutral-50/50">
                <select
                    className="
                h-full pl-3 pr-7 
                text-xs font-medium text-neutral-600 
                bg-transparent 
                focus:outline-none appearance-none 
                cursor-pointer 
                hover:text-[#cc2221] hover:bg-red-50 
                transition-colors
                w-[110px] truncate
            "
                    defaultValue="all"
                >
                    <option value="all">All</option>
                    {Object.values(menuData).map((section) => (
                        <option key={section.id} value={section.id}>
                            {section.label}
                        </option>
                    ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-neutral-400 pointer-events-none" />
            </div>

            {/* === 2. INPUT === */}
            <input
                type="text"
                placeholder="Search products..."
                className="w-full h-full pl-3 pr-4 text-sm text-neutral-700 focus:outline-none placeholder:text-neutral-400"
            />

            {/* === 3. BUTTON === */}
            <Button className="h-full rounded-none px-6 bg-[#cc2221] hover:bg-red-700 text-white font-semibold text-xs uppercase tracking-wide">
                Search
            </Button>
        </div>
    )
}

export default SearchBar