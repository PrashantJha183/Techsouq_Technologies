import React from "react";
import { ArrowRight, Check } from "lucide-react";
import Group from "/src/assets/Images/image.png";
import one from "/src/assets/Images/1.png";
import back from "/src/assets/Images/Group 1171274849.png";
import Pricing from "/src/assets/Images/Pricing.png";
import rename_2 from "/src/assets/Images/rename_2.png";

const Custom = () => {
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
              className="relative inline-block text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#9384Ef] to-[#312EFE] px-4 py-2 font-semibold"
              style={{ position: "relative" }}
            >
              Custom
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
            Need Something
            <br /> Custom
          </div>
          <p className="text-[#4A4A4A] text-lg">
            Every business is unique, and so are its needs. At Techsouq, we
            understand that a one-size-fits-all approach doesn’t always work.
            That’s why we offer custom solutions tailored specifically to your
            goals, challenges, and vision.Whether you need advanced features,
            additional support, or a completely bespoke plan, we’re here to
            craft a solution that perfectly aligns with your business. Let us
            help you unlock your full potential with a plan built just for you."
          </p>

          <button className="bg-gradient-to-r from-[#9384Ef] to-[#312EFE] font-semibold text-white px-8 py-3 rounded-md flex items-center justify-center gap-4 text-sm h-6xl w-10xl">
            Contact Us Now
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
            src={Pricing}
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
              src={rename_2}
              alt="overlay"
              className="rounded-lg w-[200px] sm:w-[300px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom;
