// Single source of truth for the product catalog.
// Each product has a stable `slug` -> its page lives at /products/<slug>
// and its image at /public/products/<slug>.(jpg|png|webp).

export const CATEGORIES = [
  { key: "Booms", label: "Booms & Barriers", certified: true,
    blurb: "Floating booms and barriers that encircle and hold spills on open water, harbors and outfalls.",
    highlights: ["Holds oil on the water surface", "Links to any required length", "Philippine Coast Guard certified"] },
  { key: "Skimmers", label: "Skimmers", certified: true,
    blurb: "Skimmers that recover product from the water surface for fast, low-waste cleanup.",
    highlights: ["Recovers oil with minimal water pickup", "Fast, low-waste recovery", "Philippine Coast Guard certified"] },
  { key: "Kits", label: "Spill Kits", certified: false,
    blurb: "Grab-and-go and marine spill kits, sized and stocked for your risk profile.",
    highlights: ["Everything needed for first response", "Ready to grab and deploy", "Sized to your risk profile"] },
  { key: "Absorbents", label: "Absorbents", certified: false,
    blurb: "Oil-selective absorbents in pad, sock, pillow and boom form for water and hard surfaces.",
    highlights: ["Oil-selective, high absorbency", "For water and hard surfaces", "Low-waste, easy cleanup"] },
  { key: "Containment", label: "Secondary Containment", certified: false,
    blurb: "Decks, pallets, berms and units that stop leaks at the source before they spread.",
    highlights: ["Stops leaks at the source", "Keeps sites compliant", "Durable, reusable construction"] },
  { key: "Dispersants", label: "Dispersants", certified: false,
    blurb: "Surface dispersants for treating oil across a wide temperature range.",
    highlights: ["Breaks down surface oil", "Efficient application", "Proven spill-response chemistry"] },
];

export const CAT_LABEL = Object.fromEntries(CATEGORIES.map((c) => [c.key, c.label]));

export const PRODUCTS = [
  // Booms & Barriers
  { slug: "self-inflatable-oil-boom", cat: "Booms", brand: "Lomar Supply", name: "Self-Inflatable Oil Boom",
    desc: "Pops open in seconds for rapid open-water encirclement — the original self-inflatable design, proven worldwide." },
  { slug: "floating-containment-boom", cat: "Booms", brand: "Lomar Supply", name: "Floating Containment Boom",
    desc: "All-purpose PVC boom that links to any length to hold oil on the surface." },
  { slug: "permanent-harbour-boom", cat: "Booms", brand: "Lomar Supply", name: "Permanent / Harbour Boom",
    desc: "Heavy-duty boom for fixed deployment at ports, outfalls and marinas." },
  { slug: "boom-hardware-accessories", cat: "Booms", brand: "Lomar Supply", name: "Boom Hardware & Accessories",
    desc: "Connectors, anchors, tow bridles and reels for fast, reliable deployment." },
  { slug: "turbidity-silt-curtain", cat: "Booms", brand: "Lomar Supply", name: "Turbidity / Silt Curtain",
    desc: "Controls suspended sediment during dredging and marine construction." },
  { slug: "dredge-barrier", cat: "Booms", brand: "Lomar Supply", name: "Dredge Barrier",
    desc: "Robust barrier for containment around active dredging sites." },
  { slug: "baffle-boom", cat: "Booms", brand: "Lomar Supply", name: "Baffle Boom",
    desc: "Directs and calms flow in channels, canals and water intakes." },
  // Skimmers
  { slug: "skimpak-skimmer", cat: "Skimmers", brand: "Lomar Supply", name: "Skimpak Skimmer",
    desc: "Surface skimmer that recovers oil with minimal water pickup for low-waste cleanup." },
  { slug: "weir-skimmer", cat: "Skimmers", brand: "Lomar Supply", name: "Weir Skimmer",
    desc: "Adjustable weir head for efficient recovery of floating product." },
  // Spill Kits
  { slug: "bagged-spill-kit", cat: "Kits", brand: "Lomar Supply", name: "Bagged Spill Kit",
    desc: "Grab-and-go kit for fast first response to small oil and chemical spills." },
  { slug: "sopep-marine-spill-kit", cat: "Kits", brand: "Lomar Supply", name: "SOPEP Marine Spill Kit",
    desc: "IMO-compliant kit for vessels under Ship Oil Pollution Emergency Plan rules." },
  { slug: "wheeled-drum-spill-kit", cat: "Kits", brand: "Lomar Supply", name: "Wheeled / Drum Spill Kit",
    desc: "High-capacity mobile kit for larger industrial spill events." },
  { slug: "vehicle-truck-spill-kit", cat: "Kits", brand: "Lomar Supply", name: "Vehicle & Truck Spill Kit",
    desc: "Compact kit for fleets transporting fuels or chemicals." },
  // Absorbents
  { slug: "absorbent-pads", cat: "Absorbents", brand: "Lomar Supply", name: "Absorbent Pads",
    desc: "Oil-only and universal pads that lift oil — and, in universal form, other fluids — from water and hard surfaces." },
  { slug: "absorbent-socks", cat: "Absorbents", brand: "Lomar Supply", name: "Absorbent Socks (Socs)",
    desc: "Flexible socks that snake around equipment and dike leaks to contain and soak up spills." },
  { slug: "absorbent-pillows", cat: "Absorbents", brand: "Lomar Supply", name: "Absorbent Pillows",
    desc: "High-capacity pillows for soaking up pooled oil under drips, leaks and machinery." },
  { slug: "absorbent-booms", cat: "Absorbents", brand: "Lomar Supply", name: "Absorbent Booms",
    desc: "Floating absorbent booms that corral and soak up oil on open water and around outfalls." },
  { slug: "oilsnare-singles", cat: "Absorbents", brand: "Lomar Supply", name: "OilSnare Singles",
    desc: "Snares heavy, weathered oil that ordinary absorbents can't hold." },
  { slug: "oilsnare-on-a-rope", cat: "Absorbents", brand: "Lomar Supply", name: "OilSnare on a Rope",
    desc: "Deployable rope of snares for shoreline and heavy-oil cleanup worldwide." },
  // Secondary Containment
  { slug: "spill-deck", cat: "Containment", brand: "Lomar Supply", name: "Spill Deck",
    desc: "Low-profile platform that captures drum and container leaks at the source." },
  { slug: "spill-pallet", cat: "Containment", brand: "Lomar Supply", name: "Spill Pallet",
    desc: "2- and 4-drum pallets with integral sump for compliant storage." },
  { slug: "drum-stacker", cat: "Containment", brand: "Lomar Supply", name: "Drum Stacker",
    desc: "Stackable containment for dense, space-saving drum storage." },
  { slug: "containment-unit", cat: "Containment", brand: "Lomar Supply", name: "Containment Unit",
    desc: "Modular containment for bulk storage and transfer areas." },
  { slug: "containment-berm", cat: "Containment", brand: "Lomar Supply", name: "Containment Berm",
    desc: "Portable berm for vehicles, tanks and equipment." },
  { slug: "fuel-vent-bag", cat: "Containment", brand: "Lomar Supply", name: "Fuel Vent Bag",
    desc: "Catches overfill from tank vents before it reaches the ground." },
  { slug: "drain-cover-seal", cat: "Containment", brand: "Lomar Supply", name: "Drain Cover / Seal",
    desc: "Seals drains to stop spills from entering waterways." },
  // Dispersants
  { slug: "formula-1111-dispersant", cat: "Dispersants", brand: "Lomar Supply", name: "Formula 1111 Dispersant",
    desc: "Water-based dispersant applied from the drum via venturi ejector for surface treatment." },
  { slug: "eurolube-formula-3070", cat: "Dispersants", brand: "Lomar Supply", name: "Eurolube Formula 3070",
    desc: "Natural citrus-solvent dispersant — nonyl-phenol-free and pourable across a wide temperature range." },
];

export const getCategory = (key) => CATEGORIES.find((c) => c.key === key);
export const getProduct = (slug) => PRODUCTS.find((p) => p.slug === slug);
export const getAllSlugs = () => PRODUCTS.map((p) => p.slug);
export const related = (slug, n = 3) => {
  const p = getProduct(slug);
  if (!p) return [];
  return PRODUCTS.filter((x) => x.cat === p.cat && x.slug !== slug).slice(0, n);
};
