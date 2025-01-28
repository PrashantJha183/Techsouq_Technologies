import React from 'react';
import logo from "../assets/Images/logo.png";

const Navbar_Main = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-blue-500">
              <img src={logo} alt="Techsouq Technologies" className="w-26 h-16" />
            </a>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-600 hover:text-blue-500">
              Home
            </a>
            <a href="/" className="text-gray-600 hover:text-blue-500">
              About
            </a>
            <a href="/" className="text-gray-600 hover:text-blue-500">
              Service
            </a>
            <a href="/" className="text-gray-600 hover:text-blue-500">
              Pricing
            </a>
            <a href="/" className="text-gray-600 hover:text-blue-500">
              Case Study
            </a>
            <a href="/" className="text-gray-600 hover:text-blue-500">
              Blog
            </a>
            <a href="/" className="text-gray-600 hover:text-blue-500">
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button className="text-gray-600 hover:bg-neutral-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 1 ```jsx
                h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex">
          <button
            className="bg-gradient-to-r from-[#9384Ef] to-[#312EFE] font-semibold btn text-white px-8 py-3 rounded-md flex justify-center gap-4"
          >
            Contact US Now
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
    </nav>
  );
};

export default Navbar_Main;