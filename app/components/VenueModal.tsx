import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { VenueModalContent } from "./VenueModalContent";
import Image from "next/image";
import { getVenuesArray } from "../lib/venues/venues.data"; // Import the helper function

interface Props {
  selectedId: number | null;
  onClose: () => void;
  onExplore: (slug: string) => void;
}

export const VenueModal = ({ selectedId, onClose, onExplore }: Props) => {
  // Use the helper function to get venues as array
  const venuesArray = getVenuesArray();
  const venue = venuesArray.find((v) => v.id === selectedId);
  
  if (!venue) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        <motion.div
          layoutId={`card-${venue.id}`}
          className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute right-6 top-6 z-10 rounded-full bg-white/20 p-2 text-white backdrop-blur-md hover:bg-white hover:text-black"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-[300px] md:h-[600px]">
              <Image
                src={venue.image}
                alt={venue.name}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>

            <VenueModalContent
              venue={venue}
              onExplore={() => onExplore(venue.slug)}
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};