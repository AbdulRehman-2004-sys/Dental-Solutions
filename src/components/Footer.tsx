"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Heart, ArrowUp } from "lucide-react";

const Facebook = (props: any) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = (props: any) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Footer = () => {
  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  return (
    <footer id="contact" className="bg-primary text-white pt-24 pb-12 px-6 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {/* Brand Info */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="group flex items-center">
          <img src="/images/logo.png" alt="Logo" width={60} height={80} />
            <div className="flex flex-col">
              <span className="font-extrabold text-2xl leading-none tracking-tighter text-primary dark:text-white">
                DENTAL
              </span>
              <span className="font-bold text-xl leading-none tracking-tight text-secondary -mt-0.5">
                SOLUTIONS
              </span>
            </div>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Providing premium dental care using advanced technology and
            a patient-first approach. Your smile is our mission.
          </p>
          <div className="flex items-center gap-4">
            {[
              { Icon: Facebook, href: "https://www.facebook.com/p/Dental-Solutions-Dr-Fatima-Anees-61559802562867/" },
              { Icon: Instagram, href: "https://www.instagram.com/dentalsolutions.ryk/" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "#0EA5E9" }}
                className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:border-secondary transition-colors"
              >
                <social.Icon className="w-5 h-5" />
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
                <span className="text-gray-400 mt-1">Main Abu Dhabi Road, Bank, near Allied, Rahim Yar Khan, 64200, Pakistan</span>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/5">
                <Phone className="w-5 h-5 text-secondary" />
              </div>
              <div className="flex flex-col text-sm">
                <span className="font-bold">Contact Number</span>
                <span className="text-gray-400 mt-1">+92 3048856789</span>
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

        {/* <button
          onClick={scrollToTop}
          className="bg-secondary p-3 rounded-full shadow-lg hover:bg-white hover:text-secondary hover:-translate-y-2 transition-all duration-300"
        >
          <ArrowUp className="w-5 h-5" />
        </button> */}
      </div>
    </footer>
  );
};

export default Footer;
