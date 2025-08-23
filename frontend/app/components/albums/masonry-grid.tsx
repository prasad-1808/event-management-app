
import { useState, useEffect, useRef, useCallback } from "react"
import { Card } from "@components/ui/card"
import { Badge } from "@components/ui/badge"
import { Heart, Download, Share2 } from "lucide-react"
import { Button } from "@components/ui/button"

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

interface MasonryGridProps {
  photos: Photo[]
  onLoadMore: () => void
  hasMore: boolean
  loading: boolean
}

export function MasonryGrid({ photos, onLoadMore, hasMore, loading }: MasonryGridProps) {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)
  const loadMoreRef = useRef<HTMLDivElement>(null)

  // Intersection Observer for infinite scroll
  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect()

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          onLoadMore()
        }
      },
      { threshold: 0.1 },
    )

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current)
    }

    return () => {
      if (observerRef.current) observerRef.current.disconnect()
    }
  }, [hasMore, loading, onLoadMore])

  const handleImageLoad = useCallback((photoId: string) => {
    setLoadedImages((prev) => new Set([...prev, photoId]))
  }, [])

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
      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {photos.map((photo, index) => (
          <Card
            key={photo.id}
            className={`break-inside-avoid mb-4 overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-xl hover:scale-[1.02] ${
              loadedImages.has(photo.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{
              animationDelay: `${(index % 8) * 100}ms`,
            }}
          >
            <div className="relative overflow-hidden">
              <img
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                onLoad={() => handleImageLoad(photo.id)}
                loading="lazy"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline" className={getEventColor(photo.event)}>
                  {photo.event}
                </Badge>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Heart className={`h-4 w-4 ${photo.isLiked ? "fill-red-500 text-red-500" : ""}`} />
                  <span>{photo.likes}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">{photo.alt}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Loading indicator */}
      {loading && (
        <div className="flex justify-center py-8">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
          </div>
        </div>
      )}

      {/* Infinite scroll trigger */}
      <div ref={loadMoreRef} className="h-4" />

      {/* End message */}
      {!hasMore && photos.length > 0 && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">You've seen all the beautiful moments!</p>
        </div>
      )}
    </div>
  )
}
