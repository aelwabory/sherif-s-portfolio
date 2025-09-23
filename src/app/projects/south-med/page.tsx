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
    title: "Coastal Resort Complex",
    description:
      "Luxury beachfront resort featuring premium accommodations, spa facilities, and recreational amenities designed to complement the natural Mediterranean coastline.",
    mainImage:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop&crop=center&auto=format&q=80",
    images: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&h=800&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&h=800&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop&crop=center&auto=format&q=80",
    ],
    features: ["Beachfront location", "Luxury accommodations", "Spa & wellness", "Water sports facilities"],
    projectDetails: {
      scope: "Resort Development - Coastal Tourism",
      location: "South Mediterranean Coast",
      date: "2020-2023",
      about: "Typology: Luxury Resort Complex",
      area: "95,000 m2",
    },
  },
  {
    title: "Marina & Yacht Club",
    description:
      "Exclusive marina facility with yacht services, waterfront dining, and recreational boating amenities, creating a premier destination for maritime enthusiasts.",
    mainImage:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop&crop=center&auto=format&q=80",
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop&crop=center&auto=format&q=80",
    ],
    features: ["Private marina", "Yacht services", "Waterfront dining", "Club facilities"],
    projectDetails: {
      scope: "Marina Development - Recreational Boating",
      location: "South Mediterranean Coast",
      date: "2021-2022",
      about: "Typology: Marina & Yacht Club",
      area: "18,000 m2",
    },
  },
]

export default function SouthMedPage() {
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
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80"
            alt="South Med Resort Development"
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
            An exclusive Mediterranean coastal resort development combining luxury hospitality with pristine natural
            beauty, creating an unparalleled destination experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Mediterranean Coast, Egypt</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>2020 - 2023</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span>Eco-Tourism Certified</span>
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
              South Med represents a harmonious blend of luxury tourism development and environmental conservation,
              setting new standards for sustainable coastal resort design.
            </p>
          </div>
          <ProjectStats />
        </div>
      </section>

      <Separator />

      {/* Development Zones */}
      <section className="pt-8 pb-20">
        {" "}
        {/* reduced top padding from py-20 to pt-8 pb-20 */}
        <div className="px-6 mb-12">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="mb-4">Development Areas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each area within South Med has been carefully integrated with the natural coastline, preserving the
              Mediterranean's pristine beauty while providing world-class amenities.
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
      features={zone.features}
      projectDetails={zone.projectDetails}
    />
    <PresentationShowcase
      images={zone.images}
      features={zone.features}
      title={zone.title}
      layoutVariant={index % 2} // alternate layouts
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
              Our approach to South Med was guided by respect for the natural Mediterranean environment, creating a
              resort that enhances rather than disrupts the coastal ecosystem while delivering exceptional guest
              experiences.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
