import { FadeInFromTop } from '@/components/FadeInFromTop'
import InfiniteCarousel from '@/components/InfiniteCarousel'
import Image from 'next/image'
import React from 'react'
import Logo from "@/app/assets/img1.jpeg"

const About = () => {
    return (
        // <div id='about' className=' lg:h-[100vh] w-full px-[10px] pt-[100px]'>
        //     <h1 className=' text-center lg:text-left text-white font-extrabold text-3xl mb-4 capitalize'>About $MEG</h1>
        // </div>

        <FadeInFromTop>
            <div
                id='about'
                className=" h-[100vh] text-white about-bg w-full mb-4 flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:p-4 pt-[100px]"
            >
                <div className=" w-[95%] m-auto lg:h-[35vh] text-center">
                    <h1 className={` text-4xl font-extrabold mb-4`}>About MEG</h1>
                    <div className=' w-full flex flex-col lg:flex-row items-center justify-between'>
                        <div className=' w-full lg:w-[50%] h-[35vh] lg:border-r-2 lg:border-r-white flex flex-col items-center justify-center px-2'>
                            <h1 className=' text-2xl mb-4'>Abstract</h1>
                            <p>
                                MEG Coin is a fixed-supply cryptocurrency built on SUI network, designed to empower decentralized community. With a focus on
                                transparency, scarcity and active ecosystem growth, MEG Coin supports holders through sustainable tokenomics and ongoing community engagement.
                            </p>
                        </div>

                        <div className=' w-full lg:w-[49%] h-[35vh] flex flex-col items-center justify-center'>
                            <h1 className=' text-2xl mb-4'>Why SUI Network?</h1>
                            <div>
                                SUI Network provides a robust foundation for MEG Coin through:
                                <ol className=' w-[95%] mx-auto text-left list-disc'>
                                    <li><span className=' font-semibold'>High Scalability:</span> Fast transactions and low fees ensure a smooth experience for users.</li>
                                    <li><span className=' font-semibold'>Developer-Friendly Environment:</span> The Move programming language supports secure and efficient smart contracts.</li>
                                    <li><span className=' font-semibold'>Eco-Friendly Infrastructure:</span> SUI's consensus mechanism prioritizes energy efficiency</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' w-[95%] mx-auto flex items-center justify-center mb-[20px]'>
                <h1 className=' z-[3] flex items-center justify-center uppercase font-bold text-black text-lg lg:text-4xl p-2 bg-gradient-to-tr from-blue-700 to-blue-300 w-full mx-auto lg:mx-0 lg:w-fit rounded-xl box-shadow'>
                    <Image
                        src={Logo}
                        alt="Apexium Logo"
                        className=' w-[50px] h-[50px] rounded-full mr-3'
                    />
                    MEGSUI MEMES
                </h1>
                <InfiniteCarousel />
            </div>
        </FadeInFromTop>
    )
}

export default About