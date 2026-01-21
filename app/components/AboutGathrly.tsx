// app/components/GathrlyShowcase.tsx
import React from 'react';
import Image from 'next/image';
import { Star, Sparkles } from 'lucide-react';

interface GathrlyItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  hideOnMobile?: boolean;
}

const AboutGathrly = () => {
  const gathrlyItems: GathrlyItem[] = [
    {
      id: 1,
      title: 'WEDDINGS',
      subtitle: 'Ceremonies and Receptions',
      image: '/images/showcase/weeding-event.webp',
      alt: 'Wedding ceremony and reception venue',
      hideOnMobile: false,
    },
    {
      id: 2,
      title: 'LIFE CELEBRATIONS',
      subtitle: 'Family, Reunions, Faith',
      image: '/images/showcase/life-celebration.webp',
      alt: 'Life celebration events',
      hideOnMobile: false,
    },
    {
      id: 3,
      title: 'CORPORATE EVENTS',
      subtitle: 'Meetings and Trade Shows',
      image: '/images/showcase/corporate-event.webp',
      alt: 'Corporate meetings and trade shows',
      hideOnMobile: false,
    },
    {
      id: 4,
      title: 'OUR SPECIAL EVENTS',
      subtitle: 'Community Fundraisers',
      image: '/images/showcase/special-event.webp',
      alt: 'Community fundraising events',
      hideOnMobile: true,
    },
    {
      id: 5,
      title: 'CORKS & FORKS',
      subtitle: 'Menue on space Event',
      image: '/images/showcase/corks-forks.webp',
      alt: 'Corks & Forks dining experience',
      hideOnMobile: true,
    },
    {
      id: 6,
      title: 'BIRTHDAY EVENTS',
      subtitle: 'Cakes and Balloons',
      image: '/images/showcase/cake.webp',
      alt: 'Birthday celebrations',
      hideOnMobile: true,
    },
  ];

  return (
    <section className="relative py-8 px-8 sm:px-12 lg:py-12 lg:px-24 bg-black/50">
      {/* Sparkles and Stars Background - Hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        <div className="absolute top-10 left-10 w-16 h-16 opacity-30">
          <Sparkles className="w-full h-full text-amber-400" />
        </div>
        <div className="absolute top-5 right-20 w-12 h-12 opacity-20">
          <Star className="w-full h-full text-amber-300" />
        </div>
        <div className="absolute top-1/4 left-1/3 w-10 h-10 opacity-15">
          <Star className="w-full h-full text-amber-400" />
        </div>
      </div>

      {/* Top decorative elements - Always visible */}
      <div className='absolute top-4 left-4 md:left-8 lg:left-16 flex items-center gap-2 md:gap-4 z-10'>
        <div
          className='w-8 md:w-16 h-px'
          style={{
            background: "linear-gradient(90deg, #f5ca5d 0%, transparent 100%)",
          }}
        ></div>
        <div className='flex items-center gap-1 md:gap-2'>
          <Sparkles className='w-3 h-3 md:w-4 md:h-4 text-amber-300' />
          <Star className='w-2 h-2 md:w-3 md:h-3 text-amber-300' />
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-left mb-8 lg:mb-10 px-5">
          <div className='flex items-center gap-3 md:gap-4 mb-2 md:mb-3'>
            <h1 className="text-2xl md:text-4xl lg:text-4xl text-white font-cinzel font-bold tracking-wide leading-tight">
              Where Memories are Made...
            </h1>
          </div>
          <div className="mb-1 lg:mb-2 mt-1 lg:mt-2">
             {/* Subheading */}
            <p className="text-base sm:text-sm md:text-md lg:text-xl text-amber-300 mb-3 font-light mb-2">
              And Community Comes Together
            </p>
          </div>
        </div>

        {/* Bottom decorative elements - Always visible */}
        <div className='absolute top-4 right-4 md:right-8 lg:right-16 flex items-center gap-2 md:gap-4 z-10 hidden md:block'>
          <div className='flex items-center gap-1 md:gap-2'>
            <Star className='w-2 h-2 md:w-3 md:h-3 text-amber-300' />
            <Sparkles className='w-3 h-3 md:w-4 md:h-4 text-amber-300' />
          </div>
          <div
            className='w-8 md:w-16 h-px'
            style={{
              background: "linear-gradient(90deg, transparent 0%, #f5ca5d 100%)",
            }}
          ></div>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 mb-8 lg:mb-8">
          {gathrlyItems.map((item) => (
            <div
              key={item.id}
              className={`blog-card relative group overflow-hidden border-1 border-amber-400 rounded-lg shadow-[3px_3px_20px_rgba(0,0,0,0.3)] text-center
              ${item.hideOnMobile ? 'hidden md:block' : ''}`}
              style={{
                width: '100%',
                maxWidth: '320px',
                height: '380px',
                margin: '0 auto',
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
              
              {/* Default Black Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/50 to-black/70 z-5 transition-all duration-300 group-hover:opacity-0" />

              {/* Amber Gradient Overlay - Shows on hover */}
              <div className="color-overlay absolute inset-0 bg-gradient-to-br from-amber-900/0 via-amber-800/0 to-amber-900/0 z-10 transition-all duration-300 group-hover:from-amber-900/60 group-hover:via-amber-800/50 group-hover:to-amber-900/60" />
              
              {/* Title Content with Glow Effect */}
              <div className="title-content absolute top-16 left-0 w-full z-20 px-4">
                <h3 className="text-[20px] font-bold tracking-[2px] text-amber-400 font-cinzel mb-2 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)] group-hover:drop-shadow-[0_0_12px_rgba(251,191,36,0.8)] group-hover:text-amber-200 transition-all duration-300">
                  {item.title}
                </h3>
                <hr className="w-12 h-[1px] mx-auto my-4 border-0 bg-amber-400 group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-amber-400 group-hover:to-transparent transition-all duration-300 drop-shadow-[0_0_4px_rgba(251,191,36,0.5)]" />
                <div className="intro mx-auto text-[16px] italic text-amber-200/80 leading-[18px] drop-shadow-[0_0_6px_rgba(251,191,36,0.5)] group-hover:text-amber-50 group-hover:drop-shadow-[0_0_10px_rgba(251,191,36,0.7)] transition-all duration-300">
                  {item.subtitle}
                </div>
              </div>
              
              {/* Card Info with Glow Effect - Always visible */}
              <div className="card-info absolute bottom-28 left-0 w-full z-20 px-4 sm:px-6">
                <div className="text-white text-sm leading-[20px] italic drop-shadow-[0_0_8px_rgba(0,0,0,0.8)] text-center group-hover:text-amber-50 group-hover:drop-shadow-[0_0_10px_rgba(251,191,36,0.3)] transition-all duration-300 px-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
              
              {/* Action Buttons - Added for better spacing */}
              <div className="absolute bottom-6 left-0 w-full z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="inline-flex items-center justify-center px-4 py-2 border border-amber-400 text-amber-400 text-sm rounded-md hover:bg-amber-400 hover:text-black transition-all duration-300 mx-1 drop-shadow-[0_0_4px_rgba(251,191,36,0.5)]">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* "And Community Comes Together" Section */}
        <div className="text-left">
          
          {/* Main Text */}
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-lg lg:text-xl font-light text-white leading-relaxed lg:leading-relaxed mb-4 lg:mb-6">
              Since 1965, The Venue on Gathrly has been a leading wedding and event venue near Midtown East, New York City. The Venue on Gathrly has a mission to provide a welcoming space for our community to gather and enjoy public, private, and secular events—all conveniently located in the heart of Midtown East, New York City.
            </p>
            
            <p className="text-lg lg:text-xl font-light text-white leading-relaxed lg:leading-relaxed mb-4 lg:mb-6 hidden md:block">
              All funds from venue rentals go to administer and maintain this storied place where memories are made.
            </p>
            
            <p className="text-lg lg:text-xl font-light text-white leading-relaxed lg:leading-relaxed mb-4 lg:mb-6 hidden md:block">
              Whether you're planning an intimate gathering or a large wedding, anniversary, celebration of life, birthday, graduation, holiday party, meeting, conference, trade show, political function, or festival, the Venue on Gathrly offers the perfect setting to celebrate while giving back to your community.
            </p>
          </div>
          
           {/* Read Our Story Button */}
          <div className="pt-6 px-4">
            <button className="inline-flex items-center justify-center px-6 py-2 border-1 border-[#D0BB57] text-[#D0BB57] font-medium text-lg rounded-md hover:bg-[#D0BB57] hover:text-[#323c41] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D0BB57]">
              READ OUR STORY
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGathrly;