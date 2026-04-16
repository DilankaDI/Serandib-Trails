// import React from 'react';

// const TermsAndConditionsPage: React.FC = () => {
//   return (
//     <div className="bg-gray-50 text-gray-800">
//       <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        
//         {/* Header */}
//         <header className="mb-10 text-center">
//           <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-3">
//             Terms & Conditions
//           </h1>
//           <p className="text-sm text-gray-500">
//             Last Updated: November 6, 2025
//           </p>
//         </header>

//         {/* Content Body - Responsive Text Block */}
//         <div className="prose prose-lg max-w-none text-justify space-y-6">
//           <p>
//             Welcome to Soul Of Lanka. By booking a trip, package, or accommodation service with us, you agree to be bound by the following terms and conditions. Please read them carefully.
//           </p>

//           {/* Important Notice for All Guests */}
//           <section className="bg-yellow-100 border-l-4 border-yellow-500 p-5 rounded-md">
//             <h2 className="text-2xl font-bold text-gray-900 mb-3">
//               Important Notice for All Guests
//             </h2>
//             <p>
//               To ensure a smooth and well-coordinated experience, we kindly request all guests to provide their arrival time at the airport when making a booking.
//               Your arrival details help us arrange hotel check-in times and plan your itinerary without delays or inconvenience.
//             </p>
//           </section>

//           {/* 1. Booking and Confirmation */}
//           <section>
//             <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Booking and Confirmation</h2>
//             <ul className="list-disc ml-6 space-y-3">
//               <li>All bookings are subject to availability and acceptance by Soul Of Lanka.</li>
//               <li>A booking is considered confirmed only upon receipt of the required deposit or full payment (as specified in the package details) and issuance of a written confirmation email by Soul Of Lanka.</li>
//               <li>The client is responsible for ensuring all personal details, passport information, dates, and package selections in the confirmation are accurate.</li>
//             </ul>
//           </section>

//           {/* 2. Payment and Pricing */}
//           <section>
//             <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Payment and Pricing</h2>
//             <ul className="list-disc ml-6 space-y-3">
//               <li>The price of your tour package includes only those items specified in the itinerary (e.g., accommodation, transportation, specific meals, and activity entrance fees).</li>
//               <li>A non-refundable deposit (typically 30% of the total cost) is required at the time of booking.</li>
//               <li>The remaining balance is due at least 45 days prior to the travel start date. Failure to pay the balance by the due date may result in cancellation of the booking and forfeiture of the deposit.</li>
//               <li>Prices are subject to change without notice due to fluctuations in currency exchange rates, taxes, and supplier costs, although we will honor confirmed prices upon receipt of the final payment.</li>
//             </ul>
//           </section>

//           {/* 3. Cancellation and Refunds by Client */}
//           <section>
//             <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Cancellation and Refunds by Client</h2>
//             <p className="mb-3">
//               All cancellations must be received in writing (via email). The effective date of cancellation is the date the written notification is received by Soul Of Lanka.
//             </p>
//             <ul className="list-disc ml-6 space-y-3">
//               <li><strong>45+ Days Before Travel:</strong> Forfeiture of the non-refundable deposit only.</li>
//               <li><strong>30–44 Days Before Travel:</strong> Forfeiture of 50% of the total trip cost.</li>
//               <li><strong>0–29 Days Before Travel:</strong> Forfeiture of 100% of the total trip cost (no refund).</li>
//               <li>No refunds will be provided for any unused portions of the tour, including voluntary absence from activities or early departure.</li>
//             </ul>
//           </section>

//           {/* 4. Changes and Amendments */}
//           <section>
//             <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Changes and Amendments</h2>
//             <ul className="list-disc ml-6 space-y-3">
//               <li>Any requested changes to a confirmed itinerary are subject to an administrative fee of USD $50 per change, plus any additional costs incurred by our suppliers (hotels, transport, etc.).</li>
//               <li>Changes are not guaranteed and are subject to availability.</li>
//               <li>If Soul Of Lanka must make a significant change to the booking, we will inform you as soon as possible and offer comparable alternative arrangements or a full refund.</li>
//             </ul>
//           </section>

//           {/* 5. Liability and Responsibility */}
//           <section>
//             <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Liability and Responsibility</h2>
//             <ul className="list-disc ml-6 space-y-3">
//               <li>Soul Of Lanka acts solely as an agent for various third-party suppliers (hotels, transportation, activity providers). We accept no liability for any loss, damage, injury, delay, or irregularity which may occur due to the act or omission of any such third-party provider.</li>
//               <li>We recommend and require that all clients purchase comprehensive travel insurance covering cancellation, medical emergencies, and loss of property.</li>
//             </ul>
//           </section>

//           {/* 6. Traveler Health and Accessibility */}
//           <section>
//             <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Traveler Health and Accessibility</h2>
//             <ul className="list-disc ml-6 space-y-3">
//               <li><strong>Special Needs Disclosure:</strong> The client must inform Soul Of Lanka at the time of booking if any person in their party has special needs, medical conditions, or requires supportive items such as a wheelchair, special seating, or medical equipment.</li>
//               <li>This information is essential for us to arrange appropriate accommodations and transportation to ensure comfort and safety throughout the trip. Failure to disclose this information may result in our inability to provide necessary support during the tour.</li>
//             </ul>
//           </section>

//           {/* 7. Governing Law */}
//           <section>
//             <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Governing Law</h2>
//             <p>
//               These terms and conditions are governed by and construed in accordance with the laws of the Democratic Socialist Republic of Sri Lanka. Any legal action or proceeding related to the services provided shall be brought exclusively in the courts located in Colombo, Sri Lanka.
//             </p>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TermsAndConditionsPage;


import React from 'react';

const TermsAndConditionsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-3">
            Terms & Conditions
          </h1>
          <p className="text-sm text-gray-500">
            Last Updated: November 6, 2025
          </p>
        </header>

        {/* Content Body - Responsive Text Block */}
        <div className="prose prose-lg max-w-none text-justify space-y-6">
          <p>
            Welcome to Soul Of Lanka. By booking a trip, package, or accommodation service with us, you agree to be bound by the following terms and conditions. Please read them carefully.
          </p>

          {/* Important Notice for All Guests */}
          <section className="bg-yellow-100 border-l-4 border-yellow-500 p-5 rounded-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Important Notice for All Guests
            </h2>
            <p>
              To ensure a smooth and well-coordinated experience, we kindly request all guests to provide their arrival time at the airport when making a booking.
              Your arrival details help us arrange hotel check-in times and plan your itinerary without delays or inconvenience.
            </p>
          </section>

          {/* 1. Booking and Confirmation */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Booking and Confirmation</h2>
            <ul className="list-disc ml-6 space-y-3">
              <li>All bookings are subject to availability and acceptance by Soul Of Lanka.</li>
              <li>A booking is considered confirmed only upon receipt of the required deposit or full payment (as specified in the package details) and issuance of a written confirmation email by Soul Of Lanka.</li>
              <li>The client is responsible for ensuring all personal details, passport information, dates, and package selections in the confirmation are accurate.</li>
            </ul>
          </section>

          {/* 2. Payment and Pricing */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Payment and Pricing</h2>
            <ul className="list-disc ml-6 space-y-3">
              <li>The price of your tour package includes only those items specified in the itinerary (e.g., entrance fees).</li>
              <li>A non-refundable deposit (typically 30% of the total cost) is required at the time of booking.</li>
              <li>The remaining balance is due at least 45 days prior to the travel start date. Failure to pay the balance by the due date may result in cancellation of the booking and forfeiture of the deposit.</li>
              <li>Prices are subject to change without notice due to fluctuations in currency exchange rates, taxes, and supplier costs, although we will honor confirmed prices upon receipt of the final payment.</li>
              <li><strong>Distance Limit Per Tour:</strong> For 1-Day Tours, the included travel distance is up to 200 km. If the client wishes to travel beyond the included distance, an additional charge of USD $0.2 per kilometer will apply. Similar distance limits may apply for multi-day tours, as specified in the itinerary.</li>
            </ul>
          </section>

          {/* 3. Cancellation and Refunds by Client */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Cancellation and Refunds by Client</h2>
            <p className="mb-3">
              All cancellations must be received in writing (via email). The effective date of cancellation is the date the written notification is received by Soul Of Lanka.
            </p>
            <ul className="list-disc ml-6 space-y-3">
              <li><strong>45+ Days Before Travel:</strong> Forfeiture of the non-refundable deposit only.</li>
              <li><strong>30-44 Days Before Travel:</strong> Forfeiture of 50% of the total trip cost.</li>
              <li><strong>0-29 Days Before Travel:</strong> Forfeiture of 100% of the total trip cost (no refund).</li>
              <li>No refunds will be provided for any unused portions of the tour, including voluntary absence from activities or early departure.</li>
            </ul>
          </section>

          {/* 4. Changes and Amendments */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Changes and Amendments</h2>
            <ul className="list-disc ml-6 space-y-3">
              <li>Any requested changes to a confirmed itinerary are subject to an administrative fee of USD $50 per change, plus any additional costs incurred by our suppliers (hotels, transport, etc.).</li>
              <li>Changes are not guaranteed and are subject to availability.</li>
              <li>If Soul Of Lanka must make a significant change to the booking, we will inform you as soon as possible and offer comparable alternative arrangements or a full refund.</li>
            </ul>
          </section>

          {/* 5. Liability and Responsibility */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Liability and Responsibility</h2>
            <ul className="list-disc ml-6 space-y-3">
              <li>Soul Of Lanka acts solely as an agent for various third-party suppliers (hotels, transportation, activity providers). We accept no liability for any loss, damage, injury, delay, or irregularity which may occur due to the act or omission of any such third-party provider.</li>
              <li>We recommend and require that all clients purchase comprehensive travel insurance covering cancellation, medical emergencies, and loss of property.</li>
            </ul>
          </section>

          {/* 6. Traveler Health and Accessibility */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Traveler Health and Accessibility</h2>
            <ul className="list-disc ml-6 space-y-3">
              <li><strong>Special Needs Disclosure:</strong> The client must inform Soul Of Lanka at the time of booking if any person in their party has special needs, medical conditions, or requires supportive items such as a wheelchair, special seating, or medical equipment.</li>
              <li>This information is essential for us to arrange appropriate accommodations and transportation to ensure comfort and safety throughout the trip. Failure to disclose this information may result in our inability to provide necessary support during the tour.</li>
            </ul>
          </section>

          {/* 7. Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the Democratic Socialist Republic of Sri Lanka. Any legal action or proceeding related to the services provided shall be brought exclusively in the courts located in Colombo, Sri Lanka.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
