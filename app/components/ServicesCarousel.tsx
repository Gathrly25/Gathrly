"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { services } from "@/app/lib/services/services";
import { Sparkles, Star } from "lucide-react";

interface Props {
  progress: MotionValue<number>;
}

const infiniteServices = [...services, ...services];

const ServicesCarousel = ({ progress }: Props) => {
  const opacity = useTransform(progress, [0.55, 0.7], [0, 1]);
  const y = useTransform(progress, [0.55, 0.7], [60, 0]);

  return (
    <motion.section
      style={{ opacity, y }}
      className="
        sticky
        top-0
        h-screen
        flex
        flex-col
        justify-center
        relative
        overflow-hidden
      "
      style={{
        background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%)'
      }}
    >
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-48 h-48 border-t-2 border-l-2 border-amber-600/20"></div>
      <div className="absolute top-0 right-0 w-48 h-48 border-t-2 border-r-2 border-amber-600/20"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 border-b-2 border-l-2 border-amber-600/20"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 border-b-2 border-r-2 border-amber-600/20"></div>

      {/* Top decorative elements */}
      <div className="absolute top-16 left-10 lg:left-16 flex items-center gap-4">
        <div 
          className="w-24 h-px"
          style={{
            background: 'linear-gradient(90deg, #f5ca5d 0%, transparent 100%)'
          }}
        ></div>
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-400" />
          <Star className="w-4 h-4 text-amber-400" />
        </div>
      </div>

      {/* HEADING SECTION */}
      <div className="px-10 lg:px-16 mb-8 relative z-10">
        <div className="flex items-center gap-4 mb-3">
          <Sparkles 
            className="w-8 h-8 text-amber-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.4)]" 
          />
          
          <h2 className="
            relative
            inline-block
            text-5xl
            md:text-7xl
            font-bold
            tracking-tight
            text-white
          "
          style={{
            textShadow: '0 4px 20px rgba(255, 255, 255, 0.2)'
          }}>
            Venue Services
          </h2>

          <Star 
            className="w-8 h-8 text-amber-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.4)]" 
          />
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl text-amber-300/80 font-light tracking-wide mb-3 ml-2"
          style={{
            textShadow: '0 0 8px rgba(245, 158, 11, 0.2)'
          }}
        >
          Premium services crafted for unforgettable experiences
        </motion.p>
      </div>

      {/* CAROUSEL WRAPPER */}
      <div className="relative overflow-hidden px-4">
        {/* CAROUSEL */}
        <div className="relative overflow-hidden py-8">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 35,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex gap-8 px-4 will-change-transform"
          >
            {infiniteServices.map((service, index) => (
              <div key={`${service.id}-${index}`} className="relative group">
                {/* Card glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-600/0 via-amber-500/0 to-amber-400/0 rounded-2xl opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500"></div>
                <ServiceCard {...service} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesCarousel;