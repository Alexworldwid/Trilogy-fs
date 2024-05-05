"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import forbes from "/public/logo-image/forbes.png";
import FA from "/public/logo-image/new fa.png";
import usaToday from "/public/logo-image/new usa today.png";
import investmentNews from "/public/logo-image/investment news.png";
import BI from "/public/logo-image/new buisness insider.png";
import kiplinger from "/public/logo-image/kiplinger.png";
import wsj from "/public/logo-image/wsj.jpg";

export default function Iconslide() {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    const totalWidth = 7 * 100; // Total width of all images

    tl.to("#icon-slide img", {
      x: `-=${totalWidth}`, // Move images to the left by total width
      duration: 15, // Adjust duration as needed
      ease: "linear",
    });
  }, []);


  return (
      <div id='icon-slide' className='flex justify-between w-full col-start-2 col-end-4 overflow-hidden md:col-end-10 md:col-start-3 xl:col-start-2'>
          <Image className="mr-5"  src={forbes } width={100} height={50} alt="fprbes" quality={100} />
          <Image className="mr-5"   src={ FA} width={100} height={50} alt="FA" quality={100} />
          <Image className="mr-5"   src={usaToday } width={100} height={50} alt="usa-today" quality={100} />
          <Image className="mr-5"   src={investmentNews } width={100} height={50} alt="investmen-news" quality={100} />
          <Image className="mr-5"   src={BI } width={100} height={50} alt="bi" quality={100} />
          <Image className="mr-5"   src={kiplinger } width={100} height={50} alt="kiplinger" quality={100} />
          <Image className="mr-5"   src={wsj } width={100} height={50} alt="wsj" quality={100} />
          <Image className="mr-5"  src={forbes } width={100} height={50} alt="fprbes" quality={100} />
          <Image className="mr-5"   src={ FA} width={100} height={50} alt="FA" quality={100} />
          <Image className="mr-5"   src={usaToday } width={100} height={50} alt="usa-today" quality={100} />
          <Image className="mr-5"   src={investmentNews } width={100} height={50} alt="investmen-news" quality={100} />
          <Image className="mr-5"   src={BI } width={100} height={50} alt="bi" quality={100} />
          <Image className="mr-5"   src={kiplinger } width={100} height={50} alt="kiplinger" quality={100} />
          <Image className="mr-5"   src={wsj } width={100} height={50} alt="wsj" quality={100} />
          <Image className="mr-5"  src={forbes } width={100} height={50} alt="fprbes" quality={100} />
          <Image className="mr-5"   src={ FA} width={100} height={50} alt="FA" quality={100} />
          <Image className="mr-5"   src={usaToday } width={100} height={50} alt="usa-today" quality={100} />
          <Image className="mr-5"   src={investmentNews } width={100} height={50} alt="investmen-news" quality={100} />
          <Image className="mr-5"   src={BI } width={100} height={50} alt="bi" quality={100} />
          <Image className="mr-5"   src={kiplinger } width={100} height={50} alt="kiplinger" quality={100} />
          <Image className="mr-5"   src={wsj } width={100} height={50} alt="wsj" quality={100} />
      </div>
  );
};

