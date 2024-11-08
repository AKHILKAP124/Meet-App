'use client';

import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Navlinks } from '@/constant'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import Image from 'next/image';
import Link from 'next/link';
import { SignInButton, UserButton } from '@clerk/nextjs';

const MobileNav = () => {
    const pathname = usePathname()
    return (
      
        <section className=" sm:hidden flex justify-between items-center px-6 py-4 bg-blue-1">
            <Link href="/" className='flex items-center gap-1'>
                <Image src="/icons/logo.svg"
                    width={40}
                    height={40} alt="logo"
                    className='' />
                <p className='hidden md:block text-[1.6rem] text-white font-extrabold'>MEET</p>
            </Link>
            <div className=" h-10 flex gap-6">

                <div className="sm:mr-4 w-full h-full flex items-center justify-center">
                    <SignInButton>
                        <UserButton />
                    </SignInButton>
                </div> 
                <div className='w-full h-full flex items-center justify-center'>
          <Sheet >
              <SheetTrigger>
                  <Image src="/icons/hamburger.svg"
                      width={38}
                      height={38}
                      alt='' />

              </SheetTrigger>
              <SheetContent side={'left'} className='bg-[#1C1F2E] text-white border-none'>
                      <div className='flex gap-1'>
                          <Image src="/icons/logo.svg"
                              width={32}
                              height={32} alt="Meet Logo" />
                          <p className='font-extrabold text-3xl uppercase'>Meet</p>
                      </div>
                  <div className='w-full h-fit flex flex-col gap-4 mt-16'>

                          {Navlinks.map((item) => {
                              const isActive = pathname === item.route;

                              return (
                                  <SheetClose asChild key={item.route}>
                                      <Link
                                          href={item.route}
                                          key={item.label}
                                          className={cn(
                                              'flex gap-4 items-center p-4 rounded-lg w-full max-w-60',
                                              {
                                                  'bg-blue-600': isActive,
                                              }
                                          )}
                                      >
                                          <Image
                                              src={item.logo}
                                              alt={item.label}
                                              width={20}
                                              height={20}
                                          />
                                          <p className="font-semibold">{item.label}</p>
                                      </Link>
                                  </SheetClose>
                              );
                          })}

                      </div>
              </SheetContent>
                    </Sheet>
                </div>
                </div>
      </section>
  )
}

export default MobileNav