import React from 'react'

export default function LoaderPlayer() {
  return (
    <>
    <div role="status" className="flex flex-col relative items-center justify-center h-[250px] w-[250px] bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
    <svg className="w-12 h-12 text-#262D3E dark:text-rose-300/10" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 384 512"><path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"/></svg>
    <div className=" absolute bottom-[10px] left-3 space-y-3">
        <div className="h-4 w-32 rounded-lg bg-[#4d566b] dark:bg-rose-100/20"></div>
        <div className="h-3 w-44 rounded-lg bg-[#262D3E] dark:bg-rose-300/10"></div>
        
      </div>
      </div>
      </>
  )
}
