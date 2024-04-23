import Image from "next/image";
import { FaPlay, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Trilogy from "/public/image/logo-main.png";
import brokerCheck from "/public/image/BrokerCheck.png";



export default function Footer() {
    return ( 
        <footer className="flex flex-col justify-center items-center mt-2 bg-[#192d45]">
            <div className="flex flex-row gap-4 justify-center items-center p-8 bg-[#740042] w-full">
                <FaPlay className="text-[#8dc63f]" />
                <p className="text-slate-200 font-bold text-[2.3vw] md:text-[1.5vw] lg:text-1vw">Call Us To Get Started. (844)-###-###</p>
            </div>
            <div className="p-4 md:grid md:grid-cols-4 md:w-[90%] md:gap-7 md:items-top md:h-[300px]">
                <div className="flex flex-col justify-center">
                    <Image className="w-2/6  md:w-[220px] mb-3" src={Trilogy} alt="Trilogy-logo" />
                    <p className="text-slate-200 mb-2">2601 Main St. #100 Irvine, CA 92614</p>
                    <p className="text-slate-200 mb-2 ">(844) ###-####</p>
                    <Link className="text-[#3d7a7e] flex items-center gap-3" href=""> <FaEnvelope className="text-slate-200" />  info@trilogyfs.com</Link>
                </div>

                <div className="mt-6">
                    <h2 className="text-[#699245] text-xl font-bold">Services</h2>
                    <p className="text-slate-200 text-md font-bold mt-2 hover:text-[#436a8a] cursor-pointer"><Link href='../401k'>401(k) & Retirement Planning</Link></p>
                    <p className="text-slate-200 text-md font-bold mt-2 hover:text-[#436a8a] cursor-pointer"><Link href='../asset-management'>Wealth and Asset Management</Link></p>
                    <p className="text-slate-200 text-md font-bold mt-2 hover:text-[#436a8a] cursor-pointer"><Link href='../investment-strategy'>Investment Strategies</Link></p>
                    <p className="text-slate-200 text-md hover:text-[#436a8a] cursor-pointer font-bold mt-2"><Link href='../colleges-planning'>College & Education Planning</Link></p>
                </div>

                <div className="mt-6">
                    <h2 className="text-[#699245] text-xl font-bold"><Link href='../planning-tool'>Insights & Tools</Link></h2>
                    <p className="text-slate-200 text-md font-bold mt-2 hover:text-[#436a8a] cursor-pointer"><Link href='../planning-tool'>Financial Life Planning Tool</Link></p>
                    <p className="text-slate-200 text-md font-bold mt-2 hover:text-[#436a8a] cursor-pointer"><Link href='../financial-blog'>Financial Blog</Link></p>
                    <p className="text-slate-200 text-md font-bold mt-2 hover:text-[#436a8a] cursor-pointer"><Link href='../financial-faq'>Financial FAQ</Link></p>
                </div>

                <div className="mt-6 ">
                    <h2 className="text-[#699245] text-xl font-bold"><Link href=''>About Us</Link></h2>
                    <p className="text-slate-200 text-md font-bold mt-2 hover:text-[#436a8a] cursor-pointer"><Link href='../our-story'>Our Story</Link></p>
                    <p className="text-slate-200 text-md font-bold mt-2 hover:text-[#436a8a] cursor-pointer"><Link href='../careers-and-culture'>Careers & Culture</Link></p>
                </div>

            </div>

            <div className=" h-px my-6 bg-[#8cba3b] w-[90%]"></div>

                <div className="w-[90%]">
                    <div >
                        <p className="text-slate-100 inline-block">
                            Some advisors associated with this material are registered representatives of LPL Financial (“LPL”) and are Investment Advisor Representatives (“IAR’s”) for Trilogy Capital Inc. (“TC”). Some IAR’s of TC are not registered or affiliated with LPL Financial. Securities offered through LPL Financial. Member FINRA/SIPC. Investment advisory services offered through TC, A Registered Investment Advisor. TC markets advisory services under the name of Trilogy Financial (“TF”), an affiliated but separate legal entity. TC and TF are separate entities from LPL. The LPL Financial Registered Representatives associated with this site may only discuss and/or transact securities business with residents of the United States.
                        </p>
                    </div>

                    <div className="flex justify-between mt-8">
                       <div className="text-slate-100 md:flex md:gap-3">
                         <p className="mb-3 hover:text-[#436a8a] cursor-pointer">Trilogy Financial Privacy Policy</p>
                         <p className="mb-3 hover:text-[#436a8a] cursor-pointer">Webmail Portal</p>
                         <p className="mb-3 hover:text-[#436a8a] cursor-pointer">California Insurance License Information</p>
                       </div>

                       <div className="flex gap-3 items-center">
                        <FaFacebook className="text-xl text-[#8fbd38] " />
                        <FaTwitter className="text-xl text-[#8fbd38] " />
                        <FaLinkedin className="text-xl text-[#8fbd38] " />
                       </div>
                    </div>

                    <div className="flex justify-between mt-8 mb-8 w-full items-center">
                        <div>
                            <p className="text-slate-100">© 2024 Trilogy Financial Services, Inc. All Rights Reserved.</p>
                        </div>

                        <div>
                             <Image src={brokerCheck} className="w-40"  alt="broker-img"/>
                        </div>
                    </div>
                </div>

        </footer>
     );
}
 
