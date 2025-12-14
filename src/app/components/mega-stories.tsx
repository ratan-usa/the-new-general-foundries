import Image from "next/image"
import { 
  ArrowRight, 
  Settings, 
  Zap, 
  Hammer, 
  Anchor, 
  Droplets, 
  Cuboid, 
  Sun, 
  Flame,
  Building,
  Bolt,
  Shield,
  Wrench,
  Cog
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// 1. Your Local Images (Cycling these for items that don't have a specific banner)
const myImages = [
  "/assets/image10.jpeg", // Using your provided banner image
  "/assets/image1.jpeg",  // Using your provided category image
  "/assets/image18.jpeg", // Marine
  "/assets/image9.jpeg",  // Snow Plough
  "/assets/image11.jpg",
  "/assets/image14.jpeg",
  "/assets/image16.jpg",
]

// 2. Data Flattened from your `menuData` to fit the 16-Grid Layout
const products = [
  {
    id: "irrigation_products",
    title: "Complete Irrigation Systems & Water Control",
    category: "Irrigation",
    brand: "TechnoML",
    price: "View Catalog",
    isHero: true, // Big Card
    icon: Zap,
    image: "/assets/image10.jpeg"
  },
  { id: "earth_moving", title: "Bucket Teeth & Excavator Adaptors", category: "Earth Moving", brand: "HeavyDuty", price: "$450.00", icon: Zap },
  { id: "cathodic", title: "Zinc & Aluminium Sacrificial Anodes", category: "Protection", brand: "MarineSafe", price: "$120.00", icon: Settings },
  { id: "precast", title: "Precast Concrete Molds & Road Barriers", category: "Infrastructure", brand: "InfraBuild", price: "Custom", icon: Cuboid },
  { id: "mining", title: "Crusher Parts & Screen Panels", category: "Mining", brand: "RockCrush", price: "$2,100", icon: Sun },
  { id: "metals", title: "Ductile Iron & Stainless Steel Castings", category: "Alloys", brand: "Foundry", price: "RFQ", icon: Droplets },
  { id: "paving", title: "Adjustable Paving Risers & Pedestals", category: "Construction", brand: "LevelUp", price: "$15.00", icon: Cog },
  { id: "water_works", title: "Mechanical Joint Fittings & Valves", category: "Water Works", brand: "FlowControl", price: "$89.00", icon: Droplets },
  { id: "fabrication", title: "Custom Structural Metal Fabrication", category: "Services", brand: "TechnoFab", price: "Custom", icon: Wrench },
  { id: "marine", title: "Bronze Propellers & Marine Hulls", category: "Marine", brand: "Nautical", price: "$3,500", icon: Anchor },
  { id: "oil_gas", title: "High-Pressure Valve Components", category: "Oil & Gas", brand: "PetroParts", price: "RFQ", icon: Flame },
  { id: "construction", title: "Scaffolding & Infrastructure Parts", category: "Construction", brand: "BuildSafe", price: "RFQ", icon: Building },
  { id: "utility", title: "Power Transmission Hardware", category: "Utility", brand: "GridTech", price: "$200.00", icon: Bolt },
  { id: "defence", title: "Aerospace & Defence Grade Castings", category: "Defence", brand: "AeroCast", price: "Restricted", icon: Shield },
  { id: "custom", title: "Bespoke OEM Manufacturing", category: "Manufacturing", brand: "TechnoML", price: "Contact", icon: Hammer },
  { id: "snow", title: "Industrial Snow Plough Attachments", category: "Equipment", brand: "WinterOps", price: "$1,200", icon: Cog },
]

export function MegaStories() {
  const heroProduct = products[0]
  const gridProducts = products.slice(1) // Items 2-16

  return (
    <section className="w-full px-4 md:px-8 py-12 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-black uppercase border-l-4 border-black pl-4">
          Industrial Marketplace
        </h2>
        <Button variant="outline" className="hidden sm:flex group border-black text-black hover:bg-zinc-100">
          View All Categories <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* === HERO PRODUCT (Left Big Card) === */}
        <div className="md:col-span-2 md:row-span-2 h-full min-h-[400px]">
           <Card className="h-full w-full overflow-hidden group border-0 shadow-xl relative rounded-xl bg-zinc-900 cursor-pointer">
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
              
              <Image
                src={heroProduct.image || myImages[0]} 
                alt={heroProduct.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
              />
              
              <div className="absolute bottom-0 left-0 p-8 z-20 text-white w-full">
                <Badge className="mb-4 bg-red-600 hover:bg-red-700 text-white border-0">
                  TOP SELLER
                </Badge>
                <h3 className="text-3xl md:text-5xl font-bold leading-tight mb-4 drop-shadow-md">
                  {heroProduct.title}
                </h3>
                <div className="flex items-center gap-6 text-sm text-gray-200 font-medium">
                  <span className="flex items-center gap-2">
                    <heroProduct.icon className="h-4 w-4" /> {heroProduct.brand}
                  </span>
                  <span className="flex items-center gap-2 text-white font-bold bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    {heroProduct.price}
                  </span>
                </div>
              </div>
            </Card>
        </div>

        {/* === GRID ITEMS (Remaining 15 Cards) === */}
        {gridProducts.map((product, index) => {
          // Cycle images, prioritizing specific ones if we mapped them, otherwise generic cycling
          const imageIndex = (index + 1) % myImages.length 
          const imageSrc = myImages[imageIndex]
          const Icon = product.icon

          return (
            <Card key={product.id} className="group flex flex-col overflow-hidden border border-zinc-200 shadow-sm hover:shadow-lg transition-all h-[320px]">
              <div className="relative h-48 w-full overflow-hidden bg-zinc-100">
                <Image
                  src={imageSrc}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3">
                   <Badge className="bg-white/95 text-black hover:bg-white backdrop-blur-md shadow-sm border border-zinc-100 uppercase text-[10px]">
                      {product.category}
                   </Badge>
                </div>
              </div>
              
              <CardContent className="flex-1 p-4 flex flex-col justify-between bg-white">
                <div>
                  <h4 className="font-bold text-base leading-snug line-clamp-2 group-hover:text-red-600 transition-colors">
                    {product.title}
                  </h4>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground mt-3 pt-3 border-t border-zinc-100">
                    <span className="font-medium text-black flex items-center gap-1">
                      <Icon className="h-3 w-3" /> {product.brand}
                    </span>
                    <span className="font-bold text-black bg-zinc-100 px-2 py-1 rounded">
                      {product.price}
                    </span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="mt-12 text-center pb-8">
         <Button size="lg" className="bg-black text-white hover:bg-zinc-800 min-w-[200px]">
            Download Full Catalog
         </Button>
      </div>
    </section>
  )
}