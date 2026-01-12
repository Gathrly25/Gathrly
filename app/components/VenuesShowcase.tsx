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
    <section className="relative min-h-screen py-24 text-white bg-black">
      {/* Gold decorative top border */}
      <div 
        className="absolute top-0 left-0 right-0 h-1"
        style={{background: 'linear-gradient(90deg, #a67c00 0%, #ffd700 50%, #a67c00 100%)'}}
      ></div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles 
                className="w-5 h-5" 
                style={{color: '#f7c31aff'}} 
              />
              <h2 
                className="text-sm font-bold uppercase tracking-widest"
                style={{color: '#fffbf1ff'}}
              >
                Our Spaces
              </h2>
              <Sparkles 
                className="w-5 h-5" 
                style={{color: '#f7c31aff'}} 
              />
            </div>
            <h3 className="mt-4 text-5xl font-bold md:text-7xl text-white">
              Iconic Venues
            </h3>
            
            {/* Rating and location badge */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-black/80 border border-amber-800">
                <Star className="w-4 h-4" style={{color: '#f7c31aff'}} />
                <span style={{color: '#fffbf1ff'}} className="text-sm font-medium">Premium Rated</span>
              </div>
              <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-black/80 border border-amber-800">
                <MapPin className="w-4 h-4" style={{color: '#f7c31aff'}} />
                <span style={{color: '#fffbf1ff'}} className="text-sm font-medium">Prime Locations</span>
              </div>
            </div>
          </div>
          
          <div className="relative max-w-md">
            {/* Corner decorations */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2" style={{borderColor: '#f5ca5d'}}></div>
            <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2" style={{borderColor: '#f5ca5d'}}></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2" style={{borderColor: '#f5ca5d'}}></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2" style={{borderColor: '#f5ca5d'}}></div>
            
            <p 
              className="text-lg p-4 rounded-lg border"
              style={{
                color: '#fffbf1ff',
                backgroundColor: 'rgba(30, 30, 30, 0.8)',
                borderColor: '#8c7853',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
              }}
            >
              Discover our collection of exclusive venues, each designed to create
              unforgettable atmospheres for your most important moments.
            </p>
          </div>
        </div>

        <VenuesGrid onSelect={setSelectedId} />
      </div>

      {/* Gold decorative bottom border */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{background: 'linear-gradient(90deg, #a67c00 0%, #ffd700 50%, #a67c00 100%)'}}
      ></div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 right-8 opacity-20">
        <Star className="w-12 h-12" style={{color: '#f5ca5d'}} />
      </div>
      <div className="absolute bottom-1/4 left-8 opacity-20">
        <Star className="w-10 h-10" style={{color: '#f5ca5d'}} />
      </div>

      <VenueModal
        selectedId={selectedId}
        onClose={() => setSelectedId(null)}
        onExplore={(slug) => router.push(`/venues/${slug}`)}
      />
    </section>
  );
};