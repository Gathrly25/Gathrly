"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
import {
    Sparkles,
    Utensils,
    Music,
    Camera,
    Wine,
    Flower2,
    ArrowRight,
} from "lucide-react";

const services = [
    {
        title: "Decor & Styling",
        description: "Bespoke floral arrangements and immersive thematic styling.",
        icon: Flower2,
        className: "md:col-span-2 md:row-span-2",
        image:
            "https://images.unsplash.com/photo-1530103862676-de3c9da59af7?q=80&w=2000&auto=format&fit=crop",
        color: "from-pink-500/20 to-purple-500/20",
    },
    {
        title: "Culinary Excellence",
        description: "Michelin-star inspired menus tailored to your palate.",
        icon: Utensils,
        className: "md:col-span-1 md:row-span-1",
        image:
            "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2000&auto=format&fit=crop",
        color: "from-orange-500/20 to-red-500/20",
    },
    {
        title: "Premium Bar",
        description: "Signature cocktails and rare vintage wine collections.",
        icon: Wine,
        className: "md:col-span-1 md:row-span-1",
        image:
            "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000&auto=format&fit=crop",
        color: "from-amber-500/20 to-yellow-500/20",
    },
    {
        title: "Live Entertainment",
        description: "Curated lineup of world-class DJs, bands, and performers.",
        icon: Music,
        className: "md:col-span-1 md:row-span-2",
        image:
            "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2000&auto=format&fit=crop",
        color: "from-blue-500/20 to-cyan-500/20",
    },
    {
        title: "Cinematography",
        description: "Capturing your moments with cinematic precision.",
        icon: Camera,
        className: "md:col-span-2 md:row-span-1",
        image:
            "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop",
        color: "from-emerald-500/20 to-teal-500/20",
    },
];

export const ServicesSection = () => {
    return (
        <section className="relative bg-stone-950 py-32 text-white overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px]" />
            </div>

            <div className="container relative mx-auto px-6 md:px-12 z-10">
                <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 mb-4"
                        >
                            <Sparkles className="w-5 h-5 text-amber-400" />
                            <span className="text-sm font-bold uppercase tracking-widest text-amber-400/80">
                                Premium Services
                            </span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold leading-tight"
                        >
                            Curated <span className="text-stone-500">Experiences</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-md text-lg text-stone-400 leading-relaxed"
                    >
                        Elevate your event with our comprehensive suite of premium services,
                        designed to create unforgettable moments.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 h-auto md:h-[800px]">
                    {services.map((service, i) => (
                        <ServiceCard key={i} service={service} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ServiceCard = ({ service, index }: { service: any; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={cn(
                "group relative overflow-hidden rounded-3xl bg-stone-900/50 border border-white/5 backdrop-blur-sm",
                service.className
            )}
        >
            {/* Background Image with Zoom Effect */}
            <div className="absolute inset-0 z-0">
                <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover opacity-40 transition-all duration-700 group-hover:scale-110 group-hover:opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-transparent" />

                {/* Dynamic Color Overlay on Hover */}
                <div
                    className={cn(
                        "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100 mix-blend-overlay",
                        service.color
                    )}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col justify-between p-8">
                <div className="flex justify-between items-start">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 transition-colors duration-300 group-hover:bg-white/10 group-hover:border-white/20">
                        <service.icon className="h-6 w-6 text-white" />
                    </div>

                    <div className="opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white text-black">
                            <ArrowRight className="h-4 w-4" />
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-100 transition-colors">
                        {service.title}
                    </h3>
                    <p className="text-stone-300 text-sm leading-relaxed max-w-[90%] group-hover:text-white transition-colors">
                        {service.description}
                    </p>
                </div>
            </div>

            {/* Glass Shine Effect */}
            <div className="absolute inset-0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none" />
        </motion.div>
    );
};
