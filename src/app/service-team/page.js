import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

export const metadata = {
    title: 'Trilogy | Service-Team',
    description: 'Service Team to Trilogy',
  };

const ServiceTeam = () => {
    return (
        <>
            <Head>
                <title>Our Trilogy Service Team</title>
            </Head>

            <main className='flex flex-col items-center w-full'>
                <section className='bg-[#0a1d34] w-full h-[200px] flex flex-col justify-center items-center'>
                    <h1 className='text-white text-3xl text-center font-bold p-4 md:text-4xl max-w-[900px]'>We’re On A Mission To Ignite Change In The Financial Planning Industry</h1>
                </section>

                <section className='grid md:grid-cols-2 p-4 py-6 max-w-[1200px] gap-x-8'>
                    <div>
                        <h2 className='mb-6 text-3xl font-bold'>Our Trilogy Service Team</h2>
                        <p className='text-[#007d8a] text-xl mb-2'>Meet the team that is supporting Trilogy Financial Advisors on our mission to provide comprehensive financial planning services to people across America.</p>
                        <p className='mb-6 text-xl'>Our mission, our approach to financial planning and our commitment to our clients starts with them.</p>
                    </div>
                    <div className='bg-[#007d8a] p-6 py-10'>
                        <h3 className='mb-4 text-3xl font-bold text-white'>Our Mission:</h3>
                        <p className='text-xl font-semibold text-white'>Provide opportunities for people to live their best lives.</p>
                    </div>
                </section>

                <section className='grid p-12 bg-[#efefef] md:grid-cols-2 md:gap-x-6 xl:grid-cols-4'>
                    <div className='mb-8 bg-white '>
                        <Image src='/image/WC_Eric-Perkins_7660.png' alt='' quality={100} layout='' width={700} height={100}></Image>
                        <div className='bg-[#002843] flex flex-col items-center justify-center p-4'>
                            <h4 className='text-2xl font-semibold text-white'>Eric Perkins</h4>
                            <p className='mb-4 text-xl text-slate-300'>Chief Operations Officer</p>
                            <p className='text-[#00a375] font-bold text-xl'>IRVINE</p>
                        </div>
                    </div>

                    <div className='mb-8 bg-white '>
                        <Image src='/image/Ad_Sydney-Perkins_7503_hi_res-1024x1024.jpg' alt='' quality={100} layout='' width={700} height={100}></Image>
                        <div className='bg-[#002843] flex flex-col items-center justify-center p-4'>
                            <h4 className='text-2xl font-semibold text-white'>Sydney Sorensen, FPQP™</h4>
                            <p className='mb-4 text-xl text-slate-300'>Service Manager</p>
                            <p className='text-[#00a375] font-bold text-xl'>IRVINE</p>
                        </div>
                    </div>

                    <div className='mb-8 bg-white '>
                        <Image src='/image/Ad_Christi-Eynon_7668_hi_res-1024x1024.jpg' alt='' quality={100} layout='' width={700} height={100}></Image>
                        <div className='bg-[#002843] flex flex-col items-center justify-center p-4'>
                            <h4 className='text-2xl font-semibold text-white'>Christi Eynon</h4>
                            <p className='mb-4 text-xl text-slate-300'>Service Manager</p>
                            <p className='text-[#00a375] font-bold text-xl'>DENVER</p>
                        </div>
                    </div>

                    <div className='mb-8 bg-white '>
                        <Image src='/image/Sondra_Grimminger_2023_WebFinal-2.png' alt='' quality={100} layout='' width={700} height={100}></Image>
                        <div className='bg-[#002843] flex flex-col items-center justify-center p-4'>
                            <h4 className='text-2xl font-semibold text-white'>Sondra Grimminger</h4>
                            <p className='mb-4 text-xl text-slate-300'>Client Care Lead</p>
                            <p className='text-[#00a375] font-bold text-xl'>IRVINE</p>
                        </div>
                    </div>

                    <div className='mb-8 bg-white '>
                        <Image src='/image/Mia_Palacios_2023_WebFinal.png' alt='' quality={100} layout='' width={700} height={100}></Image>
                        <div className='bg-[#002843] flex flex-col items-center justify-center p-4'>
                            <h4 className='text-2xl font-semibold text-white'>Mia Palacios</h4>
                            <p className='mb-4 text-xl text-slate-300'>MACK Associate Supervisor</p>
                            <p className='text-[#00a375] font-bold text-xl'>IRVINE</p>
                        </div>
                    </div>

                    <div className='mb-8 bg-white '>
                        <Image src='/image/Service-Team_Dean-Caldarelli_2022.png' alt='' quality={100} layout='' width={700} height={100}></Image>
                        <div className='bg-[#002843] flex flex-col items-center justify-center p-4'>
                            <h4 className='text-2xl font-semibold text-white'>Dean Caldarelli</h4>
                            <p className='mb-4 text-xl text-slate-300'>Service Associate II</p>
                            <p className='text-[#00a375] font-bold text-xl'>IRVINE</p>
                        </div>
                    </div>

                    <div className='mb-8 bg-white '>
                        <Image src='/image/Service-Team_Haylee-Paladini_2022.png' alt='' quality={100} layout='' width={700} height={100}></Image>
                        <div className='bg-[#002843] flex flex-col items-center justify-center p-4'>
                            <h4 className='text-2xl font-semibold text-white'>Haylee Paladini</h4>
                            <p className='mb-4 text-xl text-slate-300'>Service Associate III</p>
                            <p className='text-[#00a375] font-bold text-xl'>IRVINE</p>
                        </div>
                    </div>

                    <div className='mb-8 bg-white '>
                        <Image src='/image/Desire-Gonzalez_2023_WebFinal.png' alt='' quality={100} layout='' width={700} height={100}></Image>
                        <div className='bg-[#002843] flex flex-col items-center justify-center p-4'>
                            <h4 className='text-2xl font-semibold text-white'>Desire Gonzalez</h4>
                            <p className='mb-4 text-xl text-slate-300'>Service Associate</p>
                            <p className='text-[#00a375] font-bold text-xl'>IRVINE</p>
                        </div>
                    </div>

                    <div className='mb-8 bg-white '>
                        <Image src='/image/Thania-Cortez_2023_WebFinal-1.png' alt='' quality={100} layout='' width={700} height={100}></Image>
                        <div className='bg-[#002843] flex flex-col items-center justify-center p-4'>
                            <h4 className='text-2xl font-semibold text-white'>Thania Cortez</h4>
                            <p className='mb-4 text-xl text-slate-300'>Service Associate</p>
                            <p className='text-[#00a375] font-bold text-xl'>IRVINE</p>
                        </div>
                    </div>

                    <div className='mb-8 bg-white '>
                        <Image src='/image/Austin-_2023_WebFinal.png' alt='' quality={100} layout='' width={700} height={100}></Image>
                        <div className='bg-[#002843] flex flex-col items-center justify-center p-4'>
                            <h4 className='text-2xl font-semibold text-white'>Austin Condon</h4>
                            <p className='mb-4 text-xl text-slate-300'>Service Associate</p>
                            <p className='text-[#00a375] font-bold text-xl'>IRVINE</p>
                        </div>
                    </div>

                    <div className='mb-8 bg-white '>
                        <Image src='/image/Madeline-Sheppard_2023_Final_2-1.png' alt='' quality={100} layout='' width={700} height={100}></Image>
                        <div className='bg-[#002843] flex flex-col items-center justify-center p-4'>
                            <h4 className='text-2xl font-semibold text-white'>Madeline Sheppard</h4>
                            <p className='mb-4 text-xl text-slate-300'>Service Associate</p>
                            <p className='text-[#00a375] font-bold text-xl'>IRVINE</p>
                        </div>
                    </div>

                    <div className='mb-8 bg-white '>
                        <Image src='/image/Valeria-Mejia_2023_WebFinal.png' alt='' quality={100} layout='' width={700} height={100}></Image>
                        <div className='bg-[#002843] flex flex-col items-center justify-center p-4'>
                            <h4 className='text-2xl font-semibold text-white'>Valeria Mejia</h4>
                            <p className='mb-4 text-xl text-slate-300'>Service Associate</p>
                            <p className='text-[#00a375] font-bold text-xl'>IRVINE</p>
                        </div>
                    </div>

                    <div className='mb-8 bg-white '>
                        <Image src='/image/Adam-Hepburn_2023_WebFinal_2.png' alt='' quality={100} layout='' width={700} height={100}></Image>
                        <div className='bg-[#002843] flex flex-col items-center justify-center p-4'>
                            <h4 className='text-2xl font-semibold text-white'>Adam Hepburn</h4>
                            <p className='mb-4 text-xl text-slate-300'>Service Associate</p>
                            <p className='text-[#00a375] font-bold text-xl'>IRVINE</p>
                        </div>
                    </div>

                    <div className='mb-8 bg-white '>
                        <Image src='/image/Alison-Candaleria_2023_Final_2-768x768.png' alt='' quality={100} layout='' width={700} height={100}></Image>
                        <div className='bg-[#002843] flex flex-col items-center justify-center p-4'>
                            <h4 className='text-2xl font-semibold text-white'>Alison Candelaria</h4>
                            <p className='mb-4 text-xl text-slate-300'>Lead Office Coordinator</p>
                            <p className='text-[#00a375] font-bold text-xl'>IRVINE</p>
                        </div>
                    </div>

                    <div className='mb-8 bg-white '>
                        <Image src='/image/Georgina_2023_final.png' alt='' quality={100} layout='' width={700} height={100}></Image>
                        <div className='bg-[#002843] flex flex-col items-center justify-center p-4'>
                            <h4 className='text-2xl font-semibold text-white'>Georgina Casillas</h4>
                            <p className='mb-4 text-xl text-slate-300'>Senior Office Coordinator</p>
                            <p className='text-[#00a375] font-bold text-xl'>CORONA</p>
                        </div>
                    </div>

                    <div className='mb-8 bg-white '>
                        <Image src='/image/Heather-Quinlan_2023_WebFinal_2.png' alt='' quality={100} layout='' width={700} height={100}></Image>
                        <div className='bg-[#002843] flex flex-col items-center justify-center p-4'>
                            <h4 className='text-2xl font-semibold text-white'>Heather Quinlan</h4>
                            <p className='mb-4 text-xl text-slate-300'>Office Coordinator</p>
                            <p className='text-[#00a375] font-bold text-xl'>DENVER</p>
                        </div>
                    </div>

                    <div className='mb-8 bg-white '>
                        <Image src='/image/SHerry_Tatreau_2023_WebFinal.png' alt='' quality={100} layout='' width={700} height={100}></Image>
                        <div className='bg-[#002843] flex flex-col items-center justify-center p-4'>
                            <h4 className='text-2xl font-semibold text-white'>Sherry Tatreau</h4>
                            <p className='mb-4 text-xl text-slate-300'>Office Coordinator</p>
                            <p className='text-[#00a375] font-bold text-xl'>HUNTINGTON BEACH</p>
                        </div>
                    </div>

                    
                </section>
            </main>
        </>
    );
};

export default ServiceTeam;