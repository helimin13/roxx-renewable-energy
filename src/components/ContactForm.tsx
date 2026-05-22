"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck, AlertCircle } from "lucide-react";

interface FormState {
  name: string;
  phone: string;
  email: string;
  state: string;
  profile: "residential" | "commercial";
  bill: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    state: "Gujarat",
    profile: "residential",
    bill: "",
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const tempErrors: Partial<FormState> = {};
    if (!form.name.trim()) tempErrors.name = "Full name is required";
    if (!form.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
      tempErrors.phone = "Enter a valid 10-digit Indian phone number";
    }
    if (!form.email.trim()) {
      tempErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email.trim())) {
      tempErrors.email = "Enter a valid email address";
    }
    if (!form.bill.trim()) {
      tempErrors.bill = "Please specify average monthly bill";
    } else if (isNaN(Number(form.bill)) || Number(form.bill) <= 0) {
      tempErrors.bill = "Enter a valid bill amount";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setForm({
        name: "",
        phone: "",
        email: "",
        state: "Gujarat",
        profile: "residential",
        bill: "",
      });
    }, 1200);
  };

  return (
    <div className="w-full glass-panel border border-white/5 rounded-2xl p-6 sm:p-8 relative">
      {success ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center text-center py-8 gap-4"
        >
          <div className="w-14 h-14 rounded-full bg-energy-green/10 border border-energy-green/20 text-energy-green flex items-center justify-center shadow-lg shadow-energy-green/10">
            <Check className="w-8 h-8 stroke-[2.5]" />
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-white">Consultation Booked Successfully!</h3>
            <p className="text-xs text-slate-400 mt-2 max-w-sm leading-relaxed">
              Thank you for contacting ROXX Renewable Energy LLP. Our engineering lead will call you within 2-4 business hours to analyze your roof dimensions.
            </p>
          </div>
          <button
            onClick={() => setSuccess(false)}
            className="mt-4 px-5 py-2.5 rounded-xl border border-white/10 hover:border-energy-green/30 text-white font-bold text-xs transition-colors"
          >
            Submit Another Request
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="w-5 h-5 text-energy-green" />
            <h3 className="font-display font-bold text-base text-white">Book Free Rooftop Feasibility Survey</h3>
          </div>

          {/* Full Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
            <input
              type="text"
              placeholder="e.g. Ramesh Patel"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={`w-full py-2.5 px-4 bg-white/5 rounded-xl border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                errors.name ? "border-red-500/50 focus:ring-red-500/50" : "border-white/10 focus:border-energy-green/50 focus:ring-energy-green/50"
              }`}
            />
            {errors.name && <span className="text-[10px] text-red-400 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.name}</span>}
          </div>

          {/* Contact Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Phone Number</label>
              <input
                type="text"
                placeholder="e.g. 9876543210"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={`w-full py-2.5 px-4 bg-white/5 rounded-xl border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                  errors.phone ? "border-red-500/50 focus:ring-red-500/50" : "border-white/10 focus:border-energy-green/50 focus:ring-energy-green/50"
                }`}
              />
              {errors.phone && <span className="text-[10px] text-red-400 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.phone}</span>}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
              <input
                type="email"
                placeholder="e.g. ramesh@gmail.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={`w-full py-2.5 px-4 bg-white/5 rounded-xl border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                  errors.email ? "border-red-500/50 focus:ring-red-500/50" : "border-white/10 focus:border-energy-green/50 focus:ring-energy-green/50"
                }`}
              />
              {errors.email && <span className="text-[10px] text-red-400 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</span>}
            </div>
          </div>

          {/* Project Details Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Profile Selection */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Project Profile</label>
              <select
                value={form.profile}
                onChange={(e) => setForm({ ...form, profile: e.target.value as "residential" | "commercial" })}
                className="w-full py-2.5 px-4 bg-white/5 rounded-xl border border-white/10 text-sm text-white focus:outline-none focus:border-energy-green/50"
              >
                <option value="residential" className="bg-dark-card text-white">Residential Home</option>
                <option value="commercial" className="bg-dark-card text-white">Commercial / Factory</option>
              </select>
            </div>

            {/* Monthly bill */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Avg Monthly Bill (INR)</label>
              <input
                type="text"
                placeholder="e.g. 8000"
                value={form.bill}
                onChange={(e) => setForm({ ...form, bill: e.target.value })}
                className={`w-full py-2.5 px-4 bg-white/5 rounded-xl border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                  errors.bill ? "border-red-500/50 focus:ring-red-500/50" : "border-white/10 focus:border-energy-green/50 focus:ring-energy-green/50"
                }`}
              />
              {errors.bill && <span className="text-[10px] text-red-400 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.bill}</span>}
            </div>
          </div>

          {/* State */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Your Location (State)</label>
            <select
              value={form.state}
              onChange={(e) => setForm({ ...form, state: e.target.value })}
              className="w-full py-2.5 px-4 bg-white/5 rounded-xl border border-white/10 text-sm text-white focus:outline-none focus:border-energy-green/50"
            >
              <option value="Gujarat" className="bg-dark-card text-white">Gujarat</option>
              <option value="Maharashtra" className="bg-dark-card text-white">Maharashtra</option>
              <option value="Rajasthan" className="bg-dark-card text-white">Rajasthan</option>
              <option value="Delhi-NCR" className="bg-dark-card text-white">Delhi-NCR</option>
              <option value="Karnataka" className="bg-dark-card text-white">Karnataka</option>
              <option value="Tamil Nadu" className="bg-dark-card text-white">Tamil Nadu</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center py-3.5 rounded-xl bg-gradient-to-r from-energy-green to-energy-hover text-dark-bg font-extrabold text-sm shadow-lg shadow-energy-green/10 hover:shadow-energy-green/20 disabled:opacity-50 transition-all mt-2"
          >
            {isSubmitting ? "Submitting Request..." : "Request Site Survey & Custom Quote"}
          </button>
        </form>
      )}
    </div>
  );
}
