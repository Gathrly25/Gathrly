"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Users, X } from "lucide-react";
import { cn } from "../lib/utils";

const venues = [
  {
    id: 1,
    name: "The Grand Ballroom",
    location: "Downtown Chicago",
    capacity: "500 Guests",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop",
    description: "A timeless space with crystal chandeliers and soaring ceilings, perfect for elegant galas and weddings.",
  },
  {
    id: 2,
    name: "Skyline Loft",
    location: "West Loop",
    capacity: "250 Guests",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=2100&auto=format&fit=crop",
    description: "Industrial chic meets modern luxury. Floor-to-ceiling windows offer breathtaking views of the city skyline.",
  },
  {
    id: 3,
    name: "The Garden Atrium",
    location: "Lincoln Park",
    capacity: "150 Guests",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2079&auto=format&fit=crop",
    description: "An intimate, light-filled sanctuary surrounded by lush greenery. Ideal for ceremonies and cocktail hours.",
  },
];

export const VenuesShowcase = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <section className="relative min-h-screen bg-stone-100 py-24 text-stone-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-stone-500">
              Our Spaces
            </h2>
            <h3 className="mt-4 text-5xl font-bold leading-tight md:text-7xl">
              Curated Venues
            </h3>
          </div>
          <p className="max-w-md text-lg text-stone-600">
            Discover our collection of exclusive venues, each designed to create
            unforgettable atmospheres for your most important moments.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {venues.map((venue) => (
            <motion.div
              key={venue.id}
              layoutId={`card-${venue.id}`}
              onClick={() => setSelectedId(venue.id)}
              className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl bg-stone-200"
            >
              <motion.img
                layoutId={`image-${venue.id}`}
                src={venue.image}
                alt={venue.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

              <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                <motion.h4
                  layoutId={`title-${venue.id}`}
                  className="text-2xl font-bold md:text-3xl"
                >
                  {venue.name}
                </motion.h4>
                <motion.div
                  layoutId={`meta-${venue.id}`}
                  className="mt-2 flex items-center gap-4 text-sm opacity-80"
                >
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" /> {venue.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" /> {venue.capacity}
                  </span>
                </motion.div>
              </div>
            </motion.div>
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
                    className="mt-4 flex gap-6 text-stone-500"
                  >
                    <span className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      {venues.find((v) => v.id === selectedId)?.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
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
                    className="mt-10 flex w-fit items-center gap-2 rounded-full bg-black px-8 py-4 text-white transition-transform hover:scale-105 active:scale-95"
                  >
                    Book This Venue <ArrowRight className="h-4 w-4" />
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
