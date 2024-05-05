"use state";

import { useState, useEffect } from 'react';
import Image from "next/image";
import { FaPlay } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { set } from 'react-hook-form';

const Slider = ({ interval, handleClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animateImage, setAnimateImage] = useState(false);
  const images = ['/vacationImage/grad-college.jpg', '/vacationImage/Vacation.avif', '/vacationImage/retirement1.webp' ]
  let img = images[currentSlide];
  
  // animate the image
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
      setAnimateImage(true);
    }, interval);

    return () => clearInterval(intervalId);
  }, [interval, images.length]);


  
  console.log(`${img}`)

  
  return (
    <div className={` overflow-x-hidden relative slider-container w-full h-[350px] md:h-[650px] xl:h-screen`} >
      <AnimatePresence wait>
        <motion.img
          key={img}
          initial={{ x: '100%' }} // Start off-screen to the right
          animate={{ x: 0 }} // Animate to the left
          transition={{ duration: 1, ease: 'linear' }}
          exit={{ x: '-100%' }}
          className='absolute object-cover w-full max-h-screen'
          src={img}
          alt={img}>
          
        </motion.img>
      </AnimatePresence>
      
      
      
      <motion.div
       className='absolute top-0 left-0 p-6  lg:left-12 translate-y-[50%] md:top-[20%] overflow-auto'
       initial={{ y: 300, opacity: 0 }}
       animate={{  y: 0, opacity: 1 }}
       transition={{ duration: 1, delay: 1 }}>
        <h1 className='text-[#fdfdfd] mb-3 text-[6vw] md:text-[4vw] lg:max-w-[830px]'>We Are More Than Financial Planners</h1>
        <p className='text-[#fdfdfd] mb-3 font-bold md:text-[2vw]'>We Are Life Planners.</p>
        <p className='text-white mb-3 md:text-[2vw] lg:text-[1.5vw] md:max-w-[800px]'>At Trilogy Financial, our Advisors coach you through your everyday financial decisions.</p>
        <button className='bg-[#007d8a] p-3 flex items-center transition-bg duration-300 ease-linear  hover:bg-[#003057]' onClick={handleClick}>
          <FaPlay className='text-green-400' /> <span className='pl-2 text-white' >GET STARTED</span>
        </button>
      </motion.div>
    </div>
  );
};

export default Slider;
