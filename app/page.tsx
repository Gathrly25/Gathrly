"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { MinimalistHero } from "./components/hero-section";
import { VenuesShowcase } from "./components/venues";
import { ServicesSection } from "./components/services";
import { StaggerTestimonials } from "./components/testimonials";
import { Footer } from "./components/footer";
import { Marquee } from "./components/marquee";
import { ProcessSection } from "./components/process";
import { FAQSection } from "./components/faq";
import ZoomParallaxWrapper from "./components/zoom-parallax-wrapper";

const MinimalistHeroDemo = () => {
  const navLinks = [
    { label: "Venues", href: "#" },
    { label: "Services", href: "#" },
    { label: "About", href: "#" },
  ];

  return (
    <ReactLenis root>
      <main className="w-full bg-black">
        <MinimalistHero
          logoText="Gathrly"
          navLinks={navLinks}
          mainText="Handpicked spaces. Effortless experiences. From birthdays to business soirées. We set the stage for your moments."
          readMoreLink="#"
          imageSrc="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop"
          imageAlt="Luxury Venue"
          overlayText={{
            part1: "Book",
            part2: "Brilliance.",
          }}
          socialLinks={[]}
          locationText="Chicago, IL"
        />

        <Marquee />
        <ZoomParallaxWrapper />
        <VenuesShowcase />

        <ProcessSection />

        <ServicesSection />

        <FAQSection />

        <div className="bg-stone-100 py-24">
          <StaggerTestimonials />
        </div>

        <Footer />
      </main>
    </ReactLenis>
  );
};

export default MinimalistHeroDemo;




