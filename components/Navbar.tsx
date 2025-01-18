"use client";
// import Logo from "@/app/assets/sui-logo.png"
import Image from "next/image"
import { Urbanist } from "next/font/google";
import { Roboto } from "next/font/google";
import { motion } from "framer-motion";
import { useState } from "react";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Link from "next/link";
import TelegramIcon from '@mui/icons-material/Telegram';
import XIcon from '@mui/icons-material/X';
import { FadeInFromTop } from "./FadeInFromTop";
import { Instagram } from "@mui/icons-material";

const urbanist = Urbanist({
    subsets: ['latin'],
    weight: ['400', '700'],
});
const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className=' fixed z-50 w-full h-[70px]'>
            <FadeInFromTop>
                <div className=' w-full h-[70px] bg-white text-bg-blue-500 flex items-center justify-between px-[10px]'>
                    {/* <Image
                        src={Logo}
                        alt="sui logo"
                        className=" w-[60px] bg-white rounded-full"
                    /> */}

                    <h1 className={` ${roboto.className} font-extrabold text-3xl text-blue-400`}>$MEG</h1>




                    <div className=" hidden lg:flex">
                        <Link href={'/#home'} className=" mb-4 w-fit bg-white text-blue-500 flex items-center justify-center hover:border-b-2 hover:border-blue-400 duration-500 mx-4">Home</Link>
                        <Link href={'/#about'} className=" mb-4 w-fit bg-white text-blue-500 flex items-center justify-center hover:border-b-2 hover:border-blue-400 duration-500 mx-4">About</Link>
                        <Link href={'/#roadmap'} className=" mb-4 w-fit bg-white text-blue-500 flex items-center justify-center hover:border-b-2 hover:border-blue-400 duration-500 mx-4">Roadmap</Link>
                        <Link target="blank" href={'https://t.me/+fe1X5-6rmPUxOGVh'} className=" p-3 bg-white rounded-full text-blue-500 flex items-center justify-center hover:border-2 hover:border-blue-500 hover:bg-transparent duration-500 mx-4"><TelegramIcon /></Link>
                        <Link target="blank" href={'https://x.com/apexaisui?s=21&t=QUY7gl9YGenwPN8yw_vP6A'} className=" p-3 bg-white rounded-full text-blue-500 flex items-center justify-center hover:border-2 hover:border-blue-500 hover:bg-transparent duration-500 mx-4"><XIcon /></Link>
                        <Link target="blank" href={'https://x.com/megaldonsui?igsh=NzdzYXRrcnBjMm5p&utm_source=qr'} className=" p-3 bg-white rounded-full text-blue-500 flex items-center justify-center hover:border-2 hover:border-blue-500 hover:bg-transparent duration-500 mx-4"><Instagram /></Link>
                    </div>

                    <div className=' lg:hidden'>
                        {/* Button to toggle the sidebar */}
                        <button
                            onClick={toggleSidebar}
                            style={{ margin: '0px', padding: '10px', cursor: 'pointer' }}
                        >
                            {isOpen ? <CloseOutlinedIcon className='text-3xl text-blue-400' /> : <MenuOutlinedIcon className=' height-[400px] text-3xl text-blue-500' />}
                        </button>

                        {/* Sidebar motion component */}
                        <motion.div
                            initial={{ width: 0 }} // Initial width of sidebar when closed
                            animate={{ width: isOpen ? 300 : 0 }} // Animate to width 300px when open
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 20,
                                duration: 0.5,
                            }} // Smooth transition
                            style={{
                                height: "100vh",
                                backgroundColor: "",
                                color: "black",
                                overflow: "hidden",
                                position: "fixed",
                                top: 0,
                                left: 0,
                            }}
                            className=' shadow-md shadow-black bg-white text-blue-500'
                        >
                            {/* Sidebar content */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isOpen ? 1 : 0 }}
                                transition={{ delay: 0.2 }}
                                style={{ padding: "20px" }}
                            >
                                <div className=' flex w-full items-center justify-between mb-8'>
                                    <h3 className=' text-xl uppercase text-blue-500 font-bold'>$MEG</h3>
                                    <button
                                        onClick={toggleSidebar}
                                        style={{ margin: '0px', padding: '10px', cursor: 'pointer' }}
                                    >
                                        {isOpen ? <CloseOutlinedIcon className='text-3xl text-blue-400' /> : " "}
                                    </button>
                                </div>
                                <ul style={{ listStyle: "none", padding: 0 }}>
                                    <Link onClick={toggleSidebar} href={'/#home'} className=" p-3 mb-4 w-fit bg-white rounded-full text-blue-500 flex items-center justify-center hover:border-2 hover:border-blue-400 hover:bg-blue-400 hover:text-white duration-500 mx-4">Home</Link>
                                    <Link onClick={toggleSidebar} href={'/#about'} className=" p-3 mb-4 w-fit bg-white rounded-full text-blue-500 flex items-center justify-center hover:border-2 hover:border-blue-400 hover:bg-blue-400 hover:text-white duration-500 mx-4">About</Link>
                                    <Link onClick={toggleSidebar} href={'/#home'} className=" p-3 mb-4 w-fit bg-white rounded-full text-blue-500 flex items-center justify-center hover:border-2 hover:border-blue-400 hover:bg-blue-400 hover:text-white duration-500 mx-4">Roadmap</Link>
                                    <div className="flex items-center justify-between">
                                        <Link target="blank" href={'https://t.me/+fe1X5-6rmPUxOGVh'} className=" p-3 bg-white rounded-full text-blue-500 flex items-center justify-center hover:border-2 hover:border-blue-500 hover:bg-transparent duration-500 mx-4"><TelegramIcon /></Link>
                                        <Link target="blank" href={'https://x.com/apexaisui?s=21&t=QUY7gl9YGenwPN8yw_vP6A'} className=" p-3 bg-white rounded-full text-blue-500 flex items-center justify-center hover:border-2 hover:border-blue-500 hover:bg-transparent duration-500 mx-4"><XIcon /></Link>
                                        <Link target="blank" href={'https://x.com/megaldonsui?igsh=NzdzYXRrcnBjMm5p&utm_source=qr'} className=" p-3 bg-white rounded-full text-blue-500 flex items-center justify-center hover:border-2 hover:border-blue-500 hover:bg-transparent duration-500 mx-4"><Instagram /></Link>
                                    </div>
                                </ul>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </FadeInFromTop>
        </div >
    )
}

export default Navbar