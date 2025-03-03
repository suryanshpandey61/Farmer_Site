import React from "react";
import { FaCodePullRequest } from "react-icons/fa6";
import { GrUserExpert } from "react-icons/gr";
import { FcAssistant } from "react-icons/fc";
import { GiProgression } from "react-icons/gi";

function Work() {
  return (
    <div className="w-[100%] overflow-hidden">
      <div className="work-bg mb-7">
        <h1 className="flex md:text-[4rem]  text-[2rem] font-serif justify-center lg:pt-[5%]">
          How My Babu Works
        </h1>
        <div className="flex justify-center pb-[5%] mt-[2%]">
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
        </div>
      </div>

      <div className="mt-[2%] grid gap-x-[1%] gap-y-[2%] md:grid-cols-4  sm:grid-cols-1 w-[95%] mx-auto">
        {/* Work Card 1 */}
        <div className="p-4 hover:cursor-pointer hover:-translate-y-2 transition-all duration-300 work-card rounded-lg">
          <div className="flex justify-between">
            <h1 className="text-slate-500 text-[2rem] font-bold">Submit Your Request</h1>
            <FaCodePullRequest  className="text-[3rem] lg:mt-[6%]"/>
          </div>
          <div className="lg:mt-[4%] text-[1.2rem]">
            <p>
              Fill out our simple online form describing your needs. Our
              intuitive interface ensures that you provide all the necessary
              details right away.
            </p>
          </div>
        </div>
        {/* Work Card 2  */}
        <div className="p-4 hover:cursor-pointer hover:-translate-y-2 transition-all duration-300 work-card rounded-lg">
          <div className="flex justify-between">
            <h1 className="text-slate-500 text-[2.2rem] font-bold">Expert Matching</h1>
            <GrUserExpert className="text-[3rem] lg:mt-[6%] md:ml-0 ml-[-20%]" />
       
          </div>
          <div className="lg:mt-[4%] text-[1.2rem]">
            <p>
            Our system automatically connects you with a vetted 'Kagzi Sahayak' who specializes in your required department.


            </p>
          </div>
        </div>
        {/* Work Card 3  */}
        <div className="p-4 hover:cursor-pointer hover:-translate-y-2 transition-all duration-300 work-card rounded-lg">
          <div className="flex justify-between">
            <h1 className="text-slate-500 text-[2rem] font-bold">Receive Assistance</h1>
            <FcAssistant className="text-[3rem] lg:mt-[6%] md:ml-[-20%]"/>
            
          </div>
          <div className="lg:mt-[4%] text-[1.2rem]">
            <p>
            Work with your assigned expert who will guide you through every step of your paperwork process—from document verification to submission.
            </p>
          </div>
        </div>
        {/* Work Card 4 */}
        <div className="p-4 hover:cursor-pointer mb-12 md:mb-0 lg:mb-0 xl:mb-0 hover:-translate-y-2 transition-all duration-300 work-card rounded-lg">
          <div className="flex justify-between">
            <h1 className="text-slate-500 text-[2rem] font-bold">Track Your Progress</h1>
            <GiProgression  className="text-[3rem] lg:mt-[6%]" />
          
          </div>
          <div className="lg:mt-[4%] text-[1.2rem]">
            <p>
            Stay updated with real-time tracking on your application's status until completion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
