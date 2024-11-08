'use client';

import { Navlinks } from '@/constant';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const Sidebar = () => {
  const pathname = usePathname()
  return (
    <div className='hidden sm:block bg-blue-1 px-6 py-10'>
      
      <section className='flex flex-col gap-6 text-white' >
        {Navlinks.map((item) => {
          const isActive = pathname === item.route;

          return (

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
                  width={24}
                  height={24}
                />
                <p className="font-semibold text-lg hidden lg:block">{item.label}</p>
              </Link>
          );
        })}
      </section>
    </div>
  )
}

export default Sidebar