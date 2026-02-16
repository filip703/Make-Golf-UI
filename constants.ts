
import { NavLink, Article } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'The Engine', path: '/engine' },
  { label: 'Technology', path: '/technology' },
  { label: 'Journal', path: '/journal' },
  { label: 'For Fitters', path: '/fitters' },
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
    image: 'https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/klubbor/iron.jpeg', 
    specs: ['17-4PH SS', 'MoldJet™ Print', 'Custom CG'],
    imageClassName: 'object-cover object-center'
  },
  {
    id: 'wedges',
    name: 'Wedges',
    tagline: 'Friction & Feel',
    desc: 'Raw printed faces for maximum spin retention. Bounce and grind geometry adapted to your angle of attack.',
    image: 'https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/klubbor/46%20PW1.png',
    secondaryImage: 'https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/klubbor/46%20PW2.png',
    specs: ['Raw Finish', 'High Spin', 'Variable Sole'],
    imageClassName: 'object-contain p-8 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent' 
  },
  {
    id: 'putters',
    name: 'Putters',
    tagline: 'Stability Defined',
    desc: 'Complex lattice structures allow for extreme MOI in compact shapes impossible to mill.',
    image: 'https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/klubbor/Putter%20JM.png',
    secondaryImage: 'https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/klubbor/Putter%20G.png',
    specs: ['316L SS', 'Lattice Core', 'Face Balanced'],
    imageClassName: 'object-cover object-center'
  }
];

export const CLUB_MODELS = []; 

// --- EXPANDED ARTICLES DATA ---
export const ARTICLES: Article[] = [
  {
    id: 1,
    slug: "physics-of-porosity",
    title: "The Physics of Porosity",
    date: "OCT 12, 2025",
    category: "ENGINEERING",
    readTime: "4 MIN",
    image: 'https://images.unsplash.com/photo-1563206767-5b1d972b9fb9?q=80&w=1974&auto=format&fit=crop',
    excerpt: "Why micro-welding defects in cast irons create inconsistent ball speeds, and how MoldJet solves it.",
    author: {
        name: "Mårten Eker",
        role: "Head of Engineering",
        image: "https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/Team/marten-founder.png"
    },
    content: [
        {
            type: 'paragraph',
            content: "In the world of traditional casting, porosity is the silent killer of consistency. When molten metal is poured into a mold, air pockets inevitably form as the material cools and contracts. In a standard set of irons, this variance can lead to 'hot spots' and 'dead spots' on the face."
        },
        {
            type: 'h2',
            content: "The MoldJet Advantage"
        },
        {
            type: 'paragraph',
            content: "Our process is fundamentally different. By printing the club layer by layer using metal paste and wax, and then sintering it in a vacuum furnace, we achieve 99.8% density. This is closer to a forging than a casting, but with geometric complexities that forging cannot achieve."
        },
        {
            type: 'quote',
            content: "We don't just eliminate defects; we engineer the density to be exactly where the player needs mass."
        },
        {
            type: 'paragraph',
            content: "This allows us to guarantee ball speed consistency across the entire face, specifically in the high-toe and low-heel areas where amateurs often miss."
        }
    ]
  },
  {
    id: 2,
    slug: "variable-face-thickness",
    title: "Variable Face Thickness",
    date: "SEP 28, 2025",
    category: "R&D",
    readTime: "6 MIN",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=2070&auto=format&fit=crop",
    excerpt: "We utilized AI to run 40,000 impact simulations. The result is a face topology that adapts to your miss.",
    author: {
        name: "Filip Hector",
        role: "Product Lead",
        image: "https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/Team/filip.png"
    },
    content: [
        {
            type: 'paragraph',
            content: "Most manufacturers use a 'one-size-fits-all' VFT (Variable Face Thickness) pattern. It's usually an oval in the center of the face. But real golfers don't miss in a perfect oval."
        },
        {
            type: 'h2',
            content: "Data-Driven Topology"
        },
        {
            type: 'paragraph',
            content: "We analyzed 12 million shots from the Arccos and Trackman databases. The data showed distinct miss patterns based on handicap. High handicappers miss low-toe. Low handicappers miss high-toe or low-heel."
        },
        {
            type: 'paragraph',
            content: "Using this data, our AI generates a custom face thickness map for every single iron we print. If your tendency is a toe-strike, we thicken the area behind the toe to preserve energy transfer, while thinning the heel to save weight."
        }
    ]
  },
  {
    id: 3,
    slug: "tour-issue-is-a-lie",
    title: "Tour Issue is a Lie",
    date: "AUG 14, 2025",
    category: "OPINION",
    readTime: "3 MIN",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070&auto=format&fit=crop",
    excerpt: "The gap between what pros play and what you buy is widening. We are closing it.",
    author: {
        name: "Erik Paulsson",
        role: "Editor at Large",
        image: "https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/Team/erik.png"
    },
    content: [
        {
            type: 'paragraph',
            content: "Walk into a retail store, buy a driver, and then compare it to what Rory creates on the truck. They look the same. They are not the same. The tolerance on a retail head is often +/- 3 grams. The tolerance on a Tour head is +/- 0.5 grams."
        },
        {
            type: 'h2',
            content: "The CT Creep"
        },
        {
            type: 'paragraph',
            content: "Pros get heads that are 'CT Tested' to be right at the legal limit of spring-like effect. Retail heads are made 'safe' so they don't accidentally become non-conforming. You are literally buying a slower club than the pros."
        },
        {
            type: 'paragraph',
            content: "At Make, we don't have a retail line and a tour line. Every club is printed individually. Every club is inspected. Every club is Tour Issue."
        }
    ]
  },
  {
    id: 4,
    slug: "green-steel-revolution",
    title: "The Green Steel Revolution",
    date: "JUL 02, 2025",
    category: "ENGINEERING",
    readTime: "5 MIN",
    image: "https://images.unsplash.com/photo-1518659681376-78c65f9042b6?q=80&w=2069&auto=format&fit=crop",
    excerpt: "How additive manufacturing reduces material waste by 90% compared to traditional milling and casting.",
    author: {
        name: "Mårten Eker",
        role: "Head of Engineering",
        image: "https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/Team/marten-founder.png"
    },
    content: [
        { type: 'paragraph', content: "Milling a club head from a solid block of steel turns 80% of the material into scrap shavings. It is incredibly wasteful." },
        { type: 'paragraph', content: "Our additive process places material only where it is needed. We have near-zero waste. Furthermore, we use metal powders sourced from recycled European steel, drastically lowering our carbon footprint." }
    ]
  }
];
