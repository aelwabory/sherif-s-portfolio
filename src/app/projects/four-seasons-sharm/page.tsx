"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import ProjectStats from "@/components/project-stats"
import PresentationShowcase from "@/components/presentation-showcase"
import ImageWithFallback from "@/components/figma/ImageWithFallback"
import { MapPin, Calendar, Award, ArrowLeft, Expand, X } from "lucide-react"
import { useRouter } from "next/navigation"

export default function FourSeasonsSharmPage() {
  const router = useRouter()

  const HERO = "/projects/four-seasons-sharm/fs-heroimage.jpg"
  const MAIN = "/projects/four-seasons-sharm/fs-masterplan.jpg"

  const GALLERY = [
    "/projects/four-seasons-sharm/fs-image1.jpg",
    "/projects/four-seasons-sharm/fs-image2.jpg",
    "/projects/four-seasons-sharm/fs-image3.jpg",
    "/projects/four-seasons-sharm/fs-image4.jpg",
    "/projects/four-seasons-sharm/fs-image5.jpg",
    "/projects/four-seasons-sharm/fs-image6.jpg",
    "/projects/four-seasons-sharm/fs-image7.jpg",
    "/projects/four-seasons-sharm/fs-image8.jpg",
  ]

  // Avoid duplicating MAIN in the showcase if you ever add it there
  const showcaseImages = GALLERY.filter((img) => img !== MAIN)

  // Main image lightbox
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
          <ImageWithFallback src={HERO} alt="Four Seasons Sharm Al Sheikh — Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <Badge variant="secondary" className="mb-6">Luxury Hospitality</Badge>
          <h1 className="text-5xl md:text-7xl mb-6">Four Seasons Sharm Al Sheikh</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            A world-class Red Sea destination that blends refined architecture with the natural coastal landscape to deliver an exceptional resort experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Sharm El Sheikh, Egypt</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span> 2020 – 2030 </span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-6 text-3xl font-bold">Project Overview</h2>
            <p className="text-muted-foreground max-w-5xl mx-auto text-lg">
              As Development Director at TMG, I oversaw the expansion of the award-winning Four Seasons Sharm El Sheikh Resort, a 225,000 sq m beachfront destination set within 54 acres of landscaped gardens. Leading a team of 10, I managed the development cycle from feasibility and budgeting to master planning, design coordination, and government approvals. The project adds 92 new keys to the existing 136 rooms and suites, alongside restaurants, retail, wellness and sports facilities, and children's areas, while also delivering 69 new private residences, including villas and chalets. My role focused on aligning the resort's luxury brand standards with long-term investment strategies, ensuring seamless integration of the extension with the existing resort and positioning it as a premier hospitality and residential destination in Egypt through 2030.
            </p>
          </div>
          <ProjectStats />
        </div>
      </section>

      <Separator />

      {/* Project Gallery (matches Madinaty/Benan header + layout) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center mb-12">
            <h2 className="text-4xl font-bold uppercase tracking-wider text-gray-800">Project Gallery</h2>
            <div className="h-px bg-gray-400 flex-1 ml-8" />
          </div>

          {/* Expandable main image */}
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
            <ImageWithFallback src={MAIN} alt="Four Seasons Sharm Al Sheikh — Masterplan" className="w-full h-full object-cover" />
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
                  alt="Four Seasons Sharm Al Sheikh — Masterplan Expanded"
                  className="w-full h-full object-contain rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Showcase grid (2-col, uniform lightbox handled by component) */}
      <PresentationShowcase images={showcaseImages} features={[]} title="Four Seasons Sharm Al Sheikh" />

      <Separator />

      {/* Design Philosophy */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Design Philosophy</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The design emphasizes quiet luxury, contextual materials, and a landscape-first approach that preserves views,
              shade, and privacy while connecting guests to the Red Sea.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
