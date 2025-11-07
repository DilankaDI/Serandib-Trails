import React from 'react';
import { FaGlobeAsia, FaHeart, FaCertificate, FaUsers } from 'react-icons/fa';
import Image from 'next/image';

// Placeholder data for the team members
const teamMembers = [
  {
    id: 1,
    name: "Anya Silva",
    title: "Chief Experience Officer",
    image: "https://images.unsplash.com/photo-1544005313-914a42b87f08?auto=format&fit=crop&w=300&h=300&q=80",
  },
  {
    id: 2,
    name: "Ravi Kumara",
    title: "Lead Cultural Guide",
    image: "https://images.unsplash.com/photo-1531427186006-adeb01705132?auto=format&fit=crop&w=300&h=300&q=80",
  },
  {
    id: 3,
    name: "Nirosha Perera",
    title: "Head of Operations",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29329?auto=format&fit=crop&w=300&h=300&q=80",
  },
];

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        
        {/* 1. Hero Section: Story & Mission */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Crafting Unforgettable Journeys
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            At Soul Of Lanka, we are a passionate team of travel professionals and friends dedicated to showcasing the true essence of Sri Lanka. 
            Our company was founded on a shared love for exploration and a commitment to delivering exceptional travel experiences tailored to every guest.
          </p>
        </div>

        {/* 2. Main Content & Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold mb-6 text-blue-700">
              Our Journey Started With a Passion for Sri Lanka
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Founded in 2018, we began as a small group of local travel enthusiasts frustrated by generic tourist itineraries. We believe the true magic of Sri Lanka lies off the beaten path—in a local s kitchen, a remote tea estate, or a hidden temple only the locals know.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed border-l-4 border-amber-500 pl-4 py-2 italic bg-gray-50 rounded-lg">
              Our mission is simple: to share the authentic beauty and culture of Sri Lanka while ensuring our tours benefit local communities and preserve the environment.
            </p>
          </div>
          <div className="order-1 lg:order-2 relative h-96 w-full rounded-2xl shadow-2xl overflow-hidden">
             {/* Using a captivating image of Sri Lanka */}
            <Image
              src="/Images/about 1.jpg" 
              alt="Scenic view of Sri Lanka"
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        {/* 3. Why Choose Us (Value Proposition) */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
            Why Choose Soul Of Lanka?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-blue-50 border-t-4 border-blue-600 shadow-md">
              <FaGlobeAsia className="text-blue-600 mx-auto mb-4 shrink-0" size={30} />
              <h3 className="text-xl font-semibold mb-2">Personalized Tours</h3>
              <p className="text-gray-600 text-sm">We craft each tour to match your interests, pace, and preferences.Clear pricing, flexible itineraries, and no hidden charges.</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-red-50 border-t-4 border-red-600 shadow-md">
              <FaHeart className="text-red-600 mx-auto mb-4 shrink-0" size={30} />
              <h3 className="text-xl font-semibold mb-2">Friendly & Reliable Service</h3>
              <p className="text-gray-600 text-sm">We value honesty, punctuality, and a warm, friendly approach. Your comfort and happiness are our priority. </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-green-50 border-t-4 border-green-600 shadow-md">
              <FaCertificate className="text-green-600 mx-auto mb-4 shrink-0" size={30} />
              <h3 className="text-xl font-semibold mb-2">Local Expertise </h3>
              <p className="text-gray-600 text-sm">Our team knows Sri Lanka like the back of our hand. We’ll take you beyond the usual tourist spots to hidden gems.</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-purple-50 border-t-4 border-purple-600 shadow-md">
              <FaUsers className="text-purple-600 mx-auto mb-4 shrink-0" size={30} />
              <h3 className="text-xl font-semibold mb-2">Authentic Experiences</h3>
              <p className="text-gray-600 text-sm">From cultural landmarks to breathtaking landscapes, we offer genuine experiences that leave lasting memories.</p>
            </div>
          </div>
        </div>

        {/* 4. Meet the Team */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Meet Our Travel Experts
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            The faces behind the adventure—local guides, planners, and logistics pros.
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            {teamMembers.map((member) => (
              <div key={member.id} className="p-6 bg-gray-50 rounded-xl shadow-lg transition hover:shadow-xl">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-200">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
                <p className="text-blue-600 font-medium">{member.title}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;