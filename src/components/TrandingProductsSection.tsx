import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import ProductCard from './ProductCard'

const TrandingProductsSection = () => {
    return (
        <div>
            <h4 className='text-muted-foreground font-medium text-center'>NEW ARRIVALS</h4>
            <h1 className='text-4xl font-bold text-center my-7'>TRANDING NOW</h1>
            <div className="">

                <Carousel className='w-[calc(100%-110px)] md:w-[calc(100%-70px)] mx-auto md:mx-0'  >
                    <CarouselContent className="-ml-2 md:-ml-4 w-24 xsm:w-32 sm:w-56 md:w-48 lg:w-56">
                        <CarouselItem className="pl-2 md:pl-4 "><ProductCard /></CarouselItem>
                        <CarouselItem className="pl-2 md:pl-4"><ProductCard /></CarouselItem>
                        <CarouselItem className="pl-2 md:pl-4"><ProductCard /></CarouselItem>
                        <CarouselItem className="pl-2 md:pl-4"><ProductCard /></CarouselItem>
                        <CarouselItem className="pl-2 md:pl-4"><ProductCard /></CarouselItem>
                        <CarouselItem className="pl-2 md:pl-4"><ProductCard /></CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className='-mt-8' />
                    <CarouselNext className='-mt-8'/>
                </Carousel>
            </div>
        </div>
    )
}

export default TrandingProductsSection