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
import { useEffect } from "react";



export default function Home() {

  useEffect(() => {
    gsap.to('#coach', {opacity: 0.7})
  }, [])

  const handleClick = useContext(handleFormContext)


  return (
    <main className="w-full overflow-x-hidden " >
      <Slider interval={5000} handleClick={handleClick} />
      
      <section className="grid w-full grid-cols-3 mt-4 overflow-hidden md:grid-cols-9" >
          <div className="z-30 col-span-1 col-end-2 py-8 bg-white md:col-start-1 md:col-end-3 xl:col-end-1">
            <h2 className="w-[150px] text-[#740042] pl-2 text-2xl z-30">AS SEEN IN</h2>
          </div>
          <IconSlide />
      </section>

      <section id='hero1'  className="flex flex-col items-start justify-center w-full mt-4 overflow-hidden" >
        <div id="coach" className="p-6 bg-white max-w-[500px] lg:ml-12">
          <h2 className="mb-3 text-xl font-bold md:mb-8 ">We don’t just invest, we coach.</h2>
          <p className="text-[#0c8290] mb-3 md:mb-8 text-sm lg:text-lg font-semibold">Every day, with every piece of advice, we empower our clients to live wealthy.</p>
          <p className="text-sm font-semibold ">Our clients know that they have not just one Advisor, but a team behind them because collaborative and fresh ideas are the key to giving our clients the best guidance. Our Financial Advisor teams prioritize relationships and place you at the center of everything we do – always coaching you towards your real life goals.</p>
        

        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center mt-2">
            <FaHandshake className="text-[#840b55] text-2xl md:text-5xl mb-1" />
            <h3 className="text-[#840b55] text-sm md:text-xl font-semibold">Financial Coaching</h3>
            <p className="text-sm font-semibold text-center md:text-lg">Receive one-on-one counseling from our certified Advisors to keep you on track and set you up for financial success.</p>
          </div>

          <div className="flex flex-col items-center mt-2">
            <FaMessage className="text-[#840b55] md:text-5xl" />
            <h3 className="text-[#840b55] md:text-xl font-semibold">Personalized Plans</h3>
            <p className="font-semibold text-center md:text-lg">We compose data-driven customized plans to help you realize your specific goals and to put you on a path to financial independence.</p>
          </div>

          <div className="flex flex-col items-center mt-2 md:mt-3">
            <FaLaptop className="text-[#840b55] md:text-5xl" />
            <h3 className="text-[#840b55] md:text-xl font-semibold">Client Portal</h3>
            <p className="font-semibold text-center md:text-lg">We give you access to your own portal where you can upload and store information, documents and see all your financial accounts in one convenient, secure platform.</p>
          </div>
        </div>
        </div>
      </section>

      <TestSlide handleClick={handleClick} />

      <section className="items-center gap-10 md:grid md:grid-cols-2">
        <div className="">
          <Image className="w-[100%] max-h-[700px]" src={oldman} alt="oldman and child"  />
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-xl text-[#003057] font-semibold mb-4 mt-2 md:text-left md:text-3xl md:font-bold">Not sure where to start?</h4>
          <p className="flex text-center text-3xl mx-4 text-[#3095a0] hover:text-black md:text-left mb-4 cursor-pointer"><FaPlay className="mt-1 mr-3 text-green-500 hover:text-black" /> <span>Explore common financial considerations for every financial Life Stage</span> </p>
          <p className="mb-4 text-center md:text-left md:text-xl">We created an interactive Financial Life Planning Tool to help you get a better idea of your opportunities and how you can start planning your future.</p>
          <button className="text-slate-100 bg-[#00b388] mt-4 p-3 transition-bg duration-300 ease-in-out hover:bg-[#6dc2ae] hover:text-white" onClick={handleClick} >START PLANNING</button>
        </div>
      </section>

      <section className="flex flex-col items-center w-full mt-4 ">
        <div>
          <h3 className="text-[#74074b] text-center text-2xl mb-4 font-bold ">Experience the Trilogy Difference</h3>
          <p className="text-[#8bbcbd] text-center font-semibold mb-4">We believe that real financial Life Planning is progress, not perfection.</p>
        </div>


        <div className="flex flex-col items-center w-full p-4 lg:grid lg:grid-cols-2 max-w-[1440px]">
          <div className="mb-4">
            <p className="mb-5 font-bold lg:text-2xl"> Financial <i>Life Planning</i>  is about actually starting — taking a few good steps in the right direction and then taking a few more.</p>
            <p className="text-xl md:w-[500px]">Life is ever-changing. We’re here to simplify the complex, untwist the tangled and coach you through every discussion, every move and every recommendation. What we do isn’t just left brain financial planning – we coach and nurture. We’re proud to be the team that helps build the life and retirement you’ve always wanted for your family and generations to come.</p>
          </div>

          <Iframe />

          
        </div>

        <div className="flex flex-col items-center w-full mt-4 mb-8">
            <button className="p-3 text-center text-white transition-colors duration-500 ease-out bg-green-400 hover:bg-green-700" onClick={handleClick}>GET STARTED</button>
          </div>
      </section>
    </main>
    
  );
}
