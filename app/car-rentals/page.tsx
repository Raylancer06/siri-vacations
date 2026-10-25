"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FLEET_CARS } from "@/data/packages";
import { useModal } from "@/context/ModalContext";
import { 
  Car, 
  ShieldCheck, 
  Award, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  PhoneCall, 
  MessageCircle,
  Calculator
} from "lucide-react";

export default function CarRentalsPage() {
  const { openModal } = useModal();
  const [selectedCarIndex, setSelectedCarIndex] = useState(0);
  const [tripType, setTripType] = useState<"outstation" | "airport" | "local">("outstation");
  const [days, setDays] = useState(3);
  const [estimatedKm, setEstimatedKm] = useState(600);

  const selectedCar = FLEET_CARS[selectedCarIndex];

  // Calculate rough fare
  const kmRateNum = parseInt(selectedCar.ratePerKm.replace(/[^0-9]/g, "")) || 18;
  const dayRateNum = parseInt(selectedCar.dailyRate.replace(/[^0-9]/g, "")) || 3500;
  
  let calculatedFare = 0;
  if (tripType === "outstation") {
    const minKm = days * 300;
    const billedKm = Math.max(estimatedKm, minKm);
    const driverAllowance = days * 500;
    calculatedFare = billedKm * kmRateNum + driverAllowance;
  } else if (tripType === "airport") {
    calculatedFare = selectedCarIndex === 0 ? 2200 : selectedCarIndex === 1 ? 3800 : 1600;
  } else {
    calculatedFare = dayRateNum;
  }

  return (
    <div className="w-full flex flex-col bg-background pt-32 sm:pt-36">
      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-r from-[#00468c] to-[#082B55] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-accent-gold text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
              <Car className="w-3.5 h-3.5" />
              PREMIUM CHAUFFEUR SERVICES
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-headline tracking-tight mb-4">
              Chauffeur-Driven Luxury Car Rentals in Bengaluru.
            </h1>
            <p className="text-sm sm:text-base text-surface-container-low font-light leading-relaxed mb-6">
              Travel comfortably to Coorg, Chikmagalur, Ooty, Wayanad, or airport transfers in sanitized, GPS-monitored vehicles with verified hill-expert chauffeurs.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <span className="inline-flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Zero Cancellation Fee
              </span>
              <span className="inline-flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-accent-gold" />
                No Hidden Toll or Driver Charges
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INSTANT TARIFF ESTIMATOR & FLEET */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {/* Estimator Card */}
        <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl border border-surface-container-high shadow-xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary-fixed/50 flex items-center justify-center text-primary">
              <Calculator className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold font-headline text-on-surface">
                Instant Outstation Fare Calculator
              </h2>
              <p className="text-xs text-on-surface-variant">
                Transparent tariffs based on Karnataka State Transport Authority guidelines
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="block text-xs font-semibold text-outline uppercase tracking-wider mb-1.5">
                Select Vehicle
              </label>
              <select
                value={selectedCarIndex}
                onChange={(e) => setSelectedCarIndex(Number(e.target.value))}
                className="w-full p-2.5 rounded-xl border border-surface-container-high bg-surface-container-low text-xs sm:text-sm font-semibold focus:outline-none"
              >
                {FLEET_CARS.map((c, idx) => (
                  <option key={idx} value={idx}>
                    {c.name} ({c.ratePerKm})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-outline uppercase tracking-wider mb-1.5">
                Trip Service
              </label>
              <select
                value={tripType}
                onChange={(e) => setTripType(e.target.value as any)}
                className="w-full p-2.5 rounded-xl border border-surface-container-high bg-surface-container-low text-xs sm:text-sm font-semibold focus:outline-none"
              >
                <option value="outstation">Outstation Roundtrip (Min 300 km/day)</option>
                <option value="airport">BLR Airport Transfer (One-way)</option>
                <option value="local">Local Bengaluru (8 Hrs / 80 Km)</option>
              </select>
            </div>

            {tripType === "outstation" && (
              <>
                <div>
                  <label className="block text-xs font-semibold text-outline uppercase tracking-wider mb-1.5">
                    Duration (Days)
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={15}
                    value={days}
                    onChange={(e) => setDays(Number(e.target.value))}
                    className="w-full p-2.5 rounded-xl border border-surface-container-high bg-surface-container-low text-xs sm:text-sm font-semibold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-outline uppercase tracking-wider mb-1.5">
                    Estimated KM
                  </label>
                  <input
                    type="number"
                    step={50}
                    value={estimatedKm}
                    onChange={(e) => setEstimatedKm(Number(e.target.value))}
                    className="w-full p-2.5 rounded-xl border border-surface-container-high bg-surface-container-low text-xs sm:text-sm font-semibold focus:outline-none"
                  />
                </div>
              </>
            )}
          </div>

          <div className="p-4 bg-primary-fixed/20 rounded-xl border border-primary-fixed/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs text-on-surface-variant block">Estimated Base Fare:</span>
              <span className="text-2xl sm:text-3xl font-bold font-headline text-primary">
                ₹{calculatedFare.toLocaleString("en-IN")}
              </span>
              <span className="text-[11px] text-outline block">
                Includes AC vehicle, fuel &amp; chauffeur allowance. (Toll &amp; parking at actuals)
              </span>
            </div>
            <button
              onClick={() => openModal(`Car Rental: ${selectedCar.name} (${tripType.toUpperCase()})`)}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF982F] to-[#e67e15] text-white font-bold text-xs shadow-md hover:scale-105 transition-all"
            >
              Reserve {selectedCar.name}
            </button>
          </div>
        </div>

        {/* Fleet Showcase Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold font-headline text-on-surface mb-6">
            Our Sanitized Chauffeur-Driven Fleet
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FLEET_CARS.map((car, idx) => (
              <div
                key={idx}
                className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-surface-container-high shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full bg-surface-container">
                    <Image
                      src={car.imageUrl}
                      alt={car.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-[#082B55]/85 backdrop-blur-md text-white text-[10px] font-bold">
                      {car.category}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-base font-headline text-on-surface mb-1">
                      {car.name}
                    </h3>
                    <p className="text-xs text-outline mb-3">
                      {car.seats} • {car.luggage} • Dual AC
                    </p>
                    <div className="space-y-1.5 mb-4">
                      {car.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-1.5 text-xs text-on-surface-variant">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="border-t border-surface-container-low pt-3 mb-4 flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] uppercase text-outline block">Outstation Rate</span>
                      <strong className="text-base text-primary font-bold">{car.ratePerKm}</strong>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] uppercase text-outline block">Day Package</span>
                      <strong className="text-xs text-on-surface font-semibold">{car.dailyRate}</strong>
                    </div>
                  </div>
                  <button
                    onClick={() => openModal(`Reserve Car: ${car.name}`)}
                    className="w-full py-2.5 rounded-xl bg-primary-container hover:bg-primary text-white font-semibold text-xs transition-all shadow-sm"
                  >
                    Select Vehicle
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chauffeur Guarantee Banner */}
        <div className="bg-surface-container-low p-6 sm:p-8 rounded-2xl border border-surface-container-high grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-emerald-600 shrink-0" />
            <div>
              <h4 className="font-bold text-sm text-on-surface">Background Verified</h4>
              <p className="text-xs text-on-surface-variant">Police verified chauffeurs with commercial passenger badge.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Award className="w-8 h-8 text-primary shrink-0" />
            <div>
              <h4 className="font-bold text-sm text-on-surface">Western Ghats Specialists</h4>
              <p className="text-xs text-on-surface-variant">Expertise driving hairpin bends of Coorg, Chikmagalur &amp; Ooty.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-8 h-8 text-accent-orange shrink-0" />
            <div>
              <h4 className="font-bold text-sm text-on-surface">Punctual Doorstep Pickup</h4>
              <p className="text-xs text-on-surface-variant">Vehicle arrives 15 minutes prior to scheduled departure.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
