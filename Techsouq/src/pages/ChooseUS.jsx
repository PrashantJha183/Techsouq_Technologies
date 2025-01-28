import React from "react";
import Man from"../assets/Images/2.png"

const Choose = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 ">
      <div className="py-20 flex flex-col md:flex-row-reverse items-center justify-between gap-2">
        {/* texts */}
        <div className="md:w-1/2 px-2 space-y-4">
          <h2 className="font-semibold btn bg-gradient-to-r inline-block text-transparent bg-clip-textbg-gradient-to-r from-[#9384Ef] to-[#312EFE] bg-clip-text px-9 py-3 rounded-t-lg text-xl">
            Why Choose Us
          </h2>
          <div className="text-5xl font-bold">
          Your Success, Our Commitment
          </div>
          <p className="text-[#4A4A4A] text-base py-4">
          We don't just deliver projects; we create experiences that drive
            results. At [Your Agency Name], our approach combines
             creativity, strategy, and technology to set your brand apart in a
              competitive digital landscape.
          </p>
          <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex items-center">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>

                <span className="ml-2 text-gray-700">Tailored Strategies</span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <span className="ml-2 text-gray-700">Stroytelling Approach</span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <span className="ml-2 text-gray-700">Proven Success</span>
              </div>
            </div>
            <div className="flex justify-start py-4">
              <button className="bg-gradient-to-r from-[#9384Ef] to-[#312EFE] font-semibold btn text-white px-8 py-3 rounded-md flex justify-center gap-4">
                Contact US Now
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_55_1110)">
                    <path
                      d="M0.953125 9.6377H16.7865"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.6641 4.16675L17.4974 10.0001L11.6641 15.8334"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
        {/* img */}
        <div className="md:w-1/3">
          <img src={Man} alt="" className="rounded-xl" />
          
           
        </div>
      </div>
    </div>
  );
};

export default Choose;
