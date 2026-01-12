// app/venues/[slug]/page.tsx
"use client";

import { useParams, useRouter } from "next/navigation";
import { ServicesCTA } from "@/app/components/services-cta";
import { SmartCTA } from "@/app/components/smart-cta";
import { VenueNav } from "@/app/components/VenueNav";
import { VenueHero } from "@/app/components/VenueHero";
import { VenueAbout } from "@/app/components/VenueAbout";
import { VenueAmenities } from "@/app/components/VenueAmenities";
import { VenueGallerySection } from "@/app/components/VenueGallerySection";
import { VenueVirtualTour } from "@/app/components/VenueVirtualTour";
import { VenueVideoSection } from "@/app/components/VenueVideoSection";
import { venuesData } from "@/app/lib/venues/venues.data";

export default function VenueDetailPage() {
  const { slug } = useParams();
  const venue = venuesData[slug as string];
  const router = useRouter();

  if (!venue) {
    return (
      <div className="flex h-screen items-center justify-center bg-stone-950 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Venue Not Found</h1>
          <p className="text-stone-300 mb-8">The venue you're looking for doesn't exist.</p>
          <button 
            onClick={() => router.push("/")}
            className="rounded-full bg-amber-500 px-6 py-3 font-bold text-black hover:scale-105 transition-transform"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-stone-900">
      <VenueNav />
      <VenueHero venue={venue} />

      <div className="container mx-auto px-6 py-24 md:px-12">
        <div className="mx-auto max-w-5xl">
          <VenueAbout venue={venue} />
          <VenueAmenities venue={venue} />
          <VenueGallerySection venue={venue} />
          <VenueVirtualTour venue={venue} />
          <VenueVideoSection venue={venue} />
          <ServicesCTA />
        </div>
      </div>

      <SmartCTA ghlLink={venue.ghlLink} />
    </main>
  );
}