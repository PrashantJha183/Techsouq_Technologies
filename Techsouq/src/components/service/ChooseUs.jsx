import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import Man from "/src/assets/Images/2.png";
import Group from "/src/assets/Images/13.png";
import back from "/src/assets/Images/Group 1171274849.png";

const ChooseUs = () => {
  return (
    <>
      <div
        className="max-w-screen-2xl container mx-auto xl:px-24"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <div className="py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-center md:text-left">
          {/* Text Section */}
          <div className="md:w-1/2 px-2 space-y-4 flex flex-col items-center md:items-start">
            <div className="flex justify-center items-center">
              <h4
                className="relative inline-block text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#9384Ef] to-[#312EFE] px-4 py-2 font-semibold"
                style={{ position: "relative" }}
              >
                Why Choose Us
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
            <div className="text-6xl font-semibold">
              What Makes Techsouq The Right Choice ?
            </div>
            <p className="text-[#4A4A4A] py-4 text-lg">
              Our expertise and commitment ensure exceptional results
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4 text-lg text-nowrap">
              <div className="flex items-center gap-1">
                <CheckCircle
                  size={24}
                  className="text-[#9384Ef]"
                  style={{
                    stroke: "url(#gradientStroke)",
                  }}
                />
                <svg height="0" width="0">
                  <defs>
                    <linearGradient
                      id="gradientStroke"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop stopColor="#9384Ef" offset="0%" />
                      <stop stopColor="#312EFE" offset="100%" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="text-gray-700">Year Of Experience</span>
              </div>

              <div className="flex items-center gap-1">
                <CheckCircle
                  size={24}
                  className="text-[#9384Ef]"
                  style={{
                    stroke: "url(#gradientStroke)",
                  }}
                />
                <svg height="0" width="0">
                  <defs>
                    <linearGradient
                      id="gradientStroke"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop stopColor="#9384Ef" offset="0%" />
                      <stop stopColor="#312EFE" offset="100%" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="text-gray-700">Tailored Strategies</span>
              </div>

              <div className="flex items-center gap-1">
                <CheckCircle
                  size={24}
                  className="text-[#9384Ef]"
                  style={{
                    stroke: "url(#gradientStroke)",
                  }}
                />
                <svg height="0" width="0">
                  <defs>
                    <linearGradient
                      id="gradientStroke"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop stopColor="#9384Ef" offset="0%" />
                      <stop stopColor="#312EFE" offset="100%" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="text-gray-700">Passionate Skilled Team</span>
              </div>
            </div>

            <div className="flex justify-center md:justify-start py-4">
              <button className="bg-gradient-to-r from-[#9384Ef] to-[#312EFE] font-semibold text-white px-8 py-3 rounded-md flex items-center gap-4 text-sm">
                Contact Us Now
                <ArrowRight size={20} className="text-white" />
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/3 flex justify-center items-center p-5 relative">
            {/* Gradient shadow box behind the image */}
            <div
              className="absolute rounded-xl w-[90%] h-[90%] z-[-1]"
              style={{
                background: "linear-gradient(135deg, #9384Ef 0%, #312EFE 100%)",
                top: "10%",
                left: "0%",
              }}
            ></div>

            <img
              src={Man}
              alt="Why Choose Us"
              className="rounded-xl shadow-lg z-10 relative right-[50px]"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
