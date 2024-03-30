'use client'
import { Checkbox } from '@/components/ui/checkbox'
import React from 'react'

const SizesFilter = () => {
  return (
    <div className='flex flex-col gap-1'>
    <div className="flex items-center space-x-2 ">
    <Checkbox id="extraSmall"   />
    <label
      htmlFor="extraSmall"
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      Extra Small
    </label>
  </div>
  <div className="flex items-center space-x-2 ">
    <Checkbox id="small"   />
    <label
      htmlFor="small"
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      Small
    </label>
  </div>
  <div className="flex items-center space-x-2 ">
    <Checkbox id="medium"   />
    <label
      htmlFor="medium"
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      Medium
    </label>
  </div>
  <div className="flex items-center space-x-2 ">
    <Checkbox id="large"   />
    <label
      htmlFor="large"
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      Large
    </label>
  </div>
  <div className="flex items-center space-x-2 ">
    <Checkbox id="extralarge"   />
    <label
      htmlFor="extralarge"
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
    Extra Large
    </label>
  </div>
    
    </div>
  )
}

export default SizesFilter