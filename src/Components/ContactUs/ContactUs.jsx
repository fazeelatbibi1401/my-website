import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "./Images/new logo.jpeg"; // Add your academy logo here

const ContactUs = () => {
  const whatsappNumber = "923338705868";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">

      {/* ===== HERO ===== */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Academy Logo */}
          <img
            src={logo}
            alt="Al-Bayan Academy"
            className="w-28 h-28 rounded-full shadow-md mx-auto mb-6"
          />

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Contact Us
          </h1>
          <p className="mt-2 text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions about our courses or enrollment? Our friendly team
            is ready to help you directly on WhatsApp.
          </p>
        </div>
      </section>

      {/* ===== WhatsApp Contact Card ===== */}
      <section className="py-14 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-10 text-center hover:shadow-xl transition">
          <FaWhatsapp className="text-green-600 text-7xl mx-auto mb-6" />

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Chat With Us on WhatsApp
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            For quick responses, class details, or enrollment guidance, reach
            us directly on WhatsApp. Our support team is available to assist
            parents and students worldwide.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 mt-4 px-8 py-4 bg-green-600 text-white rounded-lg text-lg font-medium hover:bg-green-700 transition shadow-md"
          >
            <FaWhatsapp className="text-2xl" />
            Chat on WhatsApp
          </a>

          <p className="mt-6 text-gray-500 text-sm">
            WhatsApp Number: <span className="font-medium">+92 333 8705868</span>
          </p>
        </div>
      </section>

      {/* ===== Additional Info ===== */}
      <section className="py-10 px-6">
        <div className="max-w-4xl mx-auto text-center text-gray-600 space-y-3">
          <p>
            📚 All classes are conducted <strong>online</strong>
          </p>
          <p>🌍 Serving students worldwide</p>
          <p>🕘 Support Hours: 9:00 AM – 9:00 PM (Local Time)</p>
        </div>
      </section>

      
    </div>
  );
};

export default ContactUs;
