"use client";

import React from "react";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { AiOutlineWechat } from "react-icons/ai";

const ContactPage = () => {
  return (
    <div className="py-16 md:py-24 bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900">
            Let&apos;s Start Your Journey
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Connect with us to plan your perfect trip or discuss a partnership.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column: Image */}
          <div className="lg:col-span-2 relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
            <Image
              src="/Images/about.jpg"
              alt="Travel journey illustration"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
          </div>

          {/* Right Column: Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold mb-5 text-gray-800 border-b pb-3">
                Contact Information
              </h2>
              <ul className="space-y-4 text-gray-700">
                {/* Email */}
                <li className="flex items-center">
                  <Mail className="mr-3 text-blue-600 shrink-0 w-5 h-5" />
                  <a
                    href="mailto:travelwithsouloflanka@gmail.com"
                    className="font-medium hover:text-blue-600 transition-colors underline"
                  >
                    Email
                  </a>
                </li>

                {/* WhatsApp */}
                <li className="flex items-center">
                  <Phone className="mr-3 text-green-600 shrink-0 w-5 h-5" />
                  <a
                    href="https://wa.me/94771303233"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-green-600 transition-colors underline"
                  >
                    WhatsApp
                  </a>
                </li>

                {/* WeChat */}
                <li className="flex items-center">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText("wxid_a00qlip8xxo22");
                      alert("WeChat ID copied!");
                    }}
                    className="flex items-center font-medium hover:text-[#09b83e] transition-colors underline"
                  >
                    <AiOutlineWechat
                      className="mr-3 text-[#09b83e] shrink-0 w-5 h-5"
                    />
                    WeChat
                  </button>
                </li>
              </ul>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">
                Our Location
              </h2>
              <div className="h-64 w-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm italic">
                <p>Map Embed Placeholder (Replace with actual map)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
