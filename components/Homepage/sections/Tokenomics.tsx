"use client"
import Typewriter from '@/components/Typewriter'
import React from 'react'

const Tokenomics = () => {
    return (
        <div id='tokenomics' className=' w-full px-[10px] min-h-[50vh] text-white flex flex-col items-center justify-center'>
            <h1 className=' text-center lg:text-left text-white font-extrabold text-3xl mb-4 flex'>T<Typewriter text={`OKENOMICS`} speed={300}/> </h1>
            {/* <h1 className=' text-3xl mb-4'>Key Details</h1> */}
            <p className=' text-xl'>
            • <span className=' font-semibold'>Total Supply:</span> 420,000,000 MEG (fixed, no future mining). <br />
            • <span className="font-semibold">Community Funds & Airdrops:</span> 40,000,000 (9.5%). <br />
            • <span className="font-semibold">Open Market:</span> 380,000,000 (90.5%). <br />
            • <span className="font-semibold">No Inflation:</span> MEG's capped supply ensures scarcity and long-term value
            </p>
        </div>
    )
}

export default Tokenomics