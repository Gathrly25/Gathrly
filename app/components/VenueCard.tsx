// app/components/VenueCard.tsx (simplified version)
import Image from "next/image";
import { MapPin, Users } from "lucide-react";

interface Props {
  venue: {
    id: number;
    name: string;
    image: string;
    slug: string;
    location: string;
    capacity: string;
    price?: number; 
  };
  onSelect: (id: number) => void;
}

export const VenueCard = ({ venue, onSelect }: Props) => {
  return (
    <div 
      className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-t-[180px] rounded-b-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
      onClick={() => onSelect(venue.id)}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
      
      {/* Amber border effect */}
      <div className="absolute inset-0 border-2 border-amber-400/60 rounded-t-[180px] rounded-b-none z-20 pointer-events-none"></div>
      
      {/* Amber corner accents */}
      <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-amber-300/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none"></div>
      <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-amber-300/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none"></div>
      
      <div className="relative h-full w-full">
        <Image
          src={venue.image}
          alt={venue.name}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      {/* Card info with enhanced styling */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
        <h3 className="text-2xl font-bold mb-3 group-hover:text-amber-200 transition-colors duration-300">
          {venue.name}
        </h3>
        
        {/* Location and capacity with icons */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-300" />
            <p className="text-sm text-white">{venue.location}</p>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-amber-300" />
            <p className="text-sm text-white">{venue.capacity}</p>
          </div>
        </div>
        
        {/* Hover indicator - amber */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-amber-300 to-amber-200/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  );
};