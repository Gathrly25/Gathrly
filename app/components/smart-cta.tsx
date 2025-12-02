"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

export const SmartCTA = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const x = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

    return (
        <section
            ref={containerRef}
            className="relative overflow-hidden bg-stone-950 py-32 text-white"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    style={{ rotate }}
                    className="absolute -top-1/2 -right-1/2 h-[1000px] w-[1000px] rounded-full border border-white/5 opacity-20"
                />
                <motion.div
                    style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, -45]) }}
                    className="absolute -bottom-1/2 -left-1/2 h-[800px] w-[800px] rounded-full border border-white/5 opacity-20"
                />
            </div>

            <div className="container relative z-10 mx-auto flex flex-col items-center justify-center text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-md"
                >
                    <Star className="h-4 w-4 text-amber-400 fill-current" />
                    <span className="text-amber-100">Ready to create magic?</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="mb-12 max-w-4xl text-5xl font-bold leading-tight md:text-7xl"
                >
                    Let's turn your vision into <br />
                    <span className="text-stone-500">unforgettable reality.</span>
                </motion.h2>

                <motion.div
                    style={{ scale }}
                    className="relative group"
                >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500 to-purple-600 blur-2xl opacity-50 transition-opacity group-hover:opacity-80" />
                    <button className="relative flex items-center gap-4 rounded-full bg-white px-12 py-6 text-xl font-bold text-black transition-transform hover:scale-105 active:scale-95">
                        Book This Venue <ArrowRight className="h-6 w-6" />
                    </button>
                </motion.div>
            </div>

            {/* Scrolling Marquee Text */}
            <div className="absolute bottom-10 left-0 w-full overflow-hidden opacity-10 pointer-events-none">
                <motion.div style={{ x }} className="flex whitespace-nowrap text-9xl font-bold uppercase">
                    <span>Weddings • Corporate • Galas • Social • </span>
                    <span>Weddings • Corporate • Galas • Social • </span>
                </motion.div>
            </div>
        </section>
    );
};
