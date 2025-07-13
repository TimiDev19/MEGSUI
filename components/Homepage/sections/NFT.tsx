import Image from 'next/image'
import React from 'react'
import Logo from "@/app/assets/new-logo-kamal.jpg"
import nft1 from "@/app/assets/nft1.jpg"
import nft2 from "@/app/assets/nft2.jpg"
import nft3 from "@/app/assets/nft3.jpg"
import nft4 from "@/app/assets/nft4.jpg"

const NFT = () => {
    return (
        <div id="nft" className=' py-2 w-[100vw] nft-bg h-fit lg:h-[100vh] flex items-center justify-center'>
            <div className=' w-[95%] mx-auto flex flex-col items-center justify-center mb-[20px]'>
                <h1 className=' z-[3] flex items-center justify-center uppercase font-bold text-black text-lg lg:text-4xl p-2 bg-gradient-to-tr from-blue-700 to-blue-300 w-full mx-auto lg:mx-0 lg:w-fit rounded-xl box-shadow'>
                    MEGSUI NFTs
                </h1>
                <div className=' pt-[20px] min-h-[60vh] w-[95%] lg:w-[75%] mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between'>
                    <div className='w-full lg:w-[30%] h-full flex flex-col items-center justify-between'>
                        <Image
                            src={nft1}
                            alt=''
                            className=' w-full lg:hidden rounded-md border border-white mb-4'
                        />
                        <Image
                            src={nft1}
                            alt=''
                            className=' w-full hidden lg:block rounded-md border border-white mb-4'
                        />

                        <Image
                            src={nft3}
                            alt=''
                            className=' w-full lg:hidden rounded-md border border-white mb-4'
                        />
                        <Image
                            src={nft3}
                            alt=''
                            className=' w-full hidden lg:block rounded-md border border-white mb-4'
                        />
                    </div>
                    <div className=' text-white lg:w-[30%] pt-[10px] flex flex-col items-center justify-center'>
                        <h1 className=' text-xl lg:text-5xl'>NFT Details</h1>
                        <ol className=' list-disc'>
                            <li>WL mint 4.20 SUI</li>
                            <li>Public mint 6.9 SUI</li>
                            <li>420 NFTs</li>
                            <li>24 1 of 1s</li>
                            <li>Over $1000 in prizes</li>
                            <li>Exclusive access to the discord</li>
                        </ol>
                        <h1 className=' z-[3]  mx-auto flex items-center justify-center font-bold text-black text-lg lg:text-2-xl p-2 bg-gradient-to-tr from-blue-700 to-blue-300 w-full lg:mx-0 lg:w-fit rounded-xl box-shadow'>
                            Art by EdCriptoFi
                        </h1>
                    </div>
                    <div className=' w-full lg:w-[30%] h-full flex flex-col items-center justify-between'>
                        <Image
                            src={nft2}
                            alt=''
                            className=' w-full lg:hidden rounded-md border border-white mb-4'
                        />
                        <Image
                            src={nft2}
                            alt=''
                            className=' w-full hidden lg:block rounded-md border border-white mb-4'
                        />

                        <Image
                            src={nft4}
                            alt=''
                            className=' w-full lg:hidden rounded-md border border-white mb-4'
                        />
                        <Image
                            src={nft4}
                            alt=''
                            className=' w-full hidden lg:block rounded-md border border-white mb-4'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NFT