"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import ProjectStats from "@/components/project-stats"
import PresentationShowcase from "@/components/presentation-showcase"
import ImageWithFallback from "@/components/figma/ImageWithFallback"
import { MapPin, Calendar, ArrowLeft, Expand, X } from "lucide-react"
import { useRouter } from "next/navigation"

type Area = {
  title: string
  description: string
  mainImage: string
  images: string[] // include all images for the area (can include the mainImage; we'll filter it out in the showcase)
  features?: string[]
  projectDetails?: {
    scope?: string
    location?: string
    date?: string
    about?: string
    area?: string
  }
}

// 
const AREAS: Area[] = [
  {
    title: "Project Overview",
    description:
      "Hyde Park is one of the leading developments in the real estate sector, developing exclusive and luxurious real estate properties of enduring value all over the hot spots of Egypt. HPD provides high standards of residential communities and lavish properties, through the variation and integration of services and supreme professional experience in planning, executing, managing, and maintaining developments.",
    mainImage: "/projects/hyde-park/overview/hp-masterplan.jpg",
    images: [
      "/projects/hyde-park/overview/hp-masterplan2.jpg",
      "/projects/hyde-park/overview/hp-image1.jpg",
      "/projects/hyde-park/overview/hp-image2.jpg",
    ],
  },
  {
    title: "R2/R3",
    description:
      "Two residential clusters carefully master-planned to balance density, open space, and walkability, delivering a diverse range of units and shared amenities.",
    mainImage: "/projects/hyde-park/r2r3/r2r3-masterplan.jpg",
    images: [
      "/projects/hyde-park/r2r3/r2r3-image1.jpg",
      "/projects/hyde-park/r2r3/r2r3-image2.jpg",
      "/projects/hyde-park/r2r3/r2r3-image3.jpg",
      "/projects/hyde-park/r2r3/r2r3-image4.jpg",
      // add more as needed
    ],
    features: ["Mixed housing typologies", "Pocket parks", "Local retail", "Community services"],
  },
  {
    title: "Hyde Park Central",
    description:
      "The community’s vibrant heart — a central precinct with retail, offices, F&B, and civic spaces woven together around generous public realm.",
    mainImage: "/projects/hyde-park/central/hpc-masterplan.jpg",
    images: [
      "/projects/hyde-park/central/hpc-image1.jpg",
      "/projects/hyde-park/central/hpc-image2.jpg",
      "/projects/hyde-park/central/hpc-image3.jpg",
      "/projects/hyde-park/central/hpc-image4.jpg",
    ],
    features: ["Retail & F&B", "Office space", "Public realm", "Civic anchors"],
  },
  {
    title: "Seashore",
    description:
      "A leisure-front destination blending landscape, hospitality, and recreation with long promenades and a sequence of waterfront experiences.",
    mainImage: "/projects/hyde-park/seashore/ss-mainimage.jpg",
    images: [
      "/projects/hyde-park/seashore/ss-masterplan.jpg",
      "/projects/hyde-park/seashore/ss-image1.jpg",
      "/projects/hyde-park/seashore/ss-image2.jpg",
      "/projects/hyde-park/seashore/ss-image3.jpg",
      "/projects/hyde-park/seashore/ss-image4.jpg",
      "/projects/hyde-park/seashore/ss-image5.jpg",
      "/projects/hyde-park/seashore/ss-image6.jpg",
    ],
    features: ["Promenades", "Hospitality", "Beach recreation", "Landscape sequences"],
  },
]

// Hero image (top of page)
const HERO = "/projects/hyde-park/hp-heroimage.jpg" 

export default function HydeParkPage() {
  const router = useRouter()

  // per-area lightbox state for main images
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (openIndex === null) return
      if (e.key === "Escape") setOpenIndex(null)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [openIndex])

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
            src={HERO}
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
            A sophisticated mixed-use development that redefines urban living through luxury residential,
            dynamic commercial spaces, and world-class entertainment facilities in New Cairo.
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
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-6 text-3xl font-bold">Project Overview</h2>
            <p className="text-muted-foreground max-w-5xl mx-auto text-lg">
              Hyde Park stands as a landmark development that seamlessly integrates luxury living, business excellence,
              and entertainment sophistication, creating a complete urban ecosystem.
            </p>
          </div>
          <ProjectStats />
        </div>
      </section>

      {/* Development Areas */}
      <section className="pt-8 pb-20">
        <div className="space-y-0">
          {AREAS.map((area, index) => {
            const zoneNumber = String(index + 1).padStart(2, "0")
            const showcase = area.images.filter((img) => img !== area.mainImage)
            const isOpen = openIndex === index

            return (
              <div key={index} className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-8">
                  {/* Section header: number + title (like your zones) */}
                  <div className="flex items-center mb-12">
                    <div className="text-7xl font-bold text-gray-800 mr-8 font-mono leading-none">{zoneNumber}</div>
                    <div className="h-px bg-gray-400 flex-1 mr-8" />
                    <h2 className="text-4xl font-bold uppercase tracking-wider text-gray-800 whitespace-nowrap">
                      {area.title}
                    </h2>
                  </div>

                  {/* Expandable main image (Benan/Madinaty style) */}
                  <div
                    className="w-full aspect-[16/10] overflow-hidden rounded-lg mb-8 cursor-pointer group relative"
                    onClick={() => setOpenIndex(index)}
                    role="button"
                    aria-label={`Expand ${area.title} main image`}
                  >
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
                      <div className="text-white text-center">
                        <Expand size={32} className="mx-auto mb-2" />
                        <p className="text-sm font-medium">Click to expand</p>
                      </div>
                    </div>
                    <ImageWithFallback
                      src={area.mainImage}
                      alt={`${area.title} — Main`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Lightbox for main image */}
                  {isOpen && (
                    <div
                      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-0"
                      onClick={() => setOpenIndex(null)}
                    >
                      <div className="relative w-[90vw] max-w-7xl h-[85vh]">
                        <button
                          onClick={() => setOpenIndex(null)}
                          className="absolute -top-12 right-0 text-white hover:text-stone-300 transition-colors"
                          aria-label="Close"
                        >
                          <X size={32} />
                        </button>
                        <ImageWithFallback
                          src={area.mainImage}
                          alt={`${area.title} — Main Expanded`}
                          className="w-full h-full object-contain rounded-lg"
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>
                    </div>
                  )}

                </div>

                {/* Showcase grid for this area (excludes the main image) */}
                {showcase.length > 0 && (
                  <PresentationShowcase
                    images={showcase}
                    features={area.features ?? []}
                    title={area.title}
                    // layoutVariant can be used to alternate but we keep a consistent 2-col look globally
                  />
                )}
              </div>
            )
          })}
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
              functional design, fostering a lifestyle that balances luxury, productivity, and leisure in perfect harmony.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
