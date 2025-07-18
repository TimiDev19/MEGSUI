import Image from 'next/image'
import React from 'react'
import InfiniteCarousel from '@/components/InfiniteCarousel'
import Logo from "@/public/images/img1.jpg"

const Memes = () => {
    return (
        <div className=' w-[100vw]'>
            <div className=' w-[95%] mx-auto flex items-center justify-center mb-[20px]'>
                <h1 className=' z-[3] flex items-center justify-center uppercase font-bold text-black text-lg lg:text-4xl p-2 bg-gradient-to-tr from-blue-700 to-blue-300 w-full mx-auto lg:mx-0 lg:w-fit rounded-xl box-shadow'>
                    MEG MEMES
                </h1>
                <InfiniteCarousel />
            </div>
        </div>
    )
}

export default Memes