'use client';

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SignInButton, UserButton } from '@clerk/nextjs'
import MobileNav from './Mobile';

const Navbar = () => {

  return (
    <>
    <nav className=' hidden sm:block' >
      <section className='flex justify-between items-center px-6 py-4 bg-blue-1'>
      <Link href="/" className='flex items-center gap-1'>
        <Image src="/icons/logo.svg"
          width={32}
          height={32} alt="logo"
        className=''/>
        <p className='hidden sm:block text-[1.6rem] text-white font-extrabold'>YOOM</p>
      </Link>
      <div className=" flex justify-between gap-4">

        <div className="sm:mr-4">
          <SignInButton>
            <UserButton />
          </SignInButton>
        </div>


        </div>
      </section>
    </nav>
      <MobileNav />
    </>
  )
}

export default Navbar