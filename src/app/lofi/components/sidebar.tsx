import {
    LayoutGrid,
    Library,
    ListMusic,
    Mic2,
    Music,
    Music2,
    PlayCircle,
    Radio,
    PlusCircle ,
    Trash2,
    User,
  } from "lucide-react"

 
  
  import { cn } from "@/lib/utils"
  import { Button } from "@/components/ui/button"
  import { ScrollArea } from "@/components/ui/scroll-area"
  
  import { Playlist } from "../data/playlists"
import { Card } from "@/components/ui/card"
import { useFavoriteStore } from "@/store/store"
import { useState } from "react"
  
  interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    playlists: Playlist[]
  }
  
  export function Sidebar({ className, playlists }: SidebarProps) {

   
    
    const favorites = useFavoriteStore((state) => state.favorites);

    
      const favoriteStore = useFavoriteStore();
    
      
    
    const handleRemoveFavorite = (id:any) => {
      favoriteStore.removeFavorite(id);
    }
    


   
    
    return (
      <div className={cn("pb-12", className)}>
        <div className="space-y-4 py-4">
          {/* <div className="px-4 py-2">
            <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
              Discover
            </h2>
            <div className="space-y-1">
              <Button
                variant="secondary"
                size="sm"
                className="w-full justify-start"
              >
                <PlayCircle className="mr-2 h-4 w-4" />
                Listen Now
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <LayoutGrid className="mr-2 h-4 w-4" />
                Browse
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <Radio className="mr-2 h-4 w-4" />
                Radio
              </Button>
            </div>
          </div> */}
          <div className="px-4 py-2">
            <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
              Favorites
            </h2>

            
            {
            favorites.length === 0 ? 
            <div className="flex items-center gap-2  ml-2   ">
              <div className=" ">
              <PlusCircle width={20} />

              </div>

              <h4 className=" text-sm font-semibold">No favorites added</h4>
            </div>
            :
            
            favorites.map((fav)=> (
              
              <div key={fav._id} className="relative ml-2 mb-3 cursor-pointer flex group hover:opacity-75 hover:bg-inherit">
              <div className="flex items-center gap-3 space-y-1">
                <Card>
                  <img className="rounded-md" src={fav.cover} width={42} />
                </Card>
                <div className="space-y-1 text-sm">
                  <h3 className="font-medium leading-none">{fav.name}</h3>
                  <p className="text-xs text-muted-foreground">{fav.artist}</p>
                </div>
              </div>
              <span className="absolute right-1 bottom-2 opacity-0 group-hover:opacity-100 " onClick={() => handleRemoveFavorite(fav._id)} >
                <Trash2 width={18} />
              </span>
            </div>
              

                ))}

            

            
            
            
          </div>
          
        </div>
      </div>
    )
  }