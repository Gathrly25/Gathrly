"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Explore Venues",
        description:
            "Browse our curated collection of exclusive spaces. Filter by capacity, location, and vibe to find your perfect match.",
    },
    {
        number: "02",
        title: "Customize Package",
        description:
            "Select from our premium add-ons including decor, catering, and entertainment. Tailor every detail to your vision.",
    },
    {
        number: "03",
        title: "Book & Celebrate",
        description:
            "Secure your date with a simple deposit. Our team handles the logistics so you can focus on making memories.",
    },
];

export const ProcessSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section ref={containerRef} className="bg-white py-32 text-black">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-24 text-center">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-stone-500">
                        How It Works
                    </h2>
                    <h3 className="mt-4 text-5xl font-bold md:text-6xl">
                        Seamless from start to finish.
                    </h3>
                </div>

                <div className="relative mx-auto max-w-4xl">
                    {/* Vertical Line */}
                    <div className="absolute left-[20px] top-0 h-full w-[2px] bg-stone-200 md:left-1/2 md:-translate-x-1/2" />
                    <motion.div
                        style={{ height: lineHeight }}
                        className="absolute left-[20px] top-0 w-[2px] bg-black md:left-1/2 md:-translate-x-1/2"
                    />

                    <div className="space-y-24">
                        {steps.map((step, i) => (
                            <div
                                key={i}
                                className={`flex flex-col gap-8 md:flex-row ${i % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Content */}
                                <div className="flex-1 pt-4 md:pt-0">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className={`flex flex-col ${i % 2 === 0 ? "md:items-start md:text-left" : "md:items-end md:text-right"
                                            } pl-12 md:pl-0`}
                                    >
                                        <span className="text-6xl font-bold text-stone-200">
                                            {step.number}
                                        </span>
                                        <h4 className="mt-2 text-3xl font-bold">{step.title}</h4>
                                        <p className="mt-4 max-w-sm text-lg text-stone-600">
                                            {step.description}
                                        </p>
                                    </motion.div>
                                </div>

                                {/* Center Dot */}
                                <div className="relative flex w-[40px] justify-center">
                                    <div className="sticky top-1/2 h-4 w-4 rounded-full bg-black ring-4 ring-white" />
                                </div>

                                {/* Empty Space for layout balance */}
                                <div className="hidden flex-1 md:block" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
