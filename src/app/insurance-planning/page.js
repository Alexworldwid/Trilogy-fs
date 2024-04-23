import React from 'react';
import Head from 'next/head';
import { FaPlay, FaHome, FaExclamationTriangle, FaHands, FaBoxOpen, FaUserCheck, FaLock } from 'react-icons/fa';
import { TbMessageCircleDollar } from "react-icons/tb";
import { IoSyncCircleSharp } from "react-icons/io5";
import { motion } from 'framer-motion';



const InsurancePlanning = () => {
    return (
        <>
            <Head >
                <title>Insurance Service</title>
            </Head>

            <main className='w-full flex flex-col items-center'>
                 <section id='hero5' className='flex flex-col justify-center p-4 items-center'>
                     <h1 className='text-slate-500 font-semibold text-center text-4xl mb-4'>INSURANCE SERVICES</h1>
                     <div className='bg-white p-6 max-w-[1200px]' >
                        <h2 className='text-3xl text-center font-semibold mb-3 '>A Team Dedicated To Helping You Navigate Insurance</h2>
                        <p className='text-[#007d8a] text-xl text-center mb-3 font-semibold'>We’re building foundations and protecting futures.</p>
                        <p className='text-center text-xl '>You build wealth not to be wealthy — you earn it, invest it and grow it — to live the life you dream. Our Financial Advisors are here to help with all your insurance needs.</p>
                     </div>
                 </section>

                 <section className='grid grid-cols-1 md:grid-cols-2 md:gap-x-6 p-4 max-w-[1200px]'>
                    <div className=''>
                        <h3 className='text-3xl font-semibold mb-3 md:text-4xl'>Our Insurance Services:</h3>
                        <p className='text-[#007d8a] text-xl mb-4 font-semibold'>Each Trilogy Financial Advisor is invested in empowering you to leave the legacy you always dreamed.</p>
                        <ul className='grid grid-cols-2 gap-y-4 mb-4 md:text-xl'>
                            <li className='flex items-center gap-4'><FaPlay className='text-[#8dc63f]' />Term Insurance</li>
                            <li className='flex items-center gap-4'><FaPlay className='text-[#8dc63f]' />Permanent Insurance</li>
                            <li className='flex items-center gap-4'><FaPlay className='text-[#8dc63f]' />Long-Term Care Planning</li>
                            <li className='flex items-center gap-4'><FaPlay className='text-[#8dc63f]' />Risk Management</li>
                        </ul>
                    </div>

                    <div className='bg-[#007d8a] px-5 py-10'>
                        <h3 className='text-3xl font-semibold text-white mb-4 md:text-4xl' >At Trilogy, we empower you to feel confident and protected in your foundation.</h3>
                        <p className='text-slate-300 md:text-xl'>While the accumulation of wealth is important, protecting it cannot be overlooked. Protecting the wealth you’ve built, while mitigating potential risks, is paramount to building a strong financial future.</p>
                    </div>
                 </section>

                 <section className='bg-[#efefef] px-6 py-10 w-full flex flex-col items-center'>
                    <h3 className='text-3xl md:text-4xl mb-2 font-bold text-center'>Insuring Against Future Risks is Highly Personal</h3>
                    <p className='md:text-xl mb-10 text-center max-w-[1200px]'>We seek to understand the kinds of risks you are exposed to and how to add “sleep-at-night” value to your financial life. We will help you better understand your options, identify realistic needs and plan for the care that you and your family deserve.</p>
                    <ul className='flex items-center flex-col lg:flex-row gap-4 max-w-[1200px]'>
                        <li className='flex flex-col items-center gap-y-4 md:text-xl text-center'><TbMessageCircleDollar className='text-7xl text-[#007d8a] transition-all duration-300 ease-in-out hover:scale-125' />Discuss options with your Advisor and family</li>
                        <li className='flex flex-col items-center gap-y-4 md:text-xl text-center'><FaHome className='text-7xl text-[#007d8a] transition-all duration-300 ease-in-out hover:scale-125' />Consider the life you’ve built and want to maintain</li>
                        <li className='flex flex-col items-center gap-y-4 md:text-xl text-center'><FaExclamationTriangle className='text-7xl text-[#007d8a] transition-all duration-300 ease-in-out hover:scale-125' />Manage your risk</li>
                        <li className='flex flex-col items-center gap-y-4 md:text-xl text-center'><FaHands className='text-7xl text-[#007d8a] transition-all duration-300 ease-in-out hover:scale-125' />Take a holistic approach</li>
                    </ul>
                    
                 </section>

                 <section id='hero6'className=' flex-col justify-center p-4 hidden md:flex' >
                    <div className='bg-[rgba(255,255,255,0.8)] flex flex-col justify-center p-6 items-center w-[500px]'>
                        <h3 className='text-3xl md:text-4xl text-center mb-4 font-semibold'>Insurance Products for Your Unique Needs</h3>
                        <p className='text-xl text-center'>As an independent financial planning firm, we don’t own insurance products. We partner with the most reputable insurance companies who have a proven track record of financial security and claims-paying ability.</p>
                    </div>
                 </section>

                 <section className='bg-[#efefef] px-6 py-10 w-full flex flex-col items-center'>
                    <h4 className='text-3xl md:text-4xl mb-5 font-bold text-center'>Building Foundations and Futures</h4>
                        <p className='text-xl text-center max-w-[1200px] text-[#007d8a] mb-1'>The insurance services of Trilogy Financial are here to help you grow wealth with stability. We help you secure your future with confidence by providing innovative insurance solutions independently selected from a diverse set of credible companies.</p>
                        <p className='text-xl text-center max-w-[1200px] mb-10'>You build wealth not to be wealthy. You earn it, invest it, and grow it so you can live the life you dream. While the accumulation of wealth is important, protecting it cannot be overlooked. Protecting the foundation you’ve built, while mitigating potential risks, is paramount to building a strong financial future. We’re here to help.</p>
                    
                        <ul className='grid grid-cols-1 lg:grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1200px]'>
                            <li className='flex flex-col items-center gap-y-1 md:text-xl text-center'>
                                <IoSyncCircleSharp className='text-7xl text-[#007d8a] transition-all duration-300 ease-in-out hover:scale-125 mb-2' />
                                <h4 className='font-bold text-2xl'>Your Insurance Should Strategically Align With Your Financial Plan.</h4>
                                <p>Because every dollar you spend affects all of the others, the way you invest in risk management techniques requires a comprehensive view.</p>
                            </li>
                            <li className='flex flex-col items-center gap-y-1 md:text-xl text-center'>
                                <FaBoxOpen className='text-7xl text-[#007d8a] transition-all duration-300 ease-in-out hover:scale-125 mb-2' />
                                <h4 className='font-bold text-2xl'>We Offer Insurance Products For Your Unique Needs.</h4>
                                <p>As an independent financial planning firm, we don’t own insurance products. We partner with the most reputable insurance companies who have a proven track-record of financial security and claims-paying ability.</p>
                            </li>
                            <li className='flex flex-col items-center gap-y-1 md:text-xl text-center'>
                                <FaUserCheck className='text-7xl text-[#007d8a] transition-all duration-300 ease-in-out hover:scale-125 mb-2' />
                                <h4 className='font-bold text-2xl'>Insuring Against Future Risks Is Highly Personal.</h4>
                                <p>We seek to understand the kinds of risks you are exposed to and how to add “sleep-at-night” value to your financial life.</p>
                            </li>
                            <li className='flex flex-col items-center gap-y-1 md:text-xl text-center'>
                                <FaLock className='text-7xl text-[#007d8a] transition-all duration-300 ease-in-out hover:scale-125 mb-2' />
                                <h4 className='font-bold text-2xl'>We Take A Holistic Approach To Protection Planning.</h4>
                                <p>We seek to provide solutions which protect you from a variety of potential risks, adding efficiency to how you use your insurance dollars. Because risk management is an ongoing effort, we build agile service models and protection portfolios that can adjust to your unique situation.</p>
                            </li>
                        </ul>
                 </section>

                 <section className=' px-6 py-10 w-full flex flex-col items-center'>
                    <h1 className='text-3xl md:text-4xl text-center font-bold mb-2 '>Leveraging Trilogy Insurance Services</h1>
                    <p className='max-w-[1200px] text-center md:text-xl'>Let’s create a Life Plan that can help you feel most comfortable. Our Risk Management Services can help you grow wealth with stability. We help you secure your future with confidence by providing innovative insurance solutions independently selected from a diverse set of credible companies.</p>
                 </section>
            </main>
        </>
    );
};

export default InsurancePlanning;