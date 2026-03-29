"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden bg-primary text-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-secondary/30">
            <Shield className="w-8 h-8 text-secondary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Privacy <span className="text-secondary">Policy</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Your privacy is our priority. This policy outlines how we handle your 
            personal and medical information with the utmost care and transparency.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto glass rounded-[40px] p-8 md:p-12 shadow-2xl">
          <div className="space-y-12">
            
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                <Lock className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">Information We Collect</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>At LALA MEDICAL COMPLEX, we collect personal information necessary to provide you with high-quality medical care. This includes:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Contact details (Name, phone number, email)</li>
                    <li>Medical history and previous clinical records</li>
                    <li>Insurance information (e.g. Sehat Insaf Card) and payment details</li>
                    <li>Digital X-rays, Ultrasounds, and Pathology reports</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                <Eye className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">How We Use Your Data</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>Your data is used exclusively for clinical and administrative purposes:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Diagnosing and treating your medical conditions</li>
                    <li>Scheduling appointments and surgical procedures</li>
                    <li>Processing insurance claims (including Sehat Card) and billing</li>
                    <li>Communicating clinic updates and health reminders</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">Data Security</h2>
                <p className="text-gray-600 leading-relaxed">
                  We implement industry-standard security measures to protect your sensitive health data. 
                  Our digital systems are encrypted, and physical records are stored in secure, restricted 
                  access areas in compliance with medical data regulations.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                <FileText className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">Patient Rights</h2>
                <p className="text-gray-600 leading-relaxed">
                  As our patient, you have the right to access your medical records, request corrections 
                  to your data, and be informed about how your information is shared (typically limited 
                  to specialists or insurance providers with your consent).
                </p>
              </div>
            </div>

          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-100 text-center">
            <p className="text-gray-400 text-sm">
              Last Updated: March 29, 2026. For privacy concerns, contact us at +92 300 6708300.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
