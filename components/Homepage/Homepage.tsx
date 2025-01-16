import React from 'react'
import Hero from './sections/Hero'
import { Roboto } from "next/font/google";
import About from './sections/About';
import Roadmap from './sections/Roadmap';
import Tokenomics from './sections/Tokenomics';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const Homepage = () => {
  return (
    <div className={`${roboto.className} h-[100vh] w-[100vw] overflow-scroll scroll-smooth`}>
        <Hero/>
        <About/>
        <Tokenomics />
        <Roadmap/>
    </div>
  )
}

export default Homepage