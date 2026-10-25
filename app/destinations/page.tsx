"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Compass, Sun, Calendar, ArrowRight, Sparkles } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export default function DestinationsPage() {
  const { openModal } = useModal();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const destinations = [
    {
      id: "coorg",
      name: "Coorg (Kodagu)",
      tagline: "The Scotland of India • Coffee Capital",
      category: "hills",
      state: "Karnataka",
      distance: "250 km from Bengaluru",
      bestTime: "Oct to May",
      highlights: ["Abbey Falls", "Coffee Estate Walks", "Dubare Elephants", "Raja's Seat"],
      imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
      packageLink: "/packages/coorg",
    },
    {
      id: "chikmagalur",
      name: "Chikmagalur",
      tagline: "Misty Peaks & Sacred Baba Budangiri",
      category: "hills",
      state: "Karnataka",
      distance: "245 km from Bengaluru",
      bestTime: "Sep to April",
      highlights: ["Mullayanagiri Peak", "Hebbe Falls", "Z Point", "Coffee Museum"],
      imageUrl: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80",
      packageLink: "/domestic-packages?region=karnataka",
    },
    {
      id: "wayanad",
      name: "Wayanad",
      tagline: "Rainforest Canopy & Prehistoric Caves",
      category: "wildlife",
      state: "Kerala",
      distance: "275 km from Bengaluru",
      bestTime: "Oct to May",
      highlights: ["Chembra Heart Lake", "Edakkal Caves", "Banasura Sagar Dam", "Treehouses"],
      imageUrl: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
      packageLink: "/domestic-packages?region=kerala",
    },
    {
      id: "ooty",
      name: "Ooty & Nilgiris",
      tagline: "Queen of Hill Stations & Toy Train",
      category: "hills",
      state: "Tamil Nadu",
      distance: "270 km from Bengaluru",
      bestTime: "Year Round",
      highlights: ["Nilgiri Mountain Train", "Botanical Gardens", "Doddabetta Peak", "Pykara Lake"],
      imageUrl: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80",
      packageLink: "/domestic-packages?region=tamilnadu",
    },
    {
      id: "hampi",
      name: "Hampi & Badami",
      tagline: "UNESCO Monolithic Vijayanagara Glory",
      category: "heritage",
      state: "Karnataka",
      distance: "340 km from Bengaluru",
      bestTime: "Oct to March",
      highlights: ["Virupaksha Temple", "Stone Chariot", "Tungabhadra Coracle", "Badami Caves"],
      imageUrl: "https://images.unsplash.com/photo-1600100397608-f010f4438fa7?auto=format&fit=crop&w=800&q=80",
      packageLink: "/domestic-packages?region=karnataka",
    },
    {
      id: "dubai",
      name: "Dubai & Emirates",
      tagline: "Futuristic Oasis & Desert Arabian Nights",
      category: "international",
      state: "UAE",
      distance: "3.5 Hrs Direct Flight from BLR",
      bestTime: "Nov to April",
      highlights: ["Burj Khalifa", "Red Dune Safari", "Dubai Marina", "Palm Jumeirah"],
      imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
      packageLink: "/international-packages?dest=dubai",
    },
  ];

  const filtered = destinations.filter(
    (d) => selectedCategory === "all" || d.category === selectedCategory
  );

  return (
    <div className="w-full flex flex-col bg-background pt-32 sm:pt-36">
      <section className="bg-gradient-to-r from-[#00468c] to-[#082B55] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-accent-gold text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
              <Compass className="w-3.5 h-3.5" />
              DESTINATION DIRECTORY
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-headline tracking-tight mb-4">
              Explore By Destination.
            </h1>
            <p className="text-sm sm:text-base text-surface-container-low font-light leading-relaxed">
              Curated travel guides for South India&apos;s most captivating hills, coastal sanctuaries, historic kingdoms, and world-class international hubs.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {[
            { id: "all", label: "All Destinations" },
            { id: "hills", label: "Western Ghats & Hills" },
            { id: "heritage", label: "UNESCO Heritage" },
            { id: "wildlife", label: "Rainforest & Wildlife" },
            { id: "international", label: "International Hubs" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === tab.id
                  ? "bg-primary-container text-white shadow-sm"
                  : "bg-surface-container-low hover:bg-surface-container text-on-surface-variant"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pb-16">
          {filtered.map((dest) => (
            <div
              key={dest.id}
              className="group bg-surface-container-lowest rounded-2xl overflow-hidden border border-surface-container-high shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-container">
                  <Image
                    src={dest.imageUrl}
                    alt={dest.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-[#082B55]/85 backdrop-blur-md text-white text-[11px] font-bold">
                      {dest.state}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-lg font-headline text-on-surface mb-1 group-hover:text-primary transition-colors">
                    {dest.name}
                  </h3>
                  <p className="text-xs text-primary font-semibold mb-3">{dest.tagline}</p>

                  <div className="grid grid-cols-2 gap-2 text-[11px] text-outline mb-4 bg-surface-container-low p-2.5 rounded-xl">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span className="truncate">{dest.distance}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Sun className="w-3.5 h-3.5 text-accent-gold shrink-0" />
                      <span>Best: {dest.bestTime}</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-outline block mb-1">
                      Key Highlights:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {dest.highlights.map((h, i) => (
                        <span key={i} className="text-[10px] bg-surface-container-low px-2 py-0.5 rounded text-on-surface-variant font-medium">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <Link
                  href={dest.packageLink}
                  className="w-full py-2.5 px-4 rounded-xl bg-primary-container hover:bg-primary text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm"
                >
                  <span>Explore {dest.name} Packages</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
