// app/providers.tsx
'use client'

import { ThemeProvider } from "next-themes"
import { useEffect, useState } from "react"
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_BACKEND_URI,
    cache: new InMemoryCache(),
  });


  useEffect(() => {
    setMounted(true)
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