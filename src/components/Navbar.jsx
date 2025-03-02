import React from "react";
import { Link } from "react-scroll";
import babuLogo from '../assets/babuLogo.svg'
function Navbar() {
  return (
    <div 
    // style={{ fontFamily: "Protest Strike, sans-serif" }}
    className="text-white font-sans  z-50 h-[100px] fixed bg-[#12183A] sm:p-2 md:p-3 lg:p-4 flex w-[100%] justify-evenly md:text-[22px] sm:text-[16px] lg:text-[28px] pt-[1%] ">
        <div className=" flex items-center">
        <Link to="mybabu" smooth={true} duration={500}>
            <img src={babuLogo} alt="" className="w-[30px] sm:w-[50px] md:w-[75px] lg:w-[100px] hover:cursor-pointer hover:scale-150 transition-all duration-500" />
        </Link>
        </div>
      <div className="flex sm:w-[40%] md:w-[50%] lg:w-[70%] justify-center gap-x-[1%] sm:gap-x-[2%] md:gap-x-[4%] lg:gap-x-[7%] items-center ">
        <div className="text-white hover:text-orange-400  hover:cursor-pointer transition-all duration-200">
          <Link to="mybabu" smooth={true} duration={500}>
            My Babu
          </Link>
        </div>
        <div className="text-white hover:text-orange-400  hover:cursor-pointer transition-all duration-200">
          <Link to="babus" smooth={true} duration={500}>
            Babus
          </Link>
        </div>
        <div className="text-white hover:text-orange-400  hover:cursor-pointer transition-all duration-200">
          <Link to="services" smooth={true} duration={500}>
          Services
          </Link>
        </div>
        <div className="text-white hover:text-orange-400  hover:cursor-pointer transition-all duration-200">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </div>
        <div className="text-white hover:text-orange-400  hover:cursor-pointer transition-all duration-200">
          <Link to="faq" smooth={true} duration={500}>
           FAQ
          </Link>
        </div>
        <div className="text-white hover:text-orange-400  hover:cursor-pointer transition-all duration-200">
          <Link to="contactus" smooth={true} duration={500}>
           Contact Us
          </Link>
        </div>
      </div>
      <div className="bg-slate-500  flex sm:px-1 md:px-2 lg:px-4 rounded-2xl hover:cursor-pointer hover:bg-blue-500  transition-all duration-500">
        <button className="text-[14px] sm:text-[16px] md:text-[20px] lg:text-[26px]">Get Started</button>
      </div>
    </div>
  );
}

export default Navbar;
