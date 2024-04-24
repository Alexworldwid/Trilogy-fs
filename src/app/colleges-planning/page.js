import React from 'react';
import Head from 'next/head';
import { FaPlay, FaPiggyBank, FaHandHoldingUsd, FaSchool, FaUserGraduate } from 'react-icons/fa';
import { GiGraduateCap } from "react-icons/gi";

const CollegePlanning = () => {
    return (
        <>
            <Head >
                <title>College and Education Plan</title>
            </Head>

            <main className='w-full'>
                <section id='hero4' className='flex flex-col justify-center items-center p-4'>
                    <h1 className='text-slate-200 font-semibold text-center text-4xl'>COLLEGE & EDUCATION PLANNING</h1>
                    <div className='bg-[rgba(255,255,255,0.8)] p-4 mt-5 max-w-[1200px]' >
                        <h2 className='text-center text-3xl mb-6 font-semibold md:text-4xl'>A Team Dedicated To Your Education Plans</h2>
                        <p className='text-[#007d8a] text-xl text-center mb-4 md:tex-xl'>We’re more than financial planners, we’re Life Planners.</p>
                        <p className='text-center md:text-xl'>We believe planning for college and other educational needs is more than just saving – it’s about giving students the best foundation for a successful education while limiting the cost burden. Our Financial Advisors are here to help coach you through this important life stage.</p>
                    </div>
                </section>

                <section className='flex flex-col justify-center items-center gap-6 p-4 lg:flex-row'>
                    <div className='flex flex-col items-center max-w-[600px]'>
                        <h3 className='text-3xl font-semibold text-center mb-4'>Our Education Planning Services:</h3>
                        <p className='text-xl text-[#007d8a] text-center'>Each Trilogy Financial Advisor will focus on navigating your unique situation and actualizing your Life Plan.</p>
                        <ul className='grid grid-cols-2 gap-4 mt-4'>
                            <li className='flex items-center gap-x-4'><FaPlay className='text-[#8dc63f]' />Navigating 529 Plans</li>
                            <li className='flex items-center gap-x-4'><FaPlay className='text-[#8dc63f]' />Leveraging FAFSA</li>
                            <li className='flex items-center gap-x-4'><FaPlay className='text-[#8dc63f]' />Understanding Prepaid Tuition Plans</li>
                            <li className='flex items-center gap-x-4'><FaPlay className='text-[#8dc63f]' />Exploring School Options</li>
                        </ul>
                    </div>

                    <div className='max-w-[500px] bg-[#007d8a] p-4 flex flex-col items-center'>
                        <h3 className='text-2xl text-center mb-4 text-white font-semibold'>At Trilogy, we empower you to financially prepare for a college experience.</h3>
                        <p className='text-slate-300 text-center  mb-6'>We know higher education is a key building block for one`s future, and we know that many make sacrifices to see themselves and their loved ones achieve this goal. We also know that it is important to balance your feeling of financial confidence with the ability to pay for the education you or your family desires.</p>
                        <p className='text-slate-300 text-center mb-3'>Together, we will formulate the right education plan that fits into your unique Life Plan without jeopardizing your financial independence.</p>
                    </div>
                </section>

                <section className='flex flex-col items-center bg-[#efefef] p-4'>
                    <h3 className='text-2xl font-bold text-center md:text-3xl'>Common Tips for Education Planning</h3>
                    <p className='text-[#007d8a] my-4 text-center md:text-xl'>While every Life Plan is different, below are some common tips from our advisors.</p>
                    <ul className='flex flex-col items-center gap-y-5 md:grid md:grid-cols-3 xl:grid-cols-5'>
                        <li className='flex flex-col items-center text-xl font-semibold'><FaPiggyBank className='mb-4 text-7xl text-[#007d8a] transition-all duration-300 ease-in-out hover:scale-125' />Start saving early</li>
                        <li className='flex flex-col items-center text-xl font-semibold text-center'><GiGraduateCap className='mb-4 text-7xl text-[#007d8a] transition-all duration-300 ease-in-out hover:scale-125' />Explore scholarships & financial aid options</li>
                        <li className='flex flex-col items-center text-xl font-semibold'><FaHandHoldingUsd className='mb-4 text-7xl text-[#007d8a] transition-all duration-300 ease-in-out hover:scale-125' />Complete the FAFSA</li>
                        <li className='flex flex-col items-center text-xl font-semibold'><FaSchool  className='mb-4 text-7xl text-[#007d8a] transition-all duration-300 ease-in-out hover:scale-125' />Consider community colleges</li>
                        <li className='flex flex-col items-center text-xl font-semibold text-center'><FaUserGraduate className='mb-4 text-7xl text-[#007d8a] transition-all duration-300 ease-in-out hover:scale-125' />Remember that college is a worthwhile investment</li>
                    </ul>
                </section>
            </main>
        </>
    );
};

export default CollegePlanning;