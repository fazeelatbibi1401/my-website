import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./Images/new logo.jpeg";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="w-full shadow-md"
      style={{ backgroundColor: "rgb(232, 215, 148)" }}
    >
      <div className="max-w-7xl mx-auto px-4 h-[90px] flex items-center justify-between">

        {/* ===== Logo Section ===== */}
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="Logo"
            className="w-20 h-20 rounded-full object-contain bg-white shadow-lg"
          />
          <div>
            <h1 className="text-2xl font-bold text-darkGreen leading-none">
            DAR-UL-TAJWEED
            </h1>
            <p className="text-sm text-gray-700">
              Quran & Knowledge Academy
            </p>
          </div>
        </div>

        {/* ===== Desktop Menu ===== */}
        <ul className="hidden md:flex items-center gap-8 text-[17px] font-semibold text-[#1D342E]">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/courses" className="hover:underline">Courses</Link></li>
          <li><Link to="/HowToRegister" className="hover:underline">How to Register</Link></li>
          <li><Link to="/Fee" className="hover:underline">Fee</Link></li>
          <li><Link to="/About" className="hover:underline">About Us</Link></li>
          <li><Link to="/ContactUs" className="hover:underline">Contact Us</Link></li>
        </ul>

        {/* ===== Enroll Button (Desktop) ===== */}
        <div className="hidden md:block">
          <Link
            to="/ContactUs"
            className="px-6 py-2 bg-darkGreen text-white rounded-md border border-darkGreen hover:bg-white hover:text-black transition"
          >
            Enroll Now
          </Link>
        </div>

        {/* ===== Mobile Menu Button ===== */}
        <div className="md:hidden text-2xl text-darkGreen">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* ===== Mobile Menu ===== */}
      {menuOpen && (
        <div className="md:hidden bg-[#E8D794] px-6 pb-4">
          <ul className="flex flex-col gap-4 text-lg font-semibold text-[#1D342E]">
            <li><Link onClick={() => setMenuOpen(false)} to="/">Home</Link></li>
            <li><Link onClick={() => setMenuOpen(false)} to="/courses">Courses</Link></li>
            <li><Link onClick={() => setMenuOpen(false)} to="/HowToRegister">How to Register</Link></li>
            <li><Link onClick={() => setMenuOpen(false)} to="/Fee">Fee</Link></li>
            <li><Link onClick={() => setMenuOpen(false)} to="/About">About Us</Link></li>
            <li><Link onClick={() => setMenuOpen(false)} to="/ContactUs">Contact Us</Link></li>
            <li>
              <Link
                to="/ContactUs"
                className="block text-center bg-darkGreen text-white py-2 rounded-md"
              >
                Enroll Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
