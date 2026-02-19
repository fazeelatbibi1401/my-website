import React from "react";

const plans = [
  {
    name: "Basic",
    price: "10£",
    features: [
      "1 Live Class Per Week",
      "Personal Learning Plan",
      "Qualified Qur’an Tutor",
      "Flexible Class Timing",
      "Monthly Progress Report",
    ],
  },
  {
    name: "Standard",
    price: "15£",
    features: [
      "2 Live Classes Per Week",
      "One-to-One Sessions",
      "Certified Islamic Teacher",
      "Class Recordings Available",
      "Parent Feedback Support",
    ],
  },
  {
    name: "Plus",
    price: "20£",
    features: [
      "3 Live Classes Per Week",
      "Individual Attention",
      "Tajweed & Pronunciation Focus",
      "Recorded Lessons Access",
      "Dedicated Student Support",
    ],
  },
  {
    name: "Premium",
    price: "25£",
    features: [
      "4 Live Classes Per Week",
      "Ijazah Holder Instructors",
      "Advanced Tajweed Training",
      "Weekly Performance Review",
      "Priority Class Scheduling",
    ],
  },
  {
    name: "VIP",
    price: "30£",
    features: [
      "5 Live Classes Per Week",
      "Senior Certified Scholars",
      "Customized Learning Path",
      "Full Session Recordings",
      "24/7 Student Assistance",
    ],
  },
];

const whatsappLink =
  "https://wa.me/923338705868?text=Assalamu Alaikum, I would like to start a free trial.";

const Fee = () => {
  return (
    <section className="relative overflow-hidden bg-[#141414] py-24 text-white">
      
      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,#d4a853_1px,transparent_1px)] [background-size:40px_40px]" />

      {/* Header */}
      <div className="relative z-10 text-center mb-20 px-4">
        <h2 className="text-4xl font-bold mb-4">
          Fee | Pricing | Packages
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Quran for Kids, Islamic Studies, Noorani Qaida, Arabic Speaking,
          Quran Memorization & Tajweed Courses
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="relative z-10 max-w-7xl mx-auto grid gap-8 px-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="group bg-white text-gray-800 rounded-xl p-6 flex flex-col 
            shadow-lg transition-all duration-500 
            hover:-translate-y-4 hover:shadow-[0_0_35px_rgba(212,168,83,0.6)]"
          >
            <h3 className="text-lg font-semibold text-gray-600">
              {plan.name}
            </h3>

            <div className="my-4">
              <span className="text-3xl font-bold text-gray-900">
                {plan.price}
              </span>
              <span className="text-sm text-gray-500"> / Month</span>
            </div>

            {/* WhatsApp Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#d4a853] text-white py-2 rounded-md mb-6 
              text-center font-medium transition-all duration-300
              hover:bg-[#c59645] hover:scale-105"
            >
              Start Trial
            </a>

            <ul className="space-y-3 text-sm">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#d4a853] mt-1">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Glow Border on Hover */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 border border-[#d4a853]/40 pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Fee;
