"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HeroVideo from "@/components/HeroVideo";
import SearchConcierge from "@/components/SearchConcierge";
import PackageCard from "@/components/PackageCard";
import { ALL_PACKAGES, TESTIMONIALS, FLEET_CARS } from "@/data/packages";
import { useModal } from "@/context/ModalContext";
import { 
  Sparkles, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Car, 
  Compass, 
  Award, 
  Users, 
  Star, 
  ChevronRight, 
  PhoneCall, 
  CheckCircle2, 
  Coffee,
  HelpCircle,
  Palmtree,
  Camera,
  Heart
} from "lucide-react";

export default function HomePage() {
  const { openModal } = useModal();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const domesticFeatured = ALL_PACKAGES.filter((p) => p.type === "domestic");
  const internationalFeatured = ALL_PACKAGES.filter((p) => p.type === "international");

  const holidayThemes = [
    {
      title: "Hill Station Escapes",
      desc: "Cool cloud-covered peaks, sprawling coffee estates, and gentle pine breezes in Coorg, Ooty, and Chikmagalur.",
      tag: "Hill Stations",
      link: "/packages/coorg",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjI0v_UgK7BaODg5MgCwrHGu1LtBCXy2hBScdNhAnCAqhx3Fi-SP52K_npUA0wFcgkk5ccNomqCEWR9cyXBIB1Bm6UkKUu0tf7cpVFt1Dl18Dnl3xCrPzZkICXy0u_9aomcFbv3GYtnxKXPZp6nTcnLADz-6v4KHHNcvTbMb4JZKjONOO0NirE4H0TwVjJKBU6tUzjfPjvVQH-O1vZIqcAWkKka3JjiqFd3Wvx9EXsWYpLWFY0PRZM",
    },
    {
      title: "Romantic Getaways",
      desc: "Private pool stays, starlit lakeside dinners, and secluded valley view chalets made exclusively for two.",
      tag: "Honeymoon & Couple",
      link: "/packages/coorg",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCd4hvfPsKVMXe_bEC_z9gsTKqz3WgPhtOYj4SQuTp4pKZj8Mve7xPci80Cgr_6CxaXk9kHmVCLAE6jppInypnZ5AUzSw1FmKxj4F2_WSL1Yi-SnAwvNiwLDyMuOf6UZn0U3gcZujR9wLNoRxY6p4WAWsd2r7HUAv_Kd0yfW7W0Pbbbe_uc5QsU9MtsNDRDoMmIvE2ocOjYvZ4Z-U8UR1mzyY954rJMi3MrVTEgAH8F_WOa-riz5Ubs",
    },
    {
      title: "Family Vacations",
      desc: "Unhurried itineraries, child-friendly resorts, gentle nature trails, and elephant interactions in Dubare.",
      tag: "Family Special",
      link: "/domestic-packages",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuACh-o9m6N9XkICk9Rr-R3uo5JSPQ8w9nfOdR3-8SuVCK11Omy_pUIc3fnINFH-gTgu0ZF5kTU62pMpnmyTKB48H8_VCPnq3AfxyVrz18my2xVM18v-vuDDX9RfLkTtU4T4q8DYYk9OMBkrikWIbLvUihfqEMJox8GL4WeUmqpehamzyAnBwMwWtyEZthFkuvTGeAZ8RJDGU1UDyG3j-_sFQTq662gjeJ9ax_rKarENZieHswqDluHV",
    },
    {
      title: "Heritage & Temples",
      desc: "Walk through UNESCO stone chariots in Hampi, Badami caves, and royal palaces of Mysore.",
      tag: "UNESCO Heritage",
      link: "/domestic-packages?region=karnataka",
      image: "https://images.unsplash.com/photo-1600100397608-f010f4438fa7?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Beach & Backwaters",
      desc: "Soulful cliffs of Gokarna, palm-fringed Kerala backwater lagoons, and private seaside boutique resorts.",
      tag: "Coastal Escapes",
      link: "/domestic-packages?region=kerala",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Wildlife & Rainforests",
      desc: "Kabini boat safaris, Wayanad treehouses, and deep Western Ghats evergreen canopy explorations.",
      tag: "Wildlife Safari",
      link: "/destinations",
      image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const faqs = [
    {
      q: "Can I customize the Coorg or Kerala itinerary to my family's preference?",
      a: "Yes! All our itineraries are 100% flexible. Whether you wish to upgrade to a private luxury plantation cottage with pool, add extra days in Wayanad, or include specialized coffee tasting tours, our Bengaluru travel architects customize everything to your schedule.",
    },
    {
      q: "Are hotel stays and private car transfers included in the package cost?",
      a: "Yes! Every Siri Vacations holiday package includes handpicked audited accommodation, breakfast, dedicated private air-conditioned vehicle with fuel, toll, parking, driver allowance, and sightseeing as per the itinerary.",
    },
    {
      q: "How does the booking and payment process work?",
      a: "You can block your dates with a nominal 20% advance payment. The remaining balance can be settled 7 days prior to travel or during check-in as outlined in your personalized confirmation voucher.",
    },
    {
      q: "Do you offer doorstep pickup from Bengaluru Airport (BLR) or city residence?",
      a: "Yes! Our courteous chauffeurs provide dedicated doorstep pickup and drop anywhere in Bengaluru—including Kempegowda International Airport (BLR), railway stations, or your home address.",
    },
  ];

  return (
    <div className="w-full flex flex-col bg-background">
      {/* 1. CINEMATIC HERO SECTION WITH DRONE VIDEO */}
      <HeroVideo />

      {/* 2. SEARCH & CONCIERGE DISCOVERY BAR */}
      <SearchConcierge />

      {/* 3. VALUE PROPOSITIONS & TRUST SIGNALS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest text-primary uppercase bg-primary-fixed/40 px-3 py-1 rounded-full">
            THE SIRI VACATIONS DISTINCTION
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-on-surface mt-3 mb-4">
            Curated Hospitality With Unmatched Local Expertise
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
            We don&apos;t just book hotels and cabs—we design intimate, stress-free travel stories tailored to your rhythm and tastes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-surface-container-lowest border border-surface-container-high shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-primary-fixed/50 flex items-center justify-center text-primary mb-4">
              <Compass className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg font-headline text-on-surface mb-2">
              100% Bespoke Itineraries
            </h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Tailored pace, private bonfires, customized kid-friendly stops, and hidden vantage points rarely found in generic tours.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface-container-lowest border border-surface-container-high shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-secondary-fixed/50 flex items-center justify-center text-secondary mb-4">
              <ShieldCheck className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg font-headline text-on-surface mb-2">
              Personally Audited Stays
            </h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Every plantation bungalow, riverfront cottage, and 5-star resort is vetted for hygiene, scenic vistas, and warm hospitality.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface-container-lowest border border-surface-container-high shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-accent-orange mb-4">
              <Car className="w-6 h-6 text-accent-orange" />
            </div>
            <h3 className="font-bold text-lg font-headline text-on-surface mb-2">
              Private Fleet &amp; Chauffeurs
            </h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Immaculate AC Innovas, Fortuners, and sedans driven by seasoned, English &amp; Kannada speaking hill-station drivers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface-container-lowest border border-surface-container-high shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 mb-4">
              <Award className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="font-bold text-lg font-headline text-on-surface mb-2">
              Transparent Pricing
            </h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              No hidden driver beta, toll surprises, or surprise entry charges. What you see is crystal clear and all-inclusive.
            </p>
          </div>
        </div>
      </section>

      {/* 4. EXPLORE BY TRAVEL STYLE (6-CARD EDITORIAL GRID) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-surface-container-high">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest text-primary uppercase bg-primary-fixed/60 px-3 py-1 rounded-full">
              CURATED PERSPECTIVES
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-headline text-on-surface mt-2">
              Find Your Kind of Holiday
            </h2>
            <p className="text-sm text-on-surface-variant mt-1 max-w-xl">
              Every traveler has a different idea of the perfect escape. Discover tailored experiences crafted around your personal rhythm.
            </p>
          </div>
          <Link
            href="/destinations"
            className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
          >
            <span>Explore All 6 Themes</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {holidayThemes.map((theme, idx) => (
            <Link
              key={idx}
              href={theme.link}
              className="group relative overflow-hidden rounded-2xl bg-surface-container-lowest shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 border border-surface-container-high flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-surface-container">
                  <Image
                    src={theme.image}
                    alt={theme.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#082B55]/85 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-primary font-bold text-xs shadow-sm">
                    {theme.tag}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="font-bold text-lg font-headline text-on-surface group-hover:text-primary transition-colors">
                      {theme.title}
                    </h3>
                    <ArrowRight className="w-4 h-4 text-outline group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-xs text-on-surface-variant line-clamp-2 leading-relaxed">
                    {theme.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. FEATURED DOMESTIC CIRCUITS */}
      <section className="py-16 bg-surface-container-low border-y border-surface-container-high" id="domestic-packages">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold tracking-widest text-primary uppercase bg-primary-fixed/60 px-3 py-1 rounded-full">
                SIGNATURE SOUTH INDIA
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-headline text-on-surface mt-2">
                South India, Beautifully Discovered
              </h2>
              <p className="text-sm text-on-surface-variant mt-1">
                Misty hills, aromatic coffee trails, royal legacies, and sacred architectural masterpieces curated from Bengaluru.
              </p>
            </div>
            <Link
              href="/domestic-packages"
              className="inline-flex items-center gap-1.5 font-bold text-sm text-primary hover:text-primary-container transition-colors shrink-0"
            >
              <span>View All Domestic Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Package Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {domesticFeatured.slice(0, 3).map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. SPOTLIGHT: WESTERN GHATS COFFEE & RAINFOREST ESCAPES */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#082B55] to-[#00468c] text-white p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-gold/20 text-accent-gold text-xs font-bold uppercase tracking-wider mb-4 border border-accent-gold/30">
              <Sparkles className="w-3.5 h-3.5" />
              Signature Experience
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold font-headline tracking-tight text-white mb-4 leading-tight">
              Wake Up to Fresh Brew in Misty Coorg &amp; Chikmagalur
            </h2>
            <p className="text-sm sm:text-base text-surface-container-high leading-relaxed mb-8 font-light">
              Immerse yourself in authentic British-era plantation heritage. Handpick Robusta coffee cherries, enjoy private waterfall dips, savor Kodava delicacies, and unwind in secluded hillside chalets.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8 text-xs">
              <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                <span className="text-accent-gold font-bold block text-lg font-headline">100%</span>
                <span>Private Estate Stays</span>
              </div>
              <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                <span className="text-accent-gold font-bold block text-lg font-headline">4.9 / 5</span>
                <span>Average Guest Rating</span>
              </div>
              <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 col-span-2 sm:col-span-1">
                <span className="text-accent-gold font-bold block text-lg font-headline">4 - 5 Hrs</span>
                <span>Scenic Drive from BLR</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/packages/coorg"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-tertiary-container hover:bg-tertiary text-on-tertiary font-bold text-sm shadow-lg hover:scale-105 transition-all"
              >
                <span>View Coorg 3D/2N Tour Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => openModal("Western Ghats Plantation Special")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/20 text-white font-semibold text-sm transition-all"
              >
                <span>Inquire Custom Plantation Stay</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TRENDING INTERNATIONAL PACKAGES */}
      <section className="py-16 bg-surface-container-low border-y border-surface-container-high">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold tracking-widest text-primary uppercase bg-primary-fixed/60 px-3 py-1 rounded-full">
                GLOBAL DESTINATIONS
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-headline text-on-surface mt-2">
                Trending International Holidays
              </h2>
              <p className="text-sm text-on-surface-variant mt-1">
                Curated international itineraries with complete visa guidance, flight ticketing &amp; private city transfers.
              </p>
            </div>
            <Link
              href="/international-packages"
              className="inline-flex items-center gap-1.5 font-bold text-sm text-primary hover:text-primary-container transition-colors shrink-0"
            >
              <span>Explore All International Tours</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {internationalFeatured.slice(0, 3).map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. PREMIUM CHAUFFEUR-DRIVEN CAR RENTALS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold tracking-widest text-primary uppercase bg-primary-fixed/40 px-3 py-1 rounded-full">
              SIRI CHAUFFEUR SERVICES
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-headline text-on-surface mt-2">
              Comfortable Outstation &amp; Airport Car Rentals
            </h2>
            <p className="text-sm text-on-surface-variant mt-1">
              Travel across Karnataka &amp; South India in sanitized, GPS-enabled premium cars with professional hill-certified chauffeurs.
            </p>
          </div>
          <Link
            href="/car-rentals"
            className="inline-flex items-center gap-1.5 font-bold text-sm text-primary hover:text-primary-container transition-colors shrink-0"
          >
            <span>View Full Fleet &amp; Tariffs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-[#082B55]/80 backdrop-blur-md text-white text-[10px] font-bold">
                    {car.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-base font-headline text-on-surface mb-1">
                    {car.name}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-outline mb-3">
                    <span>{car.seats}</span>
                    <span>•</span>
                    <span>{car.luggage}</span>
                    <span>•</span>
                    <span>{car.ac ? "Dual AC" : "Non-AC"}</span>
                  </div>
                  <div className="space-y-1 mb-4">
                    {car.features.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-1 text-[11px] text-on-surface-variant">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-4 pt-0">
                <div className="flex items-baseline justify-between border-t border-surface-container-low pt-3 mb-3">
                  <div>
                    <span className="text-[10px] text-outline uppercase block">Outstation Tariff</span>
                    <span className="text-base font-bold text-primary">{car.ratePerKm}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-outline uppercase block">Base Day Rate</span>
                    <span className="text-sm font-semibold text-on-surface">{car.dailyRate}</span>
                  </div>
                </div>
                <button
                  onClick={() => openModal(`Car Rental: ${car.name}`)}
                  className="w-full py-2 rounded-lg bg-surface-container hover:bg-primary hover:text-white text-primary font-semibold text-xs transition-colors"
                >
                  Book Vehicle
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. TRAVELER STORIES & TESTIMONIALS */}
      <section className="py-20 bg-surface-container-low border-t border-surface-container-high">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-primary uppercase bg-primary-fixed/60 px-3 py-1 rounded-full">
              REAL EXPERIENCES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-headline text-on-surface mt-3 mb-3">
              Loved by Bengaluru Families &amp; Couples
            </h2>
            <p className="text-sm text-on-surface-variant">
              Read how Siri Vacations delivered memorable, stress-free journeys for over 15,000 delighted travelers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container-high shadow-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed italic mb-6">
                    &ldquo;{t.comment}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-surface-container-low">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden bg-primary-fixed shrink-0">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-on-surface font-headline">{t.name}</h4>
                    <p className="text-[11px] text-outline">{t.location} • <span className="text-primary font-medium">{t.trip}</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-primary uppercase bg-primary-fixed/40 px-3 py-1 rounded-full">
            CLEAR ANSWERS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-on-surface mt-3 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-on-surface-variant">
            Everything you need to know about booking your holiday with Siri Vacations.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest rounded-xl border border-surface-container-high overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full p-5 text-left font-bold text-sm sm:text-base text-on-surface flex items-center justify-between gap-4 hover:bg-surface-container-low transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronRight
                  className={`w-4 h-4 text-primary shrink-0 transition-transform duration-200 ${
                    activeFaq === idx ? "rotate-90" : ""
                  }`}
                />
              </button>
              {activeFaq === idx && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-on-surface-variant leading-relaxed border-t border-surface-container-low animate-in fade-in duration-200">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 11. FLAGSHIP CTA BANNER */}
      <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-gradient-to-r from-[#00468c] via-[#075db5] to-[#082B55] rounded-3xl p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white font-semibold text-xs tracking-wider uppercase mb-3">
              YOUR PERSONAL TRAVEL CONCIERGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-headline text-white mb-3">
              Ready to Craft Your Dream Getaway?
            </h2>
            <p className="text-sm text-surface-container-low leading-relaxed font-light">
              Speak directly with our Karnataka &amp; International holiday specialists. We customize every detail—from private pool villas to scenic hill drives.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <Link
              href="/plan-your-trip"
              className="py-3.5 px-6 rounded-xl bg-tertiary-container hover:bg-tertiary text-on-tertiary font-bold text-sm shadow-lg text-center transition-all hover:scale-105"
            >
              Start Trip Planner Wizard
            </Link>
            <a
              href="https://wa.me/919480123456?text=Hello%20Siri%20Vacations,%20please%20help%20me%20plan%20a%20holiday!"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-6 rounded-xl bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-sm text-center transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
