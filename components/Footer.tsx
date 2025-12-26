import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTiktok, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineWechat } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Soul Of Lanka",
    "url": "https://souloflanka.com",
    "description":
      "Soul Of Lanka is a Sri Lanka-based travel agency offering customized tours, cultural experiences, beach holidays, and wildlife safaris.",
    "telephone": "+94 77 130 3233",
    "email": "travelwithsouloflanka@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No.256, Galle Road, Kalutara North",
      "addressLocality": "Kalutara",
      "addressCountry": "LK",
    },
    "sameAs": [
      "https://www.facebook.com/share/192bVJCkCm/",
      "https://www.instagram.com/travelwithsouloflanka",
      "https://www.tiktok.com/@soul.of.lanka6",
      "https://x.com/travelwithsouloflanka"
    ],
  };
  
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-teal-600 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12 text-center md:text-left">
          
          {/* 1. Brand & Description */}
          <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start">
            <h3 className="text-3xl font-bold text-teal-500 mb-4">Soul Of Lanka</h3>
            <p className="text-gray-400 text-sm leading-relaxed pr-0 md:pr-8">
              Discover the pearl of the Indian Ocean. We craft personalized, unforgettable journeys across Sri Lanka’s cultural, beach, and wildlife hotspots.
            </p>
            <div className="flex space-x-4 mt-6 justify-center md:justify-start">
              <a href="https://www.facebook.com/share/192bVJCkCm/" aria-label="Facebook" className="text-gray-400 hover:text-blue-500 transition duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="https://x.com/travelwithsouloflanka" className="text-gray-400 hover:text-black transition">
                <FaXTwitter size={24} />
              </a>
              <a href="https://www.instagram.com/travelwithsouloflanka?igsh=NTl5aDZlaTcycnBt" aria-label="Instagram" className="text-gray-400 hover:text-pink-500 transition duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.tiktok.com/@soul.of.lanka6?_r=1&_t=ZS-91HYaB8yjGq" aria-label="TikTok" className="text-gray-400 hover:text-gray-600 transition duration-300">
                <FaTiktok size={24} />
              </a>
              <a
                href="mailto:travelwithsouloflanka@gmail.com"
                aria-label="Email"
                className="text-gray-400 hover:text-red-600 transition duration-300"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <nav className="space-y-3 text-sm">
              <Link href="/" className="block hover:text-blue-400 transition duration-300">Home</Link>
              <Link href="/packages" className="block hover:text-blue-400 transition duration-300">Our Packages</Link>
              <Link href="/about" className="block hover:text-blue-400 transition duration-300">About Us</Link>
              <Link href="/contact" className="block hover:text-blue-400 transition duration-300">Contact</Link>
              <Link href="/t&c" className="block hover:text-blue-400 transition duration-300">Terms and Conditions</Link>
            </nav>
          </div>

          {/* 3. Popular Trips */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold text-white mb-4">Popular Trips</h4>
            <nav className="space-y-3 text-sm text-gray-300">
              <div>Adventure & Safari</div>
              <div>Historical Tours</div>
              <div>Beach Getaways</div>
              <div>Hill Country</div>
              <div>Relaxation</div>
            </nav>
          </div>

          {/* 4. Contact Information */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <address className="space-y-3 text-sm not-italic">
              <p className="flex items-center justify-center md:justify-start">
                <FaPhone className="mr-2 text-blue-400" />
                +94 77 130 3233
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <FaEnvelope className="mr-2 text-blue-400" />
                travelwithsouloflanka@gmail.com
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <AiOutlineWechat className="mr-2 text-blue-400" />
                wxid_a00qlip8xxo22
              </p>
              <p className="flex items-start justify-center md:justify-start">
                <FaMapMarkerAlt className="mr-2 mt-1 text-blue-400 shrink-0" />
                No.256, Galle Road, Kalutara North, Sri Lanka
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="bg-gray-800 py-4 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-center md:justify-between items-center text-xs text-gray-500 text-center md:text-left">
          <p className="mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} Soul Of Lanka. All rights reserved.
          </p>
        </div>
      </div>

           {/* ✅ SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </footer>
  );
};

export default Footer;