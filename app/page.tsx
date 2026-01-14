"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { MinimalistHero } from "./components/hero-section";
import { StaggerTestimonials } from "./components/testimonials";
import { Footer } from "./components/footer";
// import { Marquee } from "./components/marquee";
import { ProcessSection } from "./components/process";
import { FAQSection } from "./components/faq";
import ZoomParallaxWrapper from "./components/zoom-parallax-wrapper";
import { VenuesShowcase } from "./components/VenuesShowcase";
import ServicesSection from "./components/ServicesSection";
// import AboutSection from "./components/AboutSection";
import AboutGathrly from './components/AboutGathrly';
import GathrlyShowcase from "./components/GathrlyShowcase";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

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
          imageSrc="https://images.pexels.com/photos/27852853/pexels-photo-27852853.jpeg?cs=srgb&dl=pexels-pran-27852853.jpg&fm=jpg"
          imageAlt="Luxury Venue"
          overlayText={{
            part1: "Book",
            part2: "Brilliance.",
          }}
          socialLinks={[]}
          locationText="Chicago, IL"
        />

        {/* <Marquee /> */}

        <AboutGathrly />

        <GathrlyShowcase />
        
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