"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, MapPin, Users, Star, Calendar, Check, Wifi, Music, Camera, Car, Lightbulb, Coffee, Wine, Utensils, Building2, Trees, Sparkles, Crown, Lock } from "lucide-react";
import { cn } from "../../lib/utils";

import { VirtualTour } from "../../components/virtual-tour";


import { SmartCTA } from "../../components/smart-cta";
import { VenueGallery } from "@/app/components/venue-gallery";
import { ServicesCTA } from "@/app/components/services-cta";
import { VideoShowcase } from "@/app/components/video-showcase";

// Venue Data (Mock Data for now, ideally fetched from an API or CMS)
const venuesData: Record<string, any> = {
    "lofte-23": {
        name: "Lofte 23",
        tagline: "Industrial Elegance Reimagined",
        location: "Downtown Arts District",
        capacity: "500 Guests",
        price: "$$$",
        description:
            "Lofte 23 is a raw, industrial masterpiece featuring exposed brick, soaring timber beams, and panoramic city views. The perfect canvas for bold, modern events. This space transforms seamlessly from a daylight-filled gallery to a moody, atmospheric evening venue.",
        heroImage:
            "https://res.cloudinary.com/dygfdmuri/image/upload/v1764709371/l3_p6ynio.webp",
        amenities: [
            "Rooftop Access",
            "Bridal Suite",
            "Valet Parking",
            "In-house AV",
            "Custom Lighting",
        ],
        matterportUrl: "https://my.matterport.com/show/?m=2qz8QpCrvgq",
        videoUrl: "/videos/lofte/lofte-video.mp4",
        images: [
            {
                src: "https://res.cloudinary.com/dygfdmuri/image/upload/v1764709363/l4_lcslh0.webp",
                alt: "Grand Hall Ceremony",
            },
            {
                src: "https://res.cloudinary.com/dygfdmuri/image/upload/v1764709362/l1_ytvfnp.webp",
                alt: "Rooftop Reception",
            },
            {
                src: "https://res.cloudinary.com/dygfdmuri/image/upload/v1764709365/l2_zmqxqy.webp",
                alt: "Table Setting",
            },
            {
                src: "https://res.cloudinary.com/dygfdmuri/image/upload/v1764709365/l16_m5iwou.webp",
                alt: "Stage Setup",
            },
            {
                src: "https://res.cloudinary.com/dygfdmuri/image/upload/v1764709366/l17_ockbsz.webp",
                alt: "Floral Arrangement",
            },
            {
                src: "https://res.cloudinary.com/dygfdmuri/image/upload/v1764709371/l3_p6ynio.webp",
                alt: "Evening Ambiance",
            },
            {
                src: "https://res.cloudinary.com/dygfdmuri/image/upload/v1764709375/l5_ooqgkg.webp",
                alt: "Luxury Details",
            },
            {
                src: "https://res.cloudinary.com/dygfdmuri/image/upload/v1764709383/l8_ye7lmb.webp",
                alt: "Luxury Details",
            },
            {
                src: "https://res.cloudinary.com/dygfdmuri/image/upload/v1764709385/l10_k7csif.webp",
                alt: "Luxury Details",
            },
            {
                src: "https://res.cloudinary.com/dygfdmuri/image/upload/v1764709389/l22_owbfbx.webp",
                alt: "Luxury Details",
            },
            {
                src: "/images/lofte-images/l12-min.jpg",
                alt: "Luxury Details",
            },
            {
                src: "https://res.cloudinary.com/dygfdmuri/image/upload/v1764709389/l20_k6rxfd.webp",
                alt: "Luxury Details",
            },
            {
                src: "https://res.cloudinary.com/dygfdmuri/image/upload/v1764709393/l11_tvkb69.webp",
                alt: "Luxury Details",
            },
            {
                src: "https://res.cloudinary.com/dygfdmuri/image/upload/v1764709397/l23_vy5850.webp",
                alt: "Luxury Details",
            },
            {
                src: "https://res.cloudinary.com/dygfdmuri/image/upload/v1764709397/l13_tmhyv9.webp",
                alt: "Luxury Details",
            },
            {
                src: "https://res.cloudinary.com/dygfdmuri/image/upload/v1764709406/l12_w458ci.webp",
                alt: "Luxury Details",
            },
            {
                src: "https://res.cloudinary.com/dygfdmuri/image/upload/v1764709408/l15_vizm5k.webp",
                alt: "Luxury Details",
            },
            {
                src: "https://res.cloudinary.com/dygfdmuri/image/upload/v1764709412/l6_w04hel.webp",
                alt: "Luxury Details",
            },
            // {
            //     src: "/images/lofte-images/l20-min.jpg",
            //     alt: "Luxury Details",
            // },
            // {
            //     src: "/images/lofte-images/l21-min.jpg",
            //     alt: "Luxury Details",
            // }
            // {
            //     src: "/images/lofte-images/l22-min.jpg",
            //     alt: "Luxury Details",
            // },
            // {
            //     src: "/images/lofte-images/l23-min.jpg",
            //     alt: "Luxury Details",
            // },
            // {
            //     src: "/images/lofte-images/l24-min.jpg",
            //     alt: "Luxury Details",
            // },
            // {
            //     src: "/images/lofte-images/l25-min.jpg",
            //     alt: "Luxury Details",
            // }
        ],
    },
    "velvet-hour": {
        name: "Velvet Hour",
        tagline: "Sophistication Above the City",
        location: "West Loop Rooftop",
        capacity: "250 Guests",
        price: "$$$$",
        description:
            "An ultra-chic rooftop lounge oozing sophistication. Floor-to-ceiling glass, plush velvet interiors, and a sunset view that steals the show. Velvet Hour is designed for intimate gatherings and high-profile social events where style is paramount.",
        heroImage:
            "https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=2100&auto=format&fit=crop",
        amenities: [
            "Private Bar",
            "Outdoor Terrace",
            "DJ Booth",
            "VIP Entrance",
            "Coat Check",
        ],
        images: [
            {
                src: "https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=2100&auto=format&fit=crop",
                alt: "Rooftop Lounge",
            },
            {
                src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
                alt: "Cocktail Bar",
            },
            {
                src: "https://images.unsplash.com/photo-1561489413-985b06da5bee?q=80&w=2070&auto=format&fit=crop",
                alt: "Sunset View",
            },
            {
                src: "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?q=80&w=1974&auto=format&fit=crop",
                alt: "VIP Seating",
            },
            {
                src: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1974&auto=format&fit=crop",
                alt: "Evening Atmosphere",
            },
            {
                src: "https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?q=80&w=2072&auto=format&fit=crop",
                alt: "Dance Floor",
            },
            {
                src: "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop",
                alt: "Private Terrace",
            },
            {
                src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop",
                alt: "Signature Drinks",
            },
        ],
    },
    "billionaire-row": {
        name: "Billionaire Row",
        tagline: "Timeless Opulence",
        location: "Gold Coast Mansion",
        capacity: "150 Guests",
        price: "$$$$$",
        description:
            "Opulence redefined. A historic mansion with manicured gardens, marble ballrooms, and an air of exclusivity that impresses every guest. Ideal for black-tie galas, luxury weddings, and executive retreats.",
        heroImage:
            "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2079&auto=format&fit=crop",
        amenities: [
            "Garden Access",
            "Ballroom",
            "Library Lounge",
            "Butler Service",
            "Grand Piano",
        ],
        images: [
            {
                src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2079&auto=format&fit=crop",
                alt: "Grand Ballroom",
            },
            {
                src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop",
                alt: "Mansion Exterior",
            },
            {
                src: "https://images.unsplash.com/photo-1507643179173-617aa8769db4?q=80&w=2056&auto=format&fit=crop",
                alt: "Library Lounge",
            },
            {
                src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",
                alt: "Garden Ceremony",
            },
            {
                src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
                alt: "Formal Dining",
            },
            {
                src: "https://images.unsplash.com/photo-1520342868574-5fa3804e551c?q=80&w=2069&auto=format&fit=crop",
                alt: "Entrance Hall",
            },
            {
                src: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=2070&auto=format&fit=crop",
                alt: "Evening Reception",
            },
            {
                src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
                alt: "Luxury Details",
            },
        ],
    },
};

// Helper function to get amenities with icons
const getAmenitiesWithIcons = (amenities: string[]) => {
    const iconMap: Record<string, { icon: React.ReactNode; description?: string }> = {
        "Rooftop Access": { icon: <Building2 className="h-6 w-6" />, description: "Stunning rooftop views" },
        "Bridal Suite": { icon: <Crown className="h-6 w-6" />, description: "Private preparation space" },
        "Valet Parking": { icon: <Car className="h-6 w-6" />, description: "Complimentary valet service" },
        "In-house AV": { icon: <Camera className="h-6 w-6" />, description: "Professional audio-visual equipment" },
        "Custom Lighting": { icon: <Lightbulb className="h-6 w-6" />, description: "Customizable lighting setup" },
        "Private Bar": { icon: <Wine className="h-6 w-6" />, description: "Exclusive bar access" },
        "Outdoor Terrace": { icon: <Trees className="h-6 w-6" />, description: "Beautiful outdoor space" },
        "DJ Booth": { icon: <Music className="h-6 w-6" />, description: "Professional DJ setup" },
        "VIP Entrance": { icon: <Lock className="h-6 w-6" />, description: "Exclusive entry point" },
        "Coat Check": { icon: <Check className="h-6 w-6" />, description: "Secure coat storage" },
        "Garden Access": { icon: <Trees className="h-6 w-6" />, description: "Manicured garden space" },
        "Ballroom": { icon: <Sparkles className="h-6 w-6" />, description: "Grand ballroom hall" },
        "Library Lounge": { icon: <Coffee className="h-6 w-6" />, description: "Cozy reading area" },
        "Butler Service": { icon: <Crown className="h-6 w-6" />, description: "White-glove service" },
        "Grand Piano": { icon: <Music className="h-6 w-6" />, description: "Steinway grand piano" },
        "WiFi": { icon: <Wifi className="h-6 w-6" />, description: "High-speed internet" },
        "Catering": { icon: <Utensils className="h-6 w-6" />, description: "Full catering services" },
    };

    return amenities.map((amenity) => ({
        name: amenity,
        icon: iconMap[amenity]?.icon || <Check className="h-6 w-6" />,
        description: iconMap[amenity]?.description,
    }));
};

export default function VenueDetailPage() {
    const params = useParams();
    const router = useRouter();
    const slug = params.slug as string;
    const venue = venuesData[slug];
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    if (!venue) {
        return (
            <div className="flex h-screen items-center justify-center bg-stone-950 text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Venue Not Found</h1>
                    <button
                        onClick={() => router.push("/")}
                        className="mt-4 text-amber-400 hover:underline"
                    >
                        Return Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-stone-50 text-stone-900">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-colors duration-300 bg-gradient-to-b from-black/50 to-transparent">
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20"
                >
                    <ArrowLeft className="h-4 w-4" /> Back
                </button>
                <button className="rounded-full bg-amber-500 px-6 py-2 text-sm font-bold text-black transition-transform hover:scale-105">
                    Book Now
                </button>
            </nav>

            {/* Hero Section */}
            <header className="relative h-screen overflow-hidden">
                <motion.div style={{ y }} className="absolute inset-0 z-0">
                    <img
                        src={venue.heroImage}
                        alt={venue.name}
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
                </motion.div>

                <motion.div
                    style={{ opacity }}
                    className="relative z-10 flex h-full flex-col justify-end px-6 pb-24 md:px-12"
                >
                    <div className="container mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mb-4 flex items-center gap-2 text-amber-400"
                        >
                            <Star className="h-5 w-5 fill-current" />
                            <span className="text-sm font-bold uppercase tracking-widest">
                                {venue.tagline}
                            </span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-6xl font-bold text-white md:text-8xl"
                        >
                            {venue.name}
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mt-6 flex flex-wrap items-center gap-6 text-lg text-stone-300"
                        >
                            <span className="flex items-center gap-2">
                                <MapPin className="h-5 w-5" /> {venue.location}
                            </span>
                            <span className="flex items-center gap-2">
                                <Users className="h-5 w-5" /> {venue.capacity}
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="font-bold text-amber-400">{venue.price}</span>{" "}
                                Price Tier
                            </span>
                        </motion.div>
                    </div>
                </motion.div>
            </header>

            {/* Content Container */}
            <div className="container mx-auto px-6 py-24 md:px-12">
                <div className="mx-auto max-w-5xl">
                    <section className="mb-16 text-center">
                        <div className="w-full">

                            <h1 className="text-left text-gray-600 text-[90px] md:text-[120px] leading-[80px] md:leading-[110px] font-extrabold ">
                                ABOUT THE VENUE
                            </h1>
                        </div>

                        <p className="text-xl my-6 text-left leading-relaxed text-stone-600">
                            {venue.description}
                        </p>
                    </section>

                    <section className="mb-24">
                        <div className="w-full">

                            <h1 className="text-right my-8 text-gray-600 text-[90px] md:text-[120px] leading-[80px] md:leading-[110px] font-extrabold ">
                                AMENITIES & FEATURES
                            </h1>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 my-8 ">
                            {getAmenitiesWithIcons(venue.amenities).map((amenity, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.05 }}
                                    whileHover={{ scale: 1.02, y: -4 }}
                                    className=" group relative overflow-hidden rounded-[4px] border border-stone-200 bg-[#FFB900] p-6 shadow-sm transition-shadow hover:shadow-lg"
                                >
                                    <div className="flex items-start gap-4 ">
                                        {/* <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-white shadow-md transition-transform group-hover:scale-110">
                                            {amenity.icon}
                                        </div> */}
                                        <div>
                                            <h3 className="font-semibold text-stone-900">
                                                {amenity.name}
                                            </h3>
                                            {amenity.description && (
                                                <p className="mt-1 text-sm text-stone-600">
                                                    {amenity.description}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    {/* Decorative gradient overlay */}
                                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-50/0 to-amber-50/50 opacity-0 transition-opacity group-hover:opacity-100" />
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Gallery Section */}
                    <section className="mb-32">
                        <div className="w-full">

                            <h1 className="text-left my-8 text-gray-600 text-[90px] md:text-[120px] leading-[80px] md:leading-[110px] font-extrabold ">
                                IMMERSIVE GALLERY
                            </h1>
                        </div>
                        <VenueGallery images={venue.images} />
                    </section>

                    {/* Virtual Tour Section */}
                    <section className="mb-32">
                        <div className="w-full flex justify-end">
                            <div className="w-[80%]">
                                <h1 className="text-right my-8 text-gray-600 text-[90px] md:text-[120px] leading-[80px] md:leading-[110px] font-extrabold ">
                                    VIRTUAL TOUR
                                </h1>
                            </div>
                        </div>
                        <VirtualTour matterportUrl={venue.matterportUrl} />
                    </section>

                    {/* Video Showcase Section */}
                    {venue.videoUrl && (
                        <section className="mb-32">
                            <div className="w-full">
                                <h1 className="text-left my-8 text-gray-600 text-[90px] md:text-[120px] leading-[80px] md:leading-[110px] font-extrabold">
                                    VIDEO SHOWCASE
                                </h1>
                            </div>
                            <VideoShowcase
                                videoUrl={venue.videoUrl}
                                title="Cinematic Venue Tour"
                                description="See the magic come alive"
                            />
                        </section>
                    )}

                    {/* Services CTA Section */}
                    <ServicesCTA />
                </div>
            </div>

            {/* Smart CTA Section */}
            <SmartCTA />
        </main>
    );
}
