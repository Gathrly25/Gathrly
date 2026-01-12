// app/components/ServiceBackButton.tsx
"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const ServiceBackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="fixed top-8 left-8 z-[9999] flex items-center gap-2 rounded-full bg-black/80 px-5 py-3 text-sm font-medium text-white backdrop-blur-md hover:bg-black hover:scale-105 transition-all duration-200 shadow-lg border border-amber-500/30"
    >
      <ArrowLeft className="h-5 w-5" /> 
      <span className="hidden sm:inline">Back</span>
      <span className="sm:hidden">Back</span>
    </button>
  );
};