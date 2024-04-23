import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const ServiceTeam = () => {
    return (
        <>
            <Head>
                <title>Our Trilogy Service Team</title>
            </Head>

            <main className='w-full flex flex-col items-center'>
                <section className='bg-[#0a1d34] w-full h-[200px] flex flex-col justify-center items-center'>
                    <h1 className='text-white text-3xl text-center font-bold p-4 md:text-4xl max-w-[900px]'>We’re On A Mission To Ignite Change In The Financial Planning Industry</h1>
                </section>

                <section className='grid md:grid-cols-2 p-4 py-6 max-w-[1200px] gap-x-8'>
                    <div>
                        <h2 className='text-3xl font-bold mb-6'>Our Trilogy Service Team</h2>
                        <p className='text-[#007d8a] text-xl mb-2'>Meet the team that is supporting Trilogy Financial Advisors on our mission to provide comprehensive financial planning services to people across America.</p>
                        <p className='text-xl mb-6'>Our mission, our approach to financial planning and our commitment to our clients starts with them.</p>
                    </div>
                    <div className='bg-[#007d8a] p-6 py-10'>
                        <h3 className='text-3xl font-bold mb-4 text-white'>Our Mission:</h3>
                        <p className='text-xl font-semibold text-white'>Provide opportunities for people to live their best lives.</p>
                    </div>
                </section>

                <section className='grid p-12 bg-[#efefef] md:grid-cols-2 md:gap-x-6 xl:grid-cols-4'>
                    <div className=' bg-white mb-8'>
                        <Image src='/image/WC_Eric-Perkins_7660.png' alt='' quality={100} layout='' width={700} height={100}></Image>
                        <div className='bg-[#002843] flex flex-col items-center justify-center p-4'>
                            <h4 className='text-white font-semibold text-2xl'>Eric Perkins</h4>
                            <p className='text-slate-300 text-xl mb-4'>Chief Operations Officer</p>
                            <p className='text-[#00a375] font-bold text-xl'>IRVINE</p>
                        </div>
                    </div>

                    <div className=' bg-white mb-8'>
                        <Image src='/image/Ad_Sydney-Perkins_7503_hi_res-1024x1024.jpg' alt='' quality={100} layout='' width={700} height={100}></Image>
                        <div className='bg-[#002843] flex flex-col items-center justify-center p-4'>
                            <h4 className='text-white font-semibold text-2xl'>Sydney Sorensen, FPQP™</h4>
                            <p className='text-slate-300 text-xl mb-4'>Service Manager</p>
                            <p className='text-[#00a375] font-bold text-xl'>IRVINE</p>
                        </div>
                    </div>

                    <div className=' bg-white mb-8'>
                        <Image src='/image/Ad_Christi-Eynon_7668_hi_res-1024x1024.jpg' alt='' quality={100} layout='' width={700} height={100}></Image>
                        <div className='bg-[#002843] flex flex-col items-center justify-center p-4'>
                            <h4 className='text-white font-semibold text-2xl'>Christi Eynon</h4>
                            <p className='text-slate-300 text-xl mb-4'>Service Manager</p>
                            <p className='text-[#00a375] font-bold text-xl'>DENVER</p>
                        </div>
                    </div>

                    <div className=' bg-white mb-8'>
                        <Image src='/image/Sondra_Grimminger_2023_WebFinal-2.png' alt='' quality={100} layout='' width={700} height={100}></Image>
                        <div className='bg-[#002843] flex flex-col items-center justify-center p-4'>
                            <h4 className='text-white font-semibold text-2xl'>Sondra Grimminger</h4>
                            <p className='text-slate-300 text-xl mb-4'>Client Care Lead</p>
                            <p className='text-[#00a375] font-bold text-xl'>IRVINE</p>
                        </div>
                    </div>

                    <div className=' bg-white mb-8'>
                        <Image src='/image/Mia_Palacios_2023_WebFinal.png' alt='' quality={100} layout='' width={700} height={100}></Image>
                        <div className='bg-[#002843] flex flex-col items-center justify-center p-4'>
                            <h4 className='text-white font-semibold text-2xl'>Mia Palacios</h4>
                            <p className='text-slate-300 text-xl mb-4'>MACK Associate Supervisor</p>
                            <p className='text-[#00a375] font-bold text-xl'>IRVINE</p>
                        </div>
                    </div>

                    <div className=' bg-white mb-8'>
                        <Image src='/image/Service-Team_Dean-Caldarelli_2022.png' alt='' quality={100} layout='' width={700} height={100}></Image>
                        <div className='bg-[#002843] flex flex-col items-center justify-center p-4'>
                            <h4 className='text-white font-semibold text-2xl'>Dean Caldarelli</h4>
                            <p className='text-slate-300 text-xl mb-4'>Service Associate II</p>
                            <p className='text-[#00a375] font-bold text-xl'>IRVINE</p>
                        </div>
                    </div>

                    <div className=' bg-white mb-8'>
                        <Image src='/image/Service-Team_Haylee-Paladini_2022.png' alt='' quality={100} layout='' width={700} height={100}></Image>
                        <div className='bg-[#002843] flex flex-col items-center justify-center p-4'>
                            <h4 className='text-white font-semibold text-2xl'>Haylee Paladini</h4>
                            <p className='text-slate-300 text-xl mb-4'>Service Associate III</p>
                            <p className='text-[#00a375] font-bold text-xl'>IRVINE</p>
                        </div>
                    </div>

                    <div className=' bg-white mb-8'>
                        <Image src='/image/Desire-Gonzalez_2023_WebFinal.png' alt='' quality={100} layout='' width={700} height={100}></Image>
                        <div className='bg-[#002843] flex flex-col items-center justify-center p-4'>
                            <h4 className='text-white font-semibold text-2xl'>Desire Gonzalez</h4>
                            <p className='text-slate-300 text-xl mb-4'>Service Associate</p>
                            <p className='text-[#00a375] font-bold text-xl'>IRVINE</p>
                        </div>
                    </div>

                    <div className=' bg-white mb-8'>
                        <Image src='/image/Thania-Cortez_2023_WebFinal-1.png' alt='' quality={100} layout='' width={700} height={100}></Image>
                        <div className='bg-[#002843] flex flex-col items-center justify-center p-4'>
                            <h4 className='text-white font-semibold text-2xl'>Thania Cortez</h4>
                            <p className='text-slate-300 text-xl mb-4'>Service Associate</p>
                            <p className='text-[#00a375] font-bold text-xl'>IRVINE</p>
                        </div>
                    </div>

                    <div className=' bg-white mb-8'>
                        <Image src='/image/Austin-_2023_WebFinal.png' alt='' quality={100} layout='' width={700} height={100}></Image>
                        <div className='bg-[#002843] flex flex-col items-center justify-center p-4'>
                            <h4 className='text-white font-semibold text-2xl'>Austin Condon</h4>
                            <p className='text-slate-300 text-xl mb-4'>Service Associate</p>
                            <p className='text-[#00a375] font-bold text-xl'>IRVINE</p>
                        </div>
                    </div>

                    <div className=' bg-white mb-8'>
                        <Image src='/image/Madeline-Sheppard_2023_Final_2-1.png' alt='' quality={100} layout='' width={700} height={100}></Image>
                        <div className='bg-[#002843] flex flex-col items-center justify-center p-4'>
                            <h4 className='text-white font-semibold text-2xl'>Madeline Sheppard</h4>
                            <p className='text-slate-300 text-xl mb-4'>Service Associate</p>
                            <p className='text-[#00a375] font-bold text-xl'>IRVINE</p>
                        </div>
                    </div>

                    <div className=' bg-white mb-8'>
                        <Image src='/image/Valeria-Mejia_2023_WebFinal.png' alt='' quality={100} layout='' width={700} height={100}></Image>
                        <div className='bg-[#002843] flex flex-col items-center justify-center p-4'>
                            <h4 className='text-white font-semibold text-2xl'>Valeria Mejia</h4>
                            <p className='text-slate-300 text-xl mb-4'>Service Associate</p>
                            <p className='text-[#00a375] font-bold text-xl'>IRVINE</p>
                        </div>
                    </div>

                    <div className=' bg-white mb-8'>
                        <Image src='/image/Adam-Hepburn_2023_WebFinal_2.png' alt='' quality={100} layout='' width={700} height={100}></Image>
                        <div className='bg-[#002843] flex flex-col items-center justify-center p-4'>
                            <h4 className='text-white font-semibold text-2xl'>Adam Hepburn</h4>
                            <p className='text-slate-300 text-xl mb-4'>Service Associate</p>
                            <p className='text-[#00a375] font-bold text-xl'>IRVINE</p>
                        </div>
                    </div>

                    <div className=' bg-white mb-8'>
                        <Image src='/image/Alison-Candaleria_2023_Final_2-768x768.png' alt='' quality={100} layout='' width={700} height={100}></Image>
                        <div className='bg-[#002843] flex flex-col items-center justify-center p-4'>
                            <h4 className='text-white font-semibold text-2xl'>Alison Candelaria</h4>
                            <p className='text-slate-300 text-xl mb-4'>Lead Office Coordinator</p>
                            <p className='text-[#00a375] font-bold text-xl'>IRVINE</p>
                        </div>
                    </div>

                    <div className=' bg-white mb-8'>
                        <Image src='/image/Georgina_2023_final.png' alt='' quality={100} layout='' width={700} height={100}></Image>
                        <div className='bg-[#002843] flex flex-col items-center justify-center p-4'>
                            <h4 className='text-white font-semibold text-2xl'>Georgina Casillas</h4>
                            <p className='text-slate-300 text-xl mb-4'>Senior Office Coordinator</p>
                            <p className='text-[#00a375] font-bold text-xl'>CORONA</p>
                        </div>
                    </div>

                    <div className=' bg-white mb-8'>
                        <Image src='/image/Heather-Quinlan_2023_WebFinal_2.png' alt='' quality={100} layout='' width={700} height={100}></Image>
                        <div className='bg-[#002843] flex flex-col items-center justify-center p-4'>
                            <h4 className='text-white font-semibold text-2xl'>Heather Quinlan</h4>
                            <p className='text-slate-300 text-xl mb-4'>Office Coordinator</p>
                            <p className='text-[#00a375] font-bold text-xl'>DENVER</p>
                        </div>
                    </div>

                    <div className=' bg-white mb-8'>
                        <Image src='/image/SHerry_Tatreau_2023_WebFinal.png' alt='' quality={100} layout='' width={700} height={100}></Image>
                        <div className='bg-[#002843] flex flex-col items-center justify-center p-4'>
                            <h4 className='text-white font-semibold text-2xl'>Sherry Tatreau</h4>
                            <p className='text-slate-300 text-xl mb-4'>Office Coordinator</p>
                            <p className='text-[#00a375] font-bold text-xl'>HUNTINGTON BEACH</p>
                        </div>
                    </div>

                    
                </section>
            </main>
        </>
    );
};

export default ServiceTeam;