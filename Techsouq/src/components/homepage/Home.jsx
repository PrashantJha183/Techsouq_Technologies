import React from "react";
import Hero_Image from "/src/assets/Images/Hero Image.png";
import Circle from "/src/assets/Images/Circle.png";
import Ellipse from "/src/assets/Images/Ellipse 5.png";

const Home = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24">
      <div className="py-20 flex flex-col md:flex-row-reverse items-center justify-between gap-8 relative">
        <div className="md:w-1/3 relative flex flex-col items-center">
          {/* Big Purple Circle */}
          <img
            src={Circle}
            alt="Background Circle"
            className="absolute -z-10 left-1/2 transform -translate-x-1/2 scale-125 object-contain"
            style={{ top: "15%" }}
          />

          {/* Hero image inside purple circle */}
          <div className="relative z-10 w-full h-full overflow-hidden rounded-full">
            <img
              src={Hero_Image}
              alt="Hero"
              className="w-full h-full object-cover"
            />
            {/* Svg in rhs of hero image inside big purple circle */}
            <div
              className="absolute w-full h-full flex justify-center items-center z-20"
              style={{ bottom: "25%", left: "30%" }}
            >
              <svg
                width="107"
                height="95"
                viewBox="0 0 107 95"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.3">
                  <path
                    d="M29.6592 24.9451C32.7461 23.6828 44.0999 23.601 49.3909 23.7179L24.3974 58.1682L50.7941 94.8099H35.7103C30.0275 94.7398 24.3974 90.0471 22.2927 87.7095L0.982422 58.1682L21.8542 29.9417C23.6958 27.9255 25.8005 26.523 29.6592 24.9451Z"
                    fill="white"
                  />
                  <path
                    d="M78.302 1.26567C75.2151 0.0033728 63.8613 -0.078443 58.5703 0.0384367L83.5638 34.4887L57.1671 71.1305H72.2509C77.9337 71.0604 83.5638 66.3677 85.6685 64.0301L106.979 34.4887L86.107 6.26228C84.2654 4.24611 82.1606 2.84355 78.302 1.26567Z"
                    fill="white"
                  />
                </g>
              </svg>
            </div>

            <div
              className="absolute w-full h-full flex justify-center items-center"
              style={{
                bottom: "50%",
                right: "20%",
                zIndex: "1000",
              }}
            >
              {" "}
              <svg
                width="78"
                height="78"
                viewBox="0 0 78 78"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.3">
                  <path
                    d="M38.9913 77.5C60.2536 77.5 77.49 60.2629 77.49 39C77.49 17.7371 60.2536 0.5 38.9913 0.5C17.7291 0.5 0.492676 17.7371 0.492676 39C0.492676 60.2629 17.7291 77.5 38.9913 77.5Z"
                    stroke="url(#paint0_linear_55_1214)"
                  />
                  <path
                    d="M38.9939 73.8466C58.2382 73.8466 73.8388 58.2454 73.8388 39.0005C73.8388 19.7555 58.2382 4.1543 38.9939 4.1543C19.7495 4.1543 4.14893 19.7555 4.14893 39.0005C4.14893 58.2454 19.7495 73.8466 38.9939 73.8466Z"
                    stroke="url(#paint1_linear_55_1214)"
                  />
                  <path
                    d="M38.9925 70.9233C56.6225 70.9233 70.9145 56.6308 70.9145 39.0002C70.9145 21.3696 56.6225 7.07715 38.9925 7.07715C21.3625 7.07715 7.07056 21.3696 7.07056 39.0002C7.07056 56.6308 21.3625 70.9233 38.9925 70.9233Z"
                    stroke="url(#paint2_linear_55_1214)"
                  />
                  <path
                    d="M38.987 67.2689C54.5991 67.2689 67.2552 54.6123 67.2552 38.9997C67.2552 23.3871 54.5991 10.7305 38.987 10.7305C23.3749 10.7305 10.7188 23.3871 10.7188 38.9997C10.7188 54.6123 23.3749 67.2689 38.987 67.2689Z"
                    stroke="url(#paint3_linear_55_1214)"
                  />
                  <path
                    d="M38.9932 62.8845C52.1838 62.8845 62.8769 52.1909 62.8769 38.9999C62.8769 25.8088 52.1838 15.1152 38.9932 15.1152C25.8025 15.1152 15.1094 25.8088 15.1094 38.9999C15.1094 52.1909 25.8025 62.8845 38.9932 62.8845Z"
                    stroke="url(#paint4_linear_55_1214)"
                  />
                  <path
                    d="M38.9913 58.5C49.7605 58.5 58.4906 49.7695 58.4906 39C58.4906 28.2305 49.7605 19.5 38.9913 19.5C28.2221 19.5 19.4919 28.2305 19.4919 39C19.4919 49.7695 28.2221 58.5 38.9913 58.5Z"
                    stroke="url(#paint5_linear_55_1214)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_55_1214"
                    x1="25.2116"
                    y1="25.2198"
                    x2="66.5526"
                    y2="76.9986"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#9384FE" />
                    <stop offset="1" stop-color="#312EFE" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_55_1214"
                    x1="26.5391"
                    y1="26.5453"
                    x2="63.905"
                    y2="73.3453"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#9384FE" />
                    <stop offset="1" stop-color="#312EFE" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_55_1214"
                    x1="27.5977"
                    y1="27.605"
                    x2="61.7836"
                    y2="70.4221"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#9384FE" />
                    <stop offset="1" stop-color="#312EFE" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_55_1214"
                    x1="28.9172"
                    y1="28.9295"
                    x2="59.1279"
                    y2="66.7679"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#9384FE" />
                    <stop offset="1" stop-color="#312EFE" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_55_1214"
                    x1="30.5133"
                    y1="30.5197"
                    x2="55.9539"
                    y2="62.3836"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#9384FE" />
                    <stop offset="1" stop-color="#312EFE" />
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_55_1214"
                    x1="32.1014"
                    y1="32.1099"
                    x2="52.7719"
                    y2="57.9993"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#9384FE" />
                    <stop offset="1" stop-color="#312EFE" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div
            className="absolute transform -translate-y-1/2 flex flex-col md:flex-row items-center gap-4 w-full justify-center z-20"
            style={{ top: "90%" }}
          >
            {/* We provide best service button */}
            <button
              className="bg-white px-5 py-3 flex items-center justify-start gap-3 shadow-lg w-64 relative bottom-20 md:right-20 text-nowrap rounded-xl"
              style={{ marginTop: "10%" }}
            >
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rounded-full bg-gradient-to-br from-purple-500 to-blue-500"
              >
                <path
                  d="M14.9976 4.50757L6.74756 12.76L2.99756 9.00891"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h5 className="font-semibold">We Provide Best Services</h5>
            </button>
            {/* Meet our client button */}
            <button
              className="bg-white px-5 py-3 rounded-2xl flex flex-col items-center gap-3 shadow-lg w-64 relative bottom-20 md:left-30"
              style={{ left: "20%" }}
            >
              <div className="text-center">
                <h5 className="font-semibold">Meet Our Clients</h5>
              </div>

              {/* Stacked Images and Gradient Button */}
              <div className="relative w-full h-10 flex items-center justify-center">
                {/* Stacked images */}
                <img
                  src={Ellipse}
                  alt="Client 1"
                  className="absolute left-0 w-8 h-8 rounded-full border-2 border-white"
                  style={{ zIndex: 5 }}
                />
                <img
                  src={Ellipse}
                  alt="Client 2"
                  className="absolute left-5 w-8 h-8 rounded-full border-2 border-white"
                  style={{ zIndex: 6 }}
                />
                <img
                  src={Ellipse}
                  alt="Client 3"
                  className="absolute left-10 w-8 h-8 rounded-full border-2 border-white"
                  style={{ zIndex: 7 }}
                />
                <img
                  src={Ellipse}
                  alt="Client 4"
                  className="absolute left-16 w-8 h-8 rounded-full border-2 border-white"
                  style={{ zIndex: 8 }}
                />

                {/* Gradient Circular Button */}
                <div
                  className="absolute left-24 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center"
                  style={{ zIndex: 9 }}
                >
                  {/* Plus Icon */}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M12 5V19M5 12H19"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </button>

            {/* Overall Activity button */}
            <button
              className="bg-white px-5  rounded-2xl gap-3 shadow-lg w-64 absolute z-30"
              style={{ bottom: "300%", right: "80%" }}
            >
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
              <div className="flex items-center font-semibold">
                <h5 className="text-xl">Overall Activity</h5>
                <img
                  src={Circle}
                  style={{ height: "5%", width: "5%" }}
                  className="mx-3"
                />
              </div>
              <div className="flex justify-between items-center">
                <p className="text-left">
                  <span className="font-bold">12%</span>
                  <br />
                  Pricing
                </p>
                <svg
                  width="58"
                  height="44"
                  viewBox="0 0 58 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.682617"
                    y="31.3093"
                    width="3.08553"
                    height="11.9013"
                    rx="1.54276"
                    fill="url(#paint0_linear_55_1159)"
                  />
                  <rect
                    x="11.7024"
                    y="24.2566"
                    width="3.08553"
                    height="18.9539"
                    rx="1.54276"
                    fill="url(#paint1_linear_55_1159)"
                  />
                  <rect
                    x="22.5774"
                    y="26.158"
                    width="3.36842"
                    height="16.8421"
                    rx="1.68421"
                    fill="url(#paint2_linear_55_1159)"
                  />
                  <rect
                    x="32.8601"
                    y="24.2566"
                    width="3.08553"
                    height="18.5132"
                    rx="1.54276"
                    fill="url(#paint3_linear_55_1159)"
                  />
                  <rect
                    x="43.6299"
                    y="27.8423"
                    width="3.36842"
                    height="14.3158"
                    rx="1.68421"
                    fill="url(#paint4_linear_55_1159)"
                  />
                  <rect
                    x="53.7351"
                    y="24.4736"
                    width="3.36842"
                    height="17.6842"
                    rx="1.68421"
                    fill="url(#paint5_linear_55_1159)"
                  />
                  <rect
                    x="0.682617"
                    y="23.375"
                    width="3.08553"
                    height="6.17105"
                    rx="1.54276"
                    fill="black"
                  />
                  <rect
                    x="11.7024"
                    y="11.033"
                    width="3.08553"
                    height="11.9013"
                    rx="1.54276"
                    fill="black"
                  />
                  <rect
                    x="22.7219"
                    y="13.283"
                    width="3.08553"
                    height="11.9013"
                    rx="1.54276"
                    fill="black"
                  />
                  <rect
                    x="32.8601"
                    y="11.033"
                    width="3.08553"
                    height="11.9013"
                    rx="1.54276"
                    fill="black"
                  />
                  <rect
                    x="43.8799"
                    y="12.6843"
                    width="3.08553"
                    height="11.9013"
                    rx="1.54276"
                    fill="black"
                  />
                  <rect
                    x="53.7351"
                    y="0.894775"
                    width="3.36842"
                    height="21.8947"
                    rx="1.68421"
                    fill="black"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_55_1159"
                      x1="1.66592"
                      y1="35.1021"
                      x2="5.56613"
                      y2="36.3686"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9384FE" />
                      <stop offset="1" stop-color="#312EFE" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_55_1159"
                      x1="12.6857"
                      y1="30.2969"
                      x2="16.8251"
                      y2="31.1409"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9384FE" />
                      <stop offset="1" stop-color="#312EFE" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_55_1159"
                      x1="23.6508"
                      y1="31.5252"
                      x2="28.0797"
                      y2="32.6347"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9384FE" />
                      <stop offset="1" stop-color="#312EFE" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_55_1159"
                      x1="33.8434"
                      y1="30.1564"
                      x2="37.9748"
                      y2="31.0188"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9384FE" />
                      <stop offset="1" stop-color="#312EFE" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_55_1159"
                      x1="44.7033"
                      y1="32.4045"
                      x2="49.034"
                      y2="33.6808"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9384FE" />
                      <stop offset="1" stop-color="#312EFE" />
                    </linearGradient>
                    <linearGradient
                      id="paint5_linear_55_1159"
                      x1="54.8086"
                      y1="30.1093"
                      x2="59.2619"
                      y2="31.1717"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9384FE" />
                      <stop offset="1" stop-color="#312EFE" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="flex justify-between items-center my-3">
                <p className="text-left">
                  <span className="font-bold">96%</span>
                  <br />
                  Quality
                </p>
                <svg
                  width="58"
                  height="44"
                  viewBox="0 0 58 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.682617"
                    y="31.3093"
                    width="3.08553"
                    height="11.9013"
                    rx="1.54276"
                    fill="url(#paint0_linear_55_1159)"
                  />
                  <rect
                    x="11.7024"
                    y="24.2566"
                    width="3.08553"
                    height="18.9539"
                    rx="1.54276"
                    fill="url(#paint1_linear_55_1159)"
                  />
                  <rect
                    x="22.5774"
                    y="26.158"
                    width="3.36842"
                    height="16.8421"
                    rx="1.68421"
                    fill="url(#paint2_linear_55_1159)"
                  />
                  <rect
                    x="32.8601"
                    y="24.2566"
                    width="3.08553"
                    height="18.5132"
                    rx="1.54276"
                    fill="url(#paint3_linear_55_1159)"
                  />
                  <rect
                    x="43.6299"
                    y="27.8423"
                    width="3.36842"
                    height="14.3158"
                    rx="1.68421"
                    fill="url(#paint4_linear_55_1159)"
                  />
                  <rect
                    x="53.7351"
                    y="24.4736"
                    width="3.36842"
                    height="17.6842"
                    rx="1.68421"
                    fill="url(#paint5_linear_55_1159)"
                  />
                  <rect
                    x="0.682617"
                    y="23.375"
                    width="3.08553"
                    height="6.17105"
                    rx="1.54276"
                    fill="black"
                  />
                  <rect
                    x="11.7024"
                    y="11.033"
                    width="3.08553"
                    height="11.9013"
                    rx="1.54276"
                    fill="black"
                  />
                  <rect
                    x="22.7219"
                    y="13.283"
                    width="3.08553"
                    height="11.9013"
                    rx="1.54276"
                    fill="black"
                  />
                  <rect
                    x="32.8601"
                    y="11.033"
                    width="3.08553"
                    height="11.9013"
                    rx="1.54276"
                    fill="black"
                  />
                  <rect
                    x="43.8799"
                    y="12.6843"
                    width="3.08553"
                    height="11.9013"
                    rx="1.54276"
                    fill="black"
                  />
                  <rect
                    x="53.7351"
                    y="0.894775"
                    width="3.36842"
                    height="21.8947"
                    rx="1.68421"
                    fill="black"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_55_1159"
                      x1="1.66592"
                      y1="35.1021"
                      x2="5.56613"
                      y2="36.3686"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9384FE" />
                      <stop offset="1" stop-color="#312EFE" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_55_1159"
                      x1="12.6857"
                      y1="30.2969"
                      x2="16.8251"
                      y2="31.1409"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9384FE" />
                      <stop offset="1" stop-color="#312EFE" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_55_1159"
                      x1="23.6508"
                      y1="31.5252"
                      x2="28.0797"
                      y2="32.6347"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9384FE" />
                      <stop offset="1" stop-color="#312EFE" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_55_1159"
                      x1="33.8434"
                      y1="30.1564"
                      x2="37.9748"
                      y2="31.0188"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9384FE" />
                      <stop offset="1" stop-color="#312EFE" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_55_1159"
                      x1="44.7033"
                      y1="32.4045"
                      x2="49.034"
                      y2="33.6808"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9384FE" />
                      <stop offset="1" stop-color="#312EFE" />
                    </linearGradient>
                    <linearGradient
                      id="paint5_linear_55_1159"
                      x1="54.8086"
                      y1="30.1093"
                      x2="59.2619"
                      y2="31.1717"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9384FE" />
                      <stop offset="1" stop-color="#312EFE" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </button>
            <button
              className="bg-white py-5 px-auto rounded-2xl flex items-center justify-center gap-3 shadow-lg w-auto absolute z-40 text-nowrap"
              style={{ bottom: "250%", left: "80%" }}
            >
              <div className="flex items-center justify-center">
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="rounded-full bg-gradient-to-br from-purple-500 to-blue-500 mx-3"
                >
                  <path
                    d="M14.9976 4.50757L6.74756 12.76L2.99756 9.00891"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <h5 className="text-justify font-semibold">
                  Experience the Best in <br />
                  Design and Development
                </h5>
              </div>
            </button>
          </div>
        </div>
        {/* Main content in front image */}
        <div className="md:w-1/2 px-4 space-y-7 text-center md:text-left">
          <h4
            className="relative inline-block text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#9384Ef] to-[#312EFE] px-4 py-2"
            style={{
              position: "relative",
            }}
          >
            Welcome to Techsouq
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

          <h2 className="md:text-7xl text-4xl font-bold md:leading-snug leading-snug">
            Transforming Ideas into a{" "}
            <span className="bg-gradient-to-r inline-block text-transparent bg-clip-text from-[#9384Ef] to-[#312EFE]">
              Digital World
            </span>
          </h2>
          <p className="text-[#4A4A4A] text-base">
            Crafting intuitive designs that captivate and inspire. Building
            robust websites that elevate brands online. Empowering businesses
            with innovative digital solutions.
          </p>
          <button className="bg-gradient-to-r from-[#9384Ef] to-[#312EFE] font-semibold btn text-white px-8 py-3 rounded-md flex justify-center gap-4">
            Book a Consultation
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
};

export default Home;

{
  /* <div
              className="absolute w-full h-full flex justify-center items-center z-100 "
              style={{
                bottom: "30%",
                right: "50%",
              }}
            >
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.9976 4.50757L6.74756 12.76L2.99756 9.00891"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div> */
}
