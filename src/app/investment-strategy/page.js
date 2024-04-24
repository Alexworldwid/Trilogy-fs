import React from 'react';
import Head from 'next/head';
import { FaPlay, FaSearchDollar } from 'react-icons/fa';
import { GiWhistle } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { FaShuffle } from "react-icons/fa6";
import { motion, AnimatePresence } from 'framer-motion';

const InvestmentStrategy = () => {
    return (
        <>
          <Head>
            <title>Investment Strategy</title>
          </Head>

          <main className='w-full' >
            <section id='hero3' className='flex flex-col justify-center p-4'>
                <h1 className='text-center mb-6 text-Black font-bold text-4xl mt-3'>INVESTMENT STRATEGIES</h1>
                <div className='bg-[rgba(255,255,255,0.7)] p-4 flex flex-col items-center '
                >
                    <h2 className='text-3xl text-center font-semibold mb-4'>Developing An Investment Strategy To Pursue Your Goals</h2>
                    <p className='mb-4 text-center text-[#007d8a] text-xl'>We’re in this together – we win when you win.</p>
                    <p className='text-center md:text-xl max-w-[1200px]'>We’re igniting change in the industry. We have no minimums, no expectations and are committed to customized investing. Whether you’re a seasoned investor or just starting out, we will help you build a personalized investment plan for your unique risk tolerance and coach you through your wealth accumulation journey.</p>
                </div>
            </section>

            <section className='flex flex-col md:flex-row p-6  gap-x-4 md:justify-center'>
                <div className='mb-4 flex flex-col items-center max-w-[600px]'>
                    <h2 className='text-4xl font-semibold mb-4'>Our Investment Strategies & Services:</h2>
                    <p className='text-[#007d8a] font-semibold mb-4'>Each Trilogy Financial Advisor will be your coach or sounding board on your wealth accumulation journey.</p>
                    <ul className='grid grid-cols-2 gap-x-4 gap-y-2'>
                        <li className='flex items-center'><FaPlay className='text-green-300 mr-4' /> Investment Planning Strategies</li>
                        <li className='flex items-center'><FaPlay className='text-green-300 mr-4'  /> Investment Types</li>
                        <li className='flex items-center'><FaPlay className='text-green-300 mr-4' /> Investment Techniques</li>
                        <li className='flex items-center'><FaPlay className='text-green-300 mr-4'/> Knowing Your Risk Profile</li>
                    </ul>
                </div>
                <div className='bg-[#007d8a] md:w-[500px] px-6 py-10 text-white'>
                    <h2 className='font-bold mb-5 text-2xl'>We believe investing is about more than positive returns.</h2>
                    <p className='md:text-xl'>It’s a tool to give you financial freedom to live the life you want to live. We will coach you through building out the investment portfolio that aligns with your unique goals, and empower you to make the meaningful decisions to pursue your life dreams and <i>Life Plan</i>.</p>
                </div>
            </section>

            <section className='bg-[#efefef] flex flex-col items-center py-10 px-6' >
                <h3 className='text-3xl font-bold mb-4'>Every Investment Plan is Unique</h3>
                <p className='text-[#007d8a] text-xl md:text-2xl'>Let us help create the one that is right for you.</p>
                <p className='md:text-xl max-w-[1200px] text-center mt-1'>Because one size does not fit all, we utilize a number of investment philosophies and techniques so we can be your investment <span className='text-red-700'>fiduciary</span> and make sure you know all of your options. Whether you’re directing your investments on your own, or would like a personal coach to help you feel confident in your decisions, your Trilogy Financial Advisor can play a dynamic role to help you pursue your financial dreams.</p>
                <ul className='mt-6 grid grid-cols-2 gap-4 md:grid-cols-4 max-w-[1200px]'>
                    <li className='flex flex-col items-center text-center'><GiWhistle className='text-7xl text-[#007d8a] transition-all duration-300 ease-in-out hover:scale-125 mb-3' />We coach 20,000 households</li>
                    <li className='flex flex-col items-center text-center'><IoIosPeople className='text-7xl text-[#007d8a] transition-all duration-300 ease-in-out hover:scale-125  mb-3' />25+ Advisors with 25 years of investment management experience</li>
                    <li className='flex flex-col items-center text-center'><FaSearchDollar className='text-7xl text-[#007d8a] transition-all duration-300 ease-in-out hover:scale-125 mb-3' />We serve over $2 Billion in brokerage & advisory assets</li>
                    <li className='flex flex-col items-center text-center'><FaShuffle className='text-7xl text-[#007d8a] transition-all duration-300 ease-in-out hover:scale-125 mb-3' />Portfolio structures available for varying risk appetites</li>
                </ul>
            </section>

            <section className='flex flex-col items-center p-6  gap-x-4 md:justify-center'>
                <h3 className='text-center text-4xl font-bold mb-4'>Sound Investment Advice & Coaching</h3>
                <p className='text-[#007d8a] text-xl font-semibold text-center mb-4'>We are passionate about being an advocate for our clients, every step of the way.</p>
                <p className='text-center md:text-xl max-w-[1200px] mb-4'>Your Trilogy Financial Advisor is committed to coaching you through a plan tailored to your investment and risk appetite, desired asset allocation and diversification, and what types of investment vehicles are best suited for your goals. We will empower you to make your own decision or coach you through your journey.</p>
                
                <div className='flex flex-col '>
                    <h4 className='text-center text-2xl font-semibold mb-4'>TYPES OF INVESTMENT VEHICLES:</h4>
                    <ul className='grid grid-cols-2 gap-4 mb-4'>
                        <li className='flex items-center'><FaPlay className='text-green-300 mr-4' />Alternatives</li>
                        <li className='flex items-center'><FaPlay className='text-green-300 mr-4' />Individual Stocks</li>
                        <li className='flex items-center'><FaPlay className='text-green-300 mr-4' />Separately Managed Accponts</li>
                        <li className='flex items-center'><FaPlay className='text-green-300 mr-4' />ETFs</li>
                        <li className='flex items-center'><FaPlay className='text-green-300 mr-4' />Mutual Funds</li>
                        <li className='flex items-center'><FaPlay className='text-green-300 mr-4' />UITs</li>
                        <li className='flex items-center'><FaPlay className='text-green-300 mr-4' />Fixed Annuities</li>
                        <li className='flex items-center'><FaPlay className='text-green-300 mr-4' />REITs</li>
                        <li className='flex items-center'><FaPlay className='text-green-300 mr-4' />Variable Annuities</li>
                        <li className='flex items-center'><FaPlay className='text-green-300 mr-4' />Individual Bonds</li>
                    </ul>
                    <p className='text-sm max-w-[1200px] text-center mt-1'>*All investing involves risk including loss of principal. No strategy assures success or protects against loss. There is no guarantee that a diversified portfolio will enhance overall returns or outperform a non diversified portfolio. Diversification does not protect against market risk.
                             Asset allocation does not ensure a profit or protect against a loss.</p>
                </div>
            
            </section>
          </main>
        </>
    );
};

export default InvestmentStrategy;