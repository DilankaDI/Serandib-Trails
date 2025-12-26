// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { trips } from "@/app/trips/trips"; // ✅ Ensure correct path

// const durationOptions = [3, 5, 7, 14, 21];
// const categoryOptions = [
//   "Adventure",
//   "Safari",
//   "Historical",
//   "Hill Side",
//   "Countryside",
//   "Beach",
//   "Relaxation",
// ];

// const FeaturedTrips: React.FC = () => {
//   const [selectedDays, setSelectedDays] = useState<number | null>(null);
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

//   const filteredTrips = trips.filter((trip) => {
//     const matchDays = selectedDays ? trip.days === selectedDays : true;
//     const matchCategory = selectedCategory
//       ? trip.categories.includes(selectedCategory)
//       : true;
//     return matchDays && matchCategory;
//   });

//   return (
//     <section className="py-20 bg-white text-gray-800">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold">Our Featured Trips</h2>
//           <p className="mt-3 text-gray-600 text-lg">
//             Discover Sri Lanka’s best experiences handpicked for you.
//           </p>
//         </div>

//         {/* 🔹 Filter Section */}
//         <div className="p-8 mb-12 bg-linear-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl shadow-md">
//           <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
//             {/* Left Title */}
//             <div>
//               <h3 className="text-2xl font-bold text-gray-800 mb-1">
//                 Find Your Perfect Trip
//               </h3>
//               <p className="text-gray-600">
//                 Filter by duration or category to explore tailored adventures.
//               </p>
//             </div>

//           {/* Filters */}
//             <div className="flex flex-wrap gap-5 justify-center md:justify-start">
//               {/* Duration Dropdown */}
//               <div className="flex flex-col">
//                 <label className="text-sm font-semibold text-teal-600 mb-2 text-center md:text-left">
//                   Trip Duration
//                 </label>
//                 <div className="relative">
//                   <select
//                     value={selectedDays ?? ""}
//                     onChange={(e) =>
//                       setSelectedDays(e.target.value ? Number(e.target.value) : null)
//                     }
//                     className="appearance-none border border-gray-300 bg-white text-gray-800 rounded-xl py-3 px-4 pr-10 shadow-sm focus:outline-none text-base transition"
//                   >
//                     <option value="">Any Duration</option>
//                     {durationOptions.map((d) => (
//                       <option key={d} value={d}>
//                         {d} days
//                       </option>
//                     ))}
//                   </select>
//                   {/* Custom Arrow */}
//                   <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
//                     <svg
//                       className="w-4 h-4 text-gray-600"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M19 9l-7 7-7-7"
//                       />
//                     </svg>
//                   </span>
//                 </div>
//               </div>

//               {/* Category Dropdown */}
//               <div className="flex flex-col">
//                 <label className="text-sm font-semibold text-teal-600 mb-2 text-center md:text-left">
//                   Trip Category
//                 </label>
//                 <div className="relative">
//                   <select
//                     value={selectedCategory ?? ""}
//                     onChange={(e) => setSelectedCategory(e.target.value || null)}
//                     className="appearance-none border border-gray-300 bg-white text-gray-800 rounded-xl py-3 px-4 pr-10 shadow-sm focus:outline-none text-base transition"
//                   >
//                     <option value="">All Interests</option>
//                     {categoryOptions.map((cat) => (
//                       <option key={cat} value={cat}>
//                         {cat}
//                       </option>
//                     ))}
//                   </select>
//                   {/* Custom Arrow */}
//                   <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
//                     <svg
//                       className="w-4 h-4 text-gray-600"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M19 9l-7 7-7-7"
//                       />
//                     </svg>
//                   </span>
//                 </div>
//               </div>

//               {/* Reset Button */}
//               {(selectedDays || selectedCategory) && (
//                 <button
//                   onClick={() => {
//                     setSelectedDays(null);
//                     setSelectedCategory(null);
//                   }}
//                   className="self-end bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition"
//                 >
//                   Reset Filters
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Trip Cards */}
//         {filteredTrips.length > 0 ? (
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
//             {filteredTrips.map((trip) => (
//               <Link
//                 key={trip.id}
//                 href={`/trips/${trip.id}`}
//                 className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden block group"
//               >
//                 <div className="relative w-full h-52">
//                   <Image
//                     src={trip.image}
//                     alt={trip.name}
//                     fill
//                     className="object-cover group-hover:scale-105 transition duration-300"
//                   />
//                   <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
//                     {trip.categories.map((cat, i) => (
//                       <span
//                         key={i}
//                         className="bg-teal-600 text-white text-sm px-3 py-1 rounded-full font-medium shadow-md"
//                       >
//                         {cat}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="p-5">
//                   <h3 className="text-xl font-semibold mb-2 group-hover:text-teal-700 transition">
//                     {trip.name}
//                   </h3>
//                   <p className="text-gray-600">
//                     Duration:{" "}
//                     <span className="font-medium">{trip.days} days</span>
//                   </p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-500 mt-10">
//             No trips match your selected filters.
//           </p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default FeaturedTrips;


"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { trips } from "@/app/trips/trips";

const FeaturedTrips: React.FC = () => {
  return (
    <section
      className="py-20 bg-white text-gray-800"
      aria-label="Featured Sri Lanka tour packages"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Featured Sri Lanka Tour Packages
          </h2>
          <p className="mt-3 text-gray-600 text-lg">
            Explore handpicked Sri Lanka travel packages including beaches,
            wildlife, culture, and adventure tours.
          </p>
        </div>

        {/* Trip Cards */}
        {trips.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {trips.map((trip) => (
              <Link
                key={trip.id}
                href={`/trips/${trip.id}`}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden block group"
                aria-label={`View ${trip.name} Sri Lanka tour package`}
              >
                <div className="relative w-full h-52">
                  <Image
                    src={trip.image}
                    alt={`${trip.name} Sri Lanka tour package`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />

                  <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
                    {trip.categories.map((cat, i) => (
                      <span
                        key={i}
                        className="bg-teal-600 text-white text-sm px-3 py-1 rounded-full font-medium shadow-md"
                      >
                        {cat} Tour
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-teal-700 transition">
                    {trip.name}
                  </h3>

                  <p className="text-gray-600">
                    Duration:{" "}
                    <span className="font-medium">
                      {trip.days} Days Sri Lanka Tour
                    </span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-10">
            Sri Lanka tour packages will be available soon.
          </p>
        )}
      </div>
    </section>
  );
};

export default FeaturedTrips;
