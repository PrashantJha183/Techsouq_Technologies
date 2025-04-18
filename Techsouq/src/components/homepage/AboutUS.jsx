import React from "react";
import { ArrowRight, Check } from "lucide-react";
import Group from "/src/assets/Images/image.png";
import one from "/src/assets/Images/1.png";

const AboutUS = () => {
  return (
    <div
      className="max-w-screen-2xl container mx-auto px-4 sm:px-6 xl:px-24"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="py-20 flex flex-col md:flex-row-reverse md:items-center md:justify-between gap-6 text-center md:text-left">
        {/* Texts */}
        <div className="md:w-1/2 px-2 space-y-4 flex flex-col items-center md:items-start">
          <div className="flex">
            <h4
              className="relative inline-block text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#9384Ef] to-[#312EFE] px-4 py-2 font-semibold"
              style={{
                position: "relative",
              }}
            >
              About Us
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
          <div className="text-4xl sm:text-5xl font-bold">
            Driven by Creativity, Defined by Results
          </div>
          <p className="text-[#4A4A4A] text-base">
            At Techsouq, we specialize in turning visions into reality. With a
            passion for design and innovation, we deliver cutting-edge solutions
            that empower businesses to thrive in the digital age. From crafting
            seamless user experiences to developing impactful web platforms, our
            mission is to create meaningful connections between brands and their
            audiences.
          </p>
          <div className="py-4">
            Together, let's redefine what's possible in the digital world.
          </div>
          <button className="bg-gradient-to-r from-[#9384Ef] to-[#312EFE] font-semibold text-white px-8 py-3 rounded-md flex items-center justify-center gap-4">
            Contact Us Now
            <ArrowRight size={20} color="white" />
          </button>
        </div>

        {/* Image composition */}
        <div className="md:w-1/2 relative flex justify-center items-center w-full">
          {/* Group image (base) */}
          <img
            src={Group}
            alt="group"
            className="rounded-xl w-full max-w-[400px]"
          />

          {/* Overlapping badge on Group image */}
          <div className="absolute top-20 left-10 flex items-center gap-2 bg-white rounded-lg px-2 py-1 shadow-md">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-[#9384Ef] to-[#312EFE] flex items-center justify-center">
              <Check size={14} color="white" />
            </div>
            <span className="text-xs sm:text-sm font-semibold">
              We provide best service
            </span>
          </div>

          {/* Overlapping image with badge */}
          <div className="absolute bottom-[-50px] left-[40px] sm:left-[60px] bg-white p-2 rounded-xl shadow-lg">
            {/* Badge on 'one' image */}
            <div className="absolute bottom-[60px] left-[10px] sm:bottom-[80px] sm:left-[100px] flex items-center gap-2 bg-white rounded-lg px-2 py-1 shadow-md">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-[#9384Ef] to-[#312EFE] flex items-center justify-center">
                <Check size={14} color="white" />
              </div>
              <span className="text-xs sm:text-sm font-semibold">
                Your work is our priority
              </span>
            </div>

            <img
              src={one}
              alt="overlay"
              className="rounded-lg w-[200px] sm:w-[300px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
