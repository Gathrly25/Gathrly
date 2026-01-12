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
    image: "/images/service1.jpg",
  },
  {
    id: 2,
    title: "Lighting & Visuals",
    slug: "lighting-visuals",
    description: "Cinematic lighting that elevates every moment.",
    longDescription:
      "We design cinematic lighting and visual systems that enhance emotion and atmosphere.",
    image: "/images/service2.jpg",
  },
  {
    id: 3,
    title: "Sound Engineering",
    slug: "sound-engineering",
    description: "Crystal-clear audio experiences.",
    longDescription:
        "Our sound engineering service ensures crystal-clear audio experiences tailored to your event's needs.",
    image: "/images/service3.jpg",
  },
  {
    id: 4,
    title: "Stage Production",
    slug: "stage-production",
    description: "High-impact staging and production systems.",
    longDescription:
      "We provide high-impact staging and production systems that captivate audiences.",
    image: "/images/service4.jpg",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
