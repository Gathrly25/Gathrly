// app/components/ServiceNav.tsx
"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const ServiceNav = () => {
  const router = useRouter();

  return (
    <>
      {/* Guaranteed visible back button */}
      <button
        onClick={() => router.back()}
        className="fixed top-8 left-8 z-[9999] flex items-center gap-2 rounded-full bg-black/80 px-5 py-3 text-sm font-medium text-white backdrop-blur-md hover:bg-black hover:scale-105 transition-all duration-200 shadow-lg border border-amber-500/30"
      >
        <ArrowLeft className="h-5 w-5" /> 
        <span className="hidden sm:inline">Back to Services</span>
        <span className="sm:hidden">Back</span>
      </button>
      
      {/* Optional Book Now button - place it wherever you want */}
      <button 
        onClick={() => router.push('/contact')}
        className="fixed top-8 right-8 z-[9999] rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-black hover:bg-amber-400 hover:scale-105 transition-all duration-200 shadow-lg"
      >
        Book Now
      </button>
    </>
  );
};