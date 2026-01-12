"use client";

import Image from "next/image";
import { Heart, Volume2, Flower, Sparkles, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function ServiceAbout() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 px-4 sm:px-6 lg:px-8 text-white overflow-hidden bg-black"
    >
      {/* Background decorative elements - FIXED */}
      <div className="absolute top-15 left-4 md:left-14 z-0">
        <Sparkles className="w-16 h-16 text-amber-500/30" />
      </div>
      <div className="absolute top-24 right-4 md:right-20 z-0">
        <Star className="w-14 h-14 text-amber-500/30" />
      </div>
      <div className="absolute bottom-32 left-8 md:left-12 z-0">
        <Star className="w-12 h-12 text-amber-500/30" />
      </div>
      <div className="absolute bottom-16 right-8 md:right-16 z-0">
        <Sparkles className="w-14 h-14 text-amber-500/30" />
      </div>
      <div className="absolute top-1/5 left-1/4 z-0">
        <Star className="w-12 h-12 text-amber-500/30" />
      </div>
      <div className="absolute top-1/3 right-1/3 z-0">
        <Sparkles className="w-14 h-14 text-amber-500/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className={`mb-12 text-center transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            SERVICE OVERVIEW
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-amber-300/80 font-light max-w-2xl mx-auto">
            Where sophistication meets exceptional experience
          </p>
        </div>

        {/* GRID */}
        <div className={`grid grid-cols-1 gap-8 md:grid-cols-3 transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* ROW 1 - TEXT */}
          <TextBlock
            icon={<Flower className="w-8 h-8" />}
            text="Located in the heart of the city, the space offers a refined atmosphere designed to elevate every celebration. From intimate gatherings to grand events, our venue provides the perfect backdrop for your special moments."
          />

          {/* ROW 1 - IMAGE */}
          <ImageBlock src="/images/service1.jpg" />

          {/* ROW 1 - TEXT */}
          <TextBlock
            icon={<Heart className="w-8 h-8" />}
            text="Thoughtfully curated interiors ensure comfort, elegance, and a memorable experience for every guest. With a blend of contemporary design and timeless elegance."
          />

          {/* ROW 2 - IMAGE */}
          <ImageBlock src="/images/service2.jpg" />

          {/* ROW 2 - TEXT */}
          <TextBlock
            icon={<Volume2 className="w-8 h-8" />}
            text="Balanced acoustics and ambient lighting create the perfect mood for intimate or grand occasions. Experience unparalleled service in an environment crafted for distinction."
          />

          {/* ROW 2 - IMAGE */}
          <ImageBlock src="/images/service3.jpg" />
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- */
/* TEXT BLOCK */
/* ---------------------------------- */
function TextBlock({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center p-6 text-center h-[280px] bg-black/50 rounded-lg border border-amber-400/20">
      {/* Icon Container */}
      <div className="mb-4 text-amber-400">
        {icon}
      </div>

      {/* Text */}
      <p className="text-base leading-relaxed text-white/90">
        {text}
      </p>
    </div>
  );
}

/* ---------------------------------- */
/* IMAGE BLOCK */
/* ---------------------------------- */
function ImageBlock({ src }: { src: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-[280px] overflow-hidden rounded-lg">
      <Image
        src={src}
        alt="Luxury service experience"
        fill
        className={`object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
        sizes="(max-width: 768px) 100vw, 33vw"
      />

      {/* Loading Placeholder */}
      {!loaded && (
        <div className="absolute inset-0 bg-gray-900/50 animate-pulse rounded-lg" />
      )}

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
    </div>
  );
}