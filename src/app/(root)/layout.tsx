import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const RootLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
    <Header />
    <aside className='fixed w-[280px]  h-full hidden md:block'>
    <Sidebar />
    </aside>
    <aside className='absolute md:left-[300px] mt-16'>
    {children}
    </aside>
    </div>
  )
}

export default RootLayout