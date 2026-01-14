"use client";

import { motion } from "framer-motion";
import { 
  Sparkles, 
  MapPin, 
  Building, 
  UtensilsCrossed
} from "lucide-react";

const GathrlyShowcase = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black mb-8 lg:mb-10">
      {/* Full Screen Video Background */}
      <div className="absolute inset-0">
        <video
          src="/videos/gathrlyShowcase.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Darker overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Main Content Container */}
      <div className="relative h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 pt-20 lg:pt-32">
        
        {/* LEFT SIDE - Text Content */}
        <div className="w-full lg:w-1/2 z-20 mt-8 lg:mt-16 px-4 lg:px-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-lg mx-auto lg:mx-0"
          >
            {/* Top Italic Heading */}
            <div className="mb-4 lg:mb-6">
              <p className="text-sm sm:text-base md:text-lg italic text-amber-200/80 font-light tracking-wide font-cinzel text-center lg:text-left">
                Redefining event hosting with a wide array of versatile venues...
              </p>
            </div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-cinzel text-center lg:text-left"
            >
              <span className="block text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                Curated
              </span>
              <span className="block text-amber-400 drop-shadow-[0_2px_15px_rgba(245,158,11,0.5)] mt-1 lg:mt-2">
                Experiences
              </span>
            </motion.h1>

            {/* Decorative Sparkle */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4 lg:mt-6 hidden lg:block"
            >
              <Sparkles className="w-5 h-5 lg:w-6 h-6 text-amber-400/60" />
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT SIDE - Icons Section */}
        <div className="w-full lg:w-1/2 z-20 mt-12 lg:mt-16 px-4 lg:px-0">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-xl mx-auto lg:mx-0"
          >
            {/* Horizontal Line Separator on top of icons - Hidden on mobile */}
            <div className="hidden lg:flex justify-center mb-6 lg:mb-8">
              <div className="relative w-40 lg:w-48">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Sparkles className="w-3 h-3 lg:w-4 lg:h-4 text-amber-400" />
                </div>
              </div>
            </div>

            {/* Icons in Horizontal Grid - Responsive */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              
              {/* Location Icon */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="relative mb-2 lg:mb-3">
                  <div className="absolute inset-0 bg-amber-400/10 rounded-full blur-sm group-hover:blur-md transition-all duration-300" />
                  <div className="p-2 sm:p-2.5 md:p-3 rounded-full bg-gradient-to-br from-amber-400 to-amber-600/5 border border-amber-400/15 group-hover:border-amber-400/30 transition-all duration-300">
                    <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white mb-0.5 lg:mb-1 font-cinzel">3 Locations</p>
                  <p className="text-amber-200/60 text-[10px] sm:text-xs">Premium venues</p>
                </div>
              </div>

              {/* Venues Icon */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="relative mb-2 lg:mb-3">
                  <div className="absolute inset-0 bg-amber-400/10 rounded-full blur-sm group-hover:blur-md transition-all duration-300" />
                  <div className="p-2 sm:p-2.5 md:p-3 rounded-full bg-gradient-to-br from-amber-400 to-amber-600/5 border border-amber-400/15 group-hover:border-amber-400/30 transition-all duration-300">
                    <Building className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white mb-0.5 lg:mb-1 font-cinzel">Diverse Venues</p>
                  <p className="text-amber-200/60 text-[10px] sm:text-xs">Versatile spaces</p>
                </div>
              </div>

              {/* Menus Icon */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="relative mb-2 lg:mb-3">
                  <div className="absolute inset-0 bg-amber-400/10 rounded-full blur-sm group-hover:blur-md transition-all duration-300" />
                  <div className="p-2 sm:p-2.5 md:p-3 rounded-full bg-gradient-to-br from-amber-400 to-amber-600/5 border border-amber-400/15 group-hover:border-amber-400/30 transition-all duration-300">
                    <UtensilsCrossed className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white mb-0.5 lg:mb-1 font-cinzel">Best Menus</p>
                  <p className="text-amber-200/60 text-[10px] sm:text-xs">Gourmet cuisine</p>
                </div>
              </div>
            </div>

            {/* Mobile Horizontal Line Separator */}
            <div className="flex lg:hidden justify-center mt-6">
              <div className="relative w-32">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Sparkles className="w-2.5 h-2.5 text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-10">
        <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400/20 animate-pulse" />
      </div>
      <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 z-10">
        <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400/20 animate-pulse" />
      </div>
    </section>
  );
};

export default GathrlyShowcase;