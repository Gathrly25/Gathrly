"use client";

import { motion } from "framer-motion";
import ServicesCarousel from "./ServicesCarousel";

const ServicesSection = () => {
  return (
    <section className="relative bg-black text-white">
      <ServicesCarousel />
    </section>
  );
};

export default ServicesSection;