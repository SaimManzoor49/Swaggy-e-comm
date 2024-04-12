// app/providers.tsx
'use client'

import { ThemeProvider } from "next-themes"
import { useEffect, useState } from "react"


export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

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
          {children}
        </ThemeProvider>
      </>
    )
  }
  else {
    return (
      <>{children}</>
    )
  }
}