import React from "react";
import ServiceImage from "../assets/ServicesImage.jpg";
import DocumentAssistant from "../assets/DocumentsApprove.jpeg";
import PersonalizedSupport from "../assets/PersonalizedSupport.jpg";
import ProcessConsultation from "../assets/ProcessConsultation.jpg";
import ApplicationReview from "../assets/ApplicationReview.jpeg";
function Services() {
  return (
    <div className="overflow-y-hidden">
      {/* Image div with text  */}
      <div
        className="h-[600px] bg-cover bg-center"
        style={{ backgroundImage: `url(${ServiceImage})` }}
      >
        <h1 className="text-[4rem] relative flex justify-center font-bold pt-[5%]">
          Our Services
        </h1>

        <p className="text-[1.5rem] text-white relative flex justify-center font-bold pt-[2%]">
          Mybabu offers a range of
        </p>
        <p className="text-[1.5rem] text-white relative flex justify-center font-bold">
          services tailored to your needs.
        </p>
        <p className="text-[1.5rem] text-white relative flex justify-center font-bold ">
          Our experts help you with:
        </p>
        <div className="mt-[5%] gap-x-[2%] flex justify-center">
          {/* Get Started Btn  */}
          <button class="cssbuttons-io-button">
            Get started
            <div class="icon">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </button>
          {/* Learn More Btn  */}
          <button className="bg-white px-9 rounded-xl font-bold hover:bg-green-500 hover:text-white transition-all duration-500">
            Learn More
          </button>
        </div>
      </div>

      {/* 4 Card of Services */}
      <div className="grid grid-cols-2 mx-auto w-[70%] mt-[4%] gap-x-[2%] gap-y-[5%] ">
        <div
          className="object-cover object-center h-[400px] bg-no-repeat p-5 rounded-lg transition-all duration-500 ease-in-out hover:bg-[size:120%] hover:cursor-pointer"
          style={{ backgroundImage: `url(${DocumentAssistant})` }}
        >
          <h1 className="text-[2rem] text-white font-bold flex mt-[50%] hover:cursor-pointer hover:text-yellow-300">Document Assistant</h1>
          <p className="text-[1.2rem] text-slate-500">Babu will fill out forms, ensuring all required documents are complete, and avoiding common mistakes.</p>
        </div>
        <div
          className="object-cover object-center h-[400px]  p-5 rounded-lg"
          style={{ backgroundImage: `url(${ProcessConsultation})` }}
        >
          <h1 className="text-[2rem] text-white font-bold flex mt-[50%] hover:cursor-pointer hover:text-yellow-300">Process Consultation</h1>
          <p className="text-[1.2rem] text-slate-500">Step-by-step instructions on navigating government procedures, including licensing, permits, and registrations</p>
        </div>
        <div
          className="object-cover object-center h-[400px] bg-no-repeat p-5 rounded-lg"
          style={{ backgroundImage: `url(${ApplicationReview})` }}
        >
          <h1 className="text-[2rem] text-white font-bold flex  hover:cursor-pointer hover:text-yellow-300">Application Review</h1>
          <p className="text-[1.2rem] text-black font-semibold">Expert verification and corrections of your paperwork to increase the success rate of your applications</p>
        </div>
        <div
          className="object-cover object-center h-[400px] bg-no-repeat p-5 rounded-lg"
          style={{ backgroundImage: `url(${PersonalizedSupport})` }}
        >
        <h1 className="text-[2rem]  text-white font-bold flex hover:cursor-pointer hover:text-yellow-300">Personalized Support</h1>
        <p className="text-[1.2rem] text-slate-500">One-on-one support via chat or in-person to answer your queries and provide timely assistance.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
