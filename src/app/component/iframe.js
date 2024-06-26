import React from 'react';

const Iframe = () => {
    return (
        <div className='flex items-start w-full'>
            <iframe className='w-full  md:w-[600px] lg:w-[500px]' height="415" src="https://www.youtube.com/embed/PiYC5LwfKXo?si=5lwk5jzdsVZ-TVDn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </div>
    );
}
export default Iframe;