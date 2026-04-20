import Image from 'next/image'
import React from 'react'

export default function Banner() {
  return (
    // <div className='relative h-[500]'>

    // <Image src='/banner-1.jpg' alt='banner-img' className='object-cover object-left' fill  />

    // <div className=' absolute top-1/2 w-full text-center '>
    //     <h1 className=' text-3xl mb-1'>Not sure Where to go? Prefect!</h1>
    //     <button className=' bg-blue-600 text-white px-6 py-3 cursor-pointer rounded-3xl'>I am Flexible!</button>
    // </div>

    // </div>

    <section className="relative h-[600px] w-full">

    <img
      src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
      className="w-full h-full object-cover"
    />

    <div className="absolute inset-0 bg-black/50" />

    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">

      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Not sure where to go?
      </h1>

      {/* Search Box */}
      <div className="bg-white rounded-full flex items-center px-4 py-2 w-[90%] max-w-xl">

        <input
          placeholder="Start your city"
          className="flex-1 outline-none text-black px-3"
        />

        <button className="bg-red-500 text-white px-4 py-2 rounded-full">
          🔍
        </button>

      </div>

    </div>
  </section>
  )
}
