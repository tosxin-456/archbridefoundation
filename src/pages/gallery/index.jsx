import React, { useState } from "react";
import {
  Camera,
  Video,
  Download,
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Images,
  Play,
  Grid3X3,
  Filter
} from "lucide-react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [viewMode, setViewMode] = useState("grid"); // grid or list

  // Sample gallery data
  const albums = [
    {
      id: 1,
      title: "Wedding Ceremony 2024",
      date: "June 2024",
      type: "photos",
      count: 45,
      thumbnail:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 2,
      title: "Corporate Event 2024",
      date: "March 2024",
      type: "photos",
      count: 32,
      thumbnail:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 3,
      title: "Travel Adventures 2023",
      date: "August 2023",
      type: "photos",
      count: 67,
      thumbnail:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 4,
      title: "Conference Highlights",
      date: "January 2024",
      type: "videos",
      count: 8,
      thumbnail:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop",
      videos: [
        {
          thumbnail:
            "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop",
          duration: "2:45"
        },
        {
          thumbnail:
            "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
          duration: "1:30"
        }
      ]
    }
  ];

  const filteredAlbums =
    selectedCategory === "all"
      ? albums
      : albums.filter((album) => album.type === selectedCategory);

  const allImages = albums
    .filter((album) => album.images)
    .flatMap((album) => album.images);

  const openLightbox = (imageUrl, index = 0) => {
    setLightboxImage(imageUrl);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const navigateImage = (direction) => {
    const newIndex =
      direction === "next"
        ? (currentImageIndex + 1) % allImages.length
        : currentImageIndex === 0
        ? allImages.length - 1
        : currentImageIndex - 1;

    setCurrentImageIndex(newIndex);
    setLightboxImage(allImages[newIndex]);
  };

  const downloadImage = (imageUrl) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "gallery-image.jpg";
    link.click();
  };

  return (
    <div
      className="min-h-screen mt-[70px] sm:mt-[70px]"
      style={{ backgroundColor: "#10243D" }}
    >
      {/* Header */}
      <div className="px-4 sm:px-6 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h1
              className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2 sm:mb-4"
              style={{ color: "#A9B1B2" }}
            >
              Gallery
            </h1>
            <p className="text-lg sm:text-xl px-4" style={{ color: "#286374" }}>
              Capturing moments, preserving memories
            </p>
          </div>

          {/* Filter Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between mb-6 sm:mb-8 gap-4">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2 px-2">
                <Filter size={18} style={{ color: "#A9B1B2" }} />
                <span
                  className="text-sm font-medium"
                  style={{ color: "#A9B1B2" }}
                >
                  Filter:
                </span>
              </div>
              <div className="flex gap-2 pb-2 sm:pb-0">
                {[
                  { key: "all", label: "All", icon: Grid3X3 },
                  { key: "photos", label: "Photos", icon: Camera },
                  { key: "videos", label: "Videos", icon: Video }
                ].map(({ key, label, icon: Icon }) => (
                  <button
                    key={key}
                    onClick={() => setSelectedCategory(key)}
                    className={`flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap min-w-fit ${
                      selectedCategory === key
                        ? "text-white shadow-lg transform scale-105"
                        : "hover:scale-105"
                    }`}
                    style={{
                      backgroundColor:
                        selectedCategory === key ? "#286374" : "transparent",
                      color: selectedCategory === key ? "white" : "#A9B1B2",
                      border: `2px solid ${
                        selectedCategory === key ? "#286374" : "#A9B1B2"
                      }`
                    }}
                  >
                    <Icon size={14} className="sm:w-4 sm:h-4" />
                    <span className="text-sm">{label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-end gap-2">
              <button
                onClick={() =>
                  setViewMode(viewMode === "grid" ? "list" : "grid")
                }
                className="p-2 sm:p-2 rounded-lg transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: "#286374", color: "white" }}
              >
                <Grid3X3 size={18} className="sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="px-4 sm:px-6 pb-8 sm:pb-12">
        <div className="max-w-7xl mx-auto">
          <div
            className={`grid gap-4 sm:gap-6 ${
              viewMode === "grid"
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1"
            }`}
          >
            {filteredAlbums.map((album) => (
              <div
                key={album.id}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-3xl"
                style={{ backgroundColor: "#286374" }}
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={album.thumbnail}
                    alt={album.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Play button for videos */}
                  {album.type === "videos" && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 sm:p-4 hover:bg-white/30 transition-colors">
                        <Play
                          size={24}
                          className="sm:w-8 sm:h-8 text-white ml-1"
                        />
                      </div>
                    </div>
                  )}

                  {/* Type badge */}
                  <div
                    className="absolute top-3 sm:top-4 right-3 sm:right-4 px-2 sm:px-3 py-1 rounded-full text-white text-xs sm:text-sm font-medium backdrop-blur-sm"
                    style={{ backgroundColor: "rgba(40, 99, 116, 0.8)" }}
                  >
                    {album.type === "photos" ? (
                      <Camera size={14} className="sm:w-4 sm:h-4" />
                    ) : (
                      <Video size={14} className="sm:w-4 sm:h-4" />
                    )}
                  </div>
                </div>

                {/* Album Info */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 line-clamp-2">
                    {album.title}
                  </h3>
                  <div
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs sm:text-sm gap-2 sm:gap-0"
                    style={{ color: "#A9B1B2" }}
                  >
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="sm:w-4 sm:h-4" />
                      {album.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Images size={14} className="sm:w-4 sm:h-4" />
                      {album.count} {album.type}
                    </div>
                  </div>

                  {/* Preview Images */}
                  {album.images && (
                    <div className="mt-3 sm:mt-4 grid grid-cols-4 gap-1.5 sm:gap-2">
                      {album.images.slice(0, 4).map((image, index) => (
                        <button
                          key={index}
                          onClick={() =>
                            openLightbox(image, allImages.indexOf(image))
                          }
                          className="aspect-square rounded-md sm:rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 touch-manipulation"
                        >
                          <img
                            src={image}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="mt-3 sm:mt-4 flex gap-2">
                    <button
                      onClick={() =>
                        album.images && openLightbox(album.images[0], 0)
                      }
                      className="flex-1 py-2.5 sm:py-2 px-3 sm:px-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 text-sm sm:text-base touch-manipulation"
                      style={{ backgroundColor: "#A9B1B2", color: "#10243D" }}
                    >
                      View {album.type === "photos" ? "Photos" : "Videos"}
                    </button>
                    <button
                      onClick={() =>
                        album.images && downloadImage(album.thumbnail)
                      }
                      className="p-2.5 sm:p-2 rounded-lg transition-all duration-300 hover:scale-110 touch-manipulation"
                      style={{
                        backgroundColor: "rgba(169, 177, 178, 0.2)",
                        color: "#A9B1B2"
                      }}
                    >
                      <Download size={18} className="sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm px-4">
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 p-2.5 sm:p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors touch-manipulation"
            >
              <X size={20} className="sm:w-6 sm:h-6" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={() => navigateImage("prev")}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-2.5 sm:p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors touch-manipulation"
            >
              <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={() => navigateImage("next")}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 p-2.5 sm:p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors touch-manipulation"
            >
              <ChevronRight size={20} className="sm:w-6 sm:h-6" />
            </button>

            {/* Download button */}
            <button
              onClick={() => downloadImage(lightboxImage)}
              className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 z-10 p-2.5 sm:p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors touch-manipulation"
            >
              <Download size={18} className="sm:w-5 sm:h-5" />
            </button>

            {/* Image */}
            <img
              src={lightboxImage}
              alt=""
              className="w-full h-full object-contain rounded-lg"
            />

            {/* Image counter */}
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm">
              {currentImageIndex + 1} / {allImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
