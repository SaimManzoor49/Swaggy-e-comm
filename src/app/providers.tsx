// app/providers.tsx
'use client'

import { ThemeProvider } from "next-themes"
import { useEffect, useState } from "react"
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, useLazyQuery } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import useStore from "@/context/globalStore";
import Cookies from 'js-cookie'
import { graphql } from "@/gql";


const QUERY = graphql(`
mutation GetUserData($token: String!) {
  getUserData(token: $token) {
    data {
      _id
      accessToken
      email
      username
    }
  }
}`)

export function Providers({ children }: { children: React.ReactNode }) {

  const token = useStore(store => store.token);
  const setToken = useStore(store => store.setToken);
  const setUser = useStore(store => store.setUser);
  const [mounted, setMounted] = useState(false)
  const [getUserData,{loading,error,data}] = useLazyQuery(QUERY,{variables:{token}})

  const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_BACKEND_URI,
  });

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  });

  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_BACKEND_URI,
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    credentials: 'include'
  });


  useEffect(() => {
    setMounted(true)
    const token = Cookies.get('token');
    if(token && token?.length>0){
      setToken(token)
      getUserData()
      console.log(data)
      // setUser()

    }
  }, [])

  if (mounted) {
    return (
      <>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ApolloProvider client={client}>
            {children}
          </ApolloProvider>
        </ThemeProvider>
      </>
    )
  }
  else {
    return (
      <>
        <ApolloProvider client={client}>
          {children}
        </ApolloProvider>
      </>
    )
  }
}