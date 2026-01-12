"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: "🎯",
      title: "Flexible Scheduling",
      description: "Plan your event on your preferred date with our customizable scheduling options.",
    },
    {
      icon: "👥",
      title: "Guest Experience",
      description: "Create unforgettable memories for your guests with our premium event services.",
    },
    {
      icon: "⭐",
      title: "Premium Quality",
      description: "Experience luxury and excellence with our high-end event planning services.",
    },
    {
      icon: "🎶",
      title: "Entertainment",
      description: "Complete entertainment packages to make your event lively and memorable.",
    }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/aboutImg.jpg"
          alt="Event Planning Background"
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
        {/* Simple dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        {/* Top Heading - White text as requested */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
            WONDERFULFEELINGS
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Creating magical moments and unforgettable experiences for your special events
          </p>
        </div>

        {/* Features Grid - Transparent blocks with white text */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              {/* Large Icon */}
              <div className="text-5xl mb-4 text-center">{feature.icon}</div>
              
              {/* Text Content - White text */}
              <h3 className="text-xl font-bold text-white mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-white/80 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="relative max-w-2xl mx-auto">
          <div className="p-8 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
            {/* Main Heading - White text */}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let&apos;s Plan Your Event
              </h2>
              <p className="text-lg text-white/80 mx-auto">
                Start your journey towards creating an unforgettable event experience with our expert team
              </p>
            </div>

            {/* Booking Button */}
            <div className="text-center">
              <Link
                href="/booking"
                className="group inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition-all duration-300"
              >
                <span>Start Planning Now</span>
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;