'use client'

import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from '@/app/context/ThemeContext'
import EmergencyRunwayBanner from '@/components/ui/EmergencyRunwayBanner'
import VZNChat from '@/components/VZNChat'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider>
        <EmergencyRunwayBanner />
        {children}
        <VZNChat />
      </ThemeProvider>
    </SessionProvider>
  )
}
