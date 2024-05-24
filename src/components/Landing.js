import React, { useEffect } from 'react';
import '../index.css'
import { Tooltip, initTWE } from "tw-elements";


const Landing = () => {
    useEffect(() => {
        initTWE({ Tooltip });
      }, []);


    return (
        <div className='dungeon overflow-hidden cursor-sword flex-row'>
            <div className='dungeon flex-row relative top-0 left-0 h-dvh bg-cover bg-dungeonScene font-pixeled text-white-lace relative z-0'>
                <div className='shrine flex-col-reverse justify-items-center relative bottom-0 left-0 h-1/2 w-1/2 z-1'>
                </div>
                <div className='shrine flex justify-around float-left relative bottom-0 left-0 h-1/2 w-1/2 z-1'>
                    <div className='flex flex-row justify-center items-center bg-shrine bg-contain bg-no-repeat h-3/4 w-1/2 bottom-0 relative z-2' />
                </div>
                <div className='droplets relative top-0 z-15 h-full w-lvw'>
                    <div className='droplets inset-x-0 top-1 h-lvh'>
                        <div className='absolute drip1'></div>
                        <div className='absolute drip2'></div>
                        <div className='absolute drip3'></div>
                        <div className='absolute drip4'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;