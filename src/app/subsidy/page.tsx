"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle, FileText, HelpCircle, Landmark, Sun, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function Subsidy() {
  const subsidySlabs = [
    {
      capacity: "1 Kilowatt (kW) Sizing",
      amount: "₹30,000 Cash Subsidy",
      eligibility: "Ideal for monthly electricity consumption below 150 Units.",
    },
    {
      capacity: "2 Kilowatt (kW) Sizing",
      amount: "₹60,000 Cash Subsidy",
      eligibility: "Ideal for residential homes consuming 150 to 300 Units.",
    },
    {
      capacity: "3 Kilowatt (kW) or Larger",
      amount: "₹78,000 Maximum Subsidy",
      eligibility: "Ideal for larger villas and dual-AC households consuming 300+ Units.",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "National Portal Registration",
      desc: "Register on the PM-Surya Ghar Portal using your electricity bill consumer account number and active mobile.",
    },
    {
      step: "02",
      title: "DISCOM Feasibility Approval",
      desc: "Apply for load clearance. The local power board (DISCOM) evaluates transformer load capacity in your street.",
    },
    {
      step: "03",
      title: "Empanelled Vendor Installation",
      desc: "Contract an officially empanelled vendor (like Roxx Renewable Energy LLP) to mount structural frames and wiring.",
    },
    {
      step: "04",
      title: "Net Meter Commissioning",
      desc: "DISCOM inspects the physically completed structure and replaces your traditional meter with a bi-directional net meter.",
    },
    {
      step: "05",
      title: "Subsidy Disbursement",
      desc: "Upload a photo of the commissioned system and your bank cancelled cheque. Central subsidy arrives in 30 days!",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-grow pt-28">
        
        {/* HEADER SECTION */}
        <section className="relative py-16 px-4 text-center radial-grid-green border-b border-white/5">
          <div className="max-w-4xl mx-auto flex flex-col gap-4">
            <span className="text-xs font-bold text-energy-green uppercase tracking-widest">National Subsidy Portal Support</span>
            <h1 className="font-display text-4xl sm:text-5xl font-black text-white">
              PM Surya Ghar: Muft Bijli Yojana
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Roxx Renewable Energy LLP is an officially empanelled solar vendor under the Ministry of New and Renewable Energy (MNRE). We handle 100% of your subsidy liaisoning.
            </p>
          </div>
        </section>

        {/* SUBSIDY DETAIL SLABS */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto flex flex-col gap-12">
            <div className="text-center">
              <span className="text-xs font-bold text-energy-green uppercase tracking-widest">Direct Cash Benefits</span>
              <h2 className="font-display text-2xl sm:text-3xl font-black text-white mt-1">Residential Solar Subsidy Slabs</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {subsidySlabs.map((slab) => (
                <div key={slab.capacity} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-energy-green/20 transition-all flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-xl bg-energy-green/10 flex items-center justify-center text-energy-green border border-energy-green/20">
                    <Sun className="w-5 h-5 fill-energy-green/10" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-slate-500 font-bold uppercase">{slab.capacity}</span>
                    <strong className="text-xl text-white font-display">{slab.amount}</strong>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">{slab.eligibility}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* APPLICATION ROADMAP */}
        <section className="py-20 px-4 bg-slate-950/20 border-y border-white/5">
          <div className="max-w-5xl mx-auto flex flex-col gap-12">
            <div className="text-center">
              <span className="text-xs font-bold text-energy-green uppercase tracking-widest">Procedural Guide</span>
              <h2 className="font-display text-2xl sm:text-3xl font-black text-white mt-1">How To Claim Central Subsidy</h2>
            </div>

            <div className="flex flex-col gap-6">
              {steps.map((st) => (
                <div key={st.step} className="p-6 rounded-2xl bg-white/5 border border-white/5 flex gap-4 sm:gap-6 items-start">
                  <div className="w-10 h-10 rounded-xl bg-energy-green/10 border border-energy-green/20 text-energy-green font-display font-black text-sm flex items-center justify-center shrink-0">
                    {st.step}
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-display font-bold text-sm sm:text-base text-white">{st.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{st.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VENDOR MOCK COMPLIANCE BANNER */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto glass-panel border border-white/5 rounded-3xl p-6 sm:p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-energy-green/5 rounded-full blur-3xl pointer-events-none" />
            <div className="flex flex-col items-center gap-6 relative z-10">
              <div className="w-14 h-14 rounded-full bg-energy-green/10 border border-energy-green/20 text-energy-green flex items-center justify-center">
                <Landmark className="w-7 h-7" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-xl font-bold text-white">Empanelled Partner Slashed Administration</h3>
                <p className="text-xs text-slate-400 max-w-lg leading-relaxed mx-auto">
                  Applying on the national solar portal requires multiple structural and drawing uploads. We have dedicated liaisoning executives who register and process your application at no extra administrative charge.
                </p>
              </div>
              
              <a href="/contact?apply-subsidy=true">
                <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-energy-green to-energy-hover text-dark-bg font-extrabold text-xs shadow-lg">
                  Liaison My Subsidy & Request Survey
                  <ArrowRight className="w-4 h-4" />
                </button>
              </a>
            </div>
          </div>
        </section>

      </main>

      <Chatbot />
      <Footer />
    </>
  );
}
