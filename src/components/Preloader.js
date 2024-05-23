import React from 'react';
import skull from '../assets/logo.png';

const Preloader = () => {
    return(
        <div className='relative w-screen h-screen flex flex-col justify-center items-center'>
            <div className='font-pixeled xs:text-2xl lg:text-6xl xl:text-7xl mobile-landscape:text-4xl text-white-lace absolute text-shadow-pixel-neon tracking-[8px] xs:top-[35vmax] lg:top-[30vmax] xl:top-[25vmin] mobile-landscape:top-[20vmin]' data-text='U'>
                Taking &nbsp;
                <span className='animate-flicker-slow'>
                you &nbsp;
                </span>
                to &nbsp;
                <span className='animate-flicker-fast'>
                Cryptara &nbsp;
                {/* </span>
                NG
                <span className='animate-flicker-slow'>
                ... */}
                </span>
            </div>
            <div className='bg-brick bg-cover justify-start rounded-full items-center relative flex xs:top-[5vmax] xl:top-[12vmin] mobile-landscape:top-[18vmin] px-[5px] xs:h-[4vmax] xl:h-[3.75vmax] xs:w-[30vmax] xl:w-[29vmax] mobile-landscape:w-[40vmax]'>
                <div className='animate-progress-bar box-shadow-blue bg-lava bg-cover rounded-full h-[2.9vmax] w-[29vmax]'>
                    <img className='xs:animate-running-hustler-xs xl:animate-running-hustler-xl lg:animate-running-hustler-lg mobile-landscape:animate-running-hustler-mobile-landscape xs:h-[5vmax] xl:h-[2.9vmax]' src={skull} alt='Hoof Hustler' />
                </div>
            </div>
        </div>
    );
};

export default Preloader;