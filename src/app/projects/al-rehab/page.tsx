"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import ProjectStats from "@/components/project-stats"
import PresentationShowcase from "@/components/presentation-showcase"
import ImageWithFallback from "@/components/figma/ImageWithFallback"
import { MapPin, Calendar, Award, ArrowLeft, Expand, X } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AlRehabPage() {
  const router = useRouter()

  const HERO = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80"
  const MAIN = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=675&fit=crop&crop=center&auto=format&q=80"

  const GALLERY = [
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=675&fit=crop&crop=center&auto=format&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=675&fit=crop&crop=center&auto=format&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=675&fit=crop&crop=center&auto=format&q=80",
    "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&h=675&fit=crop&crop=center&auto=format&q=80",
    "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=1200&h=675&fit=crop&crop=center&auto=format&q=80",
    "https://images.unsplash.com/photo-1600607688960-e095ff8d5c6b?w=1200&h=675&fit=crop&crop=center&auto=format&q=80",
    "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&h=675&fit=crop&crop=center&auto=format&q=80",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=675&fit=crop&crop=center&auto=format&q=80",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&h=675&fit=crop&crop=center&auto=format&q=80",
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=675&fit=crop&crop=center&auto=format&q=80",
  ]

  // Avoid duplicating MAIN in the showcase if it's ever added there too
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

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80"
            alt="Al Rehab Development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl mb-6">Al Rehab</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            A premium residential community designed for modern family living, featuring contemporary villas and
            comprehensive amenities in the heart of New Cairo.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>New Cairo, Egypt</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>2018 - 2021</span>
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
            As Development Director at TMG, I oversaw the land acquisition, planning, and execution of Al Rehab City, Egypt's first fully integrated community and a pioneering model for modern urban living. Leading a 15-person team, I managed the full development cycle from feasibility studies and budgeting to master planning, approvals, and design coordination. Spanning 10 million sq m and comprising 45,000 residential units and 250,000 sq m of mixed-use GLA, Al Rehab established a new standard for integrated lifestyles by introducing hospitals, malls, schools, and commercial hubs within a single community. My role focused on securing prime land, structuring sustainable development strategies, and ensuring the seamless delivery of amenities that positioned Al Rehab as the central hub of New Cairo and a long-standing benchmark for self-sufficient urban communities.
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
            <ImageWithFallback src={MAIN} alt="Al Rehab — Masterplan" className="w-full h-full object-cover" />
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
                  alt="Al Rehab — Masterplan Expanded"
                  className="w-full h-full object-contain rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Showcase (2-col grid, tight, uniform lightbox — handled by component) */}
      <PresentationShowcase images={showcaseImages} features={[]} title="Al Rehab" />

      <Separator />

      {/* Design Philosophy */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Design Philosophy</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our approach to Al Rehab focused on creating a residential community that honors family values while
              embracing contemporary design principles, ensuring comfort and quality for all residents.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
