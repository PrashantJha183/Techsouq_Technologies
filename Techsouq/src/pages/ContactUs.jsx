// import React from 'react';

// function ContactUS() {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-8">
//       {/* texts */}
//       <div className="md:w-1/2 px-4 space-y-7">
//           {/* <button className="font-semibold btn bg-gradient-to-r inline-block text-transparent bg-clip-textbg-gradient-to-r from-[#9384Ef] to-[#312EFE] bg-clip-text px-8 py-3 rounded-t-lg">
//             Welcome to Techsouq
//           </button> */}
//           <h4 className="bg-gradient-to-r inline-block text-transparent bg-clip-textbg-gradient-to-r from-[#9384Ef] to-[#312EFE] bg-clip-text text-xl">Welcome to Techsouq</h4>
//           <h2 className="md:text-7xl text-4xl font-bold md:leading-snug leading-snug">
//             Transforming a Ideas into a{" "}
//             <span className="bg-gradient-to-r inline-block text-transparent bg-clip-textbg-gradient-to-r from-[#9384Ef] to-[#312EFE] bg-clip-text">
//               Digital world
//             </span>
//           </h2>
//           <p className="text-[#4A4A4A] text-base">
//             Crafting intutive designs that captivate and inpire.Building robust
//             websites that elevate brands online.Empowering businesses with
//             innovative digital solutions.
//           </p>
//           <button className="bg-gradient-to-r from-[#9384Ef] to-[#312EFE] font-semibold btn text-white px-8 py-3 rounded-md flex justify-center gap-4">
//             Book a Consultation
//             <svg
//               width="20"
//               height="20"
//               viewBox="0 0 20 20"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <g clip-path="url(#clip0_55_1110)">
//                 <path
//                   d="M0.953125 9.6377H16.7865"
//                   stroke="white"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 />
//                 <path
//                   d="M11.6641 4.16675L17.4974 10.0001L11.6641 15.8334"
//                   stroke="white"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 />
//               </g>
//               <defs>
//                 <clipPath id="clip0_55_1110">
//                   <rect width="20" height="20" fill="white" />
//                 </clipPath>
//               </defs>
//             </svg>
//           </button>
//       <h2 className="text-2xl font-bold mb-4 text-center">Send Message</h2>
//       <p className="text-gray-600 text-center mb-6">
//         Please fill out the form below. We will get back to you as soon as we
//         can.
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">
//             First Name
//           </label>
//           <input
//             type="text"
//             id="firstName"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="John..."
//             />
//         </div>
//         <div>
//           <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">
//             Last Name
//           </label>
//           <input
//             type="text"
//             id="lastName"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="Last Name..."
//             />
//         </div>
//         <div>
//           <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">
//             Phone Number
//           </label>
//           <input
//             type="tel"
//             id="phoneNumber"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="+151265 413654"
//             />
//         </div>
//         <div>
//           <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb -2">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="example@example.com"
//             />
//         </div>
//       </div>

//       <div className="mt-4">
//         <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
//           Message
//         </label>
//         <textarea
//           id="message"
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           rows="4"
//           placeholder="Your message..."
//           ></textarea>
//       </div>

//       <div className="mt-6">
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//           Send Message
//         </button>
//           </div>
//       </div>
//     </div>
//   );
// }

// export default ContactUS;
import React from 'react';

function ContactUS() {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg px-10 py-8 w-full max-w-5xl">
        <div className="flex flex-row gap-8">
          <div className="text-center">
            <h1 className="text-7xl font-bold text-gray-800">
              Let's Connect and Bring Your Vision to Life!
            </h1>
            <p className="mt-2 text-gray-600">
              Have questions, ideas, or a project in mind? We're here to
              help! At Techsouq, we're passionate about collaborating
              with businesses to create innovative digital solutions that
              drive success. Whether you're looking for expert advice, a
              custom quote, or simply want to explore possibilities, our
              team is ready to assist you. Get in touch today, and let's
              start building something extraordinary together!
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              Contact Us Now →
            </button>
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl font-bold text-gray-800">
              Send Message
            </h2>
            <p className="text-gray-600">
              Please fill out the form below. We will get back to you as
              soon as we can.
            </p>
            <div className="flex flex-col gap-2">
              <label className="text-gray-700">First Name</label>
              <input
                type="text"
                className="border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="John..."
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-gray-70 ```jsx
              0">Last Name</label>
              <input
                type="text"
                className="border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Doe..."
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-gray-700">Phone Number</label>
              <input
                type="tel"
                className="border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+151265 413654"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-gray-700">Email</label>
              <input
                type="email"
                className="border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="example@example.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-gray-700">Message</label>
              <textarea
                className="border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUS;