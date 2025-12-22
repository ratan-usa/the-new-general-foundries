import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from '@/components/ui/menubar'
import { menuData } from '@/lib/menuData2'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ScrollableMenu = () => {
    return (
        <div className="border-t border-neutral-100 bg-neutral-50/50">
            <div className="w-full px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-0">
                {/* Scroll Wrapper */}
                <div className="w-full md:w-auto overflow-x-auto md:pb-0 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
                    <Menubar className="border-none bg-transparent shadow-none p-0 h-auto flex w-max">
                        {Object.values(menuData).map((section) => (
                            <MenubarMenu key={section.id}>
                                <MenubarTrigger 
                                    className="
                                        group flex items-center text-[12px] gap-1.5 text-neutral-700 cursor-pointer transition-colors font-semibold px-3 py-1.5 whitespace-nowrap rounded-none
                                        hover:bg-[#cc2221] hover:text-white 
                                        focus:bg-[#cc2221] focus:text-white 
                                        data-[state=open]:bg-[#cc2221] data-[state=open]:text-white
                                    "
                                >
                                    <section.icon 
                                        className="
                                            h-3.5 w-3.5 shrink-0 transition-colors
                                            text-[#cc2221] 
                                            group-hover:text-white 
                                            group-focus:text-white 
                                            group-data-[state=open]:text-white
                                        " 
                                    />
                                    {section.label}
                                </MenubarTrigger>
                                <MenubarContent className="bg-white border border-gray-100 shadow-xl rounded-md min-w-[220px] p-1">
                                    {section.categories.map((category, index) => (
                                        <MenubarSub key={index}>
                                            <MenubarSubTrigger className="cursor-pointer text-sm py-2 px-3 rounded-sm text-gray-700 hover:text-[#cc2221] hover:bg-red-50">
                                                {category.name}
                                            </MenubarSubTrigger>
                                            <MenubarSubContent className="max-h-[400px] overflow-y-auto bg-white border border-gray-100 shadow-lg min-w-[200px] p-1 ml-1">
                                                {category.items.map((item, i) => (
                                                    <MenubarItem key={i} asChild>
                                                        <Link href={`/products/${item.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}`} className="cursor-pointer text-sm py-1.5 px-2 block w-full hover:text-[#cc2221] hover:bg-red-50">
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
                <div className="flex items-center pl-0 md:pl-2 shrink-0">
                    <Link href="/category/list" className='text-[12px] pb-2 font-semibold text-neutral-700 flex items-center gap-2 hover:text-[#cc2221] transition-colors'>
                        <Menu className='h-3.5 w-3.5' /> VIEW ALL CATEGORIES
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ScrollableMenu