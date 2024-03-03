import CustomerQuote from '@/components/CustomerQuote'
import ProductsSection from '@/components/ProductsSection'
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
          blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACcAUUDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAEDAgb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A9mAAAAAAAAACACAAAAAAAAKAKAAAAAAAAAAIAAAqAAAAACugBkAAAAAABAABAEUUQBRAFAAVBBQBQAAAAAAEAAAQBQEBUAUAB2AMgAAAAIAAIICgIAogCiAKIoKIAqoIKIooAAIAAAIAoCAAgqoAAANABkAABAABBBFFQQFQAARUVUAUQFVUEFEUFEBVEEFEAVAFEAAQABBQAAAGoAyAgAAggAgIoAggCAogoogCqgCiKKoioCoAogKoggAgKgCiAAgIAIKogDdAVkAARUEEVAQBRAQQAAAUAAFQBQEFAAVAVQEAQFAAEBFEABAAAAEAbgCAAiAKIACIqAIqKgioAAAqAKAAqKAqAKAigAAACKiKAgAAqAAIqAAA3AEABEABAFERUARUVBFAQAAFAAAUAAAUBAAFAEBFQBFQUBAAEVBUAABuAqAAgioCCoogAIioIAKIKgKAAAAoAAIKAAAAAiiKgCKgoAggACKgoADcBUAAEVBBFRRAARFBEAUAARUUAAFAAVFQAAAAAEURQERQVAEEAAABAAf/2Q=='
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
      <ProductsSection />
      <CustomerQuote />
      <ProductsSection />
    </div>
  )
}

export default Home