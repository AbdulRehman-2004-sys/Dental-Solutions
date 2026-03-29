"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, Quote, Heart, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    name: "Uzma Khalid",
    role: "Patient",
    text: "I was nervous about my broken fillings but Dr. Fatima Anees made it so easy and fixed them. She used a laser instead of a drill, so there was no scary noise and no pain. It was much better than the old way. I highly recommend her.",
    stars: 5,
    date: "A week ago",
  },
  {
    name: "Muhammad Abdullah",
    role: "Patient",
    text: "I got scaling done and treatment for wisdom tooth removal. The pain was significantly reduced after just one consultation. Very satisfied.",
    stars: 5,
    date: "2 weeks ago",
  },
  {
    name: "Muhammad Ghufran",
    role: "Patient",
    text: "Dr Fatima is very professional and kind. She made me feel comfortable and explained everything clearly. The treatment was smooth and painless.",
    stars: 5,
    date: "1 month ago",
  },
  {
    name: "Bahat Auto",
    role: "Clinic Reviewer",
    text: "Affordable prices with best dentistry. Very satisfied. Neat and clean clinic.",
    stars: 5,
    date: "3 months ago",
  },
  {
    name: "Ayesha Zafar",
    role: "Patient",
    text: "Wonderful experience. Polite, kind, and gentle approach. Warm attitude towards patients.",
    stars: 5,
    date: "2 days ago",
  },
];

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="testimonials" className="py-24 bg-primary overflow-hidden relative" ref={scrollRef}>
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-secondary rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-secondary font-bold text-sm tracking-widest uppercase mb-4"
          >
            <Heart className="w-5 h-5 fill-secondary" />
            <span>Patient Experiences</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Trusted by <span className="text-secondary italic">Thousands</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl text-lg"
          >
            Don't just take our word for it. Here's what our patients have to say 
            about their journey to a healthier, brighter smile.
          </motion.p>
        </div>

        {/* Testimonials Carousel (Draggable Effect) */}
        <div className="relative overflow-hidden cursor-grab active:cursor-grabbing py-10">
          <motion.div 
            style={{ x }}
            className="flex gap-8 w-fit"
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <motion.div
                key={index}
                className="w-[350px] md:w-[450px] shrink-0 glass-dark p-8 rounded-[40px] border border-white/5 hover:border-secondary/30 transition-colors shadow-2xl relative"
              >
                {/* Quote Icon Decoration */}
                <div className="absolute -top-6 left-10 w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center shadow-xl transform group-hover:rotate-6 transition-transform">
                  <Quote className="w-6 h-6 text-white rotate-180" />
                </div>

                <div className="flex flex-col gap-6 pt-4">
                  <div className="flex items-center gap-1 text-accent">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent" />
                    ))}
                  </div>

                  <p className="text-gray-200 text-lg leading-relaxed italic font-medium">
                    "{item.text}"
                  </p>

                  <div className="mt-4 pt-6 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary/50 to-blue-500/50 flex items-center justify-center border border-white/10">
                        <span className="text-white font-bold text-xl">{item.name.charAt(0)}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-white font-bold text-lg leading-none">{item.name}</span>
                        <div className="flex items-center gap-1 mt-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                          <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">{item.role}</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-gray-500 text-xs font-bold">{item.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
