"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
    {
        question: "How far in advance should I book?",
        answer:
            "We recommend booking at least 6-12 months in advance for peak seasons (summer and holidays). However, we do accommodate last-minute inquiries based on availability.",
    },
    {
        question: "Can I bring my own vendors?",
        answer:
            "Yes! While we have a curated list of preferred partners who know our spaces intimately, you are welcome to bring your own licensed and insured vendors.",
    },
    {
        question: "Is there a deposit required?",
        answer:
            "Yes, a 50% non-refundable deposit is required to secure your date. The remaining balance is due 30 days prior to the event.",
    },
    {
        question: "Do you offer parking?",
        answer:
            "All our venues have dedicated parking options, ranging from on-site lots to valet services. Specific details vary by location.",
    },
];

export const FAQSection = () => {
    return (
        <section className="bg-stone-50 py-24 text-black">
            <div className="container mx-auto max-w-3xl px-6 md:px-12">
                <div className="mb-16 text-center">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-stone-500">
                        Common Questions
                    </h2>
                    <h3 className="mt-4 text-4xl font-bold md:text-5xl">
                        Everything you need to know.
                    </h3>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <AccordionItem key={i} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const AccordionItem = ({
    question,
    answer,
}: {
    question: string;
    answer: string;
}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-stone-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-stone-600"
            >
                <span className="text-xl font-medium">{question}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <Plus className="h-6 w-6" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-lg leading-relaxed text-stone-600">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
