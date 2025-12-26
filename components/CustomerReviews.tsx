// "use client";

// import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
// import Image from 'next/image';

// // PLACEHOLDER DATA
// const reviewScreenshots = [
//     "/Images/Reviews/review1.jpg",
//     "/Images/Reviews/review2.jpg",
//     "/Images/Reviews/review3.jpg",
//     "/Images/Reviews/review4.jpg",
// ];

// // Configuration
// const NUM_CLONES = 2; 
// const CARD_WIDTH = 384; 
// const GAP_WIDTH = 24; 

// const CustomerReviews: React.FC = () => {

//     const [currentIndex, setCurrentIndex] = useState(NUM_CLONES);
//     const reviewRef = useRef<HTMLDivElement>(null);
//     const containerRef = useRef<HTMLDivElement>(null);

//     const REAL_SLIDES = reviewScreenshots.length;

//     // -------------------------------------------------
//     // 1️⃣ useMemo FIXED — dependency changed to REAL_SLIDES
//     // -------------------------------------------------
//     const loopedScreenshots = useMemo(() => {
//         if (REAL_SLIDES === 0) return [];

//         const clonesStart = reviewScreenshots.slice(-NUM_CLONES);
//         const clonesEnd = reviewScreenshots.slice(0, NUM_CLONES);

//         return [...clonesStart, ...reviewScreenshots, ...clonesEnd];
//     }, [REAL_SLIDES]);


//     // -------------------------------------------------
//     // 2️⃣ getTargetIndex wrapped in useCallback (Fix ESLint)
//     // -------------------------------------------------
//     const getTargetIndex = useCallback((index: number) => {
//         let newIndex = index;

//         if (index >= REAL_SLIDES + NUM_CLONES) {
//             newIndex = NUM_CLONES;
//         } else if (index < NUM_CLONES) {
//             newIndex = REAL_SLIDES + NUM_CLONES - 1;
//         }
//         return newIndex;
//     }, [REAL_SLIDES]);


//     // -------------------------------------------------
//     // 3️⃣ Auto-scroll + Infinite loop logic (deps fixed)
//     // -------------------------------------------------
//     useEffect(() => {
//         let isTransitioning = false;

//         const handleTransitionEnd = () => {
//             isTransitioning = false;

//             const targetIndex = getTargetIndex(currentIndex);

//             if (targetIndex !== currentIndex) {
//                 reviewRef.current!.style.transitionDuration = '0ms';
//                 setCurrentIndex(targetIndex);
//             }
//         };

//         const currentRef = reviewRef.current;
//         currentRef?.addEventListener('transitionend', handleTransitionEnd);

//         const interval = setInterval(() => {
//             if (!isTransitioning) {
//                 isTransitioning = true;
//                 reviewRef.current!.style.transitionDuration = '700ms';
//                 setCurrentIndex((prev) => prev + 1);
//             }
//         }, 5000);

//         return () => {
//             clearInterval(interval);
//             currentRef?.removeEventListener('transitionend', handleTransitionEnd);
//         };
//     }, [currentIndex, REAL_SLIDES, getTargetIndex]);


//     // -------------------------------------------------
//     // Scroll / positioning
//     // -------------------------------------------------
//     useEffect(() => {
//         if (reviewRef.current && containerRef.current) {
//             const containerWidth = containerRef.current.offsetWidth;

//             const offsetToCardLeft = currentIndex * (CARD_WIDTH + GAP_WIDTH);
//             const centerShift = (containerWidth / 2) - (CARD_WIDTH / 2);
//             const finalTranslateX = offsetToCardLeft - centerShift;

//             reviewRef.current.style.transform = `translateX(-${finalTranslateX}px)`;
//         }
//     }, [currentIndex]);


//     // -------------------------------------------------
//     // User navigation (dots)
//     // -------------------------------------------------
//     const goToSlide = (newIndex: number) => {
//         reviewRef.current!.style.transitionDuration = '700ms';
//         setCurrentIndex(newIndex + NUM_CLONES);
//     };


//     // -------------------------------------------------
//     // UI
//     // -------------------------------------------------
//     return (
//         <section className="py-20 bg-gray-50 text-gray-800">
//             <div className="max-w-7xl mx-auto px-6">
                
//                 <div className="text-center mb-12">
//                     <h2 className="text-4xl font-bold text-gray-900">
//                         What Our Adventurers Say
//                     </h2>
//                     <p className="mt-3 text-gray-600 text-lg">
//                         Verified screenshots from happy travelers across the globe.
//                     </p>
//                 </div>

//                 <div 
//                     ref={containerRef} 
//                     className="relative overflow-hidden mx-auto max-w-full md:max-w-6xl"
//                 >
//                     <div 
//                         ref={reviewRef}
//                         style={{ transitionDuration: '700ms' }}
//                         className="flex space-x-6 transition-transform ease-in-out"
//                     >
//                         {loopedScreenshots.map((src, index) => (
//                             <div 
//                                 key={index}
//                                 className="shrink-0 w-96 h-64 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden group cursor-pointer"
//                             >
//                                 <div className="relative w-full h-full">
//                                     <Image
//                                         src={src}
//                                         alt={`Customer Review Screenshot ${index + 1}`}
//                                         fill
//                                         className="object-contain"
//                                     />
//                                     <div className="absolute inset-0 bg-teal-600 opacity-0 group-hover:opacity-10 transition duration-300"></div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Navigation Dots */}
//                     <div className="flex justify-center space-x-2 mt-6">
//                         {reviewScreenshots.map((_, index) => (
//                             <button
//                                 key={index}
//                                 onClick={() => goToSlide(index)}
//                                 className={`w-3 h-3 rounded-full transition-colors duration-300 ${
//                                     (currentIndex - NUM_CLONES) === index
//                                         ? 'bg-blue-600'
//                                         : 'bg-gray-300 hover:bg-gray-400'
//                                 }`}
//                                 aria-label={`Go to review ${index + 1}`}
//                             />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default CustomerReviews;

"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import Image from "next/image";

// REVIEW IMAGES (SEO-friendly paths)
const reviewScreenshots = [
  "/images/reviews/sri-lanka-tour-review-1.jpg",
  "/images/reviews/sri-lanka-tour-review-2.jpg",
  "/images/reviews/sri-lanka-tour-review-3.jpg",
  "/images/reviews/sri-lanka-tour-review-4.jpg",
];

const NUM_CLONES = 2;
const CARD_WIDTH = 384;
const GAP_WIDTH = 24;

const CustomerReviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(NUM_CLONES);
  const reviewRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const REAL_SLIDES = reviewScreenshots.length;

  const loopedScreenshots = useMemo(() => {
    if (REAL_SLIDES === 0) return [];
    const clonesStart = reviewScreenshots.slice(-NUM_CLONES);
    const clonesEnd = reviewScreenshots.slice(0, NUM_CLONES);
    return [...clonesStart, ...reviewScreenshots, ...clonesEnd];
  }, [REAL_SLIDES]);

  const getTargetIndex = useCallback(
    (index: number) => {
      if (index >= REAL_SLIDES + NUM_CLONES) return NUM_CLONES;
      if (index < NUM_CLONES) return REAL_SLIDES + NUM_CLONES - 1;
      return index;
    },
    [REAL_SLIDES]
  );

  useEffect(() => {
    let isTransitioning = false;

    const handleTransitionEnd = () => {
      isTransitioning = false;
      const targetIndex = getTargetIndex(currentIndex);
      if (targetIndex !== currentIndex) {
        reviewRef.current!.style.transitionDuration = "0ms";
        setCurrentIndex(targetIndex);
      }
    };

    const currentRef = reviewRef.current;
    currentRef?.addEventListener("transitionend", handleTransitionEnd);

    const interval = setInterval(() => {
      if (!isTransitioning) {
        isTransitioning = true;
        reviewRef.current!.style.transitionDuration = "700ms";
        setCurrentIndex((prev) => prev + 1);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
      currentRef?.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [currentIndex, REAL_SLIDES, getTargetIndex]);

  useEffect(() => {
    if (reviewRef.current && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const offsetToCardLeft = currentIndex * (CARD_WIDTH + GAP_WIDTH);
      const centerShift = containerWidth / 2 - CARD_WIDTH / 2;
      reviewRef.current.style.transform = `translateX(-${
        offsetToCardLeft - centerShift
      }px)`;
    }
  }, [currentIndex]);

  const goToSlide = (newIndex: number) => {
    reviewRef.current!.style.transitionDuration = "700ms";
    setCurrentIndex(newIndex + NUM_CLONES);
  };

  return (
    <section
      className="py-20 bg-gray-50 text-gray-800"
      aria-label="Customer reviews and testimonials"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Customer Reviews & Testimonials
          </h2>
          <p className="mt-3 text-gray-600 text-lg">
            Real reviews from international travelers who explored Sri Lanka
            with our tour and transport services.
          </p>
        </div>

        {/* Slider */}
        <div
          ref={containerRef}
          className="relative overflow-hidden mx-auto max-w-full md:max-w-6xl"
        >
          <div
            ref={reviewRef}
            className="flex space-x-6 transition-transform ease-in-out"
            style={{ transitionDuration: "700ms" }}
          >
            {loopedScreenshots.map((src, index) => (
              <figure
                key={index}
                className="shrink-0 w-96 h-64 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={src}
                    alt="Verified customer review for Sri Lanka tour and airport transfer service"
                    fill
                    sizes="(max-width: 768px) 100vw, 384px"
                    className="object-contain"
                  />
                </div>
              </figure>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {reviewScreenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentIndex - NUM_CLONES === index
                    ? "bg-blue-600"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`View customer review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
