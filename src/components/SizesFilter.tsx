'use client'
import { Checkbox } from '@/components/ui/checkbox'
import React from 'react'

const SizesFilter = () => {
  const SIZES = [
    { id: 'extraSmall', label: 'Extra Small' },
    { id: 'small', label: 'Small' },
    { id: 'medium', label: 'Medium' },
    { id: 'large', label: 'Large' },
    { id: 'extraLarge', label: 'Extra Large' }
  ];
  return (
    <div className='flex flex-col gap-1'>
        {SIZES.map((size, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Checkbox id={size.id} />
            <label
              htmlFor={size.id}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {size.label}
            </label>
          </div>
        ))}
      </div>
  )
}

export default SizesFilter