import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-slate-50">

      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-screen bg-orange-50/50 -skew-x-12 translate-x-24 hidden lg:block" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Image Section */}
          <div className="relative md:order-2 lg:order-1 space-y-4">
            <div className="rounded-3xl overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
              <img
                src="/hero-image.jpg"
                alt="Students Learning"
                className="w-full h-[260px] sm:h-[300px] md:h-[320px] lg:h-[420px] object-cover"
              />
            </div>
            {/* Compact Info Below Image */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-3 rosmie-regular">

              {/* Quality Education */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm">
                  🎓
                </div>
                <div className="leading-tight">
                  <p className="text-xs font-black text-slate-800 uppercase">
                    Quality
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Education
                  </p>
                </div>
              </div>

              {/* Experience */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-[10px] font-black">
                  10+
                </div>
                <div className="leading-tight">
                  <p className="text-xs font-black text-slate-800 uppercase">
                    Years
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Experience
                  </p>
                </div>
              </div>

              {/* Student Focus */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm">
                  ❤️
                </div>
                <div className="leading-tight">
                  <p className="text-xs font-black text-slate-800 uppercase">
                    Student
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Focused
                  </p>
                </div>
              </div>

            </div>


          </div>

          {/* Content Section */}
          <div className="z-10 space-y-7 md:order-1 lg:order-2">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-black uppercase tracking-[0.2em] rosmie-bold">
              Admissions Open 2026–27
            </span>

            <h1 className="text-6xl md:text-5xl lg:text-7xl font-black text-slate-900 leading-tight tracking-tight rosmie-bold text-center lg:text-left">
              The School with <br />
              <span className="text-orange-600 italic">Vision & Focus.</span>
            </h1>


            <p className="text-base md:text-lg text-slate-600 max-w-xl leading-relaxed rosmie-regular">
              Nurturing young minds from Nursery to Grade X with a perfect blend of modern technology,
              cultural values, and academic rigor.
            </p>

            {/* CTA Buttons — ONLY THIS PART CHANGED */}
            <div className="flex flex-col sm:flex-row gap-4 rosmie-bold text-center lg:text-center">
              <Link to="/admissions" className="
                px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 
                text-white rounded-full font-bold text-sm uppercase tracking-widest 
                shadow-lg shadow-orange-500/30 
                hover:from-orange-700 hover:to-orange-600 
                hover:shadow-xl hover:shadow-orange-500/40 
                hover:scale-[1.04] 
                transition-all duration-300 ease-out
              ">
                Apply Admission
              </Link>
              
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200 rosmie-bold">
              <div>
                <p className="text-xl md:text-2xl font-black text-slate-900">100%</p>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                  Board Results
                </p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-black text-slate-900">25+</p>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                  Activities
                </p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-black text-slate-900">1:20</p>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                  Teacher Ratio
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;