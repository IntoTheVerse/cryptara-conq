import React, { useEffect } from 'react';
import '../index.css'
import Carousel from './Carousel.js'

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
        <div className='dungeon flex overflow-hidden cursor-sword flex-row'>    
            <div className='dungeon flex-row relative top-0 left-0 h-dvh bg-cover bg-dungeonScene font-pixeled text-white-lace relative z-0'>
                <div className='dungeon droplets flex relative top-0 z-1 h-full w-dvw'>
                    <div className='droplets inset-x-0 top-1 h-lvh'>
                        <div className='absolute drip1'></div>
                        <div className='absolute drip2'></div>
                        <div className='absolute drip3'></div>
                        <div className='absolute drip4'></div>
                    </div>
                </div>
                <div className='shrine flex-col-reverse justify-items-center relative bottom-0 left-0 h-1/2 w-1/2 float-left'>
                </div>
                <div className='shrine flex justify-around float-left absolute bottom-0 left-0 h-1/2 w-1/2 z-2 xs:hidden xl:flex'>
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