import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const WhatCustomersSayAboutUs = () => {
  return (
    <div className='bg-foreground-100 py-12'>
      <div className="flex justify-center items-center  py-6">
        <h3 className=' text-xl lg:text-3xl font-bold'>What Customers Say About Us</h3>
      </div>
      <div className="lg:px-20 w-[calc(100%-120px)] sm:w-[calc(100%-180px)] mx-auto ">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            duration:20,
          
          }}
        >
          <CarouselContent>
            <CarouselItem>
              <div className="flex items-center justify-center flex-col text-center xsm:px-6 md:px-12 gap-4 py-6">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas eligendi sed quis et neque quam cumque cum aut id cupiditate ullam optio quia magnam veniam doloribus maiores officia dolor?</q>
                <div className="">
                <h6 className='font-bold text-lg my-1'>CustomerName</h6>
                <p className='text-sm'>Customer</p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex items-center justify-center flex-col text-center xsm:px-6 md:px-12 gap-4 py-6">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptas eligendi sed quis et neque quam cumque cum aut id cupiditate ullam optio quia magnam veniam doloribus maiores officia dolor?</q>
                <div className="">
                <h6 className='font-bold text-lg my-1'>CustomerName</h6>
                <p className='text-sm'>Customer</p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious  />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}

export default WhatCustomersSayAboutUs