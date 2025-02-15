import React, { useState, useEffect } from "react";
import logo from "/src/assets/Images/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsOpen(false); // Close mobile menu when resizing above 1024px
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className="bg-transparent px-4 py-4 shadow-md"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center text-xl font-bold">
          <img
            src={logo}
            alt="Techsouq Technologies"
            style={{ width: "245px", height: "60px" }}
          />
        </a>

        {/* Desktop Menu (Visible from 1025px onwards) */}
        <div className="hidden lg:flex space-x-8">
          {[
            "Home",
            "About",
            "Service",
            "Pricing",
            "Case Study",
            "Blog",
            "Contact",
          ].map((item, index) => (
            <a
              key={index}
              href="/"
              className={`font-normal text-[18px] ${
                item === "Home"
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-[#9384FE] to-[#312EFE]"
                  : "text-black hover:text-[#312EFE]"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Contact Button - Desktop (Visible from 1025px onwards) */}
        <div className="hidden lg:flex">
          <button className="bg-gradient-to-r from-[#9384FE] to-[#312EFE] font-semibold text-white px-6 py-3 rounded-md flex items-center gap-2 shadow-lg hover:scale-105 transition-transform">
            Contact Us Now
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
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
            </svg>
          </button>
        </div>

        {/* Hamburger Icon - Mobile (Visible from 0px to 1024px) */}
        {isMobile && (
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu (Visible from 0px to 1024px) */}
      {isMobile && (
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col bg-white shadow-md rounded-md p-4 space-y-4 mt-3">
            {[
              "Home",
              "About",
              "Service",
              "Pricing",
              "Case Study",
              "Blog",
              "Contact",
            ].map((item, index) => (
              <a
                key={index}
                href="/"
                className={`font-semibold text-[18px] text-center ${
                  item === "Home"
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#9384FE] to-[#312EFE]"
                    : "text-black hover:text-[#312EFE]"
                }`}
              >
                {item}
              </a>
            ))}

            {/* Contact Button - Mobile */}
            <button className="bg-gradient-to-r from-[#9384FE] to-[#312EFE] font-semibold text-white px-6 py-3 rounded-md shadow-lg hover:scale-105 transition-transform flex justify-evenly items-center">
              Contact Us Now
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
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
              </svg>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
