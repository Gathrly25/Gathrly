"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";

interface Props {
  progress: MotionValue<number>;
}

const ServicesHero = ({ progress }: Props) => {
  /* VIDEO */
  const videoX = useTransform(progress, [0.15, 0.45], ["-50%", "1%"]);
  const videoScale = useTransform(progress, [0, 0.45], [1, 0.8]);
  const videoWidth = useTransform(progress, [0, 0.45], ["100vw", "52%"]);
  const videoRadius = useTransform(progress, [0.2, 0.45], ["0px", "24px"]);

  /* TEXT */
  const textOpacity = useTransform(progress, [0.25, 0.45], [0, 1]);
  const textY = useTransform(progress, [0.25, 0.45], [40, 0]);

  /* HERO EXIT */
  const heroOpacity = useTransform(progress, [0.6, 0.75], [1, 0]);

  return (
    <motion.section
      style={{ opacity: heroOpacity }}
      className="sticky top-0 h-screen w-full overflow-hidden bg-black"
    >
      {/* VIDEO */}
      <motion.div
        style={{
          width: videoWidth,
          scale: videoScale,
          borderRadius: videoRadius,
          x: videoX,
        }}
        className="
          absolute
          top-1/2
          left-1/2
          -translate-y-1/2
          overflow-hidden
          shadow-[0_40px_120px_rgba(0,0,0,0.8)]
        "
      >
        <video
          src="/videos/service-flex.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[85vh] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
      </motion.div>

      {/* STATIC TEXT ON TOP OF VIDEO */}
      <div className="
        absolute
        top-1/2
        left-1/2
        transform
        -translate-x-1/2
        -translate-y-1/2
        z-50
        w-[52%]
        flex
        flex-col
        items-center
        justify-center
        text-center
        px-10
        lg:px-16
      ">
        <div className="space-y-8 w-full">
          {/* EYEBROW */}
          <div className="flex items-center justify-center gap-3">
            <Sparkles 
              className="w-6 h-6 text-amber-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.4)]" 
            />
            
            <span 
              className="
                text-sm 
                uppercase 
                tracking-[0.35em] 
                font-medium
                text-amber-300
                drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]
              "
            >
              Exclusive Services
            </span>
            
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-amber-500 to-transparent drop-shadow-[0_0_6px_rgba(245,158,11,0.2)]" />
          </div>

          {/* HEADING */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-center">
            <span className="block font-medium text-white drop-shadow-[0_0_12px_rgba(251,191,36,0.2)]">
              Curated
            </span>

            <span className="relative block mt-2">
              <span className="font-semibold tracking-tighter text-amber-300 drop-shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                Experiences
              </span>
              <div className="absolute left-0 -bottom-3 h-[1.5px] w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]" />
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-xl max-w-xl leading-relaxed tracking-wide font-light text-amber-200 drop-shadow-[0_0_4px_rgba(251,191,36,0.1)] mx-auto text-center">
            Elevate your vision with our{" "}
            <span className="font-medium text-amber-300 drop-shadow-[0_0_12px_rgba(245,158,11,0.3)]">
              meticulously crafted premium services
            </span>{" "}
            — engineered to deliver{" "}
            <span className="font-medium text-amber-100 drop-shadow-[0_0_10px_rgba(251,191,36,0.2)]">
              seamless excellence
            </span>{" "}
            while creating{" "}
            <span className="font-medium text-amber-400 drop-shadow-[0_0_15px_rgba(245,158,11,0.4)]">
              timeless memories
            </span>
            .
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesHero;