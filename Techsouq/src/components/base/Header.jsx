import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/Images/Mask group.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsOpen(false);
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Service", path: "/service" },
    { name: "Pricing", path: "/pricing" },
    { name: "Case Study", path: "/case-study" },
    // { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];
  console.log("helloworld");
  return (
    <div className="w-full">
      <nav
        className="bg-transparent px-4 py-4 absolute z-50 w-full top-0 left-0"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center text-xl font-bold">
            <img
              src={logo}
              alt="Techsouq Technologies"
              style={{ width: "245px", height: "" }}
            />
          </Link>

          <div className="hidden lg:flex space-x-8">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`font-normal text-[18px] ${
                  item.name === "Home"
                    ? "text-transparent text-white font-extrabold"
                    : "text-white hover:text-[#312EFE]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-[#9384FE] to-[#312EFE] font-semibold text-white px-6 py-3 rounded-md flex items-center gap-2 shadow-lg hover:scale-105 transition-transform"
            >
              Contact Us Now
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
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
            </Link>
          </div>

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

        {isMobile && (
          <div
            className={`lg:hidden transition-all duration-300 ease-in-out ${
              isOpen
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className="flex flex-col rounded-md p-4 space-y-4 mt-3">
              {navLinks.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-semibold text-[18px] text-center ${
                    item.name === "Home"
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-[#9384FE] to-[#312EFE]"
                      : "text-black hover:text-[#312EFE]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-gradient-to-r from-[#9384FE] to-[#312EFE] font-semibold text-white px-6 py-3 rounded-md shadow-lg hover:scale-105 transition-transform flex justify-evenly items-center"
              >
                Contact Us Now
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
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
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
