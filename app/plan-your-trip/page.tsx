"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  MapPin, 
  Users, 
  Calendar, 
  Car, 
  Bed, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Send
} from "lucide-react";

export default function PlanYourTripPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    destination: "Coorg (Kodagu)",
    travelStyle: "Family Vacation",
    durationNights: "3",
    travelersCount: "2 Adults, 1 Child",
    startDate: "",
    stayPreference: "Coffee Plantation Resort (4-Star)",
    transportType: "Toyota Innova Crysta (AC)",
    budgetRange: "₹30,000 - ₹50,000",
    name: "",
    phone: "",
    email: "",
    notes: "",
  });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full flex flex-col bg-background pt-24 sm:pt-28">
      {/* HERO BANNER */}
      <section className="bg-gradient-to-r from-[#00468c] to-[#082B55] text-white py-14 lg:py-18">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-accent-gold text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
            <Sparkles className="w-3.5 h-3.5" />
            BESPOKE HOLIDAY ARCHITECT
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-headline tracking-tight mb-4">
            Design Your Personalized Vacation.
          </h1>
          <p className="text-sm sm:text-base text-surface-container-low font-light max-w-2xl mx-auto">
            Tell us how you like to travel. Our Bengaluru holiday experts will construct a custom day-by-day itinerary with verified boutique stays &amp; private chauffeur.
          </p>
        </div>
      </section>

      {/* MULTI-STEP WIZARD CONTAINER */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {submitted ? (
          <div className="bg-surface-container-lowest p-8 sm:p-14 rounded-3xl border border-surface-container-high shadow-2xl text-center animate-in zoom-in-95 duration-300">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-headline text-on-surface mb-3">
              Itinerary Blueprint Dispatched!
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant max-w-lg mx-auto mb-8 leading-relaxed">
              Thank you, <strong className="text-primary">{formData.name || "Traveler"}</strong>! We have received your customized preferences for <strong className="text-on-surface">{formData.destination}</strong> ({formData.durationNights} Nights).
            </p>

            <div className="bg-surface-container-low p-6 rounded-2xl max-w-md mx-auto text-left text-xs space-y-2.5 mb-8 border border-surface-container-high">
              <div className="flex justify-between">
                <span className="text-outline">Destination:</span>
                <span className="font-bold text-on-surface">{formData.destination}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-outline">Travel Style:</span>
                <span className="font-bold text-on-surface">{formData.travelStyle}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-outline">Stay Preference:</span>
                <span className="font-bold text-on-surface">{formData.stayPreference}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-outline">Vehicle Selected:</span>
                <span className="font-bold text-on-surface">{formData.transportType}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-surface-container-high">
                <span className="text-outline">Assigned Specialist:</span>
                <span className="font-bold text-emerald-700">Senior Western Ghats Concierge</span>
              </div>
            </div>

            <p className="text-xs text-outline mb-6">
              Our travel architect will contact you on WhatsApp at <strong className="text-on-surface">{formData.phone}</strong> with photos of proposed cottages &amp; quotes within 30 minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-primary-container text-white text-xs font-semibold hover:bg-primary transition-all shadow"
              >
                Back to Home Page
              </Link>
              <a
                href={`https://wa.me/919480123456?text=Hello%20Siri%20Vacations,%20I%20just%20submitted%20a%20trip%20planner%20request%20for%20${formData.destination}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-all shadow"
              >
                Chat on WhatsApp Now
              </a>
            </div>
          </div>
        ) : (
          <div className="bg-surface-container-lowest rounded-3xl border border-surface-container-high shadow-2xl overflow-hidden">
            {/* Progress Bar */}
            <div className="bg-surface-container-low p-4 sm:p-6 border-b border-surface-container-high">
              <div className="flex items-center justify-between mb-3 text-xs font-semibold text-outline">
                <span>Step {step} of 4: {
                  step === 1 ? "Destination & Style" :
                  step === 2 ? "Dates & Travelers" :
                  step === 3 ? "Resort & Transport" : "Your Details"
                }</span>
                <span>{step * 25}% Completed</span>
              </div>
              <div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent-orange transition-all duration-300"
                  style={{ width: `${step * 25}%` }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-10">
              {/* STEP 1: DESTINATION & TRAVEL STYLE */}
              {step === 1 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div>
                    <h3 className="text-xl font-bold font-headline text-on-surface mb-1">
                      Where would you like to travel?
                    </h3>
                    <p className="text-xs text-on-surface-variant">Select your primary destination circuit</p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      "Coorg (Kodagu)",
                      "Chikmagalur",
                      "Wayanad",
                      "Ooty & Nilgiris",
                      "Munnar & Alleppey",
                      "Hampi & Badami",
                      "Kabini Wildlife",
                      "Dubai & Abu Dhabi",
                      "Bali Tropical Islands",
                    ].map((dest) => (
                      <button
                        type="button"
                        key={dest}
                        onClick={() => setFormData({ ...formData, destination: dest })}
                        className={`p-3.5 rounded-xl border text-left text-xs font-semibold transition-all ${
                          formData.destination === dest
                            ? "border-primary bg-primary-fixed/30 text-primary ring-2 ring-primary/20"
                            : "border-surface-container-high bg-surface-container-low text-on-surface hover:bg-surface-container"
                        }`}
                      >
                        <MapPin className="w-3.5 h-3.5 mb-1.5 text-primary" />
                        <span>{dest}</span>
                      </button>
                    ))}
                  </div>

                  <div className="pt-4">
                    <label className="block text-xs font-bold text-on-surface uppercase tracking-wider mb-2">
                      Who is traveling?
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        "Couples Getaway",
                        "Family Vacation",
                        "Friends Reunion",
                        "Corporate Offsite",
                      ].map((style) => (
                        <button
                          type="button"
                          key={style}
                          onClick={() => setFormData({ ...formData, travelStyle: style })}
                          className={`p-3 rounded-xl border text-center text-xs font-semibold transition-all ${
                            formData.travelStyle === style
                              ? "border-primary bg-primary-fixed/30 text-primary ring-2 ring-primary/20"
                              : "border-surface-container-high bg-surface-container-low text-on-surface hover:bg-surface-container"
                          }`}
                        >
                          {style}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: DATES & DURATION */}
              {step === 2 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div>
                    <h3 className="text-xl font-bold font-headline text-on-surface mb-1">
                      Trip Duration &amp; Guest Count
                    </h3>
                    <p className="text-xs text-on-surface-variant">When are you planning to embark?</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-outline uppercase tracking-wider mb-1.5">
                        Tentative Start Date
                      </label>
                      <input
                        type="date"
                        value={formData.startDate}
                        onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                        className="w-full p-3 rounded-xl border border-surface-container-high bg-surface-container-low text-sm font-semibold focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-outline uppercase tracking-wider mb-1.5">
                        Duration (Nights)
                      </label>
                      <select
                        value={formData.durationNights}
                        onChange={(e) => setFormData({ ...formData, durationNights: e.target.value })}
                        className="w-full p-3 rounded-xl border border-surface-container-high bg-surface-container-low text-sm font-semibold focus:outline-none cursor-pointer"
                      >
                        <option value="2">2 Nights / 3 Days (Weekend Short Escape)</option>
                        <option value="3">3 Nights / 4 Days (Standard Leisure Tour)</option>
                        <option value="4">4 Nights / 5 Days (Deep Regional Circuit)</option>
                        <option value="5">5 Nights / 6 Days (Multi-Destination)</option>
                        <option value="7">7+ Nights (Grand Vacation)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-outline uppercase tracking-wider mb-1.5">
                      Traveler Composition
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 2 Adults and 2 Kids (age 6 & 10)"
                      value={formData.travelersCount}
                      onChange={(e) => setFormData({ ...formData, travelersCount: e.target.value })}
                      className="w-full p-3 rounded-xl border border-surface-container-high bg-surface-container-low text-sm font-semibold focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {/* STEP 3: RESORT & TRANSPORT PREFERENCES */}
              {step === 3 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div>
                    <h3 className="text-xl font-bold font-headline text-on-surface mb-1">
                      Accommodation &amp; Travel Class
                    </h3>
                    <p className="text-xs text-on-surface-variant">Handpick your luxury level and private ride</p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-on-surface uppercase tracking-wider mb-2">
                      Resort / Homestay Category
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        "Coffee Plantation Resort (4-Star)",
                        "Private Pool Villa / Heritage Haven",
                        "Luxury Boutique Homestay",
                      ].map((stay) => (
                        <button
                          type="button"
                          key={stay}
                          onClick={() => setFormData({ ...formData, stayPreference: stay })}
                          className={`p-4 rounded-xl border text-left text-xs font-semibold transition-all ${
                            formData.stayPreference === stay
                              ? "border-primary bg-primary-fixed/30 text-primary ring-2 ring-primary/20"
                              : "border-surface-container-high bg-surface-container-low text-on-surface hover:bg-surface-container"
                          }`}
                        >
                          <Bed className="w-4 h-4 mb-2 text-primary" />
                          <span>{stay}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-on-surface uppercase tracking-wider mb-2">
                      Chauffeur-Driven Vehicle Preference
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        "Toyota Innova Crysta (AC)",
                        "Sedan (Swift Dzire / Etios)",
                        "Toyota Fortuner 4x4",
                      ].map((car) => (
                        <button
                          type="button"
                          key={car}
                          onClick={() => setFormData({ ...formData, transportType: car })}
                          className={`p-4 rounded-xl border text-left text-xs font-semibold transition-all ${
                            formData.transportType === car
                              ? "border-primary bg-primary-fixed/30 text-primary ring-2 ring-primary/20"
                              : "border-surface-container-high bg-surface-container-low text-on-surface hover:bg-surface-container"
                          }`}
                        >
                          <Car className="w-4 h-4 mb-2 text-primary" />
                          <span>{car}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: CONTACT & SUBMISSION */}
              {step === 4 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div>
                    <h3 className="text-xl font-bold font-headline text-on-surface mb-1">
                      Where should we dispatch your itinerary?
                    </h3>
                    <p className="text-xs text-on-surface-variant">Direct WhatsApp and email quotes with zero spam</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-outline uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-3 rounded-xl border border-surface-container-high bg-surface-container-low text-sm font-semibold focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-outline uppercase tracking-wider mb-1.5">
                        WhatsApp Contact Number *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-3 rounded-xl border border-surface-container-high bg-surface-container-low text-sm font-semibold focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-outline uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 rounded-xl border border-surface-container-high bg-surface-container-low text-sm font-semibold focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-outline uppercase tracking-wider mb-1.5">
                      Special Preferences or Activities (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Need river rafting in Dubare, anniversary cake on Day 2, wheelchair assistance..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full p-3 rounded-xl border border-surface-container-high bg-surface-container-low text-sm font-semibold focus:outline-none resize-none"
                    />
                  </div>
                </div>
              )}

              {/* NAV BUTTONS */}
              <div className="flex items-center justify-between pt-8 border-t border-surface-container-high mt-8">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-5 py-2.5 rounded-xl border border-surface-container-high text-xs font-semibold text-outline hover:text-on-surface hover:bg-surface-container-low flex items-center gap-1.5 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                ) : <div />}

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-3 rounded-xl bg-primary-container text-white text-xs font-bold hover:bg-primary flex items-center gap-1.5 shadow transition-all"
                  >
                    <span>Proceed to Step {step + 1}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#FF982F] to-[#e67e15] hover:from-[#e67e15] hover:to-[#cb6d0f] text-white text-sm font-bold flex items-center gap-2 shadow-[0_6px_20px_rgba(255,152,47,0.35)] hover:scale-105 transition-all"
                  >
                    <span>Generate &amp; Dispatch My Itinerary</span>
                    <Send className="w-4 h-4" />
                  </button>
                )}
              </div>
            </form>
          </div>
        )}
      </section>
    </div>
  );
}
