import React from "react";

const AdmissionsCTA: React.FC = () => {
  return (
    <section className="bg-white py-20 md:py-28 border-t border-slate-100">
      <div className="mx-auto max-w-5xl px-6 text-center">
        {/* Headline – bigger but cleaner */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight rosmie-bold">
          Admissions Open 2026–27
        </h2>

        {/* Subtext – shorter, calmer */}
        <p className="mt-5 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed rosmie-regular">
          Quality education rooted in values, discipline, and holistic growth.
        </p>

        {/* Buttons – minimal, elegant, with subtle interaction */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
          <button
            className="
              min-w-[180px] px-8 py-4 
              bg-orange-600 text-white 
              font-semibold text-base 
              rounded-full 
              shadow-md shadow-orange-200/50 
              transition-all duration-300 
              hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-300/40 
              hover:scale-[1.03] 
              active:scale-100
            "
          >
            Apply Now
          </button>

          <button
            className="
              min-w-[180px] px-8 py-4 
              border-2 border-slate-300 text-slate-700 
              font-semibold text-base 
              rounded-full 
              transition-all duration-300 
              hover:border-orange-600 hover:text-orange-600 
              hover:bg-orange-50/50 
              hover:shadow-sm
            "
          >
            Contact Us
          </button>
        </div>

        {/* Optional tiny trust line */}
        <p className="mt-8 text-sm text-slate-500">
          Limited seats • Early applications encouraged
        </p>
      </div>
    </section>
  );
};

export default AdmissionsCTA;