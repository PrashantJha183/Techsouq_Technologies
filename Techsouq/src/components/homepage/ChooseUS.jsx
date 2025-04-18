import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import Man from "/src/assets/Images/2.png";

const Choose = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24">
      <div className="py-20 flex flex-col md:flex-row-reverse md:items-center md:justify-between gap-6 text-center md:text-left">
        {/* Text Section */}
        <div className="md:w-1/2 px-2 space-y-4 flex flex-col items-center md:items-start">
          <h2 className="font-semibold bg-gradient-to-r inline-block text-transparent bg-clip-text from-[#9384Ef] to-[#312EFE] px-9 py-3 rounded-t-lg text-xl">
            Why Choose Us
          </h2>
          <div className="text-5xl font-bold">Your Success, Our Commitment</div>
          <p className="text-[#4A4A4A] text-base py-4">
            We don't just deliver projects; we create experiences that drive
            results. At Techsouq Technologies, our approach combines creativity,
            strategy, and technology to set your brand apart in a competitive
            digital landscape.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-purple-500" size={24} />
              <span className="text-gray-700">Tailored Strategies</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-purple-500" size={24} />
              <span className="text-gray-700">Storytelling Approach</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-purple-500" size={24} />
              <span className="text-gray-700">Proven Success</span>
            </div>
          </div>

          <div className="flex justify-center md:justify-start py-4">
            <button className="bg-gradient-to-r from-[#9384Ef] to-[#312EFE] font-semibold text-white px-8 py-3 rounded-md flex items-center gap-4">
              Contact Us Now
              <ArrowRight size={20} className="text-white" />
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/3 flex justify-center p-5">
          <img src={Man} alt="Why Choose Us" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default Choose;
