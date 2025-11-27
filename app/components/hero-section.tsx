"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";
import { cn } from "../lib/utils";

interface MinimalistHeroProps {
  logoText: string;
  navLinks: { label: string; href: string }[];
  mainText: string;
  readMoreLink: string;
  imageSrc: string;
  imageSources?: string[]; // Kept for compatibility but we'll focus on the main hero image/video
  imageAlt: string;
  overlayText: {
    part1: string;
    part2: string;
  };
  socialLinks: any[]; // Simplified for now
  locationText: string;
}

export const MinimalistHero = ({
  logoText,
  navLinks,
  mainText,
  imageSrc,
  overlayText,
}: MinimalistHeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-stone-950 text-stone-100"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src={imageSrc}
          alt="Hero Background"
          className="h-full w-full object-cover scale-110"
        />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-20 flex h-full flex-col justify-between px-6 py-8 md:px-12 md:py-12 max-w-[1800px] mx-auto">
        {/* Header */}
        <motion.header
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between"
        >
          <span className="text-xl font-bold tracking-tight">{logoText}</span>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-sm font-medium uppercase tracking-widest opacity-70 hover:opacity-100 transition-opacity"
              >
                {link.label}
              </a>
            ))}
            <button className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-black hover:bg-stone-200 transition-colors">
              Book Now
            </button>
          </nav>
        </motion.header>

        {/* Main Hero Content */}
        <div className="flex flex-col md:flex-row items-end md:items-center justify-between gap-12">
          {/* Left: Description */}
          <div className="max-w-md space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex items-center gap-4"
            >
              <button className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 backdrop-blur-sm hover:bg-white hover:text-black transition-all group">
                <Play className="h-4 w-4 fill-current" />
              </button>
              <span className="text-sm font-medium tracking-wide opacity-80">
                Watch Showreel
              </span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg leading-relaxed text-stone-300"
            >
              {mainText}
            </motion.p>
          </div>

          {/* Right: Big Typography */}
          <div className="text-right">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2,
                }}
                className="text-[12vw] leading-[0.85] font-bold tracking-tighter uppercase"
              >
                {overlayText.part1}
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.3,
                }}
                className="text-[12vw] leading-[0.85] font-bold tracking-tighter uppercase text-transparent stroke-text"
                style={{ WebkitTextStroke: "2px white" }}
              >
                {overlayText.part2}
              </motion.h1>
            </div>
          </div>
        </div>

        {/* Footer / Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex items-center justify-between border-t border-white/20 pt-6"
        >
          <span className="text-xs uppercase tracking-widest opacity-60">
            Scroll to explore
          </span>
          <ArrowDown className="h-5 w-5 animate-bounce opacity-60" />
        </motion.div>
      </div>
    </div>
  );
};
