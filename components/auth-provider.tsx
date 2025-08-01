"use client"

import { SessionProvider } from "next-auth/react"

interface ProviderProps {
  children: React.ReactNode
}

export default function AuthProvider({ children }: ProviderProps) {
  return (
    <SessionProvider refetchInterval={4 * 60} refetchOnWindowFocus={false}>{children}</SessionProvider>
  )
}