import { store } from '@/constants/content'
import { Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiComment, BiHeart, BiLogoInstagram } from 'react-icons/bi'

const ShopByInstagram = () => {
    return (
        <div className='pt-8'>
            <div className="flex flex-col gap-6 justify-center items-center">
                <h6 className='text-xl md:text-2xl font-bold'>Shop By Instagram</h6>
                <p className=' font-medium text-muted-foreground'>@SWAGGY INSTAGRAM</p>
            </div>
            <div className="pt-6 grid grid-cols-2 lg:grid-cols-4">
                {store.instagramPosts.map((post) => (
                    <Link href={post.link} className="relative group"
                        key={post.key}
                    >
                        <Image
                            priority
                            placeholder='blur'
                            blurDataURL={store.blurDataUrl}
                            src={post.img}
                            alt='coverImage'
                            height={1080}
                            width={1920}
                            className='object-cover max-h-[200px] group-hover:brightness-75  transition-all duration-200'
                        />
                        <div className="flex justify-center items-center gap-2 bg-neutral-800 ">
                            <div className="flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-200 text-white">
                                <BiHeart />
                                {
                                    <p>{post.likes}</p>
                                }
                            </div>
                            <div className="flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-200 text-white">
                                <BiComment />
                                {
                                    <p>{post.comments}</p>
                                }
                            </div>
                        </div>
                        <div className=" absolute top-[37%] left-[47%]  opacity-0 group-hover:opacity-100 text-white">
                            <BiLogoInstagram size={30} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ShopByInstagram