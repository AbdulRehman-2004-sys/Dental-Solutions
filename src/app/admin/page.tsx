"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, 
  Calendar, 
  Clock, 
  CheckCircle, 
  XCircle, 
  ShieldCheck, 
  Loader2, 
  History, 
  TrendingUp,
  Search,
  Filter,
  RefreshCw
} from "lucide-react";
import { cn } from "@/lib/utils";

const AdminDashboard = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [secret, setSecret] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [appointments, setAppointments] = useState<any[]>([]);
  const [stats, setStats] = useState({ total: 0, pending: 0, approved: 0 });

  // Handle Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    try {
      const res = await fetch(`/api/admin/appointments?secret=${secret}`);
      const result = await res.json();
      
      if (result.success) {
        setIsAuthorized(true);
        setAppointments(result.data);
        updateStats(result.data);
      } else {
        setError("Invalid Admin Secret Key");
      }
    } catch (err) {
      setError("Failed to verify access.");
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch Latest Data
  const refreshData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/admin/appointments?secret=${secret}`);
      const result = await res.json();
      if (result.success) {
        setAppointments(result.data);
        updateStats(result.data);
      }
    } catch (err) {
      console.error("Refresh failed", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Update Status
  const updateStatus = async (id: string, status: string) => {
    try {
      const res = await fetch("/api/admin/approve", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status, secret }),
      });
      const result = await res.json();
      if (result.success) {
        refreshData();
      }
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  const updateStats = (data: any[]) => {
    const s = {
      total: data.length,
      pending: data.filter(a => a.status === "Pending").length,
      approved: data.filter(a => a.status === "Approved").length
    };
    setStats(s);
  };

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center p-6 bg-[url('/images/hero-bg.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-primary/90 backdrop-blur-sm" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-dark p-10 rounded-[40px] w-full max-w-md border border-white/10 shadow-2xl relative z-10"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center shadow-lg">
              <ShieldCheck className="w-10 h-10 text-white" />
            </div>
            <div className="text-center">
              <h1 className="text-3xl font-bold text-white tracking-tight">Admin Portal</h1>
              <p className="text-gray-400 mt-2">Enter secret key to manage appointments</p>
            </div>
            
            <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
              <input 
                type="password"
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                placeholder="Admin Secret Key"
                className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                required
              />
              {error && <p className="text-red-400 text-sm text-center font-medium">{error}</p>}
              <button 
                type="submit"
                disabled={isLoading}
                className="w-full bg-secondary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#0891d1] transition-all shadow-xl shadow-secondary/20"
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Verify Access"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050B14] text-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold tracking-tight">Clinic Dashboard</h1>
            <p className="text-gray-400">Welcome back, Dr. Fatima Anees.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={refreshData}
              className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
            >
              <RefreshCw className={cn("w-5 h-5", isLoading && "animate-spin")} />
            </button>
            <div className="bg-secondary/20 border border-secondary/30 px-4 py-2 rounded-xl flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-secondary text-xs font-bold uppercase tracking-widest">System Online</span>
            </div>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Total Bookings", value: stats.total, icon: Users, color: "text-blue-400" },
            { label: "Pending Requests", value: stats.pending, icon: Clock, color: "text-amber-400" },
            { label: "Approved Patients", value: stats.approved, icon: CheckCircle, color: "text-emerald-400" },
          ].map((item) => (
            <motion.div 
              key={item.label}
              whileHover={{ y: -5 }}
              className="bg-white/5 border border-white/10 p-8 rounded-[32px] flex flex-col gap-4 relative overflow-hidden group"
            >
              <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center bg-white/5 border border-white/5", item.color)}>
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-gray-400 text-sm font-medium">{item.label}</span>
                <h3 className="text-4xl font-black mt-1">{item.value}</h3>
              </div>
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                <TrendingUp className="w-20 h-20" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Appointments Table */}
        <div className="bg-white/5 border border-white/10 rounded-[40px] overflow-hidden shadow-2xl">
          <div className="p-8 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <History className="w-5 h-5 text-secondary" />
              Recent Appointments
            </h2>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input 
                  type="text" 
                  placeholder="Search patients..." 
                  className="bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-secondary/50"
                />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/[0.01] border-b border-white/5">
                  <th className="px-8 py-6 text-sm font-bold text-gray-400 uppercase tracking-widest">Patient Details</th>
                  <th className="px-6 py-6 text-sm font-bold text-gray-400 uppercase tracking-widest">Service</th>
                  <th className="px-6 py-6 text-sm font-bold text-gray-400 uppercase tracking-widest">Date & Time</th>
                  <th className="px-6 py-6 text-sm font-bold text-gray-400 uppercase tracking-widest">Status</th>
                  <th className="px-8 py-6 text-sm font-bold text-gray-400 uppercase tracking-widest text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {appointments.map((apt) => (
                  <tr key={apt._id} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex flex-col gap-0.5">
                        <span className="font-bold text-lg text-white group-hover:text-secondary transition-colors">{apt.name}</span>
                        <span className="text-sm text-gray-500">{apt.phone}</span>
                      </div>
                    </td>
                    <td className="px-6 py-6 font-medium text-gray-300 italic">{apt.service}</td>
                    <td className="px-6 py-6">
                      <div className="flex flex-col text-sm">
                        <span className="font-bold">{apt.date}</span>
                        <span className="text-gray-500">{apt.time}</span>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <span className={cn(
                        "px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest border",
                        apt.status === "Pending" && "bg-amber-500/10 text-amber-500 border-amber-500/20",
                        apt.status === "Approved" && "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
                        apt.status === "Rejected" && "bg-red-500/10 text-red-500 border-red-500/20"
                      )}>
                        {apt.status}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        {apt.status === "Pending" && (
                          <>
                            <button 
                              onClick={() => updateStatus(apt._id, "Rejected")}
                              className="p-2 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all"
                            >
                              <XCircle className="w-5 h-5" />
                            </button>
                            <button 
                              onClick={() => updateStatus(apt._id, "Approved")}
                              className="p-2 bg-emerald-500/10 text-emerald-500 rounded-lg hover:bg-emerald-500 hover:text-white transition-all"
                            >
                              <CheckCircle className="w-5 h-5" />
                            </button>
                          </>
                        )}
                        {apt.status !== "Pending" && (
                          <span className="text-xs text-gray-600 font-medium">Finalized</span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {appointments.length === 0 && (
              <div className="py-20 text-center flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-gray-600" />
                </div>
                <p className="text-gray-500 font-bold uppercase tracking-widest">No appointments found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
