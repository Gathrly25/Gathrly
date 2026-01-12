"use client";

import Image from "next/image";
import {
  MapPin,
  Users,
  Star,
  Coffee,
  Utensils,
  ChefHat,
  Music,
  Volume,
  Headphones,
  Camera,
  Video,
  Film,
  Sparkles,
} from "lucide-react";
import { eventServices } from "../lib/services/servicePackages";
import { AddToCartButton } from "./AddToCartButton";
import { formatPrice } from "../lib/utils/format";

// Map string icon name to actual imported icon
const iconMap: Record<string, any> = {
  MapPin,
  Users,
  Star,
  Coffee,
  Utensils,
  ChefHat,
  Music,
  Volume,
  Headphones,
  Camera,
  Video,
  Film,
};

const EventServices = () => {
  return (
    <section className="relative py-12 text-white overflow-hidden bg-black">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              VENUE SERVICES
            </h1>
            <Sparkles className="w-5 h-5 text-amber-400" />
          </div>
          <p className="text-base text-amber-200/80 max-w-xl mx-auto">
            Premium wedding & event packages
          </p>
        </div>

        {/* Services Section - Changed to 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {eventServices.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col md:flex-row items-stretch rounded-lg overflow-hidden bg-amber-50/10`}
            >
              {/* Image Section - Left side with white border */}
              <div className="md:w-1/3 relative h-43 md:h-auto overflow-hidden border-2 border-white m-4 rounded-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              {/* Content Section - Right side */}
              <div className="md:w-2/3 p-5 flex flex-col">
                {/* Package Title - Centered */}
                <div className="mb-4 text-center">
                  <h3 className="text-xl font-bold text-amber-300 mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-amber-100/70">
                    {service.description}
                  </p>
                </div>

                {/* Services List - Grid layout 2x2 */}
                <div className="mb-2 flex-1">
                  <div className="grid grid-cols-2 gap-3">
                    {service.services.slice(0, 4).map((item, idx) => {
                      const Icon = iconMap[item.icon];
                      return (
                        <div key={idx} className="flex items-center gap-2">
                          {Icon && <Icon className="h-4 w-4 text-amber-400 flex-shrink-0" />}
                          <span className="text-xs text-white">
                            {item.text}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  {service.services.length > 4 && (
                    <div className="text-xs text-amber-400/70 text-center pt-2">
                      +{service.services.length - 4} more services
                    </div>
                  )}
                </div>

                {/* Bottom Section with Price */}
                <div className="pt-3 border-t border-gray-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-bold text-amber-300">{formatPrice(service.price)}</p>
                      <p className="text-xs text-amber-200/60">Complete Package</p>
                    </div>
                    <AddToCartButton
                      item={{
                        id: `service-${service.id}`,
                        name: service.title,
                        type: 'service' as const,
                        price: service.price,
                        image: service.image,
                      }}
                      variant="primary"
                      className="px-4 py-1.5 text-xs bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-10 max-w-3xl mx-auto">
          <div className="bg-amber-50/10 p-4 rounded-lg">
            <h3 className="text-center text-base font-bold text-amber-300 mb-3">
              All Packages Include:
            </h3>
            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col items-center gap-1.5">
                <Users className="h-4 w-4 text-amber-400" />
                <span className="text-xs text-amber-100/90 text-center">Coordinator</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <Star className="h-4 w-4 text-amber-400" />
                <span className="text-xs text-amber-100/90 text-center">Premium</span>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <Headphones className="h-4 w-4 text-amber-400" />
                <span className="text-xs text-amber-100/90 text-center">Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventServices;