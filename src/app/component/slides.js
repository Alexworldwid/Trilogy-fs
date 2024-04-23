"use state";

import { useState, useEffect } from 'react';
import Image from "next/image";
import { FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Slider = ({ images, interval, handleClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // animate the image
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [currentSlide, images.length, interval]);

  
  return (
    <div
     className=" relative slider-container w-full h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] md:mb" >
      <Image src={images[currentSlide]} className='w-full h-[400px]  opacity-90' objectFit='cover' layout='fill' alt={images[currentSlide]} />
      <motion.div
       className='absolute top-[10%] lg:top-[8%] left-[3%] md:left-[12%] lg:left-[10%] xl:left-[6%]'
       initial={{ y: 300 }}
       animate={{  y: 0 }}>
        <h1 className='text-[#fdfdfd] mb-3 text-[6vw] md:text-[4vw] lg:max-w-[830px]'>We Are More Than Financial Planners</h1>
        <p className='text-[#fdfdfd] mb-3 font-bold md:text-[2vw]'>We Are Life Planners.</p>
        <p className='text-white mb-3 md:text-[2vw] lg:text-[1.5vw] md:max-w-[800px]'>At Trilogy Financial, our Advisors coach you through your everyday financial decisions.</p>
        <button className='bg-[#007d8a] p-3 flex items-center transition-bg duration-300 ease-linear  hover:bg-[#003057]' onClick={handleClick}>
          <FaPlay className='text-green-400' /> <span className='text-white pl-2' >GET STARTED</span>
        </button>
      </motion.div>
    </div>
  );
};

export default Slider;
