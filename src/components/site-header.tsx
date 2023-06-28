"use client"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { useSession, signOut } from "next-auth/react"
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import { DropdownMenu, 
  DropdownMenuTrigger,
   DropdownMenuContent,
    DropdownMenuLabel,
     DropdownMenuSeparator,
      DropdownMenuGroup,
      DropdownMenuItem,
      
    } from "./ui/dropdown-menu"

    import {
      Sheet,
      SheetContent,
      SheetDescription,
      SheetHeader,
      SheetTitle,
      SheetTrigger,
    } from "@/components/ui/sheet"
    
    


import { LogOut, PlusCircle, User, AlignLeft } from "lucide-react"
import { Settings } from "lucide-react"
// import { useAuthStore } from "@/store/store"
import { useRouter } from "next/navigation"
import ToggleMenu from "./Toggle"

export function SiteHeader() {

  const session = useSession()
  const router = useRouter();
  // const { user, setUser } = useAuthStore();
  const imageUser = session.data?.user?.image
  const userName = session.data?.user?.name
  const userEmail = session.data?.user?.email


  const handleLogout = ()=>{
    signOut()
    // router.push("/");
  }

  
  
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="">
        <MainNav   items={siteConfig.mainNav} />
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          
          
          

         

          <nav className="flex items-center space-x-1">
            
            
            <ThemeToggle />

            <div className="flex sm:hidden">
          <Sheet >
  <SheetTrigger>
  <AlignLeft />
  </SheetTrigger>
  <SheetContent>
    
    
      <ul className="flex flex-col gap-6 mx-auto justify-center text-center mt-6 ">
        
        <Link href="/"  className="hover:opacity-75" >
        <SheetTitle>Home</SheetTitle>
        </Link>
        <Link href="/lofi" className="hover:opacity-75">
        <SheetTitle>Lofi</SheetTitle>
        </Link>
        <Link href="/pomodoro" className="hover:opacity-75">
        <SheetTitle>Pomodoro</SheetTitle>
        </Link>
        <Link href="/community" className="hover:opacity-75">
        <SheetTitle>Community</SheetTitle>
        </Link>
        
        
      </ul>
      
    
  </SheetContent>
</Sheet>
</div>
            
            {session.status === "authenticated"  ?  (

            
            <DropdownMenu 
            >
              
              <DropdownMenuTrigger className="cursor-pointer" asChild>
              
                
              
                <Avatar>
                  <AvatarImage src={ session.data.user?.image || ""}>
                  
                  </AvatarImage>
                
              {/* <AvatarFallback>{user?.username.charAt(0).toUpperCase()}</AvatarFallback> */}
                </Avatar>
              
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{userName }</p>
            <p className="text-xs leading-none text-muted-foreground">
              {userEmail }
            </p>
          </div>
        </DropdownMenuLabel>
        
        <DropdownMenuSeparator></DropdownMenuSeparator>
        <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
          <LogOut  className="mr-2 h-4 w-4" />
          <span>Log out</span>
          
        </DropdownMenuItem>
      </DropdownMenuContent>
            </DropdownMenu>
            ) : null }
           
          </nav>
        </div>
      </div>
    </header>
  )
}
