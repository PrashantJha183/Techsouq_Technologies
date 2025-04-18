import React from "react";

function Services() {
  return (
    <div className="bg-slate-200" style={{ fontFamily: "Poppins, sans-serif" }}>
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center align-center">
          <h4
            className="relative inline-block text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#9384Ef] to-[#312EFE] px-4 py-2 font-semibold"
            style={{
              position: "relative",
            }}
          >
            Our Services
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
        <h2 className="text-[60px] font-bold text-center mb-12">
          Our Core Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex justify-center mb-4">
              <svg
                className="w-12 h-12 text-blue-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16.71 7.04L12.5 12.23 8.29 7.04" />
                <path d="M15 17l-7-7 7-7" />
                <path d="M12 15l-7 7 7 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">UI/UX Design</h3>
            <p className="text-gray-600 text-center">
              We create user-centric designs that prioritize functionality and
              aesthetics. Our intuitive interfaces and seamless user experiences
              ensure that your audience stays engaged and connected with your
              brand.
            </p>
            <a href="#" className="py-4 flex justify-center">
              <div
                size="sm"
                variant="text"
                className="flex items-center gap-2 font-semibold btn bg-gradient-to-r text-transparent bg-clip-textbg-gradient-to-r from-[#9384Ef] to-[#312EFE] bg-clip-text"
              >
                Learn More
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.46913 14.404L15.5632 4.76231"
                    stroke="url(#paint0_linear_55_671)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.78125 4.44434H16.1146V12.7777"
                    stroke="url(#paint1_linear_55_671)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_55_671"
                      x1="8.76794"
                      y1="7.75292"
                      x2="13.9815"
                      y2="14.5991"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9384FE" />
                      <stop offset="1" stop-color="#312EFE" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_55_671"
                      x1="10.4369"
                      y1="7.10001"
                      x2="14.9699"
                      y2="12.7777"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9384FE" />
                      <stop offset="1" stop-color="#312EFE" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 2a8 8 0 100 16 8 8 0 0 0 0-16zm1.88 10.18A10.01 10.01 0 0 1 10 15a10.01 10.01 0 0 1-5.5-2.22l.27.67c.33.87.76 1.58 1.41 2.16l.94.47c.75.37 1.57.69 2.39 1.02l.61.22a.8.8 0 0 0 .92 0l.61-.22c.82-.33 1.64-.65 2.39-1.02l.94-.47c.65-.58 1.08-1.29 1.41-2.16l.27-.67A10.01 10.01 0 0 1 11.88 12.18z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">
              Web Development
            </h3>
            <p className="text-gray-600 text-center">
              Our expert developers bring your ideas to life with responsive,
              fast, and scalable websites. From e-commerce platforms to custom
              web applications, we build solutions tailored to your business
              needs.
            </p>
            <a href="#" className="py-4 flex justify-center">
              <div
                size="sm"
                variant="text"
                className="flex items-center gap-2 font-semibold btn bg-gradient-to-r text-transparent bg-clip-textbg-gradient-to-r from-[#9384Ef] to-[#312EFE] bg-clip-text"
              >
                Learn More
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.46913 14.404L15.5632 4.76231"
                    stroke="url(#paint0_linear_55_671)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.78125 4.44434H16.1146V12.7777"
                    stroke="url(#paint1_linear_55_671)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_55_671"
                      x1="8.76794"
                      y1="7.75292"
                      x2="13.9815"
                      y2="14.5991"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9384FE" />
                      <stop offset="1" stop-color="#312EFE" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_55_671"
                      x1="10.4369"
                      y1="7.10001"
                      x2="14.9699"
                      y2="12.7777"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9384FE" />
                      <stop offset="1" stop-color="#312EFE" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 2a8 8 0 100 16 8 8 0 0 0 0-16zm1.88 10.18A10.01 10.01 0 0 1 10 15a10.01 10.01 0 0 1-5.5-2.22l.27.67c.33.87.76 1.58 1.41 2.16l.94.47c.75.37 1.57.69 2.39 1.02l.61.22a.8.8 0 0 0 .92 0l.61-.22c.82-.33 1.64-.65 2.39-1.02l.94-.47c.65-.58 1.08-1.29 1.41-2.16l.27-.67A10.01 10.01 0 0 1 11.88 12.18z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">Logo Design</h3>
            <p className="text-gray-600 text-center">
              Your logo is the face of your brand, and we craft logos that leave
              lasting impressions. Combining creativity and strategy, we design
              visual identities that resonate with your target audience.
            </p>
            <a href="#" className="py-4 flex justify-center">
              <div
                size="sm"
                variant="text"
                className="flex items-center gap-2 font-semibold btn bg-gradient-to-r text-transparent bg-clip-textbg-gradient-to-r from-[#9384Ef] to-[#312EFE] bg-clip-text"
              >
                Learn More
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.46913 14.404L15.5632 4.76231"
                    stroke="url(#paint0_linear_55_671)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.78125 4.44434H16.1146V12.7777"
                    stroke="url(#paint1_linear_55_671)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_55_671"
                      x1="8.76794"
                      y1="7.75292"
                      x2="13.9815"
                      y2="14.5991"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9384FE" />
                      <stop offset="1" stop-color="#312EFE" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_55_671"
                      x1="10.4369"
                      y1="7.10001"
                      x2="14.9699"
                      y2="12.7777"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9384FE" />
                      <stop offset="1" stop-color="#312EFE" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 2a8 8 0 100 16 8 8 0 0 0 0-16zm1.88 10.18A10.01 10.01 0 0 1 10 15a10.01 10.01 0 0 1-5.5-2.22l.27.67c.33.87.76 1.58 1.41 2.16l.94.47c.75.37 1.57.69 2.39 1.02l.61.22a.8.8 0 0 0 .92 0l.61-.22c.82-.33 1.64-.65 2.39-1.02l.94-.47c.65-.58 1.08-1.29 1.41-2.16l.27-.67A10.01 10.01 0 0 1 11.88 12.18z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">Consulting</h3>
            <p className="text-gray-600 text-center">
              Your logo is the face of your brand, and we craft logos that leave
              lasting impressions. Combining creativity and strategy, we design
              visual identities that resonate with your target audience.
            </p>
            <a href="#" className="py-4 flex justify-center">
              <div
                size="sm"
                variant="text"
                className="flex items-center gap-2 font-semibold btn bg-gradient-to-r text-transparent bg-clip-textbg-gradient-to-r from-[#9384Ef] to-[#312EFE] bg-clip-text"
              >
                Learn More
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.46913 14.404L15.5632 4.76231"
                    stroke="url(#paint0_linear_55_671)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.78125 4.44434H16.1146V12.7777"
                    stroke="url(#paint1_linear_55_671)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_55_671"
                      x1="8.76794"
                      y1="7.75292"
                      x2="13.9815"
                      y2="14.5991"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9384FE" />
                      <stop offset="1" stop-color="#312EFE" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_55_671"
                      x1="10.4369"
                      y1="7.10001"
                      x2="14.9699"
                      y2="12.7777"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9384FE" />
                      <stop offset="1" stop-color="#312EFE" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center w-100 mt-10">
          <button className="bg-gradient-to-r from-[#9384Ef] to-[#312EFE] font-semibold btn text-white px-8 py-3 rounded-md flex justify-center items-center gap-4">
            Contact US Now
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_55_1110)">
                <path
                  d="M0.953125 9.6377H16.7865"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.6641 4.16675L17.4974 10.0001L11.6641 15.8334"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
      </div>
    </div>
  );
}

export default Services;
