import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className='mx-auto text-center mt-3 flex flex-col'>
      <h1 className='className="text-center text-3xl font-extrabold leading-tight tracking-tighter text-black dark:text-white   md:text-5xl lg:text-7xl'>
        Pomodoro Tecnique
      </h1>
        <div className='flex justify-center  items-center'>
            <Image
            className='md:w-[230px] md:h-[230px]'
            src="/logo-lofi.svg"
            alt='logo page'
            width={110}
            height={110}
            />
            <h3 className='font-bold  md:text-5xl'>
                Coming Soon...
            </h3>
        </div>
    </div>
  )
}
