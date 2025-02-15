import React from "react";
import group from "/src/assets/Images/2.png";
import four from "/src/assets/Images/4.png";
import circlec from "/src/assets/Images/Ellipse 5.png";
import Man from "/src/assets/Images/man_two.png";
import back from "/src/assets/Images/back.png";
import carone from "/src/assets/Images/4.png";
import cartwo from "/src/assets/Images/5.png";
import carthree from "/src/assets/Images/6.png";

function Others() {
  return (
    <>
      <div style={{ fontFamily: "Poppins, sans-serif" }}>
        {/* Hero Section */}
        <div className="relative h-screen">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <img
            src={group}
            className="absolute inset-0 w-full h-full object-cover z-0 rounded-br-6xl"
            alt="Background"
          />
          <div className="flex flex-col items-center justify-center text-center text-white relative z-20 h-full px-6 sm:px-12">
            <button className="btn px-4 py-2 sm:px-6 sm:py-3 border border-white rounded-xl text-sm sm:text-base">
              Welcome to Techsouq
            </button>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
              See Our Valuable Case Study With Us
            </h1>
            <h4 className="text-sm sm:text-base lg:text-lg mt-4 max-w-4xl">
              At Techsouq, we believe in transforming ideas into digital
              excellence. Driven by creativity and defined by results, we
              combine innovation, design, and technology to empower businesses
              in the digital landscape.
            </h4>
            <button className="btn px-6 py-3 rounded-xl bg-white flex items-center space-x-2 mt-6">
              <span className="bg-gradient-to-r from-[#9384FE] to-[#312EFE] text-transparent bg-clip-text font-bold text-sm sm:text-base">
                Book a consultation
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
        {/* First section */}
        <div className="main flex flex-col md:flex-row items-center justify-start w-full px-6 sm:px-12 py-8 space-y-6 md:space-y-0">
          <div className="text-container flex flex-col w-full md:w-2/3 text-justify">
            <div className="buttons flex flex-wrap items-center max-w-lg mb-6 gap-4">
              <button className="px-4 py-3 bg-gradient-to-r from-[#9384FE] to-[#312EFE] text-white rounded-3xl">
                1. Discovery Phase
              </button>
              {["2", "3", "4"].map((number) => (
                <div
                  key={number}
                  className="w-12 h-12 flex items-center justify-center rounded-full border-4"
                  style={{
                    borderImage:
                      "linear-gradient(to right, #9384FE, #312EFE) 1",
                  }}
                >
                  <span className="bg-gradient-to-r from-[#9384FE] to-[#312EFE] text-transparent bg-clip-text font-bold">
                    {number}
                  </span>
                </div>
              ))}
            </div>

            <div className="main-text space-y-4">
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold">
                Transform a Local Business into a <br />
                <span className="bg-gradient-to-r from-[#9384FE] to-[#312EFE] text-transparent bg-clip-text">
                  Digital Success Story
                </span>
              </p>
              {[
                "Conducted in-depth interviews with stakeholders to understand Gourmet Grove's mission, values, and goals.",
                "Mapped the customer journey to identify key touchpoints for creating meaningful digital experiences.",
                "Defined customer personas, including their preferences, pain points, and online behavior.",
                "Performed a SWOT analysis (Strengths, Weaknesses, Opportunities, Threats) against competitors in the organic food market.",
              ].map((text, index) => (
                <p key={index} className="text-sm sm:text-base lg:text-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="url(#gradient2)"
                    className="w-5 h-5 sm:w-6 sm:h-6 inline-block mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                    />
                  </svg>
                  {text}
                </p>
              ))}
            </div>

            <div className="flex items-start mt-8">
              <img
                src={circlec}
                alt="circle"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full"
              />
              <div className="ml-4">
                <p className="text-gray-800 font-bold text-sm sm:text-lg">
                  Michael James
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  Business Owner IT
                </p>
              </div>
            </div>
          </div>

          <div className="image w-full md:w-1/3 flex items-center justify-center relative">
            <div
              className="absolute inset-4 -z-10 rounded-xl"
              style={{
                background: "linear-gradient(135deg, #9384FE, #312EFE)",
                transform: "translate(6%, 9%)",
              }}
            ></div>
            <img
              src={four}
              alt="Business Transformation"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Second section */}
        <div style={{ fontFamily: "Poppins, sans-serif" }}>
          <div className="main flex flex-col md:flex-row items-center justify-start w-full p-4 sm:p-8 space-y-4 md:space-y-0 md:gap-8">
            {/* Image Section */}
            <div className="image w-full h-full md:w-1/3 flex items-center justify-center relative">
              <div
                className="absolute inset-4 -z-10 rounded-xl"
                style={{
                  background: "linear-gradient(135deg, #9384FE, #312EFE)",
                  transform: "translate(6%, 9%)",
                }}
              ></div>
              <img
                src={four}
                alt="Business Transformation"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Text Section */}
            <div className="text-container flex flex-col w-full md:w-2/3 p-4 text-justify">
              <div className="buttons flex flex-wrap items-center w-full max-w-lg mb-8 gap-4">
                {["1", "2", "3", "4"].map((number) => (
                  <div
                    key={number}
                    className={`${
                      number === "2"
                        ? "px-4 py-3 bg-gradient-to-r from-[#9384FE] to-[#312EFE] text-white rounded-3xl"
                        : "w-12 h-12 flex items-center justify-center relative rounded-full border-4 p-1"
                    }`}
                    style={{
                      borderImage:
                        number !== "2"
                          ? "linear-gradient(to right, #9384FE, #312EFE) 1"
                          : "",
                    }}
                  >
                    <div className="w-full h-full bg-transparent rounded-full flex items-center justify-center">
                      <span
                        className={`${
                          number === "2"
                            ? "font-bold text-white"
                            : "bg-gradient-to-r from-[#9384FE] to-[#312EFE] text-transparent bg-clip-text font-bold"
                        }`}
                      >
                        {number === "2" ? `2. Challenges` : number}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="main-text space-y-4 text-justify">
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold">
                  Crafting the Solution
                </p>
                {[
                  "Conducted in-depth interviews with stakeholders to understand Gourmet Grove's mission, values, and goals.",
                  "Mapped the customer journey to identify key touchpoints for creating meaningful digital experiences.",
                  "Defined customer personas, including their preferences, pain points, and online behavior.",
                  "Performed a SWOT analysis (Strengths, Weaknesses, Opportunities, Threats) against competitors in the organic food market.",
                ].map((text, index) => (
                  <p
                    key={index}
                    className="text-sm sm:text-base lg:text-lg text-wrap"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="url(#gradient2)"
                      className="w-5 h-5 sm:w-6 sm:h-6 inline-block mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 21 12Z"
                      />
                    </svg>
                    {text}
                  </p>
                ))}
              </div>

              {/* Author Section */}
              <div className="flex items-center justify-start">
                <img
                  src={circlec}
                  alt="circle"
                  className="py-5 my-5 w-auto h-auto"
                />
                <div className="ml-4 text-center">
                  <p className="text-black font-bold text-justify">
                    Michael James
                  </p>
                  <p className="text-black text-justify">Business Owner IT</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third section */}
        <div style={{ fontFamily: "Poppins, sans-serif" }}>
          <div className="main flex flex-col md:flex-row items-center justify-between w-full p-4 sm:p-8 space-y-4 md:space-y-0 md:gap-8">
            {/* Text Section */}
            <div className="text-container flex flex-col w-full md:w-2/3 p-4 text-justify">
              <div className="buttons flex flex-wrap items-center w-full max-w-lg mb-8 gap-4">
                {["1", "2", "3", "4"].map((number) => (
                  <div
                    key={number}
                    className={`${
                      number === "3"
                        ? "px-4 py-3 bg-gradient-to-r from-[#9384FE] to-[#312EFE] text-white rounded-3xl"
                        : "w-12 h-12 flex items-center justify-center relative rounded-full border-4 p-1"
                    }`}
                    style={{
                      borderImage:
                        number !== "3"
                          ? "linear-gradient(to right, #9384FE, #312EFE) 1"
                          : "",
                    }}
                  >
                    <div className="w-full h-full bg-transparent rounded-full flex items-center justify-center">
                      <span
                        className={`${
                          number === "3"
                            ? "font-bold text-white"
                            : "bg-gradient-to-r from-[#9384FE] to-[#312EFE] text-transparent bg-clip-text font-bold"
                        }`}
                      >
                        {number === "3" ? `3. The Solution` : number}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="main-text space-y-4 text-justify">
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold">
                  See the Soultions
                </p>
                {[
                  "Conducted in-depth interviews with stakeholders to understand Gourmet Grove's mission, values, and goals.",
                  "Mapped the customer journey to identify key touchpoints for creating meaningful digital experiences.",
                  "Defined customer personas, including their preferences, pain points, and online behavior.",
                  "Performed a SWOT analysis (Strengths, Weaknesses, Opportunities, Threats) against competitors in the organic food market.",
                ].map((text, index) => (
                  <p
                    key={index}
                    className="text-sm sm:text-base lg:text-lg text-wrap"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="url(#gradient2)"
                      className="w-5 h-5 sm:w-6 sm:h-6 inline-block mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 21 12Z"
                      />
                    </svg>
                    {text}
                  </p>
                ))}
              </div>

              {/* Author Section */}
              <div className="flex items-center justify-start mt-6">
                <img
                  src={circlec}
                  alt="circle"
                  className="w-auto h-auto rounded-full"
                />
                <div className="ml-4">
                  <p className="text-black font-bold">Michael James</p>
                  <p className="text-black">Business Owner IT</p>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="image w-full h-full md:w-1/3 flex items-center justify-center relative">
              <div
                className="absolute inset-4 -z-10 rounded-xl"
                style={{
                  background: "linear-gradient(135deg, #9384FE, #312EFE)",
                  transform: "translate(6%, 9%)",
                }}
              ></div>
              <img
                src={four}
                alt="Business Transformation"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* {Fourth section} */}
        <div style={{ fontFamily: "Poppins, sans-serif" }}>
          <div className="main flex flex-col md:flex-row items-center md:items-start justify-between h-auto w-full p-4 space-y-6 md:space-y-0">
            {/* Image Section with Gradient Background and Translation */}
            <div className="image flex-shrink-0 md:ml-8 md:w-1/3 relative mb-6 md:mb-0 md:mr-8">
              <div
                className="absolute inset-4 -z-10 rounded-xl"
                style={{
                  background: "linear-gradient(135deg, #9384FE, #312EFE)",
                  transform: "translate(6%, 9%)",
                }}
              ></div>
              <img
                src={four}
                alt="Business Transformation"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Text Section with Spacing */}
            <div className="text-container flex flex-col justify-start items-start w-full md:w-2/3 max-w-full font-poppins p-4 space-y-6">
              {/* Buttons */}
              <div className="buttons flex justify-start items-center w-full max-w-lg space-x-4">
                {["1", "2", "3", "4"].map((number) => (
                  <div
                    key={number}
                    className={`${
                      number === "4"
                        ? "px-4 py-3 bg-gradient-to-r from-[#9384FE] to-[#312EFE] text-white rounded-3xl"
                        : "w-12 h-12 flex items-center justify-center relative rounded-full border-4"
                    }`}
                    style={{
                      borderImage:
                        number !== "4"
                          ? "linear-gradient(to right, #9384FE, #312EFE) 1"
                          : "",
                    }}
                  >
                    <div className="w-full h-full bg-transparent rounded-full flex items-center justify-center">
                      <span
                        className={`${
                          number === "4"
                            ? "font-bold text-white"
                            : "bg-gradient-to-r from-[#9384FE] to-[#312EFE] text-transparent bg-clip-text font-bold"
                        }`}
                      >
                        {number === "4" ? `4. The Results` : number}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Main Text */}
              <div className="main-text flex flex-col justify-start items-start w-full space-y-4">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                  See the results
                </p>
                {[
                  "Conducted in-depth interviews with stakeholders to understand Gourmet Grove's mission, values, and goals.",
                  "Mapped the customer journey to identify key touchpoints for creating meaningful digital experiences.",
                  "Defined customer personas, including their preferences, pain points, and online behavior.",
                  "Performed a SWOT analysis (Strengths, Weaknesses, Opportunities, Threats) against competitors in the organic food market.",
                ].map((text, index) => (
                  <p
                    key={index}
                    className="text-base sm:text-lg text-justify flex items-start"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="url(#gradient2)"
                      className="w-5 h-5 mr-2"
                    >
                      <defs>
                        <linearGradient
                          id="gradient2"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            style={{ stopColor: "#9384FE", stopOpacity: 1 }}
                          />
                          <stop
                            offset="100%"
                            style={{ stopColor: "#312EFE", stopOpacity: 1 }}
                          />
                        </linearGradient>
                      </defs>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                      />
                    </svg>
                    {text}
                  </p>
                ))}

                <div className="flex items-center justify-center mt-8 space-x-4">
                  <img
                    src={circlec}
                    alt="circle"
                    className="w-auto h-auto object-cover"
                  />
                  <div>
                    <p className="text-black font-bold">Michael James</p>
                    <p className="text-black">Business Owner IT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {FAQ section} */}
        <div className="container mx-auto py-10">
          <h1 className="text-5xl text-bold">Frequently Asked Questions</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
              <img
                src={carone}
                alt="Card 1"
                className="w-auto h-auto object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2 text-justify">
                  Evolving with the Changing Trends
                </h3>
                <div className="flex space-x-4 mb-4 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                    <span className="text-sm">User</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                      />
                    </svg>
                    <span className="text-sm">Date</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <span className="text-sm">Time</span>
                  </div>
                </div>
                <p className="text-gray-700 text-base mb-4 text-justify">
                  Over the years it's become increasingly more important to
                  ensure that your website is fully responsive across desktop,
                  tablet, and mobile devices.....
                </p>
                <button className="btn p-3 rounded-xl bg-white flex items-center space-x-2">
                  <span className="bg-gradient-to-r from-[#9384FE] to-[#312EFE] text-transparent bg-clip-text font-bold">
                    Read More
                  </span>
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
              <img
                src={cartwo}
                alt="Card 2"
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2 text-justify">
                  Enhancing Your Web Experience
                </h3>
                <div className="flex space-x-4 mb-4 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                    <span className="text-sm">User</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                      />
                    </svg>
                    <span className="text-sm">Date</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <span className="text-sm">Time</span>
                  </div>
                </div>
                <p className="text-gray-700 text-base mb-4 text-justify">
                  As the digital landscape evolves, ensuring your web presence
                  adapts to the latest trends and technological advancements is
                  essential...
                </p>
                <button className="btn p-3 rounded-xl bg-white flex items-center space-x-2">
                  <span className="bg-gradient-to-r from-[#9384FE] to-[#312EFE] text-transparent bg-clip-text font-bold">
                    Read More
                  </span>
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
              <img
                src={carthree}
                alt="Card 3"
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2 text-justify">
                  Building a Stronger Future with Web Solutions
                </h3>
                <div className="flex space-x-4 mb-4 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                    <span className="text-sm">User</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                      />
                    </svg>
                    <span className="text-sm">Date</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <span className="text-sm">Time</span>
                  </div>
                </div>
                <p className="text-gray-700 text-base mb-4 text-justify">
                  In today's competitive market, a great web presence is crucial
                  to driving customer engagement and increasing brand
                  loyalty....
                </p>
                <button className="btn p-3 rounded-xl bg-white flex items-center space-x-2">
                  <span className="bg-gradient-to-r from-[#9384FE] to-[#312EFE] text-transparent bg-clip-text font-bold">
                    Read More
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* {Last section} */}
        <div style={{ fontFamily: "Poppins, sans-serif" }}>
          <div className="bg-gray-100 p-4">
            <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg shadow-lg overflow-hidden">
              <div className="flex flex-col items-center p-6 md:flex-row md:items-start md:p-10">
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                    Let's Build Something Extraordinary Together!
                  </h1>
                  {/* <span className="w-full h-1 bg-white absolute top-1/1 left-0 z-50 transform -translate-y-1/2"></span> */}
                  <p className="text-gray-200 text-base sm:text-lg md:text-xl mb-6 text-justify">
                    Ready to elevate your brand with cutting-edge design and
                    development? Whether it's creating an unforgettable user
                    experience, crafting a stunning logo, or building a website
                    that drives results, we're here to bring your vision to
                    life.
                  </p>
                  <button className="bg-white font-semibold btn px-6 sm:px-8 py-3 rounded-md flex justify-center gap-2 sm:gap-4">
                    Get Started For Free{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </button>
                </div>

                <div className="relative w-full md:w-1/2 mt-6 md:mt-0 md:ml-auto flex justify-center">
                  <div
                    className="absolute w-64 h-64 bg-transparent top-20"
                    style={{
                      backgroundImage: `url(${back})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>

                  <img
                    src={Man}
                    alt="Man in suit with crossed arms"
                    className="rounded-lg shadow-lg bg-inherit h-96 relative z-10"
                  />

                  <button className="z-50 bg-white font-semibold btn px-6 py-3 rounded-md flex justify-center gap-4 absolute top-[60%] left-[30%] transform -translate-x-1/2 -translate-y-1/2 text-xs sm:text-sm md:text-base">
                    Boost Ranking Effortlessly{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </button>

                  <button className="z-50 bg-white font-semibold btn px-6 py-3 rounded-md flex justify-center gap-4 absolute top-[40%] right-[2rem] sm:right-[2rem] md:right-[13rem] transform -translate-x-1/5 -translate-y-1/4 text-xs sm:text-sm md:text-base">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    Try for Free Now{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Others;
