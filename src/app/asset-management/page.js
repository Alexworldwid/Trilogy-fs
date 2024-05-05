import React from 'react';
import Head from 'next/head';
import { FaPlay, FaSearchDollar, FaChartBar, FaHandHoldingUsd, FaUserGraduate } from 'react-icons/fa';
import { TbTargetArrow } from "react-icons/tb";
import { FcTodoList } from "react-icons/fc";
import { FiTarget } from "react-icons/fi";
import { IoIosPeople } from "react-icons/io";


export const metadata = {
    title: 'Trilogy | Asset-Management',
    description: 'Trilogy Assess Management Page',
  };


const AssetManagement = () => {
    return (
        <>
            <Head>
                <title>Wealth and Asset Management Service</title>
            </Head>

            <main className='flex flex-col items-center w-full'>
                <section id='hero8' className='flex flex-col items-center justify-center '>
                    <h1 className='text-3xl text-center text-[white] mb-2 font-semibold'>WEALTH & ASSET MANAGEMENT SERVICES</h1>
                    <div className='bg-[rgba(255,255,255,0.8)] p-7 flex flex-col items-center w-[90%]'>
                        <h2 className='mb-2 text-2xl font-medium text-center'>WEALTH & ASSET MANAGEMENT SERVICES</h2>
                        <p className='text-[#007d8a] font-medium max-w-64 text-center md:text-xl mb-4'>We don’t just invest, we focus on comprehensive wealth management and preparing you for the future you’ve dreamed of.</p>
                        <p className='font-medium text-center'>Our Financial Advisors strive to help support, manage and grow your portfolio.</p>
                    </div>
                </section>

                <section className='grid md:grid-cols-2 gap-x-6 mt-6 p-3 py-10 max-w-[1200px]'>
                    <div>
                        <h3 className='mb-4 text-4xl font-semibold'>Our Wealth & Asset Management Services:</h3>
                        <p className='text-[#007d8a] text-xl mb-4'>Trilogy Financial focuses on you and the unique set of financial circumstances you and your family face.</p>
                        <ul className='grid gap-4 md:grid-cols-2'>
                            <li className='flex items-center text-xl gap-x-4'><FaPlay className='text-[#78be20]' />Retirement Planning</li>
                            <li className='flex items-center text-xl gap-x-4'><FaPlay className='text-[#78be20]' />Business Strategies</li>
                            <li className='flex items-center text-xl gap-x-4'><FaPlay className='text-[#78be20]' />Investment Planning</li>
                            <li className='flex items-center text-xl gap-x-4'><FaPlay className='text-[#78be20]' />Small Business Strategies</li>
                            <li className='flex items-center text-xl gap-x-4'><FaPlay className='text-[#78be20]' />Gifting Strategies</li>
                            <li className='flex items-center text-xl gap-x-4'><FaPlay className='text-[#78be20]' />Estate Planning Strategies</li>
                            <li className='flex items-center text-xl gap-x-4'><FaPlay className='text-[#78be20]' />Insurance Services</li>
                            <li className='flex items-center text-xl gap-x-4'><FaPlay className='text-[#78be20]' />College & Education Planning</li>
                            <li className='flex items-center text-xl gap-x-4'><FaPlay className='text-[#78be20]' />Risk Management</li>
                            <li className='flex items-center text-xl gap-x-4'><FaPlay className='text-[#78be20]' />Tax Strategies</li>
                        </ul>
                    </div>
                    <div className='mt-6 p-4 py-10 bg-[#007d8a]'>
                        <h4 className='mb-4 text-3xl font-semibold text-white'>At Trilogy, we help develop strategies for all of your wealth management needs.</h4>
                        <p className='text-xl text-slate-300'>We help you create a personalized wealth & asset management strategy based on your lifestyle goals. Using our discovery process, we work with you to build an appropriate plan that supports your objectives, then monitor it to help you stay on track.</p>
                    </div>
                </section>

                <section className='flex flex-col items-center p-4 py-10 bg-[#efefef] w-full'>
                    <div className='flex flex-col items-center max-w-[1200px]'>
                        <h4 className='mb-6 text-3xl font-semibold text-center md:text-5xl'>Our Approach to Your Personalized Wealth Management Plan</h4>
                        <p className='mb-4 font-medium text-center md:text-xl'>We use a client-centric process focused on pursuing specific milestones we create together. Our comprehensive, three-step planning process is designed to help identify your needs, implement your strategy and monitor it to help you stay on course.</p>
                        <p className='mb-4 font-medium text-center md:text-xl'>In our approach, we will complete a confidential profile to gain a deeper understanding of your current situation and goals, provide custom strategies based on your analysis and future needs, and then help you put that plan into action.</p>
                        <p className='mb-4 font-medium text-center md:text-xl'>We are dedicated to your success and confidence in your personal finances. We will empower you to be nimble and will serve as the sounding board you need to make your decisions. We know how personal this is. And we’re committed to standing by your side through it all.</p>
                        <ul className='grid grid-cols-2 gap-6 md:grid-cols-3'>
                            <li className='text-center flex flex-col items-center max-w-[200px]'><FaSearchDollar className='text-7xl text-[#007d8a] mb-4 transition-all duration-300 ease-in-out hover:scale-125' />Review and assess your needs and goals</li>
                            <li className='text-center flex flex-col items-center max-w-[200px]'><TbTargetArrow className='text-7xl text-[#007d8a] mb-4 transition-all duration-300 ease-in-out hover:scale-125' />Prepare your Life Plan to support your wealth management goals</li>
                            <li className='text-center flex flex-col items-center max-w-[200px]'><FaChartBar className='text-7xl text-[#007d8a] mb-4 transition-all duration-300 ease-in-out hover:scale-125' />Implement your plan, monitor and adjust</li>
                        </ul>
                    </div>
                </section>

                <section className='flex flex-col items-center w-full'>
                    <div className='max-w-[1200px] p-4 py-10'>
                        <h4 className='mb-4 text-4xl font-semibold text-center'>How Your 401k & Retirement Plan Fits into Your Wealth & Asset Management Plan</h4>
                        <p  className='mb-4 text-center md:text-xl'><i>We’ll coach you through a retirement plan that’s supported by your wealth management plan so you can feel confident in retirement.</i></p>
                        <p className='mb-4 text-center md:text-xl'>Your asset management strategy is an important part of planning your retirement strategy so you can have predictable resources. At Trilogy, we empower you to live wealthy in retirement. Each decade of life brings new experiences, opportunities, concerns, and financial focuses. <br /> This is why we believe your Life Plan should include both a retirement and wealth management plan. </p>
                        <p className='mb-4 text-center md:text-xl'>Our Financial Advisors will help create a strategy so you can feel prepared for unforeseen events, safeguard your financial independence, maintain your standard of living, support your family, get the tax benefits, and simply enjoy retirement.</p>
                        <h5 className='mb-4 text-4xl font-semibold text-center'>OUR FINANCIAL PLANNING FOR RETIREMENT SERVICES:</h5>
                        <ul className='grid gap-4 md:grid-cols-2'>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Navigating 401(k) Rollover</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Saving for Retirement</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Investing for Retirement</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Income Planning</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Distribution Planning</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Social Security Best Practices</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Early Retirement Planning</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Retirement Transitioning</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Employer-Based Plans</li>

                        </ul>
                    </div>
                </section>

                <section className='flex flex-col items-center p-4 py-10 bg-[#efefef] w-full'>
                    <div className='max-w-[1200px] p-4 py-10'>
                        <h4 className='mb-10 text-4xl font-semibold text-center'>Common Types of Retirement Plans</h4>
                        <p className='mb-4 text-center md:text-xl'>There are many different types of retirement plans that can fit into your wealth & asset management plan, including a 401(k) plan, Roth IRA plan and SEP IRA plan. Ask your Financial Advisor which is right for you and your goals.</p>
                        <h5 className='text-4xl text-center font-semibold my-10 text-[#007d8a]'>Leveraging Your Asset Management Plan to Income Plan for Retirement</h5>
                        <p className='mb-4 text-center md:text-xl'>Your overall wealth management strategy encompasses several things, including income planning for retirement so you can follow a budget that fits your goals.</p>
                        <p className='mb-10 text-center md:text-xl'>Each Trilogy Financial Advisor is passionate about uncovering all your options and being your champion to pursue your retirement dreams. Let’s map out your income plan and simplify any complexities so you feel confident in your future.</p>
                        <ul className='grid gap-4 md:grid-cols-2'>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Better position your retirement income</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Manage taxes</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Aim to maximize your Social Security benefits</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Determine your risk appetite</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Develop a budget & savings plan</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Reduce risk & preserve wealth</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Select a suitable investment approach</li>
                        </ul>
                    </div>
                </section>

                <section  className='flex flex-col items-center w-full p-4 py-10'>
                    <div className='max-w-[1200px] p-4 py-10'>
                        <h4 className='mb-10 text-4xl font-semibold text-center'>Begin Planning Your Retirement & Wealth Management Strategy Early</h4>
                        <p className='mb-4 text-center md:text-xl'><i>There are Tremendous Benefits to Planning Early</i></p>
                        <p className='mb-4 text-center md:text-xl'>The earlier you begin to get yourself organized, set your goals, and take steps to build a secure future the better. Whether you’re considering financial planning guidance for yourself, your business, or with a partner – our team is passionate about helping you create a personalized plan to pursue your unique goals.</p>
                        <p className='mb-4 text-center md:text-xl'>If you’ve already started saving, one of our certified financial planners can help optimize your savings, investing and risk approach so you can live the retirement life you’ve always wanted.</p>
                    </div>
                </section>

                <section className='flex flex-col items-center p-4 py-10 w-full bg-[#efefef]'>
                    <div className='max-w-[1200px] p-4 py-10 flex flex-col items-center'>
                        <h4 className='mb-10 text-4xl font-semibold text-center'>How Your Estate Plan Strategy Fits into Your Wealth & Asset Management Plan</h4>
                        <p className='mb-4 text-center md:text-xl'><i>A thorough wealth & asset management Life Plan includes your financial planning for as long as you live, and for generations to come.</i></p>
                        <p className='text-[#007d8a] text-4xl text-center font-semibold mb-10 max-w-[800px]'>Develop An Estate Plan Strategy for You & Future Generations</p>
                        <p className='mb-4 text-center md:text-xl'>Together, we will create an estate plan strategy that controls your finances now, and ensures your gifts and directives make the greatest impact possible.</p>
                        <p className='mb-4 text-center md:text-xl'>Taking time to create estate strategies not only helps you put your financial house in order but can potentially save you money in the long run. By documenting your wishes and goals, you create a legal framework that the courts, your executor and your loved ones can follow when settling your estate. Without these strategies in place, your family risks going through a lengthy and expensive process — which could alter the wishes you have for your legacy.</p>
                    </div>
                </section>

                <section className='flex flex-col items-center w-full p-4 py-10'>
                    <div className='max-w-[1200px] p-4 py-10 flex flex-col items-center'>
                        <h4 className='mb-10 text-4xl font-semibold text-center'>Our Estate & Generational Wealth Planning Services</h4>
                        <ul className='grid gap-4 md:grid-cols-2 md:gap-6'>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Creating an Estate Plan</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Gifting Strategies</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Healthcare Planning</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Developing Trusts</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Organizing List of Accounts and Passwords</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Legacy Planning</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Generational Planning & Transferring Wealth</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Writing a Will</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />2nd & 3rd Marriages</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Guardianship Designations</li>
                        </ul>
                    </div>
                </section>

                <section className='flex flex-col items-center p-4 py-10 w-full bg-[#efefef]'>
                    <div className='max-w-[1200px] p-4 py-10 flex flex-col items-center'>
                        <h4 className='mb-10 text-4xl font-semibold text-center md:text-5xl'>How Your Business Strategy Supports Your Personal Wealth & Asset Management Plan</h4>
                        <p className='mb-4 text-center md:text-xl'><i>Qualified Planning and Business-Sponsored 401k retirement plans are a big part of your wealth & asset management plan. We’ll coach you through uniting the two together.</i></p>
                        <p>Qualified Plans for a Better Business and Wealth Management Plan</p>
                        <p className='mb-4 text-center md:text-xl'>401k and other qualified plans can be an effective tool for businesses to attract and retain talent, reduce their tax liability, increase employee engagement, encourage retirement savings, and provide important legal and financial protections.</p>
                        <h5 className='mb-10 text-3xl font-semibold text-center md:text-4xl'>PLANS WE CAN HELP YOU WITH:</h5>
                        <ul className='grid gap-4 md:grid-cols-2 md:gap-6'>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />401(k)</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />SEP IRA</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Non-qualified plans</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Cash Balance and Defined Benefit Plans </li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Simple IRA</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />403(b) </li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Profit Share</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />ESOP</li>
                        </ul>
                    </div>
                </section>

                <section className='flex flex-col items-center w-full p-4 py-10'>
                    <div className='max-w-[1200px] p-4 py-10 flex flex-col items-center'>
                        <h4 className='mb-10 text-4xl font-semibold text-center md:text-5xl'>Our 401K & Qualified Plans Services</h4>
                        <ul className='grid gap-4 md:grid-cols-2 md:gap-6'>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Navigating 529 Plans</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Monitoring of Investments</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />One-on-one Employee Assistance</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Plan Design Consulting</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Fiduciary Advice for Employees</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Investment Menu Design</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Investment Policy Statement</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Fiduciary Training for Plan Committees</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Financial Wellness Programs</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Enrollment Meetings</li>
                        </ul>
                    </div>
                </section>

                <section className='flex flex-col items-center p-4 py-10 w-full bg-[#efefef]'>
                    <div className='max-w-[1200px] p-4 py-10 flex flex-col items-center'>
                        <h4 className='mb-10 text-4xl font-semibold text-center md:text-5xl'>Qualified Planning for Employers and Employees</h4>
                        <p className='mb-4 text-center md:text-xl'>Our 401K & Qualified Plans team helps employers offer their employees the best retirement plan options, and helps employees make smarter financial decisions. </p>
                        <p className='mb-4 text-center md:text-xl'>If you’re a benefits decision maker, read more about how you can offer your employees the best retirement plan options. </p>
                        <p className='mb-4 text-center md:text-xl'>If you’re an employee, find resources to help you make financial decisions to improve your financial independence. </p>
                    </div>
                </section>

                <section className='flex flex-col items-center w-full p-4 py-10 '>
                    <div className='max-w-[1200px] p-4 py-10 flex flex-col items-center'>
                        <h4 className='mb-10 text-4xl font-semibold text-center md:text-5xl'>Employee Benefits and Executive Compensation</h4>
                        <p className='text-[#007d8a] text-center font-semibold mb-10 max-w-[800px]'>We can help your business create and manage employee benefits and executive compensation programs that attract and retain top talent, provide valuable financial security to employees, and reduce legal and financial risks.</p>
                        <p className='text-[#007d8a] text-center font-semibold mb-10 max-w-[800px]'>Here are some ways that our team supports businesses of all sizes:</p>
                        <ul className='grid grid-cols-2 gap-4 lg:grid-cols-5 md:gap-6'>
                            <li className='text-center flex flex-col items-center max-w-[200px]'><FaHandHoldingUsd className='text-7xl text-[#007d8a] mb-4 transition-all duration-300 ease-in-out hover:scale-125' />Design customized benefits packages that include retirement plans, health insurance, life insurance, disability insurance, and other benefits that meet the needs of the workforce.</li>
                            <li className='text-center flex flex-col items-center max-w-[200px]'><FaUserGraduate className='text-7xl text-[#007d8a] mb-4 transition-all duration-300 ease-in-out hover:scale-125' />Provide education and guidance to employees on the benefits available to them, how to enroll, and how to make informed decisions about their benefits. This can help employees make the most of their benefits and reduce the burden on HR departments.</li>
                            <li className='text-center flex flex-col items-center max-w-[200px]'><FcTodoList className='text-7xl text-[#007d8a] mb-4 transition-all duration-300 ease-in-out hover:scale-125' />Ensure compliance with complex regulations such as ERISA, COBRA, HIPAA, and ACA, and help with any compliance issues that arise.</li>
                            <li className='text-center flex flex-col items-center max-w-[200px]'><FiTarget className='text-7xl text-[#007d8a] mb-4 transition-all duration-300 ease-in-out hover:scale-125' />Design and implement executive compensation packages that are competitive, cost-effective, and aligned with your business’s goals. This can include strategies such as deferred compensation, stock options, and other equity-based compensation plans.</li>
                            <li className='text-center flex flex-col items-center max-w-[200px]'><IoIosPeople className='text-7xl text-[#007d8a] mb-4 transition-all duration-300 ease-in-out hover:scale-125' />Manage the risks associated with employee benefits and executive compensation programs, such as potential legal and financial liabilities. Our team can also help with risk mitigation strategies such as insurance coverage and liability management.</li>
                        </ul>
                    </div>
                    
                </section>

                <section className='flex flex-col items-center p-4 py-10 w-full bg-[#efefef]'>
                    <div className='max-w-[1200px] p-4 py-10 flex flex-col'>
                        <h4 className='mb-10 text-4xl font-semibold text-center md:text-5xl'>How Your Insurance Strategy Supports Your Personal Wealth & Asset Management Plan</h4>
                        <p className='mb-4 text-center md:text-xl'><i>Our team is dedicated to helping you navigate insurance that makes sense for you, your future, your family, and your asset management plan.</i></p>
                        <p className='text-[#007d8a] text-center font-semibold mb-10 max-w-[800px]'>Navigate Insurance and Get the Benefit You Deserve</p>
                        <p className='mb-4 text-center md:text-xl'>While the accumulation of wealth is important, protecting it cannot be overlooked. And the same goes for protecting your health. </p>
                        <p className='mb-4 text-center md:text-xl'>Protecting the wealth you’ve built, while mitigating potential risks, is paramount to building a strong financial future and a sound wealth management strategy. We are invested in empowering you to leave the legacy you’ve dreamed of. Our Financial Advisors are here to help with all your insurance needs.</p>
                        <h5 className='mb-10 text-4xl font-semibold text-center md:text-5xl'>OUR INSURANCE SERVICES:</h5>
                        <ul className='grid gap-4 md:grid-cols-2 md:gap-6'>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Term Insurance</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Long-Term Care Planning</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Non-qualified plans</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Cash Balance and Defined Benefit Plans</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Permanent Insurance</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Risk Management</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Profit Share</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />ESOP</li>
                        </ul>
                    </div>
                </section>

                <section className='flex flex-col items-center w-full p-4 py-10 '>
                    <div className='max-w-[1200px] p-4 py-10 flex flex-col'>
                        <h4 className='mb-10 text-4xl font-semibold text-center md:text-5xl'>How Your Investment Plan Supports Your Personal Wealth & Asset Management Plan</h4>
                        <p className='mb-4 text-center md:text-xl'><i>We’re igniting change in the industry. We have no minimums, no expectations and are committed to a customized wealth management strategy that suits your investing goals.</i></p>
                        <p className='text-[#007d8a] text-2xl  text-center font-semibold mb-10 max-w-[800px]'>Develop An Investment Strategy to Pursue Your Goals</p>
                        <p className='mb-4 text-center md:text-xl'>The best way to work toward your retirement goals is with a wealth management and investment plan, instead of simply allocating a portion of your salary to a savings account. Investing is a tool that gives you financial freedom to live the life you want to live. </p>
                        <p className='mb-4 text-center md:text-xl'>Whether you’re a seasoned investor or just starting out, we will help you build a personalized investment plan for your unique risk tolerance and coach you through your wealth accumulation journey.</p>
                        <p className='mb-4 text-center md:text-xl'>One of the most effective ways to save for retirement is to invest money, often into the stock market or other assets.</p>
                        <h5 className='mb-10 text-3xl font-semibold text-center md:text-4xl'>OUR INVESTMENT STRATEGIES & SERVICES</h5>
                        <ul className='grid gap-4 md:grid-cols-2 md:gap-6'>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Investment Planning Strategies</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Investment Techniques</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Investment Types</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Knowing Your Risk Profile</li>
                        </ul>
                    </div>
                </section>

                <section className='flex flex-col items-center p-4 py-10 w-full bg-[#efefef]'>
                    <div className='max-w-[1200px] p-4 py-10 flex flex-col '>
                        <h4 className='mb-10 text-4xl font-semibold text-center md:text-5xl'>Common Types of Investments</h4>
                        <ul className='grid gap-4 md:grid-cols-2 md:gap-6'>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Alternatives</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Separately Managed Accounts</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Mutual Funds</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Fixed Annuities</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Variable Annuities</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />Individual Stocks</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />ETFs</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />UITs</li>
                            <li className='flex items-center gap-x-4 text-xl text-[#007d8a]'><FaPlay className='text-[#78be20]' />REITs</li>
                        </ul>
                    </div>
                </section>

                <section className='flex flex-col items-center w-full p-4 py-10 '>
                    <div className='max-w-[1200px] p-4 py-10 flex flex-col items-center'>
                        <h4 className='mb-10 text-4xl font-semibold text-center md:text-5xl'>How Risk Management Impacts Your Personal Wealth & Asset Management Plan</h4>
                        <p className='mb-4 text-center md:text-xl'>You have big goals, and we have great strategies that aim to get you there. Managing your overall risk is one of the biggest components to achieving those goals. We’ll help you through it.  </p>
                        <p className='text-[#007d8a] text-4xl text-center font-semibold mb-10 max-w-[800px] md:text-5xl'>Minimize Risk to Give You Peace of Mind</p>
                        <p className='mb-4 text-center md:text-xl'>We are here to help you navigate the complex world of financial risks and develop a comprehensive risk management plan that can help you pursue your financial goals with greater confidence.</p>
                        <p className='text-[#007d8a] text-4xl text-center font-semibold mb-10 max-w-[800px] md:text-5xl'>Identifying and Assessing Risks</p>
                        <p className='mb-4 text-center md:text-xl'>We are here to help you identify the different types of risks you may face in your financial life, such as market risk, inflation risk, longevity risk, and others. They can then assess the likelihood and potential impact of these risks on your financial goals.</p>
                        <p className='text-[#007d8a] text-4xl text-center font-semibold mb-10 max-w-[800px] md:text-5xl'>Developing a Risk Management Plan</p>
                        <p className='mb-4 text-center md:text-xl'>Based on the assessment of your risks, a financial planner can develop a comprehensive risk management plan tailored to your specific needs and goals. This plan may involve a combination of strategies, such as diversification, asset allocation, insurance, and other techniques.</p>
                        <p className='text-[#007d8a] text-4xl text-center font-semibold mb-10 max-w-[800px] md:text-5xl'>Monitoring and Adjusting the Plan</p>
                        <p className='mb-4 text-center md:text-xl'>Once implemented, we monitor the effectiveness of your risk management plan and adjust it as needed to ensure that it remains aligned with your evolving financial goals and changing market conditions.</p>
                        <p className='mb-4 text-center md:text-xl'><i>There is no guarantee that a diversified portfolio will enhance overall returns or outperform a non-diversified portfolio. Diversification does not protect against market risk. Investing involves risk, including possible loss of principal.</i></p>
                    </div>
                </section>
            </main>
        </> 
    );
};

export default AssetManagement;