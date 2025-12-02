"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Lenis from "@studio-freight/lenis";
import { ZoomParallax } from "./zoom-parallax";

export default function ZoomParallaxWrapper() {
  React.useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const images = [
    {
      src: "/parallex-image/loft1.jpeg",
      alt: "Lofte image 1",
    },
    {
      src: "/parallex-image/loft2.jpeg",
      alt: "Lofte image 2",
    },
    {
      src: "/parallex-image/loft3.jpeg",
      alt: "Lofte Image 3",
    },
    {
      src: "/parallex-image/vvh1.jpg",
      alt: "VVH1 Image",
    },
    {
      src: "/parallex-image/vvh2.jpg",
      alt: "VVH2 Image",
    },
    {
      src: "/parallex-image/vvh3.jpg",
      alt: "VVH3 Image",
    },
    {
      src: "/parallex-image/vvh4.jpg",
      alt: "VVH4 Image",
    },
  ];

  return (
    <main className="min-h-screen w-full">
      <div className="relative flex h-[50vh] items-center justify-center">
        {/* Radial spotlight */}
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[100vmin] -translate-x-1/2 rounded-full",
            "bg-[radial-gradient(ellipse_at_center,--theme(--color-foreground/.1),transparent_50%)]",
            "blur-[30px]"
          )}
        />
        <div className="w-full md:w-[70%]">

          <h1 className="text-center text-white text-[90px] md:text-[140px] leading-[80px] md:leading-[110px] font-extrabold font-cinzel">
            QUICK GLANCE TO MAGIC
          </h1>
        </div>
      </div>
      <ZoomParallax images={images} />
      <div className="h-[5vh]" />
    </main>
  );
}
