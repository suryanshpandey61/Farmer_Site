import React, { useState } from "react";
import { Link } from "react-scroll";
import babuLogo from '../assets/babuLogo.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // bg-[#12183A]
  return (
    <div className="text-white font-sans z-50 md:h-[100px] h-[80px] fixed navbar-bg  sm:p-2 md:p-3 lg:p-4 flex w-[100%] justify-evenly text-[16px] lg:text-[28px] pt-[1%]">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="mybabu" smooth={true} duration={500}>
          <img src={babuLogo} alt="Logo" className="sm:w-[30px] w-[80px] md:w-[75px] lg:w-[100px] hover:cursor-pointer hover:scale-150 transition-all duration-500" />
        </Link>
      </div>

      {/* Hamburger/Close Button */}
      <div className="md:hidden flex items-center mr-5" onClick={toggleMenu}>
        {isMenuOpen ? ( 
          // Close icon
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        ) : (
          // Hamburger icon
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        )}
      </div>

      {/* Navbar Links - Desktop View */}
      <div className="hidden md:flex w-[80%] lg:w-[80%] justify-center gap-x-[1%] sm:gap-x-[2%] md:gap-x-[4%] lg:gap-x-[7%] items-center">
        <div className="text-white hover:text-orange-400 hover:cursor-pointer transition-all duration-200">
          <Link to="mybabu" smooth={true} duration={500}>My Babu</Link>
        </div>
        <div className="text-white hover:text-orange-400 hover:cursor-pointer transition-all duration-200">
          <Link to="babus" smooth={true} duration={500}>Babus</Link>
        </div>
        <div className="text-white hover:text-orange-400 hover:cursor-pointer transition-all duration-200">
          <Link to="services" smooth={true} duration={500}>Services</Link>
        </div>
        <div className="text-white hover:text-orange-400 hover:cursor-pointer transition-all duration-200">
          <Link to="work" smooth={true} duration={500}>Work</Link>
        </div>
        <div className="text-white hover:text-orange-400 hover:cursor-pointer transition-all duration-200">
          <Link to="faq" smooth={true} duration={500}>FAQ</Link>
        </div>
        <div className="text-white hover:text-orange-400 hover:cursor-pointer transition-all duration-200">
          <Link to="contactus" smooth={true} duration={500}>Contact Us</Link>
        </div>
      </div>

      {/* Get Started Button - Desktop View */}
      <div className="bg-slate-500 hidden md:flex sm:px-1 md:px-2 lg:px-4 rounded-2xl hover:cursor-pointer hover:bg-blue-500 transition-all duration-500">
        <button className="text-[14px] sm:text-[16px] md:text-[20px] lg:text-[26px]">Get Started</button>
      </div>

      {/* Mobile Menu - when Hamburger is clicked */}
      {isMenuOpen && (
        <div className="md:hidden absolute rounded-lg right-0 bg-[#12183A] z-50 flex flex-col items-center pt-10 space-y-4">
          <div className="text-white hover:text-orange-400 hover:cursor-pointer transition-all duration-200">
            <Link to="mybabu" smooth={true} duration={500}>My Babu</Link>
          </div>
          <div className="text-white hover:text-orange-400 hover:cursor-pointer transition-all duration-200">
            <Link to="babus" smooth={true} duration={500}>Babus</Link>
          </div>
          <div className="text-white hover:text-orange-400 hover:cursor-pointer transition-all duration-200">
            <Link to="services" smooth={true} duration={500}>Services</Link>
          </div>
          <div className="text-white hover:text-orange-400 hover:cursor-pointer transition-all duration-200">
            <Link to="work" smooth={true} duration={500}>Work</Link>
          </div>
          <div className="text-white hover:text-orange-400 hover:cursor-pointer transition-all duration-200">
            <Link to="faq" smooth={true} duration={500}>FAQ</Link>
          </div>
          <div className="text-white hover:text-orange-400 hover:cursor-pointer transition-all duration-200">
            <Link to="contactus" smooth={true} duration={500}>Contact Us</Link>
          </div>
          <div className="bg-slate-500  px-4 py-2 rounded-2xl hover:cursor-pointer hover:bg-blue-500 transition-all duration-500 mt-4">
            <button className="text-[16px]  md:text-[20px] lg:text-[26px]">Get Started</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
