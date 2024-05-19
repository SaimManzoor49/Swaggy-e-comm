'use client'
import { sidebar, store } from '@/constants/content'
import useStore from '@/context/globalStore'
import { graphql } from '@/gql'
import { cn } from '@/lib/utils'
import { useMutation } from '@apollo/client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { toast } from 'sonner'


const Sidebar = () => {
    const user = useStore(store => store.user)
    const setUser = useStore(store => store.setUser)
    const [token, setToken] = useState("")

  
    const pathname = usePathname()

    const QUERY = graphql(`
    mutation GetUserData($token: String!) {
      getUserData(token: $token) {
        data {
          email
          _id
          accessToken
          username
        }
      }
    }
  `)

  
  const [getUserData, { loading, error, data }] = useMutation(QUERY)

  useEffect(() => {
    // Check for token in localStorage only after initial render
    const accessToken = localStorage.getItem('accessToken')
    if (!user.email && accessToken && accessToken.length) {
      setToken(accessToken)
      getUserData({ variables: { token: accessToken } })
    }
  }, [getUserData, user.email])

  useEffect(() => {
    if (data?.getUserData?.data) {
      setUser(data.getUserData.data)
    } else if (error) {
      localStorage.removeItem('accessToken')
    }
  }, [data, error, setUser])


  const handleLogout = ()=>{
    setUser({})
    setToken("");
    localStorage.removeItem('accessToken')
    toast.success('loged out!')
  }


    return (
        <div className='flex flex-col justify-between pt-20 ps-6 h-[calc(100%-90px)] '>
            <Link href={'/'} className='text-2xl font-bold hover:text-secondary'>Swaggy</Link>
            <div className='flex flex-col gap-6'>
                {sidebar.links.map((link) => {

                    const isActive = (pathname.includes(link.href) && link.href.length > 1) || pathname === link.href

                    if(link.title ==='Login/Signup' && user?.email){
                        // if(user?.email){
                           return <span
                            key={link.title}
                            className={cn('font-medium hover:text-secondary hover:underline cursor-pointer', isActive && "text-secondary")}
                            onClick={handleLogout}

                        >
                            Logout
                        </span>
                        // }
                    }else
                    return (
                        <Link
                            key={link.title}
                            className={cn('font-medium hover:text-secondary hover:underline', isActive && "text-secondary")}
                            href={link.href}
                        >
                            {link.title}
                        </Link>
                    )
                })}
            </div>
            <div className=''>
                <div className=" flex justify-around items-center pe-6">
                    {sidebar.social.map((icon) => {
                        const Icon = icon.Icon
                        let title = icon.title
                        let isDark = false;
                        if (title === 'Twitter') {
                            isDark = true
                        } else {
                            isDark = false
                        }
                        return (
                            <Link key={title} href={icon.link} className={cn('hover:scale-125 transition-all')}>
                                <Icon className={cn('cursor-pointer')} color={!isDark ? icon.color : undefined} size={'20px'} />
                            </Link>
                        )
                    })}
                </div>
                <div className="text-muted-foreground text-sm flex flex-col ps-3 lg:ps-5 pt-2 underline ">
                    <p>Copyright &copy; {new Date().getFullYear()} {store.name} Store.</p>
                    <p>All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar