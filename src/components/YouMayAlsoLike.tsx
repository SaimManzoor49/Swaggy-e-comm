import React from 'react'
import ProductCard from './ProductCard'

const YouMayAlsoLike = () => {
  return (
    <div className='mb-12'>
        <div className="my-12">
            <h1 className='text-2xl font-bold text-center'>You May Also Like</h1>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </div>
  )
}

export default YouMayAlsoLike