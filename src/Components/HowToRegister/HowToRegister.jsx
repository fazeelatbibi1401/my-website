import React from "react";
import { FaWhatsapp, FaCheckCircle, FaUserPlus, FaFileAlt, FaCalendarCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
const HowToRegister = () => {
  return (
    <div className="w-full text-[#1D342E]">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-r from-[#1D342E] to-[#2f5f53] text-white py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How to Register
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/90">
            Follow these simple steps to enroll in Al-Bayan Academy courses. 
            Registration is quick, easy, and directly through WhatsApp.
          </p>
          <a
            href="https://wa.me/923338705868"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md font-semibold transition"
          >
            <FaWhatsapp className="text-xl" /> Enroll Now on WhatsApp
          </a>
        </div>
      </section>

      {/* ================= REGISTRATION STEPS ================= */}
      <section className="py-24 bg-[#F9F7F1]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Simple Steps to Register
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-xl shadow hover:shadow-2xl transition text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#1D342E]/10 text-[#1D342E] text-3xl mx-auto mb-4">
                <FaUserPlus />
              </div>
              <h3 className="text-xl font-semibold mb-2">Step 1: Contact Us</h3>
              <p className="text-gray-600 text-sm">
                Click the WhatsApp button above to start your registration conversation.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-xl shadow hover:shadow-2xl transition text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#1D342E]/10 text-[#1D342E] text-3xl mx-auto mb-4">
                <FaFileAlt />
              </div>
              <h3 className="text-xl font-semibold mb-2">Step 2: Share Details</h3>
              <p className="text-gray-600 text-sm">
                Provide your name, age, course choice, and any other necessary information.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-xl shadow hover:shadow-2xl transition text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#1D342E]/10 text-[#1D342E] text-3xl mx-auto mb-4">
                <FaCalendarCheck />
              </div>
              <h3 className="text-xl font-semibold mb-2">Step 3: Schedule & Confirm</h3>
              <p className="text-gray-600 text-sm">
                Confirm your course schedule and make the deposit if required. You're all set!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Why Register With Us
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-[#F9F7F1] p-8 rounded-xl shadow hover:shadow-xl transition text-center">
              <FaCheckCircle className="text-4xl text-darkGreen mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Expert Teachers</h3>
              <p className="text-sm text-gray-600">Learn from certified and experienced instructors.</p>
            </div>

            <div className="bg-[#F9F7F1] p-8 rounded-xl shadow hover:shadow-xl transition text-center">
              <FaCheckCircle className="text-4xl text-darkGreen mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Flexible Timings</h3>
              <p className="text-sm text-gray-600">Classes that fit your busy schedule.</p>
            </div>

            <div className="bg-[#F9F7F1] p-8 rounded-xl shadow hover:shadow-xl transition text-center">
              <FaCheckCircle className="text-4xl text-darkGreen mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Online Classes</h3>
              <p className="text-sm text-gray-600">Learn from home with ease and safety.</p>
            </div>

            <div className="bg-[#F9F7F1] p-8 rounded-xl shadow hover:shadow-xl transition text-center">
              <FaCheckCircle className="text-4xl text-darkGreen mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Immediate Enrollment</h3>
              <p className="text-sm text-gray-600">Start your learning journey instantly via WhatsApp.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      {/* <section className="bg-darkGreen text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-white/80 mb-8">
            Click the button below to register and book your first session instantly.
          </p>
          <a
            href="https://wa.me/923338705868"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-10 py-3 rounded-md font-semibold transition"
          >
            <FaWhatsapp className="text-xl" /> Enroll Now on WhatsApp
          </a>
        </div>
      </section> */}

    </div>
  );
};

export default HowToRegister;
