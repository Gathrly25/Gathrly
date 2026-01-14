// app/components/VenueVideoSection.tsx
"use client";

import { VideoShowcase } from "@/app/components/video-showcase";
import { motion } from "framer-motion";
import { Video, Sparkles, Star } from "lucide-react";

interface Props {
  venue: {
    videoUrl?: string;
  };
}

export const VenueVideoSection = ({ venue }: Props) => {
  if (!venue.videoUrl) return null;

  return (
    <section className="py-20 mb-32 relative overflow-hidden bg-black">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top decorative elements */}
        <div className="flex justify-start items-center gap-4 mb-4">
          <div 
            className="w-48 h-1 rounded-full"
            style={{background: 'linear-gradient(90deg, #f5ca5d 0%, transparent 100%)'}}
          ></div>
          <Video className="w-6 h-6 text-amber-400" />
          <Sparkles className="w-6 h-6 text-amber-400" />
          <Star className="w-5 h-5 text-amber-400" />
        </div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left my-8 text-4xl md:text-6xl leading-tight font-extrabold text-white font-cinzel"
        >
          VIDEO SHOWCASE
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-left text-sm font-semibold uppercase tracking-widest text-amber-400 mb-8"
        >
          Experience the Magic in Motion
        </motion.p>
        
        {/* Bottom decorative elements */}
        <div className="flex justify-start items-center gap-4 mt-4 mb-8">
          <Star className="w-5 h-5 text-amber-400" />
          <Sparkles className="w-6 h-6 text-amber-400" />
          <Video className="w-6 h-6 text-amber-400" />
          <div 
            className="w-48 h-1 rounded-full"
            style={{background: 'linear-gradient(90deg, transparent 0%, #f5ca5d 100%)'}}
          ></div>
        </div>
        
        {/* Video Showcase Component */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-2xl overflow-hidden border border-amber-800/30 shadow-2xl shadow-amber-900/10 hover:shadow-amber-900/20 transition-shadow duration-500"
        >
          <VideoShowcase
            videoUrl={venue.videoUrl}
            title="Cinematic Venue Tour"
            description="See the magic come alive"
          />
        </motion.div>
        
        {/* Bottom separator section */}
        <div className="flex justify-center items-center gap-12 mt-16">
          <div 
            className="w-32 h-px"
            style={{background: 'linear-gradient(90deg, transparent 0%, #f5ca5d 50%, transparent 100%)'}}
          ></div>
          <div className="flex items-center gap-3">
            <Star className="w-5 h-5 text-amber-400" />
            <Sparkles className="w-5 h-5 text-amber-400" />
            <Star className="w-5 h-5 text-amber-400" />
          </div>
          <div 
            className="w-32 h-px"
            style={{background: 'linear-gradient(90deg, transparent 0%, #f5ca5d 50%, transparent 100%)'}}
          ></div>
        </div>
      </div>
    </section>
  );
};