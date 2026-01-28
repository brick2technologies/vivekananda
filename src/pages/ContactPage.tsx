import React, { useState } from "react";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    class: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="w-full bg-gradient-to-b from-white via-slate-50 to-white pt-32 pb-24 rosmie-regular">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="px-4 py-1.5 text-xs font-semibold tracking-wider uppercase bg-orange-100 text-orange-700 rounded-full">
              Get In Touch
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl rosmie-bold text-slate-900 mb-6 tracking-tight">
            Contact Us
          </h1>

          {/* Description */}
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about admissions, programs, or campus life? We're here
            to help you every step of the way
          </p>

          {/* Decorative Line */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-orange-400"></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-orange-400"></div>
          </div>
        </div>

        {/* ================= MAIN CONTENT GRID ================= */}
        <div className="grid lg:grid-cols-5 gap-12 mb-20">
          {/* LEFT SIDE - CONTACT INFO */}
          <div className="lg:col-span-2 space-y-8">
            {/* Address Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg rosmie-bold text-slate-900 mb-2">
                    School Address
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Vivekananda High School<br />
                    Mehdipatnam<br />
                    Andhra Pradesh – 521001
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg rosmie-bold text-slate-900 mb-2">
                    Phone
                  </h3>
                  <a
                    href="tel:+919876543210"
                    className="text-slate-600 hover:text-orange-600 transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg rosmie-bold text-slate-900 mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:vivekanandaschool@gmail.com"
                    className="text-slate-600 hover:text-orange-600 transition-colors break-all"
                  >
                    vivekanandaschool@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Office Hours Card */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-white rounded-xl flex items-center justify-center">
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg rosmie-bold text-slate-900 mb-2">
                    Office Hours
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    Monday – Saturday<br />
                    <span className="rosmie-bold">9:00 AM – 4:00 PM</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - CONTACT FORM */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100">
              <h2 className="text-3xl rosmie-bold text-slate-900 mb-2">
                Send us a Message
              </h2>
              <p className="text-slate-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Student / Parent Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-orange-500 focus:outline-none transition-colors bg-white text-slate-900"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Phone & Email - Grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-orange-500 focus:outline-none transition-colors bg-white text-slate-900"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-orange-500 focus:outline-none transition-colors bg-white text-slate-900"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Class / Grade */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Class / Grade <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="class"
                    required
                    value={formData.class}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-orange-500 focus:outline-none transition-colors bg-white text-slate-900"
                  >
                    <option value="">Select Class</option>
                    <option>Pre-KG</option>
                    <option>LKG</option>
                    <option>UKG</option>
                    <option>Class 1</option>
                    <option>Class 2</option>
                    <option>Class 3</option>
                    <option>Class 4</option>
                    <option>Class 5</option>
                    <option>Class 6</option>
                    <option>Class 7</option>
                    <option>Class 8</option>
                    <option>Class 9</option>
                    <option>Class 10</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Message <span className="text-slate-400">(Optional)</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-orange-500 focus:outline-none transition-colors bg-white text-slate-900 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white py-4 rounded-xl font-semibold hover:from-orange-700 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* ================= MAP SECTION ================= */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl rosmie-bold text-slate-900 mb-2">
              Visit Our Campus
            </h2>
            <p className="text-slate-600">
              Find us on the map and plan your visit
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="relative w-full h-[400px] bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5687932639764!2d78.44270631487634!3d17.39708998806891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9758c6d3a1ab%3A0x6e5d6e4a3b3a3b3a!2sMehdipatnam%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>

        {/* ================= QUICK LINKS / FAQ ================= */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "📞",
              title: "Call to Schedule",
              desc: "Book a campus tour or admission counseling session",
              color: "bg-blue-50",
              iconColor: "text-blue-600",
            },
            {
              icon: "🏫",
              title: "Visit Campus",
              desc: "Experience our facilities and meet our faculty",
              color: "bg-green-50",
              iconColor: "text-green-600",
            },
            {
              icon: "📧",
              title: "Email Anytime",
              desc: "We'll respond to your queries within 24 hours",
              color: "bg-purple-50",
              iconColor: "text-purple-600",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`${item.color} rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow duration-300`}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl rosmie-bold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;