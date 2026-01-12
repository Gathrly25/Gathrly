import { getVenuesArray } from "../lib/venues/venues.data";
import { VenueCard } from "./VenueCard";

interface Props {
  onSelect: (id: number) => void;
}

export const VenuesGrid = ({ onSelect }: Props) => {
  const venuesArray = getVenuesArray();

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {venuesArray.map((venue) => (
        <VenueCard key={venue.id} venue={venue} onSelect={onSelect} />
      ))}
    </div>
  );
};