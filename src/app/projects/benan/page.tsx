"use client"

import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import ProjectStats from "@/components/project-stats"
import ZoneSection from "@/components/zone-section"
import PresentationShowcase from "@/components/presentation-showcase"
import ImageWithFallback from "@/components/figma/ImageWithFallback"
import { MapPin, Calendar, Award, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

const zones = [
  {
    title: "Residential Towers",
    description:
      "Modern high-rise residential complex featuring contemporary apartments with panoramic city views, designed for urban professionals and families seeking premium living.",
    mainImage:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=675&fit=crop&crop=center&auto=format&q=80",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=675&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&h=675&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=675&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=675&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=675&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=675&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=675&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&h=675&fit=crop&crop=center&auto=format&q=80",
    ],
    features: ["High-rise towers", "City views", "Modern amenities", "Premium finishes"],
    projectDetails: {
      scope: "Residential Development - Urban Towers",
      location: "Benan District, Riyadh, KSA",
      date: "2021-2024",
      about: "Typology: High-Rise Residential",
      area: "75,000 m2",
    },
  },
  {
    title: "Commercial Podium",
    description:
      "Ground-level commercial complex featuring retail outlets, restaurants, and service facilities, creating a vibrant street-level experience for residents and visitors.",
    mainImage:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=675&fit=crop&crop=center&auto=format&q=80",
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=675&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=675&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?w=1200&h=675&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=675&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&h=675&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=675&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?w=1200&h=675&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=1200&h=675&fit=crop&crop=center&auto=format&q=80",
    ],
    features: ["Retail spaces", "Restaurants", "Service facilities", "Public areas"],
    projectDetails: {
      scope: "Commercial Development - Mixed Use Podium",
      location: "Benan District, Riyadh, KSA",
      date: "2022-2023",
      about: "Typology: Commercial Podium",
      area: "15,000 m2",
    },
  },
]

export default function BenanPage() {
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
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80"
            alt="Benan Development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <Badge variant="secondary" className="mb-6">
            Urban Development
          </Badge>
          <h1 className="text-5xl md:text-7xl mb-6">Benan</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            A contemporary urban development featuring high-rise residential towers and integrated commercial spaces,
            designed to meet the evolving needs of modern city living in Saudi Arabia.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Riyadh, Saudi Arabia</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>2021 - 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span>Green Building Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Project Overview</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Benan represents a modern approach to urban living, combining efficient high-rise design with
              community-focused amenities to create a vibrant residential environment.
            </p>
          </div>
          <ProjectStats />
        </div>
      </section>

      <Separator />

      {/* Development Zones */}
      <section className="pt-8 pb-20">
        <div className="px-6 mb-12">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="mb-4">Development Areas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each area within Benan has been designed to maximize both privacy and community interaction, creating a
              balanced urban living experience.
            </p>
          </div>
        </div>
        <div className="space-y-0">
          {zones.map((zone, index) => (
            <div key={index}>
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
      features={zone.features}  // ✅ add this line
    />
    <PresentationShowcase
      images={zone.images}
      features={zone.features}
      title={zone.title}
      layoutVariant={index % 2} // optional: alternate layouts
    />
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
              Our vision for Benan focused on creating a vertical community that maintains human connections while
              maximizing urban density, incorporating sustainable design principles throughout.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
