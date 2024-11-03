import Navbar from '@/components/Navbar/page'
import Sidebar from '@/components/Sidebar/page'

import React from 'react'

const Homelayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='relative'>
            <Navbar />
            <div className=" flex">
                <Sidebar />
                <section className='min-h-screen flex flex-1 bg-red-400 px-8 pt-4'>
                    <div className='w-full'></div>
                    {children}
                </section>
            </div>
        </main>
    )
}

export default Homelayout