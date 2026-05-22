"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Calendar, Check, Send, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function Careers() {
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    position: "Solar Project Engineer",
    link: "",
  });

  const jobs = [
    {
      title: "Solar Project Engineer",
      dept: "Engineering & Design",
      loc: "Ahmedabad, Gujarat",
      type: "Full-Time",
      experience: "2-4 Years",
      desc: "Prepare 3D layouts, structural wind load analysis, string configurations, and select single-line diagram components.",
    },
    {
      title: "Business Development Manager",
      dept: "Industrial Sales",
      loc: "Mumbai, Maharashtra",
      type: "Full-Time",
      experience: "4-6 Years",
      desc: "Drive commercial solar EPC acquisitions, negotiate power purchase agreements (PPAs), and interface with corporate factory clients.",
    },
    {
      title: "O&M / Maintenance Technician",
      dept: "Operations & AMC",
      loc: "Jaipur, Rajasthan",
      type: "Full-Time",
      experience: "1-3 Years",
      desc: "Conduct diagnostic cleanings, thermal scanner analysis of string combiner boxes, and perform repair interventions.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setForm({
        name: "",
        phone: "",
        email: "",
        position: "Solar Project Engineer",
        link: "",
      });
    }, 1200);
  };

  return (
    <>
      <Navbar />

      <main className="flex-grow pt-28">
        
        {/* HEADER SECTION */}
        <section className="relative py-16 px-4 text-center radial-grid-green border-b border-white/5">
          <div className="max-w-4xl mx-auto flex flex-col gap-4">
            <span className="text-xs font-bold text-energy-green uppercase tracking-widest">Join Our Team</span>
            <h1 className="font-display text-4xl sm:text-5xl font-black text-white">
              Power India's Clean Future
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              At Roxx Renewable Energy LLP, we are building a state-of-the-art clean energy workforce. Explore our open positions and build your career in solar, wind, and smart microgrids.
            </p>
          </div>
        </section>

        {/* OPEN POSITIONS & APPLICATION FORM */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16">
            
            {/* Open Positions */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <h2 className="font-display text-2xl font-black text-white flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-energy-green" /> Current Openings
              </h2>
              
              <div className="flex flex-col gap-4 mt-2">
                {jobs.map((j) => (
                  <div key={j.title} className="p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-3 hover:border-white/10 transition-colors">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex flex-col gap-0.5">
                        <h3 className="font-display font-bold text-base text-white">{j.title}</h3>
                        <span className="text-[11px] font-bold text-energy-green uppercase tracking-wider">{j.dept}</span>
                      </div>
                      <span className="px-2.5 py-1 bg-white/5 rounded-lg text-[10px] font-bold text-slate-400">
                        {j.type}
                      </span>
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed">{j.desc}</p>
                    
                    <div className="flex flex-wrap gap-4 text-xs text-slate-500 font-medium mt-2 pt-3 border-t border-white/5">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-energy-green" /> {j.loc}
                      </span>
                      <span className="flex items-center gap-1">
                        💼 Exp: {j.experience}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-5">
              <div className="w-full glass-panel border border-white/5 rounded-2xl p-6 sm:p-8 relative">
                {success ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center text-center py-8 gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-energy-green/10 text-energy-green flex items-center justify-center border border-energy-green/20">
                      <Check className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-white">Application Received!</h3>
                      <p className="text-xs text-slate-400 mt-2">
                        We have successfully logged your resume. If your profile matches our requirements, our HR team will reach out within 3-5 working days.
                      </p>
                    </div>
                    <button
                      onClick={() => setSuccess(false)}
                      className="px-4 py-2 rounded-xl border border-white/10 hover:border-energy-green/30 text-white font-bold text-xs"
                    >
                      Apply for Another Job
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-energy-green" />
                      <h3 className="font-display font-bold text-base text-white">Submit Online Application</h3>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Priyanjali Sen"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full py-2.5 px-4 bg-white/5 rounded-xl border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-energy-green/50"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. sen@work.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full py-2.5 px-4 bg-white/5 rounded-xl border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-energy-green/50"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Phone Number</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 9876543210"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full py-2.5 px-4 bg-white/5 rounded-xl border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-energy-green/50"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Target Position</label>
                      <select
                        value={form.position}
                        onChange={(e) => setForm({ ...form, position: e.target.value })}
                        className="w-full py-2.5 px-4 bg-white/5 rounded-xl border border-white/10 text-sm text-white focus:outline-none focus:border-energy-green/50"
                      >
                        {jobs.map((j) => (
                          <option key={j.title} value={j.title} className="bg-dark-card text-white">
                            {j.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Portfolio / Resume Link</label>
                      <input
                        type="url"
                        placeholder="e.g. drive.google.com/resume"
                        value={form.link}
                        onChange={(e) => setForm({ ...form, link: e.target.value })}
                        className="w-full py-2.5 px-4 bg-white/5 rounded-xl border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-energy-green/50"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-energy-green to-energy-hover text-dark-bg font-extrabold text-sm shadow-lg disabled:opacity-50 transition-all mt-2"
                    >
                      <Send className="w-4 h-4 stroke-[2.5]" />
                      {isSubmitting ? "Uploading Resume..." : "Submit Online Application"}
                    </button>
                  </form>
                )}
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
