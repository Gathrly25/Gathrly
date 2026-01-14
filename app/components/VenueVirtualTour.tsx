// app/components/VenueVirtualTour.tsx
"use client";

import { VirtualTour } from "@/app/components/virtual-tour";
import { PlayCircle } from "lucide-react";

interface Props {
  venue: {
    matterportUrl?: string;
  };
}

export const VenueVirtualTour = ({ venue }: Props) => {
  if (!venue.matterportUrl) return null;

  return (
    <section className="mb-32 bg-black">
      <div className="w-full flex justify-end">
        <div className="w-[80%]">
          {/* Top icons */}
          <div className="flex justify-end items-center gap-4 mb-2">
            <PlayCircle className="w-8 h-8 text-amber-400" />
            <PlayCircle className="w-6 h-6 text-amber-400" />
            <PlayCircle className="w-4 h-4 text-amber-400" />
          </div>
          
          <h1 className="text-right my-8 text-4xl md:text-5xl font-bold text-white font-cinzel">
            VIRTUAL TOUR
          </h1>
          
          {/* Subtitle */}
          <p className="text-right text-sm font-semibold uppercase tracking-widest mt-4 text-amber-300">
            Explore the venue in 360°
          </p>
        </div>
      </div>
      
      {/* Virtual Tour Component - NO CSS ADDED */}
      <VirtualTour matterportUrl={venue.matterportUrl} />
    </section>
  );
};