"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Phone, Clock, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const serviceData = [
  {
    id: "ac-repair",
    title: "AC Repair & Maintenance",
    shortName: "AC Repair",
    image: "/images/ac.svg",
    badge: "Climate Control",
    tagline: "Restoring maximum cooling efficiency with certified HVAC technicians.",
    description: "Whether it is an unexpected cooling failure in peak summer or scheduled coil maintenance, our HVAC engineers deliver comprehensive diagnostic, refrigerant, and component-level repairs.",
    deliverables: [
      "Precision leak detection & refrigerant gas refilling (R32, R410A)",
      "Inverter PCB motherboard repair & power circuit testing",
      "Condenser & evaporator deep pressure cleaning",
      "Compressor motor efficiency & electrical amp draw analysis",
      "Commercial split, cassette & central ducted systems service",
    ],
    pricing: "Diagnostic from $49 • Same-day dispatch",
  },
  {
    id: "fridge-repair",
    title: "Commercial & Home Refrigerator Repair",
    shortName: "Fridge Repair",
    image: "/images/fridge.svg",
    badge: "Refrigeration",
    tagline: "Preserving freshness and commercial food safety with expert maintenance.",
    description: "From residential French-door units to commercial walk-in chillers, our refrigeration specialists troubleshoot and repair complex cooling faults promptly to prevent food spoilage.",
    deliverables: [
      "Compressor start relay, capacitor & motor overhauls",
      "Defrost timer, heater, and sensor troubleshooting",
      "Thermostat digital calibration and thermostat replacement",
      "Capillary tube flushing & filter dryer replacement",
      "Magnetic door gasket seals & internal air-circulation fans",
    ],
    pricing: "Diagnostic from $49 • Genuine OEM parts only",
  },
  {
    id: "lift-repair",
    title: "Elevator & Lift Engineering Services",
    shortName: "Lift Repair",
    image: "/images/lift.svg",
    badge: "Vertical Transport",
    tagline: "Ensuring passenger safety, compliance, and smooth vertical transit.",
    description: "Elevators require strict adherence to safety codes and preventative care. We offer routine maintenance, traction adjustments, control card repairs, and 24/7 emergency dispatch.",
    deliverables: [
      "24/7 priority emergency response for trapped passenger incidents",
      "Steel wire traction rope and hydraulic cylinder inspections",
      "Control cabinet, drive inverter, and relay board diagnostics",
      "Door operator mechanism alignment and safety edge sensor tests",
      "Annual regulatory safety inspection certificates & logs",
    ],
    pricing: "Emergency dispatch & annual maintenance contracts",
  },
  {
    id: "security-guard",
    title: "Professional On-Site Security Personnel",
    shortName: "Security Guard Service",
    image: "/images/security.svg",
    badge: "Facility Protection",
    tagline: "Vigilant, disciplined physical security for modern properties.",
    description: "Our licensed, uniformed security guards provide a proactive security presence for corporate office towers, gated communities, construction sites, and retail facilities.",
    deliverables: [
      "Vetted, state-licensed security officers (armed or unarmed)",
      "Strict perimeter access control and visitor log management",
      "Scheduled night patrols with electronic clock-in checkpoints",
      "CCTV surveillance room active monitoring and incident response",
      "Emergency evacuation and fire safety protocol execution",
    ],
    pricing: "Hourly, daily & long-term contract rates available",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-r from-darkNavy via-royal to-primary text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(85,184,255,0.2),transparent_50%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-sky bg-white/10 px-4 py-1.5 rounded-full mb-4 border border-white/15">
            Complete Service Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
            Specialized Facility Engineering &amp; Repair
          </h1>
          <p className="text-light/90 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
            High-standard technical repairs, certified equipment diagnostics, and professional personnel dispatch for homes, commercial complexes, and enterprises.
          </p>
        </div>
      </section>

      {/* 2. Detailed Service Cards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="space-y-16">
          {serviceData.map((svc, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={svc.id}
                id={svc.id}
                className="bg-white rounded-3xl border border-blue-100 shadow-md hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-0 ${isReversed ? "lg:flex-row-reverse" : ""}`}>
                  {/* Image Column */}
                  <div className={`lg:col-span-5 bg-light/30 relative min-h-[320px] lg:min-h-full ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-5 left-5 bg-darkNavy/90 backdrop-blur-md text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-sky" />
                      <span>{svc.badge}</span>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                    <div>
                      <span className="text-xs font-bold text-primary uppercase tracking-widest bg-light px-3 py-1 rounded-md mb-3 inline-block">
                        Certified Service
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-black text-darkNavy mb-2">
                        {svc.title}
                      </h2>
                      <p className="text-royal font-semibold text-sm mb-4">
                        {svc.tagline}
                      </p>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                        {svc.description}
                      </p>

                      <div className="border-t border-gray-100 pt-5 mb-6">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-darkNavy mb-3">
                          Service Scope &amp; Deliverables:
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {svc.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="text-xs text-gray-500 font-medium">
                        {svc.pricing}
                      </div>
                      <Link
                        href={`/contact?service=${encodeURIComponent(svc.shortName)}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-bold text-sm hover:bg-royal transition-all shadow-md shadow-primary/20 hover:scale-105 active:scale-95"
                      >
                        <span>Book {svc.shortName}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Our 4-Step Service Process */}
      <section className="py-20 bg-slate-100/70 border-t border-slate-200/80 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-light px-3.5 py-1.5 rounded-full inline-block mb-3">
              Standard Operating Procedure
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-darkNavy tracking-tight mb-4">
              How Our Service Process Works
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              A streamlined, hassle-free procedure from initial dispatch request to certified completion.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-7 rounded-2xl border border-blue-100/90 shadow-sm relative">
              <div className="w-10 h-10 rounded-full bg-royal text-white font-black text-base flex items-center justify-center mb-5">
                01
              </div>
              <h3 className="text-lg font-bold text-darkNavy mb-2">Request &amp; Dispatch</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Contact our 24/7 hotline or submit the online form. We immediately route the nearest service vehicle.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-blue-100/90 shadow-sm relative">
              <div className="w-10 h-10 rounded-full bg-royal text-white font-black text-base flex items-center justify-center mb-5">
                02
              </div>
              <h3 className="text-lg font-bold text-darkNavy mb-2">Diagnostic &amp; Quote</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Our technician inspects the system, explains the issue, and provides a transparent, fixed estimate.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-blue-100/90 shadow-sm relative">
              <div className="w-10 h-10 rounded-full bg-royal text-white font-black text-base flex items-center justify-center mb-5">
                03
              </div>
              <h3 className="text-lg font-bold text-darkNavy mb-2">Precision Execution</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Repairs are carried out using factory-original parts, specialized testing gear, and strict safety guidelines.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-blue-100/90 shadow-sm relative">
              <div className="w-10 h-10 rounded-full bg-royal text-white font-black text-base flex items-center justify-center mb-5">
                04
              </div>
              <h3 className="text-lg font-bold text-darkNavy mb-2">Warranty Sign-off</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                We test system performance under load, provide digital invoices, and activate your 90-day parts warranty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="bg-darkNavy text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Need An Immediate Diagnostic Or Consultation?
          </h2>
          <p className="text-light/90 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
            Our dispatch centers are active 24 hours a day. Call or submit a ticket to schedule your appointment today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-royal transition-all text-sm sm:text-base"
            >
              Book Service Online
            </Link>
            <a
              href="tel:18005550199"
              className="px-8 py-3.5 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all text-sm sm:text-base"
            >
              Call 1-800-555-0199
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

