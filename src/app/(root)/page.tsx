import CustomerQuote from '@/components/CustomerQuote'
import Footer from '@/components/Footer'
import ProductsSection from '@/components/ProductsSection'
import ShopByInstagram from '@/components/ShopByInstagram'
import TrandingBanners from '@/components/TrandingBanners'
import TrandingProductsSection from '@/components/TrandingProductsSection'
import { store } from '@/constants/content'
import { BadgeInfo, LifeBuoy, Rocket } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { PiArrowCounterClockwise } from 'react-icons/pi'

const Home = () => {
  return (
    <div>
      <div className="">
        <Image
          priority
          placeholder='blur'
          blurDataURL={store.blurDataUrl}
          src={store.coverImage}
          alt='coverImage'
          height={1080}
          width={1920}
          className='object-cover min-h-[680px]'
        />
        <div className=" lg:border-2 border-white top-[210px] xsm:left-[14%] sm:left-[20%] md:left-[calc(50%-240px)] absolute h-48 flex flex-col justify-center items-center p-20 gap-4 text-center text-white">
          <h6 className='font-medium'>{store.coverText.t1}</h6>
          <h1 className='text-3xl md:text-5xl font-bold'>{store.coverText.t2}</h1>
          <h6 className='font-medium'>{store.coverText.t3}</h6>
        </div>
      </div>
      {/* //////////////////////////////// */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-8 px-4 gap-4">
        <div className="flex items-center justify-start gap-4 ">
          <div className="flex items-center justify-center">
            <Rocket className='h-8 w-8' />
          </div>
          <div className="">
            <h6 className='text-xs font-bold'>FREE SHIPPING</h6>
            <p className='text-muted-foreground text-xs'>Orders ${store.freeShipping} or more</p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-4">
          <div className="">
            <PiArrowCounterClockwise className='h-8 w-8' />
          </div>
          <div className="">
            <h6 className='text-xs font-bold'>FREE RETURNS</h6>
            <p className='text-muted-foreground text-xs'>Within 30 days</p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-4">
          <div className="">
            <BadgeInfo className='h-8 w-8' />
          </div>
          <div className="">
            <h6 className='text-xs font-bold'>GET 20% OFF ON 1st ITEM</h6>
            <p className='text-muted-foreground text-xs'>When you sign up</p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-4">
          <div className="">
            <LifeBuoy className='h-8 w-8' />
          </div>
          <div className="">
            <h6 className='text-xs font-bold'>WE SUPPORT</h6>
            <p className='text-muted-foreground text-xs'>24/7 amazing services</p>
          </div>
        </div>
      </div>
      <hr />
      <ProductsSection position='right' />
      <CustomerQuote />
      <ProductsSection />
      <TrandingBanners />
      <div className="block lg:flex ">
      <TrandingBanners 
      isSmallBanner={true}
      />
      <TrandingBanners 
      isSmallBanner={true}
      />

      </div>
      <hr className='my-16' />
      <TrandingProductsSection />
      <ShopByInstagram />
      
    </div>
  )
}

export default Home