"use client";

import React from "react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const phoneNumber = "923048856789"; 
  const message = "Hello Dental Solutions, I would like to inquire about an appointment.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-60 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-primary px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100">
        Chat with us!
        <div className="absolute top-1/2 -translate-y-1/2 left-full w-2 h-2 bg-white rotate-45 -ml-1 border-r border-t border-gray-100" />
      </div>

      {/* Button Body */}
      <div className="relative">
        {/* Pulsing Ring */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20" />
        
        <div className="relative bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-colors flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            className="w-8 h-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.123.543 4.197 1.574 6.059L0 24l6.108-1.605a11.819 11.819 0 005.937 1.587h.005c6.632 0 12.029-5.391 12.034-12.028a11.83 11.83 0 00-3.526-8.508z" />
          </svg>
        </div>
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
