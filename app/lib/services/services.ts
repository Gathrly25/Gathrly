// app/lib/services.ts
export interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  longDescription?: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Event Design",
    slug: "event-design",
    description: "Immersive environments crafted with precision.",
    longDescription:
      "Our event design service focuses on creating immersive, memorable environments that align perfectly with your vision.",
    image: "/images/service1.webp",
  },
  {
    id: 2,
    title: "Lighting & Visuals",
    slug: "lighting-visuals",
    description: "Cinematic lighting that elevates every moment.",
    longDescription:
      "We design cinematic lighting and visual systems that enhance emotion and atmosphere.",
    image: "/images/service2.webp",
  },
  {
    id: 3,
    title: "Food & Catering",
    slug: "food-catering",
    description: "Delicious cuisine tailored to your event.",
    longDescription:
        "Our culinary team creates delicious, tailored menus for every event.",
    image: "/images/service3.webp",
  },
  {
    id: 4,
    title: "Stage Production",
    slug: "stage-production",
    description: "High-impact staging and production systems.",
    longDescription:
      "We provide high-impact staging and production systems that captivate audiences.",
    image: "/images/service4.webp",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
