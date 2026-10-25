"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Award, 
  ShieldCheck, 
  Users, 
  MapPin, 
  Heart, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Coffee, 
  Compass, 
  Clock 
} from "lucide-react";
import { useModal } from "@/context/ModalContext";

export default function AboutUsPage() {
  const { openModal } = useModal();

  const milestones = [
    {
      year: "2014",
      title: "Inception in Bengaluru",
      desc: "Founded on 100 Feet Road, Indiranagar, with 5 Innovas and a mission to showcase Karnataka's Western Ghats to city families.",
    },
    {
      year: "2017",
      title: "Plantation Concierge Network",
      desc: "Formed direct exclusive partnerships with 50+ private coffee & tea planters across Coorg, Chikmagalur, and Wayanad.",
    },
    {
      year: "2020",
      title: "Pan-South India Expansion",
      desc: "Launched customized Kerala backwaters, Tamil Nadu temple trails, and luxury coastal circuits in Goa and Gokarna.",
    },
    {
      year: "2023",
      title: "International Division",
      desc: "Introduced curated holidays to Dubai, Bali, Singapore, and Maldives with door-to-door concierge assistance.",
    },
    {
      year: "Today",
      title: "18,500+ Happy Travelers",
      desc: "Over 65 fleet vehicles, 340+ audited hotel partners, and Karnataka's most trusted holiday architect brand.",
    },
  ];

  return (
    <div className="w-full flex flex-col bg-background pt-24 sm:pt-28">
      {/* 1. HERO SECTION */}
      <section className="relative w-full py-20 lg:py-28 bg-gradient-to-r from-[#082B55] to-[#00468c] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-accent-gold text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
              <Sparkles className="w-3.5 h-3.5" />
              OUR STORY &amp; HERITAGE
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-headline tracking-tight leading-tight mb-6">
              Every Great Journey Begins With a Story.
            </h1>
            <p className="text-base sm:text-xl text-surface-container-low font-light leading-relaxed mb-8">
              Discover the philosophy behind Siri Vacations and our passion for designing authentic, unhurried holidays across South India, the Himalayas, and international shores.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                12+ Years in Bengaluru
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-accent-gold" />
                KSTDC Recognized Partner
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-sky-300" />
                4.94 / 5 Google Review Score
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS RIBBON */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 w-full">
        <div className="bg-surface-container-lowest rounded-2xl shadow-xl p-6 lg:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 border border-surface-container-high">
          <div>
            <span className="text-[11px] font-bold tracking-wider text-outline uppercase block mb-1">
              Travelers Hosted
            </span>
            <span className="text-3xl sm:text-4xl font-bold font-headline text-primary">18,500+</span>
            <span className="text-xs text-on-surface-variant block mt-1">Families, couples &amp; corporate groups</span>
          </div>
          <div>
            <span className="text-[11px] font-bold tracking-wider text-outline uppercase block mb-1">
              Private Chauffeurs
            </span>
            <span className="text-3xl sm:text-4xl font-bold font-headline text-primary">65+</span>
            <span className="text-xs text-on-surface-variant block mt-1">Uniformed, verified &amp; hill-trained</span>
          </div>
          <div>
            <span className="text-[11px] font-bold tracking-wider text-outline uppercase block mb-1">
              Audited Stays
            </span>
            <span className="text-3xl sm:text-4xl font-bold font-headline text-primary">340+</span>
            <span className="text-xs text-on-surface-variant block mt-1">Plantation estates, resorts &amp; villas</span>
          </div>
          <div>
            <span className="text-[11px] font-bold tracking-wider text-outline uppercase block mb-1">
              Guest Rating
            </span>
            <span className="text-3xl sm:text-4xl font-bold font-headline text-accent-orange">4.94 / 5</span>
            <span className="text-xs text-on-surface-variant block mt-1">Verified traveler feedback</span>
          </div>
        </div>
      </section>

      {/* 3. ROOTS & MISSION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Our Roots</span>
              <span className="h-px w-12 bg-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-headline text-on-surface leading-tight">
              Rooted in Bengaluru, Inspiring Journeys Across the Globe.
            </h2>
            <p className="text-base text-on-surface-variant leading-relaxed">
              Founded in Indiranagar, Bengaluru, Siri Vacations began with a singular conviction: travel should never feel like a packaged checklist. It should breathe with the relaxed cadence of an unhurried morning and the reassurance of a personal travel concierge.
            </p>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              We combine authentic South Indian warmth with strict operational discipline. From the coffee mist of Coorg to the emerald backwaters of Kerala and glamorous Dubai skylines, every itinerary is designed by people who have personally walked the trails, vetted the vehicles, and tested the homestays.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container-high">
                <ShieldCheck className="w-6 h-6 text-primary mb-2" />
                <h4 className="font-bold text-sm text-on-surface font-headline mb-1">Verified Chauffeurs</h4>
                <p className="text-xs text-on-surface-variant">Uniformed hill experts fluent in English, Kannada, Hindi &amp; Tamil.</p>
              </div>
              <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container-high">
                <Coffee className="w-6 h-6 text-accent-orange mb-2" />
                <h4 className="font-bold text-sm text-on-surface font-headline mb-1">Private Plantation Access</h4>
                <p className="text-xs text-on-surface-variant">Exclusive estate bungalows closed to generic mass tourists.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-surface-container-high">
              <Image
                src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80"
                alt="Western Ghats tea and coffee plantation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082B55]/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-wider font-semibold text-accent-gold block mb-1">
                  BENGALURU HEADQUARTERS
                </span>
                <p className="text-sm font-light">
                  Direct personal travel support from our local concierge desk 7 days a week.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR JOURNEY MILESTONES */}
      <section className="py-20 bg-surface-container-low border-y border-surface-container-high">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-primary uppercase bg-primary-fixed/60 px-3 py-1 rounded-full">
              GROWTH &amp; REPUTATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-headline text-on-surface mt-3 mb-3">
              Over a Decade of Thoughtful Travel Curation
            </h2>
            <p className="text-sm text-on-surface-variant">
              How a boutique Bengaluru fleet company evolved into Karnataka&apos;s leading experiential travel agency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {milestones.map((item, idx) => (
              <div
                key={idx}
                className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container-high shadow-card relative"
              >
                <span className="text-2xl font-bold font-headline text-accent-orange block mb-2">
                  {item.year}
                </span>
                <h4 className="font-bold text-base font-headline text-on-surface mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold font-headline text-on-surface mb-4">
          Meet Your Personal Vacation Architect
        </h2>
        <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl mx-auto mb-8 leading-relaxed">
          Whether you are dreaming of a weekend coffee plantation retreat or a 2-week European circuit, our team in Indiranagar is ready to help.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => openModal("About Us Consultation")}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#FF982F] to-[#e67e15] text-white font-bold text-sm shadow-md hover:scale-105 transition-all"
          >
            Schedule a Travel Consultation
          </button>
          <Link
            href="/contact-us"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-primary text-primary hover:bg-primary-fixed/30 font-bold text-sm transition-all"
          >
            Visit Our Bengaluru Office
          </Link>
        </div>
      </section>
    </div>
  );
}
