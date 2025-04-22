import React from "react";
import { CheckCircle } from "lucide-react";
import icon1 from "/src/assets/Images/Ellipse 7.png";
import rename_4 from "/src/assets/Images/rename_4.png";

const Challenge = () => {
  return (
    <div
      className="max-w-screen-2xl container mx-auto xl:px-24"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Image Section on the Left */}
        <div className="md:w-1/3 relative order-1 md:order-none">
          {/* Gradient shadow box */}
          <div
            className="absolute -inset-4 z-0 rounded-xl left-20 top-10"
            style={{
              background: "linear-gradient(135deg, #9384Ef, #312EFE)",
            }}
          ></div>
          <img
            src={rename_4}
            alt="Challenge"
            className="relative z-10 rounded-xl"
          />
        </div>

        {/* Text Section on the Right */}
        <div className="md:w-1/2 px-4 space-y-7 order-2 md:order-none">
          {/* Number Circles */}
          <div className="flex gap-4 flex-wrap">
            {/* 1. Discovery Phase */}
            <h4 className="rounded-full relative inline-block text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#9384Ef] to-[#312EFE] px-4 py-2 font-semibold">
              1
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

            {/* 2. Challenge Phase */}
            <button className="bg-gradient-to-r from-[#9384Ef] to-[#312EFE] text-white font-bold py-2 px-4 rounded-full">
              2. Challenges
            </button>

            {/* Numbers 3 and 4 in gradient outline style */}
            {[3, 4].map((number) => (
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

          {/* Heading */}
          <h2 className="md:text-6xl text-4xl font-bold md:leading-snug leading-snug text-nowrap">
            Crafting the solution
          </h2>

          {/* Bullet Points */}
          <ul className="text-black text-xl space-y-4">
            {[
              "Conducted in-depth interviews with stakeholders to understand Gourmet Grove's mission, values, and goals.",
              "Mapped the customer journey to identify key touchpoints for creating meaningful digital experiences.",
              "Defined customer personas, including their preferences, pain points, and online behavior.",
              "Performed a SWOT analysis (Strengths, Weaknesses, Opportunities, Threats) against competitors in the organic food market.",
            ].map((point, id) => (
              <li key={id} className="flex items-start gap-3">
                <span className="min-w-[24px] min-h-[24px] mt-1">
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
                </span>
                <p>{point}</p>
              </li>
            ))}
          </ul>

          {/* Profile Section */}
          <div className="flex items-center space-x-4">
            <img
              className="h-10 w-10 rounded-full flex-shrink-0"
              src={icon1}
              alt="Adam Smith"
            />
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Michel Jmaes
              </h3>
              <p className="text-sm text-gray-500">Business Owner IT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenge;
