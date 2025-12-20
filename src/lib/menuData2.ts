import { Zap, Factory, Settings, ShieldCheck, Leaf, Sun, Droplets, Gauge, Cog, Anvil, Hammer, Shield, Bolt, Building, Flame, Wrench, Cuboid, Anchor } from 'lucide-react';
export const menuData = {
  construction_castings: {
    id: 'construction_castings',
    label: 'CONSTRUCTION CASTING',
    icon: Zap,
    bannerImage: '/assets/image10.jpeg',
    color: 'bg-[#cc2221] text-white',
    categories: [
      {
        name: "WATER CONTROL",
        slug: "water-control",
        image: "/assets/image1.jpeg",
        description: "Smart water flow management components designed for precise control, distribution and regulation of irrigation water.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Solenoid valves",
          "Gate & butterfly valves",
          "Pressure regulators",
          "Flow meters",
          "Air release valves"
        ]
      },
      {
        name: "AGRICULTURE TOOLS & ACCESSORIES",
        slug: "agriculture-tools-and-accessories",
        image: "/assets/image1.jpeg",
        description: "Wide range of agricultural tools and accessories improving field productivity, water usage efficiency and system maintenance.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Drip punch tools",
          "Pipe cutters",
          "Filter cleaning tools",
          "Connector tool kits",
          "Flow monitoring gauges"
        ]
      },
      {
        name: "PIPES & FITTINGS",
        slug: "pipes-and-fittings",
        image: "/assets/image1.jpeg",
        description: "High-performance irrigation pipes and fittings built for long-term durability and leak-proof water flow in agricultural and commercial farming applications.",
        videoUrl: "/video/video1.mp4",
        items: [
          "HDPE pipes",
          "PVC pipes",
          "Compression fittings",
          "Elbow & tee connectors",
          "End caps & reducers"
        ]
      },
      {
        name: "SPRINKLER SYSTEM",
        slug: "sprinkler-system",
        image: "/assets/image1.jpeg",
        description: "Efficient sprinkler irrigation systems designed to distribute precise water coverage across large farming and landscaping areas.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Impact sprinklers",
          "Rain-gun sprinklers",
          "Pop-up sprinklers",
          "Sprinkler stands & risers",
          "Nozzles & spray heads"
        ]
      },

      {
        name: "PUMPING SOLUTION",
        slug: "pumping-solution",
        image: "/assets/image1.jpeg",
        description: "Reliable pumping systems optimized for agricultural water lifting, high-pressure irrigation and industrial water circulation.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Centrifugal pumps",
          "Submersible pumps",
          "Booster pumps",
          "Control panels",
          "Pump protection devices"
        ]
      },

      {
        name: "LANDSCAPE & GARDEN",
        slug: "landscape-and-garden",
        image: "/assets/image1.jpeg",
        description: "Irrigation solutions crafted for parks, home gardens, resorts, golf courses and urban landscaping projects.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Micro sprinkler systems",
          "Garden drip kits",
          "Planter watering units",
          "Fountain & misting systems",
          "Hose reels & garden sprinklers"
        ]
      },
      {
        name: "INDUSTRIAL & LARGE-SCALE",
        slug: "industrial-and-large-scale",
        image: "/assets/image1.jpeg",
        description: "Heavy-duty irrigation solutions engineered for commercial farming, greenhouses, agro-industries and smart irrigation automation.",
        videoUrl: "/video/video1.mp4",
        items: [
          "High-pressure filtration systems",
          "Industrial irrigation controllers",
          "Advanced fertigation units",
          "Automated sensing systems",
          "Large-volume water distribution units"
        ]
      }
    ]
  },
  water_works_casting: {
    id: 'water_works_casting',
    label: 'WATER WORKS CASTING',
    icon: Zap,
    bannerImage: '/assets/image10.jpeg',
    color: 'bg-[#cc2221] text-white',
    categories: [
      {
        name: "BUCKET TEETH & ADAPTORS",
        slug: "bucket-teeth-and-adaptors",
        image: "/assets/image1.jpeg",
        description: "High-strength bucket teeth and adaptors engineered for superior digging performance and extended wear life.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Excavator bucket teeth",
          "Loader bucket teeth",
          "Side cutters & adapters",
          "Wear tips & shanks",
          "Tooth pin & retainer kits"
        ]
      },
      {
        name: "CUTTING EDGES & END BITS",
        slug: "cutting-edges-and-end-bits",
        image: "/assets/image1.jpeg",
        description: "Durable cutting edges and end bits for bulldozers, graders and loaders to deliver smooth and efficient earth cutting.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Bolt-on cutting edges",
          "Grader end bits",
          "Dozer cutting blades",
          "Heat-treated serrated edges",
          "Wear protection plates"
        ]
      },
      {
        name: "ROLLARS & SPROCKETS",
        slug: "rollers-and-sprockets",
        image: "/assets/image1.jpeg",
        description: "High-precision rollers and sprockets built to withstand extreme working conditions and heavy operational loads.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Top carrier rollers",
          "Bottom track rollers",
          "Drive sprockets",
          "Segment sprockets",
          "Idler wheels"
        ]
      },
      {
        name: "COUPLERS & ATTACHEMENTS",
        slug: "couplers-and-attachments",
        image: "/assets/image1.jpeg",
        description: "Heavy-duty couplers and attachments designed for fast tool change and increased job-site versatility.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Quick couplers",
          "Ripper attachments",
          "Hydraulic breakers",
          "Grab buckets & grapples",
          "Auger drilling attachments"
        ]
      },
      {
        name: "HYDRAULIC CYLINDER COMPONENTS",
        slug: "hydraulic-cylinder-components",
        image: "/assets/image1.jpeg",
        description: "Precision-engineered hydraulic cylinder components delivering high power output and smooth motion control.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Cylinder tubes & rods",
          "Piston & gland assemblies",
          "Seal kits",
          "Hydraulic sleeves",
          "Chrome-plated shafts"
        ]
      },
      {
        name: "CAB & BODY PARTS",
        slug: "cab-and-body-parts",
        image: "/assets/image1.jpeg",
        description: "High-quality cabin and body components providing durability, operator comfort, and safety on heavy machines.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Operator cabins",
          "Seat assemblies",
          "Dashboard consoles",
          "Cabin glasses & panels",
          "Safety guard frames"
        ]
      },
      {
        name: "DRUVE TRAIN COMPONENTS",
        slug: "drive-train-components",
        image: "/assets/image1.jpeg",
        description: "Heavy-duty drive train components engineered for maximum power transmission and long service life in construction machinery.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Axles & shafts",
          "Transmission gear sets",
          "Differential assemblies",
          "Planetary gears",
          "Propeller shafts"
        ]
      },
      {
        name: "UNDERCARRIAGE COMPONENTS",
        slug: "undercarriage-components",
        image: "/assets/image1.jpeg",
        description: "Robust undercarriage components designed to withstand rocky, abrasive, and high-impact terrains.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Track chains",
          "Track shoes",
          "Idlers & rollers",
          "Track guards",
          "Recoil springs"
        ]
      }
    ]

  },
  trench_products: {
    id: 'trench_products',
    label: 'TRENCH PRODUCTS',
    icon: Settings,
    bannerImage: '/assets/image10.jpeg',
    color: 'bg-[#cc2221] text-white',
    categories: [
      {
        name: "ZINC & ALUMINIUM CAST ANODES",
        slug: "zinc-aluminium-cast-anodes",
        image: "/assets/image1.jpeg",
        description: "High-purity zinc and aluminium cast anodes designed for long-term corrosion prevention in marine and industrial environments.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Zinc slab anodes",
          "Aluminium block anodes",
          "Boat hull anodes",
          "Pipeline cast anodes",
          "Tank & vessel sacrificial anodes"
        ]
      },
      {
        name: "COATED TITANIUM ANODES",
        slug: "coated-titanium-anodes",
        image: "/assets/image1.jpeg",
        description: "Mixed-metal oxide (MMO) coated titanium anodes built for high-performance cathodic protection with minimal maintenance.",
        videoUrl: "/video/video1.mp4",
        items: [
          "MMO rod anodes",
          "MMO mesh anodes",
          "Ribbon titanium anodes",
          "Tubular titanium anodes",
          "Disc & plate titanium anodes"
        ]
      },
      {
        name: "MAGNESIUM ANODES",
        slug: "magnesium-anodes",
        image: "/assets/image1.jpeg",
        description: "Premium magnesium anodes designed for cathodic protection in underground and freshwater applications.",
        videoUrl: "/video/video1.mp4",
        items: [
          "High potential magnesium anodes",
          "AZ63 magnesium rods",
          "Pre-packaged magnesium anodes",
          "Cast magnesium ingots",
          "Flexible anode assemblies"
        ]
      },
      {
        name: "TRANSFORMERS & RECTIFIERS",
        slug: "transformers-rectifiers",
        image: "/assets/image1.jpeg",
        description: "Reliable transformers and rectifiers engineered to deliver controlled DC output for cathodic protection systems.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Transformer rectifier units (TRU)",
          "Digital automatic rectifiers",
          "Outdoor weatherproof rectifiers",
          "Oil-cooled transformer rectifiers",
          "Panel-mounted rectifier systems"
        ]
      },
      {
        name: "JUNCTION BOXES",
        slug: "junction-boxes",
        image: "/assets/image1.jpeg",
        description: "Industrial-grade junction boxes designed for safe and secure connectivity in cathodic protection setups.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Test station junction boxes",
          "Current distribution boxes",
          "PCB terminal boxes",
          "FRP & metal junction enclosures",
          "Underground access junction boxes"
        ]
      },
      {
        name: "MONITORING EQUIPMENTS",
        slug: "monitoring-equipments",
        image: "/assets/image1.jpeg",
        description: "Advanced monitoring equipment for tracking, measuring and maintaining optimal cathodic protection levels.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Reference electrodes",
          "Remote monitoring units (RMU)",
          "Portable CP survey meters",
          "Potential logging devices",
          "Test station probes"
        ]
      },
      {
        name: "CALES & WIRING SYSTEMS",
        slug: "cales-and-wiring-systems",
        image: "/assets/image1.jpeg",
        description: "Durable cabling and wiring systems engineered for cathodic protection installations in challenging conditions.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Anode lead wires",
          "High molecular weight polyethylene cables",
          "Copper–copper sulfate cable",
          "Cable splicing kits",
          "Underground shielding wires"
        ]
      }
    ]

  },
  precast_molds: {
    id: 'precast_molds',
    label: 'PRECAST MOLDS',
    icon: Cuboid,
    bannerImage: '/assets/image10.jpeg',
    color: 'bg-[#cc2221] text-white',
    categories: [
      {
        name: "PRECAST CONCRETE MOLDS",
        slug: "precast-concrete-molds",
        image: "/assets/image1.jpeg",
        description: "High-precision molds designed for producing durable and uniform concrete elements for large-scale infrastructure and commercial applications.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Slab molds",
          "Beam & column molds",
          "Retaining block molds",
          "Foundation molds",
          "Drainage slab molds"
        ]
      },
      {
        name: "PRECAST ROAD & HIGHWAY MOLDS",
        slug: "precast-road-and-highway-molds",
        image: "/assets/image1.jpeg",
        description: "Specialized molds engineered for constructing safe and long-lasting roads, bridges, and traffic systems.",
        videoUrl: "/video/video1.mp4",
        items: [
          "New Jersey barrier molds",
          "Curbstone molds",
          "RCC divider molds",
          "Bridge girder molds",
          "Crash barrier molds"
        ]
      },
      {
        name: "PRECAST PIPE MOLDS",
        slug: "precast-pipe-molds",
        image: "/assets/image1.jpeg",
        description: "High-strength molds for manufacturing RCC and concrete pipes with leak-proof joints and extreme load resistance.",
        videoUrl: "/video/video1.mp4",
        items: [
          "RCC hume pipe molds",
          "Box culvert pipe molds",
          "Jack pipe molds",
          "Manhole pipe molds",
          "Tongue & groove joint molds"
        ]
      },
      {
        name: "PRECAST BUILDING COMPONENTS",
        slug: "precast-building-components",
        image: "/assets/image1.jpeg",
        description: "Molds for precast structures used in commercial, industrial and residential building applications.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Staircase molds",
          "Wall panel molds",
          "Floor slab molds",
          "Balcony & railing molds",
          "Parapet wall molds"
        ]
      },
      {
        name: "LANDSCAPE & URBAN MOLDS",
        slug: "landscape-and-urban-molds",
        image: "/assets/image1.jpeg",
        description: "Aesthetic molds built for landscape projects and urban beautification with architectural precision.",
        videoUrl: "/video/video1.mp4",
        items: [
          "piving block molds",
          "Planter molds",
          "Tree guard molds",
          "Decorative wall molds",
          "Garden bench molds"
        ]
      },
      {
        name: "UTILITY & MUNICIPAL PRECAST MOLDS",
        slug: "utility-and-municipal-precast-molds",
        image: "/assets/image1.jpeg",
        description: "Heavy-duty molds for public utility components used in municipal and smart-city infrastructure.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Manhole cover molds",
          "Drain channel molds",
          "Electric cable trench molds",
          "Sewer chamber molds",
          "Utility vault molds"
        ]
      },
      {
        name: "WALL & BOUNDRY MOLDS",
        slug: "wall-and-boundary-molds",
        image: "/assets/image1.jpeg",
        description: "Molds engineered for manufacturing compound walls and boundary structures with maximum durability.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Precast wall panel molds",
          "Post & column molds",
          "Prestressed fencing molds",
          "Boundary gate pillar molds",
          "Textured wall molds"
        ]
      },
      {
        name: "INDUSTRIAL PRECAST MOLDS",
        slug: "industrial-precast-molds",
        image: "/assets/image1.jpeg",
        description: "High-end molds designed for industrial precast products used in factories, warehouses and heavy plants.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Machine foundation molds",
          "Cable tray molds",
          "Industrial trench molds",
          "Heavy load slab molds",
          "Factory column & beam molds"
        ]
      },
      {
        name: "AGRICULTURE PRECAST MOLDS",
        slug: "agriculture-precast-molds",
        image: "/assets/image1.jpeg",
        description: "Reliable mold systems for agricultural infrastructure supporting farm automation and irrigation systems.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Cow shed molds",
          "Irrigation canal molds",
          "Feed trough molds",
          "Cattle grid molds",
          "Agriculture fencing molds"
        ]
      },
      {
        name: "MODULAR MOLDS SYSTEMS",
        slug: "modular-molds-systems",
        image: "/assets/image1.jpeg",
        description: "Easy-to-assemble modular mold systems that reduce production time and increase productivity for multiple precast applications.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Adjustable shuttering systems",
          "Steel modular mold panels",
          "Bolt-lock systems",
          "Quick release frames",
          "Universal mold base frames"
        ]
      },
      {
        name: "MOLDS ACCESSORIES",
        slug: "molds-accessories",
        image: "/assets/image1.jpeg",
        description: "A complete range of precision accessories that improve mold performance and lifespan during precast manufacturing.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Lifting anchors",
          "Vibration mechanisms",
          "Rubber gaskets",
          "Rebar positioners",
          "Surface finishing liners"
        ]
      }
    ]

  },
  buildings_supply: {
    id: 'buildings_supply',
    label: 'BUILDING SUPPLY',
    icon: Sun,
    bannerImage: '/assets/image10.jpeg',
    color: 'bg-[#cc2221] text-white',
    categories: [
      {
        name: "MINING PRODUCTS",
        slug: "mining-products",
        image: "/assets/image1.jpeg",
        description: "A complete range of rugged mining components engineered for high wear resistance, longer service life and maximum productivity across quarrying and mineral processing operations.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Crusher Parts",
          "Screen Panels",
          "Idlers & Rollers",
          "Bits & Drill Rods",
          "Blocks & Wear Parts",
          "Teeth & Adaptors",
          "Utility Components"
        ]
      },
      {
        name: "CRUSHER PARTS",
        slug: "crusher-parts",
        image: "/assets/image1.jpeg",
        description: "Heavy-duty crusher components designed for high-impact crushing environments to ensure uninterrupted production and reduced downtime.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Jaw plates",
          "Mantles & concaves",
          "Blow bars & hammers",
          "Side plates & cheek plates",
          "Crusher liners"
        ]
      },
      {
        name: "SCREEN PANELS",
        slug: "screen-panels",
        image: "/assets/image1.jpeg",
        description: "High-efficiency screen panels engineered for superior separation, reduced clogging and longer wear life in material screening applications.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Polyurethane screen panels",
          "Rubber screen panels",
          "Trommel screens",
          "Wedge wire screens",
          "Modular screen panels"
        ]
      },
      {
        name: "IDLERS & ROLLERS",
        slug: "idlers-and-rollers",
        image: "/assets/image1.jpeg",
        description: "Reliable conveyor idlers and rollers built to withstand abrasive mining environments and ensure smooth bulk handling operations.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Carrying idlers",
          "Impact idlers",
          "Return rollers",
          "Troughing idlers",
          "Guide rollers"
        ]
      },
      {
        name: "BITS & DRILL RODS",
        slug: "bits-and-drill-rods",
        image: "/assets/image1.jpeg",
        description: "Rock-drilling tools made for deep penetration, fast drilling rates and maximum wear resistance across surface and underground mining.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Tungsten carbide drill bits",
          "Button bits",
          "DTH hammer bits",
          "Drill rods & extensions",
          "Threaded shank adapters"
        ]
      },
      {
        name: "BLOCKS & WEAR PARTS",
        slug: "blocks-and-wear-parts",
        image: "/assets/image1.jpeg",
        description: "Premium wear-resistant blocks and liners designed to protect mining machinery from extreme abrasion and impact environments.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Wear blocks",
          "Chocky bars",
          "Wear buttons",
          "Ceramic liners",
          "Hard-faced plates"
        ]
      },
      {
        name: "TEETH & ADAPTORS",
        slug: "teeth-and-adaptors",
        image: "/assets/image1.jpeg",
        description: "High-strength bucket teeth and adaptors that ensure excellent digging performance, easy replacement and long operational life.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Excavator bucket teeth",
          "Loader bucket teeth",
          "Tooth adaptors",
          "Side cutter teeth",
          "Wear tips"
        ]
      },
      {
        name: "UTILITY COMPONENTS",
        slug: "utility-components",
        image: "/assets/image1.jpeg",
        description: "Specialized mining utility components that enhance the efficiency, safety and durability of mining and bulk-handling systems.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Fasteners & locking systems",
          "Hydraulic wear components",
          "Lubrication accessories",
          "Hose & pipe clamps",
          "Support brackets & plates"
        ]
      }
    ]

  },
  tree_grates: {
    id: 'tree_grates',
    label: 'TREE GRATES',
    icon: Droplets,
    bannerImage: '/assets/image10.jpeg',
    color: 'bg-[#cc2221] text-white',
    categories: [
      {
        name: "METALS & ALLOYS",
        slug: "metals-and-alloys",
        image: "/assets/image1.jpeg",
        description: "A broad portfolio of engineered metal and alloy products designed for industrial, mechanical and structural applications with superior performance and reliability.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Ductile iron castings",
          "High manganese steel parts",
          "Stainless steel components",
          "Alloy steel forged parts",
          "Aluminium & brass components",
          "White iron castings",
          "Copper & bronze precision parts",
          "Electrical component alloys",
          "Metal fabricated items",
          "Pipes, tubes & fittings"
        ]
      },
      {
        name: "DUCTILE IRON CASTINGS",
        slug: "ductile-iron-castings",
        image: "/assets/image1.jpeg",
        description: "Precision ductile iron castings offering superior ductility, fatigue strength and impact resistance for heavy-duty applications.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Pump casings",
          "Gearbox housings",
          "Valve bodies",
          "Automotive castings",
          "Pipe fittings castings"
        ]
      },
      {
        name: "HIGH MANGANESE STEEL PARTS",
        slug: "high-manganese-steel-parts",
        image: "/assets/image1.jpeg",
        description: "Extremely wear-resistant manganese steel components developed for high impact and abrasive industrial environments.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Crusher liners",
          "Hammers",
          "Chutes & grates",
          "Rail components",
          "Wear plate parts"
        ]
      },
      {
        name: "STAINLESS STEEL COMPONENTS",
        slug: "stainless-steel-components",
        image: "/assets/image1.jpeg",
        description: "Corrosion-resistant stainless steel components designed for hygienic, high-pressure and industrial applications.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Food processing parts",
          "Pump impellers",
          "Valve components",
          "Shafts & flanges",
          "Heat exchanger parts"
        ]
      },
      {
        name: "ALLOY STEEL FORGED PARTS",
        slug: "alloy-steel-forged-parts",
        image: "/assets/image1.jpeg",
        description: "High-strength alloy steel forgings engineered to withstand heavy loads, extreme temperatures and repeated stress.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Gears & pinions",
          "Crankshafts",
          "Connecting rods",
          "Flange forgings",
          "Industrial shafts"
        ]
      },
      {
        name: "ALUMINIUM & BRASS COMPONENTS",
        slug: "aluminium-and-brass-components",
        image: "/assets/image1.jpeg",
        description: "Lightweight aluminium and brass components widely used in automotive, electrical, construction and precision industries.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Automotive housings",
          "Electrical terminals",
          "Heat sink housings",
          "Hydraulic parts",
          "Marine hardware components"
        ]
      },
      {
        name: "WHITE IRON CASTINGS",
        slug: "white-iron-castings",
        image: "/assets/image1.jpeg",
        description: "Ultra wear-resistant white iron castings engineered for abrasion-heavy industries demanding long service life.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Liners & lifter bars",
          "Pump sleeves",
          "Grinding mill parts",
          "Chocky bars",
          "Wear tiles"
        ]
      },
      {
        name: "COPPER & BRONZE PRECISION PARTS",
        slug: "copper-and-bronze-precision-parts",
        image: "/assets/image1.jpeg",
        description: "Electrically conductive and corrosion-resistant copper and bronze components built for mechanical and electrical performance.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Bushings & bearings",
          "Worm gear wheels",
          "Switchgear parts",
          "Precision connectors",
          "Hydraulic valve inserts"
        ]
      },
      {
        name: "ELECTRICAL COMPONENT ALLOYS",
        slug: "electrical-component-alloys",
        image: "/assets/image1.jpeg",
        description: "Premium electrical-grade alloys for high-efficiency current conduction, heat resistance and long service life.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Busbar alloys",
          "Contact terminals",
          "Earthing components",
          "Connector studs",
          "Conductive sleeves"
        ]
      },
      {
        name: "METAL FABRICATED ITEMS",
        slug: "metal-fabricated-items",
        image: "/assets/image1.jpeg",
        description: "Custom fabricated metal components tailored to industrial projects requiring structural accuracy and durability.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Welded assemblies",
          "Structural brackets",
          "Base frames",
          "Support stands",
          "Sheet metal enclosures"
        ]
      },
      {
        name: "PIPES, TUBES & FITTINGS",
        slug: "pipes-tubes-and-fittings",
        image: "/assets/image1.jpeg",
        description: "Industrial-grade metal pipes, tubes and fittings designed for fluid handling, HVAC, chemical and mechanical applications.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Seamless steel pipes",
          "Stainless steel tubes",
          "Flanged fittings",
          "Threaded pipe fittings",
          "High-pressure elbows & tees"
        ]
      }
    ]
  },
  fabrication_products: {
    id: 'fabrication_products',
    label: 'FABRICATOIN PRODUCTS',
    icon: Cog,
    bannerImage: '/assets/PAVING-RISERS/paving riser 1.5200.png',
    color: 'bg-[#cc2221] text-white',
    categories: [
      {
        name: "ADJUSTABLE piving RISERS",
        slug: "adjustable-PAVING-risers",
        image: "/assets/PAVING-RISERS/paving riser 1.5201.png",
        description: "Height-adjustable pedestal risers for outdoor piving applications, ensuring precise leveling and strong load-bearing support.",
        videoUrl: "/video/paving_riser/paving riser 1.5213.mp4",
        items: [
          "Standard adjustable risers",
          "Heavy-duty pedestal risers",
          "Self-levelling risers",
          "Slope-compensation risers",
          "Acoustic & shock absorber pads"
        ]
      },
      {
        name: "FIXED HEIGHT RISERS",
        slug: "fixed-height-risers",
        image: "/assets/PAVING-RISERS/paving riser 1.5203.png",
        description: "Fixed-height pedestal systems suitable for balconies, terraces, swimming pool decks and light-weight flooring installations.",
        videoUrl: "/video/paving_riser/paving riser 1.5216.mp4",
        items: [
          "15 mm risers",
          "25 mm risers",
          "35 mm risers",
          "50 mm risers",
          "Load-bearing pads"
        ]
      },
      {
        name: "TILE & PAVER SUPPORT ACCESSORIES",
        slug: "tile-and-paver-support-accessories",
        image: "/assets/PAVING-RISERS/paving riser 1.5204.png",
        description: "Accessories for installation accuracy, anti-slip finish and vibration control during piving projects.",
        videoUrl: "/video/paving_riser/paving riser 1.5217.mp4",
        items: [
          "Spacer tabs",
          "Edge finish supports",
          "Anti-slip rubber base pads",
          "Height extension shims",
          "Noise-reduction gaskets"
        ]
      },
      {
        name: "DECKING & OUTDOOR FLOORING SOLUTIONS",
        slug: "decking-and-outdoor-flooring-solutions",
        image: "/assets/PAVING-RISERS/paving riser 1.5205.png",
        description: "Pedestal support systems compatible with composite decking, ceramic outdoor tiles, stone slabs and raised exterior flooring.",
        videoUrl: "/video/paving_riser/paving riser 1.5223.mp4",
        items: [
          "Composite deck pedestal systems",
          "Porcelain & ceramic tile pedestal systems",
          "Natural stone slab support systems",
          "Raised garden walkway supports",
          "Swimming pool platform supports"
        ]
      },
      {
        name: "DECKING & OUTDOOR FLOORING SOLUTIONS",
        slug: "decking-and-outdoor-flooring-solutions",
        image: "/assets/PAVING-RISERS/paving riser 1.5200.png",
        description: "Pedestal support systems compatible with composite decking, ceramic outdoor tiles, stone slabs and raised exterior flooring.",
        videoUrl: "/video/paving_riser/paving riser 1.5251.mp4",
        items: [
          "Composite deck pedestal systems",
          "Porcelain & ceramic tile pedestal systems",
          "Natural stone slab support systems",
          "Raised garden walkway supports",
          "Swimming pool platform supports"
        ]
      }
    ]
  },
  paving_risers: {
    id: 'paving_risers',
    label: 'PAVING RISERS',
    icon: Wrench,
    bannerImage: '/assets/image10.jpeg',
    color: 'bg-[#cc2221] text-white',
    categories: []
  },
  petro_products: {
    id: 'petro_products',
    label: 'PETRO PRODUCTS',
    icon: Droplets, // use any lucide icon
    bannerImage: '/assets/waterworks-banner.jpeg',
    color: 'bg-blue-100 text-blue-900',
    categories: [
      {
        name: "MECHANICAL JOINT FITTINGS",
        slug: "mechanical-joint-fittings",
        image: "/assets/mechanical-joint-fittings.jpeg",
        description:
          "Mechanical joint fittings designed for secure and leak-free underground and above-ground water distribution networks.",
        videoUrl: "/video/video1.mp4",
        items: [
          "C153 MJ Fittings",
          "C110 MJ Fittings",
          "C110 Flange Fittings",
          "C153 Push-On Fittings",
          "C110 Push-On Fittings"
        ]
      },
      {
        name: "VALVE, CURB, METER BOXES & ACCESSORIES",
        slug: "valve-curb-meter-boxes-accessories",
        image: "/assets/valve-meter-boxes.jpeg",
        description:
          "High-performance valve and meter box assemblies engineered for efficient water control and distribution.",
        videoUrl: "/video/video1.mp4",
        items: []
      },
      {
        name: "RESTRAINTS",
        slug: "restraints",
        image: "/assets/restraints.jpeg",
        description:
          "Safety-focused restraints for pipeline protection and axial movement control.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Pipe Restraints",
          "Flange Restraints"
        ]
      },
      {
        name: "MECHANICAL JOINT ACCESSORIES",
        slug: "mechanical-joint-accessories",
        image: "/assets/mj-accessories.jpeg",
        description:
          "Supporting components to enhance durability and sealing of mechanical joint assemblies.",
        videoUrl: "/video/video1.mp4",
        items: []
      },
      {
        name: "MECHANICAL JOINT CONNECTORS",
        slug: "mechanical-joint-connectors",
        image: "/assets/mj-connectors.jpeg",
        description:
          "Heavy-duty connectors designed to withstand high pressure in municipal water networks.",
        videoUrl: "/video/video1.mp4",
        items: []
      },
      {
        name: "WATER WORKS TOOLS",
        slug: "water-works-tools",
        image: "/assets/water-works-tools.jpeg",
        description:
          "Trusted water-line tools for installation, repair and maintenance of water infrastructure.",
        videoUrl: "/video/video1.mp4",
        items: []
      }
    ]
  },
  monitoring_wells: {
    id: 'monitoring_wells',
    label: 'MONITORING WELLS',
    icon: Factory,
    bannerImage: '/assets/image10.jpeg',
    color: 'bg-[#cc2221] text-white',
    categories: []
  },
  water_works_tools: {
    id: 'water_works_tools',
    label: 'WATER WORKS TOOLS',
    icon: Flame,
    bannerImage: '/assets/image10.jpeg',
    color: 'bg-[#cc2221] text-white',
    categories: []
  },
  irrigation_products: {
    id: 'irrigation_products',
    label: 'IRRIGATION PRODUCTS',
    icon: Building,
    bannerImage: '/assets/image10.jpeg',
    color: 'bg-[#cc2221] text-white',
    categories: []
  },
  forgings: {
    id: 'forgings',
    label: 'FORGINGS',
    icon: Bolt,
    bannerImage: '/assets/image10.jpeg',
    color: 'bg-[#cc2221] text-white',
    categories: []
  },
  marine_casting: {
    id: 'marine_casting',
    label: 'MARINE CASTING',
    icon: Shield,
    bannerImage: '/assets/image10.jpeg',
    color: 'bg-[#cc2221] text-white',
    categories: []
  },
  custom_manufacturing: {
    id: 'custom_manufacturing',
    label: 'CUSTOM MANUFACTURING',
    icon: Hammer,
    bannerImage: '/assets/image10.jpeg',
    color: 'bg-[#cc2221] text-white',
    categories: []
  },
  forge_shop_products: {
    id: 'forge_shop_products',
    label: 'FORGE SHOP PRODUCTS',
    icon: Anvil,
    bannerImage: '/assets/image10.jpeg',
    color: 'bg-[#cc2221] text-white',
    categories: []
  },
  industrial_machinery: {
    id: 'industrial_machinery',
    label: 'INDUSTRIAL MACHINERY',
    icon: Cog,
    bannerImage: '/assets/image10.jpeg',
    color: 'bg-[#cc2221] text-white',
    categories: []
  },
  snow_plough: {
    id: 'snow_plough',
    label: 'SNOW PLOUGH',
    icon: Cog,
    bannerImage: '/assets/image9.jpeg',
    color: 'bg-[#cc2221] text-white',
    categories: []
  },
  custom_offerings: {
    id: 'custom_offerings',
    label: 'CUSTOM OFFERINGS',
    icon: Hammer, // or any lucide icon you prefer
    bannerImage: '/assets/image10.jpeg',
    color: 'bg-purple-100 text-purple-900',
    categories: [
      {
        name: "Bespoke Casting Solutions",
        slug: "bespoke-casting-solutions",
        image: "/assets/image10.jpeg",
        description:
          "Tailor-made casting solutions designed to meet unique project requirements and industrial applications.",
        videoUrl: "/video/custom solutions/5900-E CN tower Brick.478.mp4",
        items: [
          "Custom geometry castings",
          "Special grade alloy castings",
          "Rapid prototype castings",
          "Small-batch / trial cast production"
        ]
      },
      {
        name: "Precision Machining & Fabrication",
        slug: "precision-machining-fabrication",
        image: "/assets/image10.jpeg",
        description:
          "High-precision machining and fabrication services engineered for accuracy, strength, and long-term performance.",
        videoUrl: "/video/custom solutions/5900-E CN tower Brick.478.mp4",
        items: []
      },
      {
        name: "OEM / Private Label Manufacturing",
        slug: "oem-private-label-manufacturing",
        image: "/assets/image10.jpeg",
        description:
          "Custom OEM production services for companies seeking branding, packaging, and dedicated product development.",
        videoUrl: "/video/custom solutions/5900-E CN tower Brick.478.mp4",
        items: []
      },
      {
        name: "Reverse Engineering",
        slug: "reverse-engineering",
        image: "/assets/image10.jpeg",
        description:
          "Accurate reverse engineering for discontinued, legacy, and rare industrial components.",
        videoUrl: "/video/custom solutions/5900-E CN tower Brick.478.mp4",
        items: []
      },
      {
        name: "Project-Based Manufacturing",
        slug: "project-based-manufacturing",
        image: "/assets/image10.jpeg",
        description:
          "Turnkey project-based industrial manufacturing tailored to large-scale infrastructure and engineering needs.",
        videoUrl: "/video/custom solutions/5900-E CN tower Brick.478.mp4",
        items: []
      }
    ]
  },
  marine_castings: {
    id: 'marine_castings',
    label: 'MARINE CASTINGS',
    icon: Anchor, // you can change icon if needed
    bannerImage: '/assets/image18.jpeg',
    color: 'bg-blue-100 text-blue-900',
    categories: [
      {
        name: "Marine Propellers & Impellers",
        slug: "marine-propellers-impellers",
        image: "/assets/image18.jpeg",
        description:
          "High-precision bronze and stainless-steel propellers for marine vessels, ensuring superior thrust, durability, and hydrodynamic efficiency.",
        videoUrl: "/video/marine_castings/marine_castings1.mp4",
        items: [
          "Fixed pitch propellers",
          "Controllable pitch propellers",
          "High-strength impellers",
          "Custom-designed propeller blades",
          "Propeller hubs & assemblies"
        ]
      },
      {
        name: "Marine Body & Hull Castings",
        slug: "marine-body-hull-castings",
        image: "/assets/image18.jpeg",
        description:
          "Durable corrosion-resistant cast components built for harsh marine environments, structural integrity, and long-term reliability.",
        videoUrl: "/video/marine_castings/marine_castings1.mp4",
        items: [
          "Deck fittings",
          "Anchor housings",
          "Rudder components",
          "Keel inserts",
          "Hull reinforcement castings"
        ]
      },
      {
        name: "Corrosion-Resistant Marine Hardware",
        slug: "corrosion-resistant-marine-hardware",
        image: "/assets/image18.jpeg",
        description:
          "Cast components engineered using marine-grade alloys for exceptional resistance to corrosion, seawater, and environmental wear.",
        videoUrl: "/video/marine_castings/marine_castings2.mp4",
        items: [
          "Marine hinges & brackets",
          "Stainless steel cleats",
          "Bow & stern hardware",
          "Handrail fittings",
          "Custom hardware components"
        ]
      },
      {
        name: "Marine Pump & Valve Castings",
        slug: "marine-pump-valve-castings",
        image: "/assets/image18.jpeg",
        description:
          "Precision cast pump and valve components widely used in marine cooling systems, bilge systems, and ballast operations.",
        videoUrl: "/video/marine_castings/marine_castings1.mp4",
        items: [
          "Pump casings",
          "Impeller housings",
          "Valve bodies",
          "Flanged pump fittings",
          "Pressure-resistant cast assemblies"
        ]
      },
      {
        name: "Offshore & Underwater Equipment Castings",
        slug: "offshore-underwater-equipment-castings",
        image: "/assets/image18.jpeg",
        description:
          "Heavy-duty castings designed for offshore platforms, underwater operations, and deep-sea applications.",
        videoUrl: "/video/marine_castings/marine_castings1.mp4",
        items: [
          "Underwater housing castings",
          "Sonar equipment casings",
          "Offshore platform fittings",
          "Buoyancy equipment castings",
          "Subsea structural components"
        ]
      }
    ]
  },


};
export type FooterLink = { label: string; href: string };

export type FooterSection = {
  title: string;
  links: FooterLink[];
};

export type FooterColumn = {
  id: string;
  sections: FooterSection[]; // Every column now has a list of sections
};

// 2. Helper to generate links (Prevents typing /footerPages/ 100 times)
const makeLink = (label: string, slug: string) => ({
  label,
  href: `/footerPages/${slug}`,
});

// 3. The Clean Data Structure
export const footerColumns: FooterColumn[] = [
  {
    id: "corporate",
    sections: [
      {
        title: "Corporate",
        links: [
          makeLink("Customer Services", "customer-services"),
          makeLink("Accounts Dept.", "accounts-dept"),
          makeLink("Awards & Achievements", "awards-achievements"),
          makeLink("Leadership Team", "leadership-team"),
          makeLink("Our Values", "our-values"),
          makeLink("Current Events", "current-events"),
          makeLink("Global Presence", "global-presence"),
          makeLink("Executive Committee", "executive-committee"),
          makeLink("Our Foundation", "our-foundation"),
          makeLink("Human Resources", "human-resources"),
          makeLink("Mission & Vision", "mission-vision"),
          makeLink("Monthly Raffle", "monthly-raffle"),
          makeLink("Organizational Structure", "organizational-structure"),
          makeLink("Scholarships", "scholarships"),
          makeLink("Testimonials", "testimonials"),
          makeLink("Our Milestones", "our-milestones"),
          makeLink("Industrial Articles", "industrial-articles"),
          makeLink("Trade Shows", "trade-shows"),
        ],
      },
    ],
  },
  {
    id: "resources",
    sections: [
      {
        title: "Resources",
        links: [
          makeLink("Products Pricing", "products-pricing"),
          makeLink("Exports/Imports", "exports-imports"),
          makeLink("Media Managements", "media-managements"),
          makeLink("Animations & Videos", "animations-videos"),
          makeLink("Product Catalogs", "product-catalogs"),
          makeLink("Installation Guide", "installation-guide"),
          makeLink("Data Center", "data-center"),
          makeLink("Sales Team", "sales-team"),
          makeLink("Follow Your Order", "follow-your-order"),
          makeLink("On Going Projects", "on-going-projects"),
          makeLink("Request for Delivery", "request-for-delivery"),
          makeLink("Request for Quote", "request-for-quote"),
          makeLink("Logistics", "logistics"),
          makeLink("Webinars", "webinars"),
          makeLink("Certifications", "certifications"),
          makeLink("Design Resources", "design-resources"),
          makeLink("Compliances", "compliances"),
          makeLink("FAQs", "faqs"),
        ],
      },
    ],
  },
  {
    id: "engineering",
    sections: [
      {
        title: "Engineering",
        links: [
          makeLink("Market Analysis", "market-analysis"),
          makeLink("Case Studies", "case-studies"),
          makeLink("Specifications", "specifications"),
          makeLink("Standards", "standards"),
          makeLink("Submittals", "submittals"),
          makeLink("Shop Drawings", "shop-drawings"),
          makeLink("Engineering Drawings", "engineering-drawings"),
          makeLink("Data Sheets", "data-sheets"),
          makeLink("Engineers & Architects", "engineers-architects"),
          makeLink("IT Department", "it-department"),
          makeLink("Innovations", "innovations"),
          makeLink("Customizations", "customizations"),
          makeLink("Quality Control", "quality-control"),
          makeLink("CRM System", "crm-system"),
          makeLink("Manufacturing", "manufacturing"),
          makeLink("Approvals", "approvals"),
          makeLink("Latest Technologies", "latest-technologies"),
        ],
      },
    ],
  },
  {
    id: "product-categories",
    sections: [
      {
        title: "Product Categories",
        links: [
          makeLink("Irrigation Products", "irrigation-products"),
          makeLink("Earth Moving Equipments", "earth-moving-equipments"),
          makeLink("Cathodic Protection", "cathodic-protection"),
          makeLink("Precast & Molds", "precast-molds"),
          makeLink("Mining Products", "mining-products"),
          makeLink("Metals & Alloys", "metals-alloys"),
          makeLink("Fabrication", "fabrication"),
          makeLink("Foundry Equipments", "foundry-equipments"),
          makeLink("Oil & Gas Industries Products", "oil-gas-products"),
          makeLink("Construction & Infrastructure", "construction-infrastructure"),
          makeLink("Utility & Power Energy", "utility-power-energy"),
          makeLink("Defence & Aerospace", "defence-aerospace"),
          makeLink("Custom Manufacturing", "custom-manufacturing"),
          makeLink("Forge Shop Products", "forge-shop-products"),
          makeLink("Industrial Machinery", "industrial-machinery"),
          makeLink("Wind & Solar", "wind-solar"),
        ],
      },
    ],
  },
  {
    id: "policies",
    sections: [
      {
        title: "Policies",
        links: [
          makeLink("Government Policy", "government-policy"),
          makeLink("Privacy Policy", "privacy-policy"),
          makeLink("Terms & Conditions", "terms-conditions"),
          makeLink("Security & Maintenance", "security-maintenance"),
          makeLink("Credit Application", "credit-application"),
          makeLink("Corporate Social Responsibility", "corporate-social-responsibility"),
          makeLink("Non Disclosure Agreement", "non-disclosure-agreement"),
          makeLink("Approvals", "approvals"),
          makeLink("Return Policy", "return-policy"),
          makeLink("Warranties", "warranties"),
          makeLink("Product Liabilities", "product-liabilities"),
          makeLink("Confidentiality", "confidentiality"),
          makeLink("Sustainability", "sustainability"),
          makeLink("Insurances", "insurances"),
          makeLink("Complaints", "complaints"),
          makeLink("Patents", "patents"),
        ],
      },
    ],
  },
  {
    id: "support-quality",
    // This column has TWO sections, but follows the same pattern as above!
    sections: [
      {
        title: "Support & Services",
        links: [
          makeLink("Technical Support", "technical-support"),
          makeLink("Customer Support", "customer-support"),
          makeLink("Engineering Consultancy", "engineering-consultancy"),
          makeLink("After Sales Services", "after-sales-services"),
          makeLink("Installation Support", "installation-support"),
          makeLink("Custom Support", "custom-support"),
          makeLink("Live Solutions", "live-solutions"),
        ],
      },
      {
        title: "Quality & Compliances",
        links: [
          makeLink("Chemical Testing", "chemical-testing"),
          makeLink("Physical Testing", "physical-testing"),
          makeLink("Manual Testing", "manual-testing"),
          makeLink("Testing & Inspection", "testing-inspection"),
          makeLink("Material Analysis", "material-analysis"),
          makeLink("Quality Control Process", "quality-control-process"),
          makeLink("Approval & Certification", "approval-certification"),
        ],
      },
    ],
  },
];