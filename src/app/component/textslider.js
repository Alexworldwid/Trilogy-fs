"use client";

import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function Textslider({ handleClick }) {
    const textArray = ['Can i afford to buy a house?', 'Should i rollover my 401(k)?', 'How do i select a Financial Advisor?', 'How do i take my social security number?', 'Am i on track with my Financial Goals', 'Whats the best way to save for College?', 'How much do i need to retire?', "i'm just getting started, where do i begin?", 'What type of life insurance do i need' ]
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % textArray.length);
        }, 2500);

        return () => clearInterval(intervalId);
    }, [textArray.length]);


    return (
        <section className='flex flex-col items-center bg-[#001d3b] p-7'>
            <FaPlay className='text-[#8dc63f] text-4xl mb-4' />
            <h3 className='text-white text-center font-bold text-2xl mb-3 lg:text-[2vw]'>We tackle common life questions.</h3>
            <p className='text-white mb-4 md:text-[1.3vw]'>{textArray[currentSlide]}</p>
            <button className='bg-[rgb(170,221,98)] p-3 text-white transition-bg duration-300 ease-out hover:bg-[rgb(144,179,95)]' onClick={handleClick}>GET ANSWERS</button>
        </section>
    );
};

