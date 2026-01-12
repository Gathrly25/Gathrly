// // app/venues/[slug]/venue.utils.ts
// import {
//   Check, Camera, Music, Coffee, Car, Trees, Wifi, Utensils,
//   Lightbulb, Sparkles, Crown, Lock, Wine, Building2
// } from "lucide-react";
// import React from "react";

// export const getAmenitiesWithIcons = (amenities: string[]) => {
//   const iconMap: Record<string, { icon: React.ReactNode; description?: string }> = {
//     "Rooftop Access": { icon: <Building2 className="h-6 w-6" />, description: "Stunning rooftop views" },
//     "Bridal Suite": { icon: <Crown className="h-6 w-6" />, description: "Private preparation space" },
//     "Valet Parking": { icon: <Car className="h-6 w-6" />, description: "Complimentary valet service" },
//     "In-house AV": { icon: <Camera className="h-6 w-6" />, description: "Professional audio-visual equipment" },
//     "Custom Lighting": { icon: <Lightbulb className="h-6 w-6" />, description: "Customizable lighting setup" },
//     "Private Bar": { icon: <Wine className="h-6 w-6" />, description: "Exclusive bar access" },
//     "Outdoor Terrace": { icon: <Trees className="h-6 w-6" />, description: "Beautiful outdoor space" },
//     "DJ Booth": { icon: <Music className="h-6 w-6" />, description: "Professional DJ setup" },
//     "VIP Entrance": { icon: <Lock className="h-6 w-6" />, description: "Exclusive entry point" },
//     "Coat Check": { icon: <Check className="h-6 w-6" />, description: "Secure coat storage" },
//     "Garden Access": { icon: <Trees className="h-6 w-6" />, description: "Manicured garden space" },
//     "Ballroom": { icon: <Sparkles className="h-6 w-6" />, description: "Grand ballroom hall" },
//     "Library Lounge": { icon: <Coffee className="h-6 w-6" />, description: "Cozy reading area" },
//     "Butler Service": { icon: <Crown className="h-6 w-6" />, description: "White-glove service" },
//     "Grand Piano": { icon: <Music className="h-6 w-6" />, description: "Steinway grand piano" },
//     "WiFi": { icon: <Wifi className="h-6 w-6" />, description: "High-speed internet" },
//     "Catering": { icon: <Utensils className="h-6 w-6" />, description: "Full catering services" },
//   };

//   return amenities.map((amenity) => ({
//     name: amenity,
//     icon: iconMap[amenity]?.icon || <Check className="h-6 w-6" />,
//     description: iconMap[amenity]?.description,
//   }));
// };
