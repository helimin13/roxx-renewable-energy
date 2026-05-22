"use client";

import { MapPin, Phone, Mail, Clock, MessageSquare, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  const offices = [
    {
      city: "Ahmedabad, Gujarat",
      role: "Corporate Headquarters",
      address: "802, Roxx Eco Tower, SG Highway, Ahmedabad - 380054",
      phone: "+91 79 4000 1000",
      email: "info@roxxenergy.com",
    },
    {
      city: "Mumbai, Maharashtra",
      role: "Regional Sales & PPA Office",
      address: "Suite 412, Platinum Technopark, Sector 30, Vashi, Navi Mumbai - 400703",
      phone: "+91 22 4000 2000",
      email: "mumbai@roxxenergy.com",
    },
    {
      city: "Jaipur, Rajasthan",
      role: "Engineering & Maintenance Hub",
      address: "B-22, Industrial Area Phase II, Malviya Nagar, Jaipur - 302017",
      phone: "+91 141 4000 3000",
      email: "jaipur@roxxenergy.com",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-grow pt-28">
        
        {/* HEADER SECTION */}
        <section className="relative py-16 px-4 text-center radial-grid-green border-b border-white/5">
          <div className="max-w-4xl mx-auto flex flex-col gap-4">
            <span className="text-xs font-bold text-energy-green uppercase tracking-widest">Contact Engineering</span>
            <h1 className="font-display text-4xl sm:text-5xl font-black text-white">
              Accelerate Your Solar Transition
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Have questions about solar savings, government subsidies, or net metering approvals? Our dedicated engineering team is here to guide you.
            </p>
          </div>
        </section>

        {/* OFFICE HUB CARDS & FORM */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16">
            
            {/* Offices details */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold text-energy-green uppercase tracking-widest">Our Locations</span>
                <h2 className="font-display text-2xl font-black text-white">Strategic Corporate Offices</h2>
              </div>
              
              <div className="flex flex-col gap-6">
                {offices.map((off) => (
                  <div key={off.city} className="p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-3">
                    <div className="flex justify-between items-start gap-4 border-b border-white/5 pb-3">
                      <div className="flex flex-col gap-0.5">
                        <h3 className="font-display font-bold text-base text-white">{off.city}</h3>
                        <span className="text-[10px] font-bold text-energy-green uppercase tracking-wider">{off.role}</span>
                      </div>
                    </div>
                    
                    <ul className="flex flex-col gap-3 text-xs text-slate-400 mt-2">
                      <li className="flex gap-2.5 items-start">
                        <MapPin className="w-4 h-4 text-energy-green shrink-0 mt-0.5" />
                        <span>{off.address}</span>
                      </li>
                      <li className="flex gap-2.5 items-center">
                        <Phone className="w-4 h-4 text-energy-green shrink-0" />
                        <a href={`tel:${off.phone.replace(/\s+/g, "")}`} className="hover:text-white transition-colors">
                          {off.phone}
                        </a>
                      </li>
                      <li className="flex gap-2.5 items-center">
                        <Mail className="w-4 h-4 text-energy-green shrink-0" />
                        <a href={`mailto:${off.email}`} className="hover:text-white transition-colors">
                          {off.email}
                        </a>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Form & Map */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              <ContactForm />
              
              {/* Mock Map Viewports */}
              <div className="w-full h-[260px] rounded-2xl bg-slate-950/40 border border-white/5 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_16px]" />
                <div className="absolute inset-0 bg-gradient-to-br from-energy-green/5 to-transparent pointer-events-none" />
                <div className="flex flex-col items-center gap-3 relative z-10 text-center px-6">
                  <div className="w-12 h-12 rounded-xl bg-energy-green/10 border border-energy-green/20 flex items-center justify-center text-energy-green shadow-lg">
                    <Clock className="w-6 h-6" />
                  </div>
                  <span className="font-display font-bold text-sm text-white">Site Survey Active: Mon-Sat, 9AM-6PM</span>
                  <p className="text-xs text-slate-400 leading-normal max-w-sm">Engineers are dispatched for structural roof surveys and electrical sizing analysis on all business days.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>

      <Chatbot />
      <Footer />
    </>
  );
}
