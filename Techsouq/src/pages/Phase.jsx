import React from 'react';
import Image from '../assets/Images/3.png';

function Phase() {
  return (
    // <div className=" p-8 rounded-lg shadow-md">
    //   <div className="flex items-center justify-between mb-8">
    //     <button className="bg-blue-400 text-black font-bold py-2 px-4 rounded-full">
    //       1. Discovery Phase
    //     </button>
    
    //     <div className="flex space-x-4">
    //       <div className="bg-gray-300 w-8 h-8 rounded-full"></div>
    //       <div className="bg-gray-300 w-8 h-8 rounded-full"></div>
    //       <div className="bg-gray-300 w-8 h-8 rounded-full"></div>
    //     </div>
    //   </div>
    //   <div className="flex">
    //     <div className="flex-2 pr-6">
    //     <h2 className="text-9xl font-bold ">
    //         Transfer a Local Business into a
    //         <span className=" text-8xl bg-gradient-to-r inline-block text-transparent bg-clip-textbg-gradient-to-r from-[#9384Ef] to-[#312EFE] bg-clip-text">
    //           Digital Success Story
    //         </span>
    //       </h2>
    //       <ul className="list-disc ml-6 text-black">
    //         <li>
    //           <span className="text-green-500 mr-2">✓</span>
    //           Conducted in-depth interviews with stakeholders to understand
    //           Gourmet Grove's mission, values, and goals.
    //         </li>
    //         <li>
    //           <span className="text-green-500 mr-2">✓</span>
    //           Mapped the customer journey to identify key touchpoints for
    //           creating meaningful digital experiences.
    //         </li>
    //         <li>
    //           <span className="text-green-500 mr-2">✓</span>
    //           Defined customer personas, including their preferences, pain
    //           points, and online behavior.
    //         </li>
    //         <li>
    //           <span className="text-green-500 mr-2">✓</span>
    //           Performed a SWOT analysis (Strengths, Weaknesses, Opportunities,
    //           Threats) against competitors in the organic food market.
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="flex-none w-900">
    //       <img
    //         src={Image}
    //         className="w-full h-64 object-cover rounded-lg shadow-lg"
    //       />
    //     </div>
    //   </div>
    // </div>
    <div className="max-w-screen-2xl container mx-auto xl:px-24 ">
          <div className="py-20 flex flex-col md:flex-row-reverse items-center justify-between gap-2">
            {/* img */}
            <div className="md:w-1/3">
              <img src={Image} alt="" className="rounded-xl" />
              
            </div>
    
            {/* texts */}
            <div className="md:w-1/2 px-4 space-y-7">
              {/* <button className="font-semibold btn bg-gradient-to-r inline-block text-transparent bg-clip-textbg-gradient-to-r from-[#9384Ef] to-[#312EFE] bg-clip-text px-8 py-3 rounded-t-lg">
                Welcome to Techsouq
              </button> */}
              <button className="bg-gradient-to-r from-[#9384Ef] to-[#312EFE] text-white font-bold py-2 px-4 rounded-full">
           1. Discovery Phase 
         </button>
              <button className="bg-gradient-to-r text-transparent bg-clip-textbg-gradient-to-r from-[#9384Ef] to-[#312EFE] bg-clip-text font-bold py-2 px-4 rounded-full border-r-4 border-blue-500">
           2. 
         </button>
              <button className="bg-gradient-to-r text-transparent bg-clip-textbg-gradient-to-r from-[#9384Ef] to-[#312EFE] bg-clip-text font-bold py-2 px-4 rounded-full border-r-4 border-blue-500">
           3. 
         </button>
              <button className="bg-gradient-to-r text-transparent bg-clip-textbg-gradient-to-r from-[#9384Ef] to-[#312EFE] bg-clip-text font-bold py-2 px-4 rounded-full border-r-4 border-blue-500">
           4. 
         </button>
              <h2 className="md:text-7xl text-4xl font-bold md:leading-snug leading-snug">
                Transfer a Local<br></br> Business into a{" "}
                <span className="bg-gradient-to-r text-transparent bg-clip-textbg-gradient-to-r from-[#9384Ef] to-[#312EFE] bg-clip-text text-6xl mt-2">
                  Digital Success Story
                </span>
              </h2>
              <ul className="ml-6 text-black text-xl">
             <li>
          
               Conducted in-depth interviews with stakeholders to understand
               Gourmet Grove's mission, values, and goals.
             </li>
             <br></br>
             <li>
               
               Mapped the customer journey to identify key touchpoints for
               creating meaningful digital experiences.
             </li>
             <br></br>
             <li>
               
               Defined customer personas, including their preferences, pain
               points, and online behavior.
             </li>
             <br></br>
             <li>
               
               Performed a SWOT analysis (Strengths, Weaknesses, Opportunities,
               Threats) against competitors in the organic food market.
             </li>

           </ul>
              <button className="bg-gradient-to-r from-[#9384Ef] to-[#312EFE] font-semibold btn text-white px-8 py-3 rounded-md flex justify-center gap-4">
                Book a Consultation
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_55_1110)">
                    <path
                      d="M0.953125 9.6377H16.7865"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.6641 4.16675L17.4974 10.0001L11.6641 15.8334"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_55_1110">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
        </div>
  );
}

export default Phase;