import React from "react";

const AboutVivekananda: React.FC = () => {
  return (
    <section className="w-full bg-white text-slate-800 rosmie-regular">
      {/* ================= HERO - MINIMALIST ================= */}
      <div className="relative pt-32 pb-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          {/* Small Badge */}
          <div className="inline-block mb-6">
            <span className="px-4 py-1.5 text-xs font-semibold tracking-wider uppercase bg-orange-100 text-orange-700 rounded-full">
              About Us
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl rosmie-bold text-slate-900 mb-6 tracking-tight">
            Vivekananda School
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Education with values, knowledge with character
          </p>

          {/* Decorative Line */}
          <div className="mt-12 flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-orange-400"></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-orange-400"></div>
          </div>
        </div>
      </div>

      {/* ================= OUR STORY - TWO COLUMN ================= */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-orange-100 to-amber-100 rounded-3xl opacity-50 blur-2xl"></div>
            <img
              src="/images/school-campus.jpg"
              alt="Vivekananda School Campus"
              className="relative rounded-2xl shadow-xl w-full h-[500px] object-cover"
            />
          </div>

          {/* Content Side */}
          <div>
            <span className="text-sm font-semibold tracking-wider uppercase text-orange-600 mb-4 block">
              Our Legacy
            </span>
            <h2 className="text-4xl md:text-5xl rosmie-bold text-slate-900 mb-6 leading-tight">
              Building futures since inception
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
              <p>
                Vivekananda School was founded with a clear and powerful vision:
                to create future-ready students rooted in strong moral values.
                Inspired by the teachings of Swami Vivekananda, we believe true
                education transcends textbooks.
              </p>
              <p>
                Since our establishment, we have been a nurturing ground for
                young minds, helping students grow intellectually, emotionally,
                socially, and ethically. Every child here is encouraged to
                discover their potential and purpose.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= VISION & MISSION - SPLIT SECTION ================= */}
      <div className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-100 rounded-2xl mb-6">
                <svg
                  className="w-7 h-7 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl rosmie-bold text-slate-900 mb-4">
                Our Vision
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                To nurture confident, compassionate individuals who lead with
                integrity and contribute meaningfully to society.
              </p>
              <ul className="space-y-3">
                {[
                  "Encourage critical thinking",
                  "Instill discipline & integrity",
                  "Prepare for global challenges",
                  "Nurture lifelong learners",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-orange-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-2xl mb-6">
                <svg
                  className="w-7 h-7 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl rosmie-bold text-slate-900 mb-4">
                Our Mission
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                To provide holistic education through strong academics,
                innovation, well-being, and an inspiring environment.
              </p>
              <ul className="space-y-3">
                {[
                  "Strong academic foundations",
                  "Encourage curiosity",
                  "Physical & emotional well-being",
                  "Safe, inclusive environment",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ================= ACADEMIC EXCELLENCE ================= */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Content First */}
          <div>
            <span className="text-sm font-semibold tracking-wider uppercase text-orange-600 mb-4 block">
              Excellence in Education
            </span>
            <h2 className="text-4xl md:text-5xl rosmie-bold text-slate-900 mb-6 leading-tight">
              Academic programs that inspire
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg mb-8">
              Our curriculum is designed to challenge minds while nurturing
              creativity. With experienced faculty and modern teaching methods,
              we ensure every student reaches their full potential.
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "Expert Faculty",
                  desc: "Qualified teachers with deep subject knowledge",
                },
                {
                  title: "Student-Centric Approach",
                  desc: "Personalized attention for every learner",
                },
                {
                  title: "Modern Infrastructure",
                  desc: "Smart classrooms and digital resources",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative order-first md:order-last">
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl opacity-50 blur-2xl"></div>
            <img
              src="/images/classroom.jpg"
              alt="Classroom Teaching"
              className="relative rounded-2xl shadow-xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* ================= HOLISTIC DEVELOPMENT - GRID ================= */}
      <div className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-wider uppercase text-orange-600 mb-4 block">
              Beyond Academics
            </span>
            <h2 className="text-4xl md:text-5xl rosmie-bold text-slate-900 mb-4">
              Holistic Development
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We nurture well-rounded individuals through diverse co-curricular
              activities
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "⚽",
                title: "Sports & Fitness",
                color: "bg-green-50 text-green-600",
              },
              {
                icon: "🧘",
                title: "Yoga & Meditation",
                color: "bg-purple-50 text-purple-600",
              },
              {
                icon: "🎨",
                title: "Arts & Music",
                color: "bg-pink-50 text-pink-600",
              },
              {
                icon: "🔬",
                title: "Science Competitions",
                color: "bg-blue-50 text-blue-600",
              },
              {
                icon: "🤝",
                title: "Community Service",
                color: "bg-amber-50 text-amber-600",
              },
              {
                icon: "💡",
                title: "Leadership Programs",
                color: "bg-indigo-50 text-indigo-600",
              },
            ].map((activity, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 ${activity.color} rounded-2xl mb-4 text-3xl group-hover:scale-110 transition-transform`}
                >
                  {activity.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {activity.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= CORE VALUES - MINIMALIST PILLS ================= */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-wider uppercase text-orange-600 mb-4 block">
            Our Foundation
          </span>
          <h2 className="text-4xl md:text-5xl rosmie-bold text-slate-900 mb-4">
            Values We Cherish
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Character building through timeless principles
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {[
            "Truth & Integrity",
            "Respect & Empathy",
            "Self-Discipline",
            "Service to Society",
            "Unity in Diversity",
            "Excellence",
            "Compassion",
            "Responsibility",
          ].map((value, idx) => (
            <div
              key={idx}
              className="px-6 py-3 bg-white border-2 border-slate-200 rounded-full text-slate-700 font-medium hover:border-orange-500 hover:text-orange-600 transition-all duration-300 hover:shadow-md"
            >
              {value}
            </div>
          ))}
        </div>
      </div>

      {/* ================= SAFE ENVIRONMENT - FEATURE HIGHLIGHT ================= */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 py-24 relative overflow-hidden">
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-8">
            <svg
              className="w-10 h-10 text-orange-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>

          <h2 className="text-4xl md:text-5xl rosmie-bold text-white mb-6">
            Safe & Supportive Environment
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Every child feels valued in our secure and caring atmosphere.
            Teachers act as mentors, parents are partners in progress, and
            students' emotional and mental well-being is always prioritized.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {[
              "24/7 Security",
              "CCTV Monitored",
              "Trained Staff",
              "Counseling Support",
            ].map((feature, idx) => (
              <div
                key={idx}
                className="px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= PARENT PARTNERSHIP ================= */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-12 md:p-16 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-2xl mb-6">
            <svg
              className="w-8 h-8 text-orange-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </div>

          <h2 className="text-3xl md:text-4xl rosmie-bold text-slate-900 mb-4">
            Our Commitment to Parents
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Education is a collaborative journey. Through transparent
            communication, regular progress reviews, and community involvement,
            we work together as one educational family to ensure every child
            thrives.
          </p>
        </div>
      </div>

      {/* ================= CLOSING STATEMENT ================= */}
      <div className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Decorative Element */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-orange-400"></div>
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-orange-400"></div>
          </div>

          <h2 className="text-3xl md:text-4xl rosmie-bold text-slate-900 mb-6 leading-tight">
            Shaping Minds. Building Character.
            <br />
            Creating the Future.
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Vivekananda School is more than an institution—it is a foundation
            for lifelong success and meaningful contribution to the world.
          </p>

          {/* CTA */}
          <div className="mt-12">
            <button className="px-10 py-4 bg-orange-600 text-white rosmie-bold rounded-full hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Join Our Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVivekananda;