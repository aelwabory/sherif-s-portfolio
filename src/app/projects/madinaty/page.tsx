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
  images: string[] // include all images for the area (we'll filter the main out of the showcase)
  features?: string[]
}

const AREAS: Area[] = [
  {
    title: "Project Overview",
    description:
      "Madinaty is a large-scale, fully integrated city featuring residential neighborhoods, education, healthcare, retail, hospitality, and an extensive public realm network.",
    // ⬇️ replace with your actual files
    mainImage: "/projects/madinaty/m-masterplan.jpg",
    images: [], // No showcase images for Project Overview
  },
  {
    title: "Four Seasons Hotel",
    description:
      "A landmark hospitality destination that anchors the city’s luxury offering, integrating landscape, architecture, and curated guest experiences.",
    mainImage: "/projects/madinaty/four-seasons/fsm-mainimage.jpg",
    images: [
      "/projects/madinaty/four-seasons/fsm-image1.jpg",
      "/projects/madinaty/four-seasons/fsm-image2.jpg",
      "/projects/madinaty/four-seasons/fsm-image3.jpg",
      "/projects/madinaty/four-seasons/fsm-image4.jpg",
      "/projects/madinaty/four-seasons/fsm-image5.jpg",
      "/projects/madinaty/four-seasons/fsm-image6.jpg",
      "/projects/madinaty/four-seasons/fsm-image7.jpg",
      "/projects/madinaty/four-seasons/fsm-image8.jpg",
      "/projects/madinaty/four-seasons/fsm-image9.jpg",
    ],
    features: ["Luxury hospitality", "Conference & events", "Resort amenities", "Landscape integration"],
  },
  {
    title: "Privado",
    description:
      "A gated residential precinct characterized by human-scale streets, pocket parks, and a network of neighborhood amenities.",
    mainImage: "/projects/madinaty/privado/mp-heroimage.jpg",
    images: [
      "/projects/madinaty/privado/mp-masterplan.jpg",
      "/projects/madinaty/privado/mp-image1.jpg",
      "/projects/madinaty/privado/mp-image2.jpg",
      "/projects/madinaty/privado/mp-image3.jpg",
      "/projects/madinaty/privado/mp-image4.jpg",
      "/projects/madinaty/privado/mp-image5.jpg",
      "/projects/madinaty/privado/mp-image6.jpg",
    ],
    features: ["Medium density", "Pocket parks", "Neighborhood center", "Walkable streets"],
  },
  {
    title: "Open Air Mall",
    description:
      "A regional commercial destination with open-air promenades, retail streets, dining terraces, and vibrant public spaces.",
    mainImage: "/projects/madinaty/open-air-mall/oam-image1.jpg",
    images: [
      "/projects/madinaty/open-air-mall/oam-image2.jpg",
      "/projects/madinaty/open-air-mall/oam-image3.jpg",
      "/projects/madinaty/open-air-mall/oam-image4.jpg",
    ],
    features: ["Retail streets", "F&B terraces", "Public realm", "Event plazas"],
  },
  {
    title: "Golf",
    description:
      "Championship golf with a landscape-first approach, integrating neighborhoods with fairways, water features, and view corridors.",
    mainImage: "/projects/madinaty/golf/mg-image1.jpg",
    images: [
      "/projects/madinaty/golf/mg-image2.jpg",
      "/projects/madinaty/golf/mg-image3.jpg",
      "/projects/madinaty/golf/mg-image4.jpg",
      "/projects/madinaty/golf/mg-image5.jpg",
    ],
    features: ["18-hole course", "Clubhouse", "Practice facilities", "Golf-front neighborhoods"],
  },
  {
    title: "Sports Club",
    description:
      "A comprehensive sports and wellness complex offering arenas, training facilities, pools, and community fitness programs.",
    mainImage: "/projects/madinaty/club/mc-masterplan.jpg",
    images: [
      "/projects/madinaty/club/mc-image1.jpg",
      "/projects/madinaty/club/mc-image2.jpg",
      "/projects/madinaty/club/mc-image3.jpg",
      "/projects/madinaty/club/mc-image4.jpg",
    ],
    features: ["Arenas & courts", "Aquatics", "Fields & tracks", "Community wellness"],
  },
]

// Top hero (replace with your real hero image)
const HERO = "/projects/madinaty/m-heroimage.jpg"

export default function MadinatyPage() {
  const router = useRouter()
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
    if (typeof window !== "undefined" && window.history.length > 1) router.back()
    else router.push("/projects")
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

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback src={HERO} alt="Madinaty — Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl mb-6">Madinaty</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            A visionary mini city integrating residential, commercial, education, hospitality, and an expansive public realm.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>New Cairo, Egypt</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>2006 – 2040</span>
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
            As Development Director at TMG, I led the land acquisition, planning, and execution of Madinaty, one of the largest master-planned cities in the Middle East, spanning 33 million sq m in East Cairo. Managing a 30-person team, I oversaw the complete development cycle from feasibility studies and budgeting to master planning, design coordination, and government approvals. Designed in collaboration with leading U.S. firms: HHCP, SWA, and SASKI, the city delivers 120,000 residential units, 700,000 sq m of mixed-use GLA, and comprehensive amenities to serve over 700,000 residents. My role focused on structuring long-term strategies, aligning international design standards with local market needs, and ensuring the seamless delivery of infrastructure, services, and lifestyle components that positioned Madinaty as a beacon of modern urban development and a benchmark for future city planning in Egypt.
            </p>
          </div>
          <ProjectStats stats={[
            { label: "Total Area", value: "33", unit: "Million sq m" },
            { label: "Residential Units", value: "120,000", unit: "Units" },
            { label: "Mixed-Use GLA", value: "700,000", unit: "sq m" },
            { label: "Investment", value: "$10.8B", unit: "USD" }
          ]} />
        </div>
      </section>

      <Separator />

      {/* Development Areas */}
      <section className="pt-8 pb-20">
        <div className="px-6 mb-12">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="mb-4">Development Areas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Six distinct yet interconnected areas that together form a holistic, resilient city with rich public spaces and diverse programs.
            </p>
          </div>
        </div>

        <div className="space-y-0">
          {AREAS.map((area, index) => {
            const zoneNumber = String(index + 1).padStart(2, "0")
            const isOpen = openIndex === index
            const showcase = area.images.filter((img) => img !== area.mainImage)

            return (
              <div key={index} className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-8">
                  {/* Section header */}
                  <div className="flex items-center mb-12">
                    <div className="text-7xl font-bold text-gray-800 mr-8 font-mono leading-none">{zoneNumber}</div>
                    <div className="h-px bg-gray-400 flex-1 mr-8" />
                    <h2 className="text-4xl font-bold uppercase tracking-wider text-gray-800 whitespace-nowrap">
                      {area.title}
                    </h2>
                  </div>

                  {/* Expandable main image */}
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

                {/* Showcase for this area (excludes the main) */}
                {showcase.length > 0 && (
                  <PresentationShowcase images={showcase} features={area.features ?? []} title={area.title} />
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
              Our approach balances long-term sustainability, human-scale urbanism, and a coherent public realm to create a complete city for everyday life.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
