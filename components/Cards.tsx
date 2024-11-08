import React from 'react'
import HomeCard from "@/components/HomeCard";
import Link from 'next/link';
import Image from 'next/image';
import { DialogTrigger } from "@/components/ui/dialog";

const Cards = () => {
    return (
        <div className='flex flex-col xl:flex-row justify-between gap-5'>
            <div className="w-full flex flex-col md:flex-row justify-between gap-5">
                <HomeCard
                    img="/icons/join-meeting.svg"
                    title="New Meeting"
                    description="Start an instant meeting"
                />
                <HomeCard
                    img="/icons/join-meeting.svg"
                    title="Join Meeting"
                    description="vai invitation link"
                    className="bg-[#0e78f9]"
                />
            </div>

            <div className=" w-full flex flex-col md:flex-row justify-between gap-5">
                <HomeCard
                    img="/icons/schedule.svg"
                    title="Schedule Meeting"
                    description="Plan your meeting"
                    className="bg-[#830ef9]"
                />
                <Link href="/recordings" className=" min-w-64 w-full h-[16rem] rounded-xl bg-[#f9a90e] relative cursor-pointer">
                    <div className=' w-12 h-12 bg-[#fefdfd3e] rounded-lg flex justify-center items-center absolute top-6 left-4
          '>
                        <Image
                            src="/icons/recordings.svg"
                            width={30}
                            height={30}
                            alt='join meeting'
                        />
                    </div>
                    <div className=' absolute bottom-6 left-4'>
                        <p className=' text-2xl font-bold'>View Recordings</p>
                        <p className='text-lg'>Meeting Recordings</p>
                    </div>
                </Link>
                <DialogTrigger>Open</DialogTrigger>

            </div>
        </div>
    )
}

export default Cards