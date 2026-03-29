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
        <Link href="/" className="group flex items-center">
          {/* <img src="/images/logo.png" alt="Logo" width={60} height={80} /> */}
          <div className="flex flex-col ml-3">
            <span className="font-extrabold text-xl md:text-2xl leading-none tracking-tighter text-white">
              LALA MEDICAL
            </span>
            <span className="font-bold text-lg md:text-xl leading-none tracking-tight text-secondary -mt-0.5">
              COMPLEX
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

        <button
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-xl transition-colors"
          aria-label="Toggle Menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0B1B31]  mt-4 rounded-2xl overflow-hidden shadow-2xl border border-glass-border"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white font-bold text-lg hover:text-secondary py-2 border-b border-glass-border last:border-0"
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
                <span>+92 300 6708300</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
