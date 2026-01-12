// app/components/VenueHero.tsx
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

      <div className="relative z-20 w-full px-4 md:px-8 lg:px-20">
        {/* Main Heading - Slightly Enhanced */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="text-sm uppercase tracking-widest text-amber-300 font-medium">
              Iconic Venues
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">
              PREMIUM
            </span>
            <br />
            <span className="text-white">
              EVENT SPACES
            </span>
          </h1>
          
          {/* Simple divider */}
          <div className="w-20 h-1 bg-amber-400 mx-auto" />
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column - Venue Details */}
            <div className="space-y-8">
              {/* Enhanced Venue Title */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-5 h-5 text-amber-400" />
                  <span className="text-sm text-amber-300 uppercase tracking-wide">
                    {venue.tagline || "Premium Venue"}
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  {venue.name}
                </h2>
              </div>

              {/* Venue Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm">
                  <MapPin className="w-6 h-6 text-amber-400" />
                  <div>
                    <div className="text-sm text-gray-300 uppercase">Location</div>
                    <div className="text-lg font-medium text-white">{venue.location}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm">
                  <Users className="w-6 h-6 text-amber-400" />
                  <div>
                    <div className="text-sm text-gray-300 uppercase">Capacity</div>
                    <div className="text-lg font-medium text-white">{venue.capacity}</div>
                  </div>
                </div>
                
                {/* {venue.price && (
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm">
                    <Star className="w-6 h-6 text-amber-400" />
                    <div>
                      <div className="text-sm text-gray-300 uppercase">Starting Price</div>
                      <div className="text-lg font-medium text-white">{venue.price}</div>
                    </div>
                  </div>
                )} */}
              </div>
            </div>

            {/* Right Column - Simple Stats */}
            <div>
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