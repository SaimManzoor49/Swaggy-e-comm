'use client'
import { sidebar, store } from '@/constants/content'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {

    const pathname = usePathname()


    return (
        <div className='flex flex-col justify-between pt-20 ps-6 h-[calc(100%-90px)] '>
            <Link href={'/'} className='text-2xl font-bold hover:text-secondary'>Swaggy</Link>
            <div className='flex flex-col gap-6'>
                {sidebar.links.map((link) => {

                    const isActive = (pathname.includes(link.href) && link.href.length > 1) || pathname === link.href
                    return (
                        <Link
                            key={link.title}
                            className={cn('font-medium hover:text-secondary hover:underline', isActive && "text-secondary")}
                            href={link.href}
                        >
                            {link.title}
                        </Link>
                    )
                })}
            </div>
            <div className=''>
                <div className=" flex justify-around items-center pe-6">
                    {sidebar.social.map((icon) => {
                        const Icon = icon.Icon
                        return (
                            <Link key={icon.title} href={icon.link} className='hover:scale-125 transition-all'>
                            <Icon  className='cursor-pointer ' color={icon.color} size={'20px'} />
                            </Link>
                        )
                    })}
                </div>
                <div className="text-muted-foreground text-sm flex flex-col ps-6 pt-2">
                    <p>Copyright &copy; {new Date().getFullYear()} {store.name} Store.</p>
                    <p>All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar