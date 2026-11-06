"use client";
import React from "react";
import Link from "next/link";
import { ShieldCheck, Target, Eye, Award, CheckCircle2, Users, ArrowRight, Zap, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const values = [
    {
      title: "Technical Rigor",
      desc: "We approach every repair with precision diagnostics, using calibrated digital tools to eliminate guesswork.",
      icon: Zap,
    },
    {
      title: "Speed with Safety",
      desc: "Emergency requests are prioritized without ever compromising on standard operating safety procedures.",
      icon: Clock,
    },
    {
      title: "Uncompromising Integrity",
      desc: "Clear upfront estimates, genuine manufacturer parts, and zero hidden fees on every invoice.",
      icon: ShieldCheck,
    },
    {
      title: "Certified Mastery",
      desc: "Continuous technical certifications for all elevator engineers, HVAC specialists, and security teams.",
      icon: Award,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* 1. Header Hero Banner */}
      <section className="bg-gradient-to-r from-darkNavy via-royal to-primary text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(85,184,255,0.2),transparent_50%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-sky bg-white/10 px-4 py-1.5 rounded-full mb-4 border border-white/15">
            About PowerSupply
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
            Engineering Trust, Safety &amp; Reliability
          </h1>
          <p className="text-light/90 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
            From industrial HVAC chilling systems to high-speed commercial lifts and protective security squads, PowerSupply is your single-source partner for facilities resilience.
          </p>
        </div>
      </section>

      {/* 2. Company Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-light px-3.5 py-1.5 rounded-full inline-block mb-4">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-darkNavy tracking-tight mb-6">
              Built On Over 15 Years of Engineering Excellence
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              PowerSupply was established by veteran electrical engineers who saw a critical gap in the property service sector: too many contractors relied on temporary fixes, non-genuine parts, and inconsistent arrival times.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              We rebuilt the service experience from the ground up. Today, PowerSupply operates dedicated mobile fleets for air-conditioning repairs, refrigerator mechanics, elevator engineers, and uniformed security officers serving thousands of facilities across the region.
            </p>
            
            <div className="border-l-4 border-primary pl-4 py-1 my-6 bg-blue-50/50 rounded-r-xl">
              <p className="text-sm font-semibold text-darkNavy italic">
                &ldquo;Our promise is simple: we arrive fast, diagnose accurately, restore properly, and back every single job with an ironclad warranty.&rdquo;
              </p>
            </div>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-blue-100 shadow-xl space-y-6">
            <h3 className="text-2xl font-bold text-darkNavy mb-2">Our Operating Highlights</h3>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-light flex items-center justify-center text-primary shrink-0 mt-1">
                <CheckCircle2 className="w-5 h-5 text-royal" />
              </div>
              <div>
                <h4 className="font-bold text-darkNavy text-base">Direct In-House Technicians</h4>
                <p className="text-sm text-gray-500">We do not outsource to unverified freelancers. Every specialist is an employee backed by company insurance.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-light flex items-center justify-center text-primary shrink-0 mt-1">
                <CheckCircle2 className="w-5 h-5 text-royal" />
              </div>
              <div>
                <h4 className="font-bold text-darkNavy text-base">24/7/365 Emergency Dispatch</h4>
                <p className="text-sm text-gray-500">Our control center operates around the clock to handle critical power outages, elevator stalls, and cooling emergencies.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-light flex items-center justify-center text-primary shrink-0 mt-1">
                <CheckCircle2 className="w-5 h-5 text-royal" />
              </div>
              <div>
                <h4 className="font-bold text-darkNavy text-base">Transparent Diagnostic Billing</h4>
                <p className="text-sm text-gray-500">Written estimates with transparent parts pricing before any physical work starts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision Cards */}
      <section className="py-20 bg-slate-100/70 border-y border-slate-200/80 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-light px-3.5 py-1.5 rounded-full inline-block mb-3">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-darkNavy tracking-tight">
              Mission &amp; Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-blue-100/80 shadow-md hover:shadow-xl transition-shadow relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-royal text-white flex items-center justify-center mb-6 shadow-md shadow-royal/20">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-darkNavy mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                To deliver prompt, technically uncompromising, and transparent repair and security solutions that safeguard human comfort, building safety, and operational continuity for families and businesses.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-blue-100/80 shadow-md hover:shadow-xl transition-shadow relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center mb-6 shadow-md shadow-primary/20">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-darkNavy mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                To be the region&apos;s most reputable name in technical infrastructure maintenance, recognized for our speed, engineering integrity, zero-accident record, and customer-first service ethos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-light px-3.5 py-1.5 rounded-full inline-block mb-3">
            Core Values
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-darkNavy tracking-tight mb-4">
            What Sets Our Engineering Apart
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Every technician, dispatcher, and security guard operates according to four bedrock principles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={i} className="bg-white p-6 rounded-2xl border border-blue-100/80 shadow-sm hover:shadow-lg transition-all">
                <div className="w-11 h-11 rounded-xl bg-light flex items-center justify-center text-primary mb-5">
                  <Icon className="w-5 h-5 text-royal" />
                </div>
                <h4 className="text-lg font-bold text-darkNavy mb-2">{v.title}</h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="bg-gradient-to-r from-darkNavy via-royal to-primary text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Partner With A Reliable Team Today
          </h2>
          <p className="text-light/90 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
            Contact us for scheduled inspections, corporate maintenance contracts, or urgent technical assistance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/services"
              className="px-8 py-3.5 bg-white text-royal font-bold rounded-xl shadow-lg hover:bg-light transition-all text-sm sm:text-base"
            >
              Browse Services
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-sky text-darkNavy font-bold rounded-xl shadow-lg hover:bg-white transition-all text-sm sm:text-base"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

