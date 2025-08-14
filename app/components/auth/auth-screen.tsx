"use client"

import { useState } from "react"
import { LoginForm } from "./login-form"
import { SignupForm } from "./signup-form"

export function AuthScreen() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-secondary/10 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative">
          {isLogin ? (
            <LoginForm onToggleMode={() => setIsLogin(false)} />
          ) : (
            <SignupForm onToggleMode={() => setIsLogin(true)} />
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">Priya & Arjun's Wedding Celebration</p>
          <div className="mt-2 flex justify-center">
            <div className="w-16 h-px bg-gradient-gold-rose"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
