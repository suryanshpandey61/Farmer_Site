import React from "react";
import User from "../assets/user.png";
import PersonalTraits from "../assets/personalTraits.webp";

function MyBabu() {
  return (
    <div className="">
      {/* Hero Section 1 */}
      <div className="w-[60%] mt-[4%] mb-7 flex items-stretch  mx-auto pt-[4%] gap-x-[2%] ">
        {/* left text div  */}
        <div className="bg-white w-[60%] p-[4%]  rounded-3xl flex flex-col ">
          {/* heading div  */}
          <div>
            <h1
              className=" text-[36px]"
              style={{ fontFamily: "Protest Strike, sans-serif" }}
            >
              Welcome to my babu - Your Personal Bureaucracy Personal Assistant
            </h1>
          </div>

          <div className="text-[20px] mt-2">
            <p>
              Let my babu help you to navigate the maze of government paperwork
              effortlessly.
            </p>
          </div>

          <div className="text-[20px] mt-2">
            <p>
              Are you tired of waiting in long queues and struggling with
              confusing forms ?
            </p>
          </div>

          <div className="text-[20px] mt-2">
            <p>
              My babu connect you with experianced helpers who understand the
              ins and out of the government procedure.
            </p>
          </div>

          <div className="text-[20px] mt-2">
            <p>
              Weather it applying for licenses,filling documents or handling any
              government related paperwork , we've got you covered.
            </p>
          </div>
        </div>

        {/* right image div  */}
        <div className=" w-[50%] flex items-stretch mt-[5%] ">
          <img
            src={User}
            alt="User Image"
            className="rounded-3xl object-cover "
          />
        </div>
      </div>

      {/* Hero Section 2  */}
      <div className="bg-[#F8F7F1]">
        <div className="w-[60%] pb-[4%] flex mx-auto pt-[4%] gap-x-[2%] ">
          {/* Left image div  */}
          <div className=" w-[48%] flex items-stretch ml-[3%]  ">
            <img
              src={PersonalTraits}
              alt="User Image"
              className="rounded-3xl object-cover "
            />
          </div>

          {/* Right text div  */}
          <div className="bg-black text-white w-[50%] p-[4%]  rounded-3xl flex flex-col gap-y-7">
            {/* heading div  */}
            <div className="w-full">
              <h1
                className=" text-[36px]  flex justify-center"
                style={{ fontFamily: "Protest Strike, sans-serif" }}
              >
                Who We Are
              </h1>
            </div>

            <div className="text-[20px] mt-2 flex justify-center">
              <p>
                At mybabu, we believe that dealing with government paperwork
                shouldn’t be a hassle.
              </p>
            </div>

            <div className="text-[20px] mt-2">
              <p>
                Founded with the vision of simplifying bureaucracy for every
                Indian citizen, our platform bridges the gap between you and
                experts who specialize in government processes.
              </p>
            </div>

            <div className="text-[20px] mt-2">
              <p>
                Our trusted network of 'Babus' (paperwork assistants) are here
                to guide you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyBabu;
