"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";

interface MinimalistHeroProps {
    logoText: string;
    navLinks: { label: string; href: string }[];
    mainText: string;
    readMoreLink: string;
    imageSrc: string;
    imageSources?: string[];
    imageAlt: string;
    overlayText: {
        part1: string;
        part2: string;
    };
    socialLinks: any[];
    locationText: string;
}

export const MinimalistHero = ({
    logoText,
    navLinks,
    mainText,
    imageSrc,
    overlayText,
}: MinimalistHeroProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    const handleNavClick = (href: string) => {
        if (href === "#venues") {
            const venuesSection = document.getElementById("venues-section");
            if (venuesSection) {
                venuesSection.scrollIntoView({ behavior: "smooth" });
            }
        } else if (href === "#services") {
            const servicesSection = document.getElementById("services-section");
            if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    const handleBookNow = (venue?: string) => {
        // You can implement the booking logic here based on the venue
        console.log("Booking for:", venue || "general");
        // For now, just close the dropdown
        setIsDropdownOpen(false);
    };

    return (
        <div
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden bg-stone-950 text-stone-100"
        >
            {/* Background Image with Parallax */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-black/20 z-10" />
                <img
                    src={imageSrc}
                    alt="Hero Background"
                    className="h-full w-full object-cover scale-110"
                />
            </motion.div>

            {/* Content Container */}
            <div className="relative z-20 flex h-full flex-col justify-between px-6 py-8 md:px-12 md:py-12 max-w-[1800px] mx-auto">
                {/* Header */}
                <motion.header
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center justify-between"
                >
                    <span className="text-xl font-bold tracking-tight">{logoText}</span>
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link, i) => (
                            <button
                                key={i}
                                onClick={() => handleNavClick(link.href)}
                                className="text-sm font-medium uppercase tracking-widest opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                            >
                                {link.label}
                            </button>
                        ))}
                        {/* Book Now Button with Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                onMouseEnter={() => setIsDropdownOpen(true)}
                                onMouseLeave={() => setIsDropdownOpen(false)}
                                className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-black hover:bg-stone-200 transition-colors flex items-center gap-2"
                            >
                                Book Now
                                <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                            
                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <div 
                                    className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50"
                                    onMouseEnter={() => setIsDropdownOpen(true)}
                                    onMouseLeave={() => setIsDropdownOpen(false)}
                                >
                                    <div className="py-1">
                                        <button
                                            onClick={() => handleBookNow("Lofte 23")}
                                            className="block w-full text-left px-4 py-2 text-md text-amber-300 hover:bg-gray-100 hover:text-gray-900"
                                        >
                                            Lofte 23
                                        </button>
                                        <button
                                            onClick={() => handleBookNow("Billionaire Row")}
                                            className="block w-full text-left px-4 py-2 text-md text-amber-300 hover:bg-gray-100 hover:text-gray-900"
                                        >
                                            Billionaire Row
                                        </button>
                                        <button
                                            onClick={() => handleBookNow("Velvet hour")}
                                            className="block w-full text-left px-4 py-2 text-md text-amber-300 hover:bg-gray-100 hover:text-gray-900"
                                        >
                                            Velvet hour
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </nav>
                </motion.header>

                {/* Main Hero Content */}
                <div className="flex flex-col md:flex-row items-end md:items-center justify-between gap-12">
                    {/* Left: Description */}
                    <div className="max-w-md space-y-6">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-lg leading-relaxed text-stone-300"
                        >
                            {mainText}
                        </motion.p>
                    </div>

                    {/* Right: Big Typography */}
                    <div className="text-right">
                        <div className="overflow-hidden">
                            <motion.h1
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{
                                    duration: 1,
                                    ease: [0.16, 1, 0.3, 1],
                                    delay: 0.2,
                                }}
                                className="text-[12vw] leading-[0.85] font-bold tracking-tighter uppercase font-cinzel"
                            >
                                {overlayText.part1}
                            </motion.h1>
                        </div>
                        <div className="overflow-hidden">
                            <motion.h1
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{
                                    duration: 1,
                                    ease: [0.16, 1, 0.3, 1],
                                    delay: 0.3,
                                }}
                                className="text-[12vw] leading-[0.85] font-bold tracking-tighter uppercase text-transparent stroke-text font-cinzel"
                                style={{ WebkitTextStroke: "3px white" }}
                            >
                                {overlayText.part2}
                            </motion.h1>
                        </div>
                    </div>
                </div>

                {/* Footer / Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="flex items-center justify-between border-t border-white/20 pt-6"
                >
                    <span className="text-xs uppercase tracking-widest opacity-60">
                        Scroll to explore
                    </span>
                    <ArrowDown className="h-5 w-5 animate-bounce opacity-60" />
                </motion.div>
            </div>
        </div>
    );
};