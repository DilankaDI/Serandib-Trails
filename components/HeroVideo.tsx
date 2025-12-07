"use client";

import React from "react";

const HeroVideo: React.FC = () => {
  return (
    <section
      className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center text-center text-white"
      aria-label="Hero video section"
    >
      {/* --- Background Video --- */}
<video
  src="/videos/sea waves compressed.mp4"
  poster="/images/hero-poster.jpg"
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
/>


      {/* --- Overlay for readability --- */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* --- Text content --- */}
      <div className="relative z-10 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Discover Paradise
        </h1>
        <p className="text-lg md:text-2xl">
          Explore Sri Lanka’s stunning coastlines and culture
        </p>
      </div>
    </section>
  );
};

export default HeroVideo;
