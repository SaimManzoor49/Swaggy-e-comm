'use client'
import { store } from '@/constants/content'
import Image from 'next/image'
import React from 'react'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Login from '@/components/auth/Login'
import Signup from '@/components/auth/Signup'


const SignUpPage = () => {
  return (
    <div className='relative'>
      <Image
        priority
        placeholder='blur'
        blurDataURL={store.blurDataUrl}
        src={store.ContactPage.BannerImage}
        alt='coverImage'
        height={1080}
        width={1920}
        className='object-cover h-[calc(100vh-60px)] text-white'
      />
      <div className="absolute w-full h-full top-0 flex items-center justify-center">
        <div className="">
          <Tabs defaultValue="login" className="mx-4 sm:w-[500px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Signup</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
             <Login />
            </TabsContent>
            <TabsContent value="signup">
              <Signup />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage