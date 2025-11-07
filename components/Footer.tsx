import React from 'react';
import Link from 'next/link';
// You might need to install 'react-icons' for the social media icons: 
// npm install react-icons
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-blue-700 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          
          {/* 1. Brand & Description */}
          <div className="col-span-2 md:col-span-2">
            <h3 className="text-3xl font-bold text-blue-400 mb-4">
              Soul Of Lanka
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed pr-8">
              Discover the pearl of the Indian Ocean. We craft personalized, unforgettable journeys across Sri Lanka’s cultural, beach, and wildlife hotspots.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-blue-500 transition duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-blue-400 transition duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-pink-500 transition duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-600 transition duration-300">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <nav className="space-y-3 text-sm">
              <Link href="/" className="block hover:text-blue-400 transition duration-300">Home</Link>
              <Link href="/trips" className="block hover:text-blue-400 transition duration-300">Our Featured Trips</Link>
              <Link href="/about" className="block hover:text-blue-400 transition duration-300">About Us</Link>
              <Link href="/blog" className="block hover:text-blue-400 transition duration-300">Our Plans</Link>
              <Link href="/contact" className="block hover:text-blue-400 transition duration-300">Contact</Link>
            </nav>
          </div>

          {/* 3. Trip Categories (Dynamically relevant to your app) */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Popular Themes</h4>
            <nav className="space-y-3 text-sm">
              <Link href="/category/adventure" className="block hover:text-blue-400 transition duration-300">Adventure & Safari</Link>
              <Link href="/category/historical" className="block hover:text-blue-400 transition duration-300">Historical Tours</Link>
              <Link href="/category/beach" className="block hover:text-blue-400 transition duration-300">Beach Getaways</Link>
              <Link href="/category/hillside" className="block hover:text-blue-400 transition duration-300">Hill Country</Link>
              <Link href="/category/relaxation" className="block hover:text-blue-400 transition duration-300">Relaxation</Link>
            </nav>
          </div>

          {/* 4. Contact Information */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <address className="space-y-3 text-sm not-italic">
              <p className="flex items-center">
                <FaPhone className="mr-2 text-blue-400" />
                +94 11 234 5678
              </p>
              <p className="flex items-center">
                <FaEnvelope className="mr-2 text-blue-400" />
                serendibtrails@gmail.com
              </p>
              <p className="flex items-start">
                <FaMapMarkerAlt className="mr-2 mt-1 text-blue-400 shrink-0" />
                Galle Road, Kalutara North, Sri Lanka
              </p>
            </address>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom Bar (Copyright & Legal) */}
      <div className="bg-gray-800 py-4 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p className="mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} Soul Of Lanka. All rights reserved.
          </p>
          <div className="space-x-4">
            <Link href="/privacy" className="hover:text-white transition duration-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;