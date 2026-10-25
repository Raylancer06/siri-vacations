"use client";

import React, { useState, useMemo, Suspense } from "react";
import { ALL_PACKAGES } from "@/data/packages";
import PackageCard from "@/components/PackageCard";
import { Search, MapPin, SlidersHorizontal } from "lucide-react";
import { useSearchParams } from "next/navigation";

function DomesticPackagesContent() {
  const searchParams = useSearchParams();
  const initialRegion = searchParams.get("region") || "all";

  const [selectedRegion, setSelectedRegion] = useState(initialRegion);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceSort, setPriceSort] = useState("default");

  const domesticPackages = useMemo(() => {
    return ALL_PACKAGES.filter((p) => p.type === "domestic");
  }, []);

  const filteredPackages = useMemo(() => {
    return domesticPackages.filter((pkg) => {
      const matchesRegion =
        selectedRegion === "all" || pkg.region === selectedRegion;
      const matchesSearch =
        pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesRegion && matchesSearch;
    }).sort((a, b) => {
      if (priceSort === "low-to-high") return a.discountedPrice - b.discountedPrice;
      if (priceSort === "high-to-low") return b.discountedPrice - a.discountedPrice;
      if (priceSort === "rating") return b.rating - a.rating;
      return 0;
    });
  }, [domesticPackages, selectedRegion, searchQuery, priceSort]);

  const regionTabs = [
    { id: "all", label: "All Domestic Tours" },
    { id: "karnataka", label: "Karnataka Hill & Heritage" },
    { id: "kerala", label: "Kerala Backwaters & Hills" },
    { id: "tamilnadu", label: "Ooty & Nilgiris" },
    { id: "north", label: "North India Circuits" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
      <div className="bg-surface-container-lowest p-4 sm:p-6 rounded-2xl border border-surface-container-high shadow-sm mb-8 space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-outline" />
            <input
              type="text"
              placeholder="Search Coorg, Munnar, Ooty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-surface-container-high bg-surface-container-low focus:outline-none focus:ring-2 focus:ring-primary text-xs sm:text-sm"
            />
          </div>

          {/* Sort Dropdown */}
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

        {/* Region Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-surface-container-low">
          {regionTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedRegion(tab.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedRegion === tab.id
                  ? "bg-primary-container text-white shadow-sm"
                  : "bg-surface-container-low hover:bg-surface-container text-on-surface-variant"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Counter */}
      <div className="flex items-center justify-between mb-6 text-xs text-outline">
        <span>Showing <strong className="text-on-surface">{filteredPackages.length}</strong> domestic itineraries</span>
        <span>All packages include private vehicle, stays &amp; breakfast</span>
      </div>

      {/* Packages Grid */}
      {filteredPackages.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pb-16">
          {filteredPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-surface-container-lowest rounded-2xl border border-surface-container-high p-8 mb-16">
          <MapPin className="w-12 h-12 text-outline mx-auto mb-3" />
          <h3 className="text-lg font-bold text-on-surface font-headline mb-1">
            No packages match your search
          </h3>
          <p className="text-xs text-on-surface-variant max-w-sm mx-auto mb-4">
            We couldn&apos;t find an existing itinerary matching &ldquo;{searchQuery}&rdquo;. Contact our travel desk for a bespoke custom package!
          </p>
          <button
            onClick={() => {
              setSelectedRegion("all");
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

export default function DomesticPackagesPage() {
  return (
    <div className="w-full flex flex-col bg-background pt-32 sm:pt-36">
      {/* 1. HERO BANNER */}
      <section className="bg-gradient-to-r from-[#00468c] to-[#082B55] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-accent-gold text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
              <MapPin className="w-3.5 h-3.5" />
              CURATED DOMESTIC HOLIDAYS
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-headline tracking-tight mb-4">
              Explore the Soul of India.
            </h1>
            <p className="text-sm sm:text-base text-surface-container-low font-light leading-relaxed">
              From the coffee-scented highlands of the Western Ghats to historic temple corridors and peaceful backwaters, discover our handpicked all-inclusive domestic tours.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FILTER & PACKAGES WRAPPED IN SUSPENSE */}
      <Suspense fallback={<div className="max-w-7xl mx-auto p-12 text-center text-sm text-outline">Loading packages...</div>}>
        <DomesticPackagesContent />
      </Suspense>
    </div>
  );
}
