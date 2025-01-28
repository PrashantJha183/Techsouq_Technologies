import React from 'react';
import logo from "../assets/Images/logo.png";

function Footer() {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <img src={logo} alt="Techsouq" className="w-32 h-10" />
          <p className="text-black text-xl font-bold mt-2">Subscribe For More Updates</p>
          <input type="email" />
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-600 hover:text-blue-500">About Us</a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-blue-500">Leadership</a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-blue-500">Our Values</a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-blue-500">Events</a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-blue-500">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-6 ```jsx
00 hover:text-blue-500">Support</a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-blue-500">FAQ</a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-blue-500">Contact Us</a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-blue-500">Privacy Policy</a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-blue-500">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Our Address</h3>
            <ul className="flex flex-col space-x-4">
              <li>
                <a href="/" className="text-gray-600 hover:text-blue-500">498 Missuri Extension,<br></br>Lake Ceasar,India,82094</a>
              </li>
              <br></br>
              <li>
                <a href="/" className="text-gray-600 hover:text-blue-500">+123456 789</a>
              </li>
              <br></br>
              <li>
                <a href="/" className="text-gray-600 hover:text-blue-500">example@gmail.com</a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;