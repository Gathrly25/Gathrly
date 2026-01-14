"use client";
import { motion } from "framer-motion";
import { MapPin, Users, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface VenueHeroProps {
  venue: {
    name: string;
    tagline?: string;
    location: string;
    capacity: string;
    price?: string;
    heroImage?: string;
  };
}

export const VenueHero = ({ venue }: VenueHeroProps) => {
  const [imageError, setImageError] = useState(false);

  // Helper function to normalize image URL
  const normalizeImageUrl = (url?: string) => {
    if (!url) return null;
    
    // If it's already a full URL, return as is
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    
    // If it's a relative path without leading slash, add it
    if (!url.startsWith('/')) {
      return `/${url}`;
    }
    
    return url;
  };

  const imageUrl = normalizeImageUrl(venue.heroImage);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {imageUrl && !imageError ? (
          <Image
            src={imageUrl}
            alt={venue.name}
            fill
            className="object-cover"
            priority
            sizes="100vw"
            onError={() => setImageError(true)}
          />
        ) : (
          // Fallback gradient background
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, #292524 0%, #44403c 50%, #1c1917 100%)'
            }}
          />
        )}
        {/* Simple overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-20 w-full px-4 md:px-8 lg:px-20 py-8 md:py-0">
        {/* Main Heading */}
        <div className="text-center mb-8 md:mb-16">
          <div className="mb-2 md:mb-4">
            <span className="text-xs md:text-sm uppercase tracking-widest text-amber-300 font-cinzel font-medium">
              Iconic Venues
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-cinzel font-bold mb-4 md:mb-6">
            <span className="text-white">
              PREMIUM
            </span>
            <br />
            <span className="text-white">
              EVENT SPACES
            </span>
          </h1>
          
          {/* Simple divider */}
          <div className="w-16 md:w-20 h-0.5 md:h-1 bg-amber-400 mx-auto" />
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            
            {/* Left Column - Venue Details */}
            <div className="space-y-6 md:space-y-8">
              {/* Enhanced Venue Title */}
              <div>
                <div className="flex items-center gap-2 mb-2 md:mb-3">
                  <Star className="w-4 h-4 md:w-5 md:h-5 text-amber-400" />
                  <span className="text-xs md:text-sm text-amber-300 uppercase font-cinzel tracking-wide">
                    {venue.tagline || "Premium Venue"}
                  </span>
                </div>
                
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight font-cinzel">
                  {venue.name}
                </h2>
              </div>

              {/* Venue Info */}
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-3 p-3 md:p-4 rounded-lg bg-white/5 backdrop-blur-sm">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-amber-400" />
                  <div>
                    <div className="text-xs md:text-sm text-gray-300 uppercase">Location</div>
                    <div className="text-base md:text-lg font-medium text-white">{venue.location}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 md:p-4 rounded-lg bg-white/5 backdrop-blur-sm">
                  <Users className="w-5 h-5 md:w-6 md:h-6 text-amber-400" />
                  <div>
                    <div className="text-xs md:text-sm text-gray-300 uppercase">Capacity</div>
                    <div className="text-base md:text-lg font-medium text-white">{venue.capacity}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Simple Stats (Hidden on mobile) */}
            <div className="hidden md:block">
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-white mb-1">50+</div>
                  <div className="text-xs text-gray-300 uppercase">Events Services</div>
                </div>
                <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-white mb-1">100%</div>
                  <div className="text-xs text-gray-300 uppercase">Satisfaction</div>
                </div>
                <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-white mb-1">5★</div>
                  <div className="text-xs text-gray-300 uppercase">Rating</div>
                </div>
                <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-xs text-gray-300 uppercase">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};