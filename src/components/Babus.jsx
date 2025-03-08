import React from 'react'
import TrustImage from '../assets/TrustImage.jpg'
import ExpertImage from '../assets/ExpertImages.jpg'
import AlwaysUpdated from '../assets/AlwaysUpdated.jpg'
import ReducedTimeImage from '../assets/ReducedTime.jpg'
function Babus() {
  return (
    <div className='w-[100%]'>
 
       <div className='w-[80%] mx-auto grid lg:grid-cols-4 gap-y-5  grid-cols-2 gap-x-[2%]'>
           {/* Card 1 */}
           <div className='bg-[#FAEBDC] hover:cursor-pointer rounded-xl p-5 hover:shadow-3xl hover:scale-105 duration-300 transition-all '>
            <img src={TrustImage} alt="Trust Image" className='rounded-xl'  />
              <h1 
              className='text-black  font-bold md:text-[1.5rem] text-[1.2rem] lg:text-[2rem] font-sans mt-[5%] flex justify-center' 
              >Trust</h1>
              <p className='lg:text-[1.5rem] md:text-[1.2rem] text-[1rem] text-slate-500 '>
              Your dependable guide through every paperwork hurdle.
              </p>
            </div>
            {/* Card 2 */}
           <div className='bg-[#FAEBDC] hover:cursor-pointer rounded-xl p-5 hover:shadow-3xl hover:scale-105 duration-300 transition-all '>
            <img src={ExpertImage} alt="Expert Images" className=' rounded-xl' />
            <h1
             className='text-black  font-bold md:text-[1.5rem] text-[1.2rem] lg:text-[2rem] font-sans mt-[5%] flex justify-center'
            >Expertise</h1>
            <p className='lg:text-[1.5rem] md:text-[1.2rem] text-[1rem] text-slate-500  '>
            Insightful support from seasoned professionals.
            </p>
           </div>
           {/* Card 3 */}
           <div className='bg-[#FAEBDC] hover:cursor-pointer rounded-xl p-5 hover:shadow-3xl hover:scale-105 duration-300 transition-all'>
            <img src={AlwaysUpdated} alt="Always Updated Images" className='rounded-xl'/>
            <h1
             className='text-black  font-bold md:text-[1.5rem] text-[1.2rem] lg:text-[2rem] font-sans mt-[5%] flex justify-center' 
            >Always Updated</h1>
            <p className='lg:text-[1.5rem] md:text-[1.2rem]  sm:text-[0.8rem]   text-slate-500 '>
            Staying ahead with the latest government processes.
            {/* Always be updated with status. */}
            </p>
           </div>
           {/* Card 4 */}
           <div className='bg-[#FAEBDC] z-auto hover:cursor-pointer rounded-xl p-5 hover:shadow-3xl hover:scale-105 duration-300 transition-all'>
            <img src={ReducedTimeImage} alt="Reduced Time Image"  className='rounded-xl'/>
            <h1
             className='text-black  font-bold md:text-[1.5rem] text-[1.2rem] lg:text-[2rem] font-sans mt-[5%] flex justify-center' 
             >Reduce Time Wastage</h1>
             <p className='lg:text-[1.5rem] md:text-[1.2rem] text-[1rem] text-slate-500 '>
             Streamlining your tasks to save precious time.
             </p>
           </div>
       </div>

    </div>
  )
}

export default Babus
