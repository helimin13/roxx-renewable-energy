"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowRight, ShieldCheck } from "lucide-react";

interface OfficeHub {
  id: string;
  name: string;
  type: "Headquarters" | "Regional Office" | "Operations Hub";
  coordinates: { x: number; y: number }; // Percentage coordinate on map bounding box
  installations: string;
  projects: string;
  contact: string;
}

const HUBS: OfficeHub[] = [
  {
    id: "ahmedabad",
    name: "Ahmedabad, Gujarat",
    type: "Headquarters",
    coordinates: { x: 30, y: 55 },
    installations: "2,400+ Units",
    projects: "120MW Industrial Solar Park, Adani Hub",
    contact: "+91 79 4000 1000",
  },
  {
    id: "mumbai",
    name: "Mumbai, Maharashtra",
    type: "Regional Office",
    coordinates: { x: 35, y: 68 },
    installations: "1,100+ Units",
    projects: "Tata Commercial Rooftops, Navi Mumbai",
    contact: "+91 22 4000 2000",
  },
  {
    id: "jaipur",
    name: "Jaipur, Rajasthan",
    type: "Regional Office",
    coordinates: { x: 36, y: 44 },
    installations: "850+ Units",
    projects: "15MW Wind-Solar Hybrid, Jaisalmer",
    contact: "+91 141 4000 3000",
  },
  {
    id: "delhi",
    name: "Delhi-NCR",
    type: "Operations Hub",
    coordinates: { x: 44, y: 38 },
    installations: "380+ Units",
    projects: "Warehouse Solar Grid, Gurgaon & Noida",
    contact: "+91 11 4000 4000",
  },
  {
    id: "bangalore",
    name: "Bangalore, Karnataka",
    type: "Operations Hub",
    coordinates: { x: 48, y: 82 },
    installations: "520+ Units",
    projects: "Tech Park Smart Solar Grids, Electronic City",
    contact: "+91 80 4000 5000",
  },
];

export default function IndiaMap() {
  const [selectedHub, setSelectedHub] = useState<OfficeHub>(HUBS[0]);

  return (
    <div className="w-full glass-panel border border-white/5 rounded-3xl p-6 sm:p-10 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Side: Map Graphic */}
        <div className="lg:col-span-7 flex justify-center relative">
          <div className="relative w-full max-w-[420px] aspect-[4/5] border border-white/5 rounded-2xl bg-slate-950/20 overflow-hidden flex items-center justify-center p-4">
            
            {/* Background Grid Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute inset-0 bg-gradient-to-br from-energy-green/5 to-transparent pointer-events-none" />

            {/* Stylized Abstract Outline of India (using customized polyline coordinates inside SVG) */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full stroke-white/10 fill-white/[0.01] stroke-[0.5] transition-all"
              aria-label="Map of India outline"
            >
              {/* India Outline approximation for clean tech vector style */}
              <path
                d="M 38,10 
                   L 46,14 L 46,24 L 54,26 L 50,32 L 53,35 L 48,42 L 56,47 L 58,54 L 62,54 
                   L 66,61 L 70,62 L 67,66 L 68,70 L 60,78 L 57,84 L 50,92 L 48,90 L 46,84
                   L 46,75 L 36,70 L 32,66 L 24,62 L 20,54 L 28,52 L 28,48 L 36,44 L 38,36
                   L 32,32 L 34,26 L 30,22 L 36,18 Z"
                className="stroke-white/15 fill-slate-950/30 stroke-[0.8] hover:stroke-energy-green/20 hover:fill-slate-900/35 transition-all"
              />

              {/* Grid Lines in SVG */}
              <circle cx="50" cy="50" r="45" className="stroke-white/5 fill-none stroke-[0.3]" strokeDasharray="3 3" />
              <circle cx="50" cy="50" r="30" className="stroke-white/5 fill-none stroke-[0.3]" strokeDasharray="3 3" />
            </svg>

            {/* Interactive Office Hub Markers */}
            {HUBS.map((hub) => {
              const isSelected = selectedHub.id === hub.id;
              return (
                <button
                  key={hub.id}
                  onClick={() => setSelectedHub(hub)}
                  style={{
                    position: "absolute",
                    left: `${hub.coordinates.x}%`,
                    top: `${hub.coordinates.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  className="group focus:outline-none z-20"
                  aria-label={`Select hub ${hub.name}`}
                >
                  <span className="relative flex h-5 w-5">
                    {/* Ring Pulse animation */}
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                      isSelected ? "bg-energy-green" : "bg-accent-blue"
                    }`} />
                    
                    {/* Core dot */}
                    <span className={`relative inline-flex rounded-full h-5 w-5 border-2 border-dark-bg items-center justify-center shadow-lg ${
                      isSelected ? "bg-energy-green text-dark-bg" : "bg-accent-blue text-white group-hover:bg-energy-green transition-colors"
                    }`}>
                      <MapPin className="w-2.5 h-2.5" />
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Data Panel */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div>
            <span className="text-xs font-bold text-energy-green uppercase tracking-widest flex items-center gap-1.5 mb-2">
              <ShieldCheck className="w-4 h-4" /> Pan-India Coverage
            </span>
            <h3 className="font-display text-2xl font-bold text-white">Our Strategic Footprint</h3>
            <p className="text-sm text-slate-400 mt-2 leading-relaxed">
              We operate across key industrial states in India, bringing high-yield solar and wind grids closer to you. Click on the map hubs to view region achievements.
            </p>
          </div>

          <hr className="border-white/5" />

          {/* Interactive Dynamic Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedHub.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-4 relative overflow-hidden"
            >
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-0.5">
                  <h4 className="text-base font-display font-bold text-white">{selectedHub.name}</h4>
                  <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full self-start ${
                    selectedHub.type === "Headquarters"
                      ? "bg-energy-green/10 text-energy-green border border-energy-green/20"
                      : "bg-accent-blue/10 text-accent-blue border border-accent-blue/20"
                  }`}>
                    {selectedHub.type}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 my-2">
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 uppercase font-bold">Region Setup</span>
                  <span className="text-sm font-semibold text-white">{selectedHub.installations}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 uppercase font-bold">Region Contact</span>
                  <a href={`tel:${selectedHub.contact.replace(/\s+/g, "")}`} className="text-sm font-semibold text-energy-green hover:underline">
                    {selectedHub.contact}
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-slate-500 uppercase font-bold">Flagship Project</span>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  {selectedHub.projects}
                </p>
              </div>

              <hr className="border-white/5" />

              <a href="/contact" className="text-xs font-bold text-white flex items-center gap-1.5 hover:text-energy-green transition-colors group self-start">
                Book site visit in this state
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
