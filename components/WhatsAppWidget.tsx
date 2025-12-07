// "use client";

// import React from 'react';
// // Assuming 'react-icons' is installed, we'll use FaWhatsapp
// import { FaWhatsapp } from 'react-icons/fa';

// // 🚨 Configuration: Replace with your actual WhatsApp number and default message
// const WHATSAPP_NUMBER = "94771234567"; // Sri Lankan format (Country code + number, no '+' or spaces)
// const DEFAULT_MESSAGE = "Hello Ceylon Adventures, I'm interested in planning a trip to Sri Lanka. Can you help me?";

// const getWhatsAppLink = (number: string, message: string) => {
//     // The link uses a standard format for click-to-chat
//     const encodedMessage = encodeURIComponent(message);
//     return `https://wa.me/${+94771303233}?text=${encodedMessage}`;
// };

// const WhatsAppWidget: React.FC = () => {
//   const whatsappLink = getWhatsAppLink(WHATSAPP_NUMBER, DEFAULT_MESSAGE);

//   return (
//     // Fixed positioning ensures it stays visible regardless of scrolling
//     <div className="fixed bottom-6 right-6 z-100">
//       <a 
//         href={whatsappLink}
//         target="_blank" // Open in a new tab
//         rel="noopener noreferrer"
//         aria-label="Chat with us on WhatsApp"
//         className="
//           flex items-center justify-center 
//           w-14 h-14 sm:w-16 sm:h-16 
//           rounded-full 
//           bg-green-500 
//           text-white 
//           shadow-xl 
//           hover:bg-green-600 
//           transition-all duration-300 
//           transform hover:scale-105 
//           cursor-pointer
//           p-2
//         "
//       >
//         <FaWhatsapp className="w-8 h-8 sm:w-10 sm:h-10" />
//       </a>
//     </div>
//   );
// };

// export default WhatsAppWidget;
"use client";

import React from 'react';
// Assuming 'react-icons' is installed, we'll use FaWhatsapp
import { FaWhatsapp } from 'react-icons/fa';

// 🚨 Configuration: Replace with your actual WhatsApp number and default message
const WHATSAPP_NUMBER = "94771234567"; // Sri Lankan format (Country code + number, no '+' or spaces)
const DEFAULT_MESSAGE = "Hello Soul Of Lanka, I'm interested in planning a trip to Sri Lanka. Can you help me?";

const getWhatsAppLink = (number: string, message: string) => {
    // The link uses a standard format for click-to-chat
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${+94771303233}?text=${encodedMessage}`;
};

const WhatsAppWidget: React.FC = () => {
  const whatsappLink = getWhatsAppLink(WHATSAPP_NUMBER, DEFAULT_MESSAGE);

  return (
    // Fixed positioning ensures it stays visible regardless of scrolling
    <div className="fixed bottom-6 right-6 z-100">
      <a 
        href={whatsappLink}
        target="_blank" // Open in a new tab
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="
          flex items-center justify-center 
          w-14 h-14 sm:w-16 sm:h-16 
          rounded-full 
          bg-green-500 
          text-white 
          shadow-xl 
          hover:bg-green-600 
          transition-all duration-300 
          transform hover:scale-105 
          cursor-pointer
          p-2
        "
      >
        <FaWhatsapp className="w-8 h-8 sm:w-10 sm:h-10" />
      </a>
    </div>
  );
};

export default WhatsAppWidget;