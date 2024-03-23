import React from 'react'
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import Image from 'next/image';
import { store } from '@/constants/content';
import { Button } from '@/components/ui/button';
import WhatCustomersSayAboutUs from '@/components/WhatCustomersSayAboutUs';
import { cn } from '@/lib/utils';
import { ArrowRight, Heart, LifeBuoy, Puzzle, Slash } from 'lucide-react';
import { Breadcrumb, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import TeamMemberCard from '@/components/TeamMemberCard';
const AboutPage = () => {
  const { BannerImage, whoWeAreImage } = store.AboutPage
  return (
    <div>
      <Breadcrumb className='my-2'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>About</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="relative">
        <Image
          priority
          placeholder='blur'
          blurDataURL={store.blurDataUrl}
          src={BannerImage}
          alt='coverImage'
          height={1080}
          width={1920}
          className='object-cover max-h-[380px] text-white'
        />
        <div className="absolute top-[34%] xsm:top-[45%] flex items-center justify-center flex-col w-full text-white font-bold">
          <h3 className='text-2xl lg:text-5xl text-white'>About Us</h3>
          <p>Who we are</p>
        </div>
      </div>


      <div className="grid grid-cols-2 px-2 gap-4 my-20">
        <div className="">
          <h3 className='text-2xl font-bold'>Our Vision</h3>
          <p className='text-sm'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh</p>
        </div>
        <div className="">
          <h3 className='text-2xl font-bold'>Our Mission</h3>
          <p className='text-sm'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 px-2 gap-4 mt-6 bg-secondary-50 py-14">
        <div className="">
          <h3 className='text-3xl font-bold my-2'>Who We Are</h3>
          <h5 className='text-secondary font-bold my-2'>Pellentesque odio nisi, euismod pharetra a ultricies
            in diam. Sed arcu. Cras consequat</h5>
          <p className='text-sm mt-8'>
            Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, uctus metus libero eu augue.
          </p>
          <Button variant={'outline'} className={cn('mt-4 rounded-none border-secondary text-secondary bg-transparent hover:text-white hover:bg-secondary hover:border-primary transition-all px-6 py-4 ')}>View Our News <ArrowRight className='w-4 h-4 ml-4' /></Button>
        </div>
        <div className="">
          <Image
            priority
            placeholder='blur'
            blurDataURL={store.blurDataUrl}
            src={whoWeAreImage}
            alt='coverImage'
            height={1080}
            width={1920}
            className='object-cover h-[320px] text-white'
          />
        </div>
      </div>

      <div className="">
        <div className="relative">
          <Image
            priority
            placeholder='blur'
            blurDataURL={store.blurDataUrl}
            src={BannerImage}
            alt='coverImage'
            height={1080}
            width={1920}
            className='object-cover max-h-[280px] xl:max-h-[180px] text-white'
          />
          <div className="absolute top-[18%] xsm:top-[30%] grid grid-cols-2 xl:grid-cols-4 text-white gap-4 px-2 w-ful place-items-center w-full ">
            <div className="text-center">
              <h4 className='text-base xsm:text-xl font-bold'>40K+</h4>
              <h6 className='text-base xsm:text-xl'>Happy Customers</h6>
            </div>
            <div className="text-center">
              <h4 className='text-base xsm:text-xl font-bold'>20+</h4>
              <h6 className='text-base xsm:text-xl'>Years in Business</h6>
            </div>
            <div className="text-center">
              <h4 className='text-base xsm:text-xl font-bold'>95%</h4>
              <h6 className='text-base xsm:text-xl'>Return Clients</h6>
            </div>
            <div className="text-center">
              <h4 className='text-base xsm:text-xl font-bold'>15</h4>
              <h6 className='text-base xsm:text-xl'>Awards Won</h6>
            </div>
          </div>
        </div>
      </div>

      <WhatCustomersSayAboutUs />
      <div className="grid grid-cols-1 lg:grid-cols-3 my-12 px-2">
        <div className="flex justify-center items-center flex-col gap-3 text-center px-1 sm:px-6">
          <Puzzle className='w-6 h-6 text-secondary' />
          <h3 className='text-base xsm:text-xl font-bold'>Design Quality</h3>
          <p className='text-muted-foreground'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias molestiae animi porro nostrum voluptatum maiores officiis, dignissimos iure nisi dolorem. Quasi debitis quaerat non autem nihil placeat aperiam veritatis repellat?</p>
        </div>
        <div className="flex justify-center items-center flex-col gap-3 text-center px-1 sm:px-6">
          <LifeBuoy className='w-6 h-6 text-secondary' />
          <h3 className='text-base xsm:text-xl font-bold'>Professional Support</h3>
          <p className='text-muted-foreground'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias molestiae animi porro nostrum voluptatum maiores officiis, dignissimos iure nisi dolorem. Quasi debitis quaerat non autem nihil placeat aperiam veritatis repellat?</p>
        </div>
        <div className="flex justify-center items-center flex-col gap-3 text-center px-1 sm:px-6">
          <Heart className='w-6 h-6 text-secondary' />
          <h3 className='text-base xsm:text-xl font-bold'>Made With Love</h3>
          <p className='text-muted-foreground'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias molestiae animi porro nostrum voluptatum maiores officiis, dignissimos iure nisi dolorem. Quasi debitis quaerat non autem nihil placeat aperiam veritatis repellat?</p>
        </div>
      </div>
      <div className="">
        <h3 className='text-center text-2xl font-bold'>Meet Our Team</h3>
        <div className="grid grid-cols-1 xsm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 lg:px-2  my-12">
          <TeamMemberCard />
          <TeamMemberCard />
          <TeamMemberCard />
          <TeamMemberCard />
        </div>
      </div>
    </div>
  )
}

export default AboutPage


