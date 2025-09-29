"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import ProjectStats from "@/components/project-stats"
import PresentationShowcase from "@/components/presentation-showcase"
import ImageWithFallback from "@/components/figma/ImageWithFallback"
import { MapPin, Calendar, ArrowLeft, Expand, X } from "lucide-react"
import { useRouter } from "next/navigation"

export default function NoorCityPage() {
  const router = useRouter()

  // Images
  const HERO = "/projects/noor-city/n-mainimage.jpg"
  const MAIN = "/projects/noor-city/n-masterplan.jpg"

  const GALLERY = [
    "/projects/noor-city/n-image1.jpg",
    "/projects/noor-city/n-image2.jpg",
    "/projects/noor-city/n-image3.jpg",
    "/projects/noor-city/n-image4.jpg",
    "/projects/noor-city/n-image5.jpg",
    "/projects/noor-city/n-image6.jpg",
    "/projects/noor-city/n-image7.jpg",
    "/projects/noor-city/n-image8.jpg",
    "/projects/noor-city/n-image9.jpg",
    "/projects/noor-city/n-image10.jpg",
    "/projects/noor-city/n-image11.jpg",
    "/projects/noor-city/n-image12.jpg",
    "/projects/noor-city/n-image13.jpg",
    "/projects/noor-city/n-image14.jpg",
    "/projects/noor-city/n-image15.jpg",
  ]

  const showcaseImages = GALLERY.filter((img) => img !== MAIN)

  // Main image lightbox state
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
          <ImageWithFallback src={HERO} alt="Noor City Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl mb-6">Noor City</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            A modern urban development combining commercial, residential, and cultural spaces to create a dynamic city
            center in Egypt&apos;s New Administrative Capital.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>New Administrative Capital, Egypt</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span> 2021 – 2036 </span>
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
             As Development Director at TMG, I spearheaded the land acquisition, planning, and execution of Noor Smart City, a 21 million sq m landmark development located near Egypt's New Administrative Capital. Leading a 20-person team, I managed the full development cycle from feasibility studies and budgeting to master planning, design coordination, and government approvals. In collaboration with BCG, the project integrates cutting-edge smart technologies, data-driven infrastructure, and eco-friendly systems to enhance energy efficiency, mobility, and resident well-being. Comprising 140,000 residential units, 150,000 sq m of mixed-use GLA, and diverse lifestyle amenities, Noor sets a new benchmark for sustainable, technology-enabled communities. My role focused on securing prime land, structuring long-term strategies, and embedding innovation at the core of the city to establish Noor as a global model for future-ready urban living through 2036.
            </p>
          </div>
          <ProjectStats stats={[
            { label: "Total Area", value: "21", unit: "Million sq m" },
            { label: "Residential Units", value: "140,000", unit: "Units" },
            { label: "Mixed-Use GLA", value: "150,000", unit: "sq m" },
            { label: "Investment", value: "$11.8B", unit: "USD" }
          ]} />
        </div>
      </section>

      <Separator />

      {/* Main + Showcase */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center mb-12">
            <h2 className="text-4xl font-bold uppercase tracking-wider text-gray-800">Project Gallery</h2>
            <div className="h-px bg-gray-400 flex-1 ml-8" />
          </div>

          {/* Main image (expandable) */}
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
            <ImageWithFallback src={MAIN} alt="Noor City — Main" className="w-full h-full object-cover" />
          </div>

          {/* UNIFORM-SIZE LIGHTBOX FOR MAIN */}
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
                  alt="Noor City — Main Expanded"
                  className="w-full h-full object-contain rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Showcase grid */}
      <PresentationShowcase images={showcaseImages} features={[]} title="Noor City" />

      <Separator />

      {/* Design Philosophy */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Design Philosophy</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our vision for Noor City was to create a smart, sustainable urban environment that serves as a catalyst
              for economic growth while maintaining human scale design and community connections.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
