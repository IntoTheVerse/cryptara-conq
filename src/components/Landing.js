import React, { useEffect } from 'react';
import '../index.css'


const Landing = () => {


    return (
        <div className='dungeon overflow-hidden cursor-sword flex-row'>
            <div className='dungeon relative top-0 left-0 h-lvh bg-cover bg-dungeonScene font-pixeled text-white-lace relative z-0'>
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