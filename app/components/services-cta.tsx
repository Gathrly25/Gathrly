"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export const ServicesCTA = () => {
    return (
        <section className="relative overflow-hidden py-24">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-stone-50 to-amber-100" />

            {/* Animated Background Patterns */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/20 blur-3xl"
            />
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    rotate: [90, 0, 90],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-tr from-stone-400/20 to-stone-600/20 blur-3xl"
            />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-6"
                >

                    <h2 className="mb-6 text-5xl font-bold text-stone-900 md:text-6xl">
                        Transform Your Vision
                        <br />
                        <span className="bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                            Into Reality
                        </span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-stone-600">
                        From world-class catering to stunning floral arrangements and professional event planning, discover our curated collection of premium services designed to elevate your event.
                    </p>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative overflow-hidden rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-12 py-6 text-lg font-bold text-white shadow-2xl transition-all duration-300 hover:shadow-amber-500/50"
                    >
                        {/* Shine effect */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{
                                x: ["-200%", "200%"],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />

                        <span className="relative flex items-center gap-3">
                            Explore Our Services
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <ArrowRight className="h-6 w-6" />
                            </motion.span>
                        </span>

                        {/* Glow effect */}
                        <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-70" />
                    </motion.button>
                </motion.div>

                {/* Decorative elements */}
                <div className="mt-12 flex items-center justify-center gap-8 text-sm text-stone-600">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center gap-2"
                    >
                        <div className="h-2 w-2 rounded-full bg-amber-500" />
                        Expert Vendors
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center gap-2"
                    >
                        <div className="h-2 w-2 rounded-full bg-amber-500" />
                        Custom Packages
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="flex items-center gap-2"
                    >
                        <div className="h-2 w-2 rounded-full bg-amber-500" />
                        Seamless Coordination
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
