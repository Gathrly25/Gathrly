"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { cn } from "../lib/utils";

interface VenueGalleryProps {
    images: {
        src: string;
        alt: string;
    }[];
}

export const VenueGallery = ({ images }: VenueGalleryProps) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;

            if (e.key === "Escape") {
                setSelectedIndex(null);
            } else if (e.key === "ArrowLeft") {
                setSelectedIndex((prev) =>
                    prev === null ? null : prev === 0 ? images.length - 1 : prev - 1
                );
            } else if (e.key === "ArrowRight") {
                setSelectedIndex((prev) =>
                    prev === null ? null : (prev + 1) % images.length
                );
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedIndex, images.length]);

    // Prevent body scroll when lightbox is open
    useEffect(() => {
        if (selectedIndex !== null) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [selectedIndex]);

    const handlePrevious = () => {
        setSelectedIndex((prev) =>
            prev === null ? null : prev === 0 ? images.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setSelectedIndex((prev) =>
            prev === null ? null : (prev + 1) % images.length
        );
    };

    return (
        <div className="w-full py-12">
            {/* Simple Grid Layout */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
                {images.map((image, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="group relative aspect-square cursor-pointer overflow-hidden rounded-[4px] bg-stone-200"
                        onClick={() => setSelectedIndex(i)}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />

                        {/* Hover Icon */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">
                                <Maximize2 className="h-6 w-6 text-white" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Glassy Carousel Modal */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 md:p-12"
                        onClick={() => setSelectedIndex(null)}
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative flex h-full max-h-[85vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedIndex(null)}
                                className="absolute top-4 right-4 z-20 rounded-full bg-black/20 p-2 text-white/70 backdrop-blur-md transition-colors hover:bg-black/40 hover:text-white"
                            >
                                <X className="h-6 w-6" />
                            </button>

                            {/* Main Image Area */}
                            <div className="relative flex-1 overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={selectedIndex}
                                        src={images[selectedIndex].src}
                                        alt={images[selectedIndex].alt}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="h-full w-full object-contain p-4 md:p-8"
                                    />
                                </AnimatePresence>

                                {/* Navigation Buttons */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handlePrevious();
                                    }}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/20 p-3 text-white/70 backdrop-blur-md transition-all hover:bg-black/40 hover:scale-110 hover:text-white"
                                >
                                    <ChevronLeft className="h-6 w-6" />
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleNext();
                                    }}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/20 p-3 text-white/70 backdrop-blur-md transition-all hover:bg-black/40 hover:scale-110 hover:text-white"
                                >
                                    <ChevronRight className="h-6 w-6" />
                                </button>
                            </div>

                            {/* Footer / Caption */}
                            <div className="border-t border-white/10 bg-black/20 p-6 backdrop-blur-md">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">
                                            {images[selectedIndex].alt}
                                        </h3>
                                        <p className="text-sm text-white/60">
                                            Image {selectedIndex + 1} of {images.length}
                                        </p>
                                    </div>

                                    {/* Thumbnails (Desktop only) */}
                                    <div className="hidden gap-2 md:flex">
                                        {images.map((img, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setSelectedIndex(i)}
                                                className={cn(
                                                    "h-12 w-12 overflow-hidden rounded-lg border-2 transition-all",
                                                    i === selectedIndex
                                                        ? "border-amber-500 opacity-100"
                                                        : "border-transparent opacity-50 hover:opacity-80"
                                                )}
                                            >
                                                <img
                                                    src={img.src}
                                                    alt={img.alt}
                                                    className="h-full w-full object-cover"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
