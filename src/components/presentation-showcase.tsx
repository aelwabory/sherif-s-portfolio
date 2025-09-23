"use client"

import { useState, useEffect } from "react"
import ImageWithFallback from "@/components/figma/ImageWithFallback"
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react"

interface PresentationShowcaseProps {
  features: string[] // kept for API compatibility
  images: string[]
  title: string
  layoutVariant?: number // kept for API compatibility
}

export default function PresentationShowcase({
  features = [],
  images = [],
  title,
}: PresentationShowcaseProps) {
  const [expandedImageIndex, setExpandedImageIndex] = useState<number | null>(null)

  // Use exactly what we receive
  const safeImages = images

  // Keyboard nav for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (expandedImageIndex === null) return
      if (e.key === "Escape") setExpandedImageIndex(null)
      else if (e.key === "ArrowLeft") {
        setExpandedImageIndex((prev) =>
          prev === null ? null : (prev - 1 + safeImages.length) % safeImages.length,
        )
      } else if (e.key === "ArrowRight") {
        setExpandedImageIndex((prev) =>
          prev === null ? null : (prev + 1) % safeImages.length,
        )
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [expandedImageIndex, safeImages.length])

  return (
    <>
      <div className="py-6 bg-stone-50">
        <div className="max-w-7xl mx-auto px-8">
          {/* Always two columns */}
          <div className="grid grid-cols-2 gap-6">
            {safeImages.map((img, index) => {
              const isLastAndOdd = index === safeImages.length - 1 && safeImages.length % 2 === 1
              // span both columns if it's the last tile and the count is odd → fills the row nicely
              const spanClass = isLastAndOdd ? "col-span-2" : "col-span-1"
              return (
                <div
                  key={index}
                  className={`${spanClass} relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer aspect-[4/3]`}
                  onClick={() => setExpandedImageIndex(index)}
                >
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
                    <div className="text-white text-center">
                      <Expand size={32} className="mx-auto mb-2" />
                      <p className="text-sm font-medium">Click to expand</p>
                    </div>
                  </div>

                  <ImageWithFallback
                    src={img || "/placeholder.svg"}
                    alt={`${title} presentation ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {expandedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-8"
          onClick={() => setExpandedImageIndex(null)}
        >
          <div className="relative max-w-7xl max-h-full">
            <button
              onClick={() => setExpandedImageIndex(null)}
              className="absolute -top-12 right-0 text-white hover:text-stone-300 transition-colors"
            >
              <X size={32} />
            </button>

            <div className="absolute -top-12 left-0 text-white text-sm">
              {expandedImageIndex + 1} / {safeImages.length}
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation()
                setExpandedImageIndex((prev) =>
                  prev === null ? null : (prev - 1 + safeImages.length) % safeImages.length,
                )
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:text-stone-300"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                setExpandedImageIndex((prev) =>
                  prev === null ? null : (prev + 1) % safeImages.length,
                )
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:text-stone-300"
            >
              <ChevronRight size={32} />
            </button>

            <ImageWithFallback
              src={safeImages[expandedImageIndex] || "/placeholder.svg"}
              alt={`${title} expanded view`}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  )
}
