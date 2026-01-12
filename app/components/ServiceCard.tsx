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
        relative min-w-[340px] h-[420px]
        rounded-2xl overflow-hidden
        border border-white/10 bg-black
        cursor-pointer group
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

      {/* <div className="absolute inset-0 bg-black/50" /> */}

      {/* CONTENT */}
      <div className="relative z-10 h-full p-8 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-4 text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>

        <span className="text-sm uppercase tracking-widest text-amber-400">
          View Service →
        </span>
      </div>
    </motion.div>
  );
};

export default ServiceCard;