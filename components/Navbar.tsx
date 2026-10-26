"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useModal } from "@/context/ModalContext";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  MessageCircle, 
  Sparkles, 
  MapPin, 
  Compass, 
  Car, 
  Users, 
  Info,
  Calendar,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Youtube
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const { openModal } = useModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [domesticOpen, setDomesticOpen] = useState(false);
  const [internationalOpen, setInternationalOpen] = useState(false);
  const [destinationsOpen, setDestinationsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  interface DropdownItem {
    label: string;
    href: string;
    badge?: string;
  }

  interface NavLinkItem {
    name: string;
    href: string;
    shortName?: string;
    extraName?: string;
    dropdown?: DropdownItem[];
  }

  const navLinks: NavLinkItem[] = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    {
      name: "Domestic Packages",
      href: "/domestic-packages",
      dropdown: [
        { label: "Coorg Coffee Trails (3D/2N) ⭐", href: "/packages/coorg", badge: "Featured" },
        { label: "Chikmagalur Peaks & Stays", href: "/domestic-packages?region=karnataka" },
        { label: "Ooty & Nilgiri Mountain Train", href: "/domestic-packages?region=tamilnadu" },
        { label: "Wayanad Rainforest & Rafting", href: "/domestic-packages?region=kerala" },
        { label: "Sakleshpur Weekend Trek", href: "/domestic-packages?region=karnataka" },
        { label: "All Domestic Packages →", href: "/domestic-packages" },
      ],
    },
    {
      name: "International Packages",
      href: "/international-packages",
      dropdown: [
        { label: "Dubai & Emirates Safari", href: "/international-packages?dest=dubai" },
        { label: "Bali Private Pool Villas", href: "/international-packages?dest=bali" },
        { label: "Maldives Luxury Overwater", href: "/international-packages?dest=maldives" },
        { label: "Singapore & Malaysia Highlights", href: "/international-packages?dest=singapore" },
        { label: "All International Packages →", href: "/international-packages" },
      ],
    },
    {
      name: "Destinations",
      href: "/destinations",
      dropdown: [
        { label: "Coorg (Kodagu)", href: "/packages/coorg" },
        { label: "Chikmagalur", href: "/destinations" },
        { label: "Ooty & Nilgiris", href: "/destinations" },
        { label: "Wayanad", href: "/destinations" },
        { label: "Explore All Destinations →", href: "/destinations" },
      ],
    },
    { name: "Car Rentals", href: "/car-rentals" },
    { name: "Group Departures", href: "/group-departures" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "shadow-[0_6px_24px_-2px_rgba(8,43,85,0.12)]"
          : ""
      }`}
    >
      {/* 1. TOP UTILITY HEADER BAR */}
      <div className="w-full bg-[#082B55] text-white text-[11px] py-1.5 sm:py-2 px-4 sm:px-6 lg:px-8 border-b border-white/10 transition-colors">
        <div className="max-w-[1600px] w-full mx-auto flex items-center justify-between gap-3">
          {/* Top Left: Social Media Icons & Direct Helpline */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <span className="text-white/70 hidden sm:inline font-medium">Follow Us:</span>
            <div className="flex items-center gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#1877F2] text-white/90 hover:text-white flex items-center justify-center transition-all hover:scale-110"
                aria-label="Follow Siri Vacations on Facebook"
                title="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-full bg-white/10 hover:bg-gradient-to-tr hover:from-amber-500 hover:to-pink-500 text-white/90 hover:text-white flex items-center justify-center transition-all hover:scale-110"
                aria-label="Follow Siri Vacations on Instagram"
                title="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#0A66C2] text-white/90 hover:text-white flex items-center justify-center transition-all hover:scale-110"
                aria-label="Follow Siri Vacations on LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#FF0000] text-white/90 hover:text-white flex items-center justify-center transition-all hover:scale-110"
                aria-label="Follow Siri Vacations on YouTube"
                title="YouTube"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>

            <span className="text-white/20 hidden md:inline">|</span>

            <div className="hidden md:flex items-center gap-2 text-white/80">
              <MapPin className="w-3 h-3 text-accent-gold shrink-0" />
              <span className="truncate">100 Feet Rd, Indiranagar, Bengaluru</span>
            </div>
          </div>

          {/* Top Right: WhatsApp and Callback Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="tel:+919480123456"
              className="hidden lg:flex items-center gap-1.5 text-white/90 hover:text-accent-gold transition-colors font-medium mr-1"
              title="Direct Concierge Helpline"
            >
              <Phone className="w-3 h-3 text-accent-gold" />
              <span>+91 94801 23456</span>
            </a>

            {/* WhatsApp Button on Top Header */}
            <a
              href="https://wa.me/919480123456?text=Hello%20Siri%20Vacations,%20I%20am%20interested%20in%20planning%20a%20holiday!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 sm:py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-[11px] shadow-sm hover:shadow transition-all shrink-0 active:scale-95"
              title="Chat with Tour Expert on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white text-white shrink-0" />
              <span className="whitespace-nowrap">WhatsApp</span>
            </a>

            {/* Callback Button on Top Header */}
            <button
              onClick={() => openModal("Top Header Callback")}
              className="inline-flex items-center gap-1.5 px-3 py-1 sm:py-1.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 text-white font-bold text-[11px] shadow-sm transition-all shrink-0 active:scale-95"
              title="Request an instant callback"
            >
              <Phone className="w-3 h-3 text-accent-gold shrink-0" />
              <span className="whitespace-nowrap">Request Callback</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER NAVIGATION BAR */}
      <div className={`w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-xl border-b border-surface-container-high shadow-[0_8px_30px_rgba(8,43,85,0.08)] py-1.5 sm:py-2"
          : "bg-gradient-to-b from-[#082B55]/80 via-[#082B55]/45 to-transparent backdrop-blur-[2px] border-b border-white/10 py-2.5 sm:py-3.5"
      }`}>
        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 lg:gap-8 h-16 sm:h-[72px] lg:h-20">
            {/* Brand Logo - Crossfades between white logo (transparent mode) and navy logo (sticky mode) */}
            <Link href="/" className="flex items-center shrink-0 group py-1" title="Siri Vacations Home">
              <div className="relative h-[52px] sm:h-[58px] lg:h-[64px] aspect-[1410/730] transition-transform group-hover:scale-105 duration-200">
                {/* Standard Navy Logo (shown when sticky white navbar) */}
                <Image
                  src="/logo.png"
                  alt="Siri Vacations Logo"
                  fill
                  priority
                  className={`object-contain object-left transition-opacity duration-300 ${
                    isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                  sizes="(max-width: 768px) 130px, 160px"
                />
                {/* Brilliant White Logo (shown when transparent header over dark hero/video) */}
                <Image
                  src="/logo_white.png"
                  alt="Siri Vacations Logo"
                  fill
                  priority
                  className={`object-contain object-left transition-opacity duration-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] ${
                    isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
                  }`}
                  sizes="(max-width: 768px) 130px, 160px"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links - Single line guarantee with adaptive contrast */}
            <nav className="hidden xl:flex items-center gap-1.5 2xl:gap-3 shrink-0">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));

                if (link.dropdown) {
                  return (
                    <div key={link.name} className="relative group shrink-0">
                      <Link
                        href={link.href}
                        className={`flex items-center gap-1.5 px-3 py-2 text-xs 2xl:text-[13.5px] font-semibold rounded-xl whitespace-nowrap shrink-0 transition-all duration-200 ${
                          isScrolled
                            ? isActive
                              ? "text-primary font-bold bg-primary-fixed/40"
                              : "text-[#082B55] hover:text-primary hover:bg-surface-container-low"
                            : isActive
                              ? "text-white font-bold bg-white/20 backdrop-blur-md border border-white/30 shadow-sm"
                              : "text-white hover:text-accent-gold hover:bg-white/10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                        }`}
                      >
                        <span className="whitespace-nowrap">{link.name}</span>
                        <ChevronDown className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 group-hover:rotate-180 ${
                          isScrolled ? "text-outline" : "text-white/80 group-hover:text-accent-gold"
                        }`} />
                      </Link>

                      {/* Dropdown Menu (always solid background for perfect readability) */}
                      <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-surface-container-lowest shadow-[0_20px_40px_-4px_rgba(8,43,85,0.18)] rounded-2xl py-2.5 min-w-[260px] border border-surface-container-high z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="px-4 py-2.5 text-xs sm:text-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-low flex items-center justify-between transition-colors group/item whitespace-nowrap"
                          >
                            <span className="group-hover/item:translate-x-1 transition-transform whitespace-nowrap">
                              {item.label}
                            </span>
                            {item.badge && (
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-accent-orange/15 text-accent-orange ml-2">
                                {item.badge}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 text-xs 2xl:text-[13.5px] font-semibold rounded-xl whitespace-nowrap shrink-0 transition-all duration-200 ${
                      isScrolled
                        ? isActive
                          ? "text-primary font-bold bg-primary-fixed/40"
                          : "text-[#082B55] hover:text-primary hover:bg-surface-container-low"
                        : isActive
                          ? "text-white font-bold bg-white/20 backdrop-blur-md border border-white/30 shadow-sm"
                          : "text-white hover:text-accent-gold hover:bg-white/10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                    }`}
                  >
                    <span className="whitespace-nowrap">{link.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Right Action CTA (Desktop xl+) - Flagship Plan Your Trip */}
            <div className="hidden xl:flex items-center gap-3 shrink-0">
              <Link
                href="/plan-your-trip"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-tertiary-container hover:bg-tertiary text-on-tertiary font-bold text-xs sm:text-sm whitespace-nowrap shadow-[0_4px_16px_rgba(143,78,0,0.25)] hover:shadow-[0_8px_24px_rgba(143,78,0,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all shrink-0"
              >
                <Sparkles className="w-4 h-4 shrink-0" />
                <span className="whitespace-nowrap">Plan Your Trip</span>
              </Link>
            </div>

            {/* Tablet & Mobile Nav Triggers (< xl) */}
            <div className="flex xl:hidden items-center gap-2 sm:gap-3">
              <Link
                href="/plan-your-trip"
                className="px-3.5 py-2 rounded-xl bg-tertiary-container text-on-tertiary text-xs font-bold shadow-sm"
              >
                Plan Trip
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-xl transition-colors ${
                  isScrolled
                    ? "text-on-surface hover:bg-surface-container-low"
                    : "text-white hover:bg-white/15 drop-shadow-sm"
                }`}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Slide-down Drawer (< xl) */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/98 backdrop-blur-xl border-b border-surface-container-high shadow-2xl px-6 pt-4 pb-8 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            <Link
              href="/"
              className={`p-3 rounded-xl text-xs font-semibold flex items-center gap-2.5 ${
                pathname === "/" ? "bg-primary-fixed/40 text-primary font-bold" : "text-on-surface hover:bg-surface-container-low"
              }`}
            >
              <Compass className="w-4 h-4 text-primary" />
              <span>Home</span>
            </Link>

            <Link
              href="/about-us"
              className={`p-3 rounded-xl text-xs font-semibold flex items-center gap-2.5 ${
                pathname === "/about-us" ? "bg-primary-fixed/40 text-primary font-bold" : "text-on-surface hover:bg-surface-container-low"
              }`}
            >
              <Info className="w-4 h-4 text-primary" />
              <span>About Siri Vacations</span>
            </Link>

            {/* Domestic Accordion */}
            <div className="rounded-xl border border-surface-container-low overflow-hidden">
              <button
                onClick={() => setDomesticOpen(!domesticOpen)}
                className="w-full p-3 text-xs font-semibold flex items-center justify-between text-on-surface bg-surface-container-lowest"
              >
                <span className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Domestic Packages</span>
                </span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${domesticOpen ? "rotate-180" : ""}`} />
              </button>
              {domesticOpen && (
                <div className="bg-surface-container-low/60 p-2.5 space-y-1.5 text-xs">
                  <Link href="/packages/coorg" className="block p-2 rounded-lg hover:bg-white text-primary font-bold">
                    Coorg Coffee Trails (3D/2N) ⭐
                  </Link>
                  <Link href="/domestic-packages?region=karnataka" className="block p-2 rounded-lg hover:bg-white text-on-surface">
                    Chikmagalur Peaks &amp; Stays
                  </Link>
                  <Link href="/domestic-packages?region=tamilnadu" className="block p-2 rounded-lg hover:bg-white text-on-surface">
                    Ooty &amp; Nilgiris Heritage Train
                  </Link>
                  <Link href="/domestic-packages?region=kerala" className="block p-2 rounded-lg hover:bg-white text-on-surface">
                    Wayanad Rainforest &amp; Rafting
                  </Link>
                  <Link href="/domestic-packages" className="block p-2 rounded-lg bg-white text-primary font-bold">
                    View All Domestic Packages →
                  </Link>
                </div>
              )}
            </div>

            {/* International Accordion */}
            <div className="rounded-xl border border-surface-container-low overflow-hidden">
              <button
                onClick={() => setInternationalOpen(!internationalOpen)}
                className="w-full p-3 text-xs font-semibold flex items-center justify-between text-on-surface bg-surface-container-lowest"
              >
                <span className="flex items-center gap-2.5">
                  <Compass className="w-4 h-4 text-primary" />
                  <span>International Packages</span>
                </span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${internationalOpen ? "rotate-180" : ""}`} />
              </button>
              {internationalOpen && (
                <div className="bg-surface-container-low/60 p-2.5 space-y-1.5 text-xs">
                  <Link href="/international-packages?dest=dubai" className="block p-2 rounded-lg hover:bg-white text-on-surface">
                    Dubai &amp; Abu Dhabi Desert
                  </Link>
                  <Link href="/international-packages?dest=bali" className="block p-2 rounded-lg hover:bg-white text-on-surface">
                    Bali Tropical Pool Villas
                  </Link>
                  <Link href="/international-packages?dest=maldives" className="block p-2 rounded-lg hover:bg-white text-on-surface">
                    Maldives Luxury Overwater
                  </Link>
                  <Link href="/international-packages" className="block p-2 rounded-lg bg-white text-primary font-bold">
                    View All International Packages →
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/destinations"
              className={`p-3 rounded-xl text-xs font-semibold flex items-center gap-2.5 ${
                pathname === "/destinations" ? "bg-primary-fixed/40 text-primary font-bold" : "text-on-surface hover:bg-surface-container-low"
              }`}
            >
              <MapPin className="w-4 h-4 text-primary" />
              <span>Destinations</span>
            </Link>

            <Link
              href="/car-rentals"
              className={`p-3 rounded-xl text-xs font-semibold flex items-center gap-2.5 ${
                pathname === "/car-rentals" ? "bg-primary-fixed/40 text-primary font-bold" : "text-on-surface hover:bg-surface-container-low"
              }`}
            >
              <Car className="w-4 h-4 text-primary" />
              <span>Car Rentals</span>
            </Link>

            <Link
              href="/group-departures"
              className={`p-3 rounded-xl text-xs font-semibold flex items-center gap-2.5 ${
                pathname === "/group-departures" ? "bg-primary-fixed/40 text-primary font-bold" : "text-on-surface hover:bg-surface-container-low"
              }`}
            >
              <Users className="w-4 h-4 text-primary" />
              <span>Group Departures</span>
            </Link>

            <Link
              href="/contact-us"
              className={`p-3 rounded-xl text-xs font-semibold flex items-center gap-2.5 ${
                pathname === "/contact-us" ? "bg-primary-fixed/40 text-primary font-bold" : "text-on-surface hover:bg-surface-container-low"
              }`}
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>Contact Us</span>
            </Link>

            {/* Mobile Bottom Actions */}
            <div className="pt-4 border-t border-surface-container-high grid grid-cols-2 gap-3">
              <a
                href="https://wa.me/919480123456?text=Hello%20Siri%20Vacations,%20I%20am%20interested%20in%20planning%20a%20holiday!"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3.5 rounded-xl bg-emerald-600 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openModal("Mobile Drawer Inquiry");
                }}
                className="py-3 px-3.5 rounded-xl bg-primary text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow"
              >
                <Phone className="w-4 h-4" />
                <span>Request Call</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
