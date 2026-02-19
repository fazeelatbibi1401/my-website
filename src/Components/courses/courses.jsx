import React from "react";
import { Link } from "react-router-dom";
import {
  FaBookOpen,
  FaQuran,
  FaChild,
  FaUserGraduate,
  FaLanguage,
  FaCalculator,
  FaCheckCircle,
} from "react-icons/fa";

const Courses = () => {
  return (
    <div className="w-full text-[#1D342E]">

      {/* ================= HERO HEADER (Reverse Triangle) ================= */}
      <section
        className="relative text-white py-28"
        style={{
          background: "linear-gradient(to right, #1D342E, #2f5f53)",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm mb-6">
            Structured • Flexible • Online
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Professional Courses
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-white/90">
            Carefully designed Quranic, Islamic, and Academic programs delivered
            by qualified teachers to help students grow spiritually and academically.
          </p>
        </div>
      </section>

      {/* ================= QURAN & ISLAMIC COURSES ================= */}
      <section className="py-24 bg-[#F9F7F1]">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-3">Quran & Islamic Studies</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn Quran with correct pronunciation, understanding, and Islamic values
              through structured and engaging courses.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {[
              {
                title: "Noorani Qaida",
                icon: <FaBookOpen />,
                desc: "Perfect starting point for beginners to build strong Quran reading foundations.",
                points: ["Arabic letters & sounds", "Pronunciation practice", "Reading confidence"],
              },
              {
                title: "Tajweed Course",
                icon: <FaQuran />,
                desc: "Learn to recite the Quran beautifully with proper Tajweed rules.",
                points: ["Makharij correction", "Rules of Tajweed", "Fluent recitation"],
              },
              {
                title: "Hifz-ul-Quran",
                icon: <FaUserGraduate />,
                desc: "A disciplined memorization program with daily lessons and revision plans.",
                points: ["One-on-one supervision", "Revision & retention", "Progress tracking"],
              },
              {
                title: "Islamic Studies",
                icon: <FaChild />,
                desc: "Understand Islam through Aqeedah, Seerah, and daily practices.",
                points: ["Beliefs & worship", "Seerah of Prophet ﷺ", "Islamic manners"],
              },
              {
                title: "Tarbiyah",
                icon: <FaBookOpen />,
                desc: "Character-building course focusing on Islamic ethics and moral values.",
                points: ["Akhlaq & manners", "Positive habits", "Real-life lessons"],
              },
              {
                title: "Masnoon Duas",
                icon: <FaQuran />,
                desc: "Memorize daily Duas with meanings and correct pronunciation.",
                points: ["Daily life Duas", "Meaning & understanding", "Correct recitation"],
              },
            ].map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200"
              >
                <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#1D342E]/10 text-[#1D342E] text-2xl mb-6">
                  {course.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-6">{course.desc}</p>

                <ul className="space-y-2 mb-6 text-left">
                  {course.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <FaCheckCircle className="text-darkGreen" />
                      {point}
                    </li>
                  ))}
                </ul>

                <Link to="/ContactUs">
                  <button className="w-full py-3 rounded-md border border-darkGreen text-darkGreen font-semibold hover:bg-darkGreen hover:text-white transition">
                    Enroll Now
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ACADEMIC SUBJECTS ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-3">Academic Subjects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Strengthen academic performance with concept-based learning guided by experienced tutors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Mathematics", icon: <FaCalculator />, desc: "Build strong mathematical concepts from basics to advanced levels." },
              { title: "English & Urdu", icon: <FaLanguage />, desc: "Improve reading, writing, grammar, and communication skills." },
              { title: "Science Subjects", icon: <FaUserGraduate />, desc: "Physics, Chemistry, and Biology with concept clarity." },
            ].map((subject, i) => (
              <div
                key={i}
                className="bg-[#F9F7F1] rounded-xl p-8 text-center hover:shadow-xl transition border hover:-translate-y-1"
              >
                <div className="text-3xl text-darkGreen mb-4 flex justify-center">
                  {subject.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3">{subject.title}</h3>
                <p className="text-gray-600 text-sm mb-6">{subject.desc}</p>

                <Link
                  to="/ContactUs"
                  className="text-darkGreen font-semibold hover:underline"
                >
                  Enroll Now →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-r from-[#1D342E] to-[#2f5f53] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Start Your Learning Journey Today
          </h2>
          <p className="mb-8 text-white/80">
            Book a free trial class and experience quality education from home.
          </p>

          <Link to="/BookTrial">
            <button className="bg-white text-darkGreen px-10 py-3 rounded-md font-semibold hover:bg-gray-200 transition">
              Book Free Trial
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Courses;
