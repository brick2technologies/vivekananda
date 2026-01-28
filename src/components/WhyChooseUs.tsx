import React from "react";
import {
  GraduationCap,
  ShieldCheck,
  Users,
  Lightbulb,
  HeartHandshake,
  School,
} from "lucide-react";

const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-extrabold text-orange-600 md:text-4xl rosmie-bold">
            Why Choose Vivekananda School
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-slate-600">
            Inspiring excellence through values, innovation, and holistic
            education.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid auto-rows-[200px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Large Featured Card */}
          <div
            className="group relative col-span-1 row-span-2 overflow-hidden rounded-3xl sm:col-span-2"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1588072432836-e10032774350)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent" />
            <div className="relative z-10 flex h-full flex-col justify-between p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90 text-orange-600">
                <HeartHandshake size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Value-Based Education
              </h3>
            </div>
          </div>

          {/* Card 2 */}
          <PremiumCard
            title="Experienced & Caring Faculty"
            icon={<Users size={22} />}
            image="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c"
          />

          {/* Card 3 */}
          <PremiumCard
            title="Safe & Disciplined Environment"
            icon={<ShieldCheck size={22} />}
            image="https://images.unsplash.com/photo-1596495578065-6e0763fa1178"
          />

          {/* Wide Card */}
          <div
            className="group relative col-span-1 overflow-hidden rounded-3xl sm:col-span-2"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1523240795612-9a054b0db644)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/20" />
            <div className="relative z-10 flex h-full flex-col justify-between p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 text-orange-600">
                <Lightbulb size={22} />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Modern Teaching Methods
              </h3>
            </div>
          </div>

          {/* Card 5 */}
          <PremiumCard
            title="Individual Student Attention"
            icon={<GraduationCap size={22} />}
            image="https://images.unsplash.com/photo-1509062522246-3755977927d7"
          />

          {/* Card 6 */}
          <PremiumCard
            title="Well-Equipped Campus"
            icon={<School size={22} />}
            image="https://images.unsplash.com/photo-1592066575517-58df903152f2"
          />

          <div
            className="group relative col-span-1 overflow-hidden rounded-3xl sm:col-span-2"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1523240795612-9a054b0db644)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/20" />
            <div className="relative z-10 flex h-full flex-col justify-between p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 text-orange-600">
                <Lightbulb size={22} />
              </div>
              <h3 className="text-lg font-semibold text-white">
                Holistic Development Programs
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

/* ----------------------------- */
/* Premium Card Component */
/* ----------------------------- */

const PremiumCard = ({
  title,
  icon,
  image,
}: {
  title: string;
  icon: React.ReactNode;
  image: string;
}) => {
  return (
    <div
      className="group relative overflow-hidden rounded-3xl"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-transparent transition-opacity group-hover:opacity-80" />
      <div className="relative z-10 flex h-full flex-col justify-between p-6 transition-transform duration-300 group-hover:scale-[1.02]">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 text-orange-600">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
    </div>
  );
};
