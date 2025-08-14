"use client"

import type React from "react"

import { useState } from "react"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, Heart } from "lucide-react"

interface LoginFormProps {
  onToggleMode: () => void
}

export function LoginForm({ onToggleMode }: LoginFormProps) {
  const { login, isLoading } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email || !password) {
      setError("Please fill in all fields")
      return
    }

    const success = await login(email, password)
    if (!success) {
      setError("Invalid email or password. Please try again.")
    }
  }

  return (
    <Card className="w-full max-w-md bg-card/95 backdrop-blur-sm border-2 border-primary/20 shadow-2xl">
      <CardHeader className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-gradient-gold-rose rounded-full flex items-center justify-center">
            <Heart className="h-8 w-8 text-white" />
          </div>
        </div>
        <div>
          <CardTitle className="text-2xl font-serif text-primary">Welcome Back</CardTitle>
          <CardDescription className="text-muted-foreground">Sign in to access our wedding celebration</CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              className="bg-background/50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              className="bg-background/50"
            />
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Button
            type="submit"
            className="w-full bg-gradient-gold-rose hover:gradient-gold-rose-hover text-white"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </Button>

          <div className="text-center pt-4">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={onToggleMode}
                className="text-primary hover:underline font-medium"
                disabled={isLoading}
              >
                Create one here
              </button>
            </p>
          </div>
        </form>

        <div className="mt-6 pt-6 border-t text-center">
          <p className="text-xs text-muted-foreground">Demo credentials: any email with password 6+ characters</p>
        </div>
      </CardContent>
    </Card>
  )
}
