"use client";
import React from "react";
import { motion } from "framer-motion";

export const Marquee = () => {
    return (
        <div className="relative flex w-full overflow-hidden bg-yellow-400 py-4 text-black">
            <div className="flex whitespace-nowrap">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex whitespace-nowrap"
                >
                    <MarqueeContent />
                    <MarqueeContent />
                    <MarqueeContent />
                    <MarqueeContent />
                </motion.div>
            </div>
        </div>
    );
};

const MarqueeContent = () => (
    <>
        <span className="mx-8 text-4xl font-bold uppercase tracking-tighter">
            Unforgettable Moments
        </span>
        <span className="mx-8 text-4xl font-bold uppercase tracking-tighter">
            •
        </span>
        <span className="mx-8 text-4xl font-bold uppercase tracking-tighter">
            Premium Venues
        </span>
        <span className="mx-8 text-4xl font-bold uppercase tracking-tighter">
            •
        </span>
        <span className="mx-8 text-4xl font-bold uppercase tracking-tighter">
            Expert Planning
        </span>
        <span className="mx-8 text-4xl font-bold uppercase tracking-tighter">
            •
        </span>
        <span className="mx-8 text-4xl font-bold uppercase tracking-tighter">
            Seamless Experiences
        </span>
        <span className="mx-8 text-4xl font-bold uppercase tracking-tighter">
            •
        </span>
    </>
);
