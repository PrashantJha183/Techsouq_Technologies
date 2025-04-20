import React from "react";
import Image from "/src/assets/Images/3.png";
import { CheckCircle } from "lucide-react";
import icon1 from "/src/assets/Images/Ellipse 7.png";

const Choosemore = () => {
  return (
    <div
      className="max-w-screen-2xl container mx-auto xl:px-24"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="py-20 flex flex-col md:flex-row-reverse items-center justify-between gap-2">
        {/* img with gradient shadow */}
        <div className="md:w-1/3 relative">
          <div
            className="absolute -inset-4 z-0 rounded-xl left-20 top-10"
            style={{
              background: "linear-gradient(135deg, #9384Ef, #312EFE)",
            }}
          ></div>
          <img src={Image} alt="" className="relative z-10 rounded-xl" />
        </div>

        {/* texts */}
        <div className="md:w-1/2 px-4 space-y-7">
          {/* number circles with spacing */}
          <div className="flex gap-4">
            <button className="bg-gradient-to-r from-[#9384Ef] to-[#312EFE] text-white font-bold py-2 px-4 rounded-full">
              1. Discovery Phase
            </button>
            {[2, 3, 4].map((number) => (
              <h4
                key={number}
                className="rounded-full relative inline-block text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#9384Ef] to-[#312EFE] px-4 py-2 font-semibold"
              >
                {number}
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
            ))}
          </div>

          <h2 className="md:text-7xl text-4xl font-bold md:leading-snug leading-snug">
            Transfer a Local
            <br /> Business into a{" "}
            <span className="bg-gradient-to-r text-transparent from-[#9384Ef] to-[#312EFE] bg-clip-text text-6xl mt-2 text-nowrap">
              Digital Success Story
            </span>
          </h2>

          <ul className="text-black text-xl space-y-4">
            {[
              "Conducted in-depth interviews with stakeholders to understand Gourmet Grove's mission, values, and goals.",
              "Mapped the customer journey to identify key touchpoints for creating meaningful digital experiences.",
              "Defined customer personas, including their preferences, pain points, and online behavior.",
              "Performed a SWOT analysis (Strengths, Weaknesses, Opportunities, Threats) against competitors in the organic food market.",
            ].map((point, id) => (
              <li key={id} className="flex items-start gap-3">
                <span className="min-w-[24px] min-h-[24px] mt-1">
                  <CheckCircle size={24} className="text-purple-950" />
                </span>
                <p>{point}</p>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-4">
            {/* Profile Image */}
            <img
              className="h-10 w-10 rounded-full flex-shrink-0"
              src={icon1}
              alt="Adam Smith"
            />

            {/* Name and Designation */}
            <div>
              <h3 className="text-lg font-medium text-gray-900">Adam Smith</h3>
              <p className="text-sm text-gray-500">
                Founder of Tech Innovations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choosemore;
