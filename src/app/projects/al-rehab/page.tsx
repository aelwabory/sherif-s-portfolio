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

  const HERO = "/projects/al-rehab/ar-heroimage.jpg"
  const MAIN = "/projects/al-rehab/ar-masterplan.jpg"

  const GALLERY = [
    "/projects/al-rehab/ar-image1.jpg",
    "/projects/al-rehab/ar-image2.jpg",
    "/projects/al-rehab/ar-image3.jpg",
    "/projects/al-rehab/ar-image4.jpg",
    "/projects/al-rehab/ar-image5.jpg",
  ]

  // Avoid duplicating MAIN and HERO in the showcase if they're ever added there too
  const showcaseImages = GALLERY.filter((img) => img !== MAIN && img !== HERO)

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
            src="/projects/al-rehab/ar-heroimage.jpg"
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
              <span> 1995 - 2027 </span>
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
          <ProjectStats stats={[
            { label: "Total Area", value: "10", unit: "Million sq m" },
            { label: "Residential Units", value: "45,000", unit: "Units" },
            { label: "Mixed-Use", value: "GLA 250,000", unit: "sq m" },
            { label: "Investment", value: "$2.8B", unit: "USD" }
          ]} />
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
