"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, User, Phone, CheckCircle, ArrowRight, Loader2, Send, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  "Emergency & ICU",
  "General Surgery",
  "Orthopedic Surgery",
  "Urology & Nephrology",
  "Gynae & Pediatrics",
  "Diagnostics (X-ray/Ultrasound)",
  "Eye & ENT",
  "General Consultation",
];

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", phone: "", email: "", service: "", date: "", time: "" });
      }
    } catch (error) {
      console.error("Booking error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="book" className="py-24 px-6 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="flex flex-col gap-8 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-2 text-secondary font-bold text-sm tracking-widest uppercase mb-4">
              <Calendar className="w-5 h-5" />
              <span>Book Appointment</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary leading-tight">
              Start Your <br />
              <span className="text-secondary italic">Healing Journey</span> Today.
            </h2>
            
            <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
              Our advanced scheduling system ensures you get the care you need 
              at a time that works best for you. No long waits, just premium service.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              {[
                { label: "Emergency", detail: "24/7 Support" },
                { label: "Specialized", detail: "Expert Surgeons" },
                { label: "Modern", detail: "Top clinical equipment" },
                { label: "Care", detail: "Patient-first approach" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100 hover:border-secondary transition-colors">
                  <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-primary leading-none">{item.label}</span>
                    <span className="text-gray-400 text-xs mt-1">{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group order-1 lg:order-2 "
        >
          <div className="absolute -inset-4 bg-[#0A192F] blur-[100px] rounded-full opacity-50 pointer-events-none" />
          
          <div className="glass p-10 rounded-[40px] shadow-2xl relative border border-secondary/10 backdrop-blur-2xl">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex flex-col items-center justify-center text-center gap-6 py-12"
                >
                  <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.3)] transform -rotate-12">
                    <CheckCircle className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary">Appointment Requested!</h3>
                  <p className="text-gray-500 max-w-sm">
                    Thank you! We've received your request. Our team will contact you 
                    to confirm the exact time slot shortly.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-4 text-secondary font-bold hover:underline"
                  >
                    Send another request
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6"
                >
                  <div className="flex flex-col gap-2 text-[#0A192F]">
                    <label className="flex items-center gap-2 text-sm font-bold text-primary tracking-widest uppercase ml-1">
                      <User className="w-4 h-4 text-secondary" />
                      <span>Full Name</span>
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="e.g. Ahmed Ali"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/50 border border-secondary/10 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-primary tracking-widest uppercase ml-1">
                      <Phone className="w-4 h-4 text-secondary" />
                      <span>Phone Number</span>
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      placeholder="e.g. +92 3XX XXXXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white/50 border border-secondary/10 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-primary tracking-widest uppercase ml-1">
                      <Mail className="w-4 h-4 text-secondary" />
                      <span>Email Address</span>
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="e.g. patient@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/50 border border-secondary/10 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="flex items-center gap-2 text-sm font-bold text-primary tracking-widest uppercase ml-1">
                        <Calendar className="w-4 h-4 text-secondary" />
                        <span>Date</span>
                      </label>
                      <input
                        required
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full bg-white/50 border border-secondary/10 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="flex items-center gap-2 text-sm font-bold text-primary tracking-widest uppercase ml-1">
                        <Clock className="w-4 h-4 text-secondary" />
                        <span>Time</span>
                      </label>
                      <input
                        required
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full bg-white/50 border border-secondary/10 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-primary tracking-widest uppercase ml-1">
                      <Send className="w-4 h-4 text-secondary" />
                      <span>Choose Service</span>
                    </label>
                    <select
                      required
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-white/50 border border-secondary/10 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all appearance-none text-[#0A192F]"
                    >
                      <option value="" disabled>Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className={cn(
                      "w-full flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-bold transition-all mt-4 text-white shadow-xl shadow-secondary/20",
                      isSubmitting ? "bg-primary" : "bg-primary hover:bg-black hover:-translate-y-1"
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>PROCESSING...</span>
                      </>
                    ) : (
                      <>
                        <span>BOOK APPOINTMENT</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppointmentForm;
