"use client"

import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import ProjectStats from "@/components/project-stats"
import PresentationShowcase from "@/components/presentation-showcase"
import ImageWithFallback from "@/components/figma/ImageWithFallback"
import { MapPin, Calendar, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SouthMedPage() {
  const router = useRouter()

  // IMAGES
  const HERO = "/projects/south-med/sm-mainimage.jpg"
  const MAIN = "/projects/south-med/sm-heroimage.jpg"

  const GALLERY = [
  "/projects/south-med/sm-masterplan.jpg",
  "/projects/south-med/sm-image1.jpg",
  "/projects/south-med/sm-image2.jpg",
  "/projects/south-med/sm-image3.jpg",
  "/projects/south-med/sm-image4.jpg",
  "/projects/south-med/sm-image5.jpg",
  "/projects/south-med/sm-image6.jpg",
  "/projects/south-med/sm-image7.jpg",
  "/projects/south-med/sm-image8.jpg",
  "/projects/south-med/sm-image9.jpg",
  "/projects/south-med/sm-image10.jpg",
  "/projects/south-med/sm-image11.jpg",
  "/projects/south-med/sm-image12.jpg",
  "/projects/south-med/sm-image13.jpg",
  "/projects/south-med/sm-image14.jpg",
  "/projects/south-med/sm-image15.jpg",
  "/projects/south-med/sm-image16.jpg",
  "/projects/south-med/sm-image17.jpg",
  "/projects/south-med/sm-image18.jpg",
  "/projects/south-med/sm-image19.jpg",
  "/projects/south-med/sm-image20.jpg",
  "/projects/south-med/sm-image21.jpg",
  "/projects/south-med/sm-image22.jpg",
  "/projects/south-med/sm-image23.jpg",
]

  // avoid duplicate main in showcase
  const showcaseImages = GALLERY.filter((img) => img !== MAIN)

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
            alt="South Med Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <Badge variant="secondary" className="mb-6">
            Coastal Resort Development
          </Badge>
          <h1 className="text-5xl md:text-7xl mb-6">South Med</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            An exclusive Mediterranean coastal development combining luxury hospitality with pristine natural beauty, creating an unparalleled destination experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Mediterranean Coast, Egypt</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span> 2023 – 2032 </span>
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
              As Development Director at TMG, I led the land acquisition, planning, and execution of SouthMED, a fully integrated 23 million sq m development strategically located on Egypt's North Coast. Overseeing a 15-person team, I managed the entire development cycle from feasibility studies and budgeting through master planning, approvals, and design coordination to deliver a world-class coastal destination. The project comprises 75,000 residential units, 250,000 sq m of mixed-use GLA, and a diverse range of lifestyle amenities including swimmable lagoons, beachfront activities, retail, hospitality, and community services. My role focused on securing prime land, aligning global design standards with local market needs, ensuring sustainable infrastructure, and positioning SouthMED as an international lifestyle hub accessible to both regional and European markets by 2032.
            </p>
          </div>
          <ProjectStats stats={[
            { label: "Total Area", value: "23", unit: "Million sq m" },
            { label: "Residential Units", value: "75,000", unit: "Units" },
            { label: "Mixed-Use GLA", value: "250,000", unit: "sq m" },
            { label: "Investment", value: "$21.7B", unit: "USD" }
          ]} />
        </div>
      </section>

      <Separator />

      {/* Main + Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center mb-12">
            <h2 className="text-4xl font-bold uppercase tracking-wider text-gray-800">
              Project Gallery
            </h2>
            <div className="h-px bg-gray-400 flex-1 ml-8" />
          </div>

          {/* Main Image */}
          <div className="w-full aspect-[16/10] overflow-hidden rounded-lg mb-8">
            <ImageWithFallback
              src={MAIN}
              alt="South Med Main"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Showcase with all gallery images */}
      <PresentationShowcase images={showcaseImages} features={[]} title="South Med" />

      <Separator />

      {/* Design Philosophy */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Design Philosophy</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our approach to South Med was guided by respect for the natural Mediterranean environment, creating a
              resort that enhances rather than disrupts the coastal ecosystem while delivering exceptional guest experiences.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
