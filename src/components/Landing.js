import React, { useEffect } from 'react';
import '../index.css'
import Carousel from './Carousel.js'
import Eclipse from '../assets/eclipse.png'
import ITV from '../assets/itv.png'


const slides = [
    "https://i.ibb.co/ZMJvCgS/scietist2.gif",
    "https://i.ibb.co/7ybFJSf/steampunk2.gif",
    "https://i.ibb.co/Snk95LY/thief2.gif"
]

// const names = [
//     "Dr. Neutron Spark",
//     "Gearlock",
//     "Shadowstrike"
// ]

const Landing = () => {
    return (
        <div className='dungeon flex-1 overflow-hidden cursor-sword flex-row font-pixeled relative'>    
            <div className='dungeon flex-row relative top-0 left-0 h-dvh bg-cover lg:bg-dungeonScene xs:bg-mobile font-pixeled text-white-lace relative z-0'>
                <div className='dungeon droplets flex relative top-0 z-3 h-full w-dvw'>
                    <div className='droplets inset-x-0 top-1 h-lvh'>
                        <div className='absolute drip1'></div>
                        <div className='absolute drip2'></div>
                        <div className='absolute drip3'></div>
                        <div className='absolute drip4'></div>
                    </div>
                </div>
                {/* <div className='shrine flex-col-reverse justify-items-center relative bottom-0 left-0 h-1/2 w-1/2 float-left'>
                </div> */}
                <div className='xs:hidden sm:hidden md:hidden lg:flex shrine flex-1 justify-around float-left absolute bottom-0 left-0 h-1/2 w-1/2 z-2'>
                    <div className='flex flex-row justify-center items-center bg-shrine bg-contain bg-no-repeat h-3/4 w-1/2 bottom-0 relative z-2'>
                        <div className='max-w-lg flex flex-row justify-center items-center object-contain z-2 size-full h-full w-1/2 px-6'>
                            <Carousel className="z-2 h-3/4" autoSlide={true}>
                                {slides.map((s) => (
                                    <img src={s} />
                                ))}
                            </Carousel>
                        </div>  
                    </div>
                </div>
                {/* <div className='flex lg-flex-row xs:flex-col'> */}
                <div className='xs:hidden sm:hidden md:hidden lg:flex w-[50vw] h-[50vh] absolute flex-col justify-center items-center bg-transparent z-2 top-0 left-0'>
                    <div className='flex flex-col space-y-2 m-auto text-white-lace w-3/4 h-full z-2 justify-center items-center align-middle'>
                        <div className='bg-logo bg-contain bg-no-repeat p-3 h-1/4 w-full z-2 mt-60'></div>
                        <div className='font-pixeled mt-0 text-white-lace text-[0.8rem] w-full z-2 rounded-full'><p><span className='inline-block align-middle'>An epic 2D survival RPG coming soon on Eclipse! &nbsp;<img className='bg-slate-950 rounded-full w-10 h-10 self-center inline-block align-middle' src={Eclipse}/></span></p></div>
                    </div>
                </div>
                <div className='lg:flex lg:w-[50vw] xs:w-screen h-screen absolute flex-col justify-center items-center z-2 top-0 lg:right-0'>
                    <div className='flex flex-col justify-center items-center lg:space-y-4 xs:space-y-2 lg:mt-[20vh] xs:mt-[12vh] text-white-lace xs:border-amber-400 xs:border-4 lg:border-none bg-zinc-900/75 rounded-lg lg:w-1/2 lg:h-1/2 xs:w-3/4 xs:h-1/2 xs:mx-auto z-2 justify-center items-center align-middle'>
                        <div className='lg:hidden xl:hidden flex flex-col space-y-2 mx-[0.6rem] mt-1 text-white-lace w-3/4 h-3/4 z-2 justify-center items-center'>
                            <div className='bg-logo bg-contain bg-center bg-no-repeat h-3/4 w-full z-2 mt-1 mx-auto items-center px-auto align-middle'></div>
                            <div className='font-pixeled mt-0 text-white-lace text-center text-[0.6rem] w-full mx-1 z-2 rounded-full'><p><span className='inline-block align-middle'>An epic 2D survival RPG coming soon on Eclipse! &nbsp;<img className='bg-slate-950 rounded-full w-5 h-5 self-center inline-block align-middle' src={Eclipse}/></span></p></div>
                        </div>
                        <div className='font-pixeled lg:text-xs xs:text-[0.4rem] xs:text-center lg:mt-2 xs:mt-1 xs:mb-1 text-white-lace lg:w-3/4 xs:w-3/4 xs:h-1/4 z-2 xs:mx-auto'><p><span className='inline-block align-middle'>Built by IntoTheVerse Inc. &nbsp;<img className='xs:w-5 xs:h-5 lg:w-10 lg:h-10 self-center inline-block align-middle' src={ITV}/></span></p></div>
                            <a className='bg-twitter bg-contain bg-no-repeat p-3 z-2 lg:h-1/4 lg:w-1/2 xs:w-48 xs:h-24 xs:ml-[15px] xs:align-middle xs:flex xs:items-center xs:justify-center' href="https://x.com/CryptaraConq"><div></div></a>
                            <a className='bg-whitepaper bg-contain bg-no-repeat p-3 z-2 lg:h-1/4 lg:w-1/2 xs:w-48 xs:h-24 xs:ml-[15px] xs:align-middle xs:flex xs:items-center xs:justify-center' href="https://t.me/IntoTheVerse"><div></div></a>
                            <a className='bg-discord bg-contain bg-no-repeat p-3 z-2 lg:h-1/4 lg:w-1/2 xs:w-48 xs:h-24 xs:ml-[15px] xs:align-middle xs:flex xs:items-center xs:justify-center' href="https://discord.gg/w94EVQRPRf"><div></div></a>
                            <a href="https://rarible.com/" className='lg:hidden xl:hidden xs:bg-rarible xs:bg-contain xs:bg-no-repeat xs:p-3 xs:z-2 xs:h-1/4 xs:w-3/4'><div></div></a>
                        </div>
                    <a href="https://rarible.com/" className='bg-rarible bg-contain bg-no-repeat p-3 z-2 h-1/4 w-3/4'><div></div></a>
                </div>
                {/* </div> */}
                <div className='lg:hidden xl:hidden mx-[20vw] shrine flex-1 absolute bottom-0 inset-x-0 h-64 w-screen item-center justify-center items-center w-full z-2'>
                    <div className='flex flex-row justify-center items-center bg-shrine bg-contain bg-no-repeat h-3/4 w-1/2 bottom-0 relative z-2'>
                        <div className='max-w-lg flex flex-row justify-center items-center object-contain z-2 size-full h-full w-1/2 px-6'>
                            <Carousel className="z-2 h-3/4" autoSlide={true}>
                                {slides.map((s) => (
                                    <img src={s} />
                                ))}
                            </Carousel>
                        </div>  
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Landing;