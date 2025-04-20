import React from "react";
import { FiLayout } from "react-icons/fi";
import { FaCode } from "react-icons/fa";
import { BiShapePolygon } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import arrow from "/src/assets/Images/arrow-right.png";
import UI from "/src/assets/Images/user-experience.png";
import web from "/src/assets/Images/web.png";
import design from "/src/assets/Images/social-engagement.png";
import consult from "/src/assets/Images/illustrator.png";

function Services() {
  return (
    <div className="bg-slate-200" style={{ fontFamily: "Poppins, sans-serif" }}>
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center items-center">
          <h4
            className="relative inline-block text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#9384Ef] to-[#312EFE] px-4 py-2 font-semibold"
            style={{ position: "relative" }}
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
        <h2 className="text-[60px] font-semibold text-center mb-12">
          Our Core Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-center">
          {/* UI/UX Design */}
          <div className="bg-white rounded-lg shadow-md pt-12 p-8 text-center relative">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gradient-to-r from-[#9384Ef] to-[#312EFE] absolute -top-8 left-1/2 transform -translate-x-1/2 z-20 shadow-lg">
              {/* <FiLayout size={28} className="text-white" /> */}
              <img src={UI} />
            </div>
            <h3 className="text-3xl font-semibold mt-6 mb-2">UI/UX Design</h3>
            <p className="text-gray-600 text-lg">
              We create user-centric designs that prioritize functionality and
              aesthetics. Our intuitive interfaces and seamless user experiences
              ensure that your audience stays engaged and connected with your
              brand.
            </p>
            <a href="#" className="py-4 flex justify-center">
              <div className="flex items-center gap-2 font-semibold btn bg-gradient-to-r text-transparent from-[#9384Ef] to-[#312EFE] bg-clip-text">
                Learn More
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-5 h-5 transform rotate-[-40deg]"
                />
              </div>
            </a>
            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[#9384Ef] to-[#312EFE] rounded-t-full"></div>
          </div>

          {/* Web Development */}
          <div className="bg-white rounded-lg shadow-md pt-12 p-8 text-center relative ">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gradient-to-r from-[#9384Ef] to-[#312EFE] absolute -top-8 left-1/2 transform -translate-x-1/2 z-20 shadow-lg">
              {/* <FaCode size={28} className="text-white" /> */}
              <img src={web} />
            </div>
            <h3 className="text-3xl font-semibold mt-6 mb-2 text-nowrap">
              Web Development
            </h3>
            <p className="text-gray-600 text-lg">
              Our expert developers bring your ideas to life with responsive,
              fast, and scalable websites. From e-commerce platforms to custom
              web applications, we build solutions tailored to your business
              needs.
            </p>
            <a href="#" className="py-4 flex justify-center">
              <div className="flex items-center gap-2 font-semibold btn bg-gradient-to-r text-transparent from-[#9384Ef] to-[#312EFE] bg-clip-text">
                Learn More
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-5 h-5 transform rotate-[-40deg]"
                />
              </div>
            </a>
            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[#9384Ef] to-[#312EFE] rounded-t-full"></div>
          </div>

          {/* Logo Design */}
          <div className="bg-white rounded-lg shadow-md pt-12 p-8 text-center relative ">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gradient-to-r from-[#9384Ef] to-[#312EFE] absolute -top-8 left-1/2 transform -translate-x-1/2 z-20 shadow-lg">
              {/* <BiShapePolygon size={28} className="text-white" /> */}
              <img src={design} />
            </div>
            <h3 className="text-3xl font-semibold mt-6 mb-2">Logo Design</h3>
            <p className="text-gray-600 text-lg">
              Your logo is the face of your brand, and we craft logos that leave
              lasting impressions. Combining creativity and strategy, we design
              visual identities that resonate with your target audience.
            </p>
            <a href="#" className="py-4 flex justify-center">
              <div className="flex items-center gap-2 font-semibold btn bg-gradient-to-r text-transparent from-[#9384Ef] to-[#312EFE] bg-clip-text">
                Learn More
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-5 h-5 transform rotate-[-40deg]"
                />
              </div>
            </a>
            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[#9384Ef] to-[#312EFE] rounded-t-full"></div>
          </div>

          {/* Another Service */}
          <div className="bg-white rounded-lg shadow-md pt-12 p-8 text-center relative ">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gradient-to-r from-[#9384Ef] to-[#312EFE] absolute -top-8 left-1/2 transform -translate-x-1/2 z-20 shadow-lg">
              {/* <BiShapePolygon size={28} className="text-white" /> */}
              <img src={consult} />
            </div>
            <h3 className="text-3xl font-semibold mt-6 mb-2">Consulting</h3>
            <p className="text-gray-600 text-lg">
              Leverage our expertise to navigate the complexities of the digital
              landscape. From strategy development to implementation, we provide
              actionable insights to help your business succeed.
            </p>
            <a href="#" className="py-4 flex justify-center">
              <div className="flex items-center gap-2 font-semibold btn bg-gradient-to-r text-transparent from-[#9384Ef] to-[#312EFE] bg-clip-text">
                Learn More
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-5 h-5 transform rotate-[-40deg]"
                />
              </div>
            </a>
            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[#9384Ef] to-[#312EFE] rounded-t-full"></div>
          </div>
        </div>

        {/* Contact Us Button */}
        <div className="flex justify-center mt-12">
          <a
            href="#"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#9384Ef] to-[#312EFE] text-white py-3 px-6 rounded-md hover:bg-[#1e1dbd] transition-all text-sm font-bold"
          >
            <span>Contact Us Now</span>
            <AiOutlineArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Services;
