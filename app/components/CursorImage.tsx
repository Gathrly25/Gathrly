"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const CursorImage = ({ src }: { src: string }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX + 20, y: e.clientY + 20 });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.img
      src={src}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.9,
        x: pos.x,
        y: pos.y,
      }}
      transition={{ duration: 0.25 }}
      className="fixed w-56 h-36 object-cover rounded-lg pointer-events-none z-50"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    />
  );
};
