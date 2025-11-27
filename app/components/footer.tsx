"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-black py-24 text-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col justify-between gap-12 md:flex-row">
                    {/* Left: Branding & CTA */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold tracking-tighter">Gathrly.</h2>
                            <p className="mt-4 max-w-xs text-stone-400">
                                Curating exceptional spaces for your most memorable moments.
                            </p>
                        </div>

                        <div className="mt-12 md:mt-0">
                            <span className="block text-sm uppercase tracking-widest text-stone-500">
                                Get in touch
                            </span>
                            <a
                                href="mailto:hello@gathrly.com"
                                className="mt-2 block text-3xl font-bold transition-colors hover:text-stone-300 md:text-5xl"
                            >
                                hello@gathrly.com
                            </a>
                        </div>
                    </div>

                    {/* Right: Links */}
                    <div className="grid grid-cols-2 gap-12 md:gap-24">
                        <div>
                            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-stone-500">
                                Sitemap
                            </h3>
                            <ul className="space-y-4">
                                {["Venues", "Services", "About Us", "Contact"].map((item) => (
                                    <li key={item}>
                                        <a
                                            href="#"
                                            className="group flex items-center gap-2 text-lg text-stone-300 transition-colors hover:text-white"
                                        >
                                            {item}
                                            <ArrowUpRight className="h-4 w-4 opacity-0 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-stone-500">
                                Socials
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    { label: "Instagram", icon: Instagram },
                                    { label: "Twitter", icon: Twitter },
                                    { label: "LinkedIn", icon: Linkedin },
                                ].map((item) => (
                                    <li key={item.label}>
                                        <a
                                            href="#"
                                            className="flex items-center gap-3 text-lg text-stone-300 transition-colors hover:text-white"
                                        >
                                            <item.icon className="h-5 w-5" />
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-24 flex flex-col items-center justify-between border-t border-white/10 pt-8 text-sm text-stone-500 md:flex-row">
                    <p>© 2025 Gathrly Inc. All rights reserved.</p>
                    <div className="mt-4 flex gap-6 md:mt-0">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>

                {/* Big Text */}
                <div className="mt-24 overflow-hidden">
                    <motion.h1
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        className="text-[15vw] font-bold leading-none tracking-tighter text-white/10"
                    >
                        GATHRLY
                    </motion.h1>
                </div>
            </div>
        </footer>
    );
};
