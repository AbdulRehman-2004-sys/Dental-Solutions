"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Zap, Scissors, Sparkles, Smile, ArrowRight, HeartPulse } from "lucide-react";

const services = [
  {
    title: "Laser Dentistry",
    description: "Advanced laser treatments for painless gum procedures and cavity preparations.",
    icon: Zap,
    image: "/images/laser-service.png",
    color: "bg-blue-500",
  },
  {
    title: "Oral Surgery",
    description: "Expert surgical care for complex cases and wisdom tooth extractions with precision.",
    icon: Scissors,
    image: "/images/clinic-detail.png",
    color: "bg-indigo-500",
  },
  {
    title: "Scaling & Polishing",
    description: "Deep ultrasonic cleaning to remove plaque and restore your natural tooth brightness.",
    icon: Sparkles,
    image: "/images/hero-bg.png",
    color: "bg-cyan-500",
  },
  {
    title: "Smile Makeover",
    description: "Comprehensive aesthetic treatments including whitening, veneers, and alignment.",
    icon: Smile,
    image: "/images/clinic-detail.png",
    color: "bg-teal-500",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 px-4">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-secondary font-bold text-sm tracking-widest uppercase mb-4"
            >
              <HeartPulse className="w-5 h-5" />
              <span>Our Specializations</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight"
            >
              Precision Care <br />
              <span className="text-secondary">For Every Patient</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-500 text-lg leading-relaxed"
            >
              We provide state-of-the-art dental services using the latest 
              technologies in the medical field. Our goal is to make every 
              visit comfortable, painless, and highly effective.
            </motion.p>
          </div>
          
          <motion.a
            href="#book"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 text-primary font-bold hover:text-secondary group transition-colors px-6 py-3 border-2 border-primary/10 rounded-xl hover:border-secondary/20"
          >
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[450px] overflow-hidden rounded-[40px] shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              {/* Icon / Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10 flex flex-col gap-4 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <div className={`${service.color} w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6 group-hover:rotate-0 transition-all duration-500`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white group-hover:text-secondary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {service.description}
                </p>

                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-white/60 text-xs font-bold tracking-widest uppercase">Expert Care</span>
                  <div className="w-8 h-12 flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-secondary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                  </div>
                </div>
              </div>

              {/* Top Accent */}
              <div className="absolute top-6 right-6 z-10">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse shadow-[0_0_10px_rgba(14,165,233,0.5)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
