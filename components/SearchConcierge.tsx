"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin, Calendar, Users, Compass, ChevronRight, Sparkles } from "lucide-react";

export default function SearchConcierge() {
  const router = useRouter();
  const [destination, setDestination] = useState("all");
  const [duration, setDuration] = useState("all");
  const [category, setCategory] = useState("all");
  const [activeTab, setActiveTab] = useState("domestic");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === "international") {
      router.push(`/international-packages${destination !== "all" ? `?dest=${destination}` : ""}`);
    } else {
      router.push(`/domestic-packages${destination !== "all" ? `?region=${destination}` : ""}`);
    }
  };

  const quickPills = [
    { label: "Coorg Plantation", query: "/packages/coorg" },
    { label: "Munnar & Alleppey", query: "/domestic-packages?region=kerala" },
    { label: "Dubai Luxury", query: "/international-packages?dest=dubai" },
    { label: "Chikmagalur Coffee", query: "/domestic-packages?region=karnataka" },
    { label: "Bali Villas", query: "/international-packages?dest=bali" },
    { label: "Ooty Hills", query: "/domestic-packages?region=tamilnadu" },
  ];

  return (
    <section id="trip-search-section" className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16 w-full">
      <div className="bg-white/95 backdrop-blur-xl p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-[0_20px_50px_-10px_rgba(8,43,85,0.18)] border border-surface-container-high">
        {/* Top Header & Tabs */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-surface-container-high">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary-fixed/50 flex items-center justify-center text-primary">
              <Compass className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold font-headline text-on-surface">
                Find Your Ideal Itinerary
              </h2>
              <p className="text-xs text-on-surface-variant">
                Handcrafted South India circuits • 100% verified stays • Custom itineraries
              </p>
            </div>
          </div>

          {/* Domestic vs International Switch Tabs */}
          <div className="flex items-center p-1 bg-surface-container-low rounded-xl border border-surface-container-high w-full sm:w-auto">
            <button
              onClick={() => setActiveTab("domestic")}
              className={`flex-1 sm:flex-none px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "domestic"
                  ? "bg-primary-container text-white shadow-sm"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Domestic Holidays
            </button>
            <button
              onClick={() => setActiveTab("international")}
              className={`flex-1 sm:flex-none px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "international"
                  ? "bg-primary-container text-white shadow-sm"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              International Escapes
            </button>
          </div>
        </div>

        {/* Search Form Grid */}
        <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {/* Destination Selector */}
          <div className="relative p-3 rounded-xl border border-outline-variant bg-surface-container-lowest hover:border-primary transition-all">
            <label className="block text-[11px] font-bold text-outline uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span>Destination</span>
            </label>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full bg-transparent text-sm font-semibold text-on-surface focus:outline-none cursor-pointer"
            >
              <option value="all">Any Destination</option>
              {activeTab === "domestic" ? (
                <>
                  <option value="coorg">Coorg (Kodagu)</option>
                  <option value="chikmagalur">Chikmagalur &amp; Sakleshpur</option>
                  <option value="kerala">Kerala (Munnar, Alleppey, Thekkady)</option>
                  <option value="ooty">Ooty &amp; Nilgiris</option>
                  <option value="karnataka">Karnataka Heritage (Hampi, Mysore)</option>
                  <option value="north">North India (Kashmir, Himachal)</option>
                </>
              ) : (
                <>
                  <option value="dubai">Dubai &amp; Abu Dhabi</option>
                  <option value="bali">Bali &amp; Gili Islands</option>
                  <option value="singapore">Singapore &amp; Malaysia</option>
                  <option value="maldives">Maldives Luxury Atolls</option>
                  <option value="thailand">Thailand (Phuket, Krabi)</option>
                  <option value="vietnam">Vietnam &amp; Cambodia</option>
                </>
              )}
            </select>
          </div>

          {/* Duration Selector */}
          <div className="relative p-3 rounded-xl border border-outline-variant bg-surface-container-lowest hover:border-primary transition-all">
            <label className="block text-[11px] font-bold text-outline uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-primary" />
              <span>Trip Duration</span>
            </label>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full bg-transparent text-sm font-semibold text-on-surface focus:outline-none cursor-pointer"
            >
              <option value="all">Any Duration</option>
              <option value="weekend">Quick Weekend (2N / 3D)</option>
              <option value="standard">Standard Getaway (3N / 4D)</option>
              <option value="extended">Extended Circuit (5N / 6D)</option>
              <option value="grand">Grand Tour (7N+)</option>
            </select>
          </div>

          {/* Theme Selector */}
          <div className="relative p-3 rounded-xl border border-outline-variant bg-surface-container-lowest hover:border-primary transition-all">
            <label className="block text-[11px] font-bold text-outline uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>Travel Style</span>
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-transparent text-sm font-semibold text-on-surface focus:outline-none cursor-pointer"
            >
              <option value="all">All Holiday Styles</option>
              <option value="hills">Coffee Plantations &amp; Hills</option>
              <option value="family">Family &amp; Leisure</option>
              <option value="honeymoon">Couples &amp; Honeymoon</option>
              <option value="heritage">Heritage &amp; Temple Trails</option>
              <option value="wildlife">Wildlife &amp; Safari</option>
            </select>
          </div>

          {/* Search Action CTA Button */}
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full h-[58px] rounded-xl bg-gradient-to-r from-[#FF982F] to-[#e67e15] hover:from-[#e67e15] hover:to-[#cb6d0f] text-white font-bold text-sm shadow-[0_6px_20px_rgba(255,152,47,0.35)] hover:shadow-[0_8px_24px_rgba(255,152,47,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              <span>Search {activeTab === "domestic" ? "Domestic" : "International"}</span>
            </button>
          </div>
        </form>

        {/* Popular Quick Search Tags */}
        <div className="mt-5 pt-4 border-t border-surface-container-low flex flex-wrap items-center gap-2">
          <span className="text-xs text-outline font-medium mr-1">Trending:</span>
          {quickPills.map((pill) => (
            <button
              key={pill.label}
              onClick={() => router.push(pill.query)}
              className="text-xs py-1 px-3 rounded-full bg-surface-container-low hover:bg-primary hover:text-white text-on-surface-variant font-medium transition-colors"
            >
              {pill.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
