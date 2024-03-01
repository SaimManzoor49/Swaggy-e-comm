'use client'
import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Heart, Menu, Search, ShoppingCart, User } from 'lucide-react'
import { header, sidebar, store } from '@/constants/content'
import { cn } from '@/lib/utils'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { FaHamburger } from 'react-icons/fa'
import { GiHamburger } from 'react-icons/gi'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const Header = () => {
    const pathname = usePathname()
    return (
        <div className={cn("flex justify-between items-center gap-6 px-4 h-16 sticky top-0 z-10 bg-primary")}>
            <div className="items-center hidden md:flex">
                <Search className='h-4 w-4 me-2' />
                <Input
                    className='border-0 border-b-2 rounded-none border-b-black '
                    placeholder='Search products...'
                />
            </div>
            <div className="items-center  md:hidden">
                <Sheet>
                    <SheetTrigger><Menu /></SheetTrigger>
                    <SheetContent side="left">

                        <div className="items-center flex mt-6 ">
                            <Input
                                className=' rounded-none  '
                                placeholder='Search products...'
                            />
                            <Button variant={"secondary"} className='rounded-none'>
                                <Search className='h-4 w-4 ' />
                            </Button>
                        </div>
                        <div className='flex flex-col gap-6 mt-10'>
                            {sidebar.links.map((link) => {

                                const isActive = pathname.includes(link.href)

                                return (
                                    <Link
                                        key={link.title}
                                        className={cn('font-medium', isActive && "text-secondary")}
                                        href={link.href}
                                    >
                                        {link.title}
                                    </Link>
                                )
                            })}
                        </div>
                        <hr className='my-8' />
                        <div className=''>
                            <div className=" flex justify-around items-center pe-6">
                                {sidebar.social.map((icon) => {
                                    const Icon = icon.Icon
                                    return (
                                        <Link key={icon.title} href={icon.link}>
                                            <Icon className='cursor-pointer' color={icon.color} size={'20px'} />
                                        </Link>
                                    )
                                })}
                            </div>
                            <div className="text-muted-foreground text-sm flex flex-col ps-6 pt-2">
                                <p>Copyright &copy; {new Date().getFullYear()} {store.name} Store.</p>
                                <p>All Rights Reserved</p>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>

            </div>
            <div className="">
                <p className='text-xs md:text-sm'>{header.notification}</p>
            </div>
            <div className="">
                <div className="flex items-center gap-4">
                    <User className=' w-5 h-5 md:h-7 md:w-7  hover:text-primary cursor-pointer' />
                    <Heart className=' w-5 h-5 md:h-7 md:w-7  hover:text-primary cursor-pointer' />
                    <ShoppingCart className=' w-5 h-5 md:h-7 md:w-7  hover:text-primary cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default Header