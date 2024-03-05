import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

const Footer = () => {
  return (
    <div className='bg-neutral-800'>
        <div className="flex flex-col justify-center items-center h-56 gap-2">
            <h5 className='text-white text-xl font-bold'>Get The Latest Deals</h5>
            <p className='text-muted-foreground'>don&apos;t miss out any discounts and sales</p>
                <div className="mt-4 w-52 sm:w-72 flex border-2">
                    <Input className='bg-transparent rounded-none w-full border-none text-white' placeholder='Enter your Email Address'   />
                    <Button variant={'ghost'} className='rounded-none text-secondary'>Subscribe</Button>
                </div>
        </div>
        <div className="border-b-2 border-gray-700"></div>
        asldjk
    </div>
  )
}

export default Footer