"use client";
import React, { useRef, useState } from "react";
import { Maximize2, Minimize2 } from "lucide-react";
import { cn } from "../lib/utils";

interface VirtualTourProps {
    matterportUrl?: string;
}

export const VirtualTour = ({ matterportUrl }: VirtualTourProps) => {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            containerRef.current?.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    // If no Matterport URL is provided, show a placeholder
    if (!matterportUrl) {
        return (
            <div className="relative overflow-hidden rounded-3xl bg-stone-900 shadow-2xl h-[600px] w-full flex items-center justify-center">
                <p className="text-white text-lg">Virtual Tour Coming Soon</p>
            </div>
        );
    }

    return (
        <div
            ref={containerRef}
            className={cn(
                "relative overflow-hidden rounded-3xl bg-stone-900 shadow-2xl transition-all duration-500",
                isFullscreen ? "h-screen w-screen rounded-none" : "h-[600px] w-full"
            )}
        >
            {/* Matterport Iframe */}
            <iframe
                src={matterportUrl}
                className="h-full w-full border-0"
                allow="xr-spatial-tracking; gyroscope; accelerometer"
                allowFullScreen
            />

            {/* Fullscreen Toggle Button */}
            <button
                onClick={toggleFullscreen}
                className="absolute top-6 right-6 z-10 rounded-full bg-black/60 backdrop-blur-md p-3 text-white hover:bg-black/80 transition-colors"
            >
                {isFullscreen ? (
                    <Minimize2 className="h-5 w-5" />
                ) : (
                    <Maximize2 className="h-5 w-5" />
                )}
            </button>

            {/* Info Overlay */}
            <div className="absolute top-6 left-6 z-10 rounded-xl bg-black/60 backdrop-blur-md px-4 py-2 text-white">
                <h3 className="font-bold">Virtual Tour</h3>
                <p className="text-xs text-stone-300">Click and drag to explore</p>
            </div>
        </div>
    );
};
