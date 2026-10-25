"use client";

import React, { useState, useMemo, Suspense } from "react";
import { ALL_PACKAGES } from "@/data/packages";
import PackageCard from "@/components/PackageCard";
import { Search, Globe, SlidersHorizontal, Plane, ShieldCheck } from "lucide-react";
import { useSearchParams } from "next/navigation";

function InternationalPackagesContent() {
  const searchParams = useSearchParams();
  const initialDest = searchParams.get("dest") || "all";

  const [selectedDest, setSelectedDest] = useState(initialDest);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceSort, setPriceSort] = useState("default");

  const intlPackages = useMemo(() => {
    return ALL_PACKAGES.filter((p) => p.type === "international");
  }, []);

  const filteredPackages = useMemo(() => {
    return intlPackages.filter((pkg) => {
      const matchesDest =
        selectedDest === "all" || pkg.location.toLowerCase().includes(selectedDest.toLowerCase());
      const matchesSearch =
        pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesDest && matchesSearch;
    }).sort((a, b) => {
      if (priceSort === "low-to-high") return a.discountedPrice - b.discountedPrice;
      if (priceSort === "high-to-low") return b.discountedPrice - a.discountedPrice;
      if (priceSort === "rating") return b.rating - a.rating;
      return 0;
    });
  }, [intlPackages, selectedDest, searchQuery, priceSort]);

  const destTabs = [
    { id: "all", label: "All International" },
    { id: "dubai", label: "Dubai & Emirates" },
    { id: "bali", label: "Bali Tropical Villas" },
    { id: "singapore", label: "Singapore & Malaysia" },
    { id: "maldives", label: "Maldives Overwater" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
      <div className="bg-surface-container-lowest p-4 sm:p-6 rounded-2xl border border-surface-container-high shadow-sm mb-8 space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-outline" />
            <input
              type="text"
              placeholder="Search Dubai, Bali, Singapore..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-surface-container-high bg-surface-container-low focus:outline-none focus:ring-2 focus:ring-primary text-xs sm:text-sm"
            />
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <SlidersHorizontal className="w-4 h-4 text-outline shrink-0" />
            <span className="text-xs text-outline font-semibold whitespace-nowrap">Sort by:</span>
            <select
              value={priceSort}
              onChange={(e) => setPriceSort(e.target.value)}
              className="bg-surface-container-low border border-surface-container-high text-xs sm:text-sm font-semibold rounded-xl px-3 py-2 text-on-surface focus:outline-none cursor-pointer w-full md:w-auto"
            >
              <option value="default">Recommended</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-surface-container-low">
          {destTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedDest(tab.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedDest === tab.id
                  ? "bg-primary-container text-white shadow-sm"
                  : "bg-surface-container-low hover:bg-surface-container text-on-surface-variant"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mb-6 text-xs text-outline">
        <span>Showing <strong className="text-on-surface">{filteredPackages.length}</strong> international getaways</span>
        <span>Airport pickup, transfers &amp; guided excursions included</span>
      </div>

      {filteredPackages.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pb-16">
          {filteredPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-surface-container-lowest rounded-2xl border border-surface-container-high p-8 mb-16">
          <Globe className="w-12 h-12 text-outline mx-auto mb-3" />
          <h3 className="text-lg font-bold text-on-surface font-headline mb-1">
            No international tours match your search
          </h3>
          <p className="text-xs text-on-surface-variant max-w-sm mx-auto mb-4">
            Looking for Europe, Japan, or New Zealand? Our international visa desk plans bespoke itineraries worldwide.
          </p>
          <button
            onClick={() => {
              setSelectedDest("all");
              setSearchQuery("");
            }}
            className="px-4 py-2 bg-primary text-white text-xs font-semibold rounded-lg"
          >
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
}

export default function InternationalPackagesPage() {
  return (
    <div className="w-full flex flex-col bg-background pt-24 sm:pt-28">
      {/* 1. HERO BANNER */}
      <section className="bg-gradient-to-r from-[#082B55] via-[#00468c] to-[#075db5] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-accent-gold text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
              <Globe className="w-3.5 h-3.5" />
              WORLD CLASS TRAVEL
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-headline tracking-tight mb-4">
              Curated International Holidays.
            </h1>
            <p className="text-sm sm:text-base text-surface-container-low font-light leading-relaxed mb-6">
              From glowing Arabian deserts to Balinese tropical sanctuaries and overwater lagoons, experience personalized world travel with comprehensive visa assistance.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <span className="inline-flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-lg">
                <Plane className="w-4 h-4 text-accent-gold" />
                Flight &amp; Visa Guidance
              </span>
              <span className="inline-flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-lg">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Guaranteed Luxury Stays
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PACKAGES WRAPPED IN SUSPENSE */}
      <Suspense fallback={<div className="max-w-7xl mx-auto p-12 text-center text-sm text-outline">Loading international packages...</div>}>
        <InternationalPackagesContent />
      </Suspense>
    </div>
  );
}
