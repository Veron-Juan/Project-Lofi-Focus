"use client"
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
import { Toaster, toast  } from "sonner"


interface AlbumArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  album: Album
  aspectRatio?: "portrait" | "square"
  width?: number
  height?: number
}

interface CardProps {
  album: Album;
}

export default function AlbumArtwork({
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

  const divClassName = `absolute right-0 bottom-2 cursor-pointer  hover:text-fuchsia-800 hover:transform-gpu hover:scale-150 hover:transition-all` ;

  
  

  return (
    
    <div className={cn("space-y-3", className)} {...props}>
      <Toaster duration={1500}  />
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="overflow-hidden rounded-md cursor-pointer relative ">
            
            <VideoPlayer
            url={album.url}
            thumbnailSrc={album.cover}
            
            
            />
            
            
          </div>
        </ContextMenuTrigger>
      </ContextMenu>
      <div className="space-y-1 text-sm relative">
        <h3 className="font-medium leading-none">{album.name}</h3>
        <p className="text-xs text-muted-foreground">{album.artist}</p>
        <div className={divClassName}  >
              <Star width={20} onClick={handleStarClick}  />
            </div>
      </div>
    </div>
    
  )
}