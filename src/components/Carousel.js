import { useState, useEffect, useCallback } from 'react'
import '../index.css'

export default function Carousel({ 
    children: slides, 
    autoSlide=false, 
    autoSlideInterval=8000
}) {
    const [curr, setCurr] = useState(0);
    const next = useCallback(() => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1)), [slides, setCurr]);
    
    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval)
    }, [autoSlide, autoSlideInterval, next])
    
    return (
        <div className="overflow-hidden relative">
            <div className="flex transition-transform ease-out duration-500 bottom-0" style={{transform: `translateX(-${curr*100}%)` }}>{slides}</div>
            <div className='absolute justify-center items-center bottom-0 right-0 left-0'></div>
        </div>
    )
}