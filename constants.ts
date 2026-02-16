
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
    id: 104,
    slug: "rethink-golf",
    title: "Rethink Golf: Build the Club You Actually Need",
    date: "NOV 10, 2025",
    category: "OPINION",
    readTime: "6 MIN",
    image: "https://images.unsplash.com/photo-1503342394128-c104d54dba01?q=80&w=2069&auto=format&fit=crop",
    excerpt: "Golf has been stuck in the same mold for decades. Literally. It is time to stop fitting the player to the club, and start building the club for the player.",
    author: {
        name: "Mårten Eker",
        role: "Head of Engineering",
        image: "https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/Team/marten-founder.png"
    },
    content: [
        {
            type: 'paragraph',
            content: "Golf has been stuck in the same mold for decades. Literally. Most brands still cast heads in bulk, tweak the paint, and call it innovation. At Make Golf, we don’t believe in doing things differently just to stand out. We believe in doing them better."
        },
        {
            type: 'paragraph',
            content: "3D printing isn’t a novelty. It’s the starting point for designing equipment around one thing: your game. Here’s how it works—and why it changes everything."
        },
        {
            type: 'h2',
            content: "It Starts with Your Data"
        },
        {
            type: 'paragraph',
            content: "Every club we build begins with a clear picture of your swing. We measure speed, tempo, attack angle, face orientation at impact, and preferred shot shape. This isn’t about fitting you into an average. It’s about building something that fits you exactly."
        },
        {
            type: 'h2',
            content: "Beyond Loft and Lie"
        },
        {
            type: 'paragraph',
            content: "Most club fittings end with small tweaks to loft and lie. 3D printing goes further. We adjust thickness across the face to protect ball speed on miss-hits—high, low, heel, toe."
        },
        {
            type: 'paragraph',
            content: "We design the interior of the head to position mass precisely where it delivers the flight and forgiveness you need. Low and forward for a flatter trajectory, or heel-weighted to help square the face. We can shift the center of gravity by fractions of a millimeter."
        },
        {
            type: 'h2',
            content: "Shape Designed for Your Eye"
        },
        {
            type: 'paragraph',
            content: "What inspires confidence at address isn’t the same for everyone. With 3D printing, you get choices most brands can’t offer: Topline thickness, sole width, leading edge profile, and hosel blending. A profile that fits your eye is more than cosmetic—it builds trust."
        },
        {
            type: 'h2',
            content: "Optimized Grooves & Texture"
        },
        {
            type: 'paragraph',
            content: "Course conditions change. So should your tools. We customize groove depth and spacing for your typical turf and weather, and add micro-texture to fine-tune friction and spin."
        },
        {
            type: 'h2',
            content: "Materials That Perform"
        },
        {
            type: 'paragraph',
            content: "3D printing allows us to use advanced metals and internal lattice structures you won’t find in cast heads. This means consistent density, clean energy transfer, and reliable feedback on every swing. Nothing feels vague or dull."
        },
        {
            type: 'h2',
            content: "Finishes Without Compromise"
        },
        {
            type: 'paragraph',
            content: "Most brands offer one or two finish options. We believe your club should look as personal as it feels. Brushed, Satin, Matte black, Raw, or Custom laser markings. Performance and aesthetics, without compromise."
        },
        {
            type: 'quote',
            content: "No shortcuts. No stereotypes. No one-size-fits-all. Just equipment made to unlock your best game."
        }
    ]
  },
  {
    id: 101,
    slug: "one-good-fit",
    title: "How One Good Fit Can Change Your Entire Game",
    date: "NOV 02, 2025",
    category: "TOUR REPORT",
    readTime: "7 MIN",
    image: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?q=80&w=1576&auto=format&fit=crop",
    excerpt: "Every golfer has a moment when something clicks. See how Lina, Daniel, and Mikaela transformed their game.",
    author: {
        name: "Filip Hector",
        role: "VP // CCO",
        image: "https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/Team/filip.png"
    },
    content: [
        {
            type: 'paragraph',
            content: "Every golfer has a moment when something clicks. A swing finally feels effortless. A shot flies exactly as you pictured. For many, that moment doesn’t come from practicing harder. It comes from finally playing with equipment built to fit them—not the average."
        },
        {
            type: 'paragraph',
            content: "At Make Golf, we’ve seen what happens when players switch from mass-produced clubs to a set designed around their swing. The gains are real, and they go beyond numbers on a launch monitor."
        },
        {
            type: 'h2',
            content: "Lina: From Frustration to Control"
        },
        {
            type: 'paragraph',
            content: "Lina played twice a week, but every iron felt unpredictable. Her shots ballooned high, spun too much, and fell short. Off the tee, she struggled with a persistent slice that robbed distance. She assumed it was just her technique."
        },
        {
            type: 'paragraph',
            content: "We built a set of 3D-printed heads with neutral weighting and a thinner face profile for a stronger flight. Her irons were adjusted flatter, and her driver was rebalanced for a more stable face through impact. In the first session, her 7-iron carried 12 meters longer on average. Her driver dispersion shrank by 40%."
        },
        {
            type: 'h2',
            content: "Daniel: From Inconsistent to Relentless"
        },
        {
            type: 'paragraph',
            content: "Daniel had been playing off an 18 handicap for years. His main frustration was inconsistency—some days he flushed everything, others he couldn’t find the center. We ran a detailed impact map of his strike patterns. It turned out his mishits clustered low on the face, where his old irons lost significant ball speed."
        },
        {
            type: 'paragraph',
            content: "With 3D printing, we built irons with variable face thickness to protect speed low on the face and shifted weighting slightly forward. Daniel’s ball speed on miss-hits improved by 9 mph. His average carry distance increased by 15 meters."
        },
        {
            type: 'quote',
            content: "One good fit isn’t about adding a few extra meters. It’s about unlocking the consistency and confidence that make golf more enjoyable."
        }
    ]
  },
  {
    id: 102,
    slug: "putter-paradox",
    title: "How One Good Putter Fit Can Change Your Game",
    date: "OCT 24, 2025",
    category: "R&D",
    readTime: "5 MIN",
    image: "https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/klubbor/Putter%20JM.png",
    excerpt: "The right putter—fitted to your stroke, your posture, and your habits—can transform your scores faster than any other club.",
    author: {
        name: "Mårten Eker",
        role: "Head of Engineering",
        image: "https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/Team/marten-founder.png"
    },
    content: [
        {
            type: 'paragraph',
            content: "Most golfers pick putters by feel in the shop or by whatever looks good behind the ball. But the right putter—fitted to your stroke, your posture, and your habits—can transform your scores faster than any other club in the bag."
        },
        {
            type: 'h2',
            content: "Johan: From Tentative to Decisive"
        },
        {
            type: 'paragraph',
            content: "Johan averaged 36 putts per round. He struggled with speed control, especially on mid-length putts. His old putter had a face-balanced design, but his stroke had a natural arc, causing inconsistent strikes and misses left."
        },
        {
            type: 'paragraph',
            content: "We designed a 3D-printed mallet with a milled face insert and precise weight distribution tailored to his stroke dynamics. Within weeks, Johan reduced three-putts by 60%. He felt confident over every putt, knowing the club would release naturally."
        },
        {
            type: 'h2',
            content: "Sara: From Guessing to Trusting"
        },
        {
            type: 'paragraph',
            content: "Sara never felt settled over short putts. Her alignment was inconsistent, and she often questioned if the face was square. During fitting, we identified her eye position was inside the ball, making her perceive the putter face as open."
        },
        {
            type: 'quote',
            content: "A putter that fits your stroke isn’t a luxury—it’s a shortcut to better scores and more confidence."
        }
    ]
  },
  {
    id: 103,
    slug: "custom-wedges",
    title: "How Custom Wedges Can Transform Your Short Game",
    date: "OCT 10, 2025",
    category: "ENGINEERING",
    readTime: "6 MIN",
    image: "https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/klubbor/46%20PW1.png",
    excerpt: "Most golfers play wedges straight off the rack, built for an 'average' swing. Here is why that is a mistake.",
    author: {
        name: "Erik Paulsson",
        role: "Editor at Large",
        image: "https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/Team/erik.png"
    },
    content: [
        {
            type: 'paragraph',
            content: "The short game is where scores are made—or lost. Yet most golfers still play wedges straight off the rack, built for an 'average' swing that doesn’t exist. Here’s what happens when you design wedges around your technique and the shots you need to hit."
        },
        {
            type: 'h2',
            content: "Elin: From Chunking to Control"
        },
        {
            type: 'paragraph',
            content: "Elin loved practicing wedges but struggled on tight lies. Her standard sand wedge had too much bounce and a wide sole that made it hard to nip the ball cleanly. We mapped her turf interaction, angle of attack, and face angle at impact. She needed a narrower sole, less bounce, and sharper leading edge."
        },
        {
            type: 'paragraph',
            content: "We designed a 3D-printed 56-degree wedge with a medium grind and reduced bounce, finished in a raw satin to reduce glare. Her strike became cleaner overnight. Chips stopped quicker. She shaved five strokes off her handicap within three months."
        },
        {
            type: 'quote',
            content: "Custom wedges aren’t about vanity. They’re about trust. When you know your club is built for the lie, the swing, and the shot, you swing with commitment."
        }
    ]
  },
  {
    id: 1,
    slug: "physics-of-porosity",
    title: "The Physics of Porosity",
    date: "OCT 12, 2025",
    category: "ENGINEERING",
    readTime: "4 MIN",
    image: 'https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/Artiklar/artikel.png',
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
    image: "https://clfejcuoqvcoelxjcuax.supabase.co/storage/v1/object/public/Brand%20filer/Artiklar/green%20steel.png",
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
