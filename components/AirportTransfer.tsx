"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const AirportTransfer: React.FC = () => {
  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Our Transfers</h2>
          <p className="mt-3 text-gray-600 text-lg">
            Safe, comfortable & reliable transport between the airport and your hotel in Sri Lanka.
          </p>
        </div>

        {/* Main Card */}
        <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-2">

          {/* Image Section */}
          <div className="relative w-full min-h-[360px] sm:min-h-[420px] md:aspect-3/4 overflow-hidden">
          <Image
            src="/images/airport-transfer11.png"
            alt="Airport to Hotel & Hotel to Airport Transfers"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover md:object-cover md:object-top"
          />
        </div>


          {/* Content Section */}
          <div className="p-8 flex flex-col justify-center">
            <span className="inline-block bg-teal-600 text-white text-sm px-4 py-1 rounded-full font-semibold w-fit mb-4">
              Transport Service
            </span>

            <h3 className="text-2xl font-bold mb-3">
              Airport → Hotel & Hotel → Airport
            </h3>

            <p className="text-gray-600 mb-5 leading-relaxed">
              Start and end your Sri Lanka journey stress-free. Our professional drivers will:
            </p>

            <ul className="mb-6 space-y-2 text-gray-700">
              <li>✔️ Pick you up from the airport and drop you at your hotel (island-wide)</li>
              <li>✔️ Pick you up from your hotel and drop you at the airport (island-wide)</li>
              <li>✔️ Private vehicles (Car / Van / Bus)</li>
              <li>✔️ English-speaking drivers</li>
              <li>✔️ 24/7 availability</li>
              <li>✔️ Fixed & transparent pricing</li>
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition"
              >
                Book Now
              </Link>

              <Link
                href={`https://wa.me/94771303233?text=${encodeURIComponent(
                  "Hello! Can we know more about your transport service from Airport to Hotel and Hotel to Airport?"
                )}`}
                target="_blank"
                className="border border-gray-300 hover:border-black px-6 py-3 rounded-xl font-semibold transition"
              >
                WhatsApp Us
              </Link>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AirportTransfer;
