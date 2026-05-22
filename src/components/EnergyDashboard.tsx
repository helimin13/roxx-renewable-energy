"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Zap, Trees, Award, HeartHandshake } from "lucide-react";

export default function EnergyDashboard() {
  const [totalPower, setTotalPower] = useState(14872935.4);
  const [co2Saved, setCo2Saved] = useState(12195.8);
  const [treesEquivalent, setTreesEquivalent] = useState(182937);

  useEffect(() => {
    const interval = setInterval(() => {
      // Solar/Wind generation rates: ~0.042 kWh every 100ms
      setTotalPower((prev) => prev + 0.042);
      // ~0.82 kg CO2 saved per kWh
      setCo2Saved((prev) => prev + 0.042 * 0.00082);
      // ~15 trees per ton of CO2 offset annually
      if (Math.random() > 0.95) {
        setTreesEquivalent((prev) => prev + 1);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      label: "Clean Power Generated",
      value: totalPower.toLocaleString("en-IN", { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + " kWh",
      desc: "Live generation from Roxx solar & wind grids",
      icon: Zap,
      color: "text-energy-green",
      glowColor: "shadow-energy-green/10",
      bgColor: "bg-energy-green/5 border-energy-green/10",
    },
    {
      label: "CO₂ Emissions Saved",
      value: co2Saved.toLocaleString("en-IN", { minimumFractionDigits: 3, maximumFractionDigits: 3 }) + " MT",
      desc: "Prevented greenhouse gas release",
      icon: Award,
      color: "text-accent-blue",
      glowColor: "shadow-accent-blue/10",
      bgColor: "bg-accent-blue/5 border-accent-blue/10",
    },
    {
      label: "Equivalent Trees Saved",
      value: treesEquivalent.toLocaleString("en-IN") + " Trees",
      desc: "Comparable carbon absorption capacity",
      icon: Trees,
      color: "text-emerald-400",
      glowColor: "shadow-emerald-400/10",
      bgColor: "bg-emerald-500/5 border-emerald-500/10",
    },
    {
      label: "Active Site Installations",
      value: "4,820+ Sites",
      desc: "Homes, farms, factories & corporate sites",
      icon: HeartHandshake,
      color: "text-yellow-400",
      glowColor: "shadow-yellow-400/10",
      bgColor: "bg-yellow-500/5 border-yellow-500/10",
    },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-6 rounded-2xl glass-panel border ${stat.bgColor} flex flex-col justify-between shadow-lg ${stat.glowColor} relative overflow-hidden`}
            >
              {/* Radial gradient backing for stats cards */}
              <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </span>
                <div className={`p-2 rounded-lg bg-white/5 border border-white/5 ${stat.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {stat.value}
                </span>
                <p className="text-xs text-slate-400 leading-normal">{stat.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
