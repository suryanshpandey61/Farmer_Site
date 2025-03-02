import React from 'react'
import Faq from "react-faq-component";

const data = {
    rows: [
        {
            title: "What is mybabu?",
            content: `mybabu is an online platform that connects you with experts to help you complete government paperwork accurately and efficiently`,
        },
        {
            title: " Who are the 'Babus'",
            content:
                "They are experienced professionals with a deep understanding of various government procedures. They are not government employees but trusted freelancers dedicated to making the process easier for you.",
        },
        {
            title: "How do I get started",
            content: `Simply sign up on our platform, submit your request, and get matched with the right expert who can guide you through the process `,
        },
        {
            title: "Is my data secure?",
            content: `Absolutely. We take your privacy and data security very seriously, employing robust security measures to protect your information`,
        },
    ],
};

const styles = {
    bgColor: '#2B2D75',
    // titleTextColor: "white",
    rowTitleColor: "white",
    rowContentColor: 'grey',
    arrowColor: "red",
};

const config = {
    // animate: true,
    // arrowIcon: "v",
    // tabFocus: true
};
function FAQ() {

  return (
    <div className='w-[100%] bg-[#2B2D75]'>
        
         {/* Heading Div  */}
        <div className='w-[50%] mx-auto pt-[2%]'>
            <h1 className='flex text-white mx-auto font-bold justify-center text-[3rem]'>FAQ's</h1>
            <p className='flex mx-auto text-slate-400 font-semibold justify-center text-[1.5rem]'>This section helps visitors or users quickly find answers to common queries without needing to contact customer support.</p>
        </div>

        {/* questions grid  */}
        <div className='w-[80%] mx-auto mt-[4%] pb-[4%]'>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>


    </div>
  )
}

export default FAQ