import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import React from 'react'
import { Toaster } from 'sonner'

const RootLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
    <Header />
    <aside className='fixed w-[200px] lg:w-[250px]  h-full hidden md:block'>
    <Sidebar />
    </aside>
    <aside className='absolute md:left-[200px] lg:left-[250px] mt-16'>
    {children}
    <Footer />
    </aside>
    <Toaster richColors />
    </div>
  )
}

export default RootLayout