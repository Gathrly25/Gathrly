"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Users, Mail, Phone, Check, ArrowRight, Loader2 } from "lucide-react";
import { cn } from "../lib/utils";

export const BookingForm = () => {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center rounded-3xl bg-white p-12 text-center shadow-xl border border-stone-100"
            >
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <Check className="h-10 w-10" />
                </div>
                <h3 className="mb-2 text-3xl font-bold text-stone-900">Request Sent!</h3>
                <p className="text-stone-500 max-w-md">
                    Thank you for your interest. Our events team will review your request and get back to you within 24 hours.
                </p>
                <button
                    onClick={() => {
                        setIsSuccess(false);
                        setStep(1);
                    }}
                    className="mt-8 rounded-full bg-black px-8 py-3 font-bold text-white transition-transform hover:scale-105"
                >
                    Send Another Request
                </button>
            </motion.div>
        );
    }

    return (
        <div className="rounded-3xl bg-white p-8 shadow-xl border border-stone-100 md:p-12">
            <div className="mb-8">
                <h3 className="text-3xl font-bold text-stone-900">Start Planning</h3>
                <p className="text-stone-500">Tell us about your dream event.</p>

                {/* Progress Bar */}
                <div className="mt-6 flex gap-2">
                    {[1, 2, 3].map((s) => (
                        <div
                            key={s}
                            className={cn(
                                "h-1 flex-1 rounded-full transition-colors duration-500",
                                step >= s ? "bg-black" : "bg-stone-200"
                            )}
                        />
                    ))}
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wider text-stone-500">Event Type</label>
                                <select className="w-full rounded-xl border border-stone-200 bg-stone-50 p-4 text-lg font-medium outline-none focus:border-black focus:ring-1 focus:ring-black">
                                    <option>Wedding Ceremony & Reception</option>
                                    <option>Corporate Event</option>
                                    <option>Social Gathering</option>
                                    <option>Photo/Video Shoot</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-wider text-stone-500">Guest Count</label>
                                    <div className="relative">
                                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400" />
                                        <input
                                            type="number"
                                            placeholder="150"
                                            className="w-full rounded-xl border border-stone-200 bg-stone-50 p-4 pl-12 text-lg font-medium outline-none focus:border-black focus:ring-1 focus:ring-black"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-wider text-stone-500">Date</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400" />
                                        <input
                                            type="date"
                                            className="w-full rounded-xl border border-stone-200 bg-stone-50 p-4 pl-12 text-lg font-medium outline-none focus:border-black focus:ring-1 focus:ring-black"
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={() => setStep(2)}
                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-black py-4 font-bold text-white transition-transform hover:scale-[1.02]"
                            >
                                Next Step <ArrowRight className="h-4 w-4" />
                            </button>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wider text-stone-500">Your Name</label>
                                <input
                                    type="text"
                                    placeholder="Jane Doe"
                                    className="w-full rounded-xl border border-stone-200 bg-stone-50 p-4 text-lg font-medium outline-none focus:border-black focus:ring-1 focus:ring-black"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-wider text-stone-500">Email</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400" />
                                        <input
                                            type="email"
                                            placeholder="jane@example.com"
                                            className="w-full rounded-xl border border-stone-200 bg-stone-50 p-4 pl-12 text-lg font-medium outline-none focus:border-black focus:ring-1 focus:ring-black"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-wider text-stone-500">Phone</label>
                                    <div className="relative">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400" />
                                        <input
                                            type="tel"
                                            placeholder="(555) 123-4567"
                                            className="w-full rounded-xl border border-stone-200 bg-stone-50 p-4 pl-12 text-lg font-medium outline-none focus:border-black focus:ring-1 focus:ring-black"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <button
                                    type="button"
                                    onClick={() => setStep(1)}
                                    className="flex-1 rounded-xl border border-stone-200 py-4 font-bold text-stone-600 transition-colors hover:bg-stone-50"
                                >
                                    Back
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setStep(3)}
                                    className="flex-[2] flex items-center justify-center gap-2 rounded-xl bg-black py-4 font-bold text-white transition-transform hover:scale-[1.02]"
                                >
                                    Next Step <ArrowRight className="h-4 w-4" />
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <div className="space-y-2">
                                <label className="text-sm font-bold uppercase tracking-wider text-stone-500">Additional Details</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us more about your vision, specific requirements, or questions..."
                                    className="w-full rounded-xl border border-stone-200 bg-stone-50 p-4 text-lg font-medium outline-none focus:border-black focus:ring-1 focus:ring-black resize-none"
                                />
                            </div>

                            <div className="flex gap-4">
                                <button
                                    type="button"
                                    onClick={() => setStep(2)}
                                    className="flex-1 rounded-xl border border-stone-200 py-4 font-bold text-stone-600 transition-colors hover:bg-stone-50"
                                >
                                    Back
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex-[2] flex items-center justify-center gap-2 rounded-xl bg-black py-4 font-bold text-white transition-transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                                        </>
                                    ) : (
                                        "Submit Request"
                                    )}
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </form>
        </div>
    );
};
