"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const fallbackPlaceholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'%3E%3Crect width='800' height='500' fill='%23DCEBFF'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%230750C8'%3EPower Supply Service%3C/text%3E%3C/svg%3E";

export default function ServiceCard({ title, description, image, features = [] }) {
  const imgSrc = image || fallbackPlaceholder;

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-blue-100/90 overflow-hidden transition-all duration-300 flex flex-col group"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {/* Service Image */}
      <div className="relative w-full h-56 bg-light/30 overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-darkNavy text-xs font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>Available Now</span>
        </div>
      </div>

      {/* Service Info */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-white">
        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-primary bg-light/80 px-3 py-1 rounded-md inline-block mb-3">
            Guaranteed Quality
          </span>
          <h3 className="text-2xl font-black text-darkNavy mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-5">
            {description}
          </p>

          {/* Key Bullet Features if provided */}
          {features && features.length > 0 && (
            <ul className="space-y-2 mb-6 border-t border-gray-100 pt-4">
              {features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="pt-2">
          <Link
            href={`/contact?service=${encodeURIComponent(title)}`}
            className="inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-light text-royal font-bold text-sm hover:bg-primary hover:text-white transition-all duration-200 group/btn shadow-sm"
          >
            <span>Book Now</span>
            <ArrowUpRight className="w-4 h-4 text-royal group-hover/btn:text-white transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
