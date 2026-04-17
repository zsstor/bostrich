// Product interface - ecommerce style with real specs
export interface Product {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  price: number;
  specs: {
    height?: string;
    width?: string;
    length?: string;
    material: string;
    weight: string;
    capacity?: string;
    rungSpacing?: string;
  };
  // Pricing tiers for the pricing page
  pricingTiers: {
    starter: string;
    growth: string;
    business: string;
    enterprise: string;
  };
  imageUrl?: string;
}

// Product catalog - deadpan hardware store vibes
export const products: Product[] = [
  {
    id: 'ladder',
    name: 'Ladder',
    slug: 'ladder',
    tagline: 'Scalable solutions to take your business to the next level',
    description: 'A ladder.',
    price: 149,
    specs: {
      height: '8 ft',
      width: '18 in',
      material: 'Aluminum',
      weight: '12 lbs',
      capacity: '250 lbs',
      rungSpacing: '12 in'
    },
    pricingTiers: {
      starter: '4-rung ladder',
      growth: '6-rung ladder',
      business: '8-rung ladder',
      enterprise: '12-rung ladder with safety harness'
    },
    imageUrl: 'https://images.pexels.com/photos/5799054/pexels-photo-5799054.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'agile-ladder',
    name: 'Agile Ladder',
    slug: 'agile-ladder',
    tagline: 'Scalable solutions for agile startups',
    description: 'A ladder with wider rung spacing.',
    price: 89,
    specs: {
      height: '8 ft',
      width: '18 in',
      material: 'Aluminum',
      weight: '9 lbs',
      capacity: '225 lbs',
      rungSpacing: '24 in'
    },
    pricingTiers: {
      starter: '2-rung agile ladder',
      growth: '3-rung agile ladder',
      business: '4-rung agile ladder',
      enterprise: '5-rung agile ladder with standup mat'
    },
    imageUrl: 'https://images.pexels.com/photos/2463713/pexels-photo-2463713.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'ramp',
    name: 'Ramp',
    slug: 'ramp',
    tagline: 'Offramps for your exit strategy',
    description: 'A ramp.',
    price: 199,
    specs: {
      length: '10 ft',
      width: '36 in',
      material: 'Pressure-treated wood',
      weight: '45 lbs',
      capacity: '500 lbs'
    },
    pricingTiers: {
      starter: '6 ft wooden ramp',
      growth: '10 ft wooden ramp',
      business: '15 ft wooden ramp with handrails',
      enterprise: '20 ft+ custom ramp with ADA compliance'
    },
    imageUrl: 'https://images.pexels.com/photos/34727191/pexels-photo-34727191.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'slide',
    name: 'Slide',
    slug: 'slide',
    tagline: 'Offboarding accelerators',
    description: 'A slide.',
    price: 349,
    specs: {
      height: '12 ft',
      length: '18 ft',
      material: 'Galvanized steel',
      weight: '85 lbs',
      capacity: '200 lbs'
    },
    pricingTiers: {
      starter: '8 ft playground slide',
      growth: '12 ft steel slide',
      business: '18 ft commercial slide',
      enterprise: '24 ft+ slide with emergency braking'
    },
    imageUrl: 'https://images.pexels.com/photos/32941676/pexels-photo-32941676.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'thin-slide',
    name: 'Thin Slide',
    slug: 'thin-slide',
    tagline: 'Offboarding accelerators for lean startups',
    description: 'A narrower slide.',
    price: 249,
    specs: {
      height: '8 ft',
      length: '12 ft',
      width: '18 in',
      material: 'Stainless steel',
      weight: '52 lbs',
      capacity: '175 lbs'
    },
    pricingTiers: {
      starter: '6 ft narrow slide',
      growth: '8 ft narrow slide',
      business: '12 ft narrow slide',
      enterprise: '16 ft narrow slide with reduced friction'
    },
    imageUrl: 'https://images.pexels.com/photos/12736878/pexels-photo-12736878.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'scaffolding',
    name: 'Scaffolding',
    slug: 'scaffolding',
    tagline: 'Scaffolding to assist with growth hacking',
    description: 'Scaffolding.',
    price: 599,
    specs: {
      height: '20 ft',
      width: '5 ft',
      length: '7 ft',
      material: 'Steel tubing',
      weight: '120 lbs',
      capacity: '1,000 lbs per platform'
    },
    pricingTiers: {
      starter: '1-level scaffolding frame',
      growth: '2-level scaffolding system',
      business: '3-level scaffolding with platforms',
      enterprise: '5+ levels with safety certifications'
    },
    imageUrl: 'https://images.pexels.com/photos/20339280/pexels-photo-20339280.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

// Testimonials - including the cliff management joke
export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "Bostrich helped us reach the next level. Their solutions scaled perfectly with our vertical.",
    author: "Sarah Chen",
    title: "VP of Operations",
    company: "Series B Startup"
  },
  {
    quote: "When our board needed an exit strategy, Bostrich made the transition smooth and painless.",
    author: "Marcus Webb",
    title: "CEO",
    company: "Acme Corp"
  },
  {
    quote: "We needed infrastructure to support our growth. Bostrich delivered exactly what we needed to keep climbing.",
    author: "Jennifer Liu",
    title: "CTO",
    company: "TechCo Industries"
  },
  {
    quote: "The cliff was the hardest part of our compensation structure. Bostrich helped every executive get past it.",
    author: "David Park",
    title: "VP of People",
    company: "Unicorn Ventures"
  },
  {
    quote: "Our offboarding process used to take weeks. Now it takes seconds.",
    author: "Amanda Torres",
    title: "HR Director",
    company: "FastGrowth Inc"
  },
  {
    quote: "Finally, a platform that understands what it means to build something from the ground up.",
    author: "Michael Foster",
    title: "Founder",
    company: "Bootstrap Capital"
  }
];

// Helper function to get product by slug
export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

// Helper function to get all products
export function getAllProducts(): Product[] {
  return products;
}

// Helper function to get all testimonials
export function getAllTestimonials(): Testimonial[] {
  return testimonials;
}

// Format price for display
export function formatPrice(price: number): string {
  return `$${price.toLocaleString()}`;
}
