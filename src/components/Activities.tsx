import React from "react";
import {
  BookOpen,
  Brain,
  Trophy,
  Palette,
  Microscope,
  Leaf,
  HeartPulse,
  GraduationCap,
} from "lucide-react";

// You can replace these with your own hosted images later
const activities = [
  {
    title: "Academic Activities",
    icon: BookOpen,
    image: "https://images.pexels.com/photos/35552292/pexels-photo-35552292/free-photo-of-engaging-classroom-activity-in-bangladesh-school.jpeg", // lively classroom
    color: "from-orange-500/70 to-orange-700/70",
  },
  {
    title: "Value Education",
    icon: Brain,
    image: "https://live.staticflickr.com/3827/10817467726_332a086399_b.jpg", // engaged discussion
    color: "from-teal-500/60 to-teal-700/60",
  },
  {
    title: "Sports & Physical Education",
    icon: Trophy,
    image: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e", // dynamic sports (you can update)
    color: "from-blue-500/65 to-blue-700/65",
  },
  {
    title: "Cultural Activities",
    icon: Palette,
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bharatanatyam_dance_performance_by_Guru_Saroja_Vaidyanathan%27_disciples_at_Youth_Festival_2012_IMG_3201_16.jpg",
    color: "from-purple-500/65 to-purple-700/65",
  },
  {
    title: "Science & Technology",
    icon: Microscope,
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5", // science lab action
    color: "from-green-500/60 to-green-700/60",
  },
  {
    title: "Social Activities",
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433", // community service
    color: "from-emerald-500/65 to-emerald-700/65",
  },
  {
    title: "Yoga & Wellness",
    icon: HeartPulse,
    image: "https://images.unsplash.com/photo-1588286840104-8951b0197270", // kids yoga
    color: "from-pink-500/60 to-rose-700/60",
  },
  {
    title: "Co-Curricular Programs",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655", // art/craft/debate
    color: "from-amber-500/65 to-amber-700/65",
  },
];

const SchoolActivities: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl rosmie-bold">
            Vibrant Life at <span className="text-orange-600">Vivekananda School</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 md:text-xl">
            Where learning meets joy, creativity, and holistic growth
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Image container with zoom effect */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Color overlay with slight motion feel */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${activity.color} opacity-45 transition-opacity duration-500 group-hover:opacity-65`}
                  />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  {/* Icon */}
                  <div className="self-start rounded-xl bg-white/90 p-3 shadow-md transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110">
                    <Icon size={28} className="text-orange-600" strokeWidth={2.2} />
                  </div>

                  {/* Title - slides up on hover */}
                  <div className="translate-y-2 transform transition-transform duration-500 group-hover:translate-y-0">
                    <h3 className="text-xl font-bold text-white drop-shadow-md md:text-2xl">
                      {activity.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SchoolActivities;