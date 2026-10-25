"use client";

import React, { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  Headphones,
  Sparkles,
  Building2
} from "lucide-react";

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Holiday Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full flex flex-col bg-background pt-32 sm:pt-36">
      {/* HERO */}
      <section className="bg-gradient-to-r from-[#00468c] to-[#082B55] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-accent-gold text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
              <Phone className="w-3.5 h-3.5" />
              WE&apos;D LOVE TO HEAR FROM YOU
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-headline tracking-tight mb-4">
              Get in Touch With Siri Vacations.
            </h1>
            <p className="text-sm sm:text-base text-surface-container-low font-light leading-relaxed">
              Have questions about an upcoming tour or looking for an immediate bespoke quote? Drop by our Indiranagar lounge or message our 24/7 concierge desk.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT INFO & FORM GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Office Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">
                BENGALURU HEADQUARTERS
              </span>
              <h2 className="text-2xl font-bold font-headline text-on-surface mb-4">
                Visit Our Travel Experience Studio
              </h2>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Enjoy a hot cup of authentic Coorg filter coffee while our travel architects map out your family vacation on our interactive route charts.
              </p>
            </div>

            <div className="space-y-6">
              {/* Bengaluru Office */}
              <div className="p-5 rounded-2xl bg-surface-container-lowest border border-surface-container-high shadow-card flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-fixed/50 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-on-surface font-headline mb-1">
                    Indiranagar Flagship Lounge
                  </h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed mb-2">
                    #42, 2nd Floor, 100 Feet Road, Indiranagar, Bengaluru, Karnataka 560038
                  </p>
                  <span className="text-[11px] text-primary font-semibold">Near 12th Main Junction</span>
                </div>
              </div>

              {/* Contact Numbers */}
              <div className="p-5 rounded-2xl bg-surface-container-lowest border border-surface-container-high shadow-card flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                  <Phone className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-on-surface font-headline mb-1">
                    Direct Concierge Lines
                  </h4>
                  <p className="text-xs text-on-surface font-medium">+91 94801 23456 (24/7 Mobile &amp; WhatsApp)</p>
                  <p className="text-xs text-on-surface font-medium mt-0.5">080 4123 7890 (Bengaluru Landline)</p>
                  <p className="text-[11px] text-outline mt-1">Mon - Sat: 9:00 AM – 8:00 PM</p>
                </div>
              </div>

              {/* Email Addresses */}
              <div className="p-5 rounded-2xl bg-surface-container-lowest border border-surface-container-high shadow-card flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                  <Mail className="w-5 h-5 text-accent-orange" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-on-surface font-headline mb-1">
                    Electronic Mail
                  </h4>
                  <p className="text-xs text-on-surface font-medium">bookings@sirivacations.com</p>
                  <p className="text-xs text-on-surface font-medium mt-0.5">support@sirivacations.com</p>
                  <p className="text-[11px] text-outline mt-1">Average response time: 20 minutes</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Direct Action */}
            <a
              href="https://wa.me/919480123456?text=Hi%20Siri%20Vacations,%20I%20have%20an%20inquiry%20regarding%20a%20trip."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Instant Chat with Tour Architect on WhatsApp</span>
            </a>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface-container-lowest p-6 sm:p-10 rounded-3xl border border-surface-container-high shadow-xl">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold font-headline text-on-surface mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you, <strong className="text-on-surface">{form.name}</strong>. Our Bengaluru support desk has received your note. We will respond at <strong className="text-primary">{form.email || form.phone}</strong> promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", phone: "", email: "", subject: "Holiday Inquiry", message: "" });
                    }}
                    className="px-6 py-2.5 bg-primary text-white text-xs font-semibold rounded-xl"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-xl font-bold font-headline text-on-surface mb-1">
                      Send Us a Message
                    </h3>
                    <p className="text-xs text-on-surface-variant">
                      Fill out the form below and an itinerary specialist will reply shortly.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-outline uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Priyadarshini M."
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full p-3 rounded-xl border border-surface-container-high bg-surface-container-low text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-outline uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 94801 23456"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full p-3 rounded-xl border border-surface-container-high bg-surface-container-low text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-outline uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full p-3 rounded-xl border border-surface-container-high bg-surface-container-low text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-outline uppercase tracking-wider mb-1.5">
                        Subject
                      </label>
                      <select
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full p-3 rounded-xl border border-surface-container-high bg-surface-container-low text-xs sm:text-sm font-semibold focus:outline-none cursor-pointer"
                      >
                        <option value="Holiday Inquiry">Tour Package Inquiry</option>
                        <option value="Car Rental">Chauffeur Car Rental</option>
                        <option value="Corporate Offsite">Corporate Offsite / MICE</option>
                        <option value="Feedback">Feedback / Testimonial</option>
                        <option value="Partnership">Hotel / Resort Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-outline uppercase tracking-wider mb-1.5">
                      Your Message or Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please let us know where you'd like to travel, travel dates, family size, or any specific requests..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full p-3 rounded-xl border border-surface-container-high bg-surface-container-low text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#FF982F] to-[#e67e15] hover:from-[#e67e15] hover:to-[#cb6d0f] text-white font-bold text-sm shadow-[0_6px_20px_rgba(255,152,47,0.35)] hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                  >
                    <span>Send Message to Bengaluru Concierge</span>
                    <Send className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-center text-outline">
                    🔒 We respect your privacy. No promotional spam. Direct human response.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
