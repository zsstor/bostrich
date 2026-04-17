// Product interface per D-10
export interface Product {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  features: string[];
  pricing?: {
    free?: string;
    basic?: string;
    business?: string;
    enterprise?: string;
  };
  imageUrl?: string;
}

// Product array per D-11
export const products: Product[] = [
  {
    id: 'ladder',
    name: 'Ladders',
    slug: 'ladder',
    tagline: 'Scalable solutions to take your business to the next level',
    description: 'Industry-leading vertical mobility solutions for enterprise growth. Our ladders provide the infrastructure you need to elevate your operations.',
    features: [
      'Rungs-as-a-Service (RaaS)',
      'Vertical scaling architecture',
      'Multi-tier support system',
      'Cloud-based climbing',
      'Real-time altitude monitoring',
      'Enterprise-grade verticality'
    ],
    pricing: {
      free: '3 rungs',
      basic: '5 rungs',
      business: '8 rungs',
      enterprise: '12+ rungs with safety harness'
    },
    imageUrl: 'https://images.unsplash.com/photo-1597383822240-9059df348774?w=800&q=80'
  },
  {
    id: 'agile-ladder',
    name: 'Agile Ladders',
    slug: 'agile-ladder',
    tagline: 'Scalable solutions for agile startups',
    description: 'Lean, iterative vertical acceleration for fast-moving teams. Fewer rungs means faster sprints to the next level.',
    features: [
      'Minimum viable verticality',
      'Sprint-ready rungs',
      'Standup-compatible height',
      'Agile methodology integration',
      'Continuous deployment (of yourself)',
      'Iterative climbing experience'
    ],
    pricing: {
      free: '2 rungs',
      basic: '3 rungs',
      business: '4 rungs',
      enterprise: '5 rungs with standup mat'
    },
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80'
  },
  {
    id: 'ramp',
    name: 'Ramps',
    slug: 'ramp',
    tagline: 'Offramps for your exit strategy',
    description: 'Smooth transitions to the next phase of your journey. Our ramps provide the gentle gradient you need for strategic exits.',
    features: [
      'Exit-ready architecture',
      'Smooth gradient APIs',
      'Transition velocity control',
      'Multi-angle deployment',
      'Strategic descent optimization',
      'IPO-ready surface'
    ],
    pricing: {
      free: '5ft ramp',
      basic: '10ft ramp',
      business: '15ft ramp',
      enterprise: '20ft+ ramp with handrails'
    },
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80'
  },
  {
    id: 'slide',
    name: 'Slides',
    slug: 'slide',
    tagline: 'Offboarding accelerators',
    description: 'Efficient personnel redistribution mechanisms. Our slides accelerate the transition of team members to their next opportunity.',
    features: [
      'Automated offboarding',
      'Frictionless deployment',
      'Gravity-assisted transitions',
      'Real-time descent analytics',
      'Multi-rider support',
      'Performance-based lubrication'
    ],
    pricing: {
      free: '6ft slide',
      basic: '12ft slide',
      business: '18ft slide',
      enterprise: '24ft+ slide with emergency braking'
    },
    imageUrl: 'https://images.unsplash.com/photo-1590416997829-71ed96d808c0?w=800&q=80'
  },
  {
    id: 'thin-slide',
    name: 'Thin Slides',
    slug: 'thin-slide',
    tagline: 'Offboarding accelerators for lean startups',
    description: 'Streamlined personnel redistribution for resource-constrained teams. Same great speed, minimal friction.',
    features: [
      'Minimum viable offboarding',
      'Single-rider optimization',
      'Budget-friendly descent',
      'Lean architecture',
      'Fast-track transitions',
      'Reduced friction coefficient'
    ],
    pricing: {
      free: '4ft slide',
      basic: '8ft slide',
      business: '12ft slide',
      enterprise: '16ft slide with reduced friction'
    },
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80'
  },
  {
    id: 'cliff',
    name: 'Cliffs',
    slug: 'cliff',
    tagline: 'Cliff-management for executives and non-executives alike',
    description: 'Vertical challenge solutions for team development. Our cliffs provide the perfect environment for building character and testing limits.',
    features: [
      'Vertical challenge architecture',
      'Character-building as a service',
      'Executive-grade edge management',
      'Team cohesion testing',
      'Performance anxiety generation',
      '99.999% cliff uptime'
    ],
    pricing: {
      free: '10ft drop',
      basic: '20ft drop',
      business: '50ft drop',
      enterprise: '100ft+ drop with parachute backup'
    },
    imageUrl: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=80'
  },
  {
    id: 'scaffolding',
    name: 'Scaffolding',
    slug: 'scaffolding',
    tagline: 'Scaffolding to assist with growth hacking',
    description: 'Temporary infrastructure for rapid scaling. Our scaffolding provides the support you need while building your core competencies.',
    features: [
      'Growth-hacking infrastructure',
      'Scalable platform support',
      'Multi-level accessibility',
      'Rapid deployment framework',
      'Temporary stability architecture',
      'API-first construction'
    ],
    pricing: {
      free: '1 level',
      basic: '2 levels',
      business: '3 levels',
      enterprise: '5+ levels with safety certifications'
    },
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80'
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
