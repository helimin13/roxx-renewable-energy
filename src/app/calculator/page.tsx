"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import SolarSavingsCalc from "@/components/SolarSavingsCalc";

export default function CalculatorPage() {
  return (
    <>
      <Navbar />

      <main className="flex-grow pt-28">
        
        {/* HEADER SECTION */}
        <section className="relative py-16 px-4 text-center radial-grid-green border-b border-white/5">
          <div className="max-w-4xl mx-auto flex flex-col gap-4">
            <span className="text-xs font-bold text-energy-green uppercase tracking-widest font-display">Interactive Sizing Blueprint</span>
            <h1 className="font-display text-4xl sm:text-5xl font-black text-white">
              Instant Solar Savings Estimator
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Find the perfect solar setup for your residential home or commercial industry. Enter your average electricity bill to estimate system size, net pricing, and payback periods.
            </p>
          </div>
        </section>

        {/* CALCULATOR WRAPPER */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <SolarSavingsCalc />
          </div>
        </section>

      </main>

      <Chatbot />
      <Footer />
    </>
  );
}
