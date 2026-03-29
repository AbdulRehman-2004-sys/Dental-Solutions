"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-[#0B1B31] py-3 shadow-lg" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 bg-secondary rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-all duration-300">
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              className="w-7 h-7 text-white" 
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
            <span className="font-extrabold text-xl leading-none tracking-tighter text-white group-hover:text-secondary transition-colors">
              DENTAL <span className="text-secondary group-hover:text-white">SOLUTIONS</span>
            </span>
            <span className="text-[10px] text-gray-300 font-bold tracking-[0.2em] uppercase mt-1">
              Dr. Fatima Anees
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white font-medium hover:text-secondary transition-colors duration-200 text-sm uppercase tracking-wider"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#book"
            className="flex items-center gap-2 bg-secondary text-white px-5 py-2.5 rounded-full font-semibold hover:bg-primary transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-md"
          >
            <Calendar className="w-4 h-4" />
            <span>BOOK NOW</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-4 rounded-2xl overflow-hidden shadow-2xl border border-glass-border"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-primary font-bold text-lg hover:text-secondary py-2 border-b border-glass-border last:border-0"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#book"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 bg-secondary text-white px-6 py-4 rounded-xl font-bold mt-2 shadow-lg"
              >
                <Calendar className="w-5 h-5" />
                <span>BOOK APPOINTMENT</span>
              </Link>
              <div className="flex items-center justify-center gap-3 text-secondary font-bold pt-2">
                <Phone className="w-5 h-5" />
                <span>+92 3XX XXXXXXX</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
