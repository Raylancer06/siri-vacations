"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Award, 
  Headphones, 
  Send, 
  Heart,
  Facebook,
  Instagram,
  Linkedin,
  CheckCircle2
} from "lucide-react";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#082B55] text-white pt-20 pb-10 border-t border-white/10">
      {/* Trust & Guarantee Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white/5 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-primary-container/40 flex items-center justify-center text-secondary-container shrink-0">
              <Award className="w-7 h-7 text-accent-gold" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base font-headline">12+ Years of Excellence</h4>
              <p className="text-xs text-surface-container-high leading-relaxed mt-1">
                Karnataka &amp; South India bespoke holiday experts with over 15,000 satisfied families.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-primary-container/40 flex items-center justify-center text-secondary-container shrink-0">
              <ShieldCheck className="w-7 h-7 text-emerald-400" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base font-headline">Handpicked &amp; Audited Stays</h4>
              <p className="text-xs text-surface-container-high leading-relaxed mt-1">
                Every plantation resort, heritage bungalow, and hotel is personally vetted for hygiene and safety.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-primary-container/40 flex items-center justify-center text-secondary-container shrink-0">
              <Headphones className="w-7 h-7 text-accent-orange" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base font-headline">24/7 Concierge Support</h4>
              <p className="text-xs text-surface-container-high leading-relaxed mt-1">
                Dedicated trip manager assigned to you from departure to safe arrival back home.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Col 1: Brand & Bio with wide logo */}
          <div className="lg:col-span-2 space-y-5">
            <div className="relative h-14 w-48 sm:h-16 sm:w-56 bg-white/95 rounded-2xl p-2.5 shadow-md">
              <Image
                src="/logo.png"
                alt="Siri Vacations Logo"
                fill
                className="object-contain p-1"
                sizes="220px"
              />
            </div>
            <p className="text-xs sm:text-sm text-surface-container-high leading-relaxed pr-6 max-w-md">
              Siri Vacations is a premier experiential travel agency based in Bengaluru. We curate unforgettable journeys across the misty hills of the Western Ghats, royal heritage circuits, sun-kissed backwaters, and international getaways.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Popular Domestic Circuits */}
          <div className="space-y-4">
            <h5 className="text-xs font-bold tracking-wider uppercase text-secondary-container font-headline">
              Domestic Holidays
            </h5>
            <ul className="space-y-2.5 text-xs text-surface-container-high">
              <li>
                <Link href="/packages/coorg" className="hover:text-accent-gold transition-colors flex items-center gap-1.5">
                  <span className="text-accent-gold">▸</span> Coorg Coffee Trails (3D/2N)
                </Link>
              </li>
              <li>
                <Link href="/domestic-packages?region=karnataka" className="hover:text-white transition-colors">
                  Chikmagalur Peak Escapes
                </Link>
              </li>
              <li>
                <Link href="/domestic-packages?region=kerala" className="hover:text-white transition-colors">
                  Wayanad Rainforest &amp; Rafting
                </Link>
              </li>
              <li>
                <Link href="/domestic-packages?region=tamilnadu" className="hover:text-white transition-colors">
                  Ooty Nilgiri Mountain Train
                </Link>
              </li>
              <li>
                <Link href="/domestic-packages?region=karnataka" className="hover:text-white transition-colors">
                  Sakleshpur Offbeat Trek
                </Link>
              </li>
              <li>
                <Link href="/domestic-packages" className="hover:text-accent-orange font-bold transition-colors block pt-1">
                  View All Domestic Tours →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: International & Services */}
          <div className="space-y-4">
            <h5 className="text-xs font-bold tracking-wider uppercase text-secondary-container font-headline">
              Tours &amp; Services
            </h5>
            <ul className="space-y-2.5 text-xs text-surface-container-high">
              <li>
                <Link href="/international-packages?dest=dubai" className="hover:text-white transition-colors">
                  Dubai &amp; Abu Dhabi Desert
                </Link>
              </li>
              <li>
                <Link href="/international-packages?dest=bali" className="hover:text-white transition-colors">
                  Bali Private Pool Villa Holidays
                </Link>
              </li>
              <li>
                <Link href="/international-packages?dest=maldives" className="hover:text-white transition-colors">
                  Maldives Luxury Overwater
                </Link>
              </li>
              <li>
                <Link href="/car-rentals" className="hover:text-white transition-colors">
                  Chauffeur-Driven Car Rentals
                </Link>
              </li>
              <li>
                <Link href="/group-departures" className="hover:text-white transition-colors">
                  Corporate &amp; Group Departures
                </Link>
              </li>
              <li>
                <Link href="/plan-your-trip" className="hover:text-accent-orange font-bold transition-colors block pt-1">
                  Custom Itinerary Architect →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Reach Us & Office */}
          <div className="space-y-4">
            <h5 className="text-xs font-bold tracking-wider uppercase text-secondary-container font-headline">
              Bengaluru Office
            </h5>
            <div className="space-y-3 text-xs text-surface-container-high">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent-orange shrink-0 mt-0.5" />
                <p>#42, 2nd Floor, 100 Feet Road, Indiranagar, Bengaluru, KA 560038</p>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <p>+91 94801 23456 / 080 4123 7890</p>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-secondary-container shrink-0" />
                <p>bookings@sirivacations.com</p>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-accent-gold shrink-0" />
                <p>Mon - Sat: 9:00 AM – 8:00 PM</p>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <span className="text-xs font-medium text-white block mb-1.5">
                Seasonal Offers &amp; Secret Deals
              </span>
              {subscribed ? (
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold bg-emerald-950/50 p-2.5 rounded-xl border border-emerald-800">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Subscribed! Check your inbox.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white/10 text-white placeholder-white/50 text-xs border border-white/20 focus:outline-none focus:ring-1 focus:ring-accent-gold"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-2 bg-tertiary-container hover:bg-tertiary rounded-xl text-on-tertiary font-bold text-xs shrink-0 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-surface-container-high gap-4">
          <p>© {new Date().getFullYear()} Siri Vacations India Pvt Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/about-us" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/about-us" className="hover:text-white transition-colors">Terms of Booking</Link>
            <span>•</span>
            <Link href="/contact-us" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
          <p className="flex items-center gap-1">
            Handcrafted with <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400 inline" /> in Bengaluru
          </p>
        </div>
      </div>
    </footer>
  );
}
