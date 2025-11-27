"use client";
import React, { useRef } from "react";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";
import { cn } from "../lib/utils";
import { Sparkles, Utensils, Music, Camera, Wine, Flower2 } from "lucide-react";

const services = [
    {
        title: "Decor & Styling",
        description: "From balloon arches to floral masterpieces, we transform spaces.",
        icon: Flower2,
        className: "md:col-span-2 md:row-span-2",
        image: "https://images.unsplash.com/photo-1530103862676-de3c9da59af7?q=80&w=2000&auto=format&fit=crop",
    },
    {
        title: "Catering Coordination",
        description: "Partnering with top-tier chefs for exquisite dining.",
        icon: Utensils,
        className: "md:col-span-1 md:row-span-1",
        image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2000&auto=format&fit=crop",
    },
    {
        title: "Bar Services",
        description: "Craft cocktails and premium wine selections.",
        icon: Wine,
        className: "md:col-span-1 md:row-span-1",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000&auto=format&fit=crop",
    },
    {
        title: "Entertainment",
        description: "DJs, live bands, and performers to keep the vibe alive.",
        icon: Music,
        className: "md:col-span-1 md:row-span-2",
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2000&auto=format&fit=crop",
    },
    {
        title: "Photography",
        description: "Capture every moment with our professional partners.",
        icon: Camera,
        className: "md:col-span-2 md:row-span-1",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop",
    },
];

export const ServicesSection = () => {
    return (
        <section className="bg-stone-950 py-24 text-white perspective-1000">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-16 max-w-2xl">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-stone-500">
                        Enhance Your Event
                    </h2>
                    <h3 className="mt-4 text-5xl font-bold leading-tight md:text-6xl">
                        Everything you need, <br />
                        <span className="text-stone-400">all in one place.</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:grid-rows-3 h-[1200px] md:h-[800px]">
                    {services.map((service, i) => (
                        <TiltCard key={i} className={service.className}>
                            <div className="relative h-full w-full">
                                {/* Background Image with Parallax Depth */}
                                <div
                                    className="absolute inset-0 z-0 transition-transform duration-500"
                                    style={{ transform: "translateZ(-50px) scale(1.2)" }}
                                >
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="h-full w-full object-cover opacity-60 transition-opacity duration-500 group-hover:opacity-40"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                                </div>

                                {/* Content Floating Above */}
                                <div
                                    className="relative z-10 flex h-full flex-col justify-end p-8"
                                    style={{ transform: "translateZ(50px)" }}
                                >
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                                        <service.icon className="h-6 w-6" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-white drop-shadow-lg">
                                        {service.title}
                                    </h4>
                                    <p className="mt-2 max-w-xs text-sm text-stone-200 drop-shadow-md">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ROTATION_RANGE = 20; // Degrees
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const TiltCard = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const ySpring = useSpring(y, { stiffness: 300, damping: 30 });

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform,
            }}
            className={cn(
                "group relative overflow-hidden rounded-3xl bg-stone-900 border border-white/10",
                className
            )}
        >
            {/* Glossy Glare Effect */}
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-4 grid place-content-center rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none z-20"
            >
                <div className="bg-gradient-to-br from-white/20 to-transparent p-24 blur-3xl" />
            </div>

            {children}
        </motion.div>
    );
};
