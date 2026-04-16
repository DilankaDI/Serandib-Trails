"use client";

import React from "react";
import Link from "next/link";

const BOOKING_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdKE9AWl7_aPRy5863cOzzkHPA3N55vSC4Jk44MFjoI5Gfq4g/viewform?usp=sharing&ouid=104236744160108882063";

const BookingPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Book Your Sri Lanka Experience
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Tell us about your travel plans, preferences, and arrival details.
            Our team will create a <strong>custom tour plan</strong> specially for you
            and send it directly to your email or WhatsApp.
          </p>
        </header>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h3 className="font-bold text-lg mb-2">📝 Fill the Form</h3>
            <p className="text-sm text-gray-600">
              Share your travel dates, group size, interests, and arrival time.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h3 className="font-bold text-lg mb-2">🧭 We Plan Everything</h3>
            <p className="text-sm text-gray-600">
              We design the best route, hotels, transport, and activities for you.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h3 className="font-bold text-lg mb-2">📩 Get Your Custom Plan</h3>
            <p className="text-sm text-gray-600">
              We’ll send your personalized itinerary with pricing and details.
            </p>
          </div>
        </div>

        {/* Embedded Form */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
          <iframe
            src={BOOKING_FORM_URL}
            className="w-full h-[900px] border-0"
            loading="lazy"
            title="Booking Form"
          />
        </div>

        {/* Fallback CTA Button */}
        <div className="text-center">
          <p className="mb-3 text-gray-600 text-sm">
            If the above embedded form does not work, click the button below to open it in a new tab.
          </p>
          <Link
            href={BOOKING_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 text-lg font-bold text-white bg-orange-500 
                       rounded-full shadow-lg hover:bg-orange-600 hover:shadow-xl 
                       transition duration-300 transform hover:scale-105"
          >
            Open Booking Form
          </Link>
        </div>

      </div>
    </div>
  );
};

export default BookingPage;
