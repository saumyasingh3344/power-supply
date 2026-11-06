"use client";
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Phone, Mail, MapPin, Clock, CheckCircle2, Send, AlertTriangle, AlertCircle, RefreshCw } from "lucide-react";

function normalizeService(param) {
  if (!param) return "AC Repair";
  const lower = param.toLowerCase();
  if (lower.includes("ac") || lower.includes("air")) return "AC Repair";
  if (lower.includes("fridge") || lower.includes("refriger")) return "Fridge Repair";
  if (lower.includes("lift") || lower.includes("elevator")) return "Lift Repair";
  if (lower.includes("security") || lower.includes("guard")) return "Security Guard Service";
  return param;
}

function ContactForm() {
  const searchParams = useSearchParams();
  const rawServiceParam = searchParams.get("service");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "AC Repair",
    urgency: "Standard (Today)",
    address: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState(null);
  const [submittedData, setSubmittedData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (rawServiceParam) {
      setFormData((prev) => ({ ...prev, service: normalizeService(rawServiceParam) }));
    }
  }, [rawServiceParam]);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Full name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address (e.g. name@domain.com).";
    }

    const digits = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim() || digits.length < 10) {
      errs.phone = "Please enter a valid phone number with at least 10 digits.";
    }

    if (!formData.service) {
      errs.service = "Please select a service category.";
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
    if (serverError) {
      setServerError(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError(null);

    const clientErrors = validate();
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setSubmittedData({
          ...formData,
          ticketId: result.booking?.id || `REQ-${Math.floor(100000 + Math.random() * 900000)}`,
          storedInDb: true,
        });
      } else {
        if (result.errors) {
          setErrors(result.errors);
        } else {
          setServerError({
            message: result.message || "Failed to submit request.",
            code: result.code,
            configured: result.configured !== false,
          });
        }
      }
    } catch (err) {
      setServerError({
        message: "Network error: Unable to reach the dispatch API server.",
        code: "NETWORK_ERROR",
        configured: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmittedData(null);
    setServerError(null);
    setErrors({});
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "AC Repair",
      urgency: "Standard (Today)",
      address: "",
      message: "",
    });
  };

  return (
    <div className="bg-white p-8 sm:p-10 rounded-3xl border border-blue-100 shadow-xl">
      <div className="mb-8">
        <h3 className="text-2xl font-black text-darkNavy mb-2">
          Request Service Or Quote
        </h3>
        <p className="text-gray-600 text-sm">
          Fill out the details below. Our technical dispatch team responds within 15 minutes.
        </p>
      </div>

      {submittedData ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-2xl font-bold text-darkNavy">Service Request Confirmed!</h4>
          <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed">
            Thank you, <strong className="text-darkNavy">{submittedData.name}</strong>. Your ticket <span className="font-mono bg-emerald-100/70 text-emerald-800 px-2 py-0.5 rounded font-bold">{submittedData.ticketId}</span> for <strong className="text-primary">{submittedData.service}</strong> has been logged.
          </p>
          <div className="text-xs text-gray-500 bg-white/80 border border-emerald-200 rounded-xl p-3 max-w-sm mx-auto">
            <span>Our on-duty supervisor will call <strong>{submittedData.phone}</strong> shortly.</span>
          </div>
          <button
            type="button"
            onClick={handleReset}
            className="mt-4 px-6 py-2.5 bg-darkNavy text-white rounded-xl text-xs font-bold hover:bg-primary transition-colors inline-flex items-center gap-2"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Submit Another Request</span>
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Server / Configuration Warning Banner */}
          {serverError && (
            <div className={`p-4 rounded-xl border flex items-start gap-3 text-sm ${
              serverError.code === "CONFIG_MISSING"
                ? "bg-amber-50 border-amber-200 text-amber-900"
                : "bg-red-50 border-red-200 text-red-900"
            }`}>
              {serverError.code === "CONFIG_MISSING" ? (
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              )}
              <div className="space-y-1">
                <p className="font-bold">
                  {serverError.code === "CONFIG_MISSING"
                    ? "Supabase Backend Configuration Required"
                    : "Submission Error"}
                </p>
                <p className="text-xs leading-relaxed">{serverError.message}</p>
                {serverError.code === "CONFIG_MISSING" && (
                  <p className="text-xs text-amber-800 font-mono mt-1">
                    Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local to enable database storage.
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-darkNavy mb-2">
                Your Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Johnathan Miller"
                className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                  errors.name
                    ? "border-red-400 bg-red-50/30 focus:ring-2 focus:ring-red-200"
                    : "border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
                }`}
              />
              {errors.name && <p className="text-xs text-red-500 mt-1 font-medium">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-darkNavy mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. (555) 234-5678"
                className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                  errors.phone
                    ? "border-red-400 bg-red-50/30 focus:ring-2 focus:ring-red-200"
                    : "border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
                }`}
              />
              {errors.phone && <p className="text-xs text-red-500 mt-1 font-medium">{errors.phone}</p>}
            </div>
          </div>

          {/* Email & Service */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-darkNavy mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. john@example.com"
                className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                  errors.email
                    ? "border-red-400 bg-red-50/30 focus:ring-2 focus:ring-red-200"
                    : "border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
                }`}
              />
              {errors.email && <p className="text-xs text-red-500 mt-1 font-medium">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-darkNavy mb-2">
                Service Category *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all bg-white ${
                  errors.service
                    ? "border-red-400 bg-red-50/30 focus:ring-2 focus:ring-red-200"
                    : "border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
                }`}
              >
                <option value="AC Repair">AC Repair &amp; Maintenance</option>
                <option value="Fridge Repair">Refrigerator &amp; Cold Storage Repair</option>
                <option value="Lift Repair">Elevator &amp; Lift Inspection</option>
                <option value="Security Guard Service">Security Guard &amp; Patrol Service</option>
                <option value="General Electrical Service">General Electrical / Other</option>
              </select>
              {errors.service && <p className="text-xs text-red-500 mt-1 font-medium">{errors.service}</p>}
            </div>
          </div>

          {/* Urgency & Address */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="urgency" className="block text-xs font-bold uppercase tracking-wider text-darkNavy mb-2">
                Urgency Level
              </label>
              <select
                id="urgency"
                name="urgency"
                value={formData.urgency}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm outline-none transition-all bg-white"
              >
                <option value="Emergency (Under 60 Mins)">Emergency (Within 60 Mins)</option>
                <option value="Standard (Today)">Standard (Same Day Dispatch)</option>
                <option value="Scheduled (Future Date)">Scheduled (Upcoming Date)</option>
              </select>
            </div>

            <div>
              <label htmlFor="address" className="block text-xs font-bold uppercase tracking-wider text-darkNavy mb-2">
                Service Location / City
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="e.g. 742 Evergreen Terrace, Downtown"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm outline-none transition-all"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-darkNavy mb-2">
              Describe the Issue or Requirements
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Please describe symptoms (e.g. AC blowing warm air, lift jerking between floors, guard requirement for weekend)..."
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm outline-none transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-primary text-white font-bold text-base shadow-lg shadow-primary/25 hover:bg-royal transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:pointer-events-none"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 animate-spin" />
                Connecting to Dispatch...
              </span>
            ) : (
              <>
                <Send className="w-5 h-5 text-sky" />
                <span>Submit Service Request</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-r from-darkNavy via-royal to-primary text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(85,184,255,0.2),transparent_50%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-sky bg-white/10 px-4 py-1.5 rounded-full mb-4 border border-white/15">
            24/7 Rapid Response Helpdesk
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
            Contact &amp; Emergency Dispatch
          </h1>
          <p className="text-light/90 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Need urgent repairs or want to book an inspection? Reach our control center directly or submit an online dispatch request below.
          </p>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary bg-light px-3.5 py-1.5 rounded-full inline-block mb-3">
                Direct Channels
              </span>
              <h2 className="text-3xl font-black text-darkNavy tracking-tight mb-4">
                We Are Standing By
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Our support desk is manned 24 hours a day, 365 days a year by experienced technical dispatchers ready to assign qualified technicians.
              </p>
            </div>

            {/* Hotline Card */}
            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-light flex items-center justify-center text-primary shrink-0">
                <Phone className="w-6 h-6 text-royal" />
              </div>
              <div>
                <h4 className="font-bold text-darkNavy text-base">24/7 Emergency Hotline</h4>
                <p className="text-xs text-gray-500 mb-2">Immediate dispatch for urgent breakdown incidents</p>
                <a href="tel:18005550199" className="text-lg font-black text-primary hover:text-royal transition-colors">
                  +1 (800) 555-0199
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-light flex items-center justify-center text-primary shrink-0">
                <Mail className="w-6 h-6 text-royal" />
              </div>
              <div>
                <h4 className="font-bold text-darkNavy text-base">Email Helpdesk</h4>
                <p className="text-xs text-gray-500 mb-2">For contract inquiries and scheduled requests</p>
                <a href="mailto:support@powersupply.com" className="text-base font-bold text-primary hover:text-royal transition-colors">
                  support@powersupply.com
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-light flex items-center justify-center text-primary shrink-0">
                <MapPin className="w-6 h-6 text-royal" />
              </div>
              <div>
                <h4 className="font-bold text-darkNavy text-base">Corporate Headquarters</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  100 Power Plaza, Technology Boulevard, Suite 400<br />
                  Metropolitan Industrial District
                </p>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-light flex items-center justify-center text-primary shrink-0">
                <Clock className="w-6 h-6 text-royal" />
              </div>
              <div>
                <h4 className="font-bold text-darkNavy text-base">Operating Hours</h4>
                <p className="text-sm text-gray-600">
                  <strong>Emergency Fleet:</strong> 24 Hours / 7 Days a Week<br />
                  <strong>Administrative Office:</strong> Mon - Sat, 8:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Suspense */}
          <div className="lg:col-span-7">
            <Suspense fallback={
              <div className="bg-white p-12 rounded-3xl border border-blue-100 shadow-xl text-center text-gray-400">
                Loading contact form...
              </div>
            }>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  );
}
