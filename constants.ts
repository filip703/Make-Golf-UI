
import { NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Products', path: '/clubs' },
  { label: 'Engine', path: '/engine' },
  { label: 'For Fitters', path: '/fitters' },
  { label: 'Technology', path: '/technology' },
  { label: 'About', path: '/about' },
];

export const MOCK_STATS = [
  { label: 'Dispersion Reduction', value: '42%' },
  { label: 'Ball Speed Gain', value: '+3.2mph' },
  { label: 'Manufacturing Time', value: '48hrs' },
];

// Replaced generic models with specific categories
export const CLUB_CATEGORIES = [
  {
    id: 'irons',
    name: 'Irons',
    tagline: 'The Scoring Engine',
    desc: 'Fully parametric blade lengths, offsets, and top-lines. Optimized for your strike pattern.',
    // Image: Macro shot of brushed steel / industrial look
    image: 'https://images.unsplash.com/photo-1628256382834-367073b64436?q=80&w=2070&auto=format&fit=crop', 
    specs: ['17-4PH SS', 'DMLS Print', 'Custom CG']
  },
  {
    id: 'wedges',
    name: 'Wedges',
    tagline: 'Friction & Feel',
    desc: 'Raw printed faces for maximum spin retention. Bounce and grind geometry adapted to your angle of attack.',
    // Image: Dark close up of grooves or raw metal texture
    image: 'https://images.unsplash.com/photo-1599587426861-591b92e74211?q=80&w=1931&auto=format&fit=crop', 
    specs: ['Raw Finish', 'High Spin', 'Variable Sole']
  },
  {
    id: 'putters',
    name: 'Putters',
    tagline: 'Stability Defined',
    desc: 'Complex lattice structures allow for extreme MOI in compact shapes impossible to mill.',
    // Image: High tech milled face or lattice structure abstract
    image: 'https://images.unsplash.com/photo-1587800057406-8d59d1a6f87c?q=80&w=1974&auto=format&fit=crop', 
    specs: ['316L SS', 'Lattice Core', 'Face Balanced']
  }
];

// Deprecated specific models list in favor of Categories, 
// but keeping a structure if we need to display "Examples" later.
export const CLUB_MODELS = []; 

export const ARTICLES = [
  {
    id: 1,
    title: "The Physics of Porosity",
    date: "OCT 12, 2025",
    category: "ENGINEERING",
    // Image: Microscope shot of metal or laser sintering
    image: 'https://images.unsplash.com/photo-1563206767-5b1d972b9fb9?q=80&w=1974&auto=format&fit=crop',
    excerpt: "Why micro-welding defects in cast irons create inconsistent ball speeds, and how DMLS solves it."
  },
  {
    id: 2,
    title: "Variable Face Thickness",
    date: "SEP 28, 2025",
    category: "R&D",
    // Image: Wireframe / Heatmap / Simulation
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=2070&auto=format&fit=crop",
    excerpt: "We utilized AI to run 40,000 impact simulations. The result is a face topology that adapts to your miss."
  },
  {
    id: 3,
    title: "Tour Issue is a Lie",
    date: "AUG 14, 2025",
    category: "OPINION",
    // Image: Dark moody golf course or player silhouette
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070&auto=format&fit=crop",
    excerpt: "The gap between what pros play and what you buy is widening. We are closing it."
  }
];
