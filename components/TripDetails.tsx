// 'use client'
// import Image from "next/image"

// interface DaySection {
//   title: string
//   description: string
//   images: string[]
// }

// const days: DaySection[] = [
//   {
//     title: "Day 1 – Arrival & Hill Country Escape",
//     description:
//       "Start your adventure among misty mountains. Enjoy a scenic train ride and settle into the lush greenery of the hill country.",
//     images: ["/Images/ella.jpg", "/Images/ella.jpg"],
//   },
//   {
//     title: "Day 2 – Tea Trails & Waterfalls",
//     description:
//       "Walk through endless tea gardens, meet local pickers, and chase hidden waterfalls nearby.",
//     images: ["/Images/ella.jpg"],
//   },
//   {
//     title: "Day 3 – Coastal Journey",
//     description:
//       "Head down south to golden beaches and historic forts. Chill, surf, or grab a fresh coconut under the palms.",
//     images: ["/Images/ella.jpg", "/Images/ella.jpg", "/Images/ella.jpg"],
//   },
// ]

// export default function TripOverview() {
//   return (
//     <div className="space-y-10">
//       <h2 className="text-2xl font-semibold mb-4">Trip Overview</h2>

//       {days.map((day, index) => (
//         <div key={index} className="space-y-4">
//           <h3 className="text-xl font-medium">{day.title}</h3>
//           <p className="text-gray-700">{day.description}</p>

//           {/* Image Collage */}
//           <div
//             className={`grid gap-3 sm:grid-cols-1 ${
//               day.images.length === 1
//                 ? "grid-cols-1"
//                 : day.images.length === 2
//                 ? "grid-cols-2"
//                 : day.images.length === 3
//                 ? "grid-cols-2 md:grid-cols-3"
//                 : "grid-cols-2 md:grid-cols-4"
//             }`}
//           >
//             {day.images.map((img, i) => (
//               <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden">
//                 <Image
//                   src={img}
//                   alt={`${day.title} image ${i + 1}`}
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 768px) 100vw, 50vw"
//                   priority={index === 0 && i === 0} 
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }


'use client';
import React from "react";
import Image from "next/image";
import { Trip } from "../app/trips/trips";

interface DayDetail {
  title: string;
  description: string;
  images: string[];
}

interface ParsedDay {
  title: string;
  description: string;
}

interface TripDetailsProps {
  trip: Trip;
}

const TripDetails: React.FC<TripDetailsProps> = ({ trip }) => {
  // Small helper to clean simple markdown-like markers for better readability
  const cleanMarkdownText = (text: string) => {
    if (!text) return "";
    let s = text;
    // Remove bold and italic markers
    s = s.replace(/\*\*([\s\S]*?)\*\*/g, "$1");
    s = s.replace(/\*([\s\S]*?)\*/g, "$1");
    // Replace markdown list markers `- ` with a nicer bullet
    s = s.replace(/^\s*-\s+/gm, "• ");
    // Remove inline code ticks
    s = s.replace(/`+/g, "");
    // Collapse multiple blank lines
    s = s.replace(/\n{3,}/g, "\n\n");
    // Trim each line and overall
    s = s
      .split('\n')
      .map((l) => l.trim())
      .filter((l) => l !== "")
      .join('\n\n');
    return s.trim();
  };
  // Guard gallery and parse trip.description into day blocks (assume 🗓️ marks a day)
  const gallery = trip.gallery ?? [];

  const dayBlocks: ParsedDay[] = trip.description
    ? trip.description
        .split("🗓️")
        .slice(1)
        .map((block: string, i: number): ParsedDay => {
          const lines = block
            .split("\n")
            .map((l) => l.trim())
            .filter(Boolean);
          const rawTitle = lines[0] ?? `Day ${i + 1}`;
          const descLines = lines.slice(1);
          return {
            title: cleanMarkdownText(rawTitle),
            description: cleanMarkdownText(descLines.join("\n")),
          };
        })
    : [];

  // Assign up to 3 images per day from gallery
  const dayDetails: DayDetail[] = dayBlocks.map((day: ParsedDay, i: number) => ({
    ...day,
    images: gallery.slice(i * 3, i * 3 + 3),
  }));

  return (
    <div className="space-y-10">
      {dayDetails.map((day: DayDetail, index: number) => (
        <div key={index} className="space-y-4">
          <h3 className="text-xl font-semibold">{day.title}</h3>
          <p className="text-gray-700 whitespace-pre-line">{day.description}</p>

          <div
            // Default to a single column on small screens, expand on larger breakpoints
            className={`grid gap-3 ${
              day.images.length === 1
                ? "grid-cols-1"
                : day.images.length === 2
                ? "grid-cols-1 sm:grid-cols-2"
                : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
            }`}
          >
            {day.images.map((img: string, idx: number) => (
              <div
                key={idx}
                className="relative w-full aspect-4/3 rounded-xl overflow-hidden"
              >
                <Image
                  src={img}
                  alt={`${day.title} image ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={idx === 0}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TripDetails;
