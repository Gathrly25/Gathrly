"use client";

import { useState } from "react";
import { Service } from "@/app/lib/services/services";
import { servicePackages } from "@/app/lib/services/servicePackages";
import {
  Sparkles,
  Star,
  Crown,
  Gem,
  Check,
} from "lucide-react";
import { AddToCartButton } from "./AddToCartButton";

interface Props {
  service: Service;
}

export default function ServicePackages({ service }: Props) {
  const packages = servicePackages[service.slug];
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);

  if (!packages || packages.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-black py-16 text-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #f5ca5d 1px, transparent 1px),
                             linear-gradient(to bottom, #f5ca5d 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Decorative separators */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Exclusive badge */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20">
          <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-700 to-amber-600 px-5 py-1 shadow-xl border border-amber-600/30">
            <Gem className="h-3 w-3 text-amber-300" />
            <span className="text-xs font-semibold tracking-widest text-amber-200">
              PREMIUM PACKAGES
            </span>
            <Sparkles className="h-3 w-3 text-amber-300" />
          </div>
        </div>

        {/* Heading - Increased size */}
        <div className="mb-12 text-center relative">
          <Crown className="mx-auto mb-4 h-14 w-14 text-amber-500/30" />
          <h2 className="font-bold text-4xl md:text-5xl tracking-wide mb-4"
            style={{
              background: 'linear-gradient(90deg, #8c7853 0%, #f5ca5d 50%, #8c7853 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 4px 12px rgba(245, 202, 93, 0.2)'
            }}>
            EXCLUSIVE SERVICE PACKAGES
          </h2>
          <p className="mt-2 max-w-2xl mx-auto text-base text-amber-200/80">
            Premium packages designed for unforgettable, high-end experiences
          </p>
        </div>

        {/* Packages - Fixed equal height cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {packages.map((pkg, index) => {
            const itemId = `premium-${service.slug}-${index}`;

            return (
              <div
                key={index}
                className="group relative transition-all duration-300 h-full flex"
                onMouseEnter={() => setSelectedPackage(index)}
                onMouseLeave={() => setSelectedPackage(null)}
              >
                {/* Card - Fixed height and layout */}
                <div className="relative rounded-none overflow-hidden bg-transparent shadow-lg shadow-black/30 w-full flex flex-col">
                  {/* Top Video Section - Fixed height */}
                  <div className="relative h-80 overflow-hidden rounded-t-[140px] flex-shrink-0">
                    {/* Video content with white border */}
                    <div className="absolute inset-0 border-3 border-white rounded-t-[140px] z-20 pointer-events-none"></div>
                    
                    {/* Video container inside border */}
                    <div className="absolute inset-2 overflow-hidden rounded-t-[138px]">
                      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 z-10" />
                      <video
                        src={pkg.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Price badge - position adjusted */}
                    <div className="absolute bottom-4 right-4 z-30">
                      <div className="rounded-full bg-gradient-to-r from-amber-900/95 to-amber-800/95 backdrop-blur-sm px-5 py-2 shadow-lg border border-amber-700/30">
                        <span className="text-xl font-bold text-amber-300">
                          ${pkg.price.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Content Section - Fixed equal height */}
                  <div className="relative -mt-1 p-5 rounded-b-none border-t-0 border-2 border-amber-800/50 bg-gradient-to-b from-gray-900/90 to-black flex-grow flex flex-col">
                    {/* Ensure border doesn't show behind video */}
                    <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-b from-gray-900/90 to-transparent"></div>
                    
                    {/* Package title */}
                    <h3 className="mb-4 text-lg font-semibold text-amber-300 text-center">
                      {pkg.name}
                    </h3>
                    
                    {/* Features - Fixed spacing */}
                    <ul className="mb-5 space-y-2 flex-grow">
                      {pkg.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex gap-2 items-start"
                        >
                          <Check className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-amber-100/90 leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="mt-auto">
                      <AddToCartButton
                        item={{
                          id: itemId,
                          name: `${pkg.name} - ${service.title}`,
                          type: "service",
                          price: pkg.price,
                          image: pkg.video,
                          venueSlug: service.slug,
                        }}
                        variant="primary"
                        className="w-full rounded-lg py-2.5 text-sm font-semibold bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 shadow-md hover:shadow-amber-900/30 transition-all border border-amber-700/30"
                      />
                    </div>

                    {/* All inclusive badge */}
                    <div className="mt-4 flex items-center justify-center gap-2 text-xs text-amber-200/70">
                      <Sparkles className="h-3 w-3 text-amber-400" />
                      <span>All inclusive package</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-gray-900/60 to-black/60 backdrop-blur px-5 py-2.5 border border-amber-800/30 shadow-lg">
            <Star className="h-4 w-4 text-amber-400" />
            <p className="text-sm text-amber-200/80">
              All packages include complimentary consultation & planning support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}