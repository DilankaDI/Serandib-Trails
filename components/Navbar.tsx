"use client";

import React, { useState } from 'react';
import { Menu, X, Home, Info, MessageSquareQuote, PlaneTakeoff, List, Hotel, FileText } from 'lucide-react';

// ✅ Reusable Link Component (Mock for standalone React)
// Replace with: `import Link from 'next/link'` if using Next.js
interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Link: React.FC<LinkProps> = ({ href, children, className = '', onClick }) => (
  <a href={href} className={className} onClick={onClick}>
    {children}
  </a>
);

// ✅ Navigation Links
const navLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Our Packages', href: '/packages', icon: List },
  { name: 'About Us', href: '/about', icon: Info },
  { name: 'Hotels', href: '/hotels', icon: Hotel },
  { name: 'Contact Us', href: '/contact', icon: MessageSquareQuote },
  { name: 'T&C', href: '/t&c', icon: FileText },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* ✅ Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <PlaneTakeoff className="h-7 w-7 text-teal-600" />
            <span className="text-3xl font-extrabold text-gray-800 tracking-tight">
              Serendib<span className="text-teal-600">Trails</span>
            </span>
          </Link>

          {/* ✅ Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="space-x-8 text-gray-700 font-semibold">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-teal-600 hover:text-teal-600 transition duration-150 ease-in-out"
                >
                  <link.icon className="h-5 w-5 mr-1" />
                  {link.name}
                </Link>
              ))}
            </div>

            {/* ✅ CTA Button */}
            <Link
              href="/book-now"
              className="px-6 py-2 text-white bg-orange-500 rounded-full font-bold shadow-lg 
                         hover:bg-orange-600 hover:shadow-xl transition duration-300 ease-in-out 
                         transform hover:scale-105"
            >
              Book a Tour
            </Link>
          </div>

          {/* ✅ Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-150"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={32} className="text-teal-600" /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 border-t border-gray-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-800 
                         hover:bg-teal-50 hover:text-teal-600 transition duration-150"
            >
              <link.icon className="h-5 w-5 mr-3" />
              {link.name}
            </Link>
          ))}

          {/* ✅ Mobile CTA */}
          <Link
            href="/book-now"
            onClick={closeMenu}
            className="mt-2 block w-full text-center px-4 py-2 text-white bg-orange-500 rounded-md 
                       font-semibold hover:bg-orange-600 transition duration-300"
          >
            Book a Tour
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
