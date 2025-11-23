"use client";

import React from "react";
import { FaCheckCircle, FaStar, FaUserFriends } from "react-icons/fa";
import Link from "next/link";

// -----------------------------
// Table 1: Tour Pricing
// -----------------------------
const tourPackages = [
  { tour: "One Day Tour", budget: 100, gold: 130, premium: 150 },
  { tour: "3 Day Tour (3 days / 2 nights)", budget: 420, gold: 520, premium: 620 },
  { tour: "5 Day Tour (5 days / 4 nights)", budget: 520, gold: 620, premium: 720 },
  { tour: "7 Day Tour (7 days / 6 nights)", budget: 720, gold: 820, premium: 920 },
  { tour: "10 Day Tour (10 days / 9 nights)", budget: 1000, gold: 1100, premium: 1200 },
  { tour: "14 Day Tour (14 days / 13 nights)", budget: 1600, gold: 1700, premium: 1800 },
  { tour: "21 Day Tour (21 days / 20 nights)", budget: 2200, gold: 2300, premium: 2400 },
];

// -----------------------------
// Table 2: Package Features
// -----------------------------
const packagesData = [
  {
    id: 1,
    type: "Premium Package",
    color: "text-blue-600",
    hover: "hover:bg-blue-50",
    features: [
      { name: "Package Type", value: "VIP Experience" },
      { name: "Accommodation", check: true },
      { name: "Transportation", check: true },
      { name: "Meals", check: true },
      { name: "Activities & Tours", check: true },
      { name: "Guide Service", check: true },
      { name: "Travel Insurance", check: true },
      { name: "24/7 Support", check: true },
    ],
  },
  {
    id: 2,
    type: "Gold Package",
    color: "text-amber-600",
    hover: "hover:bg-amber-50",
    features: [
      { name: "Package Type", value: "Classic Journey" },
      { name: "Accommodation", check: true },
      { name: "Transportation", check: true },
      { name: "Meals", check: true },
      { name: "Activities & Tours", check: true },
      { name: "Guide Service", check: true },
      { name: "Travel Insurance", check: true },
      { name: "24/7 Support", check: true },
    ],
  },
  {
    id: 3,
    type: "Budget Package",
    color: "text-gray-600",
    hover: "hover:bg-gray-50",
    features: [
      { name: "Package Type", value: "Budget Explorer" },
      { name: "Accommodation", check: true },
      { name: "Transportation", check: true },
      { name: "Meals", check: true },
      { name: "Activities & Tours", check: true },
      { name: "Guide Service", check: true },
      { name: "Travel Insurance", check: false },
      { name: "24/7 Support", check: true },
    ],
  },
];

// -----------------------------
// FeatureRow Component
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
// PackagesPage Component
// -----------------------------
const PackagesPage: React.FC = () => {
  const featureNames = packagesData[0].features.map((f) => f.name);

  return (
    <div className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">

        {/* Main Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Find Your Perfect Adventure</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare our meticulously crafted travel packages designed to fit every budget and desire. From luxurious escapes to adventurous explorations, your journey begins here.
          </p>
        </div>

        {/* ----------------------------- */}
        {/* Table 1: Tour Pricing */}
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Tour Pricing (Per Person)</h2>
          <div className="shadow-2xl rounded-xl overflow-hidden border border-gray-300">
            <div className="overflow-x-auto w-full">
              {/* Header */}
              <div className="grid grid-cols-4 min-w-[700px] bg-teal-600 text-white font-extrabold text-xl">
                <div className="py-5 px-6 text-left">Tour Type</div>
                <div className="py-5 px-6 text-center">Premium Package</div>
                <div className="py-5 px-6 text-center">Gold Package</div>
                <div className="py-5 px-6 text-center">Budget Package</div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-gray-200">
                {tourPackages.map((pkg) => (
                  <div key={pkg.tour} className="grid grid-cols-4 min-w-[700px] bg-white">
                    <div className="py-4 px-4 sm:px-6 border-b text-gray-700">{pkg.tour}</div>
                    <div className="py-4 px-4 sm:px-6 border-b text-center text-blue-600 font-semibold">${pkg.premium}</div>
                    <div className="py-4 px-4 sm:px-6 border-b text-center text-amber-600 font-semibold">${pkg.gold}</div>
                    <div className="py-4 px-4 sm:px-6 border-b text-center text-gray-700 font-semibold ">${pkg.budget}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ----------------------------- */}
        {/* Table 2: Feature Comparison */}
        {/* ----------------------------- */}
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Other Package Details</h2>
        <div className="shadow-2xl rounded-xl overflow-hidden border border-gray-300 relative mb-20">
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
                  if (name === "Package Type") {
                    return feature?.value || "";
                  }
                  return feature?.check ?? false;
                };

                return (
                  <FeatureRow
                    key={name}
                    featureName={name}
                    isHeader={name === "Package Type" || name === "Price (per person)" || name === "Duration"}
                    platinumValue={findValue(1)}
                    goldValue={findValue(2)}
                    silverValue={findValue(3)}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <p className="text-xl text-center text-gray-600 max-w-6xl mx-auto">
          These packages represent our featured tour plans. You are free to customize or adjust any part of your trip by contacting us. You do not have to select these packages every time — we can create a plan that suits your preferences.
        </p>


        {/* Travel Style Section */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Who Are You Traveling With?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 rounded-xl border-2 border-green-200 bg-green-50 shadow-md">
              <FaUserFriends className="text-green-600 mx-auto mb-3" size={30} />
              <h4 className="text-xl font-semibold mb-2">Family</h4>
              <p className="text-sm text-gray-600">Tailored itineraries with children and extended family in mind.</p>
            </div>
            <div className="p-6 rounded-xl border-2 border-pink-200 bg-pink-50 shadow-md">
              <FaStar className="text-pink-600 mx-auto mb-3" size={30} />
              <h4 className="text-xl font-semibold mb-2">Couple</h4>
              <p className="text-sm text-gray-600">Romantic getaways and intimate experiences for two.</p>
            </div>
            <div className="p-6 rounded-xl border-2 border-purple-200 bg-purple-50 shadow-md">
              <FaUserFriends className="text-purple-600 mx-auto mb-3" size={30} />
              <h4 className="text-xl font-semibold mb-2">Group</h4>
              <p className="text-sm text-gray-600">Adventures with friends or organized, customizable tours.</p>
            </div>
            <div className="p-6 rounded-xl border-2 border-yellow-200 bg-yellow-50 shadow-md">
              <FaStar className="text-yellow-600 mx-auto mb-3" size={30} />
              <h4 className="text-xl font-semibold mb-2">Solo</h4>
              <p className="text-sm text-gray-600">Independent exploration and personal journeys with full support.</p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-block mt-10 py-3 px-8 rounded-full text-lg font-bold text-white bg-teal-600 hover:bg-teal-700 transition duration-300 shadow-lg"
          >
            Customize Your Trip
          </Link>
        </div>

      </div>
    </div>
  );
};

export default PackagesPage;
