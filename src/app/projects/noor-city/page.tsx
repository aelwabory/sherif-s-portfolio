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
    title: "Mixed-Use Development",
    description:
      "Integrated commercial and residential towers designed to create a vibrant urban environment with retail, office spaces, and luxury apartments.",
    mainImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop&crop=center&auto=format&q=80",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=800&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&h=800&fit=crop&crop=center&auto=format&q=80",
    ],
    features: ["Commercial towers", "Luxury residences", "Retail spaces", "Office complexes"],
    projectDetails: {
      scope: "Mixed-Use Development - Urban Complex",
      location: "Noor City, New Capital",
      date: "2019-2022",
      about: "Typology: Mixed-Use Urban Development",
      area: "120,000 m2",
    },
  },
  {
    title: "Central Plaza",
    description:
      "Dynamic public space serving as the heart of the development, featuring landscaped areas, water features, and cultural venues for community gatherings.",
    mainImage:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop&crop=center&auto=format&q=80",
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?w=1200&h=800&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop&crop=center&auto=format&q=80",
    ],
    features: ["Public plaza", "Water features", "Cultural venues", "Landscaped gardens"],
    projectDetails: {
      scope: "Public Space - Central Plaza",
      location: "Noor City, New Capital",
      date: "2020-2021",
      about: "Typology: Public Plaza",
      area: "25,000 m2",
    },
  },
]

export default function NoorCityPage() {
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
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80"
            alt="Noor City Development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <Badge variant="secondary" className="mb-6">
            Mixed-Use Development
          </Badge>
          <h1 className="text-5xl md:text-7xl mb-6">Noor City</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            A modern urban development combining commercial, residential, and cultural spaces to create a dynamic city
            center in Egypt's New Administrative Capital.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>New Administrative Capital, Egypt</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>2019 - 2022</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span>Smart City Certified</span>
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
              Noor City represents a forward-thinking approach to urban development, integrating smart city technologies
              with sustainable design principles to create a model for future cities.
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
              Each area within Noor City has been strategically planned to create synergies between different functions,
              fostering a vibrant urban ecosystem.
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
      projectDetails={zone.projectDetails}
      features={zone.features} // ✅ already here
    />
    <PresentationShowcase
      images={zone.images}
      features={zone.features}
      title={zone.title}
      layoutVariant={index % 2} // ✅ added for alternating layout
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
              Our vision for Noor City was to create a smart, sustainable urban environment that serves as a catalyst
              for economic growth while maintaining human-scale design and community connections.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
