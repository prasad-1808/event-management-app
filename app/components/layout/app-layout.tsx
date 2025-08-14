"use client"

import type React from "react"
import { PrimarySidebar } from "@components/navigation/primary-sidebar"
import { SecondarySidebar } from "@components/navigation/secondary-sidebar"

interface AppLayoutProps {
  children: React.ReactNode
  secondarySidebar?: React.ReactNode
}

export function AppLayout({ children, secondarySidebar }: AppLayoutProps) {
  return (
    <div className="flex h-screen bg-background">
      <PrimarySidebar />
      <SecondarySidebar>{secondarySidebar}</SecondarySidebar>
      <main className="flex-1 overflow-auto">
        <div className="h-full">{children}</div>
      </main>
    </div>
  )
}
