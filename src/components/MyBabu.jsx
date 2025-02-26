import React from 'react'
import User from '../assets/user.png'
 

function MyBabu() {
  return (
    <div className="w-[60%] mt-[4%] mb-7 flex items-stretch  mx-auto pt-[4%] gap-x-[4%] ">

        {/* left text div  */}
        <div className='bg-white w-[50%] p-[4%]  rounded-3xl flex flex-col gap-y-[4%]'> 
          {/* heading div  */}
          <div>
            <h1 className=' text-[36px]' style={{ fontFamily: "Protest Strike, sans-serif" }}>
              Welcome to my babu - Your Personal Bureaucracy Personal Assistant
            </h1>
          </div>

          <div className='text-[20px]'>
            <p>Let my babu help you to navigate the maze of government paperwork effortlessly.</p>
          </div>

          <div  className='text-[20px]'>
            <p>Are you tired of waiting in long queues and struggling with confusing forms ?</p>
          </div>

          <div  className='text-[20px]'>
            <p>My babu connect you with experianced helpers who understand the ins and out of the government procedure.</p>
          </div>

          <div className='text-[20px]'>
            <p>Weather it applying for licenses,filling documents or handling any government related paperwork , we've got you covered.</p>
          </div>
        </div>

        {/* right image div  */}
        <div className=' w-[50%]  mt-[4%] flex items-stretch lg:h-[550px]'>
           <img src={User} alt="User Image" 
           className='rounded-3xl object-cover w-full h-full'
           />
        </div>


    </div>
  )
}

export default MyBabu