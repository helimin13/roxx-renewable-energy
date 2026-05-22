"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Sun, DollarSign, Leaf, Zap, HelpCircle, ArrowRight } from "lucide-react";

const INDIAN_STATES = [
  { name: "Gujarat", solarMultiplier: 1.05, tariff: 7.2 },
  { name: "Maharashtra", solarMultiplier: 1.0, tariff: 8.5 },
  { name: "Rajasthan", solarMultiplier: 1.15, tariff: 7.0 },
  { name: "Madhya Pradesh", solarMultiplier: 1.02, tariff: 7.5 },
  { name: "Delhi-NCR", solarMultiplier: 0.98, tariff: 8.0 },
  { name: "Karnataka", solarMultiplier: 1.0, tariff: 7.8 },
  { name: "Tamil Nadu", solarMultiplier: 1.03, tariff: 7.5 },
  { name: "Uttar Pradesh", solarMultiplier: 0.95, tariff: 7.5 },
];

export default function SolarSavingsCalc() {
  const [bill, setBill] = useState(5000);
  const [selectedState, setSelectedState] = useState("Gujarat");
  const [clientType, setClientType] = useState<"residential" | "commercial">("residential");
  const [roofArea, setRoofArea] = useState(500);

  // Find active state factors
  const stateData = INDIAN_STATES.find((s) => s.name === selectedState) || INDIAN_STATES[0];
  const tariff = stateData.tariff;

  // Monthly consumption in kWh (approximate)
  const monthlyConsumption = bill / tariff;

  // System size required (based on offsetting 90% of consumption)
  // Standard solar system generates ~120 kWh per kW per month in India
  const recommendedSize = Math.max(1, Math.min(100, Math.round((monthlyConsumption * 0.9) / 120 * 10) / 10));

  // Rooftop area needed (approx 100 sq ft per kW)
  const requiredArea = recommendedSize * 100;

  // Yearly solar production (kWh)
  const yearlyProduction = recommendedSize * 120 * 12 * stateData.solarMultiplier;

  // Yearly savings (INR)
  const yearlySavings = yearlyProduction * tariff;

  // Estimate total installation cost (approx 65,000 INR per kW for residential, 55,000 for commercial)
  const baseCostPerKw = clientType === "residential" ? 65000 : 55000;
  const grossCost = recommendedSize * baseCostPerKw;

  // Central Government Subsidy (PM Surya Ghar Scheme) for residential
  // 1 kW = 30,000 INR
  // 2 kW = 60,000 INR
  // 3 kW+ = 78,000 INR
  let subsidy = 0;
  if (clientType === "residential") {
    if (recommendedSize >= 3) {
      subsidy = 78000;
    } else if (recommendedSize >= 2) {
      subsidy = 60000;
    } else if (recommendedSize >= 1) {
      subsidy = 30000;
    }
  }

  // Commercial gets 40% Accelerated Depreciation tax benefit instead of subsidy
  const taxBenefit = clientType === "commercial" ? grossCost * 0.25 : 0;

  const netCost = Math.max(0, grossCost - subsidy - taxBenefit);

  // Payback period (Years)
  const paybackPeriod = yearlySavings > 0 ? Math.round((netCost / yearlySavings) * 10) / 10 : 0;

  // CO2 offset (approx 0.82 kg CO2 saved per kWh in India)
  const co2Offset = (yearlyProduction * 0.82) / 1000; // in metric tons

  // Equivalent trees planted (approx 15 trees per ton of CO2 offset annually)
  const treesPlanted = Math.round(co2Offset * 15);

  return (
    <div className="w-full glass-panel border border-white/5 rounded-3xl p-6 sm:p-10 relative overflow-hidden radial-grid-card shadow-xl shadow-energy-green/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 relative z-10">
        
        {/* Left Side: Inputs */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-energy-green/10 flex items-center justify-center border border-energy-green/20">
              <Calculator className="w-5 h-5 text-energy-green" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-white">Solar Savings Estimator</h3>
              <p className="text-xs text-slate-400">Calculate custom costs, subsidies, and offsets</p>
            </div>
          </div>

          <hr className="border-white/5" />

          {/* Client Type Selector */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Project Profile</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setClientType("residential")}
                className={`py-3 px-4 rounded-xl border text-sm font-semibold transition-all ${
                  clientType === "residential"
                    ? "bg-energy-green/10 border-energy-green/50 text-white shadow-lg shadow-energy-green/5"
                    : "bg-white/5 border-white/5 text-slate-400 hover:text-white"
                }`}
              >
                🏠 Residential Home
              </button>
              <button
                type="button"
                onClick={() => setClientType("commercial")}
                className={`py-3 px-4 rounded-xl border text-sm font-semibold transition-all ${
                  clientType === "commercial"
                    ? "bg-accent-blue/10 border-accent-blue/50 text-white shadow-lg shadow-accent-blue/5"
                    : "bg-white/5 border-white/5 text-slate-400 hover:text-white"
                }`}
              >
                🏢 Commercial / Industrial
              </button>
            </div>
          </div>

          {/* Monthly Bill Input */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-baseline">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Monthly Electricity Bill</label>
              <span className="text-xl font-display font-black text-energy-green">
                ₹{bill.toLocaleString("en-IN")}
              </span>
            </div>
            <input
              type="range"
              min="1000"
              max="50000"
              step="500"
              value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
              className="w-full accent-energy-green bg-white/10 h-2 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-medium">
              <span>₹1,000</span>
              <span>₹25,000</span>
              <span>₹50,000+</span>
            </div>
          </div>

          {/* State & Roof Area Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Your Location (State)</label>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full py-3 px-4 bg-white/5 rounded-xl border border-white/10 text-sm text-white focus:outline-none focus:border-energy-green/50"
              >
                {INDIAN_STATES.map((st) => (
                  <option key={st.name} value={st.name} className="bg-dark-card text-white">
                    {st.name} (₹{st.tariff}/u)
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">Available Roof Area (sq. ft.)</label>
              <input
                type="number"
                value={roofArea}
                onChange={(e) => setRoofArea(Number(e.target.value))}
                className="w-full py-2.5 px-4 bg-white/5 rounded-xl border border-white/10 text-sm text-white focus:outline-none focus:border-energy-green/50"
              />
            </div>
          </div>

          {/* Info Card */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-xs text-slate-400 flex items-start gap-2.5 leading-relaxed">
            <HelpCircle className="w-5 h-5 text-slate-400 shrink-0" />
            <span>
              Calculations based on average solar irradiance of {stateData.solarMultiplier * 4.5} kWh/m²/day and PM Surya Ghar scheme specifications. Actual project values depend on rooftop shading and utility standards.
            </span>
          </div>
        </div>

        {/* Right Side: Outputs */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Recommended Solar Blueprint</h4>
          
          <div className="grid grid-cols-2 gap-4">
            {/* System Size Card */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-1">
              <span className="text-[10px] uppercase font-bold text-slate-400">System Capacity</span>
              <span className="text-2xl sm:text-3xl font-display font-black text-white flex items-baseline gap-1">
                {recommendedSize} <span className="text-xs text-slate-400">kW</span>
              </span>
              <span className="text-[10px] text-slate-500">Requires ~{requiredArea} sq.ft</span>
            </div>

            {/* Payback Period Card */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-1">
              <span className="text-[10px] uppercase font-bold text-slate-400">Payback Period</span>
              <span className="text-2xl sm:text-3xl font-display font-black text-white flex items-baseline gap-1">
                {paybackPeriod} <span className="text-xs text-slate-400">Years</span>
              </span>
              <span className="text-[10px] text-slate-500">Then 100% Free Power!</span>
            </div>
          </div>

          {/* Pricing Breakdown */}
          <div className="p-6 rounded-2xl bg-slate-950/50 border border-white/5 flex flex-col gap-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-400">Gross Setup Cost</span>
              <span className="text-white font-bold">₹{grossCost.toLocaleString("en-IN")}</span>
            </div>

            {subsidy > 0 && (
              <div className="flex justify-between items-center text-sm">
                <span className="text-energy-green flex items-center gap-1.5 font-medium">
                  <Sun className="w-4 h-4 fill-energy-green/20" /> Central Govt Subsidy
                </span>
                <span className="text-energy-green font-bold">- ₹{subsidy.toLocaleString("en-IN")}</span>
              </div>
            )}

            {taxBenefit > 0 && (
              <div className="flex justify-between items-center text-sm">
                <span className="text-accent-blue flex items-center gap-1.5 font-medium">
                  💼 Corp Tax Depreciation Benefit
                </span>
                <span className="text-accent-blue font-bold">- ₹{taxBenefit.toLocaleString("en-IN")}</span>
              </div>
            )}

            <hr className="border-white/10" />

            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-white">Estimated Net Cost</span>
              <span className="text-xl font-display font-black text-white">
                ₹{netCost.toLocaleString("en-IN")}
              </span>
            </div>
          </div>

          {/* Financial & Environmental Savings */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Eco impact */}
            <div className="p-4 rounded-2xl bg-energy-green/5 border border-energy-green/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-energy-green/10 flex items-center justify-center border border-energy-green/20 text-energy-green shrink-0">
                <Leaf className="w-5 h-5 fill-energy-green/25" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Annual CO₂ Offset</span>
                <span className="text-base font-display font-black text-energy-green">
                  {co2Offset.toFixed(1)} <span className="text-xs">Tons</span>
                </span>
                <span className="text-[10px] text-slate-500">~{treesPlanted} mature trees planted</span>
              </div>
            </div>

            {/* Financial Impact */}
            <div className="p-4 rounded-2xl bg-accent-blue/5 border border-accent-blue/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center border border-accent-blue/20 text-accent-blue shrink-0">
                <DollarSign className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Annual Savings</span>
                <span className="text-base font-display font-black text-accent-blue">
                  ₹{Math.round(yearlySavings).toLocaleString("en-IN")}
                </span>
                <span className="text-[10px] text-slate-500">Save ₹{Math.round(yearlySavings / 12).toLocaleString("en-IN")}/mo</span>
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <motion.a 
            href={`/contact?capacity=${recommendedSize}&bill=${bill}&state=${selectedState}`}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-gradient-to-r from-energy-green to-energy-hover text-dark-bg font-bold shadow-lg shadow-energy-green/25 text-sm"
          >
            Claim Central Subsidy & Book Survey
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

      </div>
    </div>
  );
}
