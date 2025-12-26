// "use client";

// import React from "react";
// import { FaCheckCircle, FaStar, FaUserFriends } from "react-icons/fa";
// import Link from "next/link";

// // -----------------------------
// // Table 1: Tour Pricing (Updated)
// // The prices are now structured by tour duration AND vehicle type.
// // Prices below are PER PERSON for the respective package type.
// // -----------------------------
// const tourPricingByVehicle = [
//   {
//     tour: "One Day Tour",
//     car: { budget: 130, gold: 180, premium: 250 },
//     van: { budget: 160, gold: 200, premium: 300 },
//     bus: { budget: 220, gold: 300, premium: 380 },
//   },
//   {
//     tour: "3 Day Tour (3 days / 2 nights)",
//     car: { budget: 420, gold: 520, premium: 620 },
//     van: { budget: 480, gold: 560, premium: 700 },
//     bus: { budget: 520, gold: 620, premium: 780 },
//   },
//   {
//     tour: "5 Day Tour (5 days / 4 nights)",
//     car: { budget: 520, gold: 660, premium: 820 },
//     van: { budget: 560, gold: 680, premium: 840 },
//     bus: { budget: 610, gold: 780, premium: 890 },
//   },
//   {
//     tour: "7 Day Tour (7 days / 6 nights)",
//     car: { budget: 720, gold: 870, premium: 1020 },
//     van: { budget: 770, gold: 900, premium: 1070 },
//     bus: { budget: 880, gold: 960, premium: 1100 },
//   },
//   {
//     tour: "10 Day Tour (10 days / 9 nights)",
//     car: { budget: 1000, gold: 1170, premium: 1850 },
//     van: { budget: 1080, gold: 1250, premium: 1330 },
//     bus: { budget: 1170, gold: 1300, premium: 1420 },
//   },
//   {
//     tour: "14 Day Tour (14 days / 13 nights)",
//     car: { budget: 1600, gold: 1780, premium: 1850 },
//     van: { budget: 1720, gold: 1920, premium: 1970 },
//     bus: { budget: 1860, gold: 1980, premium: 2050 },
//   },
//   {
//     tour: "21 Day Tour (21 days / 20 nights)",
//     car: { budget: 2200, gold: 2360, premium: 2550 },
//     van: { budget: 2320, gold: 2440, premium: 2570 },
//     bus: { budget: 2350, gold: 2470, premium: 2630 },
//   },
// ];

// // -----------------------------
// // Table 2: Package Features (Unchanged)
// // -----------------------------
// const packagesData = [
//   {
//     id: 1,
//     type: "Premium Package",
//     color: "text-blue-600",
//     hover: "hover:bg-blue-50",
//     features: [
//       { name: "Package Type", value: "VIP Experience" },
//       { name: "Transportation", check: true },
//       { name: "Activities & Tours", check: true },
//       { name: "Guide Service", check: true },
//       { name: "Travel Insurance", check: true },
//       { name: "24/7 Support", check: true },
//       { name: "Entrance Tickets", check: true },
//       { name: "Meals", check: true },
//     ],
//   },
//   {
//     id: 2,
//     type: "Gold Package",
//     color: "text-amber-600",
//     hover: "hover:bg-amber-50",
//     features: [
//       { name: "Package Type", value: "Classic Journey" },
//       { name: "Transportation", check: true },
//       { name: "Activities & Tours", check: true },
//       { name: "Guide Service", check: true },
//       { name: "Travel Insurance", check: true },
//       { name: "24/7 Support", check: true },
//       { name: "Entrance Tickets", check: true },
//       { name: "Meals", check: false },
//     ],
//   },
//   {
//     id: 3,
//     type: "Budget Package",
//     color: "text-gray-600",
//     hover: "hover:bg-gray-50",
//     features: [
//       { name: "Package Type", value: "Budget Explorer" },
//       { name: "Transportation", check: true },
//       { name: "Activities & Tours", check: true },
//       { name: "Guide Service", check: true },
//       { name: "Travel Insurance", check: true },
//       { name: "24/7 Support", check: true },
//       { name: "Entrance Tickets", check: false },
//       { name: "Meals", check: false },
//     ],
//   },
// ];

// // -----------------------------
// // FeatureRow Component (Unchanged)
// // -----------------------------
// interface FeatureRowProps {
//   featureName: string;
//   isHeader: boolean;
//   platinumValue: string | boolean;
//   goldValue: string | boolean;
//   silverValue: string | boolean;
// }

// const FeatureRow: React.FC<FeatureRowProps> = ({
//   featureName,
//   isHeader,
//   platinumValue,
//   goldValue,
//   silverValue,
// }) => {
//   const baseClasses = "py-4 px-4 sm:px-6 border-b border-gray-200 transition duration-150";
//   const rowClasses = isHeader ? "bg-gray-100 font-semibold text-lg" : "bg-white text-gray-700";

//   const renderCellContent = (value: string | boolean) => {
//     if (typeof value === "boolean") {
//       return value ? (
//         <FaCheckCircle className="text-green-500 mx-auto" size={20} />
//       ) : (
//         <span className="text-gray-400 italic">N/A</span>
//       );
//     }
//     return value;
//   };

//   return (
//     <div className={`grid grid-cols-4 min-w-[700px] ${rowClasses}`}>
//       <div className={`${baseClasses} text-left ${isHeader ? "text-gray-800" : "text-gray-600"}`}>
//         {featureName}
//       </div>
//       <div className={`${baseClasses} text-center font-medium ${packagesData[0].color} ${isHeader ? "" : packagesData[0].hover}`}>
//         {renderCellContent(platinumValue)}
//       </div>
//       <div className={`${baseClasses} text-center font-medium ${packagesData[1].color} ${isHeader ? "" : packagesData[1].hover}`}>
//         {renderCellContent(goldValue)}
//       </div>
//       <div className={`${baseClasses} text-center font-medium ${packagesData[2].color} ${isHeader ? "" : packagesData[2].hover}`}>
//         {renderCellContent(silverValue)}
//       </div>
//     </div>
//   );
// };

// // -----------------------------
// // PricingTable Component (Updated Title Rendering)
// // -----------------------------
// interface PricingTableProps {
//   vehicleType: "car" | "van" | "bus";
//   title: string;
// }

// const PricingTable: React.FC<PricingTableProps> = ({ vehicleType, title }) => {
//   const vehicleData = tourPricingByVehicle.map((pkg) => ({
//     tour: pkg.tour,
//     premium: pkg[vehicleType].premium,
//     gold: pkg[vehicleType].gold,
//     budget: pkg[vehicleType].budget,
//   }));

//   return (
//     <div className="max-w-7xl mx-auto px-6 mb-12">
//       <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">{title}</h2>
//       <div className="shadow-2xl rounded-xl overflow-hidden border border-gray-300">
//         <div className="overflow-x-auto w-full">
//           {/* Header */}
//           <div className="grid grid-cols-4 min-w-[700px] bg-teal-600 text-white font-extrabold text-lg">
//             <div className="py-4 px-6 text-left">Tour Type</div>
//             <div className="py-4 px-6 text-center">Premium Package</div>
//             <div className="py-4 px-6 text-center">Gold Package</div>
//             <div className="py-4 px-6 text-center">Budget Package</div>
//           </div>

//           {/* Rows */}
//           <div className="divide-y divide-gray-200">
//             {vehicleData.map((pkg) => (
//               <div key={pkg.tour} className="grid grid-cols-4 min-w-[700px] bg-white hover:bg-gray-50 transition duration-150">
//                 <div className="py-4 px-4 sm:px-6 text-gray-700 font-medium">{pkg.tour}</div>
//                 <div className="py-4 px-4 sm:px-6 text-center text-blue-600 font-semibold">${pkg.premium}</div>
//                 <div className="py-4 px-4 sm:px-6 text-center text-amber-600 font-semibold">${pkg.gold}</div>
//                 <div className="py-4 px-4 sm:px-6 text-center text-gray-700 font-semibold ">${pkg.budget}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // -----------------------------
// // PackagesPage Component (Updated Table Rendering)
// // -----------------------------
// const PackagesPage: React.FC = () => {
//   const featureNames = packagesData[0].features.map((f) => f.name);

//   return (
//     <div className="bg-white text-gray-800">
//       <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">

//         {/* Main Header */}
//         <div className="text-center mb-16">
//           <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Find Your Perfect Adventure</h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Compare our meticulously crafted travel packages designed to fit every budget and desire. From luxurious escapes to adventurous explorations, your journey begins here.
//           </p>
//         </div>

//         {/* ----------------------------- */}
//         {/* Table 1: Tour Pricing (3 Tables with New Titles) */}
//         {/* ----------------------------- */}
//         <div className="mb-20">
//           <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Tour Pricing by Vehicle Type</h2>
//           <p className="text-center text-gray-500 mb-4">
//             All prices are per person and displayed in USD (United States Dollars)
//           </p>
//           <p className="text-center text-gray-500 mb-8">
//               Group = Maximum 8 Pax | Large Group = Maximum 36 Pax
//           </p>

//           <PricingTable 
//             vehicleType="car" 
//             title="Intimate Journey Pricing (Perfect for Couples/Solo Travelers)" 
//           />
//           <PricingTable 
//             vehicleType="van" 
//             title="Group Explorer Pricing (Ideal for Families & Friends)" 
//           />
//           <PricingTable 
//             vehicleType="bus" 
//             title="Large Group Adventure Pricing (Best for Organizations & Big Tours)" 
//           />
//         </div>

//         {/* ----------------------------- */}
//         {/* Table 2: Feature Comparison (Unchanged) */}
//         {/* ----------------------------- */}
//         <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Other Package Details</h2>
//         <div className="shadow-2xl rounded-xl overflow-hidden border border-gray-300 relative mb-20">
//           <div className="overflow-x-auto w-full">
//             <div className="grid grid-cols-4 min-w-[700px] bg-teal-600 text-white font-extrabold text-xl sticky left-0">
//               <div className="py-5 px-6 text-left">Feature</div>
//               <div className="py-5 px-6 text-center">Premium Package</div>
//               <div className="py-5 px-6 text-center">Gold Package</div>
//               <div className="py-5 px-6 text-center">Budget Package</div>
//             </div>

//             <div className="divide-y divide-gray-200">
//               {featureNames.map((name) => {
//                 const findValue = (pkgId: number) => {
//                   const pkg = packagesData.find((p) => p.id === pkgId);
//                   const feature = pkg?.features.find((f) => f.name === name);
//                   if (name === "Package Type") {
//                     return feature?.value || "";
//                   }
//                   return feature?.check ?? false;
//                 };

//                 return (
//                   <FeatureRow
//                     key={name}
//                     featureName={name}
//                     isHeader={name === "Package Type" || name === "Price (per person)" || name === "Duration"}
//                     platinumValue={findValue(1)}
//                     goldValue={findValue(2)}
//                     silverValue={findValue(3)}
//                   />
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         <p className="text-xl text-center text-gray-600 max-w-6xl mx-auto">
//           These packages represent our featured tour plans. You are free to customize or adjust any part of your trip by contacting us. You do not have to select these packages every time — we can create a plan that suits your preferences.
//         </p>


//         {/* Travel Style Section */}
//         <div className="text-center mt-20">
//           <h2 className="text-3xl font-bold text-gray-900 mb-10">Who Are You Traveling With?</h2>
//           <div className="grid md:grid-cols-4 gap-8">
//             <div className="p-6 rounded-xl border-2 border-green-200 bg-green-50 shadow-md">
//               <FaUserFriends className="text-green-600 mx-auto mb-3" size={30} />
//               <h4 className="text-xl font-semibold mb-2">Family</h4>
//               <p className="text-sm text-gray-600">Tailored itineraries with children and extended family in mind.</p>
//             </div>
//             <div className="p-6 rounded-xl border-2 border-pink-200 bg-pink-50 shadow-md">
//               <FaStar className="text-pink-600 mx-auto mb-3" size={30} />
//               <h4 className="text-xl font-semibold mb-2">Couple</h4>
//               <p className="text-sm text-gray-600">Romantic getaways and intimate experiences for two.</p>
//             </div>
//             <div className="p-6 rounded-xl border-2 border-purple-200 bg-purple-50 shadow-md">
//               <FaUserFriends className="text-purple-600 mx-auto mb-3" size={30} />
//               <h4 className="text-xl font-semibold mb-2">Group</h4>
//               <p className="text-sm text-gray-600">Adventures with friends or organized, customizable tours.</p>
//             </div>
//             <div className="p-6 rounded-xl border-2 border-yellow-200 bg-yellow-50 shadow-md">
//               <FaStar className="text-yellow-600 mx-auto mb-3" size={30} />
//               <h4 className="text-xl font-semibold mb-2">Solo</h4>
//               <p className="text-sm text-gray-600">Independent exploration and personal journeys with full support.</p>
//             </div>
//           </div>

//           <Link
//             href="/contact"
//             className="inline-block mt-10 py-3 px-8 rounded-full text-lg font-bold text-white bg-teal-600 hover:bg-teal-700 transition duration-300 shadow-lg"
//           >
//             Customize Your Trip
//           </Link>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default PackagesPage;



"use client";

import React from "react";
import { FaCheckCircle, FaStar, FaUserFriends } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";

const tourPricingByVehicle = [
  {
    tour: "One Day Tour",
    car: { budget: 130, gold: 180, premium: 250 },
    van: { budget: 160, gold: 200, premium: 300 },
    bus: { budget: 220, gold: 300, premium: 380 },
  },
  {
    tour: "3 Day Tour (3 days / 2 nights)",
    car: { budget: 420, gold: 520, premium: 620 },
    van: { budget: 480, gold: 560, premium: 700 },
    bus: { budget: 520, gold: 620, premium: 780 },
  },
  {
    tour: "5 Day Tour (5 days / 4 nights)",
    car: { budget: 520, gold: 660, premium: 820 },
    van: { budget: 560, gold: 680, premium: 840 },
    bus: { budget: 610, gold: 780, premium: 890 },
  },
  {
    tour: "7 Day Tour (7 days / 6 nights)",
    car: { budget: 720, gold: 870, premium: 1020 },
    van: { budget: 770, gold: 900, premium: 1070 },
    bus: { budget: 880, gold: 960, premium: 1100 },
  },
  {
    tour: "10 Day Tour (10 days / 9 nights)",
    car: { budget: 1000, gold: 1170, premium: 1850 },
    van: { budget: 1080, gold: 1250, premium: 1330 },
    bus: { budget: 1170, gold: 1300, premium: 1420 },
  },
  {
    tour: "14 Day Tour (14 days / 13 nights)",
    car: { budget: 1600, gold: 1780, premium: 1850 },
    van: { budget: 1720, gold: 1920, premium: 1970 },
    bus: { budget: 1860, gold: 1980, premium: 2050 },
  },
  {
    tour: "21 Day Tour (21 days / 20 nights)",
    car: { budget: 2200, gold: 2360, premium: 2550 },
    van: { budget: 2320, gold: 2440, premium: 2570 },
    bus: { budget: 2350, gold: 2470, premium: 2630 },
  },
];

// -----------------------------
// Table 2: Package Features (Unchanged)
// -----------------------------
const packagesData = [
  {
    id: 1,
    type: "Premium Package",
    color: "text-blue-600",
    hover: "hover:bg-blue-50",
    features: [
      { name: "Package Type", value: "VIP Experience" },
      { name: "Transportation", check: true },
      { name: "Activities & Tours", check: true },
      { name: "Guide Service", check: true },
      { name: "Travel Insurance", check: true },
      { name: "24/7 Support", check: true },
      { name: "Entrance Tickets", check: true },
      { name: "Meals", check: true },
    ],
  },
  {
    id: 2,
    type: "Gold Package",
    color: "text-amber-600",
    hover: "hover:bg-amber-50",
    features: [
      { name: "Package Type", value: "Classic Journey" },
      { name: "Transportation", check: true },
      { name: "Activities & Tours", check: true },
      { name: "Guide Service", check: true },
      { name: "Travel Insurance", check: true },
      { name: "24/7 Support", check: true },
      { name: "Entrance Tickets", check: true },
      { name: "Meals", check: false },
    ],
  },
  {
    id: 3,
    type: "Budget Package",
    color: "text-gray-600",
    hover: "hover:bg-gray-50",
    features: [
      { name: "Package Type", value: "Budget Explorer" },
      { name: "Transportation", check: true },
      { name: "Activities & Tours", check: true },
      { name: "Guide Service", check: true },
      { name: "Travel Insurance", check: true },
      { name: "24/7 Support", check: true },
      { name: "Entrance Tickets", check: false },
      { name: "Meals", check: false },
    ],
  },
];

// -----------------------------
// FeatureRow Component (Unchanged)
// -----------------------------
interface FeatureRowProps {
  featureName: string;
  isHeader: boolean;
  platinumValue: string | boolean;
  goldValue: string | boolean;
  silverValue: string | boolean;
}

const FeatureRow: React.FC<FeatureRowProps> = ({
  featureName,
  isHeader,
  platinumValue,
  goldValue,
  silverValue,
}) => {
  const baseClasses = "py-4 px-4 sm:px-6 border-b border-gray-200 transition duration-150";
  const rowClasses = isHeader ? "bg-gray-100 font-semibold text-lg" : "bg-white text-gray-700";

  const renderCellContent = (value: string | boolean) => {
    if (typeof value === "boolean") {
      return value ? (
        <FaCheckCircle className="text-green-500 mx-auto" size={20} />
      ) : (
        <span className="text-gray-400 italic">N/A</span>
      );
    }
    return value;
  };

  return (
    <div className={`grid grid-cols-4 min-w-[700px] ${rowClasses}`}>
      <div className={`${baseClasses} text-left ${isHeader ? "text-gray-800" : "text-gray-600"}`}>
        {featureName}
      </div>
      <div className={`${baseClasses} text-center font-medium ${packagesData[0].color} ${isHeader ? "" : packagesData[0].hover}`}>
        {renderCellContent(platinumValue)}
      </div>
      <div className={`${baseClasses} text-center font-medium ${packagesData[1].color} ${isHeader ? "" : packagesData[1].hover}`}>
        {renderCellContent(goldValue)}
      </div>
      <div className={`${baseClasses} text-center font-medium ${packagesData[2].color} ${isHeader ? "" : packagesData[2].hover}`}>
        {renderCellContent(silverValue)}
      </div>
    </div>
  );
};

// -----------------------------
// PricingTable Component (Updated Title Rendering)
// -----------------------------
interface PricingTableProps {
  vehicleType: "car" | "van" | "bus";
  title: string;
}

const PricingTable: React.FC<PricingTableProps> = ({ vehicleType, title }) => {
  const vehicleData = tourPricingByVehicle.map((pkg) => ({
    tour: pkg.tour,
    premium: pkg[vehicleType].premium,
    gold: pkg[vehicleType].gold,
    budget: pkg[vehicleType].budget,
  }));

  return (
    <div className="max-w-7xl mx-auto px-6 mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">{title}</h2>
      <div className="shadow-2xl rounded-xl overflow-hidden border border-gray-300">
        <div className="overflow-x-auto w-full">
          {/* Header */}
          <div className="grid grid-cols-4 min-w-[700px] bg-teal-600 text-white font-extrabold text-lg">
            <div className="py-4 px-6 text-left">Tour Type</div>
            <div className="py-4 px-6 text-center">Premium Package</div>
            <div className="py-4 px-6 text-center">Gold Package</div>
            <div className="py-4 px-6 text-center">Budget Package</div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-gray-200">
            {vehicleData.map((pkg) => (
              <div key={pkg.tour} className="grid grid-cols-4 min-w-[700px] bg-white hover:bg-gray-50 transition duration-150">
                <div className="py-4 px-4 sm:px-6 text-gray-700 font-medium">{pkg.tour}</div>
                <div className="py-4 px-4 sm:px-6 text-center text-blue-600 font-semibold">${pkg.premium}</div>
                <div className="py-4 px-4 sm:px-6 text-center text-amber-600 font-semibold">${pkg.gold}</div>
                <div className="py-4 px-4 sm:px-6 text-center text-gray-700 font-semibold ">${pkg.budget}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// -----------------------------
// PackagesPage Component (Updated Table Rendering)
// -----------------------------
const PackagesPage: React.FC = () => {
  const featureNames = packagesData[0].features.map((f) => f.name);

   // -----------------------------
  // JSON-LD Structured Data
  // -----------------------------
   const structuredData = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Soul Of Lanka",
  "url": "https://souloflanka.com/packages",
  "description": "Explore our Sri Lanka travel packages. Compare Premium, Gold, and Budget options including duration, price, and features.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Sri Lanka Tour Packages",
    "itemListElement": tourPricingByVehicle.map((tour) => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": tour.tour,
        "description": `Tour Type: ${tour.tour}. Available with Premium, Gold, and Budget packages across Car, Van, and Bus.`,
      },
      "offers": [
        {
          "@type": "Offer",
          "price": tour.car.premium,
          "priceCurrency": "USD",
          "url": "https://souloflanka.com/packages"
        },
        {
          "@type": "Offer",
          "price": tour.car.gold,
          "priceCurrency": "USD",
          "url": "https://souloflanka.com/packages"
        },
        {
          "@type": "Offer",
          "price": tour.car.budget,
          "priceCurrency": "USD",
          "url": "https://souloflanka.com/packages"
        },
        {
          "@type": "Offer",
          "price": tour.van.premium,
          "priceCurrency": "USD",
          "url": "https://souloflanka.com/packages"
        },
        {
          "@type": "Offer",
          "price": tour.van.gold,
          "priceCurrency": "USD",
          "url": "https://souloflanka.com/packages"
        },
        {
          "@type": "Offer",
          "price": tour.van.budget,
          "priceCurrency": "USD",
          "url": "https://souloflanka.com/packages"
        },
        {
          "@type": "Offer",
          "price": tour.bus.premium,
          "priceCurrency": "USD",
          "url": "https://souloflanka.com/packages"
        },
        {
          "@type": "Offer",
          "price": tour.bus.gold,
          "priceCurrency": "USD",
          "url": "https://souloflanka.com/packages"
        },
        {
          "@type": "Offer",
          "price": tour.bus.budget,
          "priceCurrency": "USD",
          "url": "https://souloflanka.com/packages"
        }
      ]
    }))
  }
};



  return (
    <div className="bg-white text-gray-800">
      <Head>
        <title>Sri Lanka Tour Packages | Premium, Gold & Budget</title>
        <meta
          name="description"
          content="Compare Sri Lanka travel packages. Premium, Gold, and Budget tours including duration, price, and features. Customize your trip now."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* Main Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Explore Sri Lanka Tour Packages
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare our meticulously crafted travel packages to fit every budget and desire. From luxurious escapes to adventurous explorations, your journey in Sri Lanka begins here.
          </p>
        </header>

        {/* Pricing Tables */}
        <section className="mb-20" aria-labelledby="tour-pricing">
          <h2 id="tour-pricing" className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Tour Pricing by Vehicle Type
          </h2>
          <p className="text-center text-gray-500 mb-4">
            Prices are per person in USD (United States Dollars)
          </p>
          <p className="text-center text-gray-500 mb-8">
            Group = Maximum 8 Pax | Large Group = Maximum 36 Pax
          </p>

          <PricingTable vehicleType="car" title="Intimate Journey Pricing (Couples/Solo Travelers)" />
          <PricingTable vehicleType="van" title="Group Explorer Pricing (Families & Friends)" />
          <PricingTable vehicleType="bus" title="Large Group Adventure Pricing (Organizations & Big Tours)" />
        </section>

        {/* Package Features */}
        <section className="mb-20" aria-labelledby="package-features">
          <h2 id="package-features" className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Package Features & Comparison
          </h2>

          <div className="shadow-2xl rounded-xl overflow-hidden border border-gray-300 relative">
            <div className="overflow-x-auto w-full">
              <div className="grid grid-cols-4 min-w-[700px] bg-teal-600 text-white font-extrabold text-xl sticky left-0">
                <div className="py-5 px-6 text-left">Feature</div>
                <div className="py-5 px-6 text-center">Premium Package</div>
                <div className="py-5 px-6 text-center">Gold Package</div>
                <div className="py-5 px-6 text-center">Budget Package</div>
              </div>

              <div className="divide-y divide-gray-200">
                {featureNames.map((name) => {
                  const findValue = (pkgId: number) => {
                    const pkg = packagesData.find((p) => p.id === pkgId);
                    const feature = pkg?.features.find((f) => f.name === name);
                    if (name === "Package Type") return feature?.value || "";
                    return feature?.check ?? false;
                  };

                  return (
                    <FeatureRow
                      key={name}
                      featureName={name}
                      isHeader={name === "Package Type"}
                      platinumValue={findValue(1)}
                      goldValue={findValue(2)}
                      silverValue={findValue(3)}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <p className="text-xl text-center text-gray-600 max-w-6xl mx-auto mt-6">
            These packages represent our featured tour plans. Customize or adjust any part of your trip by contacting us — we can create a plan tailored to your preferences.
          </p>
        </section>

        {/* Travel Style / CTA */}
        <section className="text-center mt-20" aria-labelledby="travel-style">
          <h2 id="travel-style" className="text-3xl font-bold text-gray-900 mb-10">
            Choose Your Travel Style
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 rounded-xl border-2 border-green-200 bg-green-50 shadow-md">
              <FaUserFriends className="text-green-600 mx-auto mb-3" size={30} />
              <h4 className="text-xl font-semibold mb-2">Family</h4>
              <p className="text-sm text-gray-600">Tailored itineraries for children and extended family.</p>
            </div>
            <div className="p-6 rounded-xl border-2 border-pink-200 bg-pink-50 shadow-md">
              <FaStar className="text-pink-600 mx-auto mb-3" size={30} />
              <h4 className="text-xl font-semibold mb-2">Couple</h4>
              <p className="text-sm text-gray-600">Romantic getaways and intimate experiences for two.</p>
            </div>
            <div className="p-6 rounded-xl border-2 border-purple-200 bg-purple-50 shadow-md">
              <FaUserFriends className="text-purple-600 mx-auto mb-3" size={30} />
              <h4 className="text-xl font-semibold mb-2">Group</h4>
              <p className="text-sm text-gray-600">Adventures with friends or organized tours.</p>
            </div>
            <div className="p-6 rounded-xl border-2 border-yellow-200 bg-yellow-50 shadow-md">
              <FaStar className="text-yellow-600 mx-auto mb-3" size={30} />
              <h4 className="text-xl font-semibold mb-2">Solo</h4>
              <p className="text-sm text-gray-600">Independent exploration with full support.</p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-block mt-10 py-3 px-8 rounded-full text-lg font-bold text-white bg-teal-600 hover:bg-teal-700 transition duration-300 shadow-lg"
          >
            Customize Your Trip
          </Link>
        </section>
      </div>
    </div>
  );
};


export default PackagesPage;