"use client"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import LoaderPlayer from "./components/LoaderPlayer"

export default function Loading() {
  return (
    <>
      <div className="mx-auto">
        <div className="mx-auto border-t ">
          <div className="max-w-[1470px] bg-background">
            <div className="grid grid-cols-2 lg:grid-cols-5  ">
              <div className="pb-12">
                <div className="xs:hidden space-y-4 py-4 sm:hidden">
                  <div className="px-4 py-5">
                    <div className="space-y-4">
                      <Skeleton className="h-6 w-[200px] bg-[#4d566b] dark:bg-rose-100/20 " />
                      <Skeleton className="h-6 w-[200px] bg-[#4d566b] dark:bg-rose-100/20 " />
                      <Skeleton className="h-6 w-[200px] bg-[#4d566b] dark:bg-rose-100/20 " />
                    </div>
                  </div>
                </div>
              </div>

              <div className=" col-span-3 lg:col-span-4 lg:border-l  ">
                <div className="h-full px-4 py-6 lg:px-8 ">
                  <Tabs defaultValue="music" className="h-full space-y-6  ">
                    <div className="relative flex   justify-between ">
                      <TabsList>
                        <TabsTrigger value="music" className="relative">
                          Music
                        </TabsTrigger>
                        <TabsTrigger value="podcasts">Pomodoro</TabsTrigger>

                        <TabsTrigger value="favorites">Favorites</TabsTrigger>
                      </TabsList>
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
                            {/* {madeForYouAlbums.map((album) => (
                              <AlbumArtwork
                                key={album.name}
                                album={album}
                                className="w-[250px]"
                                aspectRatio="square"
                                width={150}
                                height={150}
                              />
                            ))} */}
                            <LoaderPlayer />
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
                            <LoaderPlayer />
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
                            <LoaderPlayer />
                          </div>
                          <ScrollBar orientation="horizontal" />
                        </ScrollArea>
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
