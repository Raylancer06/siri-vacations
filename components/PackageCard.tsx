"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Star, Clock, MapPin, Check, ArrowRight, Car, Coffee, Shield } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export interface PackageData {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  duration: string;
  rating: number;
  reviewsCount: number;
  originalPrice: number;
  discountedPrice: number;
  imageUrl: string;
  imageAlt: string;
  categoryBadge: string;
  inclusions: string[];
  linkHref: string;
  featured?: boolean;
}

export default function PackageCard({ pkg }: { pkg: PackageData }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { openModal } = useModal();

  return (
    <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden border border-surface-container-high shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Image Container with 16:10 Aspect */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-container">
          <Image
            src={pkg.imageUrl}
            alt={pkg.imageAlt || pkg.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Top Floating Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
            <span className="px-2.5 py-1 rounded-full bg-[#082B55]/85 backdrop-blur-md text-white font-semibold text-[11px] shadow-sm">
              {pkg.categoryBadge}
            </span>
            {pkg.featured && (
              <span className="px-2.5 py-1 rounded-full bg-accent-orange text-white font-bold text-[11px] shadow-sm">
                Bestseller
              </span>
            )}
          </div>

          {/* Wishlist Heart Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsWishlisted(!isWishlisted);
            }}
            aria-label="Save to Wishlist"
            className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white backdrop-blur-md flex items-center justify-center text-on-surface transition-all shadow-md active:scale-90"
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                isWishlisted ? "text-red-500 fill-red-500" : "text-slate-600 hover:text-red-500"
              }`}
            />
          </button>

          {/* Bottom Duration Glass Pill */}
          <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium">
            <Clock className="w-3.5 h-3.5 text-accent-gold" />
            <span>{pkg.duration}</span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5">
          {/* Location & Rating */}
          <div className="flex items-center justify-between text-xs text-outline mb-2">
            <div className="flex items-center gap-1 text-primary font-medium truncate max-w-[170px]">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">{pkg.location}</span>
            </div>
            <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 text-amber-900 font-semibold">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>{pkg.rating.toFixed(1)}</span>
              <span className="text-[10px] text-amber-700">({pkg.reviewsCount})</span>
            </div>
          </div>

          {/* Title */}
          <Link href={pkg.linkHref} className="block group-hover:text-primary transition-colors">
            <h3 className="font-bold text-base sm:text-lg font-headline text-on-surface line-clamp-1 mb-1">
              {pkg.title}
            </h3>
          </Link>

          {/* Subtitle / Highlights */}
          <p className="text-xs text-on-surface-variant line-clamp-2 mb-4 leading-relaxed">
            {pkg.subtitle}
          </p>

          {/* Inclusions Micro-icons */}
          <div className="flex flex-wrap gap-2 py-2 mb-4 border-y border-surface-container-low text-[11px] text-outline">
            {pkg.inclusions.map((item, idx) => (
              <span key={idx} className="inline-flex items-center gap-1 bg-surface-container-low px-2 py-0.5 rounded text-on-surface-variant font-medium">
                <Check className="w-3 h-3 text-emerald-600" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer: Pricing & CTAs */}
      <div className="p-5 pt-0">
        <div className="flex items-baseline justify-between mb-4">
          <div>
            <span className="text-[10px] uppercase font-semibold text-outline block">Starting from</span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl sm:text-2xl font-bold font-headline text-primary">
                ₹{pkg.discountedPrice.toLocaleString("en-IN")}
              </span>
              {pkg.originalPrice > pkg.discountedPrice && (
                <span className="text-xs text-outline line-through">
                  ₹{pkg.originalPrice.toLocaleString("en-IN")}
                </span>
              )}
            </div>
            <span className="text-[10px] text-outline">per person / all-inclusive</span>
          </div>
          <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-200">
            Save ₹{(pkg.originalPrice - pkg.discountedPrice).toLocaleString("en-IN")}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Link
            href={pkg.linkHref}
            className="py-2.5 px-3 rounded-lg border border-primary text-primary hover:bg-primary-fixed/30 font-semibold text-xs flex items-center justify-center gap-1 transition-all"
          >
            <span>View Itinerary</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <button
            onClick={() => openModal(pkg.title)}
            className="py-2.5 px-3 rounded-lg bg-gradient-to-r from-[#FF982F] to-[#e67e15] hover:from-[#e67e15] hover:to-[#cb6d0f] text-white font-semibold text-xs flex items-center justify-center gap-1 shadow-sm hover:shadow transition-all active:scale-95"
          >
            <span>Quick Book</span>
          </button>
        </div>
      </div>
    </div>
  );
}
