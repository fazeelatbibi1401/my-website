import React from "react";
import logo from "./Images/new logo.jpeg";
import img1 from "./Images/img1.jpeg";

const About = () => {
  return (
    <div className="bg-gray-50">

      {/* ===== HERO SECTION ===== */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
        <div className="flex justify-center">
  <img
    src={logo}
    alt="Academy Logo"
    className="w-24 h-24 rounded-full shadow-md mb-6"
  />
</div>



            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              About DAR-UL-TAJWEED & Academy Center
            </h1>

            <p className="mt-5 text-gray-600 text-lg leading-relaxed">
              We are committed to nurturing young minds with authentic Islamic
              education through structured, engaging, and live online classes
              designed especially for children.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src={img1}
              alt="Online Islamic Learning"
              className="w-full max-w-md rounded-xl shadow-lg object-cover"
            />
          </div>

        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14">

          {/* Mission */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to provide children with strong Quranic foundations,
              correct Islamic knowledge, and moral values in a safe, supportive,
              and interactive online learning environment.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We envision raising a confident generation of young Muslims who
              are spiritually grounded, ethically strong, and capable of
              practicing Islam with understanding in the modern world.
            </p>
          </div>

        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-14">
            Why Parents Trust DAR-UL-TAJWEED Academy
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "Qualified & Trained Teachers",
                text: "Experienced instructors specialized in teaching children with patience and care."
              },
              {
                title: "Structured Islamic Curriculum",
                text: "Carefully designed syllabus ensuring gradual and effective learning."
              },
              {
                title: "Live Interactive Classes",
                text: "Real-time engagement that keeps students focused and motivated."
              },
              {
                title: "One-to-One Sessions",
                text: "Customized learning sessions designed to match each child’s individual pace."
              },
              {
                title: "Worldwide Access",
                text: "Online classes available globally with flexible scheduling."
              },
              {
                title: "Parent Communication",
                text: "Regular feedback and progress updates for parents."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="p-7 border rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;
