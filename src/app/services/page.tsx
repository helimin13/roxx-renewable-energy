"use client";

import { motion } from "framer-motion";
import { 
  Sun, 
  Wind, 
  Settings, 
  ShieldCheck, 
  Wrench, 
  Network, 
  FileText, 
  CheckCircle,
  TrendingUp,
  Award
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function Services() {
  const allServices = [
    {
      id: "rooftop",
      title: "Solar Rooftop Installation",
      desc: "Turn your unused rooftop into a revenue-generating power plant. We design and install high-performance monocrystalline bifacial systems with custom rust-proof aluminium mounting structures.",
      benefits: ["Slashes bills by up to 90%", "Central Govt subsidy covering up to ₹78,000", "25-year performance warranty"],
      icon: Sun,
    },
    {
      id: "industrial",
      title: "Industrial Solar Projects",
      desc: "Massive scale captive power plants for factories, textiles, and manufacturing plants. Engineered to withstand high load demands and cut operating costs with accelerated depreciation benefits.",
      benefits: ["40% Accelerated Depreciation tax benefits", "Shields against grid commercial tariff hikes", "Carbon credit eligibility & audit compliance"],
      icon: TrendingUp,
    },
    {
      id: "wind",
      title: "Wind Turbine Installation",
      desc: "Complete multi-megawatt wind power installations. We perform micro-siting, wind resource analysis, civil engineering, foundation building, grid synchronization, and turbine commissioning.",
      benefits: ["High capacity factor installations", "Decentralized large-scale generation", "Complete site logistics and maintenance"],
      icon: Wind,
    },
    {
      id: "consultation",
      title: "Renewable Energy Consultation",
      desc: "Detailed feasibility studies, structural wind load analysis, shadow contour mapping, return-on-investment (ROI) models, and net-zero corporate advisory.",
      benefits: ["Precise generation calculations", "Detailed financial payback blueprints", "Utility board code compliance checking"],
      icon: ShieldCheck,
    },
    {
      id: "epc",
      title: "Full EPC Solar Projects",
      desc: "Engineering, Procurement, and Construction (EPC) under a single contract. In-house electrical drafting, structural fabrication, safety engineers, and direct procurement from Tier-1 suppliers.",
      benefits: ["Zero subcontractor delays", "Bulk hardware pricing benefits", "Dedicated project manager and daily logs"],
      icon: Network,
    },
    {
      id: "amc",
      title: "Solar Maintenance & AMC",
      desc: "Maximize solar module efficiency with professional cleaning, thermal scans of junction boxes, inverter health checkups, wire impedance testing, and annual AMC packages.",
      benefits: ["Prevents panel hotspot degradation", "Increases annual power generation by 15%", "24/7 remote generation monitoring support"],
      icon: Wrench,
    },
    {
      id: "netmetering",
      title: "Net Metering & DISCOM Support",
      desc: "Complete liaisoning with government boards (GUVNL, MSEDCL, JDVVNL, etc.) for drawing approvals, CEIG safety clearances, bi-directional meter tests, and commissioning documentation.",
      benefits: ["100% legal grid sync approvals", "Accurate billing credit adjustments", "Fast-track administrative processing"],
      icon: FileText,
    },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-grow pt-28">
        
        {/* HEADER SECTION */}
        <section className="relative py-16 px-4 text-center radial-grid-green border-b border-white/5">
          <div className="max-w-4xl mx-auto flex flex-col gap-4">
            <span className="text-xs font-bold text-energy-green uppercase tracking-widest">End-to-End Capability</span>
            <h1 className="font-display text-4xl sm:text-5xl font-black text-white">
              Premium Clean Energy Infrastructure
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We design, finance, construct, and maintain solar and wind systems that deliver optimized power yields and high financial returns. Explore our expert services.
            </p>
          </div>
        </section>

        {/* DETAILED SERVICES LIST */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto flex flex-col gap-12 sm:gap-16">
            {allServices.map((srv, index) => {
              const Icon = srv.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={srv.id}
                  id={srv.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-white/5 pb-12 sm:pb-16 last:border-0 last:pb-0 ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  
                  {/* Service Graphic representation */}
                  <div className={`lg:col-span-5 flex justify-center ${isEven ? "" : "lg:order-2"}`}>
                    <div className="w-full max-w-[340px] aspect-square rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-radial-grid-card pointer-events-none" />
                      <div className="w-20 h-20 rounded-full bg-energy-green/10 border border-energy-green/20 flex items-center justify-center text-energy-green animate-float">
                        <Icon className="w-10 h-10" />
                      </div>
                      <span className="absolute bottom-4 right-4 text-xs font-display font-black text-white/5">
                        SERVICE 0{index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className={`lg:col-span-7 flex flex-col gap-5 ${isEven ? "" : "lg:order-1"}`}>
                    <h2 className="font-display text-2xl font-black text-white">{srv.title}</h2>
                    <p className="text-slate-400 text-sm leading-relaxed">{srv.desc}</p>
                    
                    <div className="flex flex-col gap-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        What We Deliver:
                      </span>
                      {srv.benefits.map((b) => (
                        <div key={b} className="flex gap-2.5 items-start text-xs text-slate-300">
                          <CheckCircle className="w-4.5 h-4.5 text-energy-green shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </section>

      </main>

      <Chatbot />
      <Footer />
    </>
  );
}
