"use client"

import type React from "react"

import { useAuth } from "@/contexts/auth-context"
import { AuthScreen } from "./auth-screen"
import { Loader2 } from "lucide-react"

interface ProtectedAppProps {
  children: React.ReactNode
}

export function ProtectedApp({ children }: ProtectedAppProps) {
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-secondary/10 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-gradient-gold-rose rounded-full flex items-center justify-center mx-auto">
            <Loader2 className="h-8 w-8 text-white animate-spin" />
          </div>
          <p className="text-muted-foreground">Loading your wedding experience...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return <AuthScreen />
  }

  return <>{children}</>
}
