'use client';

import Image from "next/image";
import { FaLinkedin, FaFacebook, FaTwitter, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import brokerCheck from "/public/image/BrokerCheck.png";
import Trilogy from "/public/image/logo-main.png";
import Link from "next/link";
import DownIcon from "/public/image/icon-arrow-down.svg";
import UpIcon from "/public/image/icon-arrow-up.svg";
import { useState, useEffect, useRef } from "react";


const Navbar = ({ handleOpenForm }) => {
    const [menuopen, setMenuOpen] = useState(false);
    const [advisor, setAdvisor] = useState(false);
    const [ourService, setourService] = useState(false);
    const [about, setAbout] = useState(false);
    const [login, setLogin] = useState(false);

    const handleMenu = () => {
        setMenuOpen(!menuopen);
    }
    const handleCloseMenu = () => {
        setMenuOpen(false);
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

    const menuRef = useRef(null);
    
    useEffect(() => {
        const handleCloseMenulick = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
                setourService(false);
                setAbout(false)
                console.log(menuRef.current)
            }
        }
        document.addEventListener('mousedown', handleCloseMenulick);

        return () => {
            document.removeEventListener('mousedown', handleCloseMenulick);
        }
    }, [menuopen])

    return ( 
        <header className="w-full" >
          <div className="flex justify-end gap-6 items-center bg-[#002843] p-4 md:px-[100px] ">
            {/* <FaSearch className="text-white font-lg text-[3vw] lg:text-[2vw] " />
            <FaFacebook className="text-white text-[3vw] lg:text-[2vw]" />
            <FaTwitter className="text-white text-[3vw] lg:text-[2vw]" />
            <FaLinkedin className="text-white text-[3vw] lg:text-[2vw]" /> */}
            <Image className="w-1/6 h-auto lg:w-40" src={brokerCheck}  alt="brokerProps" quality={100}  />
          </div>

          <nav className="bg-[#003057] flex justify-between items-center p-4 relative md:px-[100px]">
            <div className="max-w-[30vw]">
              <Link onClick={handleCloseMenu} href='/'><Image className="w-3/6 h-auto lg:w-32" src={Trilogy} alt="trilogy-logo" quality={100} /></Link>
            </div>

            <ul ref={menuRef}  className="relative hidden gap-5 pr-4 text-sm lg:flex lg:justify-between lg:text-md">
              <li  className="mb-4 text-slate-200 " onClick={handleOpenForm}>
                  <Link className="flex items-center gap-x-3" href="" >OUR ADVISORS  </Link>
              </li>
              <li className="relative mb-4 text-slate-200" onClick={handleOurService}>
                  <Link className="flex items-center gap-x-3" href="" >SERVICES  <Image src={!ourService ? UpIcon : DownIcon} width={20} height={40} alt="openmenu" /></Link>
                  {
                            ourService &&
                            <ul className="mt-4 pl-7 absolute bg-[#002843] w-56 top-[40px] p-4 flex flex-col text-left z-30">
                                <li onClick={handleCloseMenu} className="mb-4 "><Link href='../401k'>401(k) & RETIREMENT PLANNING</Link></li>
                                <li onClick={handleCloseMenu} className="mb-4"><Link href='../investment-strategy' >INVESTMENT STRATEGIES</Link> </li>
                                <li onClick={handleCloseMenu} className="mb-4"><Link href='../colleges-planning' >COLLEGE & EDUCATION PLANNING</Link></li>
                                <li onClick={handleCloseMenu} className="mb-6"><Link href='../insurance-planning' >INSURANCE SERVICES</Link></li>
                            </ul>
                 }
                        
              </li>
              <li className="relative mb-4 text-slate-200" onClick={handleAbout}>
                  <Link className="flex items-center gap-x-3" href="" >ABOUT US <Image src={!about ? UpIcon : DownIcon} width={20} height={40} alt="openmenu" /></Link>
                  {
                            about && 
                            <ul className="mt-4 pl-3 absolute bg-[#002843] w-56 top-[40px] p-4 flex flex-col text-left z-30">
                                <li onClick={handleCloseMenu} className="mb-4"><Link href='../our-story'>OUR STORY</Link></li>
                                <li onClick={handleCloseMenu} className="mb-4"><Link href='../service-team'>OUR TRILOGY SERVICE TEAM</Link></li>
                                <li onClick={handleCloseMenu} className="mb-4"><Link href='../plan-team'>OUR 401K & QUALIFIED PLANS TEAM</Link></li>
                                <li onClick={handleOpenForm} className="mb-6"><Link href=''>CONTACT US</Link></li>
                            </ul>
                        }
              </li>
              <li className="mb-4 text-slate-200 " onClick={handleOpenForm}>
                  <Link className="flex items-center gap-x-3" href="" >CLIENT LOGIN </Link>
              </li> 
              
            </ul>

           
                <ul ref={menuRef} className={`lg:hidden absolute bg-[#002843] -left-0 top-[50px] md:top-[70px] md:pl-28 py-8 px-4 0 w-full transition-display duration-700 ease-in-out z-40   ${menuopen ? 'block' : 'hidden'}`}>
                    <li onClick={handleOpenForm} className="mb-4 text-slate-200 ">
                        <Link className="flex items-center gap-x-3" href="" >OUR ADVISORS </Link>
                
                    </li>
                    <li onClick={handleOurService} className="mb-4 text-slate-200 ">
                        <Link className="flex items-center gap-x-3" href="" >SERVICES <Image src={!ourService ? UpIcon : DownIcon} width={20} height={40} alt="openmenu" /></Link>
                        {
                            ourService &&
                            <ul className="z-30 pl-3 mt-4">
                                <li onClick={handleCloseMenu} className="mb-4"><Link href='../401k'>401(k) & RETIREMENT PLANNING</Link></li>
                                <li onClick={handleCloseMenu} className="mb-4"><Link href='../investment-strategy' >INVESTMENT STRATEGIES</Link></li>
                                <li onClick={handleCloseMenu} className="mb-4"><Link href='../colleges-planning' >COLLEGE & EDUCATION PLANNING</Link></li>
                                <li onClick={handleCloseMenu} className="mb-6"><Link href='../insurance-planning' >INSURANCE SERVICES</Link></li>
                            </ul>
                        }
                        
                    </li>
                    <li onClick={handleAbout} className="mb-4 text-slate-200 ">
                        <Link className="flex items-center gap-x-3" href="" >ABOUT US <Image src={!about ? UpIcon : DownIcon} width={20} height={40} alt="openmenu" /></Link>
                        {
                            about && 
                            <ul className="z-30 pl-3 mt-4">
                                <li onClick={handleCloseMenu} className="mb-4"><Link href='../our-story'>OUR STORY</Link></li>
                                <li onClick={handleCloseMenu} className="mb-4"><Link href='../service-team'>OUR TRILOGY SERVICE TEAM</Link></li>
                                <li onClick={handleCloseMenu} className="mb-4"><Link href='../plan-team'>OUR 401K & QUALIFIED PLANS TEAM</Link></li>
                                <li onClick={handleOpenForm} className="mb-6"><Link href=''>CONTACT US</Link></li>
                            </ul>
                        }
                    
                    </li>
                    <li onClick={handleOpenForm} className="mb-4 text-slate-200 ">
                        <Link className="flex items-center gap-x-3" href="" >CLIENT LOGIN </Link>
                    </li> 
                    
                </ul>
        

            <button className=" lg:hidden" onClick={handleMenu}>
              { !menuopen ? <FaBars className="text-2xl text-slate-200" /> : <FaTimes className="text-2xl text-slate-200" /> }
            </button>

            <button className="hidden lg:block text-sm text-slate-200 bg-[#8fbd38] p-3" onClick={handleOpenForm}>
                MEET WITH AN ADVISOR
            </button>
          </nav>
        </header>
     );
}
 
export default Navbar;