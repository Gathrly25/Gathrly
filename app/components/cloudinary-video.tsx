"use client";
import { CldVideoPlayer } from 'next-cloudinary';

interface CloudinaryVideoProps {
    src: string;
}

export default function CloudinaryVideo({ src }: CloudinaryVideoProps) {
    return (
        <CldVideoPlayer
            src={src} // Use this sample image or upload your own via the Media Librar
            controls
        />
    );
}