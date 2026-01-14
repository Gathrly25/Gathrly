// app/components/VenueAmenities.tsx
"use client";

import { motion } from "framer-motion";
import { 
  Check, Camera, Music, Coffee, Car, Trees, Wifi, Utensils,
  Lightbulb, Sparkles, Crown, Lock, Wine, Building2, Star
} from "lucide-react";

interface Props {
  venue: {
    amenities?: string[];
  };
}

// Helper function to get amenities with icons
const getAmenitiesWithIcons = (amenities: string[]) => {
  const iconMap: Record<string, { icon: React.ReactNode; description?: string }> = {
    "Rooftop Access": { icon: <Building2 className="h-6 w-6" />, description: "Stunning rooftop views" },
    "Bridal Suite": { icon: <Crown className="h-6 w-6" />, description: "Private preparation space" },
    "Valet Parking": { icon: <Car className="h-6 w-6" />, description: "Complimentary valet service" },
    "In-house AV": { icon: <Camera className="h-6 w-6" />, description: "Professional audio-visual equipment" },
    "Custom Lighting": { icon: <Lightbulb className="h-6 w-6" />, description: "Customizable lighting setup" },
    "Private Bar": { icon: <Wine className="h-6 w-6" />, description: "Exclusive bar access" },
    "Outdoor Terrace": { icon: <Trees className="h-6 w-6" />, description: "Beautiful outdoor space" },
    "DJ Booth": { icon: <Music className="h-6 w-6" />, description: "Professional DJ setup" },
    "VIP Entrance": { icon: <Lock className="h-6 w-6" />, description: "Exclusive entry point" },
    "Coat Check": { icon: <Check className="h-6 w-6" />, description: "Secure coat storage" },
    "Garden Access": { icon: <Trees className="h-6 w-6" />, description: "Manicured garden space" },
    "Ballroom": { icon: <Sparkles className="h-6 w-6" />, description: "Grand ballroom hall" },
    "Library Lounge": { icon: <Coffee className="h-6 w-6" />, description: "Cozy reading area" },
    "Butler Service": { icon: <Crown className="h-6 w-6" />, description: "White-glove service" },
    "Grand Piano": { icon: <Music className="h-6 w-6" />, description: "Steinway grand piano" },
    "WiFi": { icon: <Wifi className="h-6 w-6" />, description: "High-speed internet" },
    "Catering": { icon: <Utensils className="h-6 w-6" />, description: "Full catering services" },
  };

  return amenities.map((amenity) => ({
    name: amenity,
    icon: iconMap[amenity]?.icon || <Check className="h-6 w-6" />,
    description: iconMap[amenity]?.description,
  }));
};

export const VenueAmenities = ({ venue }: Props) => {
  if (!venue.amenities?.length) return null;

  const amenitiesWithIcons = getAmenitiesWithIcons(venue.amenities);

  return (
    <section className="py-16 relative overflow-hidden bg-black">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top decorative elements */}
        <div className="flex justify-end items-center gap-4 mb-3">
          <div 
            className="w-32 h-1 rounded-full"
            style={{background: 'linear-gradient(90deg, transparent 0%, #f5ca5d 100%)'}}
          ></div>
          <Sparkles className="w-5 h-5 text-amber-400" />
          <Star className="w-4 h-4 text-amber-400" />
        </div>
        
        <h1 className="text-right my-6 text-4xl md:text-5xl font-bold text-white font-cinzel">
          AMENITIES & FEATURES
        </h1>
        
        {/* Bottom decorative elements */}
        <div className="flex justify-end items-center gap-4 mt-3">
          <Star className="w-4 h-4 text-amber-400" />
          <Sparkles className="w-5 h-5 text-amber-400" />
          <div 
            className="w-32 h-1 rounded-full"
            style={{background: 'linear-gradient(90deg, #f5ca5d 0%, transparent 100%)'}}
          ></div>
        </div>
        
        {/* Main grid section */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 my-12">
          {amenitiesWithIcons.map((amenity, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ scale: 1.02, y: -3 }}
              className="group relative overflow-hidden rounded-lg border border-amber-800/30 bg-gray-900/50 p-5 hover:shadow-lg hover:shadow-amber-900/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                {/* Icon with golden accent */}
                <div className="flex-shrink-0 p-3 rounded-lg bg-amber-900/20 border border-amber-800/30 group-hover:border-amber-600/50 transition-all duration-300">
                  <div className="text-amber-400 group-hover:text-amber-300 transition-colors">
                    {amenity.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-amber-100 text-base group-hover:text-amber-50 transition-colors">
                    {amenity.name}
                  </h3>
                  {amenity.description && (
                    <p className="mt-1 text-sm text-amber-200/80 group-hover:text-amber-200 transition-colors">
                      {amenity.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom separator section */}
        {/* <div className="flex justify-center items-center gap-8 mt-16">
          <div 
            className="w-24 h-px"
            style={{background: 'linear-gradient(90deg, transparent 0%, #f5ca5d 50%, transparent 100%)'}}
          ></div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-amber-400" />
            <Sparkles className="w-4 h-4 text-amber-400" />
            <Star className="w-4 h-4 text-amber-400" />
          </div>
          <div 
            className="w-24 h-px"
            style={{background: 'linear-gradient(90deg, transparent 0%, #f5ca5d 50%, transparent 100%)'}}
          ></div>
        </div> */}
      </div>
    </section>
  );
};