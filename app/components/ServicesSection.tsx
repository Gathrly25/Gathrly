"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ServicesHero from "./ServicesHero";
import ServicesCarousel from "./ServicesCarousel";

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[300vh] bg-black text-white"
    >
      <ServicesHero progress={scrollYProgress} />
      <ServicesCarousel progress={scrollYProgress} />
    </section>
  );
};

export default ServicesSection;