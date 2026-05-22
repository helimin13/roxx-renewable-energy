"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Target, Eye, Users2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function About() {
  const leadership = [
    {
      name: "Devendra K. Patel",
      role: "Co-Founder & Managing Partner",
      bio: "20+ years of industrial power grid experience. Leading corporate strategy and government liaisoning policies at ROXX.",
    },
    {
      name: "Dr. Samir R. Mehta",
      role: "Chief Technology Officer",
      bio: "Ph.D. in Photovoltaic systems from IIT Bombay. Spearheads high-yield engineering design and battery storage R&D.",
    },
    {
      name: "Meera A. Iyer",
      role: "Head of Operations & EPC Project Execution",
      bio: "Executed 150MW+ utility-scale projects. Expert in DISCOM approvals, timeline control, and safety standard compliance.",
    },
  ];

  const values = [
    {
      title: "Absolute Sustainability",
      desc: "Every solar panel and wind turbine we commission displaces tons of fossil fuel carbon, moving India closer to its Net-Zero goals.",
      icon: Target,
    },
    {
      title: "Uncompromising Quality",
      desc: "We exclusively source ALMM approved Tier-1 manufacturers, utilizing heavy structural designs rated for 150km/h wind loads.",
      icon: ShieldCheck,
    },
    {
      title: "Ethical Liaisoning",
      desc: "We maintain 100% transparency in government subsidy applications, billing adjustments, and grid code approvals.",
      icon: Award,
    },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-grow pt-28">
        
        {/* HEADER SECTION */}
        <section className="relative py-16 px-4 text-center radial-grid-green border-b border-white/5">
          <div className="max-w-4xl mx-auto flex flex-col gap-4">
            <span className="text-xs font-bold text-energy-green uppercase tracking-widest">Corporate Profile</span>
            <h1 className="font-display text-4xl sm:text-5xl font-black text-white">
              Leading the Clean Energy Transition
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Established in Ahmedabad, Gujarat, Roxx Renewable Energy LLP has grown into a trusted Pan-India EPC partner, empowering industries, homes, and public utilities with high-performance solar and wind installations.
            </p>
          </div>
        </section>

        {/* VISION & MISSION SECTION */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-energy-green/5 rounded-full blur-2xl pointer-events-none" />
              <div className="w-12 h-12 rounded-xl bg-energy-green/10 flex items-center justify-center text-energy-green border border-energy-green/20">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="font-display text-xl font-bold text-white">Our Vision</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                To become India's most trusted partner in decentralized renewable power grids, enabling every rooftop to become an eco-friendly energy-generating asset that pays for itself.
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-blue/5 rounded-full blur-2xl pointer-events-none" />
              <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue border border-accent-blue/20">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="font-display text-xl font-bold text-white">Our Mission</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                To design, build, and maintain highly efficient solar and wind installations with zero downtime, ensuring seamless Net Metering integration and maximizing return on investments.
              </p>
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="py-20 px-4 bg-slate-950/20 border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-energy-green uppercase tracking-widest">Our DNA</span>
              <h2 className="font-display text-3xl font-black text-white mt-1">Core Organizational Values</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="p-6 rounded-2xl glass-panel border border-white/5 flex flex-col gap-4 hover:border-energy-green/20 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-energy-green border border-white/5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-base font-bold text-white">{v.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* LEADERSHIP TEAM */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-energy-green uppercase tracking-widest">Steering Our Success</span>
              <h2 className="font-display text-3xl font-black text-white mt-1">Experienced Management</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadership.map((l) => (
                <div key={l.name} className="p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-slate-950/50 border border-white/10 flex items-center justify-center text-slate-500">
                    <Users2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-white">{l.name}</h3>
                    <span className="text-[11px] font-bold text-energy-green uppercase tracking-wider">{l.role}</span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {l.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Chatbot />
      <Footer />
    </>
  );
}
