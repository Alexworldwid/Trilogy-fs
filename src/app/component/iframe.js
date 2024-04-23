import React from 'react';

const Iframe = () => {
    return (
        <div>
            <iframe className='w-[320px]  md:w-[600px] lg:w-[500px]' height="415" src="https://www.youtube.com/embed/PiYC5LwfKXo?si=5lwk5jzdsVZ-TVDn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </div>
    );
}
export default Iframe;