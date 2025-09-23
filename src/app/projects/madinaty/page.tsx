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
    title: "Luxury Hotel Complex",
    description:
      "Five-star hospitality destination featuring multiple hotels, conference facilities, and world-class amenities designed to serve both residents and visitors.",
    mainImage:
      "https://images.unsplash.com/photo-1634041441461-a1789d008830?w=1200&h=800&fit=crop&crop=center&auto=format&q=80",
    images: [
      "https://images.unsplash.com/photo-1634041441461-a1789d008830?w=1200&h=800&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1590490359854-dfba19688d70?w=1200&h=800&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1543539571-2d88da875d21?w=1200&h=800&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&h=800&fit=crop&crop=center&auto=format&q=80",
    ],
    features: ["5-star accommodation", "Conference centers", "Spa & wellness facilities", "Restaurants & bars"],
    projectDetails: {
      scope: "Hospitality Complex - Concept: Luxury Resort studies sustainability",
      location: "Madinaty, New Cairo",
      date: "2017-2019 - Proposal",
      about: "Typology: Sustainable Resort - Hospitality",
      area: "175,000 m2",
    },
  },
  {
    title: "Residential Districts",
    description:
      "Comprehensive residential neighborhoods featuring diverse housing typologies from apartments to villas, integrated with community amenities and green spaces.",
    mainImage:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop&crop=center&auto=format&q=80",
    images: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=800&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=800&fit=crop&crop=center&auto=format&q=80",
    ],
    features: ["Mixed housing typologies", "Community centers", "Parks & playgrounds", "Retail integration"],
    projectDetails: {
      scope: "Residential Development - Master Planning: Mixed-use residential community",
      location: "Madinaty, New Cairo",
      date: "2005-2015 - Built",
      about: "Typology: Mixed Residential Community",
      area: "2,500,000 m2",
    },
  },
  {
    title: "Educational Campus",
    description:
      "Integrated educational facilities serving all age groups from kindergarten through university level, designed to foster learning and community engagement.",
    mainImage:
      "https://images.unsplash.com/photo-1562774053707-520aed937b7b?w=1200&h=800&fit=crop&crop=center&auto=format&q=80",
    images: [
      "https://images.unsplash.com/photo-1562774053707-520aed937b7b?w=1200&h=800&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=800&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&h=800&fit=crop&crop=center&auto=format&q=80",
    ],
    features: ["K-12 schools", "University campus", "Research facilities", "Sports complexes"],
    projectDetails: {
      scope: "Educational Infrastructure - Campus Design: Comprehensive educational ecosystem",
      location: "Madinaty, New Cairo",
      date: "2008-2018 - Built",
      about: "Typology: Educational Campus Complex",
      area: "850,000 m2",
    },
  },
  {
    title: "Commercial Hub",
    description:
      "Dynamic commercial center featuring retail, office spaces, and entertainment venues designed to serve as the economic heart of the community.",
    mainImage:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop&crop=center&auto=format&q=80",
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1555636222-cae831e670b3?w=1200&h=800&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop&crop=center&auto=format&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&h=800&fit=crop&crop=center&auto=format&q=80",
    ],
    features: ["Shopping centers", "Office towers", "Entertainment venues", "Dining districts"],
    projectDetails: {
      scope: "Commercial Development - Mixed-use: Retail, office, and entertainment complex",
      location: "Madinaty, New Cairo",
      date: "2010-2020 - Built",
      about: "Typology: Mixed-use Commercial Complex",
      area: "650,000 m2",
    },
  },
]

export default function App() {
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
            src="https://images.unsplash.com/photo-1693159943203-111bf6a5d14e?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80"
            alt="Madinaty Aerial View"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <Badge variant="secondary" className="mb-6">
            Master Development Project
          </Badge>
          <h1 className="text-5xl md:text-7xl mb-6">Madinaty</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            A visionary mini city integrating residential, commercial, educational, and hospitality spaces designed for
            sustainable urban living in the 21st century.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>New Cairo, Egypt</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>2005 - 2020</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span>LEED Certified</span>
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
              Madinaty represents one of the largest integrated urban developments in the Middle East, designed to
              accommodate hundreds of thousands of residents while maintaining environmental sustainability.
            </p>
          </div>
          <ProjectStats />
        </div>
      </section>

      <Separator />

      {/* Development Zones */}
      <section className="py-20">
        <div className="px-6 mb-12">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="mb-4">Development Zones</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each zone within Madinaty has been carefully planned to create a harmonious blend of functionality,
              aesthetics, and sustainability, ensuring a complete urban ecosystem.
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
      images={zone.images}               // ✅ added
      projectDetails={zone.projectDetails}
      features={zone.features}           // ✅ added
    />
    <PresentationShowcase
      images={zone.images}
      features={zone.features}
      title={zone.title}
      layoutVariant={index % 2}          // ✅ optional: alternating layout
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
              Our approach to Madinaty was guided by principles that ensure long-term sustainability and community
              well-being, creating a harmonious urban environment that serves as a model for future developments.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
