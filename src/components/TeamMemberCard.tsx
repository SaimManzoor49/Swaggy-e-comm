import { store } from '@/constants/content'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const TeamMemberCard = () => {
    return (
        <div className='shadow-lg group'>
            <div className="relative">
                <Image
                    priority
                    placeholder='blur'
                    blurDataURL={store.blurDataUrl}
                    src={store.AboutPage.BannerImage}
                    alt='teamMember'
                    height={1080}
                    width={1920}
                    className='object-cover  text-white'
                />
                <div className="w-full h-full bg-white absolute top-0 opacity-50 hidden group-hover:block"></div>
                <div className="hidden items-center justify-center absolute top-[50%] w-full gap-4  group-hover:flex">
                    <Link href={'/'} className='hover:text-secondary'><FaFacebook size={'26px'}  /></Link>
                    <Link href={'/'} className='hover:text-secondary'><FaTwitter size={'26px'}  /></Link>
                    <Link href={'/'} className='hover:text-secondary'><FaInstagram size={'26px'}  /></Link>
                </div>
            </div>
            <div className="text-center py-2">
                <h6 className='text-lg font-bold'>Name</h6>
                <p>Role Dev Designer</p>
            </div>
        </div>
    )
}

export default TeamMemberCard