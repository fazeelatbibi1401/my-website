import React from "react";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from "./Images/new logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-[#1D342E] text-[#E8D794]">

      {/* ===== Main Footer Content ===== */}
      <div className="max-w-7xl mx-auto px-6 py-12 text-center flex flex-col items-center">

        {/* Logo */}
        <img
          src={logo}
          alt="Al-Bayan Academy Logo"
          className="w-20 h-20 rounded-full bg-white p-2 shadow-md mb-4"
        />

        {/* Brand Name */}
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
          DAR-UL-TAJWEED & Academy Center
        </h3>

        <p className="text-sm md:text-base text-[#E8D794]/80 max-w-xl mb-6">
          Professional online Quranic, Islamic, and academic education for students worldwide.
          You may contact us directly on WhatsApp for enrollment and guidance.
        </p>

        {/* WhatsApp Button */}
        <div className="mb-8">
          <a
            href="https://wa.me/923338705868"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#1ebe57] transition"
          >
            <FaWhatsapp className="text-xl" />
            Chat on WhatsApp
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-6 text-white text-xl">

          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/17nSuir6HG/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E8D794] transition"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/yusraislamicschool?igsh=MW12NGpma3I4MHBqdA=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E8D794] transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

        </div>

      </div>

      {/* ===== Bottom Bar ===== */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-[#E8D794]/60">
        © {new Date().getFullYear()} DAR-UL-TAJWEED Academy. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
