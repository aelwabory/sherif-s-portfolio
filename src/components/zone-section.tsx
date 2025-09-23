"use client"

import { useState } from "react"
import ImageWithFallback from "@/components/figma/ImageWithFallback"

interface ZoneSectionProps {
  zoneIndex: number
  zoneNumber: string
  title: string
  description: string
  mainImage: string
  images: string[]
  features: string[]
  projectDetails: {
    scope: string
    location: string
    date: string
    about: string
    area: string
  }
  role?: string[]
  studies?: string[]
}

export default function ZoneSection({
  zoneIndex,
  zoneNumber,
  title,
  description,
  mainImage,
  images = [],
  features = [],
  projectDetails,
}: ZoneSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    if (images && images.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }
  }

  const prevImage = () => {
    if (images && images.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
    }
  }

  // Build the facts list (bullet points) from projectDetails, only if values exist
  const facts: { label: string; value?: string }[] = [
    { label: "Scope", value: projectDetails?.scope },
    { label: "Location", value: projectDetails?.location },
    { label: "Date", value: projectDetails?.date },
    { label: "About", value: projectDetails?.about },
    { label: "Area", value: projectDetails?.area },
  ].filter((f) => f.value && f.value.trim().length > 0)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header (kept from your UI) */}
        <div className="flex items-center mb-12">
          <div className="text-7xl font-bold text-gray-800 mr-8 font-mono leading-none">
            {zoneNumber}
          </div>
          <div className="h-px bg-gray-400 flex-1 mr-8" />
          <h2 className="text-4xl font-bold uppercase tracking-wider text-gray-800 whitespace-nowrap">
            {title}
          </h2>
        </div>

        {/* Image + Facts side-by-side (new) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Main image (kept, just moved into grid) */}
          <div className="md:col-span-8">
            <div className="w-full aspect-[16/10] overflow-hidden rounded-lg mb-2 md:mb-0">
              <ImageWithFallback
                src={images?.[currentImageIndex] || mainImage || "/placeholder.svg"}
                alt={`${title} - Main view`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* (Optional) Simple image navigator wiring preserved, but hidden by default.
                Uncomment if you want visible controls.
            <div className="flex items-center justify-between mt-2">
              <button
                onClick={prevImage}
                className="px-3 py-1 rounded bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
              >
                Prev
              </button>
              <div className="text-xs text-gray-500">
                {images.length > 0 ? `${currentImageIndex + 1} / ${images.length}` : "—"}
              </div>
              <button
                onClick={nextImage}
                className="px-3 py-1 rounded bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
              >
                Next
              </button>
            </div>
            */}
          </div>

          {/* Facts column (new) */}
          <aside className="md:col-span-4">
            {facts.length > 0 && (
              <dl className="space-y-4">
                {facts.map((f, i) => (
                  <div key={i} className="border-l-2 pl-4">
                    <dt className="text-xs uppercase tracking-wide text-gray-500">
                      {f.label}
                    </dt>
                    <dd className="text-sm leading-relaxed text-gray-800">
                      {f.value}
                    </dd>
                  </div>
                ))}
              </dl>
            )}

            {/* Optional: show 'features' list under facts */}
            {features && features.length > 0 && (
              <div className="mt-8">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-600 mb-3">
                  Key Features
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-800">
                  {features.map((feat, idx) => (
                    <li key={idx}>{feat}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>

        {/* Description (kept) */}
        <div className="mt-16 max-w-4xl">
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed mb-8">{description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
