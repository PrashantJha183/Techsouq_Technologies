import React from "react";
import { ArrowRight, Check, CheckCircle } from "lucide-react";
import back from "/src/assets/Images/Group 1171274849.png";
import { Link } from "react-router-dom";
import rename from "/src/assets/Images/rename.png";
import rename_6 from "/src/assets/Images/rename_6.png";

const Choose = () => {
  return (
    <div
      className="max-w-screen-2xl container mx-auto px-4 sm:px-6 xl:px-24"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Gradient definition for icons */}
      <svg height="0" width="0">
        <defs>
          <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop stopColor="#9384Ef" offset="0%" />
            <stop stopColor="#312EFE" offset="100%" />
          </linearGradient>
        </defs>
      </svg>

      <div className="py-20 flex flex-col md:flex-row-reverse md:items-center md:justify-between gap-6 text-center md:text-left">
        {/* Texts */}
        <div className="md:w-1/2 px-2 space-y-4 flex flex-col items-center md:items-start">
          <div className="flex">
            <h4
              className="relative inline-block text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#9384Ef] to-[#312EFE] px-4 py-2 font-semibold"
              style={{ position: "relative" }}
            >
              Why Choose
              <span
                className="absolute inset-0 rounded-full"
                style={{
                  background: "linear-gradient(90deg, #9384Ef, #312EFE)",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  padding: "1px",
                }}
              ></span>
            </h4>
          </div>
          <div className="text-6xl sm:text-5xl font-semibold">
            Why Choose Our Service
          </div>

          {/* Bullet Points */}
          <div className="space-y-3 text-left">
            {[
              "Research and Discovery",
              "Strategy Development",
              "Design Development",
              "Testing and Optimization",
              "Launch and Support",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle
                  size={20}
                  style={{ stroke: "url(#gradientStroke)" }}
                />
                <span className="text-[#4A4A4A] text-lg">{item}</span>
              </div>
            ))}
          </div>

          <div className="py-4 text-lg">
            Together, let's redefine what's possible in the digital world.
          </div>
          <button className="bg-gradient-to-r from-[#9384Ef] to-[#312EFE] font-semibold text-white px-8 py-3 rounded-md flex items-center justify-center gap-4 text-sm h-6xl w-10xl">
            <Link to="/contact">Contact Us Now</Link>
            <ArrowRight size={20} color="white" />
          </button>
        </div>

        {/* Image composition */}
        <div className="md:w-1/2 relative flex justify-center items-center w-full">
          {/* Back image behind Group */}
          <img
            src={back}
            alt="background"
            className="absolute top-[320px] left-[420px] z-0 w-[150px] sm:w-[150px] object-contain"
          />

          {/* Group image (on top of back) */}
          <img
            src={rename_6}
            alt="group"
            className="relative z-10 rounded-xl w-full max-w-[400px]"
          />

          {/* Overlapping badge on Group image */}
          <div className="absolute top-20 left-10 flex items-center gap-2 bg-white rounded-lg px-2 py-1 shadow-md z-20">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-[#9384Ef] to-[#312EFE] flex items-center justify-center">
              <Check size={18} color="white" />
            </div>
            <span className="text-xs sm:text-sm font-semibold">
              We provide best service
            </span>
          </div>

          {/* Overlapping image with badge */}
          <div className="absolute bottom-[-50px] left-[40px] sm:left-[60px] bg-white p-2 rounded-xl shadow-lg z-20">
            {/* Badge on 'one' image */}
            <div className="relative top-[200px] left-[250px] sm:bottom-[80px] sm:left-[250px] inline-flex items-center justify-center gap-2 bg-white rounded-lg px-2 py-1 shadow-md w-[230px] text-nowrap">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-[#9384Ef] to-[#312EFE] flex items-center justify-center">
                <Check size={18} color="white" />
              </div>
              <span className="text-xs sm:text-sm font-semibold">
                Your work is our priority
              </span>
            </div>

            <img
              src={rename}
              alt="overlay"
              className="rounded-lg w-[200px] sm:w-[300px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
