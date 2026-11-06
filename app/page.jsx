"use client";
import React from "react";
import Hero from "../components/Hero.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Wrench, Clock, Zap, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

const featuredServices = [
  {
    title: "AC Repair",
    description: "Certified cooling technicians for HVAC diagnostics, PCB repairs, coolant charging, and complete coil restoration.",
    image: "/images/ac.svg",
    features: ["Gas leak detection & refilling", "PCB board circuitry repairs", "Compressor efficiency tests"],
  },
  {
    title: "Fridge Repair",
    description: "Comprehensive refrigeration overhaul, defrost diagnostics, temperature calibration, and genuine parts replacement.",
    image: "/images/fridge.svg",
    features: ["Thermostat calibration", "Compressor motor replacement", "Door gasket & cooling restoration"],
  },
  {
    title: "Lift Repair",
    description: "Elevator mechanical checks, traction cable testing, control panel programming, and 24/7 emergency passenger rescue.",
    image: "/images/lift.svg",
    features: ["Hydraulic & traction servicing", "Periodic safety certification", "24/7 emergency dispatch"],
  },
  {
    title: "Security Guard Service",
    description: "Strictly trained, vetted security officers with real-time surveillance and electronic access point monitoring.",
    image: "/images/security.svg",
    features: ["Armed & unarmed certified guards", "Corporate & residential patrols", "CCTV integration support"],
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Banner */}
      <Hero />

      {/* 2. Company Introduction */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-light text-royal text-xs font-bold uppercase tracking-wider mb-4">
              <Zap className="w-3.5 h-3.5 text-primary" />
              <span>Who We Are</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-darkNavy tracking-tight leading-tight mb-6">
              Engineering Reliability For Homes &amp; Modern Enterprises
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              At <strong>PowerSupply</strong>, we provide mission-critical appliance servicing, elevator system engineering, and facility security. Whether an industrial AC chiller has stalled or a residential building requires round-the-clock security surveillance, our certified specialists are equipped to deliver fast, durable results.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-darkNavy text-sm">State-Certified Crew</h4>
                  <p className="text-xs text-gray-500">Fully licensed, bonded and background-checked technicians.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-darkNavy text-sm">Genuine Components</h4>
                  <p className="text-xs text-gray-500">OEM factory-certified replacement components only.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-darkNavy text-sm">Rapid On-Site Arrival</h4>
                  <p className="text-xs text-gray-500">Fully equipped mobile service vans ready for dispatch.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-darkNavy text-sm">Fixed Transparent Pricing</h4>
                  <p className="text-xs text-gray-500">Clear itemized quotes with zero hidden surcharges.</p>
                </div>
              </div>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-darkNavy text-white font-bold text-sm hover:bg-primary transition-colors shadow-md"
            >
              <span>Learn More About Our Company</span>
              <ArrowRight className="w-4 h-4 text-sky" />
            </Link>
          </div>

          {/* Interactive Card Presentation */}
          <div className="relative">
            <div className="bg-gradient-to-tr from-royal to-primary rounded-3xl p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky/20 rounded-full blur-2xl pointer-events-none" />
              <div className="inline-block p-3 rounded-2xl bg-white/10 backdrop-blur-md mb-6">
                <Award className="w-8 h-8 text-sky" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">
                15+ Years Of Unmatched Technical Service
              </h3>
              <p className="text-light/90 text-sm sm:text-base mb-8 leading-relaxed">
                Founded with a mission to bring engineering-level discipline to commercial and home equipment repair, PowerSupply has grown to serve over 150+ commercial properties and tens of thousands of households.
              </p>
              <div className="grid grid-cols-2 gap-4 border-t border-white/15 pt-6 text-center">
                <div>
                  <div className="text-3xl font-black text-sky">99.8%</div>
                  <div className="text-xs text-light/80 mt-1">First-Visit Fix Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-sky">24/7</div>
                  <div className="text-xs text-light/80 mt-1">Live Helpdesk</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Services Section */}
      <section className="py-20 bg-slate-100/70 border-y border-slate-200/80 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary bg-light px-3.5 py-1.5 rounded-full inline-block mb-3">
                Expert Solutions
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-darkNavy tracking-tight">
                Our Core Services
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary hover:text-royal font-bold text-sm mt-4 md:mt-0 transition-colors"
            >
              <span>Explore All 4 Services In Detail</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((svc) => (
              <ServiceCard key={svc.title} {...svc} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-light px-3.5 py-1.5 rounded-full inline-block mb-3">
            The PowerSupply Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-darkNavy tracking-tight mb-4">
            Why Property Managers &amp; Homeowners Rely On Us
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            We hold ourselves to rigorous engineering standards, continuous safety training, and an unwavering commitment to rapid response times.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-blue-100/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-light flex items-center justify-center text-primary mb-6">
              <Clock className="w-6 h-6 text-royal" />
            </div>
            <h3 className="text-xl font-bold text-darkNavy mb-3">Under-60-Min Emergency Response</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              When elevators stall or cooling compressors fail during peak temperatures, our fast-dispatch teams arrive on-site within minutes.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-blue-100/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-light flex items-center justify-center text-primary mb-6">
              <ShieldCheck className="w-6 h-6 text-royal" />
            </div>
            <h3 className="text-xl font-bold text-darkNavy mb-3">Licensed &amp; Vetted Personnel</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Every field technician and security guard undergoes thorough criminal background verification and continuous skill assessments.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-blue-100/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-light flex items-center justify-center text-primary mb-6">
              <Wrench className="w-6 h-6 text-royal" />
            </div>
            <h3 className="text-xl font-bold text-darkNavy mb-3">Comprehensive Service Warranty</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              All repairs come backed by our rock-solid 90-day parts and labor guarantee, giving you complete confidence and peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Call-to-action Banner */}
      <section className="bg-gradient-to-r from-darkNavy via-royal to-primary text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">
              Ready To Restore Your Systems?
            </h2>
            <p className="text-light/90 text-sm sm:text-base max-w-xl">
              Get an instant quotation or speak directly with an on-call engineer today. No obligations, clear pricing.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-royal rounded-xl font-bold text-sm sm:text-base hover:bg-light transition-all shadow-xl"
            >
              Contact Our Dispatch Team
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 bg-white/10 border border-white/30 text-white rounded-xl font-bold text-sm sm:text-base hover:bg-white/20 transition-all"
            >
              View Pricing &amp; Details
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
