import React from "react";
import Group from "/src/assets/Images/medium-shot-people-working-office 1.png";

const AboutUS = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 ">
      <div className="py-20 flex flex-col md:flex-row-reverse items-center justify-between gap-2">
        {/* texts */}
        <div className="md:w-1/2 px-2 space-y-4">
          <h2 className="font-semibold btn bg-gradient-to-r inline-block text-transparent bg-clip-textbg-gradient-to-r from-[#9384Ef] to-[#312EFE] bg-clip-text px-9 py-3 rounded-t-lg text-xl">
            About Us
          </h2>
          <div className="text-5xl font-bold">
            Driven by Creativity,Defined by Results
          </div>
          <p className="text-[#4A4A4A] text-base">
            At Techsouq, we specialize in turning visions into reality.With a
            passion for design and innovation,we deliver cutting-edge solutions
            that empower businesses to thrive in the digital age.From crafting
            seamless user experiences to developing impactful web platforms,our
            mission is to create meaningful connections between brands and their
            audiences.
          </p>
          <div className="font-bold py-4">
            Together, let's redefine what's possible in the digital world.
          </div>
          <button className="bg-gradient-to-r from-[#9384Ef] to-[#312EFE] font-semibold btn text-white px-8 py-3 rounded-md flex justify-center gap-4 ">
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
        {/* img */}
        <div className="md:w-1/3">
          <img src={Group} alt="" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
