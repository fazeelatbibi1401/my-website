import React, { useState, useEffect } from "react";
import {
  FaUserGraduate,
  FaClock,
  FaLaptop,
  FaBookOpen,
  FaChalkboardTeacher,
  FaHeadset,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import img1 from "./Images/img1.webp";
import img2 from "./Images/img5.jpeg";
import img3 from "./Images/img3.jpeg";
import img4 from "./Images/img4.jpeg";
import img6 from "./Images/img6.jpeg";
import img7 from "./Images/img7.jpeg";
import img8 from "./Images/img8.jpeg";

const Home = () => {
  const slides = [
    {
      image: img1,
      title: "Online Quran & Islamic Learning",
      subtitle:
        "Learn Quran, Tajweed, and Islamic Studies from qualified teachers at home.",
      button1: "Book Free Trial",
      button2: "View Courses",
    },
    {
      image: img2,
      title: "Tajweed Mastery",
      subtitle:
        "Perfect your Quran recitation with proper Tajweed rules and fluency.",
      button1: "Join Tajweed",
      button2: "See Courses",
    },
    {
      image: img3,
      title: "Memorize Hifz-ul-Quran",
      subtitle:
        "Structured Hifz program with daily lessons, revision, and tracking.",
      button1: "Start Hifz",
      button2: "View Program",
    },
    {
      image: img4,
      title: "Kids & Adults Classes",
      subtitle:
        "Personalized Quran learning programs for all age groups worldwide.",
      button1: "Book Trial",
      button2: "View Courses",
    },
    {
      image: img6,
      title: "One-to-One Learning",
      subtitle:
        "Dedicated teachers for focused and personalized online Quran sessions.",
      button1: "Start Now",
      button2: "Learn More",
    },
    {
      image: img7,
      title: "Flexible Learning Time",
      subtitle:
        "Choose class timings that fit your daily schedule anywhere in the world.",
      button1: "Join Today",
      button2: "View Programs",
    },
    {
      image: img8,
      title: "Certified Teachers",
      subtitle:
        "Learn from highly qualified and experienced Quran instructors.",
      button1: "Meet Teachers",
      button2: "View Courses",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="w-full text-[#1D342E]">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full flex items-center justify-center text-center overflow-hidden py-32 md:py-40 bg-black">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full 
            object-contain md:object-cover bg-black 
            transition-opacity duration-1000 
            ${index === current ? "opacity-80 z-10" : "opacity-0 z-0"}`}
          />
        ))}

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-20"></div>

        {/* Content */}
        <div className="relative z-30 max-w-3xl px-4 flex flex-col items-center gap-6 text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            {slides[current].title}
          </h1>
          <p className="text-base md:text-lg lg:text-xl">
            {slides[current].subtitle}
          </p>
          <div className="flex gap-4 mt-4 flex-wrap justify-center">
            <Link to="/BookTrial">
              <button className="bg-darkGreen text-white px-6 md:px-8 py-2 md:py-3 rounded-md hover:bg-[#16302a] transition">
                {slides[current].button1}
              </button>
            </Link>
            <Link
              to="/Courses"
              className="border border-white px-6 md:px-8 py-2 md:py-3 rounded-md hover:bg-white hover:text-darkGreen transition"
            >
              {slides[current].button2}
            </Link>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-[#F9F7F1] py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">
            Why Choose DAR-UL-TAJWEED Academy?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <FaUserGraduate className="text-3xl mx-auto mb-4 text-darkGreen" />
              <h3 className="font-semibold mb-2">Qualified Teachers</h3>
              <p className="text-sm text-gray-600">
                Experienced & certified instructors.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <FaClock className="text-3xl mx-auto mb-4 text-darkGreen" />
              <h3 className="font-semibold mb-2">Flexible Timings</h3>
              <p className="text-sm text-gray-600">
                Classes that fit your schedule.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <FaLaptop className="text-3xl mx-auto mb-4 text-darkGreen" />
              <h3 className="font-semibold mb-2">Online Classes</h3>
              <p className="text-sm text-gray-600">
                Learn from anywhere in the world.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <FaBookOpen className="text-3xl mx-auto mb-4 text-darkGreen" />
              <h3 className="font-semibold mb-2">Kids & Adults</h3>
              <p className="text-sm text-gray-600">
                Courses for all age groups.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <FaChalkboardTeacher className="text-3xl mx-auto mb-4 text-darkGreen" />
              <h3 className="font-semibold mb-2">One-to-One Classes</h3>
              <p className="text-sm text-gray-600">
                Personal attention with one teacher per student.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <FaHeadset className="text-3xl mx-auto mb-4 text-darkGreen" />
              <h3 className="font-semibold mb-2">24/7 Service</h3>
              <p className="text-sm text-gray-600">
                Support available anytime for queries and help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COURSES OVERVIEW ================= */}
      <section className="py-20 bg-[#1D342E]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#E8D794]">
            Our Popular Courses
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Noorani Qaida",
                desc: "Basic Quran reading with correct pronunciation",
              },
              {
                title: "Tajweed Course",
                desc: "Learn Quran with proper Tajweed rules",
              },
              {
                title: "Islamic Studies",
                desc: "Faith, manners & Islamic knowledge",
              },
            ].map((course) => (
              <div
                key={course.title}
                className="bg-[#E8D794] rounded-xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
              >
                <h3 className="font-semibold text-lg mb-3 text-[#1D342E]">
                  {course.title}
                </h3>
                <p className="text-sm text-[#1D342E] mb-4">
                  {course.desc}
                </p>
                <Link to="/Courses">
                  <button className="border border-[#1D342E] text-[#1D342E] font-semibold px-4 py-2 rounded hover:bg-[#1D342E] hover:text-[#E8D794] transition">
                    Learn More →
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="bg-[#F9F7F1] py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <div className="text-4xl font-bold text-darkGreen mb-4">
                01
              </div>
              <h3 className="font-semibold mb-2">Register</h3>
              <p className="text-sm text-gray-600">
                Fill out a simple registration form.
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-darkGreen mb-4">
                02
              </div>
              <h3 className="font-semibold mb-2">
                Free Trial Class
              </h3>
              <p className="text-sm text-gray-600">
                Attend a free trial with our teacher.
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-darkGreen mb-4">
                03
              </div>
              <h3 className="font-semibold mb-2">
                Start Learning
              </h3>
              <p className="text-sm text-gray-600">
                Begin your regular online classes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">
            What Parents Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border rounded-lg">
              <p className="text-gray-600 mb-4">
                “My child’s Quran reading improved a lot. Teachers are very kind and professional.”
              </p>
              <h4 className="font-semibold">— Parent, UK</h4>
            </div>
            <div className="p-6 border rounded-lg">
              <p className="text-gray-600 mb-4">
                “Excellent academy with flexible timings and great teachers.”
              </p>
              <h4 className="font-semibold">— Parent, USA</h4>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-darkGreen text-white py-16 border-white/10 border-b">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Start Your Learning Journey Today
          </h2>
          <p className="mb-8 text-white/80">
            Book a free trial class and experience quality education.
          </p>
          <Link
            to="/BookTrial"
            className="bg-white text-darkGreen px-8 py-3 rounded-md font-semibold hover:bg-gray-200 transition inline-block"
          >
            Book Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
