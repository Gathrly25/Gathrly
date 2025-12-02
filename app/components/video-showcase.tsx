"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";
import { cn } from "../lib/utils";

interface VideoShowcaseProps {
    videoUrl?: string;
    title?: string;
    description?: string;
}

export const VideoShowcase = ({
    videoUrl,
    title = "Experience the Venue",
    description = "Take a cinematic tour through our stunning space"
}: VideoShowcaseProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [showControls, setShowControls] = useState(true);

    if (!videoUrl) {
        return null;
    }

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const toggleFullscreen = () => {
        if (videoRef.current) {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else {
                videoRef.current.requestFullscreen();
            }
        }
    };

    return (
        <div className="relative w-full">
            {/* Video Container */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-3xl bg-stone-900 shadow-2xl cursor-pointer"
                onMouseEnter={() => setShowControls(true)}
                onMouseLeave={() => setShowControls(isPlaying ? false : true)}
            >
                <video
                    ref={videoRef}
                    className="h-full w-full aspect-video object-cover"
                    src={videoUrl}
                    loop
                    playsInline
                    onClick={togglePlay}
                >
                    Your browser does not support the video tag.
                </video>

                {/* Video Overlay Controls */}
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: showControls ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"
                >
                    {/* Top Info Bar */}
                    <div className="absolute top-6 left-6 right-6 flex items-start justify-between pointer-events-auto">
                        <div className="rounded-xl bg-black/60 backdrop-blur-md px-4 py-2 text-white">
                            <h3 className="font-bold">{title}</h3>
                            <p className="text-xs text-stone-300">{description}</p>
                        </div>
                    </div>

                    {/* Center Play Button (when paused) */}
                    {!isPlaying && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
                            <motion.button
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={togglePlay}
                                className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 text-black shadow-2xl backdrop-blur-md transition-all hover:bg-white"
                            >
                                <Play className="h-8 w-8 ml-1" fill="currentColor" />
                            </motion.button>
                        </div>
                    )}

                    {/* Bottom Controls Bar */}
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-auto">
                        <div className="flex gap-2">
                            <button
                                onClick={togglePlay}
                                className="rounded-full bg-black/60 backdrop-blur-md p-3 text-white hover:bg-black/80 transition-colors"
                            >
                                {isPlaying ? (
                                    <Pause className="h-5 w-5" />
                                ) : (
                                    <Play className="h-5 w-5" fill="currentColor" />
                                )}
                            </button>
                            <button
                                onClick={toggleMute}
                                className="rounded-full bg-black/60 backdrop-blur-md p-3 text-white hover:bg-black/80 transition-colors"
                            >
                                {isMuted ? (
                                    <VolumeX className="h-5 w-5" />
                                ) : (
                                    <Volume2 className="h-5 w-5" />
                                )}
                            </button>
                        </div>

                        <button
                            onClick={toggleFullscreen}
                            className="rounded-full bg-black/60 backdrop-blur-md p-3 text-white hover:bg-black/80 transition-colors"
                        >
                            <Maximize2 className="h-5 w-5" />
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};
