'use client';

import Image from "next/image";
import { FaLinkedin, FaFacebook, FaTwitter, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import brokerCheck from "/public/image/BrokerCheck.png";
import Trilogy from "/public/image/logo-main.png";
import Link from "next/link";
import DownIcon from "/public/image/icon-arrow-down.svg";
import UpIcon from "/public/image/icon-arrow-up.svg";
import { useState } from "react";


const Navbar = ({ handleOpenForm }) => {
    const [menuopen, setMenuOpen] = useState(false);
    const [advisor, setAdvisor] = useState(false);
    const [ourService, setourService] = useState(false);
    const [about, setAbout] = useState(false);
    const [login, setLogin] = useState(false);

    const handleMenu = () => {
        setMenuOpen(!menuopen);
    }
    const handleOurService = () => {
        setourService(!ourService);
        setAbout(false)
    }
    const handleAbout = () => {
        setAbout(!about);
        setourService(false)
    }
    const handleLogin = () => {
        setLogin(!login)
    }

    return ( 
        <header className="w-full" >
          <div className="flex justify-end gap-6 items-center bg-[#002843] p-4 md:px-[100px] ">
            <FaSearch className="text-white font-lg text-[3vw] lg:text-[2vw] " />
            <FaFacebook className="text-white text-[3vw] lg:text-[2vw]" />
            <FaTwitter className="text-white text-[3vw] lg:text-[2vw]" />
            <FaLinkedin className="text-white text-[3vw] lg:text-[2vw]" />
            <Image className="h-auto w-1/6 lg:w-40" src={brokerCheck}  alt="brokerProps" quality={100}  />
          </div>

          <nav className="bg-[#003057] flex justify-between items-center p-4 relative md:px-[100px]">
            <div className="max-w-[30vw]">
              <Link href='/'><Image className="h-auto w-3/6 lg:w-32" src={Trilogy} alt="trilogy-logo" quality={100} /></Link>
            </div>

            <ul  className="hidden lg:flex lg:justify-between gap-5 pr-4 relative text-sm lg:text-md">
              <li className="text-slate-200 mb-4 " onClick={handleOpenForm}>
                  <Link className="flex items-center gap-x-3" href="" >OUR ADVISORS  </Link>
              </li>
              <li className="text-slate-200 mb-4 relative" onClick={handleOurService}>
                  <Link className="flex items-center gap-x-3" href="" >SERVICES  <Image src={!ourService ? UpIcon : DownIcon} width={20} height={40} alt="openmenu" /></Link>
                  {
                            ourService &&
                            <ul className="mt-4 pl-7 absolute bg-[#002843] w-56 top-[40px] p-4 flex flex-col text-left z-30">
                                <li className="mb-4 "><Link href='../401k'>401(k) & RETIREMENT PLANNING</Link></li>
                                <li className="mb-4"><Link href='../investment-strategy' >INVESTMENT STRATEGIES</Link> </li>
                                <li className="mb-4"><Link href='../colleges-planning' >COLLEGE & EDUCATION PLANNING</Link></li>
                                <li className="mb-6"><Link href='../insurance-planning' >INSURANCE SERVICES</Link></li>
                            </ul>
                 }
                        
              </li>
              <li className="text-slate-200 mb-4 relative" onClick={handleAbout}>
                  <Link className="flex items-center gap-x-3" href="" >ABOUT US <Image src={!about ? UpIcon : DownIcon} width={20} height={40} alt="openmenu" /></Link>
                  {
                            about && 
                            <ul className="mt-4 pl-3 absolute bg-[#002843] w-56 top-[40px] p-4 flex flex-col text-left z-30">
                                <li className="mb-4"><Link href='../our-story'>OUR STORY</Link></li>
                                <li className="mb-4"><Link href='../service-team'>OUR TRILOGY SERVICE TEAM</Link></li>
                                <li className="mb-4"><Link href='../plan-team'>OUR 401K & QUALIFIED PLANS TEAM</Link></li>
                                <li onClick={handleOpenForm} className="mb-6"><Link href=''>CONTACT US</Link></li>
                            </ul>
                        }
              </li>
              <li className="text-slate-200 mb-4 " onClick={handleOpenForm}>
                  <Link className="flex items-center gap-x-3" href="" >CLIENT LOGIN </Link>
              </li> 
              
            </ul>

           
                <ul className={`lg:hidden absolute bg-[#002843] -left-0 top-[50px] md:top-[70px] md:pl-28 py-8 px-4 0 w-full transition-display duration-700 ease-in-out z-40   ${menuopen ? 'block' : 'hidden'}`}>
                    <li onClick={handleOpenForm} className="text-slate-200 mb-4 ">
                        <Link className="flex items-center gap-x-3" href="" >OUR ADVISORS </Link>
                
                    </li>
                    <li onClick={handleOurService} className="text-slate-200 mb-4 ">
                        <Link className="flex items-center gap-x-3" href="" >SERVICES <Image src={!ourService ? UpIcon : DownIcon} width={20} height={40} alt="openmenu" /></Link>
                        {
                            ourService &&
                            <ul className="mt-4 pl-3 z-30">
                                <li className="mb-4"><Link href='../401k'>401(k) & RETIREMENT PLANNING</Link></li>
                                <li className="mb-4"><Link href='../investment-strategy' >INVESTMENT STRATEGIES</Link></li>
                                <li className="mb-4"><Link href='../colleges-planning' >COLLEGE & EDUCATION PLANNING</Link></li>
                                <li className="mb-6"><Link href='../insurance-planning' >INSURANCE SERVICES</Link></li>
                            </ul>
                        }
                        
                    </li>
                    <li onClick={handleAbout} className="text-slate-200 mb-4 ">
                        <Link className="flex items-center gap-x-3" href="" >ABOUT US <Image src={!about ? UpIcon : DownIcon} width={20} height={40} alt="openmenu" /></Link>
                        {
                            about && 
                            <ul className="mt-4 pl-3 z-30">
                                <li className="mb-4"><Link href='../our-story'>OUR STORY</Link></li>
                                <li className="mb-4"><Link href='../service-team'>OUR TRILOGY SERVICE TEAM</Link></li>
                                <li className="mb-4"><Link href='../plan-team'>OUR 401K & QUALIFIED PLANS TEAM</Link></li>
                                <li onClick={handleOpenForm} className="mb-6"><Link href=''>CONTACT US</Link></li>
                            </ul>
                        }
                    
                    </li>
                    <li onClick={handleOpenForm} className="text-slate-200 mb-4 ">
                        <Link className="flex items-center gap-x-3" href="" >CLIENT LOGIN </Link>
                    </li> 
                    
                </ul>
        

            <button className=" lg:hidden " onClick={handleMenu}>
              { !menuopen ? <FaBars className="text-slate-200 text-2xl" /> : <FaTimes className="text-slate-200 text-2xl" /> }
            </button>

            <button className="hidden lg:block text-sm text-slate-200 bg-[#8fbd38] p-3" onClick={handleOpenForm}>
                MEET WITH AN ADVISOR
            </button>
          </nav>
        </header>
     );
}
 
export default Navbar;