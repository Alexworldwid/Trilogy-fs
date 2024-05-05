import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Grandma from '/public/vacationImage/grandma-and-child.avif';
import globalcss from '../globals.css';
import BG from '/public/vacationImage/istockphoto.jpg';
import { FaPlay, FaMoneyBillWave, FaRegChartBar, FaRegPauseCircle, FaChartLine, FaChartArea, FaMoneyBillAlt } from 'react-icons/fa';
import { FaPiggyBank, FaChartPie, FaListOl } from "react-icons/fa6";
import { BsBank } from "react-icons/bs";

export const metadata = {
    title: 'Trilogy | 401k',
    description: 'Trilogy 401k-Page',
  };

const FourZeroOne = () => {
    return (
        <main className='relative w-full'>
            
            <section id='hero-2' className='flex flex-col items-center justify-center  top-[2%] xl:left-[10%] opacity-80'>
                <h1 className='text-4xl font-semibold text-center text-white md:text-6xl'>FINANCIAL PLANNING FOR RETIREMENT</h1>
                <div className='mt-4 lg:mt-10 flex flex-col max-w-[1200px] items-center bg-[#eae9e9] p-8'>
                    <h2 className='text-2xl text-center text-black'>A Team of Retirement Planning Advisors Dedicated To You</h2>
                    <p className='my-4 text-[#2993a5] text-center'>We’re more than financial planners, we’re Life Planners</p>
                    <p className='text-lg text-center'>We believe planning for retirement is more than just savings – it’s about the life you aspire to live. Our Financial Advisors are here to help coach you through this important life stage.</p>
                </div>
            </section>

            <section className='flex flex-col w-full gap-4 p-4 mb-16 md:flex-row'>
                <div className='w-full px-4'>
                    <h2 className='text-4xl font-semibold'>Our Financial Planning for Retirement Services:</h2>
                    <p className='text-[#2993a5] my-4'>Each Trilogy Financial Advisor will focus on navigating your unique situation and actualizing your Life Plan.</p>
                    <ul className='flex flex-col md:grid md:grid-cols-2'>
                        <li className='flex items-center gap-3 mb-2'><FaPlay className='text-[#78be20]' />Navigating 401(k) Rollover</li>
                        <li className='flex items-center gap-3 mb-2'><FaPlay className='text-[#78be20]' />Saving for Retirement</li>
                        <li className='flex items-center gap-3 mb-2'><FaPlay className='text-[#78be20]' />Investing for Retirement</li>
                        <li className='flex items-center gap-3 mb-2'><FaPlay className='text-[#78be20]' />Income Planning</li>
                        <li className='flex items-center gap-3 mb-2'><FaPlay className='text-[#78be20]' />Employer-Based Plans</li>
                        <li className='flex items-center gap-3 mb-2'><FaPlay className='text-[#78be20]' />Distribution Planning</li>
                        <li className='flex items-center gap-3 mb-2'><FaPlay className='text-[#78be20]' />Social Security Best Practices</li>
                        <li className='flex items-center gap-3 mb-2'><FaPlay className='text-[#78be20]' />Early Retirement Planning</li>
                        <li className='flex items-center gap-3 mb-2'><FaPlay className='text-[#78be20]' />Retirement Transitioning</li>
                    </ul>
                </div>

                <div className='w-full bg-[#007d8a] p-4'>
                    <h3 className='mb-4 text-xl font-bold text-white'>At Trilogy, we empower you to live wealthy in retirement.</h3>
                    <p className='mb-4 text-white'>We know that each decade of life brings new experiences, opportunities, concerns and financial focuses. This is why we believe you need more than a financial plan. You need a Life Plan.</p>
                    <p className='text-white '>Our Financial Advisors will help you plan for retirement as early as possible so you can feel prepared for unforeseen events, safeguard your financial independence, maintain your standard of living, support your family, get the tax benefits and simply enjoy retirement</p>
                </div>
            </section>

            <section className='bg-[#efefef] px-10 py-4 flex flex-col items-center'>
                <div className='flex flex-col items-center mb-4'>
                    <h3 className='text-[5vw] md:text-[4vw] xl:text-[3vw] text-center font-bold mb-2'>Common Tips for Retirement Planning</h3>
                    <p className='text-[#007d8a] text-center md:text-[2vw] lg:text-[1.9vw] xl:text-[1.5vw] '>While every plan is different, below are some common tips from our Advisors.</p>
                </div>

                <div className='grid grid-cols-2 gap-3 md:flex md:gap-8 md:mt-6 md:pb-6'>
                    <div className='flex flex-col items-center'>
                        <FaPiggyBank className='text-[#007d8a] text-6xl' />
                        <p className='font-semibold text-center'>Start saving for retirement today</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <FaMoneyBillWave className='text-[#007d8a] text-6xl' />
                        <p className='font-semibold text-center'>Contribute to your 401(k) or IRA</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <FaRegChartBar className='text-[#007d8a] text-6xl' />
                        <p className='font-semibold text-center'>Maintain a retirement reserve</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <FaChartPie className='text-[#007d8a] text-6xl' />
                        <p className='font-semibold text-center'>Manage your portfolio risk</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <FaRegPauseCircle className='text-[#007d8a] text-6xl' />
                        <p className='font-semibold text-center'>Consider delaying Social Security</p>
                    </div>
                </div>
            </section>

            <section className='flex flex-col items-center px-6 py-12'>
                <h3 className='text-[#007d8a] text-3xl text-center mb-4 font-bold'>CONNECT WITH A RETIREMENT PLANNING ADVISOR TODAY</h3>
                <p className='text-center xl:max-w-[1200px] md:text-xl'>Planning your retirement strategy is important but not something to stress over. If you’ve already started saving, one of our certified financial planners can help you optimize your savings, investing and risk approach so you can live the retirement life you dream. However, if you haven’t started planning for retirement yet, there’s no better day than today!</p>
            </section>

            <section className='px-6 py-12 flex flex-col items-center bg-[#efefef]'>
                <h3 className='text-[#007d8a] text-3xl text-center mb-4 font-bold'>Your Savings Account and Investing for Retirement</h3>
                <p className='text-center xl:max-w-[1200px] mb-12 md:text-xl'>One of the most effective ways to save for retirement is to invest money, often into the stock market or other assets. It is unlikely that you can meet your retirement goals simply by allocating a portion of your salary to a savings account. Instead, a Financial Advisor and investment strategist can help you invest your asset to gain value and reach your goals.</p>
                <p className='text-center xl:max-w-[1200px] md:text-xl'>For example, imagine that you contribute $5,000 per year to a savings account paying 1% interest annually. In 35 years, that account would be worth $208,000. But if you invested that same $5,000 annually, assuming a 7% average annual return, the account would hold close to $700,000 in that same time period. Naturally, the returns depend on what you invest in, and the best way to optimize that growth is to connect with a certified financial planner.</p>
            </section>

            <section className='flex flex-col items-center px-6 py-12'>
                <h3 className='text-[#007d8a] text-3xl text-center mb-4 font-bold'>BUILDING YOUR SAVINGS ACCOUNT AND NEST EGG</h3>
                <p className='text-center xl:max-w-[1200px] md:text-xl mb-6'>After you’ve built an emergency fund of three to six months of living expenses, you can work with your Financial Advisor to plan how much you want to save and invest for retirement. Things to consider include your current age, your target retirement age (average is age 65) and how much money for retirement you’ve already accumulated. Most Americans save and invest 15% of their incomes for retirement, but it’s important to consider your own Life Plan and what makes sense for your needs and dreams.</p>
                <p className='text-center xl:max-w-[1200px] md:text-xl'>Often times employers will sponsor matching contributions to your retirement plan, so if 7.5% feels more comfortable to save, you may have the option for your employer to contribute the other half.</p>
            </section>

            <section className='px-6 py-12 flex flex-col items-center bg-[#efefef] mb-6'>
                <h3 className='mb-4 text-3xl font-bold text-center '>Common Types Of Retirement Plans</h3>
                <p className='text-center xl:max-w-[1200px] mb-12 md:text-xl text-[#007d8a]'>There are many different types of retirement plans that can fit your Life Plan and help you achieve your retirement goals. Here are few of the most common.</p>

                <div className='flex flex-col gap-4 md:flex-row xl:max-w-[1200px]'>
                    <div className='flex flex-col items-center'>
                        <h4 className='text-[#007d8a]'>401K PLAN</h4>
                        <p className='text-center'>An individual retirement plan for which contributions are not tax-deductible, but withdrawals in retirement are tax-free.</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h4 className='text-[#007d8a]'>ROTH IRA</h4>
                        <p className='text-center'>An individual retirement plan for which contributions are not tax-deductible, but withdrawals in retirement are tax-free.</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h4 className='text-[#007d8a]'>SEP IRA</h4>
                        <p className='text-center'>A self-employed retirement plan known as the Simplified Employee Pension (SEP) IRA requires employers to contribute 100% of the accounts` funds and provide equal benefits to all eligible employees.</p>
                    </div>
                </div>
            </section>

            <section className='flex flex-col items-center px-6 py-12'>
                <h3 className='text-[#007d8a] text-3xl text-center mb-4 font-bold xl:max-w-[600px]'>Focused Long Term: How to Recover from a Financial Setback and Adjust Your Risk Tolerance</h3>
                <p className='text-center xl:max-w-[1200px] mb-12 md:text-xl'>Life will always throw us curve balls, and that is why your certified financial planner will help you build a Life Plan that plans for potential setbacks. Whether it’s a change in your job, a stock market crash, a health-crises or more, it’s important to remember that your Financial Advisor is here to help you prepare for it and get through it so you stay on track with your long-term retirement goals.</p>
                <p className='text-center xl:max-w-[1200px] mb-12 md:text-xl '>No matter the dips, changes and setbacks, your retirement planning advisor will coach you to find ways to continue to contribute your target amount to your retirement account. Your planner will also help you reassess your risk tolerance if you feel overwhelmed or need to dial back your contributions and investments. It’s important to remember that one size does not fit all, and there may be more options that meets the eye to help you through any setbacks that come your way.</p>
            </section>

            <section className='flex flex-col px-6 py-12 md:items-center'>
                <h3 className=' text-3xl text-center mb-8 font-bold xl:max-w-[600px]'>What You Need to Know About Early Retirement</h3>
                <p className='text-center mb-4 md:text-xl xl:max-w-[1200px] '>Whether you dream of traveling the world, wish to pursue a second career or want to retire early, we’re personally invested in helping you feel secure and prepared for life. We are dedicated to helping you build a road map that supports your personal goals, needs and desired lifestyle. However you define success, we are in it together. We will be your sounding board, your validation and your honest feedback.</p>
                 <h4 className='mb-6 text-2xl font-semibold text-center'>COLLABORATE WITH YOUR FINANCIAL ADVISOR TO DISCUSS YOUR GOALS:</h4>
                <ul className='md:grid md:grid-cols-2 md:gap-x-12 xl: '>
                    <li className='flex items-center gap-4 mb-2 text-[#389db1]'><FaPlay className='text-[#78be20]' />Navigating 401(k) Rollover</li>
                    <li className='flex items-center gap-4 mb-2 text-[#389db1]'><FaPlay className='text-[#78be20]' />Saving for Retirement</li>
                    <li className='flex items-center gap-4 mb-2 text-[#389db1]'><FaPlay className='text-[#78be20]' />Investing for Retirement</li>
                    <li className='flex items-center gap-4 mb-2 text-[#389db1]'><FaPlay className='text-[#78be20]' />Distribution Planning</li>
                    <li className='flex items-center gap-4 mb-2 text-[#389db1]'><FaPlay className='text-[#78be20]' />Social Security Best Practices</li>
                    <li className='flex items-center gap-4 mb-2 text-[#389db1]'><FaPlay className='text-[#78be20]' />Early Retirement Planning</li>
                </ul>
            </section>

            <section className='bg-[#efefef] relative '>
                <div className='flex flex-col justify-center grandma '  >
                   <div className='bg-[rgba(255,255,255,0.8)] transition-all duration-500 ease-in-out p-6 md:w-[500px] xl:ml-[100px]'>
                       <h3 className='mb-4 text-4xl font-bold'>Transitioning into Your New Life: Retirement</h3>
                       <p className='text-[#007d8a] md: mb-4'>We take pride in providing you knowledge & insight to direct the stages of your Life Plan.</p>
                       <p className='mb-6 font-semibold md:text-xl'>Whether you want to transition gradually into retirement or dive in quickly, our Financial Advisor teams can support your goals with opportunities and advice that aims to help you live wealthy. We will show you all the options so you can make informed decisions.</p>
                       <ul className='flex flex-col gap-5 mb-6'>
                        <li className='text-[#007d8a] font-semibold'><span className='bg-[#007d8a] text-center px-[14px] py-2 mr-4 text-white rounded-[100%]'>1</span>Creating a List of Accomplishments in Retirement</li>
                        <li className='text-[#007d8a] font-semibold'><span className='bg-[#007d8a] text-center px-[14px] py-2 mr-4 text-white rounded-[100%]'>2</span>Paying Off Debt</li>
                        <li className='text-[#007d8a] font-semibold'><span className='bg-[#007d8a] text-center px-[14px] py-2 mr-4 text-white rounded-[100%]'>3</span>Considering a Passive or Second Income</li>
                        <li className='text-[#007d8a] font-semibold'><span className='bg-[#007d8a] text-center px-[14px] py-2 mr-4 text-white rounded-[100%]'>4</span>Creating a Budget & Planning Expenses</li>
                        <li className='text-[#007d8a] font-semibold'><span className='bg-[#007d8a] text-center px-[14px] py-2 mr-4 text-white rounded-[100%]'>5</span>Knowing Your Risks & Opportunities</li>
                        <li className='text-[#007d8a] font-semibold'><span className='bg-[#007d8a] text-center px-[14px] py-2 mr-4 text-white rounded-[100%]'>6</span>Consolidating & Simplifying Accounts</li>
                       </ul>
                   </div>
                </div>
            </section>

            <section className=' bg-[#efefef] py-10 px-6 flex flex-col items-center '>
                <h3 className='font-bold text-4xl text-center md:max-w-[600px] mb-6'>Strategies to Maximize Your Social Security Benefits</h3>
                <p className='text-[#007d8a] md:text-xl mb-6 text-center'>Let’s create a <i>Life Plan</i>  that can help you feel most comfortable in retirement.</p>
                <p className='mb-6 text-center md:text-xl'>Together we will develop strategies to maximize your Social Security benefits that will empower you to live the retirement of your dreams.</p>
                <p className='md:text-xl mb-6 text-center xl:max-w-[1200px]'>When is the best time to begin taking your Social Security benefits? Our recommendations will depend on your age, income, marital status, partner’s income (if applicable) and the age disparity between you and your partner (if applicable).</p>
            </section>

            <section className='flex flex-col items-center px-6 py-10 '>
                <h3 className='font-bold text-4xl mb-4 text-[#007d8a] text-center '>THE SOCIAL SECURITY BONUS MOST RETIREES OVERLOOK</h3>
                <p className='md:text-xl mb-6 text-center xl:max-w-[1200px]'>It’s ok to be behind on your retirement savings. In fact, most Americans are! That is why we believe it is so important to help everyday Americans navigate retirement planning and living through retirement after they’ve worked so hard to get there.</p>
                <p className='md:text-xl mb-6 text-center xl:max-w-[1200px]'>One of the opportunities your retirement financial planner may suggest after age 65 will help you maximize your Social Security benefits and retire confidently and with peace of mind. Collaborate with your financial planner on these tactics to maximize your benefits.</p>
            </section>

            <section className=' bg-[#efefef] py-10 px-6 flex flex-col items-center '>
                <h3 className='font-bold text-4xl text-center md:max-w-[600px] mb-6'>Income Planning for Retirement</h3>
                <p className='text-[#007d8a] mb-6 text-center md:text-xl'>Each Life Plan is unique and fueled by a budget to fit your goals.</p>
                <p className='md:text-xl mb-6 text-center xl:max-w-[1200px]'>Each Trilogy Financial Advisor is passionate about uncovering all of your options and being your champion to pursue your retirement dreams. Let’s map out your income plan and simplify any complexities so you can feel confident in your future.</p>
                <ul className='grid grid-cols-2 gap-6 md:grid-cols-4'>
                    <li className='flex flex-col items-center font-semibold text-center'><FaChartLine className='text-6xl text-[#007d8a] transition-all ease-in-out duration-500 hover:scale-110' />Optimizing your retirement income</li>
                    <li className='flex flex-col items-center font-semibold text-center'><FaListOl className='text-6xl text-[#007d8a] transition-all ease-in-out duration-500 hover:scale-110' />Developing a budget & savings plan</li>
                    <li className='flex flex-col items-center font-semibold text-center'><FaChartArea className='text-6xl text-[#007d8a] transition-all ease-in-out duration-500 hover:scale-110' />Minimizing taxes</li>
                    <li className='flex flex-col items-center font-semibold text-center'><FaChartPie className='text-6xl text-[#007d8a] transition-all ease-in-out duration-500 hover:scale-110' />Reducing risk & preserving wealth</li>
                    <li className='flex flex-col items-center font-semibold text-center'><BsBank className='text-6xl text-[#007d8a] transition-all ease-in-out duration-500 hover:scale-110' />Maximizing your Social Security benefits</li>
                    <li className='flex flex-col items-center font-semibold text-center'><FaMoneyBillWave className='text-6xl text-[#007d8a] transition-all ease-in-out duration-500 hover:scale-110' />Selecting a suitable investment approach</li>
                    <li className='flex flex-col items-center font-semibold text-center'><FaRegChartBar className='text-6xl text-[#007d8a] transition-all ease-in-out duration-500 hover:scale-110' />Determining your risk appetite</li>
                    <li className='flex flex-col items-center font-semibold text-center'><FaMoneyBillAlt className='text-6xl text-[#007d8a] transition-all ease-in-out duration-500 hover:scale-110' />Reducing & eliminating debt</li>
                </ul>
            </section>

            <section className='flex flex-col items-center px-6 py-10 '>
                <h3 className='font-bold text-4xl text-center md:max-w-[600px] mb-6'>Tax Advantages in Retirement</h3>
                <p className='md:text-xl mb-6 text-center xl:max-w-[1200px]'>Both your Financial Advisor and CPA or tax lawyer can help you navigate the best ways to minimize taxes in retirement. When investing, you often have a choice between paying taxes on contributions to a retirement plan and receiving the money tax-free in retirement, or contributing to a retirement plan with pre-tax dollars and being taxed on withdrawals in retirement. Depending on your Life Plan, Trilogy can coach you in building a retirement plan that meets your needs and goals, even if you plan to be in a higher tax bracket come retirement age.</p>
            </section>
        </main>
    );
};

export default FourZeroOne;