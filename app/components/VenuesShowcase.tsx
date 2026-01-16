"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { VenuesGrid } from "./VenuesGrid";
import { VenueModal } from "./VenueModal";
import { Star, MapPin, Sparkles } from "lucide-react";

export const VenuesShowcase = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const router = useRouter();

  return (
    <section className="relative min-h-screen py-12 md:py-24 bg-black">
      {/* Sparkles and Stars Background - Hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        <div className="absolute top-30 left-20 w-20 h-20 opacity-30">
          <Sparkles className="w-full h-full text-amber-400" />
        </div>
        <div className="absolute top-1/4 right-25 w-16 h-16 opacity-20">
          <Star className="w-full h-full text-amber-300" />
        </div>
        <div className="absolute top-1/5 right-1/3 w-12 h-12 opacity-15">
          <Star className="w-full h-full text-amber-400" />
        </div>
        <div className="absolute top-1/3 left-1/3 w-14 h-14 opacity-25">
          <Sparkles className="w-full h-full text-amber-400/80" />
        </div>
      </div>

      {/* Top decorative elements - Always visible */}
      <div className='absolute top-8 md:top-16 left-4 md:left-10 lg:left-16 flex items-center gap-2 md:gap-4 z-10'>
        <div
          className='w-12 md:w-24 h-px'
          style={{
            background: "linear-gradient(90deg, #f5ca5d 0%, transparent 100%)",
          }}
        ></div>
        <div className='flex items-center gap-1 md:gap-2'>
          <Sparkles className='w-4 h-4 md:w-5 md:h-5 text-amber-300' />
          <Star className='w-3 h-3 md:w-4 md:h-4 text-amber-300' />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        {/* HEADING SECTION - Simplified */}
        <div className='px-2 md:px-6 lg:px-16 mb-12 md:mb-16'>
          <div className='flex items-center gap-3 md:gap-4 mb-2 md:mb-3'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white font-cinzel'>
              Iconic Venues
            </h2>
          </div>

          {/* Subtitle - Simplified */}
          <p className='text-base sm:text-sm md:text-md lg:text-xl text-amber-300 mb-3 font-light'>
            Discover our collection of exclusive venues, each designed to create
            unforgettable atmospheres for your most important moments.
          </p>

          {/* Rating and location badge */}
          <div className="mt-4 md:mt-6 flex items-center gap-2 md:gap-3 ml-1 md:ml-2">
            <div className="flex items-center gap-1 px-2 py-1 md:px-3 md:py-1 rounded-full bg-black/80 border border-amber-400/50">
              <Star className="w-3 h-3 md:w-4 md:h-4 text-amber-300" />
              <span className="text-xs md:text-sm font-medium text-white">Premium Rated</span>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 md:px-3 md:py-1 rounded-full bg-black/80 border border-amber-400/50">
              <MapPin className="w-3 h-3 md:w-4 md:h-4 text-amber-300" />
              <span className="text-xs md:text-sm font-medium text-white">Prime Locations</span>
            </div>
          </div>
        </div>

        <VenuesGrid onSelect={setSelectedId} />
      </div>

      {/* Bottom decorative elements - Always visible */}
      <div className='absolute bottom-8 md:bottom-16 right-4 md:right-10 lg:right-16 flex items-center gap-2 md:gap-4 z-10'>
        <div className='flex items-center gap-1 md:gap-2'>
          <Star className='w-3 h-3 md:w-4 md:h-4 text-amber-300' />
          <Sparkles className='w-4 h-4 md:w-5 md:h-5 text-amber-300' />
        </div>
        <div
          className='w-12 md:w-24 h-px'
          style={{
            background: "linear-gradient(90deg, transparent 0%, #f5ca5d 100%)",
          }}
        ></div>
      </div>

      {/* Background decorative elements - Hidden on mobile */}
      <div className="absolute top-1/4 right-4 md:right-8 opacity-20 z-0 hidden md:block">
        <Star className="w-8 h-8 md:w-12 md:h-12 text-amber-400/20" />
      </div>
      <div className="absolute bottom-1/4 left-4 md:left-8 opacity-20 z-0 hidden md:block">
        <Star className="w-6 h-6 md:w-10 md:h-10 text-amber-400/20" />
      </div>

      <VenueModal
        selectedId={selectedId}
        onClose={() => setSelectedId(null)}
        onExplore={(slug) => router.push(`/venues/${slug}`)}
      />
    </section>
  );
};