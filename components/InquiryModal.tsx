"use client";

import React, { useState } from "react";
import { useModal } from "@/context/ModalContext";
import { X, CheckCircle, Calendar, Phone, Mail, User, MapPin, Users, Send } from "lucide-react";

export default function InquiryModal() {
  const { isOpen, packageTitle, closeModal } = useModal();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    travelDate: "",
    guests: "2",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    closeModal();
    setTimeout(() => setSubmitted(false), 200);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      {/* Backdrop with blur */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-[#082B55]/70 backdrop-blur-sm"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-surface-container-lowest rounded-2xl shadow-2xl overflow-hidden z-10 border border-surface-container-high animate-in zoom-in-95 duration-200">
        {/* Header bar */}
        <div className="bg-gradient-to-r from-[#00468c] to-[#075db5] px-6 py-5 text-white flex items-center justify-between">
          <div>
            <span className="text-xs uppercase font-semibold tracking-wider text-secondary-container">
              Siri Concierge Desk
            </span>
            <h3 className="text-xl font-bold font-headline mt-0.5">
              {submitted ? "Inquiry Received!" : "Plan Your Journey"}
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4 animate-in zoom-in duration-300">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold text-on-surface font-headline mb-2">
              Thank You, {formData.name || "Traveler"}!
            </h4>
            <p className="text-on-surface-variant text-sm max-w-sm mb-6 leading-relaxed">
              Your inquiry for <strong className="text-primary font-semibold">{packageTitle || "Curated Tour"}</strong> has been received. Our Karnataka holiday specialist will call you at <span className="font-semibold text-on-surface">{formData.phone || "your number"}</span> within 20 minutes with a customized itinerary &amp; best quotes.
            </p>
            <div className="bg-surface-container-low p-4 rounded-xl text-left w-full mb-6 border border-surface-container-high text-xs text-on-surface-variant space-y-1.5">
              <div className="flex justify-between">
                <span className="text-outline">Assigned Desk:</span>
                <span className="font-medium text-on-surface">Bengaluru Main Concierge</span>
              </div>
              <div className="flex justify-between">
                <span className="text-outline">Direct Hotline:</span>
                <span className="font-medium text-primary">+91 94801 23456</span>
              </div>
              <div className="flex justify-between">
                <span className="text-outline">WhatsApp Support:</span>
                <span className="font-medium text-emerald-600">Available 24/7</span>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="w-full py-3 px-6 rounded-lg bg-primary-container text-white font-semibold hover:bg-primary transition-all shadow-md"
            >
              Return to Exploration
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {packageTitle && (
              <div className="bg-surface-container-low p-3 rounded-lg border border-surface-container-high flex items-center gap-2 text-xs">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span className="text-on-surface-variant">Selected Package:</span>
                <strong className="text-on-surface truncate">{packageTitle}</strong>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1.5">
                Your Full Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-outline" />
                <input
                  required
                  type="text"
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-outline-variant bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary-container text-sm text-on-surface transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1.5">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-outline" />
                  <input
                    required
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-outline-variant bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary-container text-sm text-on-surface transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-outline" />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-outline-variant bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary-container text-sm text-on-surface transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1.5">
                  Tentative Date
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-outline" />
                  <input
                    type="date"
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-outline-variant bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary-container text-sm text-on-surface transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1.5">
                  No. of Travelers
                </label>
                <div className="relative">
                  <Users className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-outline" />
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-outline-variant bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary-container text-sm text-on-surface transition-all appearance-none cursor-pointer"
                  >
                    <option value="1">1 Solo Traveler</option>
                    <option value="2">2 Adults (Couple)</option>
                    <option value="3-5">3 - 5 Guests (Family)</option>
                    <option value="6-10">6 - 10 Guests (Small Group)</option>
                    <option value="10+">10+ Guests (Corporate / Group)</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1.5">
                Special Requests / Hotel Preference
              </label>
              <textarea
                rows={2}
                placeholder="e.g. 4-star resort with private plantation view, extra bed for child..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-outline-variant bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary-container text-sm text-on-surface transition-all resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-lg bg-gradient-to-r from-[#FF982F] to-[#e67e15] hover:from-[#e67e15] hover:to-[#cb6d0f] text-white font-semibold text-sm shadow-[0_4px_16px_rgba(255,152,47,0.35)] hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                <span>Request Custom Quote &amp; Itinerary</span>
                <Send className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-center text-outline mt-2">
                🔒 Zero spam guarantee. We respect your privacy. Instant quote over WhatsApp.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
