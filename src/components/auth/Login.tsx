'use client'
import React, {useEffect} from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { ArrowRight } from 'lucide-react'
import { Checkbox } from '../ui/checkbox'
import Link from 'next/link'
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import { graphql } from '@/gql'
import { useMutation } from '@apollo/client'
import useStore from '@/context/globalStore'
import { getCookie, setCookie } from 'cookies-next';
import { redirect } from 'next/navigation'
import { LOGIN_USER } from '@/gql/types'
import { toast } from 'sonner'

const formSchema = z.object({
    email: z.string().min(6).max(100).email(),
    password: z.string().min(6).max(100)
})





const Login = () => {

    const [LoginUser, { data, loading, error }] = useMutation(graphql(`
    mutation LoginUser($input: LoginInput!) {
        loginUser(input: $input) {
          data {
            email
            username
            accessToken
          }
        }
      }
    `))
    const setUser = useStore((store) => (store.setUser))
    const token = useStore((store) => (store.token))

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })


    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        const { email, password } = values;

        LoginUser({ variables: { input: { email, password } } })
    }

    if (loading) {
        console.log('Logging in...');
    }

    // if (data) {
    //     console.log('Login successful:', data);
    //     const token = data.loginUser.data?.accessToken
    //     setUser(data?.loginUser?.data)
    //     if (token) {
    //         localStorage.setItem('accessToken', token)
    //     }
    //     redirect('/')
    // }
    if (error) {
        console.error('Login failed:', error);
    }

    useEffect(()=>{
        if(data){
            setUser(data?.loginUser?.data)
            const token = data.loginUser.data?.accessToken
            if (token) {
                localStorage.setItem('accessToken', token)
            }
            toast.success('login successfull!')
            redirect('/')
        }
    },[data?.loginUser?.data])

    return (
        <>
            <Card className=''>
                <CardHeader>
                    <CardTitle>Account</CardTitle>
                    <CardDescription>
                        Continue with your account here. Click login when you&apos;re done.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email address*</FormLabel>
                                        <FormControl>
                                            <Input required placeholder="Enter your email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password*</FormLabel>
                                        <FormControl>
                                            <Input required placeholder="Enter your password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex items-center justify-between">
                                <Button variant={'outline'} disabled={loading} type="submit" className='flex items-center gap-2 rounded-none hover:text-white border-2 border-secondary text-secondary px-5'>Login<ArrowRight className='w-5 h-5 mt-0.5' /></Button>
                                <div className="flex justify-center items-center gap-1">
                                    <Checkbox id="terms" />
                                    <label
                                        htmlFor="terms"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Remember me!
                                    </label>
                                </div>
                            </div>
                            <Link className='text-sm hover:underline hover:text-secondary' href={'/auth'}>Forget Password?</Link>
                        </form>
                        <hr />
                        <div className="text-center">or sign in with</div>
                        <div className="flex w-full gap-4">
                            <Button variant={'outline'} type="button" onClick={() => { console.log(token, '---------token') }} className='flex items-center gap-2 rounded-none hover:text-white border-2 px-5 w-full group'>Google <FaGoogle className='transition-all duration-100 group-hover:text-[#DB4437] w-4 h-4' /></Button>
                            <Button variant={'outline'} type="button" className='flex items-center gap-2 rounded-none hover:text-white border-2 px-5 w-full group'>Facebool <FaFacebook className='transition-all duration-100 group-hover:text-[#1877F2] h-4 w-4' /></Button>

                        </div>
                    </Form>
                </CardContent>
            </Card>
        </>
    )
}

export default Login