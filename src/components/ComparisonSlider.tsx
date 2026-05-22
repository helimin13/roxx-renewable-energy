"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, CheckCircle2, ChevronRight, Fuel, ShieldCheck, SunDim, Sparkles } from "lucide-react";

export default function ComparisonSlider() {
  const [activeTab, setActiveTab] = useState<"grid" | "roxx">("roxx");

  const comparisonData = {
    grid: {
      title: "Traditional Coal Grid",
      icon: Fuel,
      iconColor: "text-red-400 border-red-500/20 bg-red-500/5",
      bill: "₹7.5 - ₹9.5 / Unit",
      billSub: "Increases 5-8% annually",
      carbon: "0.82 kg CO₂ per kWh",
      carbonSub: "High carbon environmental impact",
      independence: "0% (Fully Dependent)",
      independenceSub: "Subject to grid outages & voltage drops",
      points: [
        "Unpredictable price hikes from utility boards.",
        "Frequent power fluctuations damaging industrial machinery.",
        "Heavy reliance on coal & gas, depleting natural reserves.",
        "No return on investment — you pay forever.",
      ],
    },
    roxx: {
      title: "ROXX Green Hybrid Grid",
      icon: SunDim,
      iconColor: "text-energy-green border-energy-green/20 bg-energy-green/5",
      bill: "₹0.00 / Unit (Free)",
      billSub: "System pays for itself in 3-4 years",
      carbon: "0.00 kg CO₂ Offset",
      carbonSub: "100% clean, sustainable energy",
      independence: "100% Independent",
      independenceSub: "24/7 power backup with smart net-metering",
      points: [
        "Generate your own electricity and earn credits via Net Metering.",
        "Steady voltage control protecting home & commercial appliances.",
        "Central Government subsidies covering up to ₹78,000.",
        "Asset creation that adds equity value to your property.",
      ],
    },
  };

  const activeData = comparisonData[activeTab];

  return (
    <div className="w-full glass-panel border border-white/5 rounded-3xl p-6 sm:p-10 relative overflow-hidden">
      {/* Background neon glows */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-energy-green/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="flex flex-col gap-8">
        {/* Header Toggle */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b border-white/5 pb-8">
          <div>
            <span className="text-xs font-bold text-energy-green uppercase tracking-widest flex items-center gap-1.5 mb-2">
              <Sparkles className="w-4 h-4" /> Smart Comparison
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">Grid Power vs. ROXX Green Energy</h3>
          </div>

          {/* Toggle Button */}
          <div className="flex p-1 bg-white/5 rounded-xl border border-white/5 self-stretch sm:self-auto">
            <button
              onClick={() => setActiveTab("grid")}
              className={`flex-1 sm:flex-none px-5 py-2.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "grid"
                  ? "bg-red-500/10 border border-red-500/20 text-red-400"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              ⚠️ Traditional Grid
            </button>
            <button
              onClick={() => setActiveTab("roxx")}
              className={`flex-1 sm:flex-none px-5 py-2.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === "roxx"
                  ? "bg-energy-green/10 border border-energy-green/20 text-energy-green"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              ☀️ ROXX Solar/Wind
            </button>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Detailed stats columns */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-6"
              >
                {/* Visual statistics grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Metric 1 */}
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-1">
                    <span className="text-[10px] uppercase font-bold text-slate-400">Electricity Cost</span>
                    <span className="text-lg font-display font-black text-white">{activeData.bill}</span>
                    <span className="text-[9px] text-slate-500">{activeData.billSub}</span>
                  </div>

                  {/* Metric 2 */}
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-1">
                    <span className="text-[10px] uppercase font-bold text-slate-400">Carbon Footprint</span>
                    <span className="text-lg font-display font-black text-white">{activeData.carbon}</span>
                    <span className="text-[9px] text-slate-500">{activeData.carbonSub}</span>
                  </div>

                  {/* Metric 3 */}
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-1">
                    <span className="text-[10px] uppercase font-bold text-slate-400">Power Independence</span>
                    <span className="text-lg font-display font-black text-white">{activeData.independence}</span>
                    <span className="text-[9px] text-slate-500">{activeData.independenceSub}</span>
                  </div>
                </div>

                {/* Bullets List */}
                <div className="flex flex-col gap-3 mt-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                    Key Performance Factors
                  </span>
                  {activeData.points.map((pt, index) => (
                    <div key={index} className="flex gap-3 items-start text-sm">
                      {activeTab === "roxx" ? (
                        <CheckCircle2 className="w-5 h-5 text-energy-green shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      )}
                      <span className="text-slate-300">{pt}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Interactive visual teaser graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[320px] aspect-square rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center overflow-hidden">
              {/* Spinning decorative background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-energy-green/5 to-accent-blue/5 animate-pulse-slow" />
              
              <AnimatePresence mode="wait">
                {activeTab === "roxx" ? (
                  <motion.div
                    key="roxx-graphic"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center gap-4 relative z-10 text-center p-6"
                  >
                    <div className="w-20 h-20 rounded-full bg-energy-green/10 border border-energy-green/30 flex items-center justify-center shadow-lg shadow-energy-green/20 animate-float">
                      <SunDim className="w-10 h-10 text-energy-green" />
                    </div>
                    <span className="font-display font-bold text-white text-base">Self-Sufficient Power Plant</span>
                    <p className="text-xs text-slate-400">Harnessing free solar energy to run your operations without utility grid reliance.</p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="grid-graphic"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center gap-4 relative z-10 text-center p-6"
                  >
                    <div className="w-20 h-20 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center shadow-lg shadow-red-500/20">
                      <Fuel className="w-10 h-10 text-red-400" />
                    </div>
                    <span className="font-display font-bold text-white text-base">Fossil-Fuel Dependent</span>
                    <p className="text-xs text-slate-400">Vulnerable to tariff hikes, carbon taxes, and unpredictable blackouts.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
