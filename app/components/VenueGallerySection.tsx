// app/components/VenueGallerySection.tsx
"use client";

import { VenueGallery } from "@/app/components/venue-gallery";
import { Camera, Sparkles, Star, Grid3x3 } from "lucide-react";

interface Props {
  venue: {
    images?: Array<{
      src: string;
      alt: string;
    }>;
  };
}

export const VenueGallerySection = ({ venue }: Props) => {
  if (!venue.images?.length) return null;

  return (
    <section className="mb-32 relative bg-black">
      {/* Decorative background elements - Increased opacity */}
      <div className="absolute -top-10 left-10 opacity-30">
        <Camera className="w-24 h-24 text-amber-400" />
      </div>
      <div className="absolute -bottom-10 right-10 opacity-30">
        <Grid3x3 className="w-20 h-20 text-amber-400" />
      </div>
      
      <div className="relative w-full">
        {/* Top decorative section */}
        <div className="flex items-center gap-4 mb-4">
          <div 
            className="w-32 h-1 rounded-full"
            style={{
              background: 'linear-gradient(90deg, #f5ca5d 0%, transparent 100%)'
            }}
          ></div>
          <div className="flex items-center gap-2">
            <Camera className="w-6 h-6 text-amber-400" />
            <Sparkles className="w-5 h-5 text-amber-400" />
            <Star className="w-4 h-4 text-amber-400" />
          </div>
          <div 
            className="flex-1 h-1 rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, #f5ca5d 100%)'
            }}
          ></div>
        </div>
        
        {/* Main heading with decorative icons */}
        <div className="flex items-center justify-center gap-3 mb-6">
          {/* <Sparkles className="w-5 h-5 text-amber-400" /> */}
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            IMMERSIVE GALLERY
          </h1>
          {/* <Star className="w-5 h-5 text-amber-400" /> */}
        </div>
        
        {/* Subtitle with decorative elements */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div 
            className="w-12 h-px"
            style={{
              background: 'linear-gradient(90deg, #f5ca5d 0%, transparent 100%)'
            }}
          ></div>
          <p className="text-sm font-medium uppercase tracking-widest text-amber-300 text-center">
            Visual Journey Through Our Spaces
          </p>
          <div 
            className="w-12 h-px"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, #f5ca5d 100%)'
            }}
          ></div>
        </div>
        
        {/* Bottom decorative section */}
        <div className="flex items-center gap-4 mt-4">
          <div 
            className="flex-1 h-1 rounded-full"
            style={{
              background: 'linear-gradient(90deg, #f5ca5d 0%, transparent 100%)'
            }}
          ></div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <Camera className="w-6 h-6 text-amber-400" />
          </div>
          <div 
            className="w-32 h-1 rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, #f5ca5d 100%)'
            }}
          ></div>
        </div>
      </div>
      
      {/* Gallery Container with decorative border */}
      <div className="relative mt-12">
        {/* Decorative border container - Darker for black background */}
        <div className="absolute -inset-4 rounded-2xl pointer-events-none z-0"
          style={{
            background: 'rgba(20, 20, 20, 0.8)',
            border: '1px solid rgba(140, 120, 83, 0.3)',
          }}
        ></div>
        
        {/* Corner decorations */}
        <div 
          className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 z-10 pointer-events-none"
          style={{borderColor: '#f5ca5d'}}
        ></div>
        <div 
          className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 z-10 pointer-events-none"
          style={{borderColor: '#f5ca5d'}}
        ></div>
        <div 
          className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 z-10 pointer-events-none"
          style={{borderColor: '#f5ca5d'}}
        ></div>
        <div 
          className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 z-10 pointer-events-none"
          style={{borderColor: '#f5ca5d'}}
        ></div>
        
        {/* Gallery component */}
        <div className="relative z-10">
          <VenueGallery images={venue.images} />
        </div>
      </div>
      
      {/* Bottom decorative note - Updated for dark background */}
      <div className="flex justify-center mt-10">
        <div className="flex items-center gap-3 px-5 py-2 rounded-full"
          style={{
            backgroundColor: 'rgba(30, 30, 30, 0.8)',
            border: '1px solid rgba(140, 120, 83, 0.3)',
          }}
        >
          <Camera className="w-4 h-4 text-amber-400" />
          <p className="text-sm font-medium text-amber-300">
            {venue.images.length}+ Professional Photos
          </p>
          <Camera className="w-4 h-4 text-amber-400" />
        </div>
      </div>
    </section>
  );
};