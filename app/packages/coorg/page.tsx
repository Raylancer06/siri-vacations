"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import { 
  Star, 
  Clock, 
  MapPin, 
  Calendar, 
  Users, 
  Car, 
  Check, 
  X, 
  Phone, 
  MessageCircle, 
  ChevronDown, 
  ShieldCheck, 
  Sparkles, 
  Coffee, 
  Utensils, 
  Bed, 
  Camera, 
  Info,
  Heart,
  Share2,
  CheckCircle2,
  Send,
  ArrowRight,
  Sun,
  Sunrise,
  Moon,
  Navigation
} from "lucide-react";

export default function CoorgPackageDetailsPage() {
  const { openModal } = useModal();
  const [activeDay, setActiveDay] = useState<number | null>(1);
  const [activeHeroPhoto, setActiveHeroPhoto] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [enquirySuccess, setEnquirySuccess] = useState(false);

  // Form State
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    adults: "2",
    children: "0",
    stayCategory: "deluxe",
    notes: "",
  });

  const heroPhotos = [
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcICUANHSdyDooRAM0abn_uPo56ZBce01e7A_EAmhsC4r2exyA_VF2nv1JuMaoZMezuEX50BE3aYpElzjpUsf6NE6np2Jm2iAZsoDHZ_rvXir-NaTpOAoHLMzK9XrUTRujdKYxhZFe34O8nZYNIV6u2Yp1mdOooQ9D6QMLnuKEG-eB81FMbcSiF3g4x06M2rJAQqlksQBhxz0WMhg3VbpKEeOoNAn9U8wl01JrkGMeVi6BaEM-Zqbp",
      caption: "Verdant Estate Haven, Kodagu",
      sub: "Experience private heritage homestays immersed in wild robusta and arabica groves",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZspT0J2FgnTw019-Vza-47QGSZsJtC0jI4cFBB3EgBv2mLsgBZixH5_6DazS795HT1OK3m5YQIXTS770LhnDmJ5PnKqKWpBlmsuKbQHclrUUJkMgDWkhG0qVzHukElHLwwNSvBJOjQzEZXONLrd5VltVUClSEkGytBRhP7zXiYzNizhk8PZM1GjfjHzNFbnYVkHuHx3xV8i9OEBNHYuUQBkzWjIl7ngRKRzNPKX4ot3Z2Fu19JerO",
      caption: "Abbey Waterfalls Cascade",
      sub: "Walk through spice forests to catch roaring falls tumbling into Kaveri basin",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYA5VkkODES55H7E5jLlaRBeyhhMkp6e8gBcfxQ6Y0wVl7JmwaN52HeAscGUdG6XlLt3WReUwUcXX5VkL1DNAeSmkmwDbB8kauCHTWg0iNH7WThhgReRD2MSGUEQ8XjAMBczhpKcUbx9zGUy5zoUPlNHuKEC_IQ435iQZMtoTL_pEotZiUyVrbapQm_I-dLXPfCHI8nc3zYCl1wRFblAK7qpGRcchbzu5SBPc1IdUJYTSXbOl8fNDV",
      caption: "Bylakuppe Golden Temple",
      sub: "Namdroling Monastery with 40-foot ornate golden Buddhist statues",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxITKkafdj_upAYYvwxGtG6IXWetmBAozZUM_79U7SCeiUTBZWNxvoOE_5TD7NgmYphNOcyqVQ4Disqy89vasBg9HapdYmW05SIz0S04AiYz5jwB4i0lcSOxOQ6XxE77cX3AruIeT4Q41WISbqsQni2LABFw15oR5SMYPjG5wtrV7bHLbZJEzcuVLNgHukjpmSs-ZK0baRYqWei8zAgpKUgYSmHbUYRHEbr-urRPEIt43x5JaSO2Sr",
      caption: "Sunset at Raja's Seat",
      sub: "Panoramic twilight colors overlooking the misty valleys of Madikeri",
    },
  ];

  const handleEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setEnquirySuccess(true);
  };

  const calculatedRate =
    form.stayCategory === "luxury" ? 10499 :
    form.stayCategory === "deluxe" ? 7999 : 6499;

  const totalCalculated =
    calculatedRate * parseInt(form.adults || "2") +
    (calculatedRate * 0.5) * parseInt(form.children || "0");

  return (
    <div className="w-full flex flex-col bg-background pt-24 sm:pt-28">
      {/* 1. TOP BREADCRUMB & STATUS BAR */}
      <section className="w-full bg-surface-container-low py-3 border-b border-surface-container-high">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <nav className="flex items-center gap-2 text-xs text-outline">
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <span>Home</span>
            </Link>
            <span>/</span>
            <Link href="/domestic-packages" className="hover:text-primary transition-colors">
              Domestic Packages
            </Link>
            <span>/</span>
            <Link href="/domestic-packages?region=karnataka" className="hover:text-primary transition-colors">
              Karnataka
            </Link>
            <span>/</span>
            <span className="text-on-surface font-semibold truncate max-w-[200px] sm:max-w-none">
              Coorg Coffee Trails
            </span>
          </nav>
          <div className="hidden md:flex items-center gap-3 text-xs">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-semibold border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              Instant Confirmation Available
            </span>
            <span className="text-outline">
              Package Code: <strong className="text-on-surface">SV-KAR-032</strong>
            </span>
          </div>
        </div>
      </section>

      {/* 2. TITLE & SUMMARY HEADER */}
      <section className="w-full bg-surface pt-6 pb-4">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-primary-fixed/50 text-primary font-bold text-xs">
                  Karnataka Hill Station
                </span>
                <span className="px-3 py-1 rounded-full bg-secondary-fixed text-primary font-semibold text-xs flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  3 Days / 2 Nights
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-medium text-xs flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" />
                  Couples &amp; Families
                </span>
                <span className="px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-semibold text-xs flex items-center gap-1">
                  <Car className="w-3.5 h-3.5" />
                  Private Chauffeur Included
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-bold font-headline text-on-surface tracking-tight mt-1">
                Coorg Coffee Trails, Abbey Falls &amp; Raja&apos;s Seat
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-xs text-outline">
                <div className="flex items-center gap-1 text-amber-500 font-bold">
                  <Star className="w-4 h-4 fill-amber-500" />
                  <span>4.9</span>
                  <span className="text-outline font-normal">(128 guest reviews)</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1 text-primary">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Bengaluru / Mysore Pickup &amp; Drop</span>
                </div>
                <span>•</span>
                <span className="text-emerald-700 font-medium">Daily Breakfast Included</span>
              </div>
            </div>

            {/* Quick Price & Action in Header */}
            <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between bg-surface-container-low p-4 rounded-xl lg:bg-transparent lg:p-0 shrink-0">
              <div className="text-left lg:text-right">
                <span className="text-[11px] uppercase tracking-wider text-outline block">
                  Customizable Package
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xs text-outline">Starting from</span>
                  <span className="text-2xl sm:text-3xl font-bold font-headline text-primary">
                    ₹6,499
                  </span>
                  <span className="text-xs text-outline">/ person</span>
                </div>
                <p className="text-[11px] text-outline">Taxes included • Ex-Bengaluru / Mysore</p>
              </div>

              <div className="flex items-center gap-2 mt-2">
                <a
                  href="https://wa.me/919480123456?text=Hello%20Siri%20Vacations,%20I%20am%20interested%20in%20the%20Coorg%20Coffee%20Trails%20package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface flex items-center gap-1.5 shadow-sm text-xs font-semibold border border-surface-container-high transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
                <button
                  onClick={() => {
                    const el = document.getElementById("booking-inquiry");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-5 py-2 rounded-lg bg-tertiary-container hover:bg-tertiary text-on-tertiary text-xs font-bold shadow-[0_4px_16px_rgba(143,78,0,0.25)] transition-all"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HERO PHOTO BENTO GALLERY (8 Cols Main + 4 Cols Stacked) */}
      <section className="w-full bg-surface pb-6">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 rounded-2xl overflow-hidden p-2 bg-surface-container-low shadow-[0_4px_20px_-2px_rgba(8,43,85,0.06)] border border-surface-container-high">
            {/* Primary Main Photo (8 cols) */}
            <div className="md:col-span-8 relative h-[300px] sm:h-[420px] lg:h-[480px] rounded-xl overflow-hidden group">
              <Image
                src={heroPhotos[activeHeroPhoto].src}
                alt={heroPhotos[activeHeroPhoto].caption}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-primary font-bold text-xs shadow-sm flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-accent-orange" />
                  Handcrafted Experience
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-headline text-white drop-shadow-sm">
                    {heroPhotos[activeHeroPhoto].caption}
                  </h3>
                  <p className="text-xs sm:text-sm text-surface-container-high drop-shadow-sm max-w-lg mt-0.5">
                    {heroPhotos[activeHeroPhoto].sub}
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="p-2 rounded-lg bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-red-500 transition-colors"
                  >
                    <Heart className={`w-4 h-4 ${isWishlisted ? "text-red-500 fill-red-500" : ""}`} />
                  </button>
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({ title: "Coorg Tour Package", url: window.location.href });
                      } else {
                        navigator.clipboard.writeText(window.location.href);
                        alert("Link copied!");
                      }
                    }}
                    className="p-2 rounded-lg bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-primary transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* 3 Thumbnails Stacked (4 cols) */}
            <div className="md:col-span-4 grid grid-cols-3 md:grid-cols-1 gap-2.5 h-full">
              {heroPhotos.slice(1).map((photo, idx) => {
                const actualIndex = idx + 1;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveHeroPhoto(actualIndex)}
                    className={`relative h-[110px] md:h-[150px] rounded-xl overflow-hidden group text-left border-2 transition-all ${
                      activeHeroPhoto === actualIndex ? "border-primary ring-2 ring-primary/40" : "border-transparent opacity-90 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.caption}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 33vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <span className="absolute bottom-2 left-3 right-3 text-white font-bold text-xs truncate">
                      {photo.caption}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. QUICK OVERVIEW BAR (5 METRICS) */}
      <section className="w-full bg-surface-container-lowest py-4 shadow-[0_2px_12px_rgba(8,43,85,0.04)] border-y border-surface-container-high mb-8">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-center">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-surface-container-high flex items-center justify-center text-primary shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-outline uppercase tracking-wider block">Duration</span>
                <strong className="text-xs sm:text-sm font-semibold text-on-surface">3 Days / 2 Nights</strong>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-secondary-fixed flex items-center justify-center text-primary shrink-0">
                <Navigation className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-outline uppercase tracking-wider block">Pickup / Drop</span>
                <strong className="text-xs sm:text-sm font-semibold text-on-surface">Bengaluru / Mysore</strong>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-surface-container flex items-center justify-center text-primary shrink-0">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-outline uppercase tracking-wider block">Best Season</span>
                <strong className="text-xs sm:text-sm font-semibold text-on-surface">Oct to May (Year-Round)</strong>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-amber-100 flex items-center justify-center text-accent-orange shrink-0">
                <Car className="w-5 h-5 text-accent-orange" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-outline uppercase tracking-wider block">Vehicle</span>
                <strong className="text-xs sm:text-sm font-semibold text-on-surface">Private AC Sedan / SUV</strong>
              </div>
            </div>

            <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
              <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                <Utensils className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-outline uppercase tracking-wider block">Meal Plan</span>
                <strong className="text-xs sm:text-sm font-semibold text-on-surface">Daily Breakfast Included</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MAIN CONTENT (8 Cols Left) + STICKY BOOKING FORM (4 Cols Right) */}
      <section className="w-full bg-surface pb-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Content Area (8 Cols) */}
            <div className="lg:col-span-8 space-y-10">
              {/* Package Story & Key Highlights */}
              <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl shadow-card border border-surface-container-high space-y-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-6 rounded-full bg-primary" />
                  <h2 className="text-xl sm:text-2xl font-bold font-headline text-on-surface">
                    The Scotland of India Beckons
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed font-light">
                  Tucked into the misty folds of Karnataka&apos;s Western Ghats, Kodagu (Coorg) is a timeless sanctuary of rolling emerald hills, aroma-rich coffee plantations, cascading waterfalls, and warm Kodava hospitality. With Siri Vacations&apos; bespoke chauffeur-driven holiday, escape Bengaluru&apos;s bustle for three curated days of sensory rejuvenation.
                </p>

                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  From traversing the tranquil forest trails of Cauvery Nisargadhama and exploring the spiritual serenity of the Golden Tibetan Temple in Bylakuppe, to soaking in the roaring Abbey Falls and capturing golden hour from Raja&apos;s Seat—every moment is designed for effortless leisure and unforgettable family memories.
                </p>

                {/* 4 Tour Highlights Cards */}
                <div className="pt-2 border-t border-surface-container-low">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-outline mb-4">
                    Key Tour Highlights
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-container-low border border-surface-container-high">
                      <div className="w-8 h-8 rounded-lg bg-surface-container-highest text-primary flex items-center justify-center shrink-0 mt-0.5">
                        <Coffee className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs sm:text-sm text-on-surface font-headline">Private Plantation Walk</h4>
                        <p className="text-[11px] text-outline mt-0.5">Expert naturalist walk through cardamom, pepper vines &amp; coffee groves.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-container-low border border-surface-container-high">
                      <div className="w-8 h-8 rounded-lg bg-surface-container-highest text-primary flex items-center justify-center shrink-0 mt-0.5">
                        <Sparkles className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs sm:text-sm text-on-surface font-headline">Tibetan Cultural Immersion</h4>
                        <p className="text-[11px] text-outline mt-0.5">Witness peaceful prayer chants at Namdroling Monastery (Bylakuppe).</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-container-low border border-surface-container-high">
                      <div className="w-8 h-8 rounded-lg bg-surface-container-highest text-primary flex items-center justify-center shrink-0 mt-0.5">
                        <Camera className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs sm:text-sm text-on-surface font-headline">Abbey Falls &amp; Hanging Bridge</h4>
                        <p className="text-[11px] text-outline mt-0.5">Walk through spice forests to catch roaring falls tumbling into Kaveri basin.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-surface-container-low border border-surface-container-high">
                      <div className="w-8 h-8 rounded-lg bg-surface-container-highest text-primary flex items-center justify-center shrink-0 mt-0.5">
                        <ShieldCheck className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs sm:text-sm text-on-surface font-headline">Dubare Elephant Camp</h4>
                        <p className="text-[11px] text-outline mt-0.5">Interact with gentle giants along the bank of the pristine Cauvery river.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Day-Wise Expandable Itinerary Accordion */}
              <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl shadow-card border border-surface-container-high space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-6 rounded-full bg-primary" />
                    <h2 className="text-xl sm:text-2xl font-bold font-headline text-on-surface">
                      Day-Wise Detailed Itinerary
                    </h2>
                  </div>
                  <button
                    onClick={() => setActiveDay(activeDay === null ? 1 : null)}
                    className="text-xs text-primary font-bold hover:underline"
                  >
                    {activeDay === null ? "Expand Itinerary" : "Collapse All"}
                  </button>
                </div>

                <div className="space-y-4">
                  {/* Day 1 */}
                  <div className="rounded-xl bg-surface-container-low overflow-hidden border border-surface-container-high transition-all">
                    <button
                      onClick={() => setActiveDay(activeDay === 1 ? null : 1)}
                      className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-surface-container transition-colors"
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="w-9 h-9 rounded-xl bg-primary text-white font-bold flex items-center justify-center font-headline text-sm shadow-sm shrink-0">
                          1
                        </span>
                        <div>
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-[10px] uppercase font-bold text-outline">Day 01 • Approx 260 KM</span>
                            <span className="px-2 py-0.5 rounded-full bg-primary-fixed/40 text-primary text-[10px] font-semibold">
                              Breakfast Included
                            </span>
                          </div>
                          <h3 className="font-bold text-sm sm:text-base text-on-surface font-headline">
                            Bengaluru to Coorg via Bylakuppe &amp; Nisargadhama
                          </h3>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-outline transition-transform ${activeDay === 1 ? "rotate-180 text-primary" : ""}`}
                      />
                    </button>

                    {activeDay === 1 && (
                      <div className="px-4 pb-5 pt-1 space-y-4 border-t border-surface-container-high/50">
                        <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                          Early morning private pickup from your doorstep or Bengaluru Airport in a sanitised sedan/SUV. Cruise down the Mysuru expressway towards Kushalnagar, enjoying the transition from urban landscapes to the aromatic hills of Kodagu.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                          <div className="bg-surface-container-lowest p-3 rounded-lg border border-surface-container-high text-xs">
                            <span className="font-bold text-primary flex items-center gap-1 text-[11px] mb-1">
                              <Sunrise className="w-3.5 h-3.5" />
                              Morning (06:00 - 11:30)
                            </span>
                            <p className="text-on-surface-variant text-[11px]">
                              Pickup from Bengaluru, scenic highway breakfast stop, drive past Srirangapatna.
                            </p>
                          </div>

                          <div className="bg-surface-container-lowest p-3 rounded-lg border border-surface-container-high text-xs">
                            <span className="font-bold text-primary flex items-center gap-1 text-[11px] mb-1">
                              <Sun className="w-3.5 h-3.5" />
                              Afternoon (12:00 - 15:30)
                            </span>
                            <p className="text-on-surface-variant text-[11px]">
                              Visit Bylakuppe Namdroling Monastery, Tibetan flea market and Cauvery Nisargadhama bamboo island.
                            </p>
                          </div>

                          <div className="bg-surface-container-lowest p-3 rounded-lg border border-surface-container-high text-xs">
                            <span className="font-bold text-primary flex items-center gap-1 text-[11px] mb-1">
                              <Moon className="w-3.5 h-3.5" />
                              Evening (16:30 onwards)
                            </span>
                            <p className="text-on-surface-variant text-[11px]">
                              Check-in at luxury estate resort/homestay. Fresh plantation coffee welcome drink. Leisure evening by campfire.
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 text-xs">
                          <span className="text-outline font-semibold text-[11px]">Sightseeing:</span>
                          <span className="px-2 py-0.5 rounded bg-surface-container-lowest text-primary text-[10px] font-semibold border border-surface-container-high">
                            Golden Temple
                          </span>
                          <span className="px-2 py-0.5 rounded bg-surface-container-lowest text-primary text-[10px] font-semibold border border-surface-container-high">
                            Nisargadhama Deer Park
                          </span>
                          <span className="px-2 py-0.5 rounded bg-surface-container-lowest text-primary text-[10px] font-semibold border border-surface-container-high">
                            Coffee Estate Bonfire
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Day 2 */}
                  <div className="rounded-xl bg-surface-container-low overflow-hidden border border-surface-container-high transition-all">
                    <button
                      onClick={() => setActiveDay(activeDay === 2 ? null : 2)}
                      className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-surface-container transition-colors"
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="w-9 h-9 rounded-xl bg-primary text-white font-bold flex items-center justify-center font-headline text-sm shadow-sm shrink-0">
                          2
                        </span>
                        <div>
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-[10px] uppercase font-bold text-outline">Day 02 • Sightseeing Tour</span>
                            <span className="px-2 py-0.5 rounded-full bg-primary-fixed/40 text-primary text-[10px] font-semibold">
                              Breakfast Included
                            </span>
                          </div>
                          <h3 className="font-bold text-sm sm:text-base text-on-surface font-headline">
                            Abbey Falls, Madikeri Fort &amp; Sunset at Raja&apos;s Seat
                          </h3>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-outline transition-transform ${activeDay === 2 ? "rotate-180 text-primary" : ""}`}
                      />
                    </button>

                    {activeDay === 2 && (
                      <div className="px-4 pb-5 pt-1 space-y-4 border-t border-surface-container-high/50">
                        <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                          Wake up to the birdsong of Malabar whistling thrushes. Savor freshly brewed estate coffee before setting out for Madikeri&apos;s celebrated architectural landmarks, lush waterfalls, and unforgettable valley sunsets.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                          <div className="bg-surface-container-lowest p-3 rounded-lg border border-surface-container-high text-xs">
                            <span className="font-bold text-primary flex items-center gap-1 text-[11px] mb-1">
                              <Sunrise className="w-3.5 h-3.5" />
                              Morning (09:00 - 12:30)
                            </span>
                            <p className="text-on-surface-variant text-[11px]">
                              Visit Abbey Falls nestled amid coffee estates; walk through spice plantations with private guide.
                            </p>
                          </div>

                          <div className="bg-surface-container-lowest p-3 rounded-lg border border-surface-container-high text-xs">
                            <span className="font-bold text-primary flex items-center gap-1 text-[11px] mb-1">
                              <Sun className="w-3.5 h-3.5" />
                              Afternoon (13:30 - 16:30)
                            </span>
                            <p className="text-on-surface-variant text-[11px]">
                              Tour Madikeri Fort museum and the unique Gothic-Islamic Omkareshwara Temple built in 1820.
                            </p>
                          </div>

                          <div className="bg-surface-container-lowest p-3 rounded-lg border border-surface-container-high text-xs">
                            <span className="font-bold text-primary flex items-center gap-1 text-[11px] mb-1">
                              <Moon className="w-3.5 h-3.5" />
                              Evening (17:00 - 19:30)
                            </span>
                            <p className="text-on-surface-variant text-[11px]">
                              Catch magical sunset panoramic views over the cliffs of Raja&apos;s Seat followed by musical fountain show.
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 text-xs">
                          <span className="text-outline font-semibold text-[11px]">Sightseeing:</span>
                          <span className="px-2 py-0.5 rounded bg-surface-container-lowest text-primary text-[10px] font-semibold border border-surface-container-high">
                            Abbey Falls
                          </span>
                          <span className="px-2 py-0.5 rounded bg-surface-container-lowest text-primary text-[10px] font-semibold border border-surface-container-high">
                            Madikeri Fort
                          </span>
                          <span className="px-2 py-0.5 rounded bg-surface-container-lowest text-primary text-[10px] font-semibold border border-surface-container-high">
                            Raja&apos;s Seat
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Day 3 */}
                  <div className="rounded-xl bg-surface-container-low overflow-hidden border border-surface-container-high transition-all">
                    <button
                      onClick={() => setActiveDay(activeDay === 3 ? null : 3)}
                      className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-surface-container transition-colors"
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="w-9 h-9 rounded-xl bg-primary text-white font-bold flex items-center justify-center font-headline text-sm shadow-sm shrink-0">
                          3
                        </span>
                        <div>
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-[10px] uppercase font-bold text-outline">Day 03 • Approx 250 KM</span>
                            <span className="px-2 py-0.5 rounded-full bg-primary-fixed/40 text-primary text-[10px] font-semibold">
                              Breakfast Included
                            </span>
                          </div>
                          <h3 className="font-bold text-sm sm:text-base text-on-surface font-headline">
                            Dubare Elephant Camp &amp; Return Drive to Bengaluru
                          </h3>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-outline transition-transform ${activeDay === 3 ? "rotate-180 text-primary" : ""}`}
                      />
                    </button>

                    {activeDay === 3 && (
                      <div className="px-4 pb-5 pt-1 space-y-4 border-t border-surface-container-high/50">
                        <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                          Check-out after a traditional South Indian breakfast. Visit Dubare for elephant observation along the Cauvery bank, indulge in homemade chocolate and pure honey shopping, and return safely to Bengaluru.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                          <div className="bg-surface-container-lowest p-3 rounded-lg border border-surface-container-high text-xs">
                            <span className="font-bold text-primary flex items-center gap-1 text-[11px] mb-1">
                              <Sunrise className="w-3.5 h-3.5" />
                              Morning (08:30 - 11:30)
                            </span>
                            <p className="text-on-surface-variant text-[11px]">
                              Dubare Elephant Camp: Boat ride across river Cauvery to witness elephant bathing and feeding sessions.
                            </p>
                          </div>

                          <div className="bg-surface-container-lowest p-3 rounded-lg border border-surface-container-high text-xs">
                            <span className="font-bold text-primary flex items-center gap-1 text-[11px] mb-1">
                              <Sun className="w-3.5 h-3.5" />
                              Afternoon (12:00 - 14:00)
                            </span>
                            <p className="text-on-surface-variant text-[11px]">
                              Spice and coffee powder shopping in Madikeri town; authentic Coorg pork curry / veg lunch stop.
                            </p>
                          </div>

                          <div className="bg-surface-container-lowest p-3 rounded-lg border border-surface-container-high text-xs">
                            <span className="font-bold text-primary flex items-center gap-1 text-[11px] mb-1">
                              <Moon className="w-3.5 h-3.5" />
                              Evening (14:30 - 20:30)
                            </span>
                            <p className="text-on-surface-variant text-[11px]">
                              Relaxing chauffeur drive back to Bengaluru. Drop-off at your residence or Kempegowda International Airport.
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 text-xs">
                          <span className="text-outline font-semibold text-[11px]">Sightseeing:</span>
                          <span className="px-2 py-0.5 rounded bg-surface-container-lowest text-primary text-[10px] font-semibold border border-surface-container-high">
                            Dubare Elephant Camp
                          </span>
                          <span className="px-2 py-0.5 rounded bg-surface-container-lowest text-primary text-[10px] font-semibold border border-surface-container-high">
                            Madikeri Spice Market
                          </span>
                          <span className="px-2 py-0.5 rounded bg-surface-container-lowest text-primary text-[10px] font-semibold border border-surface-container-high">
                            Bengaluru Drop
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Inclusions & Exclusions Split */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Inclusions */}
                <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-card border border-surface-container-high space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-on-surface font-headline">What&apos;s Included</h3>
                      <p className="text-[11px] text-outline">Comprehensive tour coverage</p>
                    </div>
                  </div>
                  <ul className="space-y-2.5 text-xs text-on-surface-variant">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Dedicated private AC vehicle (Dzire / Etios or Innova Crysta) for entire 3-day itinerary from Bengaluru.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>2 Nights stay in handpicked 3-star / 4-star coffee estate resort or certified heritage homestay.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Daily freshly prepared gourmet breakfast at resort dining room.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>All toll taxes, state road taxes, parking fees, and chauffeur allowances included.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Guided walking tour of an active coffee &amp; black pepper plantation.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>24x7 dedicated Siri Vacations travel concierge support.</span>
                    </li>
                  </ul>
                </div>

                {/* Exclusions */}
                <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-card border border-surface-container-high space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0">
                      <X className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-on-surface font-headline">What&apos;s Excluded</h3>
                      <p className="text-[11px] text-outline">Pay-as-you-go items</p>
                    </div>
                  </div>
                  <ul className="space-y-2.5 text-xs text-on-surface-variant">
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>Airfare or train tickets to / from Bengaluru origin.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>Lunch and dinners (verified local restaurant recommendations provided).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>Entry monument tickets, river rafting tickets, or boat fare at Dubare Camp.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>Camera fees, personal laundry, alcoholic drinks, or tips for chauffeur.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>Anything not clearly mentioned in the inclusions list.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Photo Lightbox Grid: Glimpses of Kodagu */}
              <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl shadow-card border border-surface-container-high space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-6 rounded-full bg-primary" />
                    <h2 className="text-xl sm:text-2xl font-bold font-headline text-on-surface">
                      Glimpses of Kodagu
                    </h2>
                  </div>
                  <span className="text-xs text-outline">Captured by Siri Vacations Travelers</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuC19T1VVMse7XvmKf2HkbuK67Unm6LJZkyVBH1FRKde3jsJIAREsnfdb3viNmTyIFc5KSACEoVWthc1rr4Y_UQ85FLFJJ1A_g1c51sLVGcho3oCVxOo-bN_xOu71bkg66lfPphPg2dvk8mxbCws8Su-oOcxXxMB7xJCRiNCriqWGnmCajzTWV9Ogk1NMrcSFGbDx1Dt27_EwzNFY2FCuD4x_zks_Yi0YlJUlj7690NfRtWmo3DoIoTz",
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuDcGtSuNCPybcqDwczjjCycbZfZNYcV4ITcWCASDwOlv4TdVcy_pExp_huVRubwLVrpwTUAzAxEMeBltSXhen7qmu0GihqSqIkJFmcmpebegcvRqA7uLJi-5fnDZtIjlEdq2TxEcTJuhHX1AnnfwaoZMSKVOUuOXTMUDHS6dON33u6j-KduwRgb1WQlEERw9vrEDKzzNPkM2uP1pk8Wu_OYHKT9wQVIQH7UYkPOWsFaktuiis9oHZoA",
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuCMsizm5pHgU6_B3dBXHGhIJzEMOUdA7QXjrdAxHtFkxbq7u-eJE1DS-HXqvMgp8tQzl77h93S0KV5AbvbqMiKd58uwp6MSYjJ5ceRXXI1fzhCsYKrl-opTR8Fz8f1OgS8CT5y7rZnKIjgBBLTBn6Jr3vC8Ji_7HgyX-HTqfic5yfknxrckBMun9Eg7Y4cCrgi1cYAgGaEx9f_hwuTCOrKd9d5huqz0FJ4Wsm6txRgCf-0kFfHqoX8r",
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuBel1vgHZCI5v4fVSBFQdLWFXYiqi32tZogzXHbeHtmm1-8-wcEWTZLYDn6kl7MRmRdfYsHbxLospibQ2WnGG84C_g6XkeFmuWGUpXEcevwfgmMDaPx7oPbNd0S7kz5IYNyE5mRC_wmHc13qiNpRjKD6jrH5fTGD3pica09Ff7rZHNCRgw1UJJn43bjOSQ1gLvpRAovTW4P5LFxWG-GLBc8Dx05v-tBKwc-4VJ-wfNtTtEmsP3ScLzi",
                  ].map((imgSrc, i) => (
                    <div key={i} className="relative h-36 rounded-xl overflow-hidden group shadow-sm">
                      <Image
                        src={imgSrc}
                        alt="Kodagu travel photo"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Booking & Enquiry Form (4 Cols) */}
            <div className="lg:col-span-4 sticky top-20" id="booking-inquiry">
              <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-2xl border border-surface-container-high space-y-5">
                {/* Price Header */}
                <div className="border-b border-surface-container-low pb-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-outline">
                      Get Free Instant Quote
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                      Customizable
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl font-bold font-headline text-primary">
                      ₹{calculatedRate.toLocaleString("en-IN")}
                    </span>
                    <span className="text-xs text-outline">/ adult</span>
                    <span className="text-xs text-outline line-through">₹8,499</span>
                  </div>
                  <p className="text-[11px] text-outline mt-0.5">
                    Ex-Bengaluru • Twin Sharing Basis
                  </p>
                </div>

                {enquirySuccess ? (
                  <div className="py-8 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-base text-on-surface font-headline">
                      Inquiry Dispatched!
                    </h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      Thank you, <strong className="text-primary">{form.name || "Traveler"}</strong>. Our Coorg destination specialist will call or WhatsApp you at <strong className="text-on-surface">{form.phone}</strong> with the full itinerary voucher within 15 minutes.
                    </p>
                    <button
                      onClick={() => setEnquirySuccess(false)}
                      className="px-4 py-2 bg-primary text-white text-xs font-semibold rounded-lg"
                    >
                      Make Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleEnquiry} className="space-y-3.5">
                    <div>
                      <label className="block text-[11px] font-semibold text-outline uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Ramesh Kumar"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-surface-container-low border border-surface-container-high text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-outline uppercase tracking-wider mb-1">
                        WhatsApp Mobile Number *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-surface-container-low border border-surface-container-high text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-outline uppercase tracking-wider mb-1">
                        Preferred Travel Date
                      </label>
                      <input
                        type="date"
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-surface-container-low border border-surface-container-high text-xs font-medium focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[11px] font-semibold text-outline uppercase tracking-wider mb-1">
                          Adults (12+ yrs)
                        </label>
                        <select
                          value={form.adults}
                          onChange={(e) => setForm({ ...form, adults: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg bg-surface-container-low border border-surface-container-high text-xs font-medium focus:outline-none cursor-pointer"
                        >
                          <option value="1">1 Adult</option>
                          <option value="2">2 Adults</option>
                          <option value="3">3 Adults</option>
                          <option value="4">4 Adults</option>
                          <option value="5">5+ Adults</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-outline uppercase tracking-wider mb-1">
                          Children (0-11 yrs)
                        </label>
                        <select
                          value={form.children}
                          onChange={(e) => setForm({ ...form, children: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg bg-surface-container-low border border-surface-container-high text-xs font-medium focus:outline-none cursor-pointer"
                        >
                          <option value="0">0 Children</option>
                          <option value="1">1 Child</option>
                          <option value="2">2 Children</option>
                          <option value="3">3+ Children</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-outline uppercase tracking-wider mb-1">
                        Stay Category
                      </label>
                      <select
                        value={form.stayCategory}
                        onChange={(e) => setForm({ ...form, stayCategory: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-surface-container-low border border-surface-container-high text-xs font-medium focus:outline-none cursor-pointer"
                      >
                        <option value="standard">Standard Heritage Homestay (₹6,499/p)</option>
                        <option value="deluxe">Deluxe Coffee Estate Resort (₹7,999/p)</option>
                        <option value="luxury">Luxury Private Pool Villa (₹10,499/p)</option>
                      </select>
                    </div>

                    {/* Total Estimate Calculation */}
                    <div className="p-3 bg-primary-fixed/30 rounded-xl border border-primary-fixed flex items-center justify-between text-xs">
                      <span className="text-on-surface-variant">Estimated Total:</span>
                      <strong className="text-primary font-bold text-base">
                        ₹{totalCalculated.toLocaleString("en-IN")}
                      </strong>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-4 rounded-xl bg-tertiary-container hover:bg-tertiary text-on-tertiary font-bold text-xs shadow-[0_4px_16px_rgba(143,78,0,0.25)] hover:shadow-[0_8px_24px_rgba(143,78,0,0.35)] transition-all flex items-center justify-center gap-2 active:scale-95"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Package Enquiry</span>
                    </button>
                  </form>
                )}

                {/* Direct Phone / WhatsApp Assist */}
                <div className="pt-2 border-t border-surface-container-low space-y-2">
                  <a
                    href={`https://wa.me/919480123456?text=Hello%20Siri%20Vacations,%20I%20am%20interested%20in%20the%20Coorg%20Coffee%20Trails%20for%20${form.adults}%20adults.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Ask Questions on WhatsApp</span>
                  </a>

                  <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-surface-container-low">
                    <div>
                      <span className="text-[10px] text-outline block">Need immediate phone help?</span>
                      <strong className="text-primary font-bold">+91 94801 23456</strong>
                    </div>
                    <a
                      href="tel:+919480123456"
                      className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-container transition-colors shadow-sm"
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. RELATED PACKAGES SECTION */}
      <section className="w-full bg-surface-container-low py-16 border-t border-surface-container-high">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary block">
                EXPLORE MORE KARNATAKA ESCAPES
              </span>
              <h2 className="text-2xl font-bold font-headline text-on-surface mt-1">
                You Might Also Love These Hills
              </h2>
            </div>
            <Link
              href="/domestic-packages"
              className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
            >
              <span>View All Domestic Packages</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Related 1: Chikmagalur */}
            <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-card border border-surface-container-high hover:-translate-y-1 transition-all group flex flex-col justify-between">
              <div>
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBeIzu2PGBrMSFSoIrXcz11JC_qnWMu41wIZ7tGYeBBi8OEAqctnhb7a8CPMwg03ArE2EBwErzCgXTPtVd1owGkpHPZC7o7vNqp6UQrBgHWT9CT45zdfKXagD5g6hMv-b03h8UgjZ9qBYWqXk5mA0kHjw7dmu_A7NmTi0801_-oetxFJEn9SDmybXzlwb-RPhB4NqMHMZPwigAY8T5sg66o7dOP0kAw-49tPDXfJvsVymELsfhyM18"
                    alt="Chikmagalur Peaks"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-primary font-bold text-xs">
                    3 Days / 2 Nights
                  </span>
                </div>
                <div className="p-5">
                  <span className="text-[10px] uppercase font-bold text-primary block mb-1">Chikmagalur</span>
                  <h3 className="font-bold text-base font-headline text-on-surface mb-2">
                    Chikmagalur Peak Escapes &amp; Estate Stays
                  </h3>
                  <p className="text-xs text-on-surface-variant line-clamp-2">
                    Mullayanagiri, Baba Budangiri, serene coffee plantation bungalow retreat.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0 flex items-center justify-between border-t border-surface-container-low pt-3">
                <div>
                  <span className="text-[10px] text-outline block">Starting from</span>
                  <strong className="text-base font-bold text-primary">₹7,999</strong>
                  <span className="text-[10px] text-outline">/person</span>
                </div>
                <button
                  onClick={() => openModal("Chikmagalur Peak Escapes")}
                  className="px-3.5 py-1.5 rounded-lg bg-surface-container hover:bg-primary hover:text-white text-primary text-xs font-bold transition-colors"
                >
                  Quick Quote
                </button>
              </div>
            </div>

            {/* Related 2: Ooty */}
            <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-card border border-surface-container-high hover:-translate-y-1 transition-all group flex flex-col justify-between">
              <div>
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnXBlOq_fT0tqjuXJuJvLDon9Ld0OiBGDvgJy_LWKAffBKT2H3WuBgDszXwZFjbhglzqRZtESDSHFSDItyyzfsC6pDnhSi9-fIeZTBuTF1JSvJq_PLfFcPla6SJb6LyLi6xk1FNYbB8Mrl_xLjfs1RaNQSawxSGjqmTIfaWCxsJtp0MJzWy3FAifTE03M1nJxSwH67utPXto1BHJs4wJOkXpvnyi0noXGbVRnz2lQdzGeQ6fCJMkzQ"
                    alt="Ooty Nilgiri Train"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-primary font-bold text-xs">
                    4 Days / 3 Nights
                  </span>
                </div>
                <div className="p-5">
                  <span className="text-[10px] uppercase font-bold text-primary block mb-1">Nilgiris, Ooty</span>
                  <h3 className="font-bold text-base font-headline text-on-surface mb-2">
                    Nilgiri Mountain Railway Heritage
                  </h3>
                  <p className="text-xs text-on-surface-variant line-clamp-2">
                    UNESCO Toy Train journey, Sim&apos;s Park, tea factory visits, and Doddabetta Peak.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0 flex items-center justify-between border-t border-surface-container-low pt-3">
                <div>
                  <span className="text-[10px] text-outline block">Starting from</span>
                  <strong className="text-base font-bold text-primary">₹11,499</strong>
                  <span className="text-[10px] text-outline">/person</span>
                </div>
                <button
                  onClick={() => openModal("Ooty Nilgiri Mountain Train")}
                  className="px-3.5 py-1.5 rounded-lg bg-surface-container hover:bg-primary hover:text-white text-primary text-xs font-bold transition-colors"
                >
                  Quick Quote
                </button>
              </div>
            </div>

            {/* Related 3: Wayanad */}
            <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-card border border-surface-container-high hover:-translate-y-1 transition-all group flex flex-col justify-between">
              <div>
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuACh-o9m6N9XkICk9Rr-R3uo5JSPQ8w9nfOdR3-8SuVCK11Omy_pUIc3fnINFH-gTgu0ZF5kTU62pMpnmyTKB48H8_VCPnq3AfxyVrz18my2xVM18v-vuDDX9RfLkTtU4T4q8DYYk9OMBkrikWIbLvUihfqEMJox8GL4WeUmqpehamzyAnBwMwWtyEZthFkuvTGeAZ8RJDGU1UDyG3j-_sFQTq662gjeJ9ax_rKarENZieHswqDluHV"
                    alt="Wayanad Rainforest"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-primary font-bold text-xs">
                    3 Days / 2 Nights
                  </span>
                </div>
                <div className="p-5">
                  <span className="text-[10px] uppercase font-bold text-primary block mb-1">Wayanad, Kerala</span>
                  <h3 className="font-bold text-base font-headline text-on-surface mb-2">
                    Wayanad Rainforest Canopy &amp; Rafting
                  </h3>
                  <p className="text-xs text-on-surface-variant line-clamp-2">
                    Boutique treehouses, Chembra heart-shaped lake trek &amp; bamboo rafting.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0 flex items-center justify-between border-t border-surface-container-low pt-3">
                <div>
                  <span className="text-[10px] text-outline block">Starting from</span>
                  <strong className="text-base font-bold text-primary">₹9,499</strong>
                  <span className="text-[10px] text-outline">/person</span>
                </div>
                <button
                  onClick={() => openModal("Wayanad Rainforest Tour")}
                  className="px-3.5 py-1.5 rounded-lg bg-surface-container hover:bg-primary hover:text-white text-primary text-xs font-bold transition-colors"
                >
                  Quick Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
