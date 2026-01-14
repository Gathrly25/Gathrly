import { getVenuesArray } from "../lib/venues/venues.data";
import { VenueCard } from "./VenueCard";

interface Props {
  onSelect: (id: number) => void;
}

export const VenuesGrid = ({ onSelect }: Props) => {
  const venuesArray = getVenuesArray();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-8 md:px-12 lg:px-16">
      {venuesArray.map((venue) => (
        <VenueCard key={venue.id} venue={venue} onSelect={onSelect} />
      ))}
    </div>
  );
};