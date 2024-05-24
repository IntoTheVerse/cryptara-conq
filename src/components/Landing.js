import React, { useEffect } from 'react';
import '../index.css'
import Carousel from './Carousel.js'
import Eclipse from '../assets/eclipse.png'

const slides = [
    "https://i.ibb.co/ZMJvCgS/scietist2.gif",
    "https://i.ibb.co/7ybFJSf/steampunk2.gif",
    "https://i.ibb.co/Snk95LY/thief2.gif"
]

const names = [
    "Dr. Neutron Spark",
    "Gearlock",
    "Shadowstrike"
]

const Landing = () => {
    useEffect(() => {

    }, []);


    return (
        <div className='dungeon flex-1 overflow-hidden cursor-sword flex-row font-pixeled'>    
            <div className='dungeon flex-row relative top-0 left-0 h-dvh bg-cover bg-dungeonScene font-pixeled text-white-lace relative z-0'>
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
                <div className='shrine flex-1 justify-around float-left absolute bottom-0 left-0 h-1/2 w-1/2 z-2 xs:hidden xl:flex'>
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
                <div className='flex w-[50vw] h-[60vh] absolute flex-col jusify-center items-center bg-transparent z-2 top-0 left-0'>
                    <div className='flex flex-col space-y-4 m-auto text-white-lace w-3/4 h-full z-2 jusify-center items-center align-middle'>
                        <div className='bg-logo bg-contain bg-no-repeat p-3 h-1/4 w-full z-2 mt-80'></div>
                        <div className='font-pixeled mt-0 text-white-lace w-full z-2 rounded-full'><p><span className='inline-flex items-baseline'>Epic 2D survival RPG coming soon on Eclipse! &nbsp;<img className='bg-slate-950 rounded-full w-10 h-10 self-center' src={Eclipse}/></span></p></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;