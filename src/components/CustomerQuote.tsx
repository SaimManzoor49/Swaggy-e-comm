import { Quote } from 'lucide-react'
import React from 'react'

const CustomerQuote = () => {
  return (
    <div className='flex justify-center items-center flex-col text-center px-12 sm:px-24 md:px-18 lg:px-24 mt-10 gap-4'>
        <div className="">
            <Quote className='sm:w-12 sm:h-12' />
        </div>
            <p className='leading-8 font-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam commodi ad aliquid adipisci? Inventore praesentium quo aspernatur culpa commodi, itaque sit dolores, dicta nobis, ex dolorem necessitatibus ducimus molestiae incidunt.</p>
            <p className='font-bold leading-3'>Saim,</p>
            <p className='text-muted-foreground'>Customer</p>
    </div>
  )
}

export default CustomerQuote