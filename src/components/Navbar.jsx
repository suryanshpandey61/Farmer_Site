import React from "react";
import {Link} from "react-scroll";
function Navbar() {
  return (
    <div className="text-white fixed bg-slate-700 p-4 flex w-[100%] justify-evenly text-[28px] pt-[1%] font-serif">
        <div className="text-yellow-400 hover:text-blue-500 hover:underline hover:cursor-pointer">
            <Link to="mybabu" smooth={true} duration={500}>
               My Babu
            </Link>
        </div>
        <div className="text-yellow-400 hover:text-blue-500 hover:underline hover:cursor-pointer">
            <a href="">Babus</a>
        </div>
        <div className="text-yellow-400 hover:text-blue-500 hover:underline hover:cursor-pointer">
            <a href="">Services</a>
        </div>
        <div className="text-yellow-400 hover:text-blue-500 hover:underline hover:cursor-pointer">
            <a href="">Work</a>
        </div>
        <div className="text-yellow-400 hover:text-blue-500 hover:underline hover:cursor-pointer">
            <a href="">FAQ</a>
        </div>
        <div className="text-yellow-400 hover:text-blue-500 hover:underline hover:cursor-pointer">
            <a href="">Contact</a>
        </div>
        <div className="bg-red-500 px-4 rounded-2xl hover:cursor-pointer hover:bg-green-500 transition-all duration-500">
           <button>Get Started</button>
        </div>
    </div>
  );
}

export default Navbar;
