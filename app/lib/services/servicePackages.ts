export interface ServicePackage {
  name: string;
  image: string; // 🎥 video instead of image
  price: number; 
  features: string[];
}

export const servicePackages: Record<string, ServicePackage[]> = {
  "event-design": [
    {
      name: "Silver Package",
      image: "/images/service1.webp",
      price: 750,
      features: [
        "Elegant venue decoration",
        "Fresh flower arrangements",
        "Table styling & linens",
        "Basic décor setup",
        "On-the-day coordination",
      ],
    },
    {
      name: "Gold Package",
      image: "/images/service2.webp",
      price: 1500,
      features: [
        "Custom theme décor",
        "Premium floral arrangements",
        "Stage & aisle décor",
        "Ambient lighting accents",
        "Dedicated coordinator",
      ],
    },
    {
      name: "Diamond Package",
      image: "/images/service3.webp",
      price: 2500,
      features: [
        "Luxury customized décor",
        "Ceiling & stage draping",
        "Designer floral installations",
        "Full venue transformation",
        "On-site design supervisor",
      ],
    },
  ],

  "lighting-visuals": [
    {
      name: "Silver Package",
      image: "/images/service1.webp",
      price: 600,
      features: [
        "Basic venue lighting",
        "Warm ambient uplighting",
        "Stage wash lighting",
        "Setup & teardown",
      ],
    },
    {
      name: "Gold Package",
      image: "/images/service2.webp",
      price: 1200,
      features: [
        "Dynamic stage lighting",
        "Moving head lights",
        "Custom lighting scenes",
        "Lighting operator",
      ],
    },
    {
      name: "Diamond Package",
      image: "/images/service3.webp",
      price: 2000,
      features: [
        "Fully programmed light show",
        "Intelligent lighting systems",
        "LED walls & effects",
        "On-site lighting director",
      ],
    },
  ],

  "sound-engineering": [
    {
      name: "Silver Package",
      image: "/images/service1.webp",
      price: 500,
      features: [
        "Basic PA system",
        "Wireless microphones",
        "Audio setup & testing",
      ],
    },
    {
      name: "Gold Package",
      image: "/images/service2.webp",
      price: 1000,
      features: [
        "High-quality sound system",
        "Stage monitors",
        "Live sound mixing",
        "Sound engineer",
      ],
    },
    {
      name: "Diamond Package",
      image: "/images/service3.webp",
      price: 1800,
      features: [
        "Concert-grade sound",
        "Advanced mixing console",
        "Backup audio systems",
        "Senior sound engineer",
      ],
    },
  ],

  "stage-production": [
    {
      name: "Silver Package",
      image: "/images/service1.webp",
      price: 800,
      features: [
        "Standard stage setup",
        "Basic backdrop",
        "Stage carpeting",
      ],
    },
    {
      name: "Gold Package",
      image: "/images/service2.webp",
      price: 1600,
      features: [
        "Custom stage design",
        "Decorated backdrop",
        "Stage risers & props",
        "Technical supervision",
      ],
    },
    {
      name: "Diamond Package",
      image: "/images/service3.webp",
      price: 2800,
      features: [
        "Luxury stage production",
        "LED backdrop & panels",
        "Integrated lighting & visuals",
        "Full production management",
      ],
    },
  ],
};

export interface EventService {
  id: number;
  title: string;        // e.g., "Event Venue"
  description: string;  // paragraph under heading
  image: string;        // background image
  price: number;
  services: {           // services list with icon and text
    icon: string;       // use icon name or path
    text: string;
  }[];
}

export const eventServices: EventService[] = [
  {
    id: 1,
    title: "Event Venue",
    description: "Choose from our premium event venues to make your celebration unforgettable.",
    image: "/images/service1.webp",
    price: 2500,
    services: [
      { icon: "MapPin", text: "Prime locations" },
      { icon: "Users", text: "Capacity up to 500 guests" },
      { icon: "Star", text: "Fully serviced" },
      { icon: "Star", text: "Fully equipped" },
    ],
  },
  {
    id: 2,
    title: "Catering Service",
    description: "Delicious menus and expert catering staff for all occasions.",
    image: "/images/service2.webp",
    price: 1500,
    services: [
      { icon: "Coffee", text: "Beverages & drinks" },
      { icon: "Utensils", text: "Custom menus" },
      { icon: "ChefHat", text: "Professional chefs" },
      { icon: "Wine", text: "Premium wines" },
    ],
  },
  {
    id: 3,
    title: "Food & Beverages",
    description: " Exquisite food and beverage options tailored to your event needs.",
    image: "/images/service3.webp",
    price: 1200,
    services: [
      { icon: "Music", text: "Live DJ performances" },
      { icon: "Volume", text: "Premium sound systems" },
      { icon: "Headphones", text: "Custom playlists" },
      { icon: "Volume", text: "Professional DJs" },
    ],
  },
  {
    id: 4,
    title: "Photo & Videography",
    description: "Capture every moment with our expert photography and videography services.",
    image: "/images/service4.webp",
    price: 1800,
    services: [
      { icon: "Camera", text: "Professional photography" },
      { icon: "Video", text: "HD videography" },
      { icon: "Film", text: "Drone & cinematic shots" },
      { icon: "Camera", text: "Custom packages" },
    ],
  },
];
