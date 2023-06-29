"use client"


import { Suspense, lazy } from "react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// import { AlbumArtwork } from "./components/album-artwork"

import { Menu } from "./components/menu"
import { PodcastEmptyPlaceholder } from "./components/podcast-empty-placeholder"
import { Sidebar } from "./components/sidebar"
import { listenNowAlbums, madeForYouAlbums } from "./data/albums"
import { playlists } from "./data/playlists"
import "./styles.css"
import { PlusCircle, Youtube } from "lucide-react"




import { Button, buttonVariants } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

import { CardMenu } from "./components/CardMenu"
import VideoPlayer from "./components/VideoPlayer"

import { MouseEventHandler, useEffect, useState } from "react"
import Link from "next/link"
import { useFavoriteStore } from "@/store/store"
import axios from "axios"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

import LoaderPlayer from "./components/LoaderPlayer"
import { CardMenuFavs } from "./components/CardMenuFavs"


const AlbumArtwork = lazy(()=> import("./components/album-artwork") )


export default function MusicPage() {
  const favorites = useFavoriteStore((state) => state.favorites)

  const [selectFav, setSelectFav] = useState("")
  const [selectImgFav, setselectImgFav] = useState("")

  const handleFav = (url: string, image: string) => {
    setSelectFav(url)
    setselectImgFav(image)
  }

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Mostrar el loader
        setLoading(true)

        const response = await axios.get("http://localhost:3000/api/posts")
        setData(response.data)

        // Ocultar el loader
        setLoading(false)
      } catch (error) {
        console.error(error)
        // Maneja el error como desees
      }
    }

    fetchData()
  }, [])

  return (
    <>
    
      <div className="">
        <div className="border-t  ">
          <div className="bg-background max-w-[1470px]">
            <div className="grid grid-cols-2 lg:grid-cols-5  ">
              <Sidebar playlists={playlists} className="hidden  lg:block" />
              <div className=" col-span-3 lg:col-span-4 lg:border-l  ">
                <div className="h-full px-4 py-6 lg:px-8 ">
                  <Tabs defaultValue="music" className="h-full space-y-6  ">
                    <div className="flex justify-between   relative ">
                      <TabsList>
                        <TabsTrigger value="music" className="relative">
                          Music
                        </TabsTrigger>
                        

                        <TabsTrigger value="favorites">Favorites</TabsTrigger>
                      </TabsList>
                      
                      <Link href="/upload" className={buttonVariants({ variant: "default", size: "default" })} >
            <PlusCircle className="mr-2  h-4 w-4" />
            Add music
            </Link>
                      
                    </div>
                    <TabsContent
                      value="music"
                      className="border-none p-0 outline-none"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            Listen Now
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Top picks for you. Updated daily.
                          </p>
                        </div>
                      </div>


           
                      

                          
                      <Separator className="my-4" />
                      <div className="relative">
                        <ScrollArea>
                          <div className="flex space-x-4 pb-4 ">
                      <Suspense fallback={<LoaderPlayer/>}>
                            {madeForYouAlbums.map((album) => (
                              <AlbumArtwork
                                key={album.name}
                                album={album}
                                className="w-[250px]"
                                aspectRatio="square"
                                width={150}
                                height={150}
                              />
                            ))}
                      </Suspense>
                          </div>
                          <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                      </div>
                      

                      <div className="mt-6 space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight">
                          Relax and Study
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Your personal playlists. Updated daily.
                        </p>
                      </div>
                      <Separator className="my-4" />
                          
                      <div className="relative">
                        <ScrollArea>
                          <div className="flex space-x-4 pb-4">
                            {listenNowAlbums.map((album) => (
                              <CardMenu
                                key={album.name}
                                album={album}
                                className="w-[150px]"
                                aspectRatio="square"
                                width={150}
                                height={150}
                              />
                            ))}
                          </div>
                          <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                      </div>

                      <div className="mt-6 space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight">
                          Community
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          The last publications of people
                        </p>
                      </div>

                      <Separator className="my-4" />
                      <div className="relative">
                        <ScrollArea>
                          <div className="flex space-x-4 pb-4">
                            {data ? (
                              data.map((i: any) => (
                                <Card key={i._id} className="w-[200px] hover:border-3 dark:hover:border-white hover:border-black duration-75">
                                  <Link href="community">
                                    <CardHeader>
                                      <div className="flex items-center space-x-4 w-auto">
                                        <Avatar>
                                          <AvatarImage src={i.avatar} />
                                          <AvatarFallback>OM</AvatarFallback>
                                        </Avatar>
                                        <div className="w-auto">
                                          <p className="text-sm font-medium leading-none">
                                            {i.username}
                                          </p>
                                          <p className="text-sm text-muted-foreground">
                                            {(() => {
                                              const createdAt = new Date(
                                                i.createdAt
                                              )
                                              const fechaActual = new Date()

                                              const diferenciaMilisegundos =
                                                fechaActual.getTime() -
                                                createdAt.getTime()
                                              const minutosTranscurridos =
                                                Math.floor(
                                                  diferenciaMilisegundos /
                                                    (1000 * 60)
                                                )
                                              const horasTranscurridas =
                                                Math.floor(
                                                  minutosTranscurridos / 60
                                                )
                                              const diasTranscurridos =
                                                Math.floor(
                                                  horasTranscurridas / 24
                                                )

                                              if (minutosTranscurridos < 60) {
                                                return `${minutosTranscurridos} min`
                                              } else if (
                                                horasTranscurridas < 24
                                              ) {
                                                return `${horasTranscurridas} h`
                                              } else {
                                                return `${diasTranscurridos} days`
                                              }
                                            })()}
                                          </p>
                                        </div>
                                      </div>
                                    </CardHeader>
                                    <CardContent>
                                      <div className="space-y-1 text-sm flex flex-col items-center">
                                        <b className="font-medium leading-none">
                                          {i.title.charAt(0).toUpperCase() +
                                            i.title.slice(1)}
                                        </b>

                                        <svg className="w-8 h-8 my-4 text-[#1a1a1d] dark:text-slate-50" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 384 512"><path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"/></svg>
                                        {/* <span className="w-[80px] text-black dark:text-white">
                                          <Youtube size="lg" />
                                        </span> */}
                                        {/* <p className="text-xs text-muted-foreground">{album.artist}</p> */}
                                      </div>
                                    </CardContent>
                                  </Link>
                                </Card>
                              ))
                            ) : (
                              <div className="flex items-center space-x-4">
                                <Skeleton className="h-12 w-12 rounded-full" />
                                <div className="space-y-2">
                                  <Skeleton className="h-4 w-[250px]" />
                                  <Skeleton className="h-4 w-[200px]" />
                                </div>
                              </div>
                            )}
                            {/* {data?.map((i) => (
                              <Card>
                                <CardContent>
                                  <img width={70} src={i.avatar} />
                                </CardContent>
                              </Card>
                            ))} */}
                          </div>
                          <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                      </div>
                    </TabsContent>
                    <TabsContent
                      value="podcasts"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            New Episodes
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Your favorite podcasts. Updated dailyyyy.
                          </p>
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <PodcastEmptyPlaceholder />
                    </TabsContent>

                    <TabsContent
                      value="favorites"
                      className="border-none p-0 outline-none"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            Favorites
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Here you can listen to your favorite lists.
                          </p>
                        </div>
                      </div>
                      <Separator className="my-4" />

                      <div className="flex h-auto shrink-0 items-center  justify-center rounded-md border border-dashed  ">
                        <div className=" overflow-auto ">
                          <div className="my-5 flex justify-center">
                            {favorites.length === 0 && (
                              <div className="flex flex-col">
                                <h3 className="mt-4 text-lg font-semibold text-center">
                                  No favorites added
                                </h3>
                                <p className="mb-4 mt-2 text-sm text-muted-foreground">
                                  You have not added any favorite.
                                </p>
                              </div>
                            )}
                            {!selectFav || favorites.length === 0 ? null : (
                              
                              <VideoPlayer
                                url={selectFav}
                                thumbnailSrc={selectImgFav}
                              />
                            )}
                          </div>

                          <div className="relative">
                           
                            <ScrollArea>
                              <div className="flex space-x-4 pb-4">
                                {favorites.map((fav) => (
                                  <CardMenuFavs
                                    key={fav._id}
                                    album={fav}
                                    className="w-[150px]"
                                    aspectRatio="square"
                                    width={150}
                                    height={150}
                                    onClick={() =>
                                      handleFav(fav.url, fav.cover)
                                    }
                                  />
                                ))}
                              </div>
                              <ScrollBar orientation="horizontal" />
                            </ScrollArea>
                          
                          </div>

                          {/* <h3 className="mt-4 text-lg font-semibold">No episodes added</h3>
        <p className="mb-4 mt-2 text-sm text-muted-foreground">
          You have not added any podcasts. Add one below.
        </p>
        <Button>Add favorites</Button> */}
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}