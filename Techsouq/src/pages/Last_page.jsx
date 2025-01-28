import React from "react";
import Man from "../assets/Images/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background (1) 1.png";
function Last_page() {
  
  return (
    <div className="bg-gray-100 p-4">
      <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col items-center p-10 md:flex-row md:items-start">
          <div className="md:w-1/2">
            <h1 className="text-6xl font-bold text-white mb-4">
              Let's Build Something Extraordinary With Together!
            </h1>
            <p className="text-gray-200 text-lg mb-6">
              Ready to elevate your brand with cutting-edge design and
              development? Whether it's creating an unforgettable user
              experience, crafting a stunning logo, or building a website that
              drives results, we're here to bring your vision to life.
            </p>
            <button className="bg-white font-semibold btn  px-8 py-3 rounded-md flex justify-center gap-4">
              Get Started For Free
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.46913 14.404L15.5632 4.76231"
                  stroke="url(#paint0_linear_55_671)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.78125 4.44434H16.1146V12.7777"
                  stroke="url(#paint1_linear_55_671)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_55_671"
                    x1="8.76794"
                    y1="7.75292"
                    x2="13.9815"
                    y2="14.5991"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#9384FE" />
                    <stop offset="1" stop-color="#312EFE" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_55_671"
                    x1="10.4369"
                    y1="7.10001"
                    x2="14.9699"
                    y2="12.7777"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#9384FE" />
                    <stop offset="1" stop-color="#312EFE" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </div>
          <div className="md:w-1/4 mt-4 md:mt-0  md:ml-auto">
            <img
              src={Man}
              alt="Man in suit with crossed arms"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Last_page;