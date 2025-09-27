"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import ProjectStats from "@/components/project-stats"
import PresentationShowcase from "@/components/presentation-showcase"
import ImageWithFallback from "@/components/figma/ImageWithFallback"
import { MapPin, Calendar, ArrowLeft, Expand, X } from "lucide-react"
import { useRouter } from "next/navigation"

export default function BenanPage() {
  const router = useRouter()

  const HERO = "/projects/benan/b-heroimage.jpg"
  const MAIN = "/projects/benan/b-masterplan.jpg"

  const GALLERY = [
    "/projects/benan/b-image1.jpg",
    "/projects/benan/b-image2.jpg",
    "/projects/benan/b-image3.jpg",
    "/projects/benan/b-image9.jpg",
    "/projects/benan/b-image5.jpg",
    "/projects/benan/b-image6.jpg",
    "/projects/benan/b-image10.jpg",
    "/projects/benan/b-image7.jpg",
    "/projects/benan/b-image8.jpg",
  ]

  // Avoid duplicating MAIN in the showcase if it’s ever added there too
  const showcaseImages = GALLERY.filter((img) => img !== MAIN)

  // Lightbox for MAIN
  const [mainExpanded, setMainExpanded] = useState(false)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!mainExpanded) return
      if (e.key === "Escape") setMainExpanded(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [mainExpanded])

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

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback src={HERO} alt="Benan Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <Badge variant="secondary" className="mb-6">
            Mixed-Use Development
          </Badge>
          <h1 className="text-5xl md:text-7xl mb-6">Benan</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            A large-scale community blending residential neighborhoods, commercial anchors, and civic amenities with a
            cohesive public-realm framework.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Saudi Arabia</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>— Year–Year —</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Project Overview</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Benan is envisioned as a resilient, human-scaled development with walkable neighborhoods, integrated open
              spaces, and mixed-use centers connected by a legible street network.
            </p>
          </div>
          <ProjectStats />
        </div>
      </section>

      <Separator />

      {/* Main + Showcase (single section, no zones) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center mb-12">
            <h2 className="text-4xl font-bold uppercase tracking-wider text-gray-800">Project Gallery</h2>
            <div className="h-px bg-gray-400 flex-1 ml-8" />
          </div>

          {/* Expandable Main image (fixed-size lightbox) */}
          <div
            className="w-full aspect-[16/10] overflow-hidden rounded-lg mb-8 cursor-pointer group relative"
            onClick={() => setMainExpanded(true)}
            role="button"
            aria-label="Expand main image"
          >
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
              <div className="text-white text-center">
                <Expand size={32} className="mx-auto mb-2" />
                <p className="text-sm font-medium">Click to expand</p>
              </div>
            </div>
            <ImageWithFallback src={MAIN} alt="Benan — Masterplan" className="w-full h-full object-cover" />
          </div>

          {mainExpanded && (
            <div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-0"
              onClick={() => setMainExpanded(false)}
            >
              <div className="relative w-[90vw] max-w-7xl h-[85vh]">
                <button
                  onClick={() => setMainExpanded(false)}
                  className="absolute -top-12 right-0 text-white hover:text-stone-300 transition-colors"
                >
                  <X size={32} />
                </button>
                <ImageWithFallback
                  src={MAIN}
                  alt="Benan — Masterplan Expanded"
                  className="w-full h-full object-contain rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>
          )}

          {/* Optional description */}
          <div className="mt-8 max-w-4xl">
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed">
                A curated selection of visuals showing the spatial structure, public realm, and neighborhood character across Benan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase (2-col grid, tight, uniform lightbox — handled by component) */}
      <PresentationShowcase images={showcaseImages} features={[]} title="Benan" />

      <Separator />

      {/* Philosophy */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Design Philosophy</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our approach emphasizes climate-responsive design, human-scale streets, and a cohesive identity reinforced
              by landscape and architecture.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
