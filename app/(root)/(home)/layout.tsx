import Navbar from '@/components/Navbar/page'
import Sidebar from '@/components/Sidebar/page'
import { Dialog } from '@/components/ui/dialog'

import React from 'react'

const Homelayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='relative'>
            <Navbar />
            <div className=" flex">
                <Sidebar />
                <section className='min-h-screen flex flex-1 bg-blue-2 px-6 py-10 sm:px-14'>
                    <div className='w-full'>
                        <Dialog>
                    {children}
                        </Dialog>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Homelayout