"use client"

import { FormEvent, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
// import { useAuthStore } from "@/store/store"
import { signIn, useSession } from "next-auth/react"
import { toast, Toaster } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"
import Spinner from "@/components/Spinner"

export default function DemoCreateAccount() {
  // const { user, setUser } = useAuthStore()

  const session = useSession()

  const router = useRouter()

  const sesionStatus = () => {
    if (session.status === "authenticated") {
      router.replace("/")
    }
  }

  useEffect(() => {
    sesionStatus()
  }, [session, router])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault()
      const formData = new FormData(event.currentTarget)
      const res = await signIn("credentials", {
        email: formData.get("email"),
        password: formData.get("password"),
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="mx-auto mt-12 max-w-md">
      {session.status === "loading" ? (
        <Spinner />
      ) : (
        <Card>
          {/* <div className="flex items-center justify-center gap-2 relative mr-12">
        <div className="flex items-center ">
        <img className="h-14 w-14 mb-1" src="/logo-lofi.svg"  />
        
        <span className="inline-block font-bold">Lofi Focus</span>
      </div>


        </div> */}

          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl ">
              {/* <img className="h-14 w-14 mb-1" src="/logo-lofi.svg"  /> */}
              Welcome to Lofi focus, Login with
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-6">
              <Button onClick={() => signIn("github")} variant="outline">
                <Icons.gitHub className="mr-2 h-4 w-4" />
                Github
              </Button>
              <Button onClick={() => signIn("google")} variant="outline">
                <Icons.google className="mr-2 h-4 w-4" />
                Google
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with email
                </span>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="grid gap-2">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  name="password"
                  id="password"
                  type="password"
                  placeholder="********"
                />
              </div>
              <Button className="mt-5 w-full">Log in</Button>
            </form>
          </CardContent>
          {/* <CardFooter>
        <Button className="w-full">Log in</Button>
      </CardFooter> */}
        </Card>
      )}
    </div>
  )
}
