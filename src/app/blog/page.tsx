"use client";

import { motion } from "framer-motion";
import { BookOpen, Calendar, Clock, ArrowRight, Sun, Wind, Gauge } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

interface BlogPost {
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  icon: any;
  iconColor: string;
}

const POSTS: BlogPost[] = [
  {
    title: "How Net Metering Works in India: A Complete Guide for Rooftops",
    category: "Policy & Liaisoning",
    date: "May 15, 2026",
    readTime: "6 Min Read",
    summary: "Net metering exports surplus energy back to the local DISCOM grid. Discover how utility boards adjust credits, how bi-directional billing operates, and how to verify adjustments.",
    icon: Gauge,
    iconColor: "text-energy-green bg-energy-green/5 border-energy-green/10",
  },
  {
    title: "Mono PERC vs Bifacial Panels: Selecting the Optimum Module Type",
    category: "Engineering Insight",
    date: "April 28, 2026",
    readTime: "8 Min Read",
    summary: "Bifacial solar modules absorb sun reflection from the rear surface, improving power yields by up to 25% on concrete roofs. Compare efficiency parameters and ROI payback metrics.",
    icon: Sun,
    iconColor: "text-amber-400 bg-amber-500/5 border-amber-500/10",
  },
  {
    title: "Transitioning Commercial Industries to Wind-Solar Hybrid Grids",
    category: "Corporate CleanTech",
    date: "April 10, 2026",
    readTime: "10 Min Read",
    summary: "Industries face heavy tariff structures and carbon limits. Learn how coupling high-yield windmills with automated solar rooftops protects power continuity and optimizes tax depreciation.",
    icon: Wind,
    iconColor: "text-accent-blue bg-accent-blue/5 border-accent-blue/10",
  },
];

export default function Blog() {
  return (
    <>
      <Navbar />

      <main className="flex-grow pt-28">
        
        {/* HEADER SECTION */}
        <section className="relative py-16 px-4 text-center radial-grid-green border-b border-white/5">
          <div className="max-w-4xl mx-auto flex flex-col gap-4">
            <span className="text-xs font-bold text-energy-green uppercase tracking-widest">Clean Energy Insights</span>
            <h1 className="font-display text-4xl sm:text-5xl font-black text-white">
              The ROXX Green Pulse Blog
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Educational articles, technical breakdowns, policy alerts, and corporate case-studies written by our leading in-house renewable engineers.
            </p>
          </div>
        </section>

        {/* FEED LIST */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto flex flex-col gap-8">
            {POSTS.map((post) => {
              const Icon = post.icon;
              return (
                <div
                  key={post.title}
                  className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all flex flex-col sm:flex-row gap-6 items-start"
                >
                  {/* Icon Block */}
                  <div className={`p-4 rounded-2xl border shrink-0 inline-flex ${post.iconColor}`}>
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Text Details */}
                  <div className="flex flex-col gap-3 flex-grow">
                    <div className="flex flex-wrap gap-4 text-xs text-slate-500 font-medium">
                      <span className="text-energy-green font-bold uppercase tracking-wider">{post.category}</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {post.readTime}
                      </span>
                    </div>

                    <h2 className="font-display text-lg sm:text-xl font-bold text-white hover:text-energy-green transition-colors leading-snug">
                      {post.title}
                    </h2>
                    
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {post.summary}
                    </p>

                    <a href="#" className="text-xs font-bold text-white flex items-center gap-1 hover:text-energy-green transition-colors mt-2 group self-start">
                      Read Full Whitepaper
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
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
