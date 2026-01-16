import { motion } from "framer-motion";
import { ArrowRight, MapPin, Users } from "lucide-react";

interface Props {
  venue: any;
  onExplore: () => void;
}

export const VenueModalContent = ({ venue, onExplore }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center p-2 md:p-5 text-center">
      <motion.h2
        layoutId={`title-${venue.id}`}
        className="text-xl font-bold text-stone-900 md:text-2xl"
      >
        {venue.name}
      </motion.h2>

      <motion.div
        layoutId={`meta-${venue.id}`}
        className="mt-2 flex flex-col items-center gap-1.5 text-xs text-stone-500 md:text-sm"
      >
        <span className="flex items-center gap-2">
          <MapPin className="h-3 w-3 text-amber-600" />
          {venue.location}
        </span>
        <span className="flex items-center gap-2">
          <Users className="h-3 w-3 text-amber-600" />
          {venue.capacity}
        </span>
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        onClick={onExplore}
        className="mt-6 flex items-center justify-center gap-2 rounded-full bg-black px-4 py-2.5 text-xs text-white transition-transform hover:scale-105 active:scale-95 md:text-sm"
      >
        Explore Venue <ArrowRight className="h-3 w-3" />
      </motion.button>
    </div>
  );
};