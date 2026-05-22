"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Sun, Wind, CheckCircle2, ChevronRight, Gauge, Trophy } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

interface ProjectItem {
  title: string;
  category: "industrial" | "residential" | "wind";
  location: string;
  capacity: string;
  modules: string;
  offset: string;
  payback: string;
  desc: string;
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    title: "12MW captive solar grid, Adani cold storage",
    category: "industrial",
    location: "Mundra, Gujarat",
    capacity: "12 Megawatts (MW)",
    modules: "Mono-PERC Half-Cut Bifacial (550Wp)",
    offset: "9,840 Metric Tons / Year",
    payback: "3.2 Years",
    desc: "A massive industrial ground-mounted grid engineered to power centralized cold storage units, displacing grid dependency and locking in flat electricity costs.",
  },
  {
    title: "5.2MW industrial rooftop, Shah Spinning Mills",
    category: "industrial",
    location: "Rajkot, Gujarat",
    capacity: "5.2 Megawatts (MW)",
    modules: "Tier-1 Mono Bifacial modules",
    offset: "4,260 Metric Tons / Year",
    payback: "2.8 Years",
    desc: "Retrofitted over structural steel trusses. Specially designed lightweight mounting structures ensure no stress on roof joints during heavy wind seasons.",
  },
  {
    title: "2.4MW smart wind grid, Rajasthan wind zone",
    category: "wind",
    location: "Jaisalmer, Rajasthan",
    capacity: "2.4 Megawatts (MW)",
    modules: "Direct-drive Wind Turbine Generators",
    offset: "2,050 Metric Tons / Year",
    payback: "4.1 Years",
    desc: "Pan-India utility scale project feeding power directly into the state transmission system under long-term power purchase agreements.",
  },
  {
    title: "450kW commercial solar setup, Tech Park SG",
    category: "industrial",
    location: "Ahmedabad, Gujarat",
    capacity: "450 Kilowatts (kW)",
    modules: "High-efficiency Tier-1 solar panels",
    offset: "369 Metric Tons / Year",
    payback: "3.5 Years",
    desc: "A sleek, glassmorphic corporate rooftop installation equipped with zero-export smart inverters to prevent feeding unapproved grids.",
  },
  {
    title: "15kW residential rooftop, Patel Villa complex",
    category: "residential",
    location: "Vadodara, Gujarat",
    capacity: "15 Kilowatts (kW)",
    modules: "N-Type TOPCon Panels (580W)",
    offset: "12.3 Metric Tons / Year",
    payback: "3.8 Years",
    desc: "Residential villa system complete with hybrid backup batteries, net metering support, and real-time generation tracking app integration.",
  },
  {
    title: "12kW micro rooftop, Royal Residency towers",
    category: "residential",
    location: "Mumbai, Maharashtra",
    capacity: "12 Kilowatts (kW)",
    modules: "Standard Monocrystalline panels",
    offset: "9.8 Metric Tons / Year",
    payback: "4.0 Years",
    desc: "Decentralized solar grid covering high-rise elevators, hallway lighting, and community water pumping systems to slash society maintenance charges.",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "industrial" | "residential" | "wind">("all");

  const filteredProjects = PROJECTS_DATA.filter(
    (p) => filter === "all" || p.category === filter
  );

  return (
    <>
      <Navbar />

      <main className="flex-grow pt-28">
        
        {/* HEADER SECTION */}
        <section className="relative py-16 px-4 text-center radial-grid-green border-b border-white/5">
          <div className="max-w-4xl mx-auto flex flex-col gap-4">
            <span className="text-xs font-bold text-energy-green uppercase tracking-widest">Our Portfolio</span>
            <h1 className="font-display text-4xl sm:text-5xl font-black text-white">
              Flagship Green Installations
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We take pride in our robust structural designs and precise electrical engineering. Explore our major installations across residential, industrial, and wind grid domains.
            </p>
          </div>
        </section>

        {/* PROJECTS FILTER & GRID */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto flex flex-col gap-12">
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "🌐 All Projects", val: "all" },
                { label: "🏭 Industrial Solar", val: "industrial" },
                { label: "🏠 Residential Rooftop", val: "residential" },
                { label: "💨 Wind Energy Grids", val: "wind" },
              ].map((btn) => (
                <button
                  key={btn.val}
                  onClick={() => setFilter(btn.val as any)}
                  className={`py-2.5 px-5 rounded-full border text-xs font-bold transition-all ${
                    filter === btn.val
                      ? "bg-energy-green/10 border-energy-green/30 text-energy-green shadow-lg shadow-energy-green/5"
                      : "bg-white/5 border-white/5 text-slate-400 hover:text-white"
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>

            {/* Grid */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((p, index) => (
                  <motion.div
                    layout
                    key={p.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 rounded-2xl glass-panel border border-white/5 flex flex-col justify-between hover:border-energy-green/20 transition-all group"
                  >
                    <div className="flex flex-col gap-4">
                      {/* Graphics representation */}
                      <div className="w-full aspect-[16/10] bg-slate-950/40 rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-energy-green/5 to-accent-blue/5" />
                        {p.category === "wind" ? (
                          <Wind className="w-12 h-12 text-accent-blue animate-spin-slow" />
                        ) : (
                          <Sun className="w-12 h-12 text-amber-400 fill-amber-400/10 animate-pulse-slow" />
                        )}
                        
                        <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-dark-bg/85 border border-white/5 text-[9px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-energy-green" /> {p.location}
                        </div>
                      </div>

                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-bold text-energy-green uppercase tracking-wider font-display">
                          {p.category} System
                        </span>
                        <h3 className="font-display font-bold text-base text-white leading-snug group-hover:text-energy-green transition-colors">
                          {p.title}
                        </h3>
                        <p className="text-slate-400 text-xs leading-relaxed mt-2">{p.desc}</p>
                      </div>
                    </div>

                    {/* Stats List */}
                    <div className="mt-6 pt-4 border-t border-white/5 flex flex-col gap-2.5 text-xs text-slate-300">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500 font-medium">Capacity Setup:</span>
                        <strong className="text-white font-bold">{p.capacity}</strong>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500 font-medium">Modules Installed:</span>
                        <span className="text-slate-300 truncate max-w-[150px]">{p.modules}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500 font-medium">Annual CO₂ Offset:</span>
                        <strong className="text-energy-green font-extrabold">{p.offset}</strong>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

          </div>
        </section>

      </main>

      <Chatbot />
      <Footer />
    </>
  );
}
