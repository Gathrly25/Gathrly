'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, Star } from 'lucide-react';

const AboutGathrly = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black/30">
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-16">
          {/* Mobile Layout - Different order */}
          <div className="lg:hidden">
            {/* First: Paragraph (originally right side) */}
            <div className="mb-10">
              <p className="text-white text-base leading-relaxed font-normal">
                We take great pride in delivering an exceptional experience to our clients, combining 
                outstanding services, delectable cuisine, and top-notch venues, all at remarkable prices. 
                you&apos;re planning a wedding, a corporate event, or any other special occasion. 
              </p>
            </div>

            {/* Second: Headings (originally left side) */}
            <div className="mb-12">
              <div className="space-y-4">
                <h1 className="text-lg text-amber-200/80 leading-snug italic">
                  Make every moment memorable with us!
                </h1>
                <h2 className="text-2xl font-semibold font-cinzel leading-tight bg-gradient-to-r from-amber-300 via-emerald-300 to-white bg-clip-text text-transparent">
                  Where Vibrant Celebrations And Gatherings Come To Life
                </h2>
              </div>
            </div>

            {/* Third: Images in sequence - Image 1, then Image 2, then Image 3 */}
            <div className="grid grid-cols-1 gap-6 mb-10">
              {/* Image 1 - First */}
              <div className="relative h-64 w-full overflow-hidden border border-white/10 shadow-xl">
                <Image 
                  src="/images/gathrly1.webp"
                  alt="Elegant event venue with chandeliers"
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              
              {/* Image 2 - Second */}
              <div className="relative h-64 w-full overflow-hidden border border-white/10 shadow-lg">
                <Image 
                  src="/images/gathrly2.webp"
                  alt="Wedding celebration"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              {/* Image 3 - Third */}
              <div className="relative h-64 w-full overflow-hidden border border-white/10 shadow-lg">
                <Image 
                  src="/images/gathrly3.webp"
                  alt="Corporate event"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>

            {/* Fourth: Second paragraph (appears last on mobile) */}
            <div className="mt-6">
              <p className="text-stone-400 text-base leading-relaxed font-normal">
                Aura Grande takes pride in offering premier experiences to the people of the twin cities, 
                redefining event hosting with a wide array of versatile venues. Our magnificent marquees, 
                wedding halls, and spacious open-air lawns are the perfect canvas for weddings, corporate 
                events, gatherings, birthdays and much more.
              </p>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
            {/* Top Section: Text headings */}
            <div className="grid grid-cols-2 gap-14 mb-8">
              {/* Left side headings */}
              <div className="space-y-5">
                <div className="space-y-4">
                  <h1 className="text-base text-amber-200/80 leading-snug italic">
                    Make every moment memorable with us!
                  </h1>
                  <h2 className="text-4xl md:text-5xl font-bold font-cinzel bg-gradient-to-r from-amber-300 via-white to-lime-400 bg-clip-text text-transparent">
                    Where Vibrant Celebrations And Gathering Come Life
                  </h2>
                </div>
              </div>

              {/* Right side paragraph */}
              <div className="flex items-start mt-8">
                <p className="text-stone-200 text-base leading-relaxed font-normal">
                  We take great pride in delivering an exceptional experience to our clients, combining 
                  outstanding services, delectable cuisine, and top-notch venues, all at remarkable prices. 
                  Our culinary team crafts delectable menus that cater to a variety of tastes and dietary 
                  preferences. Our venues are versatile, and adaptable to your unique vision, whether 
                  you&apos;re planning a wedding, a corporate event, or any other special occasion. 
                </p>
              </div>
            </div>

            {/* Bottom Section: Images with text */}
            <div className="grid grid-cols-2 gap-14">
              {/* Left Section - Single large image */}
              <div className="space-y-6">
                <div className="relative h-[250px] md:h-[300px] lg:h-[350px] overflow-hidden border border-white/10">
                  <Image 
                    src="/images/gathrly1.webp"
                    alt="Elegant event venue with chandeliers"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Right Section - Two images and text */}
              <div className="space-y-6">
                {/* Two images grid on top */}
                <div className="grid grid-cols-2 gap-6">
                  {/* First image */}
                  <div className="relative h-48 overflow-hidden border border-white/10">
                    <Image 
                      src="/images/gathrly2.webp"
                      alt="Wedding celebration"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Second image */}
                  <div className="relative h-48 overflow-hidden border border-white/10">
                    <Image 
                      src="/images/gathrly3.webp"
                      alt="Corporate event"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Bottom paragraph (stays in right column on desktop) */}
                <div className="space-y-6">
                  <p className="text-stone-200 text-base leading-relaxed font-normal">
                    Aura Grande takes pride in offering premier experiences to the people of the twin cities, 
                    redefining event hosting with a wide array of versatile venues. Our magnificent marquees, 
                    wedding halls, and spacious open-air lawns are the perfect canvas for weddings, corporate 
                    events, conferences, gatherings, meetings, birthdays, family events, anniversaries, and 
                    so much more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGathrly;