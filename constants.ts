
import { NavLink, Article, TeamMember } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Clubs', path: '/clubs' },
  { label: 'Technology', path: '/technology' },
  { label: 'The Engine', path: '/ai-fitting' },
  { label: 'Partners', path: '/fitters' },
  { label: 'Journal', path: '/journal' },
  { label: 'About', path: '/about' },
];

export const MOCK_STATS = [
  { label: 'Dispersion Reduction', value: '42%' },
  { label: 'Ball Speed Gain', value: '+3.2mph' },
  { label: 'Manufacturing Time', value: '48hrs' },
];

export const CLUB_CATEGORIES = [
  { 
    id: 'irons', 
    name: 'Irons', 
    desc: 'Generative lattice structures. Optimized for your specific strike pattern.',
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070&auto=format&fit=crop' 
  },
  { 
    id: 'wedges', 
    name: 'Wedges', 
    desc: 'Controlled spin rates with 3D printed friction grooves.',
    image: 'https://images.unsplash.com/photo-1599586120429-4828d5dabb04?q=80&w=2000&auto=format&fit=crop'
  },
  { 
    id: 'putters', 
    name: 'Putters', 
    desc: 'High MOI geometry impossible to mill. Pure roll technology.',
    image: 'https://images.unsplash.com/photo-1628256382834-367073b64436?q=80&w=2070&auto=format&fit=crop'
  },
];

export const JOURNAL_POSTS: Article[] = [
  {
    id: '1',
    title: 'The Death of Casting',
    date: 'OCT 12, 2025',
    category: 'Manufacturing',
    excerpt: 'Why traditional foundry methods are holding back equipment performance, and how additive manufacturing unlocks new physics.',
    image: 'https://images.unsplash.com/photo-1622543925917-0985c7d1e8c3?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Understanding Biomechanical DNA',
    date: 'SEP 28, 2025',
    category: 'Data Science',
    excerpt: 'We analyze over 40 variables in your swing to generate a unique "Golfer DNA" that dictates head geometry.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '3',
    title: '17-4PH Steel: A Material Deep Dive',
    date: 'SEP 15, 2025',
    category: 'Materials',
    excerpt: 'It feels like carbon steel but wears like stainless. The metallurgy behind our proprietary powder blend.',
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070&auto=format&fit=crop'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Mårten Eker',
    role: 'CEO, R&D // HCP: +3.2',
    bio: 'Consultant/Architect and entrepreneur. Worked with design, 3D, data, BIM and projects within retail since 2008. Retired Scandinavian golf tour pro. MSc Royal School of Technology.',
    image: '/images/team/marten.png',
    email: 'marten@make.golf'
  },
  {
    name: 'Filip Hector',
    role: 'GTM & Ops // HCP: 6.2',
    bio: 'CEO at Nonius Nordics. Experience within business scale-up and leveraging the latest technology. Passionate golfer.',
    image: '/images/team/filip.png',
    email: 'filip@make.golf'
  },
  {
    name: 'Erik Paulsson',
    role: 'Investor, GTM // HCP: 12',
    bio: 'Exit with Bruce (Sold for 80M SEK). Enterprise Account Executive at Braze. Experience from start-ups, and SaaS GTM. Ambitious amateur golfer.',
    image: '/images/team/erik.png',
    email: 'erik@make.golf'
  }
];
