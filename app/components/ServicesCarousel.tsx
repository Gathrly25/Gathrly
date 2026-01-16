"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { services } from "@/app/lib/services/services";
import { Sparkles, Star } from "lucide-react";

const infiniteServices = [...services, ...services];

const ServicesCarousel = () => {
  return (
    <section className="h-screen flex flex-col justify-center bg-black relative overflow-hidden mt-0 sm:mt-2 md:mt-5">
      
      {/* Background Sparkles and Stars */}
      <div className="absolute inset-0 overflow-hidden hidden sm:block">
        <div className="absolute top-20 left-10 w-12 h-12 opacity-30">
          <Sparkles className="w-full h-full text-amber-400" />
        </div>
        <div className="absolute top-20 right-24 w-12 h-12 opacity-20">
          <Star className="w-full h-full text-amber-300" />
        </div>
        <div className="absolute top-22 left-1/3 w-14 h-14 opacity-25">
          <Sparkles className="w-full h-full text-amber-400/80" />
        </div>
        <div className="absolute top-22 right-1/4 w-10 h-10 opacity-15">
          <Star className="w-full h-full text-amber-300" />
        </div>
      </div>

      {/* HEADING SECTION */}
      <div className='px-6 lg:px-16 mb-12 relative z-10'>
        <div className='flex items-center gap-4 mb-3'>
          <h2 className='text-4xl md:text-6xl font-bold text-white font-cinzel'>
            Venue Services
          </h2>
        </div>

        {/* Subtitle */}
        <p className='text-lg text-amber-300 font-light ml-2'>
          Premium Services Crafted For Unforgettable Experiences
        </p>
      </div>

      {/* CAROUSEL */}
      <div className='relative overflow-hidden px-4'>
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          className='flex gap-5 md:gap-6 lg:gap-8 px-4'
        >
          {infiniteServices.map((service, index) => (
            <div 
              key={`${service.id}-${index}`} 
              className=" relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-600/0 via-amber-500/0 to-amber-400/0 rounded-2xl opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500"></div>
              <ServiceCard {...service} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCarousel;