"use client";

import { notFound } from "next/navigation";
import { useParams } from "next/navigation";

import { getServiceBySlug } from "@/app/lib/services/services";
import { ServicesCTA } from "@/app/components/services-cta";
import ServiceDetailsHero from "@/app/components/ServiceDetailsHero";
import ServiceAbout from "@/app/components/ServiceAbout";
import ServicePackages from "@/app/components/ServicePackages";
import EventServices from "@/app/components/EventServices";
import { ServiceBackButton } from "@/app/components/ServiceBackButton"; // Simple solution

export default function ServiceDetailPage() {
  const params = useParams();
  const slugParam = params?.slug;
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;

  if (!slug) notFound();

  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <>
      {/* SIMPLE SOLUTION - This WILL appear */}
      <ServiceBackButton />
      
      {/* Your existing layout */}
      <main className="bg-black text-white">
        {/* HERO */}
        <ServiceDetailsHero service={service} />

        {/* ABOUT SECTION */}
        <ServiceAbout />

        {/* EVENT SERVICES SECTION */}
        <EventServices />

        {/* FEATURES / PACKAGES */}
        <ServicePackages service={service} />

        {/* CONTENT */}
        <section className="container mx-auto px-6 py-24 md:px-12">
          <div className="mx-auto max-w-5xl space-y-16">
            <ServicesCTA />
          </div>
        </section>
      </main>
    </>
  );
}