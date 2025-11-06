"use client";

import React, { useState } from "react";
// Assuming you have 'react-icons' installed for the icons
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; 

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 🚨 Add your form submission logic here (e.g., API call, email service)
    console.log("Form Submitted:", formData);
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form after submission
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900">
            Get in Touch with Us
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            We would love to hear from you! Send us a message or find us on the map.
          </p>
        </div>

        {/* Two-Column Content Layout */}
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold mb-8 text-blue-700">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-gray-300 rounded-lg p-3 focus:border-blue-500 focus:ring-blue-500 transition duration-150"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-gray-300 rounded-lg p-3 focus:border-blue-500 focus:ring-blue-500 transition duration-150"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border-gray-300 rounded-lg p-3 focus:border-blue-500 focus:ring-blue-500 transition duration-150"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border-gray-300 rounded-lg p-3 focus:border-blue-500 focus:ring-blue-500 transition duration-150"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 border border-transparent rounded-lg text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 transition duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Right Column: Details and Map */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Contact Details Card */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold mb-5 text-gray-800 border-b pb-3">
                Contact Information
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center">
                  <FaEnvelope className="mr-3 text-blue-600 shrink-0" size={20} />
                  <span className="font-medium">serendibtrails@gmail.com</span>
                </li>
                <li className="flex items-center">
                  <FaPhone className="mr-3 text-blue-600 shrink-0" size={20} />
                  <span className="font-medium">+94 11 234 5678</span>
                </li>
                <li className="flex items-start">
                  <FaMapMarkerAlt className="mr-3 mt-1.5 text-blue-600 shrink-0" size={20} />
                  <address className="not-italic font-medium leading-relaxed">
                    45 Galle Road, <br/>Colombo 03, Sri Lanka
                  </address>
                </li>
              </ul>
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">
                Our Location
              </h2>
              <div className="h-64 w-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm italic">
                
                {/* In a real app, you would embed a Google Maps or OpenStreetMap iframe here */}
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