// app/lib/venues/venues.types.ts
export interface Venue {
  id?: number;
  slug: string;
  name: string;
  tagline?: string;
  location: string;
  capacity: string;
  price?: string;
  description: string;
  heroImage?: string;
  amenities?: string[];
  images?: Array<{
    src: string;
    alt: string;
  }>;
  videoUrl?: string;
  matterportUrl?: string;
  ghlLink?: string;
}