import Link from "next/link"
import ImageWithFallback from "@/components/figma/ImageWithFallback"
import { Home } from "lucide-react"

type ProjectCard = {
  slug: string
  title: string
  location: string
  blurb: string
  hero: string // path under /public (must include extension)
}

const projects: ProjectCard[] = [
  {
    slug: "madinaty",
    title: "Madinaty",
    location: "Cairo, Egypt",
    blurb: "City-scale mixed-use: residential, schools, hospitals, luxury hotel, offices, commercial hubs.",
    hero: "/projects/madinaty/hero.jpg",
  },
  {
    slug: "al-rehab",
    title: "Al Rehab",
    location: "New Cairo, Egypt",
    blurb: "Integrated community: residential, schools, clinics, offices, retail centers.",
    hero: "/projects/al-rehab/hero.jpg",
  },
  {
    slug: "noor-city",
    title: "Noor City",
    location: "New Administrative Capital, Egypt",
    blurb: "Next-gen mixed-use city with sustainable planning and services.",
    hero: "/projects/noor-city/n-mainimage.jpg",
  },
  {
    slug: "south-med",
    title: "South Med",
    location: "North Coast, Egypt",
    blurb: "Coastal mixed-use development with hospitality and community services.",
    hero: "/projects/south-med/sm-mainimage.jpg",
  },
  {
    slug: "benan",
    title: "Benan (KSA)",
    location: "Saudi Arabia",
    blurb: "Large-scale mixed-use community in the Kingdom of Saudi Arabia.",
    hero: "/projects/benan/b-heroimage.jpg",
  },
  {
    slug: "hyde-park",
    title: "Hyde Park",
    location: "New Cairo, Egypt",
    blurb: "Sophisticated mixed-use development with luxury residential, commercial, and entertainment facilities.",
    hero: "/projects/hyde-park/hp-heroimage.jpg",
  },
  {
  slug: "four-seasons-sharm",
  title: "Four Seasons Sharm Al Sheikh",
  location: "Sharm El Sheikh, Egypt",
  blurb: "A Red Sea luxury hospitality destination integrating architecture and landscape.",
  hero: "/project/four-seasons-sharm/fs-heroimage.jpg",
},
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50">
      <main className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg hover:bg-white/90 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <Home className="w-4 h-4" />
            <span className="text-sm font-medium">Home</span>
          </Link>
        </div>

        <h1 className="text-3xl font-semibold text-center mb-10 text-black">Projects</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="w-full max-w-sm rounded-xl border border-gray-200 p-6 hover:shadow-md transition bg-white"
            >
              <div className="h-40 w-full rounded-lg bg-gray-100 mb-4 overflow-hidden">
                <ImageWithFallback
                  src={p.hero || "/placeholder.svg"}
                  alt={`${p.title} hero`}
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-xl font-semibold">{p.title}</h2>
              <p className="text-sm text-gray-600">{p.location}</p>
              <p className="text-sm text-gray-700 mt-2">{p.blurb}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
