import React from 'react';

export const metadata = {
    title: 'Trilogy | Our-Story',
    description: 'About the company',
  };

const OurStory = () => {
    return (
        <main className='flex flex-col items-center w-full '>
            <section id='hero7' className='flex flex-col justify-center mb-16'>
                <h1 className='text-4xl font-bold text-center text-white md:text-5xl xl:text-7xl'>We Are Trilogy Financial This Is Our Story.</h1>
            </section>

            <section className='flex flex-col max-w-[1200px] '>
                <h2 className='mb-6 text-5xl font-bold'>Trilogy’s story began in 1999 with our founders Jeff Motske and Kevin Mackintosh.</h2>
                <p className='text-4xl font-semibold text-[#448c8e] mb-6'>Both were successful executives at a regional investment firm with growing branch office operations, but something in them quaked for a better version of the industry that they had grown to love.</p>
                <p className='mb-6 text-2xl '>Jeff believed that financial services, in many situations, had become too caught up in transactional sales techniques and short-term thinking. He saw the shocking contrast between the Wall Street style thinking of his industry and the very Main Street style successes of his best clients. His clients’ successes weren’t just because they’d picked some perfect stock or because they gambled at just the right moment and won. As his clients aged and moved toward retirement, they were able to retire depending on their assets and savings for their financial independence.</p>
                <p className='mb-6 text-2xl '>Today, one client at a time, Trilogy has become a nationwide firm with clients from coast to coast. Our clients have over $2 billion dollars in brokerage and advisory assets served through Trilogy and our staff has grown to over 150 comprehensive advisors. Trilogy continues to recruit and mentor new talent to the industry, a commitment abandoned by many of its competitors. Because of this, our
                   multi-generational staff understands the needs and perspectives of a wide variety of client needs. We utilize progressive ideas and opportunities to help our clients now and into the future.</p>
                <p className='mb-6 text-2xl '>Today, as always, Trilogy lives by its development motto: never stop growing. Where will Trilogy’s story lead? We believe the sky’s the limit.</p>
            </section>
        </main>
    );
};

export default OurStory;