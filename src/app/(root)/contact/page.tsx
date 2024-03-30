import ContactForm from '@/components/ContactForm'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { store } from '@/constants/content'
import { LocateIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { BiLocationPlus, BiMailSend, BiPhone, BiTime } from 'react-icons/bi'

const ContactPage = () => {
    return (
        <div>
            <Breadcrumb className='my-2 ms-2'>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Contact</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className="relative">
                <Image
                    priority
                    placeholder='blur'
                    blurDataURL={store.blurDataUrl}
                    src={store.ContactPage.BannerImage}
                    alt='coverImage'
                    height={1080}
                    width={1920}
                    className='object-cover max-h-[380px] text-white'
                />
                <div className="absolute h-full top-0  flex items-center justify-center flex-col w-full text-white font-bold">
                    <h3 className='text-2xl lg:text-5xl text-white'>Contact Us</h3>
                    <p>keep in touch with us</p>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 px-2 my-12 gap-6">
                <div className="mb-4">
                    <div className="my-2 ">
                        <h3 className='text-lg lg:text-2xl font-bold my-2'>Contact Information</h3>
                        <p>Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
                    </div>
                    <div className="grid grid-cols-1 xsm:grid-cols-2 mt-8 gap-4 ">
                        <div className="flex  justify-start gap-2">
                            <BiLocationPlus className='text-secondary min-h-6 min-w-6' />
                            <p className=''>70 Washington Square South New York, NY 10012, United States</p>
                        </div>
                        <div className="flex  justify-start gap-2">
                            <BiTime className='text-secondary min-h-6 min-w-6' />
                            <p className=''>Monday-Saturday <br />
                                11am-7pm ET</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 xsm:grid-cols-2 mt-4 gap-4">
                        <div className="flex  justify-start gap-2">
                            <BiPhone className='text-secondary min-h-6 min-w-6' />
                            <p className=''>+92 423 567</p>
                        </div>
                        <div className="flex  justify-start gap-2">
                            <BiMailSend className='text-secondary min-h-6 min-w-6' />
                            <p className=''>info@Swaggy.com</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h3 className='text-lg lg:text-2xl font-bold'>Got Any Questions?</h3>
                    <p>Use the form below to get in touch with the sales team</p>
                    <ContactForm />
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.9292012799697!2d73.06741687506509!3d31.416076652288314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242bef30a05ed%3A0x39e814b7f874c28d!2sGovernment%20College%20University%20Faisalabad!5e0!3m2!1sen!2s!4v1711744963570!5m2!1sen!2s" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                className='w-full'
            ></iframe>
        </div>
    )
}

export default ContactPage