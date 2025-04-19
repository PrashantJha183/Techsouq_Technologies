import React from "react";
import { ArrowUpRight } from "lucide-react"; // imported icon
import Man from "/src/assets/Images/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background.png";

const LastPage = () => {
  return (
    <div
      className="bg-gray-100 py-10 px-4 flex justify-center"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg shadow-lg max-w-6xl w-full">
        <div className="flex flex-col items-center justify-center p-10 md:flex-row md:items-center md:justify-between gap-10">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Let's Build Something Extraordinary Together!
            </h1>
            <p className="text-gray-200 text-lg mb-6">
              Ready to elevate your brand with cutting-edge design and
              development? Whether it's creating an unforgettable user
              experience, crafting a stunning logo, or building a website that
              drives results, we're here to bring your vision to life.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="bg-white font-semibold px-8 py-3 rounded-md flex items-center gap-3">
                Get Started For Free
                <ArrowUpRight
                  size={20}
                  strokeWidth={2}
                  className="text-purple-400"
                />
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={Man}
              alt="Man in suit with crossed arms"
              className="rounded-lg shadow-lg object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastPage;
