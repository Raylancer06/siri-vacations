"use client";

import React from "react";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";
import { 
  Users, 
  Calendar, 
  MapPin, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  Building, 
  ArrowRight,
  ShieldAlert
} from "lucide-react";

export default function GroupDeparturesPage() {
  const { openModal } = useModal();

  const groupTrips = [
    {
      title: "Coorg Plantation & Waterfall Weekend Group",
      date: "Upcoming: Next Friday - Sunday",
      duration: "2 Nights / 3 Days",
      location: "Coorg, Karnataka",
      seatsTotal: 18,
      seatsLeft: 5,
      price: 8999,
      originalPrice: 11500,
      imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
      inclusions: ["Luxury Coach Transport", "Plantation Resort Stay", "All Meals", "Bonfire & Music"],
    },
    {
      title: "Hampi & Badami Monolithic Heritage Circuit",
      date: "Upcoming: 2nd Weekend of Next Month",
      duration: "3 Nights / 4 Days",
      location: "Hampi & Badami, Karnataka",
      seatsTotal: 16,
      seatsLeft: 3,
      price: 11999,
      originalPrice: 14500,
      imageUrl: "https://images.unsplash.com/photo-1600100397608-f010f4438fa7?auto=format&fit=crop&w=600&q=80",
      inclusions: ["AC Tempo Traveller", "Archaeological Historian", "3-Star Stays", "Coracle Boat Ride"],
    },
    {
      title: "Wayanad Rainforest Trek & Camping Expedition",
      date: "Upcoming: Last Saturday of the Month",
      duration: "2 Nights / 3 Days",
      location: "Wayanad, Kerala",
      seatsTotal: 20,
      seatsLeft: 8,
      price: 7999,
      originalPrice: 9999,
      imageUrl: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=600&q=80",
      inclusions: ["Luxury Minibus", "Campfire & Stargazing", "Guided Hill Trek", "Barbecue Night"],
    },
  ];

  return (
    <div className="w-full flex flex-col bg-background pt-32 sm:pt-36">
      {/* 1. HERO */}
      <section className="bg-gradient-to-r from-[#00468c] to-[#082B55] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-accent-gold text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
              <Users className="w-3.5 h-3.5" />
              SHARED EXPEDITIONS &amp; CORPORATE RETREATS
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-headline tracking-tight mb-4">
              Fixed Group Departures &amp; Offsites.
            </h1>
            <p className="text-sm sm:text-base text-surface-container-low font-light leading-relaxed mb-6">
              Join small curated groups of like-minded travelers with verified tour captains, or plan seamless corporate team offsites with bulk corporate tariffs.
            </p>
          </div>
        </div>
      </section>

      {/* 2. UPCOMING DEPARTURES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold font-headline text-on-surface">
              Upcoming Fixed Departure Dates
            </h2>
            <p className="text-xs text-on-surface-variant">Guaranteed departures from Bengaluru pickup points</p>
          </div>
          <span className="text-xs text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full font-bold border border-emerald-200 hidden sm:inline">
            ✓ Tour Captain Accompanied
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {groupTrips.map((trip, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-surface-container-high shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] w-full bg-surface-container">
                  <Image
                    src={trip.imageUrl}
                    alt={trip.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-[#082B55]/85 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-[10px] font-bold">
                    {trip.duration}
                  </div>
                  <div className="absolute top-3 right-3 bg-red-600/90 backdrop-blur-md px-2.5 py-1 rounded-full text-white text-[10px] font-bold animate-pulse">
                    {trip.seatsLeft} Seats Left
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-xs text-primary font-semibold mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{trip.date}</span>
                  </div>
                  <h3 className="font-bold text-base font-headline text-on-surface mb-2">
                    {trip.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-outline mb-4">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{trip.location}</span>
                  </div>

                  <div className="space-y-1.5 mb-4">
                    {trip.inclusions.map((inc, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-on-surface-variant">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="border-t border-surface-container-low pt-3 mb-4 flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] text-outline uppercase block">Fixed Group Price</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold font-headline text-primary">
                        ₹{trip.price.toLocaleString("en-IN")}
                      </span>
                      <span className="text-xs text-outline line-through">
                        ₹{trip.originalPrice.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] text-outline">per seat</span>
                </div>
                <button
                  onClick={() => openModal(`Reserve Seat: ${trip.title}`)}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#FF982F] to-[#e67e15] hover:from-[#e67e15] hover:to-[#cb6d0f] text-white font-semibold text-xs shadow transition-all active:scale-95"
                >
                  Reserve Your Seat
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Offsite Banner */}
        <div className="bg-gradient-to-r from-[#082B55] to-[#00468c] rounded-3xl p-8 sm:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-accent-gold text-xs font-bold uppercase tracking-wider mb-3">
              <Building className="w-3.5 h-3.5" />
              CORPORATE MICE &amp; TEAM RETREATS
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-headline mb-3">
              Planning an Offsite for Your Company or College?
            </h3>
            <p className="text-xs sm:text-sm text-surface-container-low leading-relaxed font-light">
              We manage end-to-end logistics for 20 to 300+ guests. AC coach fleets, resort conference halls, audio setups, team-building obstacle courses, and GST invoice compliance.
            </p>
          </div>
          <button
            onClick={() => openModal("Corporate Offsite Inquiry")}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#FF982F] to-[#e67e15] text-white font-bold text-sm shadow-lg hover:scale-105 transition-all shrink-0"
          >
            Request Corporate Offsite Proposal
          </button>
        </div>
      </section>
    </div>
  );
}
