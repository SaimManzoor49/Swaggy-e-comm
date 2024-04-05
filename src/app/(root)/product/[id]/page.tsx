'use client'
import { store } from '@/constants/content'
import React, { useState } from 'react'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaRegStar, FaStar } from 'react-icons/fa'
import { Expand, Heart, Minus, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogHeader, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import YouMayAlsoLike from '@/components/YouMayAlsoLike'

const ProductPage = ({ params }: { params: { id: string } }) => {
    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState(store.coverImage);
    const { title, reviews, rating, descritption, price, category } = store.product

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
            <div className="grid grid-cols-1 2xl:grid-cols-2 px-4 mt-6 gap-4">
                <div className="">
                    <div className="flex gap-">
                        <div className="flex-col gap-2 hidden sm:flex">
                            <Image
                                priority
                                placeholder='blur'
                                blurDataURL={store.blurDataUrl}
                                src={store.instagramPosts[0].img}
                                alt='coverImage'
                                height={720}
                                width={1280}
                                className='object-cover min-h-[150px] max-w-[140px]'
                                onClick={(e) => {

                                    setMainImage(store.instagramPosts[0].img)
                                }}
                            />
                            <Image
                                priority
                                placeholder='blur'
                                blurDataURL={store.blurDataUrl}
                                src={'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                                alt='coverImage'
                                height={720}
                                width={1280}
                                className='object-cover min-h-[150px] max-w-[140px]'
                                onClick={(e) => {

                                    setMainImage('https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
                                }}
                            />
                        </div>
                        <div className="relative flex justify-center items-center">
                            <Image
                                priority
                                placeholder='blur'
                                blurDataURL={store.blurDataUrl}
                                src={mainImage}
                                alt='coverImage'
                                height={1080}
                                width={1920}
                                className='object-cover max-h-[550px] min-h-[350px] max-w-[calc(100%-20px)]'
                            />
                            <div className="">
                                <AlertDialog>
                                    <AlertDialogTrigger className='absolute bottom-2 right-8 bg-white p-2 hover:scale-110 transition-all duration-150'><Expand /></AlertDialogTrigger>
                                    <AlertDialogContent className='h-[85vh] min-w-[50vw]' >
                                        <div className="">
                                            <Image
                                                priority
                                                placeholder='blur'
                                                blurDataURL={store.blurDataUrl}
                                                src={mainImage}
                                                alt='coverImage'
                                                height={1080}
                                                width={1920}
                                                className='object-cover h-[100%] max-w-[100%]'
                                            />
                                        </div>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        {/* <AlertDialogAction>Continue</AlertDialogAction> */}
                                    </AlertDialogContent>
                                </AlertDialog>

                            </div>
                        </div>
                    </div>
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
                        <div className="flex justify-center items-center gap-1 xsm:gap-4">
                            <div className="border flex justify-center items-center gap-1 xsm:gap-2 px-1 py-1">
                                <Button variant={'ghost'} onClick={handleDecrement}>
                                    <Minus className='h-2 w-2 xsm:w-4 xsm:h-4'/>
                                </Button>
                                <p className='text-xs xsm:text-base'>{quantity}</p>
                                <Button variant={'ghost'} onClick={handleIncrement}>
                                    <Plus className='h-2 w-2 xsm:w-4 xsm:h-4'/>
                                </Button>

                            </div>
                            <Button variant={'outline'} className='rounded-none border-secondary text-secondary hover:bg-secondary hover:text-white transition-all px-8 xsm:px-12 py-6 text-xs xsm:text-base'>ADD TO CART</Button>
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
            <div className="my-4">
                <Tabs defaultValue="Description"  className="w-full flex justify-center items-center flex-col">
                    <TabsList className="hidden sm:block">
                        <TabsTrigger className='lg:px-5' value="Description">Description</TabsTrigger>
                        <TabsTrigger className='lg:px-5' value="AdditionalInformation">Additional Information</TabsTrigger>
                        <TabsTrigger className='lg:px-5' value="Shipping&Returns">Shipping & Returns</TabsTrigger>
                        <TabsTrigger className='lg:px-5' value="Reviews">Reviews</TabsTrigger>
                    </TabsList>
                    <TabsList className=" sm:hidden m-1">
                        <TabsTrigger className='lg:px-5' value="Description">Description</TabsTrigger>
                        <TabsTrigger className='lg:px-5' value="AdditionalInformation">Additional Information</TabsTrigger>
                    </TabsList>
                    <TabsList className=" sm:hidden">
                        <TabsTrigger className='lg:px-5' value="Shipping&Returns">Shipping & Returns</TabsTrigger>
                        <TabsTrigger className='lg:px-5' value="Reviews">Reviews</TabsTrigger>
                    </TabsList>
                    <TabsContent value="Description" className='w-full px-3'>

                        <div className="border-2">Product Description</div>

                    </TabsContent>
                    <TabsContent value="AdditionalInformation" className='w-full px-3'>

                        <div className="border-2">Additional Information</div>

                    </TabsContent>

                    <TabsContent value="Shipping&Returns" className='w-full px-3'>

                        <div className="border-2">Shipping & Returns</div>

                    </TabsContent>

                    <TabsContent value="Reviews" className='w-full px-3'>

                        <div className="border-2">Reviews</div>

                    </TabsContent>
                </Tabs>
                <YouMayAlsoLike />
            </div>
        </div>
    )
}

export default ProductPage