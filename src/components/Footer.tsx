"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Link as LinkIcon, MessageSquare, Phone, Mail, MapPin, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-primary text-white pt-24 pb-12 px-6 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {/* Brand Info */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                className="w-8 h-8 text-white" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M7 5C7 3.34315 8.34315 2 10 2H14C15.6569 2 17 3.34315 17 5V7C17 8.65685 15.6569 10 14 10H10C8.34315 10 7 8.65685 7 7V5Z" />
                <path d="M7 11C7 15.4183 10.5817 19 15 19H17" strokeDasharray="2 2" />
                <path d="M17 11C17 15.4183 13.4183 19 9 19H7" strokeDasharray="2 2" />
                <path d="M10 10V22M14 10V22" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl leading-none tracking-tighter text-white">
                DENTAL <span className="text-secondary">SOLUTIONS</span>
              </span>
              <span className="text-[10px] text-secondary font-bold tracking-[0.2em] uppercase mt-1">
                Dr. Fatima Anees
              </span>
            </div>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Providing premium dental care using advanced technology and 
            a patient-first approach. Your smile is our mission.
          </p>
          <div className="flex items-center gap-4">
            {[Globe, LinkIcon, MessageSquare].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -5, color: "#0EA5E9" }}
                className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:border-secondary transition-colors"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-6">
          <h4 className="text-lg font-bold border-b border-white/10 pb-4 w-fit pr-12">Clinic Links</h4>
          <ul className="flex flex-col gap-4">
            {["Home", "Services", "Gallery", "Testimonials", "Contact"].map((link) => (
              <li key={link}>
                <Link 
                  href={`#${link.toLowerCase()}`} 
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>{link}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-6">
          <h4 className="text-lg font-bold border-b border-white/10 pb-4 w-fit pr-12">Our Services</h4>
          <ul className="flex flex-col gap-4 text-gray-400 text-sm">
            <li>Laser Dentistry</li>
            <li>Oral Surgery</li>
            <li>Scaling & Polishing</li>
            <li>Wisdom Tooth Removal</li>
            <li>Smile Makeover</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          <h4 className="text-lg font-bold border-b border-white/10 pb-4 w-fit pr-12">Visit Us</h4>
          <ul className="flex flex-col gap-6">
            <li className="flex gap-4">
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/5">
                <MapPin className="w-5 h-5 text-secondary" />
              </div>
              <div className="flex flex-col text-sm">
                <span className="font-bold">Clinic Address</span>
                <span className="text-gray-400 mt-1">City Hospital Rd, Rahim Yar Khan, Punjab</span>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/5">
                <Phone className="w-5 h-5 text-secondary" />
              </div>
              <div className="flex flex-col text-sm">
                <span className="font-bold">Contact Number</span>
                <span className="text-gray-400 mt-1">+92 3XX XXXXXXX</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <p className="text-gray-500 text-xs flex items-center gap-1.5">
          © 2026 Dental Solutions. Made with <Heart className="w-3.5 h-3.5 text-secondary fill-secondary" /> for healthy smiles.
        </p>
        
        <div className="flex gap-8 text-xs text-gray-500">
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms of Service</Link>
        </div>

        <button
          onClick={scrollToTop}
          className="bg-secondary p-3 rounded-full shadow-lg hover:bg-white hover:text-secondary hover:-translate-y-2 transition-all duration-300"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
