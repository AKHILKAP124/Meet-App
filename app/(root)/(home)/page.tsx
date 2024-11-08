"use client";

import Cards from "@/components/Cards";
import Image from 'next/image'
import React, {  useEffect, useState } from 'react'

const Home = () => {
  const [time, setTime] = useState("")
  const [date, setDate] = useState("")
  
  function getDateTime() {
    const now = new Date();
    setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }))
    setDate((new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now))
  }

  useEffect(() => {
    getDateTime()  
  }, [ ])
  
  setInterval(() => {
    getDateTime()
  }, 10000);

  
  return (
    <section className=' text-xl text-white '>

      <div className='w-full h-full flex flex-col gap-5 flex-wrap'>
       {/* Home card */}
        <div className="w-full h-[19rem] relative">
          <Image
            src="/images/hero-background.png"
            width={1000}
            height={1000}
            quality={100}
            alt='hero-bg'
            className='w-full h-full object-cover object-left rounded-3xl' />
          <div className=' px-5 py-2 w-fit rounded-md absolute top-8 left-6 text-[1.1rem] bg-gray-600'>
            <p>Upcoming Meeting at : <span>24:30</span></p>
          </div>
          <div className=" absolute bottom-9 left-6">
            <p className='text-5xl font-extrabold lg:text-7xl'>{time}</p>
            <p className='mt-2 text-lg font-semibold text-slate-300 lg:text-2xl'>{date}</p>
          </div>
        </div>

        {/* colorfull crads */}

          <Cards />
          
      </div>
      


    </section>
  )
}

export default Home