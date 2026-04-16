"use client";

import React from "react";
import { useRouter } from "next/navigation";

const BookNowWidget: React.FC = () => {
  const router = useRouter();

  return (
    <div className="fixed bottom-24 sm:bottom-28 right-6 z-50">
      <button
        onClick={() => router.push("/book-now")}
        aria-label="Book Now"
        className="flex items-center justify-center gap-2
          px-4 py-3
          bg-amber-500 text-white
          rounded-full shadow-lg
          hover:bg-teal-600
          transition-transform hover:scale-105
          focus:outline-none"
      >
        <span className="font-medium">
          Book a Tour
        </span>
      </button>
    </div>
  );
};

export default BookNowWidget;
