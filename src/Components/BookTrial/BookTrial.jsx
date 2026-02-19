import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "./Images/new logo.jpeg";

const BookTrial = () => {
  const [name, setName] = useState("");
  const [countryCode, setCountryCode] = useState("+92");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const courses = [
    "Noorani Qaida",
    "Tajweed Course",
    "Hifz-ul-Quran",
    "Islamic Studies",
    "Academic Subjects",
  ];

  const countries = [
    { name: "Pakistan", code: "+92" },
    { name: "Saudi Arabia", code: "+966" },
    { name: "UAE", code: "+971" },
    { name: "UK", code: "+44" },
    { name: "USA", code: "+1" },
    { name: "Canada", code: "+1" },
    { name: "Australia", code: "+61" },
  ];

  // ✅ Letters & spaces only
  const handleNameChange = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setName(value);
    }
  };

  // ✅ Numbers only (NO formatting, NO limit while typing)
  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setPhone(value);
      setPhoneError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Validate exactly 11 digits
    if (phone.length !== 11) {
      setPhoneError("WhatsApp number must be exactly 11 digits.");
      return;
    }

    const fullNumber = `${countryCode}${phone.replace(/^0/, "")}`;

    const message = `Hello, my name is ${name}. I want to book a 3-day free trial class for the ${course} course.`;

    const whatsappURL = `https://wa.me/923338705868?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="w-full min-h-screen bg-white flex flex-col">

      {/* ===== HEADER ===== */}
      <header className="py-10 flex flex-col items-center text-center px-4">
        <img
          src={logo}
          alt="Al-Bayan Academy"
          className="w-28 h-28 rounded-full shadow-md mb-4"
        />
        <h1 className="text-3xl md:text-4xl font-bold text-[#1D342E]">
          Book Your 3-Day Free Trial Class
        </h1>

        <p className="mt-3 max-w-2xl text-gray-600 text-lg">
          Experience our structured and engaging online classes for
          <span className="font-semibold text-[#1D342E]">
            {" "}3 days absolutely free.
          </span>
          {" "}Fill in the form below and our team will contact you on WhatsApp.
        </p>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <main className="flex-1 flex items-center justify-center px-4 py-14">
        <div className="w-full max-w-4xl grid md:grid-cols-2 gap-12 items-center">

          {/* Left Info */}
          <div>
            <h2 className="text-2xl font-semibold text-[#1D342E] mb-4">
              Why Book a 3-Day Free Trial?
            </h2>
            <ul className="space-y-3 text-gray-600 leading-relaxed">
              <li>✔ Meet our qualified teachers</li>
              <li>✔ Understand our teaching approach</li>
              <li>✔ Assess your child’s learning level</li>
              <li>✔ 3 days completely free, no obligation</li>
            </ul>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#E8D794] rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-[#1D342E] mb-6 text-center">
              Registration Form
            </h3>

            {/* Name */}
            <div className="mb-4">
              <label className="block text-[#1D342E] font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-md border border-[#1D342E]/40 focus:outline-none focus:ring-2 focus:ring-[#1D342E]"
                value={name}
                onChange={handleNameChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            {/* Country */}
            <div className="mb-4">
              <label className="block text-[#1D342E] font-medium mb-1">
                Select Country
              </label>
              <select
                className="w-full p-3 rounded-md border border-[#1D342E]/40 focus:outline-none focus:ring-2 focus:ring-[#1D342E]"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                required
              >
                {countries.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.name} ({c.code})
                  </option>
                ))}
              </select>
            </div>

            {/* WhatsApp Number */}
            <div className="mb-4">
              <label className="block text-[#1D342E] font-medium mb-1">
                WhatsApp Number (11 digits only)
              </label>

              <div className="flex">
                <span className="px-4 flex items-center bg-white border border-r-0 border-[#1D342E]/40 rounded-l-md text-[#1D342E] font-medium">
                  {countryCode}
                </span>

                <input
                  type="tel"
                  className="w-full p-3 rounded-r-md border border-[#1D342E]/40 focus:outline-none focus:ring-2 focus:ring-[#1D342E]"
                  value={phone}
                  onChange={handlePhoneChange}
                  required
                  placeholder="03001234567"
                />
              </div>

              {phoneError && (
                <p className="text-red-600 text-sm mt-1">{phoneError}</p>
              )}
            </div>

            {/* Course */}
            <div className="mb-6">
              <label className="block text-[#1D342E] font-medium mb-1">
                Select Course
              </label>
              <select
                className="w-full p-3 rounded-md border border-[#1D342E]/40 focus:outline-none focus:ring-2 focus:ring-[#1D342E]"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                required
              >
                <option value="">Choose a course</option>
                {courses.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#1D342E] hover:bg-[#16302a] transition text-white font-semibold py-3 rounded-md"
            >
              <FaWhatsapp className="text-xl" />
              Book 3-Day Free Trial via WhatsApp
            </button>
          </form>

        </div>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} DAR-UL-TAJWEED Quran & Knowledge Academy. All rights reserved.
      </footer>

    </div>
  );
};

export default BookTrial;
