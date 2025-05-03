import React from "react";
import { ArrowRight } from "lucide-react";
import Shifan from "/src/assets/Images/Shifan.jpg";
import Munaf from "/src/assets/Images/Munaf.jpg";
import Prashant from "/src/assets/Images/Prashant_Jha.jpg";
import Kinjal from "/src/assets/Images/13.png";
import Pravin from "/src/assets/Images/Pravin.jpg";
import Dipak from "/src/assets/Images/13.png";

const teamMembers = [
  {
    name: "Shifan Shivani",
    role: "Co-founder & CEO",
    image: Shifan,
  },
  {
    name: "Munaf Shivani",
    role: "Co-founder & Managing Director",
    image: Munaf,
  },
  {
    name: "Prashant Jha",
    role: "Full Stack Web Developer",
    image: Prashant,
  },
  {
    name: "Kinjal",
    role: "Full Stack Web Developer",
    image: Kinjal,
  },
  {
    name: "Pravin Der",
    role: "UI/UX Designer",
    image: Pravin,
  },

  {
    name: "Dipak",
    role: "Graphic Designer",
    image: Dipak,
  },
];

const Team = () => {
  return (
    <div
      style={{ fontFamily: "Poppins, sans-serif" }}
      className="flex flex-col items-center justify-center h-100 mb-20"
    >
      <div className="w-full max-w-[1200px] px-4">
        <div className="mt-20 mb-6 text-left">
          <h4 className="relative inline-block text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#9384Ef] to-[#312EFE] px-4 py-2 font-semibold">
            Our Team
            <span
              className="absolute inset-0 rounded-full"
              style={{
                background: "linear-gradient(90deg, #9384Ef, #312EFE)",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                padding: "1px",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            ></span>
          </h4>

          <h4 className="text-4xl md:text-6xl font-semibold mt-6">
            Meet the Minds <br /> Behind Techsouq
          </h4>
        </div>

        {/* Team Member Cards */}
        <div className="flex flex-wrap justify-center gap-8 w-full">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-full sm:w-[48%] md:w-[30%] bg-white shadow-xl rounded-lg flex flex-col h-full max-h-[600px]"
            >
              {/* Image */}
              <div className="flex-grow h-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[450px] object-cover rounded-xl"
                />
              </div>

              {/* Details */}
              <div className="p-4 flex flex-col justify-between h-[calc(100%-250px)]">
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="text-xl font-semibold">{member.name}</h5>
                    <p className="text-md text-gray-500">{member.role}</p>
                  </div>
                  <div className="bg-gradient-to-r from-[#9384Ef] to-[#312EFE] rounded-full p-2">
                    <ArrowRight className="text-white w-5 h-5 rotate-[-45deg]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
