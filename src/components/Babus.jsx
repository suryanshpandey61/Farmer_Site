import React from 'react'
import TrustImage from '../assets/TrustImage.jpg'
import ExpertImage from '../assets/ExpertImages.jpg'
import AlwaysUpdated from '../assets/AlwaysUpdated.jpg'
import ReducedTimeImage from '../assets/ReducedTime.jpg'
function Babus() {
  return (
    <div className='w-[100%]'>
 
       <div className='w-[80%] mx-auto grid grid-cols-4 gap-x-[2%]'>
           {/* Card 1 */}
           <div className='bg-[#FAEBDC] rounded-xl p-5 hover:shadow-3xl hover:scale-105 duration-300 transition-all '>
            <img src={TrustImage} alt="Trust Image" className='rounded-xl'  />
              <h1 
              className='text-black text-[2rem] mt-[5%] flex justify-center' 
              style={{ fontFamily: "Protest Strike, sans-serif" }}>Trust</h1>
              <p className='text-[1.5rem] text-slate-500 '>
              Your dependable guide through every paperwork hurdle.
              </p>
            </div>
            {/* Card 2 */}
           <div className='bg-[#FAEBDC] rounded-xl p-5 hover:shadow-3xl hover:scale-105 duration-300 transition-all '>
            <img src={ExpertImage} alt="Expert Images" className=' rounded-xl' />
            <h1
             className='text-black mt-[5%] text-[2rem] flex justify-center' 
             style={{ fontFamily: "Protest Strike, sans-serif" }}
            >Expertise</h1>
            <p className='text-[1.5rem] text-slate-500 '>
            Insightful support from seasoned professionals.
            </p>
           </div>
           {/* Card 3 */}
           <div className='bg-[#FAEBDC] rounded-xl p-5 hover:shadow-3xl hover:scale-105 duration-300 transition-all'>
            <img src={AlwaysUpdated} alt="Always Updated Images" className='rounded-xl'/>
            <h1
             className='text-black mt-[5%] text-[2rem] flex justify-center' 
             style={{ fontFamily: "Protest Strike, sans-serif" }}
            >Always Updated</h1>
            <p className='text-[1.5rem] text-slate-400 '>
            Staying ahead with the latest government processes.
            Always be updated with status.
            </p>
           </div>
           {/* Card 4 */}
           <div className='bg-[#FAEBDC] rounded-xl p-5 hover:shadow-3xl hover:scale-105 duration-300 transition-all'>
            <img src={ReducedTimeImage} alt="Reduced Time Image"  className='rounded-xl'/>
            <h1
             className='text-black mt-[5%] text-[2rem] flex justify-center' 
             style={{ fontFamily: "Protest Strike, sans-serif" }}>Reduce Time Wastage</h1>
             <p className='text-[1.5rem] text-slate-500 '>
             Streamlining your tasks to save precious time.
             </p>
           </div>
       </div>

    </div>
  )
}

export default Babus