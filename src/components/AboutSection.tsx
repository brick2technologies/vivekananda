import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="bg-slate-50 py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-center text-slate-800 mb-12 rosmie-bold">
          Welcome to <span className="text-orange-600">Vivekananda High School</span>
        </h2>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          
          {/* Image */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/school.avif"
              alt="Vivekananda High School"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4 rosmie-bold">
              About Our School
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Vivekananda High School is committed to providing quality education
              that nurtures young minds with knowledge, discipline, and strong
              moral values. We believe education is not just about academics,
              but about shaping responsible citizens of tomorrow.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our school creates a supportive environment where students are
              encouraged to explore their talents, think creatively, and grow
              with confidence.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-orange-50 p-8 rounded-2xl shadow-sm">
            <h4 className="text-xl font-bold text-orange-600 mb-3 rosmie-bold">
              Our Mission
            </h4>
            <p className="text-slate-700 leading-relaxed">
              To empower students with academic excellence, ethical values,
              and life skills that enable them to face future challenges
              with confidence and integrity.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl shadow-sm">
            <h4 className="text-xl font-bold text-slate-800 mb-3 rosmie-bold">
              Our Vision
            </h4>
            <p className="text-slate-700 leading-relaxed">
              To be a center of educational excellence that inspires lifelong
              learning and holistic development in every student.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center rosmie-bold">
  
  <div className="p-6 rounded-xl bg-white shadow-md border-2 border-orange-200">
    <h5 className="text-4xl font-extrabold text-orange-600">1200+</h5>
    <p className="mt-2 text-slate-600 font-medium">Students</p>
  </div>

  <div className="p-6 rounded-xl bg-white shadow-md border-2 border-orange-200">
    <h5 className="text-4xl font-extrabold text-orange-600">98%</h5>
    <p className="mt-2 text-slate-600 font-medium">Pass Percentage</p>
  </div>

  <div className="p-6 rounded-xl bg-white shadow-md border-2 border-orange-200">
    <h5 className="text-4xl font-extrabold text-orange-600">20:1</h5>
    <p className="mt-2 text-slate-600 font-medium">
      Student–Teacher Ratio
    </p>
  </div>

</div>


      </div>
    </section>
  );
};

export default AboutSection;
