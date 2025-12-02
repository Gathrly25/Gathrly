"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Users, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "../lib/utils";
import Image from "next/image";

const venues = [
  {
    id: 1,
    slug: "lofte-23",
    name: "Lofte 23",
    location: "Downtown Arts District",
    capacity: "500 Guests",
    image: "https://res.cloudinary.com/dygfdmuri/image/upload/v1764709376/l7_sins5m.webp",
    description: "A raw, industrial masterpiece featuring exposed brick, soaring timber beams, and panoramic city views. The perfect canvas for bold, modern events.",
  },
  {
    id: 2,
    slug: "velvet-hour",
    name: "Velvet Hour",
    location: "West Loop Rooftop",
    capacity: "250 Guests",
    image: "/images/vh-images/vv1.jpg",
    description: "An ultra-chic rooftop lounge oozing sophistication. Floor-to-ceiling glass, plush velvet interiors, and a sunset view that steals the show.",
  },
  {
    id: 3,
    slug: "billionaire-row",
    name: "Billionaire Row",
    location: "Gold Coast Mansion",
    capacity: "150 Guests",
    image: "/images/br-images/br1.JPEG",
    description: "Opulence redefined. A historic mansion with manicured gardens, marble ballrooms, and an air of exclusivity that impresses every guest.",
  },
];

export const VenuesShowcase = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const router = useRouter();

  const handleBookNow = (slug: string) => {
    router.push(`/venues/${slug}`);
  };

  return (
    <section className="relative min-h-screen bg-stone-100 py-24 text-stone-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-stone-500">
              Our Spaces
            </h2>
            <h3 className="mt-4 text-5xl font-bold leading-tight md:text-7xl">
              Iconic Venues
            </h3>
          </div>
          <p className="max-w-md text-lg text-stone-600">
            Discover our collection of exclusive venues, each designed to create
            unforgettable atmospheres for your most important moments.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {venues.map((venue) => (
            <div
              key={venue.id}
              // layoutId={`card-${venue.id}`}
              onClick={() => setSelectedId(venue.id)}
              className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl bg-stone-200 shadow-lg hover:shadow-xl transition-shadow"
            >
              <Image
                // layoutId={`image-${venue.id}`}
                src={venue.image}
                alt={venue.name}
                width={100}
                height={100}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              layoutId={`card-${selectedId}`}
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedId(null);
                }}
                className="absolute right-6 top-6 z-10 rounded-full bg-white/20 p-2 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-black"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-[300px] md:h-[600px]">
                  <motion.img
                    layoutId={`image-${selectedId}`}
                    src={venues.find((v) => v.id === selectedId)?.image}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <motion.h2
                    layoutId={`title-${selectedId}`}
                    className="text-4xl font-bold text-stone-900 md:text-5xl"
                  >
                    {venues.find((v) => v.id === selectedId)?.name}
                  </motion.h2>
                  <motion.div
                    layoutId={`meta-${selectedId}`}
                    className="mt-4 flex flex-col gap-3 text-stone-500"
                  >
                    <span className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-amber-600" />
                      {venues.find((v) => v.id === selectedId)?.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-amber-600" />
                      {venues.find((v) => v.id === selectedId)?.capacity}
                    </span>
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-8 text-lg leading-relaxed text-stone-600"
                  >
                    {venues.find((v) => v.id === selectedId)?.description}
                  </motion.p>

                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    onClick={() => {
                      const slug = venues.find((v) => v.id === selectedId)?.slug;
                      if (slug) handleBookNow(slug);
                    }}
                    className="mt-10 flex w-fit items-center gap-2 rounded-full bg-black px-8 py-4 text-white transition-transform hover:scale-105 active:scale-95"
                  >
                    Explore Venue <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
