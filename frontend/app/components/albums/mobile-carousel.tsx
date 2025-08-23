"use client"

import { useState } from "react"
import { Card } from "@components/ui/card"
import { Badge } from "@components/ui/badge"
import { Button } from "@components/ui/button"
import { ChevronLeft, ChevronRight, Heart } from "lucide-react"

interface Photo {
  id: string
  src: string
  alt: string
  width: number
  height: number
  event: string
  likes: number
  isLiked: boolean
}

interface MobileCarouselProps {
  photos: Photo[]
  photosPerPage?: number
}

export function MobileCarousel({ photos, photosPerPage = 6 }: MobileCarouselProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = Math.ceil(photos.length / photosPerPage)

  const getCurrentPhotos = () => {
    const start = currentPage * photosPerPage
    const end = start + photosPerPage
    return photos.slice(start, end)
  }

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const getEventColor = (event: string) => {
    const colors = {
      Sangeet: "bg-purple-100 text-purple-800 border-purple-200",
      Engagement: "bg-pink-100 text-pink-800 border-pink-200",
      Reception: "bg-blue-100 text-blue-800 border-blue-200",
      "Bride's Party": "bg-rose-100 text-rose-800 border-rose-200",
      "Marriage Ceremony": "bg-amber-100 text-amber-800 border-amber-200",
    }
    return colors[event as keyof typeof colors] || "bg-gray-100 text-gray-800 border-gray-200"
  }

  return (
    <div className="w-full">
      {/* Photo Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {getCurrentPhotos().map((photo, index) => (
          <Card
            key={photo.id}
            className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg animate-in fade-in slide-in-from-bottom-4"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <div className="relative overflow-hidden">
              <img
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-3">
              <div className="flex items-center justify-between mb-1">
                <Badge variant="outline" className={`text-xs ${getEventColor(photo.event)}`}>
                  {photo.event}
                </Badge>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Heart className={`h-3 w-3 ${photo.isLiked ? "fill-red-500 text-red-500" : ""}`} />
                  <span>{photo.likes}</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2">{photo.alt}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Carousel Navigation */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="sm"
          onClick={prevPage}
          disabled={totalPages <= 1}
          className="flex items-center gap-2 bg-transparent"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>

        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                i === currentPage ? "bg-primary scale-125" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={nextPage}
          disabled={totalPages <= 1}
          className="flex items-center gap-2 bg-transparent"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="text-center mt-4">
        <p className="text-sm text-muted-foreground">
          Page {currentPage + 1} of {totalPages} • {photos.length} photos total
        </p>
      </div>
    </div>
  )
}
