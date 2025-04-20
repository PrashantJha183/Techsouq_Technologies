import React from "react";
import Image1 from "/src/assets/Images/4.png";
import Image2 from "/src/assets/Images/5.png";
import Image3 from "/src/assets/Images/6.png";

const FAQ_two = () => {
  return (
    <div
      className="container mx-auto px-4 py-16 font-poppins"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="flex justify-center items-center">
        <h4 className="relative inline-block text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#9384Ef] to-[#312EFE] px-4 py-2">
          What We Says
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
      <h2 className="text-4xl font-semibold text-center mb-6 mt-5">
        Frequently Asked Questions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
        {[Image1, Image2, Image3].map((image, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <img src={image} alt={`FAQ ${index + 1}`} className="mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              {index === 0
                ? "Transforming User Interactions into a Brand"
                : index === 1
                ? "Tailwind CSS for Rapid UI Development"
                : "Mastering Frontend Architecture"}
            </h3>
            <div className="flex flex-wrap items-center text-sm space-x-2">
              <div className="flex items-center space-x-1">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2"></path>
                </svg>
                <span>Cardiff Web</span>
              </div>

              <div className="flex items-center space-x-1 ml-auto">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"></path>
                </svg>
                <span>10 July 2024</span>
              </div>

              <div className="flex items-center space-x-1 ml-auto">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <span>2:00 Min</span>
              </div>
            </div>

            <p className="text-gray-700 mt-4">
              {index === 0
                ? "Learn how to transform user interactions into a cohesive brand experience through effective web development strategies."
                : index === 1
                ? "Tailwind CSS speeds up development with utility-first classes. Here's how to harness its full potential."
                : "Design scalable frontend systems and write clean, modular code that grows with your app."}
            </p>

            {/* Read More Button */}
            <div className="mt-4 inline-block">
              <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#9384Ef] to-[#312EFE]">
                Read More
              </span>
              <span className="block h-[2px] w-full bg-gradient-to-r from-[#9384Ef] to-[#312EFE] rounded-full"></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ_two;
