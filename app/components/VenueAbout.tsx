"use client";

import { motion } from "framer-motion";
import { Star, Sparkles, Quote } from "lucide-react";

interface Props {
  venue: {
    description: string;
  };
}

export const VenueAbout = ({ venue }: Props) => {
  return (
    <section className="mb-16 text-center relative bg-black">
      {/* Decorative elements - Increased opacity */}
      <div className="absolute -top-4 sm:-top-8 md:-top-4 left-0 opacity-30">
        <Sparkles className="w-12 h-12 text-amber-400" />
      </div>
      <div className="absolute -top-4 sm:-top-8 md:-top-4 right-0 opacity-30">
        <Star className="w-10 h-10 text-amber-400" />
      </div>
      
      <div className="relative w-full mb-8">
        <div className="absolute top-0 left-0 w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full hidden sm:block"></div>
        <div className="absolute bottom-0 right-0 w-24 h-1 bg-gradient-to-r from-amber-300 to-amber-500 rounded-full hidden sm:block"></div>
        
        <div className="flex items-center justify-center gap-3 mb-3">
          <Quote className="w-6 h-6 text-amber-400 rotate-180 hidden sm:block" />
          <h1 className="text-4xl md:text-5xl font-bold text-white font-cinzel">
            ABOUT THE VENUE
          </h1>
          <Quote className="w-6 h-6 text-amber-400 hidden sm:block" />
        </div>
        
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-300 font-cinzel">
          Discover the Essence of Elegance
        </p>
      </div>

      <div className="relative">
        {/* Left decorative line - increased opacity */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-amber-300 via-amber-400 to-amber-300 rounded-full hidden md:block opacity-60"></div>
        
        {/* Right decorative line - increased opacity */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-amber-300 via-amber-400 to-amber-300 rounded-full hidden md:block opacity-60"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg my-4 text-left leading-relaxed px-6 py-8 rounded-xl relative"
          style={{
            backgroundColor: 'rgba(20, 20, 20, 0.9)',
            border: '1px solid rgba(140, 120, 83, 0.3)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
            color: '#fffbf1ff'
          }}
        >
          {/* Description text */}
          <div className="relative z-10">
            <p className="mb-4">{venue.description}</p>
            
            {/* Decorative separator - increased opacity */}
            <div className="flex items-center justify-center gap-3 my-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400"></div>
              <Star className="w-4 h-4 text-amber-400 fill-amber-400/20" />
              <div className="h-px w-12 bg-gradient-to-r from-amber-400 to-transparent"></div>
            </div>
            
            {/* Repeat description with different styling */}
            <p className="text-base italic text-center font-light" style={{color: '#f5ca5d'}}>
              "A space where every detail tells a story of luxury and comfort."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};