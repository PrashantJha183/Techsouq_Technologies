import React from "react";
import Man from "/src/assets/Images/man_two.png";
import arrow from "/src/assets/Images/arrow-right.png";
import back from "/src/assets/Images/back.png";
import { Check } from "lucide-react";

const LastPage = () => {
  return (
    <div
      className="bg-gray-100 py-10 px-4 flex justify-center mt-20"
      style={{ fontFamily: "Poppins, sans-serif", padding: "10%" }}
    >
      <div
        className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl shadow-lg max-w-8xl relative"
        style={{ height: "auto" }}
      >
        <div className="flex flex-col items-center justify-center p-20 md:flex-row md:items-center md:justify-between gap-1">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Let's Build Something Extraordinary Together!
            </h1>
            <p className="text-gray-200 text-lg mb-6">
              Ready to elevate your brand with cutting-edge design and
              development? Whether it's creating an unforgettable user
              experience, crafting a stunning logo, or building a website that
              drives results, we're here to bring your vision to life.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="bg-white font-semibold px-8 py-3 rounded-md flex items-center gap-3">
                <span className="bg-gradient-to-r text-transparent from-[#9384Ef] to-[#312EFE] bg-clip-text text-nowrap">
                  Get Started For Free
                </span>

                <img src={arrow} className="transform rotate-[-40deg]" />
              </button>
            </div>
          </div>
        </div>

        {/* Background image positioned behind Man */}
        <div className="absolute bottom-10 right-10 z-0">
          <img
            src={back}
            alt="Background decoration"
            className="object-contain"
            style={{ height: "40vh" }}
          />
        </div>

        {/* Foreground image (man) */}
        <div
          className="absolute bottom-0 right-20 z-10"
          style={{ paddingRight: "3%" }}
        >
          <img
            src={Man}
            alt="Man in suit with crossed arms"
            className="rounded-lg shadow-lg object-contain"
            style={{
              height: "70vh",
            }}
          />

          <div className="absolute top-[50%] left-[-12%] flex items-center gap-2 bg-white rounded-lg px-2 py-1 shadow-md z-20">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-[#9384Ef] to-[#312EFE] flex items-center justify-center">
              <Check size={18} color="white" />
            </div>
            <span className="text-xs sm:text-sm font-semibold">
              Boost Ranking Effortlessly
            </span>
          </div>

          <div className="absolute top-[41%] right-[0%] flex items-center gap-2 bg-white rounded-lg px-2 py-1 shadow-md z-20">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-[#9384Ef] to-[#312EFE] flex items-center justify-center">
              <Check size={18} color="white" />
            </div>
            <span className="text-xs sm:text-sm font-semibold">
              Try For Free Now
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastPage;
