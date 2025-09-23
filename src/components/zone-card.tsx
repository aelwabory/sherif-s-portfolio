import ImageWithFallback from "@/components/figma/ImageWithFallback"
import { Building, Layers, Target } from "lucide-react"

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
  role: string[]
  studies: string[]
}

export default function ZoneSection({
  zoneIndex,
  zoneNumber,
  title,
  description,
  mainImage,
  images,
  features,
  projectDetails,
  role,
  studies,
}: ZoneSectionProps) {
  // Different layout configurations for each zone
  const getLayoutConfig = (index: number) => {
    const layouts = [
      {
        containerClass: "grid grid-cols-1 lg:grid-cols-4 gap-6",
        detailsClass: "lg:col-span-1",
        imagesClass: "lg:col-span-3",
        imageGrid: "grid grid-cols-2 gap-4",
        mainImageClass: "col-span-2 h-80 lg:h-96",
        smallImagesClass: "grid grid-cols-2 gap-4 col-span-2",
      },
      {
        containerClass: "grid grid-cols-1 lg:grid-cols-3 gap-6",
        detailsClass: "lg:col-span-1",
        imagesClass: "lg:col-span-2",
        imageGrid: "grid grid-cols-3 gap-4",
        mainImageClass: "col-span-2 h-96",
        smallImagesClass: "col-span-1 grid gap-4",
      },
      {
        containerClass: "grid grid-cols-1 lg:grid-cols-5 gap-6",
        detailsClass: "lg:col-span-1",
        imagesClass: "lg:col-span-4",
        imageGrid: "grid grid-cols-3 gap-4",
        mainImageClass: "col-span-2 row-span-2 h-96",
        smallImagesClass: "col-span-1 grid gap-4",
      },
      {
        containerClass: "grid grid-cols-1 lg:grid-cols-6 gap-6",
        detailsClass: "lg:col-span-1",
        imagesClass: "lg:col-span-5",
        imageGrid: "grid grid-cols-4 gap-4",
        mainImageClass: "col-span-2 h-80",
        smallImagesClass: "col-span-2 grid grid-cols-2 gap-4",
      },
    ]
    return layouts[index % layouts.length]
  }

  const layout = getLayoutConfig(zoneIndex)

  return (
    <div className="w-full py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with zone number and title */}
        <div className="flex items-center gap-8 mb-8">
          <div className="text-6xl md:text-8xl text-muted-foreground/30">{zoneNumber}</div>
          <div className="h-px bg-border flex-1"></div>
          <h2 className="text-2xl md:text-4xl uppercase tracking-wider">{title}</h2>
        </div>

        {/* Main content with varied layouts */}
        <div className={layout.containerClass}>
          {/* Project details column */}
          <div className={layout.detailsClass}>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-1">
                  <h3 className="text-sm uppercase tracking-wide text-muted-foreground mb-3">Project Description</h3>
                  <div className="space-y-2 text-xs">
                    <p className="text-muted-foreground">{projectDetails.scope}</p>
                    <span className="text-muted-foreground">
                      {projectDetails.location} • {projectDetails.date}
                    </span>
                    <span className="text-muted-foreground">
                      {projectDetails.about} • {projectDetails.area}
                    </span>
                  </div>
                </div>
                <div className="flex-none w-20">
                  <ImageWithFallback
                    src={images[0] || "/placeholder.svg"}
                    alt={`${title} detail`}
                    className="w-full h-16 object-cover rounded"
                  />
                </div>
              </div>

              {/* Role */}
              <div>
                <h4 className="text-sm uppercase tracking-wide text-muted-foreground mb-3">Role</h4>
                <div className="space-y-1">
                  {role.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-3 h-3 flex items-center justify-center">
                        {index === 0 && <Building className="w-3 h-3 text-muted-foreground" />}
                        {index === 1 && <Layers className="w-3 h-3 text-muted-foreground" />}
                        {index === 2 && <Target className="w-3 h-3 text-muted-foreground" />}
                      </div>
                      <span className="text-xs text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Studies */}
              <div>
                <h4 className="text-sm uppercase tracking-wide text-muted-foreground mb-3">Studies</h4>
                <div className="space-y-1">
                  {studies.map((study, index) => (
                    <p key={index} className="text-xs text-muted-foreground">
                      {study}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className={layout.imagesClass}>
            <div className={layout.imageGrid}>
              <div className={layout.mainImageClass}>
                <ImageWithFallback
                  src={mainImage || "/placeholder.svg"}
                  alt={title}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className={layout.smallImagesClass}>
                {images.slice(1, 5).map((image, index) => (
                  <ImageWithFallback
                    key={index}
                    src={image || "/placeholder.svg"}
                    alt={`${title} view ${index + 2}`}
                    className="w-full h-20 lg:h-24 object-cover rounded"
                  />
                ))}
              </div>
            </div>

            {images.length > 5 && (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {images.slice(5).map((image, index) => (
                  <ImageWithFallback
                    key={index + 5}
                    src={image || "/placeholder.svg"}
                    alt={`${title} additional view ${index + 6}`}
                    className="w-full h-16 lg:h-20 object-cover rounded"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
