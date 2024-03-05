import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import ProductCard from './ProductCard'
import { store } from '@/constants/content'

const ProductsSection = ({position}:{position?:string}) => {
    const imgUrl = "https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
if(position ==='right') { return (
        <div className='grid grid-cols-1 md:grid-cols-2 mt-12'>
            <div className="p-10 md:p-4">
                <h6 className='ms-6 py-3 text-muted-foreground text-sm'>NEW ARRIVALS</h6>
                <div className="relative">
                    <Image
                        priority
                        placeholder='blur'
                        blurDataURL={store.blurDataUrl}
                        src={imgUrl}
                        alt='coverImage'
                        height={1080}
                        width={1920}
                        className='object-cover max-h-[540px]'
                    />
                    <div className="absolute top-10 left-5">
                        <h2 className='text-xl xsm:text-3xl md:text-xl lg:text-3xl font-bold text-white'>OUR NEW PRODUCTS</h2>
                        <Button className='bg-transparent border-2 hover:bg-primary hover:text-secondary py-3 mt-6'>SHOP NOW!</Button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-2 px-10 md:px-0">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )}else{


        return (
            <div className='grid grid-cols-1 md:grid-cols-2 mt-12'>
                <div className="grid grid-cols-2 gap-4 mt-2 px-10 md:px-0">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
                <div className="p-10 md:p-4">
                    <h6 className='ms-6 py-3 text-muted-foreground text-sm'>NEW ARRIVALS</h6>
                    <div className="relative">
                        <Image
                            priority
                            placeholder='blur'
                            blurDataURL={store.blurDataUrl}
                            src={imgUrl}
                            alt='coverImage'
                            height={1080}
                            width={1920}
                            className='object-cover max-h-[540px]'
                        />
                        <div className="absolute top-10 left-5">
                            <h2 className='text-xl xsm:text-3xl md:text-xl lg:text-3xl font-bold text-white'>OUR NEW PRODUCTS</h2>
                            <Button className='bg-transparent border-2 hover:bg-primary hover:text-secondary py-3 mt-6'>SHOP NOW!</Button>
                        </div>
                    </div>
                </div>
            </div>
        )


    }
}

export default ProductsSection