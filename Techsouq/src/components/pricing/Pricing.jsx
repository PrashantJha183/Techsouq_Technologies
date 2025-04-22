import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <div className="bg-slate-200" style={{ fontFamily: "Poppins, sans-serif" }}>
      <div className="container mx-auto px-4 py-16">
        {/* Title */}
        <div className="flex justify-center items-center mb-4">
          <h4
            className="relative inline-block text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#9384Ef] to-[#312EFE] px-4 py-2 font-semibold"
            style={{ position: "relative" }}
          >
            Pricing
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

        <h2 className="text-[60px] font-semibold text-center mb-16">
          Our Custom Pricing
        </h2>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* First Card */}
          <div className="bg-white rounded-3xl shadow-md p-8 text-left flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mt-6 mb-2">Lump sum</h3>
              <p className="text-gray-600 text-lg">Started at</p>
              <h3 className="text-2xl font-semibold mt-6 mb-2">
                $4000 / month
              </h3>
              <h3 className="text-2xl font-semibold mt-6 mb-2">
                Package Includes
              </h3>
              <div className="space-y-3 text-left">
                {[
                  "Custom Design",
                  "Custom Development",
                  "High Performance Hosting",
                  "Unlimited Edits",
                  "24/7 Customers Service",
                  "Free Google Analytic Integration",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#9384Ef] to-[#312EFE] flex items-center justify-center">
                      <Check size={14} color="white" />
                    </div>
                    <span className="text-[#000000] text-lg text-nowrap">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <button className="bg-gradient-to-r from-[#9384Ef] to-[#312EFE] font-semibold text-white px-8 py-3 mt-6 rounded-md flex items-center justify-center gap-4 text-sm w-full">
              GET STARTED
            </button>
          </div>

          {/* Second Card */}
          <div className="bg-gradient-to-r from-[#9384Ef] to-[#312EFE] rounded-3xl shadow-md p-1 transform scale-105">
            <div className="rounded-lg p-8 flex flex-col justify-between h-full text-white bg-gradient-to-r from-[#9384Ef] to-[#312EFE]">
              <div>
                <h3 className="text-2xl font-semibold mt-6 mb-2">
                  Premium Plan
                </h3>
                <p className="text-lg">Started at</p>
                <h3 className="text-2xl font-semibold mt-6 mb-2">
                  $6000 / month
                </h3>
                <h3 className="text-2xl font-semibold mt-6 mb-2">
                  Package Includes
                </h3>
                <div className="space-y-3 text-left">
                  {[
                    "Custom Design",
                    "Custom Development",
                    "Priority Hosting",
                    "Unlimited Edits",
                    "Dedicated Manager",
                    "Free SEO & Analytics Integration",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                        <Check size={14} color="#312EFE" />
                      </div>
                      <span className="text-white text-lg text-nowrap">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <button className="bg-white font-semibold text-[#312EFE] px-8 py-3 mt-6 rounded-md flex items-center justify-center gap-4 text-sm w-full">
                SUBSCRIBE
              </button>
            </div>
          </div>

          {/* Third Card */}
          <div className="bg-white rounded-3xl shadow-md p-8 text-left flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mt-6 mb-2">
                Add-on services
              </h3>
              <p className="text-gray-600 text-lg">Standard service</p>
              <h3 className="text-2xl font-semibold mt-6 mb-2">$0 / month</h3>
              <h3 className="text-2xl font-semibold mt-6 mb-2">
                Package Includes
              </h3>
              <div className="space-y-3 text-left">
                {[
                  "Blog content writing",
                  "Logo Design",
                  "Premium content writing",
                  "Social media management",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#9384Ef] to-[#312EFE] flex items-center justify-center">
                      <Check size={14} color="white" />
                    </div>
                    <span className="text-[#000000] text-lg text-nowrap">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <button className="bg-gradient-to-r from-[#9384Ef] to-[#312EFE] font-semibold text-white px-8 py-3 mt-6 rounded-md flex items-center justify-center gap-4 text-sm w-full">
              GET A QUOTE
            </button>
          </div>
        </div>

        {/* Contact Us Button */}
        <div className="flex justify-center mt-16">
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
};

export default Pricing;
