import React, { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const FAQ_One = () => {
  // State to track open questions
  const [openIndex, setOpenIndex] = useState(null);

  // FAQ Data
  const faqs = [
    {
      question: "What industries do you specialize in?",
      answer:
        "We work with a diverse range of industries, including e-commerce, technology, healthcare, education, and startups. Our flexible approach allows us to tailor solutions for businesses.",
    },
    {
      question: "What services do you offer?",
      answer:
        "We provide web development, UI/UX design, branding, SEO optimization, and digital marketing services to help businesses grow online.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "The timeline varies depending on the complexity of the project. On average, a website can take 4-8 weeks, while larger applications may take longer.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Yes, we offer maintenance and support plans to ensure your website remains updated and secure.",
    },
    {
      question: "Can you redesign an existing website?",
      answer:
        "Absolutely! We can revamp your website to enhance its design, functionality, and user experience.",
    },
    {
      question: "Do you work with small businesses and startups?",
      answer:
        "Yes, we love working with startups and small businesses, helping them establish a strong online presence.",
    },
  ];

  // Toggle function
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="container mx-auto px-4 py-16 font-poppins"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="flex justify-center align-center">
        <h4
          className="relative inline-block text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#9384Ef] to-[#312EFE] px-4 py-2"
          style={{
            position: "relative",
          }}
        >
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

      {/* FAQ Grid */}
      <div className="flex flex-col items-start gap-4 mt-8 max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="w-full rounded-sm">
            {/* Question Box */}
            <button
              className={`flex items-center justify-between w-full p-4 shadow-md cursor-pointer transition-all duration-300 border-2 relative bg-white rounded-[12px] font-poppins 
                ${
                  openIndex === index ? "border-transparent" : "border-gray-300"
                }`}
              onClick={() => toggleFAQ(index)}
              style={{
                borderImage:
                  openIndex === index
                    ? "linear-gradient(to right, #9384Ef, #312EFE) 1"
                    : "",
                borderWidth: "2px",
                borderStyle: "solid",
                borderRadius: "12px", // Ensure border-radius is applied
              }}
            >
              <h3
                className={`text-base transition-colors duration-300 font-poppins ${
                  openIndex === index
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#9384Ef] to-[#312EFE]"
                    : "text-black"
                }`}
                style={{ fontWeight: "600" }}
              >
                {faq.question}
              </h3>
              {/* Arrow Icon inside Gradient Circle */}
              <span
                className={`flex items-center justify-center w-10 h-10 rounded-full transition-transform transform ${
                  openIndex === index ? "rotate-[45deg]" : "rotate-[-60deg]"
                } bg-gradient-to-r from-[#9384Ef] to-[#312EFE] p-2`}
              >
                <ArrowRightIcon className="w-5 h-5 text-white" />
              </span>
            </button>

            {/* Answer (Collapsible) */}
            <div
              className={`overflow-hidden transition-all duration-300 bg-white rounded-[12px] font-poppins ${
                openIndex === index ? "max-h-40 mt-2 p-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ_One;
