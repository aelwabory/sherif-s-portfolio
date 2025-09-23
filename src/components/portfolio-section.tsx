"use client"

import ImageWithFallback from "@/components/figma/ImageWithFallback"
import { Building, Layers, Target, Users, Zap, Globe } from "lucide-react"

interface PortfolioSectionProps {
  zoneIndex: number
  zoneNumber: string
  title: string
  description: string
  mainImage: string
  images: string[]
  projectDetails: {
    scope: string
    location: string
    date: string
    about: string
    area: string
  }
  role: string[]
  studies: string[]
}

export default function PortfolioSection({
  zoneIndex,
  zoneNumber,
  title,
  description,
  mainImage,
  images,
  projectDetails,
  role,
  studies,
}: PortfolioSectionProps) {
  const getLayoutConfig = (index: number) => {
    const layouts = [
      // Layout 1: Mosaic Grid with Left Sidebar
      {
        type: "mosaic-left",
        containerClass: "grid grid-cols-1 lg:grid-cols-4 gap-8 min-h-[600px]",
        sidebarClass: "lg:col-span-1 bg-white p-8 flex flex-col justify-center",
        imagesClass: "lg:col-span-3 grid grid-cols-2 gap-4",
        heroImageClass: "col-span-2 row-span-2 h-96",
        supportingClass: "grid grid-cols-2 gap-4 col-span-2",
      },
      // Layout 2: Overlapping Layers with Right Sidebar
      {
        type: "overlapping-right",
        containerClass: "grid grid-cols-1 lg:grid-cols-5 gap-8 min-h-[600px]",
        sidebarClass: "lg:col-span-1 lg:order-2 bg-white p-8 flex flex-col justify-center",
        imagesClass: "lg:col-span-4 lg:order-1 relative",
        heroImageClass: "w-full h-96 relative z-10",
        supportingClass: "absolute top-8 right-8 w-1/3 space-y-4 z-20",
      },
      // Layout 3: Vertical Strips with Bottom Sidebar
      {
        type: "vertical-strips",
        containerClass: "flex flex-col gap-8 min-h-[600px]",
        sidebarClass: "bg-white p-8 order-2",
        imagesClass: "order-1 grid grid-cols-3 gap-4 h-96",
        heroImageClass: "col-span-2 h-full",
        supportingClass: "col-span-1 grid gap-4",
      },
      // Layout 4: Side-by-Side Comparison with Center Sidebar
      {
        type: "comparison-center",
        containerClass: "grid grid-cols-1 lg:grid-cols-7 gap-8 min-h-[600px]",
        sidebarClass: "lg:col-span-2 lg:col-start-3 bg-white p-8 flex flex-col justify-center z-10 relative",
        imagesClass: "lg:col-span-7 lg:row-start-1 lg:col-start-1 grid grid-cols-2 gap-8",
        heroImageClass: "col-span-1 h-96",
        supportingClass: "col-span-1 grid grid-cols-2 gap-4",
      },
      // Layout 5: Asymmetric Grid with Top Sidebar
      {
        type: "asymmetric-top",
        containerClass: "flex flex-col gap-8 min-h-[600px]",
        sidebarClass: "bg-white p-8 order-1 grid grid-cols-1 lg:grid-cols-3 gap-8",
        imagesClass: "order-2 grid grid-cols-3 gap-4 h-80",
        heroImageClass: "col-span-1 h-full",
        supportingClass: "col-span-2 grid grid-cols-2 gap-4",
      },
      // Layout 6: Floating Panels with Integrated Sidebar
      {
        type: "floating-panels",
        containerClass: "relative min-h-[600px] p-8",
        sidebarClass: "absolute top-8 left-8 w-80 bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-lg z-20",
        imagesClass: "grid grid-cols-2 gap-6 h-full",
        heroImageClass: "col-span-1 h-96",
        supportingClass: "col-span-1 grid grid-cols-1 gap-4",
      },
      // Layout 7: Magazine Style with Inset Sidebar
      {
        type: "magazine-inset",
        containerClass: "grid grid-cols-1 lg:grid-cols-6 gap-8 min-h-[600px]",
        sidebarClass: "lg:col-span-2 lg:col-start-2 bg-gray-50 p-8 flex flex-col justify-center",
        imagesClass: "lg:col-span-6 lg:row-start-1 lg:col-start-1 grid grid-cols-4 gap-4",
        heroImageClass: "col-span-2 col-start-3 h-96",
        supportingClass: "col-span-2 col-start-1 grid gap-4",
      },
      // Layout 8: Diagonal Split with Corner Sidebar
      {
        type: "diagonal-split",
        containerClass: "relative min-h-[600px] overflow-hidden",
        sidebarClass: "absolute top-8 right-8 w-72 bg-white p-6 rounded-lg shadow-xl z-20",
        imagesClass: "grid grid-cols-2 gap-8 h-full transform -rotate-1",
        heroImageClass: "col-span-1 h-96 transform rotate-1",
        supportingClass: "col-span-1 grid gap-4 transform rotate-1",
      },
    ]
    return layouts[index % layouts.length]
  }

  const layout = getLayoutConfig(zoneIndex)

  const getRoleIcon = (index: number) => {
    const icons = [Building, Layers, Target, Users, Zap, Globe]
    const IconComponent = icons[index % icons.length]
    return <IconComponent className="w-4 h-4 text-gray-600" />
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center mb-16">
          <div className="text-8xl font-bold text-gray-300 mr-8 font-mono leading-none">{zoneNumber}</div>
          <div className="h-px bg-gray-300 flex-1 mr-8" />
          <h2 className="text-4xl font-bold uppercase tracking-wider text-gray-900 whitespace-nowrap">{title}</h2>
        </div>

        <div className={layout.containerClass}>
          {/* Project Details Sidebar */}
          <div className={layout.sidebarClass}>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold uppercase tracking-wider text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  Project Description
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-6">{description}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wide text-gray-900 mb-2">Scope</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{projectDetails.scope}</p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wide text-gray-900 mb-2">Location</h4>
                  <p className="text-xs text-gray-600">{projectDetails.location}</p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wide text-gray-900 mb-2">Date</h4>
                  <p className="text-xs text-gray-600">{projectDetails.date}</p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wide text-gray-900 mb-2">Typology & Area</h4>
                  <p className="text-xs text-gray-600 mb-1">{projectDetails.about}</p>
                  <p className="text-xs text-gray-600">{projectDetails.area}</p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wide text-gray-900 mb-3">Role</h4>
                <div className="space-y-2">
                  {role.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-0.5">{getRoleIcon(index)}</div>
                      <span className="text-xs text-gray-600 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wide text-gray-900 mb-3">Studies</h4>
                <ul className="space-y-1">
                  {studies.map((study, index) => (
                    <li key={index} className="text-xs text-gray-600 flex items-start">
                      <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {study}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className={layout.imagesClass}>
            {layout.type === "mosaic-left" && (
              <>
                <div className={layout.heroImageClass}>
                  <ImageWithFallback
                    src={mainImage || "/placeholder.svg"}
                    alt={`${title} - Main view`}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className={layout.supportingClass}>
                  {images.slice(0, 4).map((image, index) => (
                    <ImageWithFallback
                      key={index}
                      src={image || "/placeholder.svg"}
                      alt={`${title} - View ${index + 2}`}
                      className="w-full h-24 object-cover rounded-lg shadow-md"
                    />
                  ))}
                </div>
              </>
            )}

            {layout.type === "overlapping-right" && (
              <>
                <div className={layout.heroImageClass}>
                  <ImageWithFallback
                    src={mainImage || "/placeholder.svg"}
                    alt={`${title} - Main view`}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className={layout.supportingClass}>
                  {images.slice(0, 3).map((image, index) => (
                    <ImageWithFallback
                      key={index}
                      src={image || "/placeholder.svg"}
                      alt={`${title} - View ${index + 2}`}
                      className="w-full h-20 object-cover rounded-lg shadow-md"
                    />
                  ))}
                </div>
              </>
            )}

            {layout.type === "vertical-strips" && (
              <>
                <div className={layout.heroImageClass}>
                  <ImageWithFallback
                    src={mainImage || "/placeholder.svg"}
                    alt={`${title} - Main view`}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className={layout.supportingClass}>
                  {images.slice(0, 4).map((image, index) => (
                    <ImageWithFallback
                      key={index}
                      src={image || "/placeholder.svg"}
                      alt={`${title} - View ${index + 2}`}
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  ))}
                </div>
              </>
            )}

            {layout.type === "comparison-center" && (
              <>
                <div className={layout.heroImageClass}>
                  <ImageWithFallback
                    src={mainImage || "/placeholder.svg"}
                    alt={`${title} - Main view`}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className={layout.supportingClass}>
                  {images.slice(0, 4).map((image, index) => (
                    <ImageWithFallback
                      key={index}
                      src={image || "/placeholder.svg"}
                      alt={`${title} - View ${index + 2}`}
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  ))}
                </div>
              </>
            )}

            {layout.type === "asymmetric-top" && (
              <>
                <div className={layout.heroImageClass}>
                  <ImageWithFallback
                    src={mainImage || "/placeholder.svg"}
                    alt={`${title} - Main view`}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className={layout.supportingClass}>
                  {images.slice(0, 4).map((image, index) => (
                    <ImageWithFallback
                      key={index}
                      src={image || "/placeholder.svg"}
                      alt={`${title} - View ${index + 2}`}
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  ))}
                </div>
              </>
            )}

            {layout.type === "floating-panels" && (
              <>
                <div className={layout.heroImageClass}>
                  <ImageWithFallback
                    src={mainImage || "/placeholder.svg"}
                    alt={`${title} - Main view`}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className={layout.supportingClass}>
                  {images.slice(0, 3).map((image, index) => (
                    <ImageWithFallback
                      key={index}
                      src={image || "/placeholder.svg"}
                      alt={`${title} - View ${index + 2}`}
                      className="w-full h-28 object-cover rounded-lg shadow-md"
                    />
                  ))}
                </div>
              </>
            )}

            {layout.type === "magazine-inset" && (
              <>
                <div className={layout.heroImageClass}>
                  <ImageWithFallback
                    src={mainImage || "/placeholder.svg"}
                    alt={`${title} - Main view`}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className={layout.supportingClass}>
                  {images.slice(0, 4).map((image, index) => (
                    <ImageWithFallback
                      key={index}
                      src={image || "/placeholder.svg"}
                      alt={`${title} - View ${index + 2}`}
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  ))}
                </div>
              </>
            )}

            {layout.type === "diagonal-split" && (
              <>
                <div className={layout.heroImageClass}>
                  <ImageWithFallback
                    src={mainImage || "/placeholder.svg"}
                    alt={`${title} - Main view`}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className={layout.supportingClass}>
                  {images.slice(0, 3).map((image, index) => (
                    <ImageWithFallback
                      key={index}
                      src={image || "/placeholder.svg"}
                      alt={`${title} - View ${index + 2}`}
                      className="w-full h-28 object-cover rounded-lg shadow-md"
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
