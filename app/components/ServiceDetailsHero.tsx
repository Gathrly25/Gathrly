"use client";

import { Service } from "@/app/lib/services/services";
import { Star, Check } from "lucide-react";

interface Props {
  service: Service;
}

const ServiceDetailsHero = ({ service }: Props) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        {/* Simple overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-20 w-full px-4 md:px-8 lg:px-20">
        {/* Main Heading - Slightly Enhanced */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="text-sm uppercase tracking-widest text-amber-300 font-medium">
              Our Services
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">
              VENUE
            </span>
            <br />
            <span className="text-white">
              SERVICES
            </span>
          </h1>
          
          {/* Simple divider */}
          <div className="w-20 h-1 bg-amber-400 mx-auto" />
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column - Service Details */}
            <div className="space-y-8">
              {/* Enhanced Service Title */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-5 h-5 text-amber-400" />
                  <span className="text-sm text-amber-300 uppercase tracking-wide">Featured Service</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  {service.title}
                </h2>
              </div>

              {/* Enhanced Service Description */}
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-amber-400 to-transparent" />
                <p className="text-xl text-white/90 leading-relaxed pl-6 border-l-2 border-amber-400/30 py-2">
                  {service.description}
                </p>
              </div>
            </div>

            {/* Right Column - Simple Stats */}
            <div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-white mb-1">50+</div>
                  <div className="text-xs text-gray-300 uppercase">Venues</div>
                </div>
                <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-white mb-1">100%</div>
                  <div className="text-xs text-gray-300 uppercase">Satisfaction</div>
                </div>
                <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-white mb-1">5★</div>
                  <div className="text-xs text-gray-300 uppercase">Rating</div>
                </div>
                <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-white mb-1">10K+</div>
                  <div className="text-xs text-gray-300 uppercase">Events</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsHero;