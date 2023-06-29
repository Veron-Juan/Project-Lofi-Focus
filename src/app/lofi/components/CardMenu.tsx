import Image from "next/image"
import { ListMusic, PlusCircle, Star } from "lucide-react"

import { cn } from "@/lib/utils"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

import { Album } from "../data/albums"
import { playlists } from "../data/playlists"
import VideoPlayer from "./VideoPlayer"
import { useFavoriteStore } from "@/store/store"
import { toast, Toaster } from "sonner"

interface AlbumArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  album: Album
  aspectRatio?: "portrait" | "square"
  width?: number
  height?: number
}

export function CardMenu({
  album,
  aspectRatio = "portrait",
  width,
  height,
  className,
  
  ...props
}: AlbumArtworkProps) {

  const { addFavorite } = useFavoriteStore();
  const favorites = useFavoriteStore ((state) => state.favorites);
  const setFavorites = useFavoriteStore((state) => state.setFavorites);
  const isFavorite = favorites.some((favorite) => favorite.name === album.name);

  const handleStarClick = () => {

    if (isFavorite) {
      const updatedFavorites = favorites.filter((favorite) => favorite.name !== album.name);
      setFavorites(updatedFavorites);
      
      
    } else{
      
    addFavorite(album);
    toast.success('Added to favorites')

    }

    
  };



  return (
    <div className={cn("space-y-3", className)} {...props}>
      <Toaster duration={1500}  />
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="overflow-hidden rounded-md cursor-pointer relative ">
            
            
            
            <img
              src={album.cover}
              alt={album.name}
              width={width}
              height={height}
              className={cn(
                " w-auto object-cover transition-all hover:scale-105",
                aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
              )}
            />
            
          </div>
        </ContextMenuTrigger>
        
      </ContextMenu>
      <div className="space-y-1 text-sm relative">
        <h3 className="font-medium leading-none">{album.name}</h3>
        <p className="text-xs text-muted-foreground">{album.artist}</p>
        <span onClick={handleStarClick } className="absolute right-0 bottom-3 cursor-pointer  hover:text-fuchsia-800 hover:transform-gpu hover:scale-150 hover:transition-all ">

        <Star width={20}  />
        </span>
      </div>
    </div>
  )
}