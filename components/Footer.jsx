import React from "react";
import Link from "next/link";
import { Zap, Phone, Mail, MapPin, Clock, ShieldCheck, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-darkNavy text-white border-t border-blue-950/60 mt-auto">
      {/* Top Banner */}
      <div className="bg-royal/30 border-b border-white/10 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-sky/20 flex items-center justify-center">
              <Clock className="w-5 h-5 text-sky" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">Emergency Technical Dispatch</h4>
              <p className="text-light/80 text-xs sm:text-sm">Available 24 hours a day, 7 days a week for immediate repairs.</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-sky text-darkNavy font-bold rounded-full hover:bg-white transition-colors text-sm shadow-md"
          >
            <span>Request Fast Dispatch</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Col */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-sky flex items-center justify-center text-white shadow-md">
                <Zap className="w-6 h-6 fill-current text-white" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                Power<span className="text-sky">Supply</span>
              </span>
            </Link>
            <p className="text-light/75 text-sm leading-relaxed">
              Industrial-grade power engineering, certified elevator maintenance, commercial refrigeration, and on-site tactical security protection.
            </p>
            <div className="flex items-center gap-2 text-xs text-sky font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Certified &amp; State-Licensed Services</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-light/80">
              <li>
                <Link href="/" className="hover:text-sky transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-sky" /> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-sky transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-sky" /> About Company
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-sky transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-sky" /> Services Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sky transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-sky" /> Contact &amp; Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Offered */}
          <div>
            <h4 className="text-base font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Specialized Care
            </h4>
            <ul className="space-y-2.5 text-sm text-light/80">
              <li>
                <Link href="/services" className="hover:text-sky transition-colors">
                  AC Repair &amp; Maintenance
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-sky transition-colors">
                  Commercial Fridge Servicing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-sky transition-colors">
                  Elevator &amp; Lift Diagnostics
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-sky transition-colors">
                  On-site Security Guard Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-base font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Contact Center
            </h4>
            <ul className="space-y-3 text-sm text-light/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky shrink-0 mt-0.5" />
                <span>100 Power Plaza, Technology Boulevard, Suite 400</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sky shrink-0" />
                <a href="tel:18005550199" className="hover:text-white transition-colors font-medium">
                  +1 (800) 555-0199
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sky shrink-0" />
                <a href="mailto:support@powersupply.com" className="hover:text-white transition-colors">
                  support@powersupply.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-light/60">
          <p>© 2026 PowerSupply Engineering Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/about" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Emergency Dispatch</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

