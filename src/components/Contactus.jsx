import React from "react";
import { FcBusinessContact } from "react-icons/fc";
import ContactUsImage from "../assets/contactUsImage.png";
import { GrNavigate } from "react-icons/gr";
import { Link } from "react-scroll";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";

function Contactus() {
  return (
    <div className="w-[100%] ">
      {/* contact from & image Div  */}
      <div className="md:w-[70%] w-[90%] justify-between flex bg-[#F7F1E7] p-[2%] border border-green-400 rounded-lg mx-auto">
        {/* left side form div  */}
        <div className="w-[60%]">
          {/* heading div  */}
          <div className="flex gap-x-[5%] items-center">
            <h1 className="md:text-[2rem] text-[1.5rem]">Contact Us</h1>
            <FcBusinessContact className="md:text-[2.8rem] text-[2rem]" />
          </div>
          {/* mail div    */}
          <div className="mt-[2%] text-slate-400">
            <p className="md:text-[1.5rem] text-[1.2rem] text-slate-400">
              Talk to our Best Team
            </p>
            <p className="md:text-[1.5rem] text-[1rem] mt-[3%]">
              For Enquiry , Suggestion or any Updation connect with
              <span className="text-red-700"> support@mybabu.xyz</span>
            </p>
          </div>
          <div className="mt-[2%]">
            <form action="">
              {/* Name & Mail Div  */}
              <div className="w-[100%] md:gap-x-[2%] gap-y-[1%] flex md:flex-row flex-col">
                {/* Name input div  */}
                <div className="md:w-[50%] w-[100%]">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className=" border w-[100%] border-green-400 rounded-md h-[2rem] md:h-[3rem] pl-[2%] text-[0.8rem] mb-2 md:text-[1.5rem]"
                  />
                </div>
                {/* mail input div  */}
                <div className="md:w-[50%] w-[100%]">
                  <input
                    type="email"
                    name="email"
                    id=""
                    placeholder="E-mail"
                    className="w-[100%]  border border-green-400 rounded-md h-[2rem] md:h-[3rem] pl-[2%] text-[0.8rem] md:text-[1.5rem]"
                  />
                </div>
              </div>
              {/* Phone Number div  */}
              <div className="w-[100%]  mt-[2%] ">
                <input
                  type="number"
                  name="phone-number"
                  id=""
                  className="number-input appearance-none border w-[100%] border-green-400 rounded-md h-[2rem] md:h-[3rem] pl-[2%] text-[0.8rem] md:text-[1.5rem]"
                  placeholder="+91-8855883388"
                />
              </div>
              {/* Message div  */}
              <div className="mt-[3%]">
                <input
                  type="textarea"
                  name="textarea"
                  className=" border w-[100%] border-green-400 rounded-md h-[2rem] md:h-[3rem] pl-[2%] text-[0.8rem] md:text-[1.5rem]"
                  placeholder="Write Some Message"
                />
              </div>
              <div className=" mt-[3%]">
                <button className="form-btn">
                  <div class="svg-wrapper-1">
                    <div class="svg-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                          fill="currentColor"
                          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span>Send</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* rigth side image div  */}
        <div className="md:w-[30%] w-[30%]   rounded-lg">
          <img
            src={ContactUsImage}
            alt="Contact Us Image"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* get in touch  Social  Media Icons   div , Quick links */}
      <div className="bg-[#12183A] mt-[2%]">
        {/* Quick Links  Div  */}
        <div className="w-[100%]">
          <div className="flex mx-auto justify-center items-center gap-x-[1%]  pt-[2%]">
            <h1 className="text-white md:text-[3rem] text-[2rem] font-bold">Navigate</h1>
            <GrNavigate className="md:text-[3rem] text-[2rem] text-white" />
          </div>
          {/* links div  */}
          <div className="text-white w-[100%] gap-x-[3%] md:gap-x-[5%] mt-[2%] flex  justify-center text-[1rem] md:text-[1.5rem] ">
            <div>
              <Link
                to="mybabu"
                smooth={true}
                duration={500}
                className="hover:underline hover:cursor-pointer transition-all duration-500 hover:text-slate-400"
              >
                My Babu
              </Link>
            </div>
            <div>
              <Link
                className="hover:underline hover:cursor-pointer transition-all duration-500 hover:text-slate-400"
                to="babus"
                smooth={true}
                duration={500}
              >
                Babus
              </Link>
            </div>
            <div>
              <Link
                className="hover:underline hover:cursor-pointer transition-all duration-500 hover:text-slate-400"
                to="services"
                smooth={true}
                duration={500}
              >
                Services
              </Link>
            </div>
            <div>
              <Link
                className="hover:underline hover:cursor-pointer transition-all duration-500 hover:text-slate-400"
                to="work"
                smooth={true}
                duration={500}
              >
                Work
              </Link>
            </div>
            <div>
              <Link
                className="hover:underline hover:cursor-pointer transition-all duration-500 hover:text-slate-400"
                to="faq"
                smooth={true}
                duration={500}
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>
        {/* Copyrigth and Socia media links icons div  */}
        <div className="w-[80%]  flex md:flex-row flex-col justify-between items-center mx-auto mt-[2%] pb-[4%]">
          {/* left div for icons  */}
          <div className="flex mb-2 w-[50%] text-white text-[1.5rem] md:text-[2rem] gap-x-[6%] md:gap-x-[4%]">
            <div className="hover:cursor-pointer hover:text-black hover:bg-white rounded-md transition-all duration-500">
              <FaInstagram />
            </div>
            <div className="hover:cursor-pointer hover:text-black hover:bg-white rounded-md transition-all duration-500">
              <CiFacebook />
            </div>
            <div className="hover:cursor-pointer hover:text-black hover:bg-white rounded-md transition-all duration-500">
              <FaXTwitter />
            </div>
            <div className="hover:cursor-pointer hover:text-black hover:bg-white rounded-md transition-all duration-500">
              <CiYoutube />
            </div>
          </div>

          {/* rigth div for copyrights  */}
          <div className="text-white md:text-[1.5rem] text-[0.8rem] ">
              Copyright: © 2025 MyBabu. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
