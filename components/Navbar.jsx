"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Zap, Menu, X, PhoneCall } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-darkNavy via-royal to-primary flex items-center justify-center text-white shadow-md shadow-primary/25 group-hover:scale-105 transition-transform duration-200">
              <Zap className="w-6 h-6 fill-current text-sky" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-darkNavy group-hover:text-primary transition-colors">
                Power<span className="text-primary">Supply</span>
              </span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500 -mt-1">
                Engineering &amp; Facility Care
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm lg:text-base font-semibold transition-all duration-200 ${
                    active
                      ? "bg-light text-royal shadow-sm border border-primary/20"
                      : "text-gray-700 hover:text-primary hover:bg-slate-100/80"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Emergency Support CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-bold rounded-full shadow-md shadow-primary/25 hover:bg-royal hover:shadow-lg transition-all duration-200"
            >
              <PhoneCall className="w-4 h-4 text-sky" />
              <span>24/7 Support</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-darkNavy hover:text-primary hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <ul className="flex flex-col space-y-1.5">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                      active
                        ? "bg-light text-royal border border-primary/30"
                        : "text-gray-700 hover:text-primary hover:bg-slate-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="pt-4 border-t border-gray-100 mt-3">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-primary text-white text-base font-bold rounded-xl shadow-md hover:bg-royal transition-colors"
            >
              <PhoneCall className="w-5 h-5 text-sky" />
              <span>Get Immediate Support</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
