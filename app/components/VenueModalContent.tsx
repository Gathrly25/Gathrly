import { motion } from "framer-motion";
import { ArrowRight, MapPin, Users } from "lucide-react";

interface Props {
  venue: any;
  onExplore: () => void;
}

export const VenueModalContent = ({ venue, onExplore }: Props) => {
  return (
    <div className="flex flex-col justify-center p-8 md:p-12">
      <motion.h2
        layoutId={`title-${venue.id}`}
        className="text-4xl font-bold text-stone-900 md:text-5xl"
      >
        {venue.name}
      </motion.h2>

      <motion.div
        layoutId={`meta-${venue.id}`}
        className="mt-4 flex flex-col gap-3 text-stone-500"
      >
        <span className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-amber-600" />
          {venue.location}
        </span>
        <span className="flex items-center gap-2">
          <Users className="h-5 w-5 text-amber-600" />
          {venue.capacity}
        </span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-8 text-lg leading-relaxed text-stone-600"
      >
        {venue.description}
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        onClick={onExplore}
        className="mt-10 flex w-fit items-center gap-2 rounded-full bg-black px-8 py-4 text-white transition-transform hover:scale-105 active:scale-95"
      >
        Explore Venue <ArrowRight className="h-4 w-4" />
      </motion.button>
    </div>
  );
};
