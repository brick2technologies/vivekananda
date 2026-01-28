import React, { useState } from "react";

type GalleryImage = {
  id: number;
  src: string;
  title: string;
  category: string;
};

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/images/gallery/campus.jpg",
    title: "School Campus",
    category: "Infrastructure",
  },
  {
    id: 2,
    src: "/images/gallery/classroom.jpg",
    title: "Classroom Activities",
    category: "Academics",
  },
  {
    id: 3,
    src: "/images/gallery/annual-day.jpg",
    title: "Annual Day Celebration",
    category: "Events",
  },
  {
    id: 4,
    src: "/images/gallery/sports-day.jpg",
    title: "Sports Day",
    category: "Sports",
  },
  {
    id: 5,
    src: "/images/gallery/cultural.jpg",
    title: "Cultural Programs",
    category: "Events",
  },
  {
    id: 6,
    src: "/images/gallery/lab.jpg",
    title: "Laboratory Session",
    category: "Academics",
  },
  {
    id: 7,
    src: "/images/gallery/library.jpg",
    title: "Library",
    category: "Infrastructure",
  },
  {
    id: 8,
    src: "/images/gallery/art-class.jpg",
    title: "Art & Craft",
    category: "Activities",
  },
  {
    id: 9,
    src: "/images/gallery/music-room.jpg",
    title: "Music Room",
    category: "Activities",
  },
];

const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const categories = ["All", "Infrastructure", "Academics", "Events", "Sports", "Activities"];

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (image: GalleryImage) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (!lightboxImage) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === lightboxImage.id);
    let newIndex: number;
    
    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setLightboxImage(filteredImages[newIndex]);
  };

  return (
    <section className="w-full bg-gradient-to-b from-white via-slate-50 to-white pt-32 pb-24 rosmie-regular">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="px-4 py-1.5 text-xs font-semibold tracking-wider uppercase bg-orange-100 text-orange-700 rounded-full">
              Visual Stories
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl rosmie-bold text-slate-900 mb-6 tracking-tight">
            Our Gallery
          </h1>

          {/* Description */}
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A glimpse into the vibrant life at Vivekananda School – where learning
            meets joy, culture meets discipline, and every moment becomes a memory
          </p>

          {/* Decorative Line */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-orange-400"></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-orange-400"></div>
          </div>
        </div>

        {/* ================= CATEGORY FILTERS ================= */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-orange-600 text-white shadow-lg shadow-orange-600/30 scale-105"
                  : "bg-white text-slate-700 border-2 border-slate-200 hover:border-orange-300 hover:text-orange-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ================= GALLERY GRID - MASONRY STYLE ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                index % 5 === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
              onClick={() => openLightbox(image)}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    index % 5 === 0 ? "h-[500px]" : "h-[300px]"
                  }`}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full mb-2">
                  {image.category}
                </span>
                <h3 className="text-xl rosmie-bold text-white">{image.title}</h3>
              </div>

              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                <svg
                  className="w-5 h-5 text-slate-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-100 rounded-full mb-4">
              <svg
                className="w-10 h-10 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-slate-600 text-lg">No images found in this category</p>
          </div>
        )}
      </div>

      {/* ================= LIGHTBOX MODAL ================= */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 z-10"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("prev");
            }}
            className="absolute left-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 z-10"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("next");
            }}
            className="absolute right-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 z-10"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage.src}
              alt={lightboxImage.title}
              className="w-full h-full object-contain rounded-2xl shadow-2xl"
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
              <span className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full mb-2">
                {lightboxImage.category}
              </span>
              <h3 className="text-2xl rosmie-bold text-white">
                {lightboxImage.title}
              </h3>
            </div>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
            {filteredImages.findIndex(img => img.id === lightboxImage.id) + 1} / {filteredImages.length}
          </div>
        </div>
      )}

      {/* ================= CUSTOM STYLES FOR ANIMATIONS ================= */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default GalleryPage;