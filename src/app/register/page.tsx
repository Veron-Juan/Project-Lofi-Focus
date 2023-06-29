"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
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
import { FormEvent, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import axios, { AxiosError } from "axios";

export default function Register() {


  const session = useSession();

  const router = useRouter();

  // if (session.status === "loading") {
  //     return <p>Loading...</p>;
  //   }
  
  // if (session.status === "authenticated") {
  //     router?.push("/");
  //   }

  
  const [error, setError] = useState();
    

  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   
    
    // const promise = () => new Promise((resolve) => setTimeout(resolve, 500));
    
    try {
      const formData = new FormData(e.currentTarget);
      const signupResponse = await axios.post("https://lofifocus.vercel.app/api/auth/signup", {
        email: formData.get("email"),
        password: formData.get("password"),
        username: formData.get("username"),
      });
      console.log(signupResponse);
      //respuesta de nextauth
      const res = await signIn("credentials", {
        email: signupResponse.data.email,
        password: formData.get("password"),
        redirect: false,
      });

      if (res?.ok) return router.push("/login");
      
      // res.status === 201 && router.push("/login?success=Account has been created")  ;
      
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data.message;
        setError(errorMessage);
      }
    
    }
  };




  return (
    <div className="max-w-md mx-auto mt-12">
        
        {error && <div className="bg-red-500 text-white p-2 mb-2 rounded-md mt-3">{error}</div>}
    <Card>
      
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Create an account</CardTitle>
        {/* <CardDescription>
          Enter your email below to create your account
        </CardDescription> */}
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-6">
          <Button variant="outline">
            <Icons.gitHub className="mr-2 h-4 w-4" />
            Github
          </Button>
          <Button variant="outline">
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
              Or continue with
            </span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-2">
        <div className="grid gap-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" type="username" name="username" placeholder="@example" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="m@example.com" />
        </div>
        <div className="grid gap-2">
            
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" type="password" placeholder="*********" />
        </div>

        <Button className="w-full mt-5">Create account</Button>
        
        </form>

      
      </CardContent>
    </Card>
    
    </div>
  )
}