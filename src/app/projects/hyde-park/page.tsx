"use client"

import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import ProjectStats from "@/components/project-stats"
import ZoneSection from "@/components/zone-section"
import PresentationShowcase from "@/components/presentation-showcase"
import ImageWithFallback from "@/components/figma/ImageWithFallback"
import { MapPin, Calendar, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

const zones = [
  {
    title: "Project Overview",
    description:
      "Hyde Park is one of the leading developments in the real estate sector, developing exclusive and luxurious real estate properties of enduring value all over the hot spots of Egypt. HPD provides high standards of residential communities and lavish properties, through the variation and integration of services and supreme professional experience in planning, executing, managing, and maintaining developments.",
    mainImage: "/images/hyde-park-new-master-plan.jpg",
    images: ["/images/hyde-park-site-plan.jpg", "/images/hyde-park-green-space.jpg"],
    features: [],
    projectDetails: {
      scope: "Residential Development - Luxury Living",
      location: "Hyde Park, New Cairo",
      date: "2008–2035",
      about: "Typology: Mixed Residential Community",
      area: "4,620,000 m2",
    },
  },
  {
    title: "R2/R3",
    description:
      "Two residential clusters carefully master-planned to balance density, open space, and walkability, delivering a diverse range of units and shared amenities.",
    mainImage: "/images/r2r3-main.jpg",
    images: [
      "/images/r2r3-1.jpg",
      "/images/r2r3-2.jpg",
      "/images/r2r3-3.jpg",
      "/images/r2r3-4.jpg",
      "/images/r2r3-5.jpg",
    ],
    features: ["Mixed housing typologies", "Pocket parks", "Local retail", "Community services"],
    projectDetails: {
      scope: "Residential Clusters R2/R3",
      location: "Hyde Park, New Cairo",
      date: "2021–2023",
      about: "Medium-density neighborhoods with integrated amenities",
      area: "—",
    },
  },
  {
    title: "Hyde Park Central",
    description:
      "The community’s vibrant heart — a central precinct with retail, offices, F&B, and civic spaces woven together around generous public realm.",
    mainImage: "/images/hpc-main.jpg",
    images: [
      "/images/hpc-1.jpg",
      "/images/hpc-2.jpg",
      "/images/hpc-3.jpg",
      "/images/hpc-4.jpg",
      "/images/hpc-5.jpg",
    ],
    features: ["Retail & F&B", "Office space", "Public realm", "Civic anchors"],
    projectDetails: {
      scope: "Mixed-use Central Precinct",
      location: "Hyde Park, New Cairo",
      date: "2022–2024",
      about: "Retail, office, and civic program around plazas",
      area: "—",
    },
  },
  {
    title: "Seashore",
    description:
      "A leisure-front destination blending landscape, hospitality, and recreation with long promenades and a sequence of waterfront experiences.",
    mainImage: "/images/seashore-main.jpg",
    images: [
      "/images/seashore-1.jpg",
      "/images/seashore-2.jpg",
      "/images/seashore-3.jpg",
      "/images/seashore-4.jpg",
      "/images/seashore-5.jpg",
      "/images/seashore-6.jpg",
      "/images/seashore-7.jpg",
    ],
    features: ["Promenades", "Hospitality", "Beach recreation", "Landscape sequences"],
    projectDetails: {
      scope: "Waterfront Leisure Development",
      location: "Hyde Park, New Cairo",
      date: "2021–2024",
      about: "Leisure-front with hospitality and recreation",
      area: "—",
    },
  },
]

export default function HydeParkPage() {
  const router = useRouter()

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back()
    } else {
      router.push("/projects")
    }
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full shadow-lg hover:bg-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/Background.jpg%281%29-Wpy11DKrBhoaWNc3bU0YOnk9zoihdC.jpeg"
            alt="Hyde Park Development Aerial View"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <Badge variant="secondary" className="mb-6">
            Mixed-Use Development
          </Badge>
          <h1 className="text-5xl md:text-7xl mb-6">Hyde Park</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            A sophisticated mixed-use development that redefines urban living through luxury residential, dynamic
            commercial spaces, and world-class entertainment facilities in New Cairo.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>New Cairo, Egypt</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>2020 - 2024</span>
            </div>
            {/* Removed "Luxury Development" Award block */}
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Project Overview</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hyde Park stands as a landmark development that seamlessly integrates luxury living, business excellence,
              and entertainment sophistication, creating a complete urban ecosystem.
            </p>
          </div>
          <ProjectStats />
        </div>
      </section>

      <Separator />

      {/* Development Areas */}
      <section className="pt-8 pb-20">
        <div className="px-6 mb-12">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="mb-4">Development Areas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Four distinct yet interconnected areas that work together to create a vibrant, self-sustaining community
              where residents can live, work, play, and connect with nature.
            </p>
          </div>
        </div>
        <div className="space-y-0">
          {zones.map((zone, index) => (
  <div key={index}>
    <ZoneSection
      zoneIndex={index}
      zoneNumber={String(index + 1).padStart(2, "0")}
      title={zone.title}
      description={zone.description}
      mainImage={zone.mainImage}
      images={zone.images}
      projectDetails={zone.projectDetails}
      features={zone.features} // ✅ add this line
    />

    {/* For zone 0 (overview), just show its 2 images, no features */}
    {index === 0 ? (
      <PresentationShowcase
        images={zone.images.filter(img => img !== zone.mainImage)}
        features={[]} // ✅ safe empty
        title={zone.title}
      />
    ) : (
      <PresentationShowcase
        images={zone.images.filter(img => img !== zone.mainImage)}
        features={zone.features} // ✅ pass features here too
        title={zone.title}
        layoutVariant={index % 2}
      />
    )}
  </div>
))}
        </div>
      </section>

      <Separator />

      {/* Design Philosophy */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Design Philosophy</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hyde Park embodies our vision of creating integrated communities where architectural excellence meets
              functional design, fostering a lifestyle that balances luxury, productivity, and leisure in perfect
              harmony.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
