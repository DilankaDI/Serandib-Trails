// // app/trips/[id]/page.tsx
// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import ReactMarkdown from 'react-markdown';
// import { trips, getTripById } from '../trips';
// interface TripDetailPageProps {
//   params: { id: string };
// }

// interface DaySection {
//   title: string;
//   description: string;
//   images: string[];
// }

// const parseTripDescription = (description: string): DaySection[] => {
//   const dayRegex = /🗓️ \*\*(Day \d+ – .*?)\*\*\n([\s\S]*?)(?=🗓️ \*\*Day|\Z)/g;
//   const days: DaySection[] = [];
//   let match;

//   while ((match = dayRegex.exec(description)) !== null) {
//     const title = match[1].trim();
//     const body = match[2].trim();
//     // Split images if inline markdown image ![alt](src) exists (optional)
//     const imageRegex = /!\[.*?\]\((.*?)\)/g;
//     const images: string[] = [];
//     let imgMatch;
//     while ((imgMatch = imageRegex.exec(body)) !== null) {
//       images.push(imgMatch[1]);
//     }
//     days.push({
//       title,
//       description: body.replace(/!\[.*?\]\(.*?\)/g, '').trim(),
//       images,
//     });
//   }

//   return days;
// };

// export default function TripDetailPage({ params }: TripDetailPageProps) {
//   const tripId = Number(params.id);
//   const trip = getTripById(tripId);

//   if (!trip) {
//     return (
//       <div className="text-center py-20">
//         <h1 className="text-3xl font-bold text-red-600">404 - Trip Not Found</h1>
//         <p className="mt-4 text-gray-600">
//           The requested trip itinerary does not exist.
//         </p>
//       </div>
//     );
//   }

//   // Prepare day sections for overview
//   const days: DaySection[] =
//     trip.days <= 7
//       ? parseTripDescription(trip.description)
//       : [
//           {
//             title: 'Trip Overview',
//             description: trip.description,
//             images: [],
//           },
//         ];

//   return (
//     <div className="max-w-7xl mx-auto py-12 px-6 space-y-12">
//       {/* Hero Section */}
//       <div className="relative h-96 w-full overflow-hidden group rounded-2xl shadow-xl">
//         <Image
//           src={trip.backdrop}
//           alt={trip.title}
//           fill
//           className="object-cover scale-105 transition-transform duration-700 ease-out group-hover:scale-110"
//           sizes="100vw"
//           priority
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
//         <div className="absolute inset-0 flex items-center justify-center p-10 text-center">
//           <h1
//             className="text-6xl md:text-9xl font-extrabold text-transparent bg-clip-text
//                        bg-gradient-to-b from-white/90 via-white/60 to-white/20
//                        drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]
//                        mix-blend-overlay tracking-wide select-none leading-tight"
//           >
//             {trip.title}
//           </h1>
//         </div>
//       </div>

//       <div className="grid lg:grid-cols-3 gap-10">
//         {/* Main Content */}
//         <div className="lg:col-span-2 space-y-10">
//           {days.map((day, idx) => (
//             <div key={idx} className="space-y-4">
//               <h2 className="text-2xl font-semibold">{day.title}</h2>
//               <div className="text-gray-700 prose prose-blue max-w-none">
//                   <ReactMarkdown>{day.description}</ReactMarkdown>
//               </div>

//               {day.images.length > 0 && (
//                 <div
//                   className={`grid gap-3 ${
//                     day.images.length === 1
//                       ? 'grid-cols-1'
//                       : day.images.length === 2
//                       ? 'grid-cols-2'
//                       : day.images.length === 3
//                       ? 'grid-cols-2 md:grid-cols-3'
//                       : 'grid-cols-2 md:grid-cols-4'
//                   }`}
//                 >
//                   {day.images.map((img, i) => (
//                     <div
//                       key={i}
//                       className="relative aspect-[4/3] rounded-xl overflow-hidden"
//                     >
//                       <Image
//                         src={img}
//                         alt={`${day.title} image ${i + 1}`}
//                         fill
//                         className="object-cover"
//                         sizes="(max-width: 768px) 100vw, 50vw"
//                         priority={i === 0 && idx === 0}
//                       />
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Sidebar */}
//         <aside className="lg:col-span-1 bg-gray-50 p-6 rounded-xl border border-gray-200 h-fit">
//           <h3 className="text-2xl font-bold mb-5 text-gray-800 border-b pb-3">
//             Key Facts
//           </h3>
//           <div className="space-y-4">
//             <div className="flex justify-between items-center text-lg">
//               <span className="font-semibold text-gray-600">Duration:</span>
//               <span className="font-bold text-teal-600">{trip.days} Days</span>
//             </div>
//             <div className="border-t border-gray-200 pt-4">
//               <h4 className="font-semibold text-gray-600 mb-2">Trip Style:</h4>
//               <div className="flex flex-wrap gap-2">
//                 {trip.categories.map((cat: string, index: number) => (
//                   <span
//                     key={index}
//                     className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-medium"
//                   >
//                     {cat}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </aside>
//       </div>
//     </div>
//   );
// }


import React from "react";
import Image from "next/image";
import TripDetails from "../../../components/TripDetails";
import { getTripById } from "../trips";
import Head from "next/head";

interface TripPageProps {
  // Next.js may provide `params` as a Promise in some runtime modes,
  // so accept either the resolved object or a Promise that resolves to it.
  params: { id: string } | Promise<{ id: string }>;
}

export default async function TripPage({ params }: TripPageProps) {
  const resolvedParams = await params;
  const tripId = Number(resolvedParams.id);
  const trip = getTripById(tripId);

  if (!trip) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-red-600">404 - Trip Not Found</h1>
        <p className="mt-4 text-gray-600">
          The requested trip itinerary does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-6 space-y-10">
      
    <Head>
      {/* Basic SEO */}
      <title>{trip.title} | Soul Of Lanka</title>
      <meta name="description" content={trip.description.slice(0, 160)} />

      {/* Open Graph / Social Sharing */}
      <meta property="og:title" content={trip.title} />
      <meta property="og:description" content={trip.description.slice(0, 160)} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://souloflanka.com/trips/${trip.id}`} />
      <meta property="og:image" content={trip.image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={trip.title} />
      <meta name="twitter:description" content={trip.description.slice(0, 160)} />
      <meta name="twitter:image" content={trip.image} />

      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            "name": trip.title,
            "description": trip.description.slice(0, 300),
            "image": trip.image,
            "url": `https://souloflanka.com/trips/${trip.id}`,
            "touristType": trip.categories,
            "duration": `P${trip.days}D`
          })
        }}
      />
    </Head>

      {/* Header */}
<div className="relative h-96 w-full overflow-hidden rounded-2xl">
  <Image
    src={trip.backdrop}
    alt={trip.title}
    fill
    priority
    className="object-cover scale-105 transition-transform duration-700 ease-out hover:scale-110"
  />
  <div className="absolute inset-0 bg-black/40"></div>
  <div className="absolute inset-0 flex items-center justify-center p-10 text-center">
    <h1
      className="glassy-text glassy-text--hero text-6xl md:text-9xl font-extrabold tracking-wide select-none leading-tight transition-transform duration-500 transform hover:scale-105"
      aria-label={trip.title}
    >
      {trip.title}
    </h1>
  </div>
</div>

      {/* Key Facts */}
      <aside className="bg-gray-50 p-6 rounded-xl border border-gray-200">
        <h3 className="text-2xl font-bold mb-5 text-gray-800 border-b pb-3">
          Key Facts
        </h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center text-lg">
            <span className="font-semibold text-gray-600">Duration:</span>
            <span className="font-bold text-teal-600">{trip.days} Days</span>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <h4 className="font-semibold text-gray-600 mb-2">Trip Style:</h4>
            <div className="flex flex-wrap gap-2">
              {trip.categories.map((cat, i) => (
                <span
                  key={i}
                  className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-medium"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Trip Details */}
      <TripDetails trip={trip} />
    </div>
  );
}
