
import { NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Clubs', path: '/clubs' },
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

export const CLUB_MODELS = [
  { id: 'mg-1-blade', name: 'MG-1 Blade', desc: 'Pure feedback. Tour profile.' },
  { id: 'mg-1-cavity', name: 'MG-1 Cavity', desc: 'Forgiveness meets precision.' },
  { id: 'mg-x-hollow', name: 'MG-X Hollow', desc: 'Max distance. Soft feel.' },
];

export const CLUB_CATEGORIES = [
  {
    id: 'blade',
    name: 'Blade',
    desc: 'Workable. Precise. For the purist.',
    image: 'https://images.unsplash.com/photo-1610427847926-22467d5e4620?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 'cavity',
    name: 'Cavity',
    desc: 'Balanced. Stable. For the competitor.',
    image: 'https://images.unsplash.com/photo-1596727284451-b0db0a10c73e?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 'hollow',
    name: 'Hollow',
    desc: 'Fast. Forgiving. For the distance seeker.',
    image: 'https://images.unsplash.com/photo-1628256382834-367073b64436?q=80&w=2070&auto=format&fit=crop'
  }
];

export const ARTICLES = [
  {
    id: 1,
    title: "The Physics of Porosity",
    date: "OCT 12, 2025",
    category: "ENGINEERING",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Why micro-welding defects in cast irons create inconsistent ball speeds, and how DMLS solves it."
  },
  {
    id: 2,
    title: "Variable Face Thickness",
    date: "SEP 28, 2025",
    category: "R&D",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070&auto=format&fit=crop",
    excerpt: "We utilized AI to run 40,000 impact simulations. The result is a face topology that adapts to your miss."
  },
  {
    id: 3,
    title: "Tour Issue is a Lie",
    date: "AUG 14, 2025",
    category: "OPINION",
    image: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?q=80&w=1576&auto=format&fit=crop",
    excerpt: "The gap between what pros play and what you buy is widening. We are closing it."
  }
];
