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
      className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-t-[160px] rounded-b-none w-full"
      onClick={() => onSelect(venue.id)}
    >
      {/* Image Container */}
      <div className="relative h-full w-full">
        <Image
          src={venue.image}
          alt={venue.name}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl font-bold mb-3 font-cinzel">
          {venue.name}
        </h3>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-300" />
            <p className="text-sm">{venue.location}</p>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-amber-300" />
            <p className="text-sm">{venue.capacity}</p>
          </div>
        </div>
        
        {/* Simple border accent */}
        <div className="mt-4 h-px w-12 bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
      </div>
      
      {/* Simple gold border */}
      <div className="absolute inset-0 border-1 border-amber-400 rounded-t-[160px] rounded-b-none pointer-events-none"></div>
    </div>
  );
};