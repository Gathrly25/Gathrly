// app/components/VenueNav.tsx
"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const VenueNav = () => {
  const router = useRouter();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-gradient-to-b from-black/50 to-transparent">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md hover:bg-white/20"
      >
        <ArrowLeft className="h-4 w-4" /> Back
      </button>
      <button className="rounded-full bg-amber-500 px-6 py-2 text-sm font-bold text-black hover:scale-105">
        Book Now
      </button>
    </nav>
  );
};