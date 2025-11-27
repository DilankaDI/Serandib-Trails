"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';

// PLACEHOLDER DATA (Kept the same)
const reviewScreenshots = [
    "/Images/Reviews/review1.jpg",
    "/Images/Reviews/review2.jpg",
    "/Images/Reviews/review3.jpg",
    "/Images/Reviews/review4.jpg",
];

// Configuration
const NUM_CLONES = 2; // Number of slides to duplicate at the start and end
const CARD_WIDTH = 384; 
const GAP_WIDTH = 24; 

const CustomerReviews: React.FC = () => {
    // currentIndex starts at the first real slide (after the clones)
    const [currentIndex, setCurrentIndex] = useState(NUM_CLONES); 
    const reviewRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    
    const REAL_SLIDES = reviewScreenshots.length;
    const TOTAL_SLIDES = REAL_SLIDES + NUM_CLONES * 2; // Real + Clones (Start) + Clones (End)

    // 💡 1. Prepare the looped slide array (Real slides + Clones)
    const loopedScreenshots = useMemo(() => {
        if (REAL_SLIDES === 0) return [];

        // Clone slides from the end and put them at the start
        const clonesStart = reviewScreenshots.slice(-NUM_CLONES);
        // Clone slides from the start and put them at the end
        const clonesEnd = reviewScreenshots.slice(0, NUM_CLONES);

        return [...clonesStart, ...reviewScreenshots, ...clonesEnd];
    }, [reviewScreenshots]);

    // Helper to calculate the target index after the jump
    const getTargetIndex = (index: number) => {
        let newIndex = index;
        if (index >= REAL_SLIDES + NUM_CLONES) {
            // If past the last real slide (into the end clones), jump back to the start clones
            newIndex = NUM_CLONES;
        } else if (index < NUM_CLONES) {
            // If before the first real slide (into the start clones), jump forward to the end clones
            newIndex = REAL_SLIDES + NUM_CLONES - 1; 
        }
        return newIndex;
    }

    // --- Core Animation Logic ---

    // 💡 2. Handle the Auto-Transition and Instant Jump Logic
    useEffect(() => {
        let isTransitioning = false; // Flag to prevent rapid firing during jump

        const handleTransitionEnd = () => {
            isTransitioning = false;
            // Check if we hit a cloned slide and need to jump instantly
            const targetIndex = getTargetIndex(currentIndex);
            if (targetIndex !== currentIndex) {
                // Instantly jump to the non-cloned version
                reviewRef.current!.style.transitionDuration = '0ms';
                setCurrentIndex(targetIndex);
            }
        };

        // Attach event listener for transition end to handle the instant jump
        const currentRef = reviewRef.current;
        currentRef?.addEventListener('transitionend', handleTransitionEnd);

        // Set up the auto-scroll interval
        const interval = setInterval(() => {
            if (!isTransitioning) {
                isTransitioning = true;
                // Before incrementing, make sure the smooth transition is active
                reviewRef.current!.style.transitionDuration = '700ms';
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }
        }, 5000); 

        return () => {
            clearInterval(interval);
            currentRef?.removeEventListener('transitionend', handleTransitionEnd);
        };
    }, [currentIndex, REAL_SLIDES]); // Re-run when currentIndex changes

    
    // 💡 3. Scroll/Translate Logic for Positioning
    useEffect(() => {
        if (reviewRef.current && containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            
            // The logic operates on the TOTAL_SLIDES array
            const offsetToCardLeft = currentIndex * (CARD_WIDTH + GAP_WIDTH);
            const centerShift = (containerWidth / 2) - (CARD_WIDTH / 2);
            const finalTranslateX = offsetToCardLeft - centerShift;

            reviewRef.current.style.transform = `translateX(-${finalTranslateX}px)`;
        }
    }, [currentIndex]); // Only depend on currentIndex for translation

    // --- Helper Functions for User Interaction ---
    
    const goToSlide = (newIndex: number) => {
        // Ensure smooth transition is enabled before moving
        reviewRef.current!.style.transitionDuration = '700ms'; 
        // We map the user's index (0 to REAL_SLIDES-1) to the actual array index (NUM_CLONES to REAL_SLIDES + NUM_CLONES - 1)
        setCurrentIndex(newIndex + NUM_CLONES);
    };

    // --- Component JSX ---

    return (
        <section className="py-20 bg-gray-50 text-gray-800">
            <div className="max-w-7xl mx-auto px-6">
                
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900">
                        What Our Adventurers Say
                    </h2>
                    <p className="mt-3 text-gray-600 text-lg">
                        Verified screenshots from happy travelers across the globe.
                    </p>
                </div>

                {/* 📸 Carousel Container (The fixed viewport) */}
                <div 
                    ref={containerRef} 
                    className="relative overflow-hidden mx-auto max-w-full md:max-w-6xl"
                >
                    <div 
                        ref={reviewRef} 
                        // Start with a smooth transition duration
                        style={{ transitionDuration: '700ms' }}
                        className="flex space-x-6 transition-transform ease-in-out"
                    >
                        {/* MAP OVER THE LOOPED ARRAY (Real Slides + Clones) */}
                        {loopedScreenshots.map((src, index) => (
                            <div 
                                key={index} 
                                // **w-96 h-64 for a landscape card size**
                                className="shrink-0 w-96 h-64 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden group cursor-pointer"
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src={src}
                                        alt={`Customer Review Screenshot ${index + 1}`}
                                        fill
                                        className="object-contain" 
                                    />
                                    <div className="absolute inset-0 bg-teal-600 opacity-0 group-hover:opacity-10 transition duration-300"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Navigation Dots */}
                    <div className="flex justify-center space-x-2 mt-6">
                        {/* Dots only track the REAL slides */}
                        {reviewScreenshots.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                                    // Map current slide index back to real index for dot highlighting
                                    (currentIndex - NUM_CLONES) === index ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                                aria-label={`Go to review ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomerReviews;