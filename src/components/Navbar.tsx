"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Solar Calculator", path: "/calculator" },
    { name: "Subsidy Info", path: "/subsidy" },
    { name: "Careers", path: "/careers" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-dark-bg/85 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-energy-green to-accent-blue flex items-center justify-center shadow-lg shadow-energy-green/20 group-hover:scale-105 transition-transform">
                <Zap className="w-5 h-5 text-dark-bg stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold tracking-tight text-white group-hover:text-energy-green transition-colors">
                  ROXX
                </span>
                <span className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold leading-none">
                  Renewable Energy
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors hover:text-white rounded-md ${
                      isActive ? "text-energy-green" : "text-slate-300"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-white/5 rounded-md -z-10 border border-white/5"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <Link href="/contact">
                <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-energy-green to-energy-hover text-dark-bg font-semibold text-sm hover:shadow-lg hover:shadow-energy-green/25 hover:scale-[1.02] active:scale-[0.98] transition-all group">
                  Free Quote
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden bg-dark-bg/95 backdrop-blur-lg pt-24 px-4 flex flex-col justify-between pb-12"
          >
            <div className="flex flex-col gap-2 overflow-y-auto max-h-[70vh] px-2 py-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-lg font-medium border border-transparent transition-all ${
                      isActive
                        ? "bg-energy-green/10 text-energy-green border-energy-green/10"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                    <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? "text-energy-green" : "text-slate-600"}`} />
                  </Link>
                );
              })}
            </div>

            <div className="px-4">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <button className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-energy-green to-energy-hover text-dark-bg font-bold shadow-lg shadow-energy-green/20">
                  Request Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
