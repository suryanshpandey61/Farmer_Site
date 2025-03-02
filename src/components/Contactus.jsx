import React from "react";
import { FcBusinessContact } from "react-icons/fc";
import ContactUsImage from "../assets/contactUsImage.png";

function Contactus() {
  return (
    <div className="w-[100%] ">
      {/* contact from & image Div  */}
      <div className="w-[80%] gap-x-[4%] flex bg-[#F7F1E7] p-[2%] border border-green-400 rounded-lg mx-auto">
        {/* left side form div  */}
        <div className="w-[60%]">
          {/* heading div  */}
          <div className="flex gap-x-[5%] items-center">
            <h1 className="text-[3.2rem]">Contact Us</h1>
            <FcBusinessContact className="text-[4rem]" />
          </div>
          {/* mail div    */}
          <div className="mt-[5%] text-slate-400">
            <p className="text-[2.1rem] text-slate-400">
              Talk to our Best Team
            </p>
            <p className="text-[1.5rem] mt-[3%]">
              For Enquiry , Suggestion or any Updation connect with
              <span className="text-red-700"> support@mybabu.xyz</span>
            </p>
          </div>
          <div className="mt-[6%]">
            <form action="">
              {/* Name & Mail Div  */}
              <div className="w-[100%] gap-x-[2%] flex">
                {/* Name input div  */}
                <div className="w-[50%]">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className=" border w-[100%] border-green-400 rounded-md h-[4rem] pl-[2%] text-[1.5rem]"
                  />
                </div>
                {/* mail input div  */}
                <div className="w-[50%]">
                  <input
                    type="email"
                    name="email"
                    id=""
                    placeholder="E-mail"
                    className="w-[100%] border border-green-400 rounded-md h-[4rem] pl-[2%] text-[1.5rem]"
                  />
                </div>
              </div>
              {/* Phone Number div  */}
              <div className="w-[100%]  mt-[5%] ">
                <input
                  type="number"
                  name="phone-number"
                  id=""
                  className="number-input appearance-none border w-[100%] border-green-400 rounded-md h-[4rem] pl-[2%] text-[1.5rem]"
                  placeholder="+91-8855883388"
                />
              </div>
              {/* Message div  */}
              <div className="mt-[5%]">
                <input
                  type="textarea"
                  name="textarea"
                  className=" border w-[100%] border-green-400 rounded-md h-[4rem] pl-[2%] text-[1.5rem]"
                  placeholder="Write Some Message"
                />
              </div>
              <div className=" mt-[5%]">
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
        <div className="w-[40%] border border-green-400 rounded-lg">
          <img
            src={ContactUsImage}
            alt="Contact Us Image"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* get in touch  Social  Media Icons   div , Quick links */}
      <div>
        {/* Get In touch Div  */}
        <div>
                get in touch
        </div>
        {/* quick links div  */}
        <div>
            quick links div 
        </div>
        
      </div>
    </div>
  );
}

export default Contactus;
