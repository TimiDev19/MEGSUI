"use client"
import { FadeInFromBottom } from '@/components/FadeInFromBottom'
import Typewriter from '@/components/Typewriter';
import { CopyAll } from '@mui/icons-material';
import React, { useState } from 'react'

const Hero = () => {
    const [copied, setCopied] = useState(false);

    const textToCopy = `hthsgcashj...`;

    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
            })
            .catch(err => {
                console.error("Failed to copy text: ", err);
            });
    };
    return (
        <div id="home" className=' h-[100vh] w-[100vw] mb-[40px]'>
            <FadeInFromBottom>
                <div className=' w-full h-full flex flex-col lg:flex-row items-start lg:items-center justify-between pt-[90px] px-[10px]'>
                    <div className=' w-full lg:w-[45%]'>
                        <h1 className=' text-center lg:text-left text-white font-extrabold text-3xl mb-4 flex'>M<Typewriter text={`EGLADON SUI`} speed={300} /> </h1>
                        <p className=' text-center lg:text-left text-white mb-4'>
                            The MEG Coin project is driven by the vision of creating a vibrant and engaged community powered by the SUI blockchain's scalability and efficiency. By leveraging SUI's fast and secure infrastructure, MEG Coin aims to deliver a seamless experience for holders,traders and builders alike.
                        </p>
                        <div onClick={handleCopy} className=' flex items-center justify-center bg-blue-900 text-white py-1 w-fit mx-auto lg:mx-0 px-4 rounded-md'>
                            <h1 className=" mr-4 cursor-pointer font-extrabold text-white break-words break-all overflow-wrap text-md md:text-xl text-center lg:text-3xl max-w-full">
                                {textToCopy}
                            </h1>
                            <h1 className=' cursor-pointer'><CopyAll /> Click to copy</h1>
                        </div>
                        {copied && <span className="text-white">Text copied to clipboard!</span>}
                    </div>

                    <div className=' w-full lg:w-[45%] h-[45vh] lg:h-[75%] animate-pulse hero-bg rounded-3xl shadow-md'>

                    </div>
                </div>
            </FadeInFromBottom>
        </div>
    )
}

export default Hero