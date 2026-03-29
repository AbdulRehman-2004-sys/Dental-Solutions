"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ImageIcon, Camera, Layout } from "lucide-react";

const galleryImages = [
  { src: "/images/img1.png", alt: "Modern Hospital Exterior", aspect: "aspect-video" },
  { src: "/images/img2.png", alt: "Advanced Surgical Unit", aspect: "aspect-square" },
  { src: "/images/img3.png", alt: "Diagnostic Lab", aspect: "aspect-video" },
  { src: "/images/img5.png", alt: "Surgical Theater", aspect: "aspect-video" },
  { src: "/images/img4.png", alt: "Patient Waiting Area", aspect: "aspect-square" },
  { src: "/images/img6.png", alt: "Lala Medical Complex", aspect: "aspect-video" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-secondary font-bold text-sm tracking-widest uppercase mb-4"
          >
            <Camera className="w-5 h-5" />
            <span>Clinic Showcase</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6"
          >
            Gallery of <span className="text-secondary">Healing</span> & Care
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 max-w-2xl mx-auto text-lg"
          >
            Take a visual tour of our modern facilities and see the high-precision 
            technology we use to ensure your health and recovery.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-3xl group shadow-lg ${image.aspect}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                <div className="text-center translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-xl transform group-hover:rotate-12 transition-transform">
                    <ImageIcon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white font-bold text-xl">{image.alt}</h4>
                  <span className="text-secondary text-xs font-bold tracking-widest uppercase mt-1 inline-block">View Full Size</span>
                </div>
              </div>
              
              {/* Layout Icon (Small Decoration) */}
              <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/10 p-2 rounded-lg border border-white/20">
                  <Layout className="w-4 h-4 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
