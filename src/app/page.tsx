"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Sun, 
  Wind, 
  Settings, 
  ShieldCheck, 
  Gauge, 
  Leaf, 
  ArrowRight, 
  HelpCircle,
  MessageSquare, 
  MapPin, 
  CheckCircle2, 
  Sparkles,
  Phone
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import EnergyDashboard from "@/components/EnergyDashboard";
import ComparisonSlider from "@/components/ComparisonSlider";
import IndiaMap from "@/components/IndiaMap";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const coreServices = [
    {
      title: "Solar Rooftop Installation",
      desc: "High-yield solar energy plants for villas, high-rises, and residential complexes with net metering.",
      icon: Sun,
      color: "text-amber-400 bg-amber-500/5 border-amber-500/10",
      link: "/services#rooftop",
    },
    {
      title: "Industrial Solar Projects",
      desc: "Large-scale captive plants and solar parks designed for factories, textiles, and cold storage units.",
      icon: Gauge,
      color: "text-energy-green bg-energy-green/5 border-energy-green/10",
      link: "/services#industrial",
    },
    {
      title: "Wind Turbine Setup",
      desc: "End-to-end site analysis, micro-siting, installation, and operation of high-wind turbine grids.",
      icon: Wind,
      color: "text-accent-blue bg-accent-blue/5 border-accent-blue/10",
      link: "/services#wind",
    },
    {
      title: "Renewable Energy Consultation",
      desc: "Feasibility studies, ROI projections, electrical grid audits, and green energy certification consulting.",
      icon: ShieldCheck,
      color: "text-yellow-400 bg-yellow-500/5 border-yellow-500/10",
      link: "/services#consultation",
    },
  ];

  const whyChooseUs = [
    {
      title: "Tier-1 Solar Panels & Inverters",
      desc: "We exclusively install high-efficiency Monocrystalline Bifacial solar modules and smart inverters from leading global Tier-1 manufacturers.",
    },
    {
      title: "25-Year Performance Warranty",
      desc: "Enjoy complete peace of mind with our solid 25-year power output warranty on solar modules and 5-year comprehensive AMC service.",
    },
    {
      title: "End-to-End Liaisoning Support",
      desc: "From DISCOM site evaluation and structural clearance to final bi-directional net meter installation, we handle all government liaisoning.",
    },
    {
      title: "ISO 9001:2015 Quality Standards",
      desc: "Our structural engineering, electrical design, and safety protocols follow strict ISO guidelines to prevent wind load or wiring issues.",
    },
  ];

  const timelineSteps = [
    {
      step: "01",
      title: "Site Audit & Assessment",
      desc: "Our engineers analyze your roof structure, shadow contours, and historical electricity bills to estimate target solar load.",
    },
    {
      step: "02",
      title: "Custom System Design",
      desc: "Using advanced 3D modeling, we design optimal solar panel placement to maximize sunlight capture throughout the year.",
    },
    {
      step: "03",
      title: "Approvals & Net Metering",
      desc: "We submit structural load reports and application files to the government utility board to fast-track net-metering approvals.",
    },
    {
      step: "04",
      title: "Professional Installation",
      desc: "Our highly trained certified engineers execute mounting, wiring, grounding, and inverter setup under strict safety guidelines.",
    },
    {
      step: "05",
      title: "Liaisoning & Commissioning",
      desc: "DISCOM executes grid inspection, installs the bi-directional net meter, and commissions the green power grid.",
    },
  ];

  const testimonials = [
    {
      quote: "ROXX solar rooftop helped us slash our steel fabrication unit's electricity bills from ₹2.5 Lakhs per month to virtually zero. The payback was achieved in less than 3 years!",
      author: "Rajesh Shah",
      role: "Managing Director, Shah Steel Industries, Ahmedabad",
    },
    {
      quote: "We installed a 10kW hybrid solar system for our organic farm in Jaipur. The power output is extremely consistent, and the net-metering credits are directly adjusted in our winter bills.",
      author: "Dr. Ananya Sharma",
      role: "Proprietor, Green Meadows Farms, Jaipur",
    },
    {
      quote: "Fabulous engineering and neat paperwork. They handled the entire DISCOM application and got our PM Surya Ghar subsidy disbursed in record time. Fully recommended!",
      author: "Vikram Malhotra",
      role: "Resident Association President, Skyview Towers, Mumbai",
    },
  ];

  const recentProjects = [
    {
      title: "5.2MW Solar Park",
      location: "Rajkot, Gujarat",
      type: "Industrial Ground Mount",
    },
    {
      title: "450kW Rooftop Array",
      location: "Thane, Maharashtra",
      type: "Commercial Building",
    },
    {
      title: "2.4MW Wind Project",
      location: "Jaisalmer, Rajasthan",
      type: "Wind Turbine Grid",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-grow pt-20">
        
        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden radial-grid-green py-20 px-4">
          {/* Glowing orb decorative background */}
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-energy-green/10 rounded-full blur-3xl -z-10 animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-blue/5 rounded-full blur-3xl -z-10 animate-pulse-slow" style={{ animationDelay: "2s" }} />

          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Hero Text */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs font-bold text-energy-green self-center lg:self-start">
                <Sparkles className="w-3.5 h-3.5" /> Direct Government Subsidy Enabled
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                Powering the Future with <span className="text-transparent bg-clip-text bg-gradient-to-r from-energy-green via-emerald-400 to-accent-blue text-glow-green">Clean Energy</span>
              </h1>
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Roxx Renewable Energy LLP delivers smart, high-performance solar rooftops, wind grids, and end-to-end industrial EPC solutions to build India's net-zero carbon future.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-4">
                <Link href="/contact" className="w-full sm:w-auto">
                  <button className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-energy-green to-energy-hover text-dark-bg font-extrabold text-sm shadow-xl shadow-energy-green/20 hover:shadow-energy-green/30 hover:scale-[1.02] transition-all group">
                    Get Free Consultation
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
                <Link href="/calculator" className="w-full sm:w-auto">
                  <button className="w-full px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-energy-green/30 text-white hover:bg-white/10 font-bold text-sm transition-colors">
                    Estimate Solar Savings
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Hero Graphic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[380px] aspect-square rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 flex items-center justify-center shadow-2xl p-6 overflow-hidden">
                <div className="absolute inset-0 bg-radial-grid-card pointer-events-none" />
                
                {/* Visual animated windmills and solar elements using SVGs */}
                <div className="flex flex-col items-center gap-6 relative z-10 w-full text-center">
                  <div className="flex gap-6 justify-center">
                    
                    {/* Solar Panel Icon */}
                    <div className="w-20 h-20 rounded-2xl bg-amber-500/5 border border-amber-500/20 flex items-center justify-center text-amber-400 shadow-lg shadow-amber-500/5">
                      <Sun className="w-10 h-10 animate-pulse-slow fill-amber-400/10" />
                    </div>

                    {/* Wind Turbine Icon */}
                    <div className="w-20 h-20 rounded-2xl bg-accent-blue/5 border border-accent-blue/20 flex items-center justify-center text-accent-blue shadow-lg shadow-accent-blue/5">
                      <Wind className="w-10 h-10 animate-spin-slow" />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-1.5 px-4">
                    <span className="text-sm font-display font-extrabold text-white">ISO 9001:2015 Corporate Grade</span>
                    <p className="text-[11px] text-slate-400 leading-normal">Ensuring high performance and absolute reliability for small homes and massive heavy manufacturing plants alike.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LIVE ENERGY COUNTER STATS */}
        <section className="bg-slate-950/40 py-16 px-4 border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-bold text-energy-green uppercase tracking-widest">Real-time achievements</span>
              <h2 className="font-display text-2xl sm:text-3xl font-black text-white mt-1">Our Collective Ecological Footprint</h2>
            </div>
            <EnergyDashboard />
          </div>
        </section>

        {/* OUR SERVICES */}
        <section className="py-24 px-4 radial-grid-green">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center gap-4 mb-16">
              <span className="text-xs font-bold text-energy-green uppercase tracking-widest">Premium Energy Solutions</span>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-white">
                Engineered for High Power Yields
              </h2>
              <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
                From residential solar installations under PM Surya Ghar Yojana to gigawatt-scale corporate hybrid projects, we deliver end-to-end solar & wind EPC.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreServices.map((srv, i) => {
                const Icon = srv.icon;
                return (
                  <motion.div
                    key={srv.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between"
                  >
                    <div>
                      <div className={`p-3 rounded-xl border self-start mb-6 inline-flex ${srv.color}`}>
                        <Icon className="w-6 h-6 stroke-[2]" />
                      </div>
                      <h3 className="font-display text-lg font-bold text-white mb-2">{srv.title}</h3>
                      <p className="text-slate-400 text-xs leading-relaxed mb-6">{srv.desc}</p>
                    </div>
                    
                    <Link href={srv.link} className="text-xs font-bold text-white flex items-center gap-1.5 hover:text-energy-green group transition-colors mt-auto">
                      Explore Technical Specifications
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* DYNAMIC COST COMPARISON SLIDER */}
        <section className="py-20 px-4 bg-slate-950/20 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <ComparisonSlider />
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
            
            {/* Left Side */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-xs font-bold text-energy-green uppercase tracking-widest">Industry Benchmarks</span>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-white leading-tight">
                The ROXX Quality Guarantee
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Renewable installations are 25+ year capital investments. We do not cut corners. Our structural engineering, module choices, and grid liaisoning are designed for optimum generation and lightning-safe operations.
              </p>
              
              <div className="flex flex-col gap-4 mt-2">
                <div className="flex gap-3.5 items-center">
                  <div className="w-6 h-6 rounded-full bg-energy-green/10 border border-energy-green/20 flex items-center justify-center text-energy-green">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-slate-200">ISO 9001:2015 Certified Workflows</span>
                </div>
                <div className="flex gap-3.5 items-center">
                  <div className="w-6 h-6 rounded-full bg-energy-green/10 border border-energy-green/20 flex items-center justify-center text-energy-green">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-slate-200">Tier-1 Approved ALMM Modules Only</span>
                </div>
                <div className="flex gap-3.5 items-center">
                  <div className="w-6 h-6 rounded-full bg-energy-green/10 border border-energy-green/20 flex items-center justify-center text-energy-green">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-slate-200">End-to-End In-House Engineering Team</span>
                </div>
              </div>
            </div>

            {/* Right Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyChooseUs.map((item, index) => (
                <div key={item.title} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-energy-green/20 transition-all flex flex-col gap-3">
                  <span className="text-xs font-bold text-energy-green font-display">0{index + 1}.</span>
                  <h3 className="font-display font-bold text-sm text-white">{item.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* TIMELINE PROCESS */}
        <section className="py-24 px-4 bg-slate-950/40 border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center gap-4 mb-16">
              <span className="text-xs font-bold text-energy-green uppercase tracking-widest">Seamless Integration</span>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-white">
                Our 5-Step Execution Roadmap
              </h2>
              <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
                We handle the entire journey from legal approvals to physical installation, ensuring a completely hands-off execution experience for you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {timelineSteps.map((step, i) => (
                <div key={step.step} className="flex flex-col gap-4 relative">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-energy-green/10 border border-energy-green/20 text-energy-green font-display font-black text-sm flex items-center justify-center shadow-lg">
                      {step.step}
                    </div>
                    {i < 4 && (
                      <div className="hidden lg:block absolute left-[44px] right-[-15px] top-5 h-[1px] bg-gradient-to-r from-energy-green/30 to-transparent -z-10" />
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display font-bold text-sm text-white mt-2">{step.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FLAGSHIP PROJECTS CAROUSEL */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-16">
              <div>
                <span className="text-xs font-bold text-energy-green uppercase tracking-widest">Completed installations</span>
                <h2 className="font-display text-3xl sm:text-4xl font-black text-white mt-2">
                  Our Flagship Case Studies
                </h2>
              </div>
              <Link href="/projects">
                <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-energy-green/30 text-white font-bold text-xs transition-colors group">
                  View Project Gallery
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentProjects.map((p, index) => (
                <div key={p.title} className="p-6 rounded-2xl glass-panel border border-white/5 flex flex-col justify-between hover:border-energy-green/20 transition-all">
                  <div className="flex flex-col gap-4">
                    <div className="w-full aspect-[16/10] bg-white/5 rounded-xl border border-white/5 flex flex-col items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-energy-green/5 to-accent-blue/5" />
                      <Sun className="w-12 h-12 text-slate-600 fill-slate-700/10 animate-pulse-slow" />
                      <span className="text-[10px] text-slate-500 font-semibold absolute bottom-3">ROXX APPROVED SITE #{1000 + index}</span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[10px] uppercase font-bold text-slate-400">{p.type}</span>
                      <h3 className="font-display text-lg font-bold text-white">{p.title}</h3>
                      <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-energy-green" /> {p.location}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INTERACTIVE GEOGRAPHY MAP */}
        <section className="py-24 px-4 bg-slate-950/20 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <IndiaMap />
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 px-4 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-energy-green uppercase tracking-widest">Client Testimonials</span>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-white mt-2">
                Trusted by 4,000+ Indian Businesses & Families
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div key={t.author} className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all flex flex-col justify-between relative">
                  <p className="text-slate-300 text-sm leading-relaxed italic mb-8 relative z-10">
                    "{t.quote}"
                  </p>
                  
                  <div className="flex flex-col gap-0.5 border-t border-white/5 pt-4">
                    <strong className="text-sm text-white font-display">{t.author}</strong>
                    <span className="text-xs text-slate-500 font-medium">{t.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LEAD CAPTURE & CONTACT */}
        <section className="py-24 px-4 bg-slate-950/40 border-t border-white/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
            
            {/* Left */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-xs font-bold text-energy-green uppercase tracking-widest">Get Free Consultation</span>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-white leading-tight">
                Switch to Clean Power in 3 Easy Steps
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Contact our corporate engineering team. We will analyze your utility bill history and dispatch an engineer for an on-site structural and shading evaluation.
              </p>
              
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-energy-green/10 flex items-center justify-center text-energy-green shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 font-bold uppercase">Direct Phone Support</span>
                  <a href="tel:+917940001000" className="text-sm font-bold text-white hover:text-energy-green transition-colors">
                    +91 79 4000 1000
                  </a>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </section>

      </main>

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/917940001000?text=I%20am%20interested%20in%20Roxx%20Renewable%20Energy%20Solar%20installation"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-105 transition-all border border-emerald-400/25 group"
        aria-label="Contact us on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 text-white stroke-[2.5] fill-white/10" />
        <span className="absolute left-16 bg-dark-bg/90 border border-white/10 text-white text-[10px] font-bold py-1.5 px-3 rounded-lg shadow-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap">
          Chat with Energy Expert
        </span>
      </a>

      <Chatbot />
      <Footer />
    </>
  );
}
