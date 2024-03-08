'use client'
import { store } from '@/constants/content'
import React, { useState } from 'react'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaRegStar, FaStar } from 'react-icons/fa'
import { Heart, Minus, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ProductPage = ({ params }: { params: { id: string } }) => {
    const [quantity, setQuantity] = useState(1);
    const { title, reviews, rating, descritption, price,category } = store.product

    const handleIncrement = () => {
        setQuantity(s => s + 1)
    }

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(s => s - 1)
        } else {
            setQuantity(1)
        }
    }

    return (
        <div>
            <div className="grid grid-cols-2 px-4 mt-6">
                <div className="">
                    <div className="">elo</div>
                </div>
                <div className="">
                    <div className="flex justify-center text-center items-center flex-col gap-4 border-b-2 pb-3">
                        <h5 className='text-2xl font-medium'>{title}</h5>
                        <div className="flex gap-1 justify-center items-center">
                            <FaStar className=' text-yellow-300' />
                            <FaStar className=' text-yellow-300' />
                            <FaStar className=' text-yellow-300' />
                            <FaRegStar className=' ' />
                            <FaRegStar className=' ' />
                            ( {reviews.length} Reviews )
                        </div>
                        <h6 className='text-secondary font-medium text-xl'>${price}</h6>
                        <p>{descritption}</p>
                        <div className="flex justify-center items-center gap-4">
                            <div className="border flex justify-center items-center gap-2 px-1 py-1">
                                <Button variant={'ghost'}>
                                    <Plus className='w-4 h-4' onClick={handleIncrement} />
                                </Button>
                                <p className=''>{quantity}</p>
                                <Button variant={'ghost'}>
                                    <Minus className='w-4 h-4' onClick={handleDecrement} />
                                </Button>

                            </div>
                            <Button variant={'outline'} className='rounded-none border-secondary text-secondary hover:bg-secondary hover:text-white transition-all px-12 py-6'>ADD TO CART</Button>
                        </div>
                        <Button variant={'ghost'} className='flex justify-center items-center gap-2 group hover:bg-transparent hover:text-secondary transition-all'><Heart className='h-4 w-4' />
                        <span className='group-hover:underline'>Add to Wishlist</span></Button>
                    </div>
                    <div className="flex justify-between items-center py-2">
                        <p>Category: {category}</p>
                        <p>Share:  <Button variant={'secondary'} className='rounded-none text-white hover:text-secondary border hover:border-secondary '>Get Link</Button></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage