"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
// Importing icons for better navigation experience (Assuming you use 'lucide-react' or similar)
// If you don't have an icon library, you'll need to use simple characters or a different method.
// For this example, I'll use simple SVGs which are common.

interface Slide {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    src: "/Images/Carousel/c 0.jpg",
    alt: "Beautiful beach in Sri Lanka, clear water, and palm trees",
    title: "Discover Paradise",
    subtitle: "Explore Sri Lanka’s stunning coastlines and culture",
  },
  {
    src: "/Images/Carousel/c 1.jpg",
    alt: "Misty mountain range in Sri Lanka, lush greenery",
    title: "Adventure Awaits",
    subtitle: "From misty mountains to lush tea plantations",
  },
  {
    src: "/Images/Carousel/c 2.jpg",
    alt: "Ancient Sri Lankan temple with intricate stone carvings",
    title: "Cultural Heritage",
    subtitle: "Experience timeless traditions and warm hospitality",
  },
];

const AUTO_SLIDE_INTERVAL = 4000; // 4 seconds

const Carousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const totalSlides = slides.length;

  // Function to move to the next slide
  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(nextSlide, AUTO_SLIDE_INTERVAL);
    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [nextSlide]); // Dependency on nextSlide to ensure correct interval

  return (
    <div 
      className="relative w-full h-[80vh] overflow-hidden group focus-within:ring-2 focus-within:ring-white focus-within:ring-offset-2"
      role="region" // ARIA role for a prominent content section
      aria-label="Image Carousel" // Label for screen readers
    >
      {/* --- Slides Container --- */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          aria-hidden={index !== current} // Hide inactive slides from screen readers
          aria-live="polite" // Announce changes to screen readers politely
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="(max-width: 768px) 100vw, 80vw" // Improve image optimization
          />
          {/* Overlay and Text */}
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-6 z-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h2>
            <p className="text-lg md:text-xl">{slide.subtitle}</p>
          </div>
        </div>
      ))}

      {/* --- Navigation Arrows --- */}
      <div className="absolute inset-0 flex items-center justify-between p-4 z-30">
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="p-3 bg-black/30 text-white rounded-full hover:bg-black/50 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="p-3 bg-black/30 text-white rounded-full hover:bg-black/50 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>

      {/* --- Dots (Indicators) --- */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1} with title: ${slides[i].title}`} // Informative ARIA label
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              i === current ? "bg-white ring-2 ring-offset-2 ring-white" : "bg-gray-400 hover:bg-white/70"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;