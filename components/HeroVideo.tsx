"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { Volume2, VolumeX, Play, Pause, Sparkles, MapPin, ArrowRight } from "lucide-react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const scrollToSearch = () => {
    const el = document.getElementById("trip-search-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 sm:pt-28 pb-16">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="https://lh3.googleusercontent.com/aida-public/AB6AXuASlBnsuP-mL2Ug0uWzgIS92GcbPxqh4DxwLbwGI-jlio2zeoNn4pOuKL3y404R4r9Rc2u6LAyN563iw_pWDOGnT8f16zxNWOFHfwGwdAH3SOXVwAwRQDnZWmbSHs_ioi3Ros70OV_puBUEIjgVuxQA3L6jHYc19rOt4eH-uuSJJc69J-wTcUfI0b6BMH3yaOw8joUUsN4tlEcIe_BujSxeKWLiWG3-wIKn8rJvO58hrC6h_Q8vIqo5"
          className="w-full h-full object-cover scale-105"
        >
          <source src="/hero_drone.mp4" type="video/mp4" />
        </video>

        {/* Multi-layered cinematic scrim overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#082B55] via-[#082B55]/55 to-[#082B55]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(8,43,85,0.45)_100%)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center text-white">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 shadow-lg mb-6 animate-in fade-in duration-700">
          <MapPin className="w-4 h-4 text-accent-gold" />
          <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-white">
            Curated Western Ghats &amp; Bespoke World Holidays
          </span>
        </div>

        {/* Subtitle / Eyebrow */}
        <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-accent-gold uppercase mb-3 animate-in fade-in slide-in-from-bottom-2 duration-700">
          WELCOME TO SIRI VACATIONS • BENGALURU
        </span>

        {/* Main Headline */}
        <h1 className="font-headline text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl text-white leading-[1.1] animate-in fade-in slide-in-from-bottom-3 duration-700">
          Discover India.{" "}
          <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-accent-gold via-orange-300 to-accent-orange">
            Explore Beyond.
          </span>
        </h1>

        {/* Description Body */}
        <p className="text-base sm:text-xl text-surface-container-low max-w-2xl mb-10 leading-relaxed font-light animate-in fade-in slide-in-from-bottom-4 duration-700">
          From misty coffee plantations of Coorg and serene Kerala backwaters to shimmering Dubai skylines and Bali villas—experience flawless concierge travel crafted with authentic local warmth.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-5 duration-700">
          <Link
            href="/domestic-packages"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#FF982F] to-[#e67e15] hover:from-[#e67e15] hover:to-[#cb6d0f] text-white font-semibold text-base shadow-[0_8px_24px_rgba(255,152,47,0.35)] hover:shadow-[0_12px_28px_rgba(255,152,47,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Explore Tour Packages</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/plan-your-trip"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white font-semibold text-base hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Sparkles className="w-5 h-5 text-accent-gold" />
            <span>Customize My Trip</span>
          </Link>
        </div>

        {/* Trust Tagline */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-white/80 animate-in fade-in duration-1000">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>100% Customized Itineraries</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-gold" />
            <span>Direct WhatsApp Concierge</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            <span>Verified Luxury Stays</span>
          </div>
        </div>
      </div>

      {/* Floating Video Controls in Bottom Right */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2">
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause Video" : "Play Video"}
          className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white flex items-center justify-center transition-all border border-white/20"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
        </button>
        <button
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute Video" : "Mute Video"}
          className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white flex items-center justify-center transition-all border border-white/20"
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>

      {/* Bottom Scroll Indicator */}
      <button
        onClick={scrollToSearch}
        aria-label="Scroll to search"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-white/70 hover:text-white transition-colors group cursor-pointer"
      >
        <span className="text-[10px] tracking-widest uppercase font-semibold mb-1 group-hover:translate-y-0.5 transition-transform">
          Explore
        </span>
        <div className="w-6 h-9 rounded-full border-2 border-white/40 flex items-start justify-center p-1">
          <div className="w-1.5 h-2 rounded-full bg-accent-gold animate-bounce" />
        </div>
      </button>
    </section>
  );
}
