import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

export const metadata = {
    title: 'Trilogy | Plan-Team',
    description: 'Plan-Team to Trilogy',
  };

const PlanTeam = () => {
    return (
        <>
            <Head>
                <title>Our 401k & Qualified Plans Team</title>
            </Head>
            <main className='flex flex-col items-center w-full'>
                 <section className='bg-[#0a1d34] w-full h-[200px] flex flex-col justify-center items-center'>
                    <h1 className='text-white text-3xl text-center font-bold p-4 md:text-4xl max-w-[900px]'>We’re On A Mission To Ignite Change In The Financial Planning Industry</h1>
                </section>

                <section className='grid md:grid-cols-2 p-4 py-6 max-w-[1200px] gap-x-8'>
                    <div>
                        <h2 className='mb-6 text-3xl font-bold'>Our 401K & Qualified Plans Team</h2>
                        <p className='text-[#007d8a] text-xl mb-2'>Meet the team that is supporting Trilogy Financial Advisors on our mission to provide comprehensive financial planning services to people across America.</p>
                        <p className='text-xl'>Our mission, our approach to retirement, and qualified planning start with them.</p>
                    
                        <h3 className='mt-4 text-xl font-bold'>Plans we can help you with:</h3>
                        <ul className='mb-3 text-xl'>
                            <li>401(k)</li>
                            <li>Simple IRA</li>
                            <li>SEP</li>
                            <li>403(b)</li>
                            <li>Non-qualified plans</li>
                            <li>Profit Share</li>
                            <li>Cash Balance and Defined Benefit Plans</li>
                            <li>ESOP</li>
                        </ul>
                    </div>

                    <div className='bg-[#007d8a] p-6 py-10'>
                        <h3 className='mb-4 text-3xl font-bold text-white'>Our Services</h3>
                        <p className='text-xl font-semibold text-white'>Co-fiduciary services 3(21) & 3(38) Investment Menu Design Monitoring of Investments Investment Policy Statement Plan Design Consulting Financial Wellness Programs Fiduciary Advice for Employees Enrollment Meetings One-on-one Employee Assistance Fiduciary Training for Plan Committees Benchmarking Services and Fees of Retirement Plan Vendors</p>
                    </div>
                </section>

                <section className=' grid p-12 bg-[#efefef] md:grid-cols-2 md:gap-x-6 xl:grid-cols-4 xl:px-[150px]'>
                    <div className='mb-8 bg-white '>
                        <Image src='/plan-team/Wob_Tom-Elkins_7471-768x768.png' alt='' quality={100} layout='' width={700} height={100}></Image>
                        <div className='bg-[#002843] flex flex-col items-center justify-center p-4'>
                            <h4 className='text-2xl font-semibold text-white'>Tom Elkins</h4>
                            <p className='mb-4 text-xl text-slate-300'>Senior Vice President</p>
                            <p className='text-[#00a375] font-bold text-xl'>WOBURN</p>
                        </div>
                    </div>

                    <div className='mb-8 bg-white '>
                        <Image src='/plan-team/2021_Wob_Dale-Sarpard_800x800-768x768.png' alt='' quality={100} layout='' width={700} height={100}></Image>
                        <div className='bg-[#002843] flex flex-col items-center justify-center p-4'>
                            <h4 className='text-2xl font-semibold text-white'>Dale Sarpard</h4>
                            <p className='mb-4 text-xl text-slate-300'>Wealth Advisor</p>
                            <p className='text-[#00a375] font-bold text-xl'>WOBURN</p>
                        </div>
                    </div>

                    <div className='mb-8 bg-white '>
                        <Image src='/plan-team/Cor_Joseph-Roessler_7657-768x768.png' alt='' quality={100} layout='' width={700} height={100}></Image>
                        <div className='bg-[#002843] flex flex-col items-center justify-center p-4'>
                            <h4 className='text-2xl font-semibold text-white'>Joseph Roessler</h4>
                            <p className='mb-4 text-xl text-slate-300'>Wealth Advisor</p>
                            <p className='text-[#00a375] font-bold text-xl'>CORONA</p>
                        </div>
                    </div>

                    <div className='mb-8 bg-white '>
                        <Image src='/plan-team/800x800_0018_2021_Cor_Sylvia-Clegg-768x768.png' alt='' quality={100} layout='' width={700} height={100}></Image>
                        <div className='bg-[#002843] flex flex-col items-center justify-center p-4'>
                            <h4 className='text-2xl font-semibold text-white'>Sylvia James</h4>
                            <p className='mb-4 text-xl text-slate-300'>Wealth Advisor</p>
                            <p className='text-[#00a375] font-bold text-xl'>CORONA</p>
                        </div>
                    </div>

                    <div className='mb-8 bg-white '>
                        <Image src='/plan-team/800x800_0000_2021_SD_Gunner-Oury-768x768.png' alt='' quality={100} layout='' width={700} height={100}></Image>
                        <div className='bg-[#002843] flex flex-col items-center justify-center p-4'>
                            <h4 className='text-2xl font-semibold text-white'>Gunner Oury</h4>
                            <p className='mb-4 text-xl text-slate-300'>Wealth Advisor</p>
                            <p className='text-[#00a375] font-bold text-xl'>SAN DIEGO</p>
                        </div>
                    </div>

                    <div className='mb-8 bg-white '>
                        <Image src='/plan-team/Abby-Chittum_2023_WebFinal_2-700x700.png' alt='' quality={100} layout='' width={700} height={100}></Image>
                        <div className='bg-[#002843] flex flex-col items-center justify-center p-4'>
                            <h4 className='text-2xl font-semibold text-white'>Abigail Chittum</h4>
                            <p className='mb-4 text-xl text-slate-300'>Retirement Plan Service Associate</p>
                            <p className='text-[#00a375] font-bold text-xl'>SAN DIEGO</p>
                        </div>
                    </div>

                </section>
            </main>
        </>
    );
};

export default PlanTeam;