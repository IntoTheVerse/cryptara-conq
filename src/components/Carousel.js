import { useState, useEffect } from 'react'
import LArrow from '../assets/Larrowheads.png'
import RArrow from '../assets/Rarrowheads.png'
import '../index.css'

export default function Carousel({ 
    children: slides, 
    autoSlide=false, 
    autoSlideInterval=8000
}) {
    const [curr, setCurr] = useState(0);
    const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
    const next = () => setCurr((curr) => (curr === slides.length - 1 ?  0 : curr + 1))
    
    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval)
    }, [])
    
    return (
        <div className="overflow-hidden relative">
            <div className="flex transition-transform ease-out duration-500 bottom-0" style={{transform: `translateX(-${curr*100}%)` }}>{slides}</div>
            <div className='absolute flex inset-x-0 bottom-0 items-center justify-between p-2'>
                <button onClick={prev} className='lrbutton'>
                    <img src={LArrow} className='p-1 rounded-full shadow bg-white hover:bg-white-20'/>
                </button>
                <button onClick={next} className='lrbutton'>
                    <img src={RArrow} className='p-1 rounded-full shadow bg-white hover:bg-white-20'/>
                </button>
            </div>
            <div className='absolute justify-center items-center bottom-4 right-0 left-0'>
                <div className='flex items-center justify-center gap-2'>
                   {slides.map((_, i) => (
                    <div className={`transition-all w-3 h-3 bg-white rounded-full
                    ${curr === i ? "p-2" : "bg-opacity-50"}
                    `} />
                   ))} 
                </div>
            </div>
            {/* <div className="flex transition-transform ease-out duration-500" style={{transform: `translateX(-${curr*100}%)` }}>{names}</div> */}
        </div>
    )
}