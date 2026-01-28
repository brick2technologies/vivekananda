import React, { useRef, useState } from "react";

type Testimonial = {
  name: string;
  role: string;
  message: string;
  video: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Srinivas Rao",
    role: "Parent of Class 6 Student",
    message:
      "Vivekananda School has helped my child grow academically and morally. The teachers are very supportive and caring.",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    name: "Lakshmi Devi",
    role: "Parent of Class 4 Student",
    message:
      "The school focuses on discipline, values, and overall development. We are very satisfied as parents.",
    video: "https://www.w3schools.com/html/movie.mp4",
  },
];

const ParentTestimonials: React.FC = () => {
  const [index, setIndex] = useState(0);
  const startX = useRef<number | null>(null);

  const handleStart = (x: number) => {
    startX.current = x;
  };

  const handleEnd = (x: number) => {
    if (startX.current === null) return;
    const diff = startX.current - x;

    if (diff > 50 && index < testimonials.length - 1) {
      setIndex(index + 1);
    } else if (diff < -50 && index > 0) {
      setIndex(index - 1);
    }

    startX.current = null;
  };

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-extrabold text-orange-600 md:text-4xl rosmie-bold">
            What Parents Say
          </h2>
        </div>

        {/* Swipe Container */}
        <div
          className="relative overflow-hidden rounded-3xl bg-slate-50 shadow-lg"
          onTouchStart={(e) => handleStart(e.touches[0].clientX)}
          onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
          onMouseDown={(e) => handleStart(e.clientX)}
          onMouseUp={(e) => handleEnd(e.clientX)}
        >
          {/* Slider */}
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex min-w-full flex-col gap-10 p-10 md:flex-row md:items-center"
              >
                {/* Video */}
                <div className="md:w-1/2">
                  <video
                    src={t.video}
                    controls
                    className="w-full rounded-2xl shadow-md"
                  />
                </div>

                {/* Content */}
                <div className="md:w-1/2">
                  <p className="text-lg leading-relaxed text-slate-700">
                    “{t.message}”
                  </p>

                  <div className="mt-6">
                    <h4 className="text-xl font-semibold text-slate-900">
                      {t.name}
                    </h4>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-3 w-3 rounded-full transition ${
                  index === i
                    ? "bg-orange-600"
                    : "bg-orange-200 hover:bg-orange-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentTestimonials;
