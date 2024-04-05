import { store } from '@/constants/content'
import Image from 'next/image'
import React from 'react'

const SignUpPage = () => {
  return (
    <div>
      <Image
        priority
        placeholder='blur'
        blurDataURL={store.blurDataUrl}
        src={store.ContactPage.BannerImage}
        alt='coverImage'
        height={1080}
        width={1920}
        className='object-cover h-screen text-white'
      />
    </div>
  )
}

export default SignUpPage