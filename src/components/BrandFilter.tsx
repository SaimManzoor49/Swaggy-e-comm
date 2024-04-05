import { Checkbox } from '@/components/ui/checkbox';
import React from 'react';

const BrandFilter = () => {
  const BRANDS = [
    { id: 'brand1', label: 'Brand 1' },
    { id: 'brand2', label: 'Brand 2' },
    { id: 'brand3', label: 'Brand 3' },
    { id: 'brand4', label: 'Brand 4' },
    { id: 'brand5', label: 'Brand 5' }
  ];

  return (
    <div className='flex flex-col gap-1'>
      {BRANDS.map((brand, index) => (
        <div key={index} className="flex items-center space-x-2">
          <Checkbox id={brand.id} />
          <label
            htmlFor={brand.id}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {brand.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default BrandFilter;
