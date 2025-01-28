import React from "react";
import Hero_Image from "../assets/Images/Hero Image.png";

const Home = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 ">
      <div className="py-20 flex flex-col md:flex-row-reverse items-center justify-between gap-2">
        {/* img */}
        <div className="md:w-1/3">
          <img src={Hero_Image} alt="" className="rounded-xl" />
          <div className="flex flex-col md:flex-row items-center justify-around -mt-14 gap-4">
            <div className="bg-white px-3 py-2 rounded-2xl flex items-center gap-3 shadow-sm w-64">
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
              <div className="space-y-1">
                <h5>We Provide best services</h5>
              </div>
            </div>
            <div className="bg-white px-3 py-2 rounded-2xl md:flex items-center gap-3 shadow-sm w-64 hidden">
              <img
                src="/images/home/b-food1.png"
                alt=""
                className="rounded-2xl"
              />
              <div className="space-y-1">
                <h5>Meet Our Clients</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-500"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* texts */}
        <div className="md:w-1/2 px-4 space-y-7">
          {/* <button className="font-semibold btn bg-gradient-to-r inline-block text-transparent bg-clip-textbg-gradient-to-r from-[#9384Ef] to-[#312EFE] bg-clip-text px-8 py-3 rounded-t-lg">
            Welcome to Techsouq
          </button> */}
          <h4 className="bg-gradient-to-r inline-block text-transparent bg-clip-textbg-gradient-to-r from-[#9384Ef] to-[#312EFE] bg-clip-text text-xl">Welcome to Techsouq</h4>
          <h2 className="md:text-7xl text-4xl font-bold md:leading-snug leading-snug">
            Transforming a Ideas into a{" "}
            <span className="bg-gradient-to-r inline-block text-transparent bg-clip-textbg-gradient-to-r from-[#9384Ef] to-[#312EFE] bg-clip-text">
              Digital world
            </span>
          </h2>
          <p className="text-[#4A4A4A] text-base">
            Crafting intutive designs that captivate and inpire.Building robust
            websites that elevate brands online.Empowering businesses with
            innovative digital solutions.
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
      </div>
    </div>
  );
};

export default Home;
