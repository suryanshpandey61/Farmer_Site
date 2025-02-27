import React from "react";
import ServiceImage from "../assets/ServicesImage.jpg";
function Services() {
  return (
    <div className="relative">
      {/* Image and text div  */}
      <div className="relative">
        <img
          src={ServiceImage}
          alt=""
          className="absolute h-[600px] w-full object-cover overflow-hidden"
        />
        <div className="absolute pl-[35%] mt-8">
          <h1 className="text-[4rem] relative flex justify-center font-bold pt-[5%]">
            Our Services
          </h1>
          <p className="text-[2rem] text-white relative flex justify-center font-bold pt-[2%]">
            Mybabu offers a range of <br />
            services tailored to your needs. <br />
            Our experts help you with:
          </p>
          <div className="mt-[10%] gap-x-[2%] flex justify-between">
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

            <button className="bg-white px-9 rounded-xl font-bold hover:bg-green-500 hover:text-white transition-all duration-500">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* <div className="relative">
         <div>Document Assistant</div>
         <div>Process Consultation</div>
         <div>Application Review</div>
         <div>Personalized Support</div>
      </div> */}
    

    </div>
  );
}

export default Services;
