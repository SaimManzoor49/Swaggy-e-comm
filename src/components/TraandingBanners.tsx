import { store } from '@/constants/content'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TraandingBannersProps{
    isSmallBanner?:boolean
}

const TraandingBanners = ({isSmallBanner}:TraandingBannersProps) => {
    return (
        <div className='mt-8 '>
            <div className="relative">
                <div className="px-4">
                    <Image
                        priority
                        placeholder='blur'
                        blurDataURL={store.blurDataUrl}
                        src={store.TrandingBannerImages.img1}
                        alt='coverImage'
                        height={1080}
                        width={1920}
                        className={cn('object-cover max-h-[500px]',isSmallBanner && 'max-h-[240px]')}
                    />
                </div>
                <div className={cn("absolute top-[35%] grid  items-center place-items-center w-full",!isSmallBanner && "lg:grid-cols-2")}>
                    <div className="text-primary text-center px-4">
                <h6 className={cn('font-medium',isSmallBanner && "text-sm")}>OUR NEW COLLECTION</h6>
                <h1 className={cn('font-bold text-4xl',isSmallBanner && "text-lg")}>{store.TrandingBannerImages.img1Title}</h1>
                <h6 className={cn('font-medium',isSmallBanner && "text-sm")}>{store.TrandingBannerImages.img1Quote}</h6>
                <Button variant={'outline'} className={cn('mt-2 rounded-none border-secondary text-secondary bg-transparent hover:bg-transparent hover:text-white hover:border-primary transition-all px-12 py-6',isSmallBanner && "px-4 py-1 border-none")}>SHOP NOW <ArrowRight className='w-4 h-4 ml-4' /></Button>
                    </div>
                    <div className="hidden lg:block"></div>
                </div>
            </div>
        </div>
    )
}

export default TraandingBanners