import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Form = () => {
  const form = useRef();

  const [firstname, setfirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    let isValid = true;
    let errorMessages = {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      message: "",
    };

    // First Name Validation (Alphabetic, Minimum 2 characters)
    if (!firstname || !/^[A-Za-z]+$/.test(firstname)) {
      errorMessages.firstname =
        "First name should contain only letters and be at least 2 characters long.";
      isValid = false;
    }

    // Last Name Validation (Alphabetic, Minimum 2 characters)
    if (!lastname || !/^[A-Za-z]+$/.test(lastname)) {
      errorMessages.lastname =
        "Last name should contain only letters and be at least 2 characters long.";
      isValid = false;
    }

    // Phone Validation (Must be a 10-digit number)
    if (!phone || !/^\d{10}$/.test(phone)) {
      errorMessages.phone = "Phone number must be a 10-digit number.";
      isValid = false;
    }

    // Email Validation (Proper Email Format)
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      errorMessages.email = "Please enter a valid email address.";
      isValid = false;
    }

    // Message Validation (Non-Empty)
    if (!message) {
      errorMessages.message = "Please enter a message.";
      isValid = false;
    }

    setErrors(errorMessages);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (!window.confirm("Are you sure you want to submit the form?")) return;

    setLoading(true);

    const templateParams = {
      to_name: "techsouq technologies",
      from_firstname: firstname,
      from_lastname: lastname,
      from_email: email,
      message: message,
      from_phone: phone,
    };

    emailjs
      .send(
        "service_2rlj497",
        "template_z2t63po",
        templateParams,
        "HC4AJVmSAnk_sWBPF"
      )
      .then(
        (result) => {
          alert("Email sent successfully!");
          setfirstName("");
          setlastName("");
          setPhone("");
          setEmail("");
          setMessage("");
          console.log("Result: ", result);
        },
        (error) => {
          alert("Something went wrong, try again later.");
          console.log("Error: ", error);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div
      className="min-h-screen flex flex-col md:flex-row items-stretch gap-6 md:gap-12 px-4 md:px-10 lg:px-20"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center items-start pl-4 md:pl-20 py-10">
        <h1 className="text-4xl md:text-6xl font-semibold mb-4 leading-tight">
          Let’s Connect and <br />
          Bring Your Vision to Life!
        </h1>
        <p className="text-lg mb-6 max-w-2xl font-normal">
          Have questions, ideas, or a project in mind? We’re here to help! At
          Techsouq, we’re passionate about collaborating with businesses to
          create innovative digital solutions that drive success. Whether you’re
          looking for expert advice, a custom quote, or simply want to explore
          possibilities, our team is ready to assist you. Get in touch today,
          and let’s start building something extraordinary together!
        </p>
        <Link
          to="/contact"
          className="bg-gradient-to-r from-[#9384Ef] to-[#312EFE] font-semibold text-white px-8 py-3 rounded-md flex items-center gap-4 text-sm"
        >
          Contact Us Now
          <ArrowRight size={20} className="text-white" />
        </Link>
      </div>

      {/* Right Section - Form */}
      <div className="flex-1 flex items-center justify-center bg-white py-10">
        <form
          className="w-full max-w-2xl space-y-6"
          ref={form}
          onSubmit={handleSubmit}
        >
          <h2 className="text-5xl font-bold">Send Message</h2>
          <p className="text-lg mb-6 font-normal">
            Please fill out the form below. We will get back to you as soon as
            we can.
          </p>

          {/* First Row: First Name & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">First Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="First Name"
                value={firstname}
                onChange={(e) => setfirstName(e.target.value)}
                required
              />
              {errors.firstname && (
                <p className="text-red-500 text-sm">{errors.firstname}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Last Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Last Name"
                value={lastname}
                onChange={(e) => setlastName(e.target.value)}
                required
              />
              {errors.lastname && (
                <p className="text-red-500 text-sm">{errors.lastname}</p>
              )}
            </div>
          </div>

          {/* Second Row: Phone & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Your Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Third Row: Message */}
          <div>
            <label className="block text-gray-700 mb-1">Message</label>
            <textarea
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              rows="5"
              placeholder="Your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
