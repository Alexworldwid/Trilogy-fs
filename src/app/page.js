"use client"

import React, { useContext } from 'react';
import { handleFormContext } from './layout';
import Image from "next/image";
import Iframe from "./component/iframe";
import { FaHandshake, FaLaptop, FaPlay } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { gsap } from "gsap";
import eldersImage from "/public/vacationImage/Vacation2.avif";
import oldman from "/public/image/How to Stay Close When Grandparents Live Far Away.jpg";
import IconSlide from "./component/iconslide";
import TestSlide from "./component/textslider"
import Slider from "./component/slides";
import vacay1 from '/public/vacationImage/retirement1.webp';
import vacay2 from '/public/vacationImage/Vacation.avif';
import vacay3 from '/public/vacationImage/REtirement2.avif';
import { useEffect } from "react";






export default function Home(props) {
  const slide1 = [vacay1, vacay2, vacay3,];
  useEffect(() => {
    gsap.to('#coach', {opacity: 0.7})
  }, [])

  const handleClick = useContext(handleFormContext)


  return (
    <main className=" w-full" >
      <section id="hero" className="flex flex-row w-full h-auto">
          <Slider images={slide1} interval={5000} handleClick={handleClick} />
      </section>
      
      <section className="mt-4 flex gap-6 items-center" >
          <div className="z-30 bg-white py-8">
            <h2 className="w-[150px] text-[#740042] pl-2 text-2xl z-30">AS SEEN IN</h2>
          </div>
          <IconSlide />
      </section>

      <section id='hero1'  className="w-full flex flex-col justify-center mt-4 overflow-hidden" >
        <div id="coach" className="ml-5 my-5 bg-white w-[350px] h-[1000px] md:top-[50%] md:h-auto p-6 md:p-10 md:w-[650px]  md:ml-20">
          <h2 className="text-xl font-bold mb-3 md:mb-8 md:text-4xl">We don’t just invest, we coach.</h2>
          <p className="text-[#0c8290] mb-3 md:mb-8 text-sm md:text-lg font-semibold">Every day, with every piece of advice, we empower our clients to live wealthy.</p>
          <p className="text-sm md:text-lg font-semibold">Our clients know that they have not just one Advisor, but a team behind them because collaborative and fresh ideas are the key to giving our clients the best guidance. Our Financial Advisor teams prioritize relationships and place you at the center of everything we do – always coaching you towards your real life goals.</p>
        

        <div className="flex flex-col items-center">
          <div className="mt-2 flex flex-col items-center">
            <FaHandshake className="text-[#840b55] text-2xl md:text-5xl mb-1" />
            <h3 className="text-[#840b55] text-sm md:text-xl font-semibold">Financial Coaching</h3>
            <p className="text-sm md:text-lg font-semibold text-center">Receive one-on-one counseling from our certified Advisors to keep you on track and set you up for financial success.</p>
          </div>

          <div className="mt-2 flex flex-col items-center">
            <FaMessage className="text-[#840b55] md:text-5xl" />
            <h3 className="text-[#840b55] md:text-xl font-semibold">Personalized Plans</h3>
            <p className="md:text-lg font-semibold text-center">We compose data-driven customized plans to help you realize your specific goals and to put you on a path to financial independence.</p>
          </div>

          <div className="mt-2 md:mt-3 flex flex-col items-center">
            <FaLaptop className="text-[#840b55] md:text-5xl" />
            <h3 className="text-[#840b55] md:text-xl font-semibold">Client Portal</h3>
            <p className="md:text-lg font-semibold text-center">We give you access to your own portal where you can upload and store information, documents and see all your financial accounts in one convenient, secure platform.</p>
          </div>
        </div>
        </div>
      </section>

      <TestSlide handleClick={handleClick} />

      <section className="md:flex md:flex-row md:items-center md:justify-between gap-10">
        <div className="md:w-[1000px]">
          <Image className="md:w-[100%] md:h-[600px]" src={oldman} alt="oldman and child"  />
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-xl text-[#003057] font-semibold mb-4 mt-2 md:text-left md:text-3xl md:font-bold">Not sure where to start?</h4>
          <p className="flex text-center text-3xl mx-4 text-[#3095a0] hover:text-black md:text-left mb-4 cursor-pointer"><FaPlay className="mt-1 mr-3 text-green-500 hover:text-black" /> <span>Explore common financial considerations for every financial Life Stage</span> </p>
          <p className="text-center md:text-left mb-4 md:text-xl">We created an interactive Financial Life Planning Tool to help you get a better idea of your opportunities and how you can start planning your future.</p>
          <button className="text-slate-100 bg-[#00b388] mt-4 p-3 transition-bg duration-300 ease-in-out hover:bg-[#6dc2ae] hover:text-white" onClick={handleClick} >START PLANNING</button>
        </div>
      </section>

      <section className="mt-4 flex flex-col items-center">
        <div>
          <h3 className="text-[#74074b] text-center text-2xl mb-4 font-bold ">Experience the Trilogy Difference</h3>
          <p className="text-[#8bbcbd] text-center font-semibold mb-4">We believe that real financial Life Planning is progress, not perfection.</p>
        </div>


        <div className="flex flex-col items-start lg:flex-row max-w-[90%] md:gap-4">
          <div className="mb-4 md:w-[400px] lg:w-[650px]">
            <p className="font-bold mb-5 lg:text-2xl"> Financial <i>Life Planning</i>  is about actually starting — taking a few good steps in the right direction and then taking a few more.</p>
            <p className="text-xl md:w-[500px]">Life is ever-changing. We’re here to simplify the complex, untwist the tangled and coach you through every discussion, every move and every recommendation. What we do isn’t just left brain financial planning – we coach and nurture. We’re proud to be the team that helps build the life and retirement you’ve always wanted for your family and generations to come.</p>
          </div>

          <Iframe />

          
        </div>

        <div className="flex items-center w-full flex-col mt-4 mb-8">
            <button className="bg-green-400 text-center p-3 text-white transition-colors ease-out duration-500 hover:bg-green-700" onClick={handleClick}>GET STARTED</button>
          </div>
      </section>
    </main>
    
  );
}
