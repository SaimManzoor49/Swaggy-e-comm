'use client'
import { store } from '@/constants/content'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Login from '@/components/auth/Login'
import Signup from '@/components/auth/Signup'
import useStore from '@/context/globalStore'
import { redirect } from 'next/navigation'
import { graphql } from '@/gql'
import { useMutation } from '@apollo/client'

const AuthPage = () => {
  const user = useStore(store => store.user)
  const setUser = useStore(store => store.setUser)
  const [token, setToken] = useState("")

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
    if (data?.getUserData?.data) {
      setUser(data.getUserData.data)
    } else if (error) {
      localStorage.removeItem('accessToken')
    }
  }, [data, error, setUser])

  useEffect(() => {
    if (user.email) redirect('/')
  }, [user?.email])

  useEffect(() => {
    // Check for token in localStorage only after initial render
    const accessToken = localStorage.getItem('accessToken')
    if (!user.email && accessToken && accessToken.length) {
      setToken(accessToken)
      getUserData({ variables: { token: accessToken } })
    }
  }, [getUserData, user.email])

  return (
    <div className='relative'>
      <Image
        priority
        placeholder='blur'
        blurDataURL={store.blurDataUrl}
        src={store.ContactPage.BannerImage}
        alt='coverImage'
        height={1080}
        width={1920}
        className='object-cover h-[calc(100vh-60px)] text-white'
      />
      <div className="absolute w-full h-full top-0 flex items-center justify-center">
        <div className="">
          <Tabs defaultValue="login" className="mx-4 sm:w-[500px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Signup</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <Login />
            </TabsContent>
            <TabsContent value="signup">
              <Signup />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default AuthPage
