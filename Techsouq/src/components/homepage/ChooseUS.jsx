import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import Man from "/src/assets/Images/2.png";
import Group from "/src/assets/Images/13.png";

const Choose = () => {
  return (
    <div
      className="max-w-screen-2xl container mx-auto xl:px-24"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="py-20 flex flex-col md:flex-row-reverse md:items-center md:justify-between gap-6 text-center md:text-left">
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
            Your Success, Our Commitment
          </div>
          <p className="text-[#4A4A4A] py-4 text-lg">
            We don't just deliver projects; we create experiences that drive
            results. At Techsouq Technologies, our approach combines creativity,
            strategy, and technology to set your brand apart in a competitive
            digital landscape.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4 text-lg">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-purple-500" size={24} />
              <span className="text-gray-700">Tailored Strategies</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-purple-500" size={24} />
              <span className="text-gray-700">Storytelling Approach</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-purple-500" size={24} />
              <span className="text-gray-700">Proven Success</span>
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
          <div className="absolute z-10 bg-white top-[220px] left-[150px] rounded-lg p-4">
            <img
              src={Group}
              alt="Group"
              className="rounded-xl"
              style={{
                width: "150%",
                top: "10%",
                left: "-25%",
                objectFit: "cover",
              }}
            />
          </div>

          <div className="absolute z-20 bg-white top-[400px] left-[0px] rounded-lg flex flex-col items-start p-2 shadow-lg w-[250px]">
            {/* Circle on top */}
            <div className="w-12 h-12 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#9384Ef] to-[#312EFE] -mt-8 mb-2 text-white text-2xl sm:text-2xl font-semibold shadow-md">
              24
            </div>

            {/* Paragraph below */}
            <p className="text-2xl sm:text-2xl  text-gray-800 font-semibold text-left">
              Hours Emergency Services
            </p>
          </div>

          <img
            src={Man}
            alt="Why Choose Us"
            className="rounded-xl shadow-lg z-0 relative right-[50px]"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Choose;
