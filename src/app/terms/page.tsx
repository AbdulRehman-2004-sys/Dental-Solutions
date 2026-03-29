"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Clock, AlertCircle, Info, Shield } from "lucide-react";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden bg-primary text-white">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-secondary/30">
            <FileText className="w-8 h-8 text-secondary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Terms <span className="text-secondary">of Service</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            These terms govern your relationship with LALA MEDICAL COMPLEX as a patient or 
            visitor. We strive to provide transparent and fair service to all our patients.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto glass rounded-[40px] p-8 md:p-12 shadow-2xl overflow-hidden relative">
          <div className="absolute right-[-100px] top-[-100px] w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
          
          <div className="space-y-12 relative z-10">
            
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">Appointment Policies</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>In order to provide quality service to all our patients, we request that you follow our scheduling policies:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Arrival: Please arrive 10-15 minutes prior to your scheduled appointment time.</li>
                    <li>Cancellations: We require at least 24 hours' notice for cancellations or rescheduling.</li>
                    <li>Late Arrivals: Patients arriving more than 15 minutes late may need to be rescheduled to avoid delays for other patients.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                <AlertCircle className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">Clinic Conduct</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>We are committed to maintaining a safe and professional environment for both patients and staff:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Patients are expected to behave respectfully toward the clinical team and other visitors.</li>
                    <li>Follow all post-procedure care instructions as provided by the medical staff to ensure safe recovery.</li>
                    <li>Disclose all relevant health information and medications truly for safe treatment planning.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                <Info className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">Payment & Insurance</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>Payment is expected at the time service is rendered unless prior arrangements have been made:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>We accept major credit cards, bank transfers, and insurance coverage where applicable.</li>
                    <li>Patients are responsible for any insurance co-pays or deductibles.</li>
                    <li>Detailed treatment plans and cost estimates will be discussed prior to any major clinical procedures.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">Disclaimer & Liability</h2>
                <p className="text-gray-600 leading-relaxed">
                  While we use advanced technology and follow clinical best practices, medical results 
                  can vary. LALA MEDICAL COMPLEX and its clinical staff are not liable for complications 
                  resulting from undisclosed medical history or non-compliance with post-operative 
                  care instructions.
                </p>
              </div>
            </div>

          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-100 text-center">
            <p className="text-gray-400 text-sm italic">
              By using our services, you agree to these terms. Last updated March 29, 2026.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
