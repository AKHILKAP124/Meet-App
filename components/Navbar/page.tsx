import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Navlinks } from '@/constant'


const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-6 py-2 bg-blue-1' >
      <Link href="/">
        <Image src="/icons/logo.svg"
          width={46}
          height={46} alt="" />
      </Link>
      <div className="">
        <Sheet>
          <SheetTrigger>
            <Image src="/icons/hamburger.svg"
              width={32}
              height={32}
              alt=''/>

          </SheetTrigger>
          <SheetContent side={'left'} className='bg-[#1C1F2E] text-white border-none'>
            <div className='flex flex-col items-center gap-4'>
              <div>
                <Link href="/" className='flex items-center gap-1'>
                  <Image src="/icons/logo.svg"
                    width={30}
                    height={30} alt="Meet Logo" />
                  <p className='font-bold text-2xl'>Meet</p>
                  
                </Link>
              </div>
              <div className='w-full h-fit flex flex-col items-start gap-5'> 
                {
                  Navlinks.map((link) => (
                    <Link key={link.title} href={link.link} className=" w-full h-16 px-3 py-4 bg-blue-700 rounded-lg font-semibold flex gap-3">
                      <Image
                        src={link.logo}
                        width={30}
                        height={30}
                        alt={link.title}
                      className='self-start'></Image>
                      <p className='text-xl font-semibold'>{link.title}</p></Link>
                  ))
                }
                
                </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

export default Navbar