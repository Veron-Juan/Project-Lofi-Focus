"use client"

import React, { useEffect, useState, Suspense } from "react"

import Link from "next/link"
import axios from "axios"
import { PlusCircle } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { buttonVariants } from "@/components/ui/button"

import VideoPlayerCommunity from "./components/VideoPayerCommunity"
import LoaderCard from "./components/LoaderCard"

export default function Community() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Mostrar el loader
        setLoading(true)

        const response = await axios.get("https://lofifocus.vercel.app/api/posts")
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
    <div className="mx-auto flex max-w-screen-xl flex-col space-y-12 p-8 ">
      <h1 className="text-center text-3xl font-extrabold leading-tight tracking-tighter text-black dark:text-white   md:text-5xl lg:text-6xl">
        Welcome to our Community
      </h1>
      <div className="mr-8 mt-6 flex justify-end ">
        <Link href="/upload" className={buttonVariants({ variant: "default" })}>
          <PlusCircle className="mr-2  h-4 w-4" />
          Add music
        </Link>
      </div>
        <Suspense fallback={
            <LoaderCard/>
        } >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data ? (
          data.map((i: any) => (
            <div
              key={i._id}
              className="relative rounded-lg border border-stone-200 pb-3 shadow-md transition-all hover:shadow-xl dark:border-stone-700 dark:hover:border-white"
            >
              <div className="flex flex-col overflow-hidden rounded-lg">
                <div className="relative mx-auto my-3 h-auto ">
                  <VideoPlayerCommunity
                    url={i.link}
                    thumbnailSrc="/community.png"
                  />
                  {!data && undefined}
                </div>
                <div className="border-t border-stone-200 p-4 dark:border-stone-700">
                  <h3 className="font-cal my-0 truncate text-xl font-bold tracking-wide  dark:text-white">
                    {i.title}
                  </h3>
                  <p className="mt-2 line-clamp-1 text-sm font-normal leading-snug text-stone-500 dark:text-stone-400">
                    {i.description}
                  </p>
                </div>
              </div>
              <div className="flex w-auto items-center space-x-4 px-4  ">
                <Avatar>
                  <AvatarImage src={i.avatar} />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="w-auto">
                  <p className="text-sm font-medium leading-none ">
                    {i.username}
                  </p>
                  <p className="text-sm text-muted-foreground ">
                    {(() => {
                      const createdAt = new Date(i.createdAt)
                      const fechaActual = new Date()

                      const diferenciaMilisegundos =
                        fechaActual.getTime() - createdAt.getTime()
                      const minutosTranscurridos = Math.floor(
                        diferenciaMilisegundos / (1000 * 60)
                      )
                      const horasTranscurridas = Math.floor(
                        minutosTranscurridos / 60
                      )
                      const diasTranscurridos = Math.floor(
                        horasTranscurridas / 24
                      )

                      if (minutosTranscurridos < 60) {
                        return `${minutosTranscurridos} min`
                      } else if (horasTranscurridas < 24) {
                        return `${horasTranscurridas} h`
                      } else {
                        return `${diasTranscurridos} days`
                      }
                    })()}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <LoaderCard/>
        )}
      </div>
      
      </Suspense>
    </div>
  )
}
