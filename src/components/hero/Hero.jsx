import React, { useEffect, useState } from 'react'
import video from './video.mp4'






const Hero = () => {

    const [heading, setHeading] = useState('Make A difference'); // Initial text
    const [currentIndex, setCurrentIndex] = useState(0);
    const headings = [ // Your array of headings
      'Make A difference',
      'Save Environment',
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
          const nextIndex = (currentIndex + 1) % headings.length;
          setCurrentIndex(nextIndex);
          setHeading(headings[nextIndex]);
        }, 3000); // Change delay as desired (in milliseconds)
    
        return () => clearInterval(intervalId); // Cleanup function for interval
      }, [headings, currentIndex]); // Dependency array

  
  return (
    <div className=" w-screen h-screen font-sans">
        
    <video src={video} className='w-full h-full object-cover brightness-[60%] transition duration-500' autoPlay muted loop></video>
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <p className='text-white mt-8 mb-5 drop-shadow-x text-7xl font-bold'>{heading}</p>
        <div className='flex justify-center mt-4 gap-3'>
            {/* <button>Donate</button> */}
        </div>
    </div>
</div>
  )
}

export default Hero