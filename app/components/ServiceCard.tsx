"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface Props {
  title: string;
  description: string;
  image: string;
  slug: string;
}

const ServiceCard = ({ title, description, image, slug }: Props) => {
  const router = useRouter();

  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      onClick={() => router.push(`/services/${slug}`)}
      className="
        relative w-[250px] h-[360px]
        sm:w-[280px] sm:h-[380px]
        md:w-[300px] md:h-[400px]
        lg:w-[320px] lg:h-[420px]
        rounded-2xl overflow-hidden
        border border-white/10 bg-black
        cursor-pointer group
        flex-shrink-0
      "
    >
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="
          absolute inset-0 w-full h-full object-cover
          scale-105 group-hover:scale-110
          transition-transform duration-700
        "
      />
      <div className="absolute inset-0 bg-black20" />

      {/* CONTENT */}
      <div className="relative z-10 h-full p-6 sm:p-7 lg:p-8 flex flex-col justify-between">
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold">{title}</h3>
          <p className="mt-3 sm:mt-4 text-amber-400 leading-relaxed text-sm sm:text-base">
            {description}
          </p>
        </div>

        <span className="text-xs sm:text-sm uppercase tracking-widest text-amber-400 font-cinzel font-bold">
          View Service →
        </span>
      </div>
    </motion.div>
  );
};

export default ServiceCard;