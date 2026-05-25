"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email.");
      return;
    }
    setError("");
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="bg-dark-bg border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[300px] bg-gradient-to-t from-energy-green/5 to-transparent pointer-events-none blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <Logo href="/" size="md" className="self-start" />
            <p className="text-slate-400 text-sm leading-relaxed">
              Leading the shift towards sustainable power. ROXX Renewable Energy LLP delivers premium solar, wind, and smart energy EPC systems across India.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-energy-green hover:bg-white/10 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.732s.784-1.732 1.75-1.732 1.75.779 1.75 1.732-.783 1.732-1.75 1.732zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-energy-green hover:bg-white/10 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-10.95z" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-energy-green hover:bg-white/10 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-7.007 3.747 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-energy-green hover:bg-white/10 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.015-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="font-display font-semibold text-white tracking-wide text-sm uppercase">Quick Links</h3>
            <ul className="flex flex-col gap-3.5 text-slate-400 text-sm">
              <li>
                <Link href="/about" className="hover:text-energy-green transition-colors">About Our Corporate Journey</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-energy-green transition-colors">Our Energy Solutions</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-energy-green transition-colors">Flagship Project Gallery</Link>
              </li>
              <li>
                <Link href="/calculator" className="hover:text-energy-green transition-colors">Solar Savings Calculator</Link>
              </li>
              <li>
                <Link href="/subsidy" className="hover:text-energy-green transition-colors">Govt Subsidies & Benefits</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-energy-green transition-colors">Careers & Current Openings</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-6">
            <h3 className="font-display font-semibold text-white tracking-wide text-sm uppercase">Headquarters</h3>
            <ul className="flex flex-col gap-4 text-slate-400 text-sm">
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-energy-green shrink-0 mt-0.5" />
                <span>
                  <strong>Corporate HQ:</strong><br />
                  115, Shripad Aayansh, Sargasan, Gandhinagar, Gujarat - 382421
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-4.5 h-4.5 text-energy-green shrink-0" />
                <a href="tel:+919998656501" className="hover:text-white transition-colors">+91 9998656592</a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-4.5 h-4.5 text-energy-green shrink-0" />
                <a href="mailto:info@roxxenergy.com" className="hover:text-white transition-colors">info@roxxenergy.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-6">
            <h3 className="font-display font-semibold text-white tracking-wide text-sm uppercase">Stay Updated</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Subscribe to the ROXX Green Pulse for monthly insights on subsidies, net metering, and clean tech.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter work email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  className="w-full pl-4 pr-11 py-3 bg-white/5 rounded-xl text-sm border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-energy-green/50 focus:ring-1 focus:ring-energy-green/20 transition-all"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3.5 bg-energy-green text-dark-bg rounded-lg flex items-center justify-center hover:bg-energy-hover transition-colors"
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
              {error && <span className="text-xs text-red-400 px-1">{error}</span>}
              {subscribed && (
                <span className="text-xs text-energy-green px-1">
                  Thank you! You are now subscribed.
                </span>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap justify-center gap-6 text-slate-500 text-xs">
            <span>© {new Date().getFullYear()} Roxx Renewable Energy LLP. All rights reserved.</span>
            <Link href="#" className="hover:text-slate-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-300">Terms of Service</Link>
            <Link href="#" className="hover:text-slate-300">ISO 9001:2015 Certified</Link>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold uppercase tracking-wider">
            <span>Made for India's Green Future</span>
            <div className="w-2 h-2 rounded-full bg-energy-green animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  );
}
