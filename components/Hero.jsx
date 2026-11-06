"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Wrench, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[88vh] bg-darkNavy text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-bg.svg')" }}
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-darkNavy/85 via-darkNavy/75 to-darkNavy/95 pointer-events-none" />

      {/* Hero content container */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Trust Pill */}
        <motion.div
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-light mb-8 shadow-lg shadow-black/20"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-2 h-2 rounded-full bg-sky animate-ping" />
          <Zap className="w-4 h-4 text-sky" />
          <span>Premier Electrical, Elevator &amp; Appliance Engineering</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-black mb-6 tracking-tight text-white leading-[1.08] max-w-4xl"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          POWERING <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky to-light">THE FUTURE</span> WITH PRECISION
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-base sm:text-xl md:text-2xl mb-10 max-w-2xl text-light/90 font-normal leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Industrial-grade AC repairs, commercial refrigeration maintenance, certified elevator inspections, and trusted on-site security protection.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Link
            href="/services"
            className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-xl font-bold text-base shadow-xl shadow-primary/30 hover:bg-royal hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-5 h-5 text-sky" />
          </Link>

          <Link
            href="/contact"
            className="flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-xl font-bold text-base hover:bg-white hover:text-darkNavy hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Book Immediate Repair
          </Link>
        </motion.div>

        {/* Key Metrics / Trust Stats Bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-sky mb-1">25,000+</span>
            <span className="text-xs sm:text-sm text-light/80 font-medium">Successful Repairs</span>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-sky mb-1">99.8%</span>
            <span className="text-xs sm:text-sm text-light/80 font-medium">Client Satisfaction</span>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-sky mb-1">15+ Mins</span>
            <span className="text-xs sm:text-sm text-light/80 font-medium">Emergency Response</span>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-sky mb-1">100%</span>
            <span className="text-xs sm:text-sm text-light/80 font-medium">Certified Technicians</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
