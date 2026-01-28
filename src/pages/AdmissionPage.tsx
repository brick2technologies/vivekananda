import React, { useState } from "react";

const AdmissionVivekananda: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="w-full bg-white text-slate-800 rosmie-regular">
      {/* ================= HERO - CLEAN & MINIMAL ================= */}
      <div className="relative pt-32 pb-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 px-4 py-1.5 bg-green-100 text-green-700 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-semibold tracking-wider uppercase">
                Academic Year 2026-27 • Now Open
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl rosmie-bold text-slate-900 mb-6 tracking-tight leading-tight">
            Admissions Open
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Shape your child's bright future with value-based education and
            holistic development
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="px-10 py-4 bg-orange-600 text-white rosmie-bold rounded-full hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Apply for Admission
            </button>
            
          </div>

          {/* Stats - Clean Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "25+", label: "Years of Excellence" },
              { number: "2000+", label: "Happy Students" },
              { number: "98%", label: "Success Rate" },
              { number: "50+", label: "Expert Faculty" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl rosmie-bold text-orange-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-600 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Decorative Line */}
          <div className="mt-16 flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-orange-400"></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-orange-400"></div>
          </div>
        </div>
      </div>

      {/* ================= WHY CHOOSE US - CLEAN GRID ================= */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-wider uppercase text-orange-600 mb-4 block">
            Our Excellence
          </span>
          <h2 className="text-4xl md:text-5xl rosmie-bold text-slate-900 mb-4">
            Why Choose Vivekananda?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A legacy of holistic education that transforms young minds into
            confident, compassionate leaders
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              ),
              title: "Value-Based Education",
              desc: "Rooted in Swami Vivekananda's philosophy with moral values and academic excellence.",
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              ),
              title: "Expert Faculty",
              desc: "Highly qualified educators committed to personalized attention and student success.",
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              ),
              title: "Holistic Development",
              desc: "Balance of academics, sports, arts, and life skills for comprehensive growth.",
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              ),
              title: "Modern Infrastructure",
              desc: "Smart classrooms, labs, and sports facilities for enhanced learning experience.",
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              title: "Safe & Nurturing",
              desc: "Secure campus with trained security, creating a protected learning environment.",
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ),
              title: "Parent Partnership",
              desc: "Regular communication and transparent progress tracking for collaborative growth.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="group p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-orange-200 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl rosmie-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= CLASSES OFFERED ================= */}
      <div className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-wider uppercase text-orange-600 mb-4 block">
              Academic Programs
            </span>
            <h2 className="text-4xl md:text-5xl rosmie-bold text-slate-900 mb-4">
              Classes We Offer
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive education from foundation to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                level: "Pre-Primary",
                classes: "LKG & UKG",
                age: "3-5 years",
                color: "bg-pink-50 border-pink-200",
                iconBg: "bg-pink-100",
                iconText: "text-pink-600",
              },
              {
                level: "Primary",
                classes: "I - V",
                age: "6-10 years",
                color: "bg-blue-50 border-blue-200",
                iconBg: "bg-blue-100",
                iconText: "text-blue-600",
              },
              {
                level: "Middle School",
                classes: "VI - VIII",
                age: "11-13 years",
                color: "bg-purple-50 border-purple-200",
                iconBg: "bg-purple-100",
                iconText: "text-purple-600",
              },
              {
                level: "High School",
                classes: "IX - X",
                age: "14-16 years",
                color: "bg-orange-50 border-orange-200",
                iconBg: "bg-orange-100",
                iconText: "text-orange-600",
              },
            ].map((grade, idx) => (
              <div
                key={idx}
                className={`${grade.color} rounded-2xl p-8 border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 ${grade.iconBg} ${grade.iconText} rounded-xl mb-4 text-2xl font-bold`}>
                  {idx + 1}
                </div>
                <h3 className="text-2xl rosmie-bold text-slate-900 mb-2">
                  {grade.level}
                </h3>
                <div className="inline-block px-3 py-1 bg-white rounded-full mb-3 border border-slate-200">
                  <span className="text-sm font-semibold text-slate-700">
                    Classes {grade.classes}
                  </span>
                </div>
                <p className="text-sm text-slate-600">{grade.age}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= ADMISSION PROCESS ================= */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-wider uppercase text-orange-600 mb-4 block">
            Simple & Quick
          </span>
          <h2 className="text-4xl md:text-5xl rosmie-bold text-slate-900 mb-4">
            Admission Process
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Four easy steps to begin your child's educational journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Enquiry & Visit",
              desc: "Schedule a campus tour or connect with our admissions team.",
            },
            {
              step: "02",
              title: "Application",
              desc: "Complete the admission form with required details.",
            },
            {
              step: "03",
              title: "Assessment",
              desc: "Friendly interaction to understand your child's strengths.",
            },
            {
              step: "04",
              title: "Confirmation",
              desc: "Document verification and official admission confirmation.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setActiveStep(idx)}
              onMouseLeave={() => setActiveStep(null)}
              className={`relative p-8 bg-white rounded-2xl border-2 transition-all duration-300 ${
                activeStep === idx
                  ? "border-orange-500 shadow-xl scale-105"
                  : "border-slate-100 shadow-sm"
              }`}
            >
              <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center rosmie-bold text-lg mb-6">
                {item.step}
              </div>
              <h3 className="text-xl rosmie-bold text-slate-900 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= REQUIRED DOCUMENTS ================= */}
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-wider uppercase text-orange-600 mb-4 block">
              Documentation
            </span>
            <h2 className="text-4xl md:text-5xl rosmie-bold text-slate-900 mb-4">
              Required Documents
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Please prepare these documents for a smooth admission process
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { doc: "Birth Certificate", detail: "Original + 2 copies" },
              { doc: "Transfer Certificate", detail: "From previous school" },
              { doc: "Academic Records", detail: "Latest report card" },
              { doc: "Aadhar Card", detail: "Student & both parents" },
              { doc: "Photographs", detail: "4 passport size photos" },
              { doc: "Address Proof", detail: "Utility bill or agreement" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-orange-100 hover:shadow-lg hover:border-orange-300 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    {item.doc}
                  </h4>
                  <p className="text-sm text-slate-600">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-white border-l-4 border-orange-500 rounded-2xl shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">
                  Important Note
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  All documents should be self-attested. Original documents must
                  be presented for verification. Photocopies will be retained.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= FEE STRUCTURE ================= */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-wider uppercase text-blue-600 mb-4 block">
            Transparent Pricing
          </span>
          <h2 className="text-4xl md:text-5xl rosmie-bold text-slate-900 mb-6">
            Fee Structure
          </h2>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 border-2 border-blue-200">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Our fee structure is transparent, affordable, and value-driven.
              Detailed information for each class will be shared during your
              campus visit or admission enquiry.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-white rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-900 mb-1">
                  Flexible Payment
                </h4>
                <p className="text-sm text-slate-600">
                  Quarterly & annual options
                </p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-900 mb-1">
                  No Hidden Costs
                </h4>
                <p className="text-sm text-slate-600">Complete transparency</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-900 mb-1">
                  Merit Scholarships
                </h4>
                <p className="text-sm text-slate-600">For deserving students</p>
              </div>
            </div>

            <button className="px-8 py-4 bg-blue-600 text-white rosmie-bold rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300">
              Request Detailed Fee Structure
            </button>
          </div>
        </div>
      </div>

      {/* ================= FINAL CTA ================= */}
      <div className="bg-gradient-to-br from-orange-600 to-rose-600 py-5 mx-auto max-w-6xl px-6 md:px-10  text-center rounded-2xl 
          shadow-sm 
          overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-white text-xs font-semibold tracking-wider uppercase">
              Limited Seats Available
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl rosmie-bold text-white mb-6 leading-tight">
            Begin the Journey of Excellence Today
          </h2>

          <p className="text-xl text-orange-50 max-w-2xl mx-auto mb-12 leading-relaxed">
            Join a community where every child is valued, nurtured, and empowered
            to achieve their fullest potential
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="px-10 py-4 bg-white text-orange-600 rosmie-bold rounded-full hover:bg-orange-50 transition-all duration-300 shadow-xl">
              Apply Now
            </button>
            
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default AdmissionVivekananda;