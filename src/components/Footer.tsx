import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { store } from '@/constants/content'

const Footer = () => {
    return (
        <div className='bg-neutral-800 sm:px-12 pb-8'>
            <div className="flex flex-col justify-center items-center h-56 gap-2">
                <h5 className='text-white text-xl font-bold'>Get The Latest Deals</h5>
                <p className='text-muted-foreground'>don&apos;t miss out any discounts and sales</p>
                <div className="mt-4 w-64 sm:w-72 flex border-2">
                    <Input className='bg-transparent rounded-none w-full border-none text-white' placeholder='Enter your Email Address' />
                    <Button variant={'ghost'} className='rounded-none text-secondary'>Subscribe</Button>
                </div>
            </div>
            <div className="border-b-2 border-gray-700 pt-8" />
            <div className="grid grid-cols-2 lg:grid-cols-4 text-white pt-16 gap-4 px-4 sm:px-0">
                <div className="">
                    <h6 className='font-bold py-2'>ABOUT US</h6>
                    <p className='text-muted-foreground'>
                        Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat.
                    </p>
                    <h6 className='font-bold text-sm pt-12 pb-2'>PAYMENT METHORDS</h6>
                    <div className="flex items-center justify-start gap-4">
                        <Image
                            priority
                            placeholder='blur'
                            blurDataURL={store.blurDataUrl}
                            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAVeR93rsfup0tbzwcUuPun4nmygIRDBxKsYFwDDVEnoqihCZYQEWgJm4dEH3X3TXzIpo&usqp=CAU"}
                            alt='MasterCard'
                            height={1080}
                            width={1920}
                            className='object-cover max-h-[40px] max-w-[40px] hover:scale-[1.75] transition-all duration-150 cursor-not-allowed   '
                        />
                        <Image
                            priority
                            placeholder='blur'
                            blurDataURL={store.blurDataUrl}
                            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRffGSpveU0YxcfGJQH5Y7su6kEGNBIaoT_i_ukV4ErXa8fmT42ksF2sQ6jPPs4hiRRRAU&usqp=CAU"}
                            alt='VisaCard'
                            height={1080}
                            width={1920}
                            className='object-cover max-h-[40px] max-w-[40px] hover:scale-[1.75] transition-all duration-150 cursor-not-allowed   '
                        />
                        <Image
                            priority
                            placeholder='blur'
                            blurDataURL={store.blurDataUrl}
                            src={"https://propakistani.pk/how-to/wp-content/uploads/2020/07/jazzcash-visa-debit-card.jpg"}
                            alt='JazzCash'
                            height={1080}
                            width={1920}
                            className='object-cover max-h-[40px] max-w-[40px] hover:scale-[1.75] transition-all duration-150 cursor-not-allowed   '
                        />
                        <Image
                            priority
                            placeholder='blur'
                            blurDataURL={store.blurDataUrl}
                            src={"https://www.incpak.com/wp-content/uploads/2023/12/Easypaisa-jpg.webp"}
                            alt='JazzCash'
                            height={1080}
                            width={1920}
                            className='object-cover max-h-[40px] max-w-[40px] hover:scale-[1.75] transition-all duration-150 cursor-not-allowed   '
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-3 ">
                    <h6 className='font-bold py-2'>INFORMATION</h6>
                    <Link href={''} className='text-muted-foreground hover:text-secondary transition-all duration-200 '>About Swaggy</Link>
                    <Link href={''} className='text-muted-foreground hover:text-secondary transition-all duration-200'>How to Shop on Swaggy</Link>
                    <Link href={''} className='text-muted-foreground hover:text-secondary transition-all duration-200'>Contact Us</Link>
                    <Link href={''} className='text-muted-foreground hover:text-secondary transition-all duration-200'>Login</Link>

                </div>
                <div className="flex flex-col gap-3 ">
                    <h6 className='font-bold py-2'>CUSTOMER SERVICES</h6>
                    <Link href={''} className='text-muted-foreground hover:text-secondary transition-all duration-200 '>Payment Methords</Link>
                    <Link href={''} className='text-muted-foreground hover:text-secondary transition-all duration-200'>Money Back Guarantee</Link>
                    <Link href={''} className='text-muted-foreground hover:text-secondary transition-all duration-200'>Returns</Link>
                    <Link href={''} className='text-muted-foreground hover:text-secondary transition-all duration-200'>Shipping</Link>
                    <Link href={''} className='text-muted-foreground hover:text-secondary transition-all duration-200'>Terms & Conditions</Link>
                    <Link href={''} className='text-muted-foreground hover:text-secondary transition-all duration-200'>Privacy and Policy</Link>

                </div>
                <div className="flex flex-col gap-3 ">
                    <h6 className='font-bold py-2'>MY ACCOUNT</h6>
                    <Link href={''} className='text-muted-foreground hover:text-secondary transition-all duration-200 '>Sign in</Link>
                    <Link href={''} className='text-muted-foreground hover:text-secondary transition-all duration-200'>View Cart</Link>
                    <Link href={''} className='text-muted-foreground hover:text-secondary transition-all duration-200'>My Wishlist</Link>
                    <Link href={''} className='text-muted-foreground hover:text-secondary transition-all duration-200'>Orders</Link>
                    <Link href={''} className='text-muted-foreground hover:text-secondary transition-all duration-200'>Help</Link>

                </div>
            </div>
        </div>
    )
}

export default Footer