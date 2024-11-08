import { cn } from '@/lib/utils';
import Image from 'next/image'
// import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import React from 'react'

interface homeprops {
    className?: string;
    img: string;
    title: string;
    description: string;
    handleClick?: () => void;
}


const HomeCard = ({img , title, description, className, handleClick}: homeprops) => {
    return (
    <>
            <div className={cn(" min-w-64 w-full h-[16rem] rounded-xl bg-[#ff742e] relative cursor-pointer ", className)}
                onClick={handleClick}>

          <div className=' w-12 h-12 bg-[#fefdfd3e] rounded-lg flex justify-center items-center absolute top-6 left-4
          '>
              <Image
                  src={img}
                  width={30}
                  height={30}
                  alt='join meeting'
              />
          </div>
          <div className=' absolute bottom-6 left-4'>
              <p className=' text-2xl font-bold'>{title}</p>
              <p className='text-lg'>{ description}</p>
          </div>
      </div>
        </>
  )
}

export default HomeCard