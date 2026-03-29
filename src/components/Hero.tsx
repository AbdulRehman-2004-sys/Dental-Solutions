"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, ShieldCheck, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-24 px-6 flex items-center overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Modern Dental Clinic"
          fill
          className="object-cover opacity-40 scale-105 motion-safe:animate-[pulse_10s_ease-in-out_infinite]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mt-12">
            Elevating Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-300">Smile</span> With Care.
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed">
            Experience premium dental solutions with <span className="text-secondary font-extrabold">Dr. Fatima Anees</span>. 
            From advanced laser dentistry to aesthetic smile makeovers, we blend 
            technology with a gentle touch.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <motion.a
              href="#book"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transition-all group"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.a
              href="#services"
              className="glass-dark text-white px-8 py-4 rounded-xl font-bold border border-white/10 hover:bg-white/5 transition-all"
            >
              Our Services
            </motion.a>
          </div>

          {/* Stats/Badges */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-12 mt-8 py-6 border-t border-white/10">
            <div className="flex flex-col gap-1 min-w-[120px]">
              <div className="flex items-center gap-1 text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent" />
                ))}
              </div>
              <span className="text-white font-bold text-lg">500+</span>
              <span className="text-gray-400 text-sm">Happy Patients</span>
            </div>
            
            <div className="flex flex-col gap-2 min-w-[120px]">
              <div className="flex items-center gap-2 text-secondary">
                <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />
                <span className="text-white font-bold">100% Secure</span>
              </div>
              <span className="text-gray-400 text-sm">Clinical Excellence</span>
            </div>
          </div>
        </motion.div>

        {/* Automated Review Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:flex justify-end pr-12 h-fit"
        >
          <div className="relative w-full max-w-md -mt-24">
            <div className="absolute -inset-4 bg-secondary/10 blur-[100px] rounded-full pointer-events-none" />
            
            <ReviewSlider reviews={reviews} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* --- Review Slider Sub-component --- */

const reviews = [
  {
    name: "Uzma Khalid",
    content: "I was nervous about my broken fillings but Dr. Fatima Anees made it so easy and fixed them. She used a laser instead of a drill, so there was no scary noise and no pain. It was much better than the old way. I highly recommend her.",
    patient: "Verified Patient",
  },
  {
    name: "Muhammad Abdullah",
    content: "I got scaling done and treatment for wisdom tooth removal. The pain was significantly reduced after just one consultation. Very satisfied.",
    patient: "Verified Patient",
  },
  {
    name: "Muhammad Ghufran",
    content: "Dr Fatima is very professional and kind. She made me feel comfortable and explained everything clearly. The treatment was smooth and painless.",
    patient: "Verified Patient",
  },
  {
    name: "Bahat Auto",
    content: "Affordable prices with best dentistry. Very satisfied. Neat and clean clinic.",
    patient: "Clinic Reviewer",
  },
  {
    name: "Ayesha Zafar",
    content: "Wonderful experience. Polite, kind, and gentle approach. Warm attitude towards patients.",
    patient: "Patient",
  },
];

const ReviewSlider = ({ reviews }: { reviews: any[] }) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: -20 }}
        transition={{ duration: 0.6 }}
        className="glass-dark p-10 rounded-[40px] border border-white/10 shadow-3xl relative overflow-hidden group"
      >
        {/* Background Accent */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/20 rounded-full blur-[50px] pointer-events-none group-hover:bg-secondary/30 transition-colors" />

        <div className="flex flex-col gap-6 relative z-10">
          <div className="flex items-center gap-1 text-accent">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-accent" />
            ))}
          </div>

          <p className="text-white text-xl md:text-2xl leading-relaxed font-medium italic">
            "{reviews[index].content}"
          </p>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-xl ring-4 ring-white/5">
                {reviews[index].name.charAt(0)}
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight uppercase tracking-tight">{reviews[index].name}</span>
                <span className="text-secondary text-xs font-bold uppercase tracking-widest">{reviews[index].patient}</span>
              </div>
            </div>
            
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <div 
                  key={i} 
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === index ? 'bg-secondary w-4' : 'bg-white/20'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Hero;
