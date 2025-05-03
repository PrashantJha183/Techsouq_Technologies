import React, { useState } from "react";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "/src/assets/Images/TECHSOUQ TECH LOGO/TECHSOUQ TECHS.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const [copyMessage, setCopyMessage] = useState(""); // To show success message

  const copyEmailToClipboard = () => {
    navigator.clipboard
      .writeText("techsouqtechnologies@gmail.com")
      .then(() => {
        setCopyMessage("Email ID copied!");
        setTimeout(() => setCopyMessage(""), 3000); // Hide the message after 3 seconds
      })
      .catch((err) => console.error("Failed to copy email: ", err));
  };

  return (
    <footer className="py-10" style={{ fontFamily: "Poppins, sans-serif" }}>
      <div className="container mx-auto px-4">
        {/* Gradient Definition for Icons */}
        <svg width="0" height="0">
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#007bff" offset="0%" />
            <stop stopColor="#8a2be2" offset="100%" />
          </linearGradient>
          <linearGradient
            id="icon-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop stopColor="#9384Ef" offset="0%" />
            <stop stopColor="#312EFE" offset="100%" />
          </linearGradient>
        </svg>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          {/* Column 1: Logo & Subscription */}
          <div className="text-center md:text-left">
            <Link to="/">
              <img
                src={logo}
                alt="Techsouq"
                className="mx-auto md:mx-0"
                style={{ width: "245px", height: "auto" }}
              />
            </Link>
            <p className="text-black text-lg font-bold mt-4">
              Subscribe For More Updates
            </p>

            {/* Email Input Box with Arrow Icon */}
            <div className="relative max-w-xs mt-2 mx-auto md:mx-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 pr-12 border border-gray-300 rounded-md focus:outline-none"
              />
              <button className="absolute inset-y-0 right-3 flex items-center">
                <ArrowRightIcon className="h-5 w-5" fill="url(#gradient)" />
              </button>
            </div>
          </div>

          {/* Column 2: Company Info */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Company</h3>
            <ul className="space-y-2">
              {[
                { name: "About Us", path: "/about" },
                { name: "Leadership", path: "/" },
                { name: "Our Values", path: "/" },
                { name: "Events", path: "/" },
                { name: "Blog", path: "/" },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center md:justify-start space-x-2"
                >
                  <ArrowRightIcon className="h-4 w-4" fill="url(#gradient)" />
                  <Link
                    to={item.path}
                    className="text-gray-600 hover:text-blue-500"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Help */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Help</h3>
            <ul className="space-y-2">
              {[
                { name: "Terms & Condition", path: "/terms" },
                { name: "Privacy Policy", path: "/privacy" },
                { name: "Customer Support", path: "/" },
                { name: "Career", path: "/" },
                { name: "Security", path: "/" },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center md:justify-start space-x-2"
                >
                  <ArrowRightIcon className="h-4 w-4" fill="url(#gradient)" />
                  <Link
                    to={item.path}
                    className="text-gray-600 hover:text-blue-500"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Address */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Our Address
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <MapPinIcon className="h-5 w-5" fill="url(#gradient)" />
                <p className="text-gray-600">
                  21st Floor, Opp SBI Bank Gali, Ranavav, <br />
                  360550, Gujarat, India
                </p>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <PhoneIcon className="h-5 w-5" fill="url(#gradient)" />
                <p className="text-gray-600">+91 9978600505</p>
              </li>
              <li
                className="flex items-center justify-center md:justify-start space-x-2 cursor-pointer"
                onClick={copyEmailToClipboard} // Call function on email click
              >
                <EnvelopeIcon className="h-5 w-5" fill="url(#gradient)" />
                <p className="text-gray-600">techsouqtechnologies@gmail.com</p>
              </li>
            </ul>
            {/* Display success message if email is copied */}
            {copyMessage && (
              <p className="text-green-500 text-sm mt-2">{copyMessage}</p>
            )}
          </div>
        </div>

        <hr className="my-6 border-gray-300" />

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center">
          <p className="text-gray-600 text-sm order-2 md:order-1 w-full md:w-auto">
            Copyright © 2025{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9384FE] to-[#312EFE] font-bold">
              TECHSOUQ{" "}
            </span>
            All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 order-1 md:order-2 my-4 md:my-0">
            {[
              {
                Icon: FaInstagram,
                link: "https://www.instagram.com/techsouqtechnogies?igsh=MW95aDNuMDllN2NuaQ==",
              },
              { Icon: FaYoutube, link: "" },
              { Icon: FaLinkedin, link: "" },
              { Icon: FaTwitter, link: "" },
            ].map(({ Icon, link }, index) => (
              <div
                key={index}
                className="w-10 h-10 rounded-full p-[2px] bg-gradient-to-r from-[#9384Ef] to-[#312EFE] flex items-center justify-center"
              >
                <div className="bg-white rounded-full w-full h-full flex items-center justify-center">
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <Icon
                      className="w-5 h-5"
                      style={{ fill: "url(#icon-gradient)" }}
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="flex space-x-4 order-3 md:order-3">
            <Link to="/terms" className="text-gray-600 hover:text-blue-500">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="text-gray-600 hover:text-blue-500">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
