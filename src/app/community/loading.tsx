import React from 'react'
import LoaderCard from './components/LoaderCard'

export default function loading() {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-col space-y-12 p-8 ">
      <h1 className="text-center text-3xl font-extrabold leading-tight tracking-tighter text-black dark:text-white   md:text-5xl lg:text-6xl">
        Welcome our Community
      </h1>
      
          
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
     <LoaderCard/>
     <LoaderCard/>
     <LoaderCard/>
     <LoaderCard/>
      </div>
      
      
    </div>
  )
}
