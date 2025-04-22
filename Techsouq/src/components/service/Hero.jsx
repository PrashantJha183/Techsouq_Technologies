import React from "react";
import { Link } from "react-router-dom";
import Heros from "/src/assets/Images/Hero Banner.png";

const Hero = () => {
  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      {/* Ensure background behind image is white */}
      <div className="relative h-screen overflow-hidden bg-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-br-[340px] bg-white">
          <img
            src={Heros}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60 z-10 rounded-br-[340px]"></div>

        {/* Content */}
        <div className="flex flex-col items-center justify-center text-center text-white relative z-20 h-full px-6 sm:px-12">
          <button className="btn px-4 py-2 sm:px-6 sm:py-3 border border-white rounded-full text-sm sm:text-base">
            Welcome to Techsouq
          </button>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
            See Our Quality Services
            <br />
            <span className="mt-4 block t-50">With Us</span>
          </h1>

          <h4 className="text-sm sm:text-base lg:text-lg mt-4 max-w-4xl">
            At Techsouq, we believe in transforming ideas into digital
            excellence. Driven by creativity and defined by results, we combine
            innovation, design, and technology to empower businesses in the
            digital landscape.
          </h4>
          <button className="btn px-6 py-3 rounded-xl bg-white flex items-center space-x-2 mt-6">
            <span className="bg-gradient-to-r from-[#9384FE] to-[#312EFE] text-transparent bg-clip-text font-bold text-sm sm:text-base">
              <Link to="/contact">Book a consultation</Link>
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="url(#gradient1)"
              className="w-5 h-5 sm:w-6 sm:h-6"
            >
              <defs>
                <linearGradient id="gradient1" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#9384FE" />
                  <stop offset="100%" stopColor="#312EFE" />
                </linearGradient>
              </defs>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
