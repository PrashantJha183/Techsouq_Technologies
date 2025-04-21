import React from "react";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "/src/assets/Images/TECHSOUQ TECH LOGO/TECHSOUQ TECHS.png";

const Footer = () => {
  return (
    <footer className="py-10" style={{ fontFamily: "Poppins, sans-serif" }}>
      <div className="container mx-auto px-4">
        {/* Gradient Definition for SVG */}
        <svg width="0" height="0">
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#007bff" offset="0%" /> {/* Blue */}
            <stop stopColor="#8a2be2" offset="100%" /> {/* Purple */}
          </linearGradient>
        </svg>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          {/* Column 1: Logo & Subscription */}
          <div className="text-center md:text-left">
            <img
              src={logo}
              alt="Techsouq"
              className="mx-auto md:mx-0"
              style={{ width: "245px", height: "auto" }}
            />
            <p className="text-black text-lg font-bold mt-4">
              Subscribe For More Updates
            </p>

            {/* Email Input Box with Arrow Icon Inside */}
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
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Company</h3>
            <ul className="space-y-2">
              {["About Us", "Leadership", "Our Values", "Events", "Blog"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-center md:justify-start space-x-2"
                  >
                    <ArrowRightIcon className="h-4 w-4" fill="url(#gradient)" />
                    <a href="/" className="text-gray-600 hover:text-blue-500">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 3: Help */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Help</h3>
            <ul className="space-y-2">
              {[
                "Terms & Condition",
                "Privacy Policy",
                "Customer Support",
                "Career",
                "Security",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center md:justify-start space-x-2"
                >
                  <ArrowRightIcon className="h-4 w-4" fill="url(#gradient)" />
                  <a href="/" className="text-gray-600 hover:text-blue-500">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Address */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Our Address
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <MapPinIcon className="h-5 w-5" fill="url(#gradient)" />
                <p className="text-gray-600">123 Street Name, City, Country</p>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <PhoneIcon className="h-5 w-5" fill="url(#gradient)" />
                <p className="text-gray-600">Phone: +123 456 7890</p>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <EnvelopeIcon className="h-5 w-5" fill="url(#gradient)" />
                <p className="text-gray-600">Email: info@techsouq.com</p>
              </li>
            </ul>
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

          <div className="flex space-x-4 order-1 md:order-2 my-4 md:my-0">
            {[
              { Icon: FaInstagram, link: "https://instagram.com" },
              { Icon: FaYoutube, link: "https://youtube.com" },
              { Icon: FaLinkedin, link: "https://linkedin.com" },
              { Icon: FaTwitter, link: "https://twitter.com" },
            ].map(({ Icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full"
                style={{
                  background: "linear-gradient(to right, #007bff, #8a2be2)",
                }}
              >
                <Icon className="text-white w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="flex space-x-4 order-3 md:order-3">
            <a href="/terms" className="text-gray-600 hover:text-blue-500">
              Terms & Conditions
            </a>
            <a href="/privacy" className="text-gray-600 hover:text-blue-500">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
