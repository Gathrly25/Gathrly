import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { VenueModalContent } from "./VenueModalContent";
import Image from "next/image";
import { getVenuesArray } from "../lib/venues/venues.data";

interface Props {
  selectedId: number | null;
  onClose: () => void;
  onExplore: (slug: string) => void;
}

export const VenueModal = ({ selectedId, onClose, onExplore }: Props) => {
  const venuesArray = getVenuesArray();
  const venue = venuesArray.find((v) => v.id === selectedId);
  
  if (!venue) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center px-6 sm:px-6 md:px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        <motion.div
          layoutId={`card-${venue.id}`}
          className="relative w-full max-w-md overflow-hidden rounded-xl bg-white shadow-xl"
        >
          <button
            onClick={onClose}
            className="absolute right-3 top-3 z-20 rounded-full bg-black/40 p-1.5 text-white backdrop-blur-sm hover:bg-black/60"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Image as background */}
          <div className="relative h-[300px] w-full overflow-hidden md:h-[350px]">
            <Image
              src={venue.image}
              alt={venue.name}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 40vw, 100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* Text box overlay */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mx-3 w-11/12 max-w-xs rounded-xl bg-white/95 backdrop-blur-sm shadow-lg mb-4">
              <VenueModalContent
                venue={venue}
                onExplore={() => onExplore(venue.slug)}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};