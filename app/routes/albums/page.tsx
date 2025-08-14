import { useState, useEffect } from "react"
import { AppLayout } from "@components/layout/app-layout"
import { MasonryGrid } from "@components/albums/masonry-grid"
import { MobileCarousel } from "@components/albums/mobile-carousel"
import { Button } from "@components/ui/button"
import { Input } from "@components/ui/input"
import { Badge } from "@components/ui/badge"
import { Grid, List, Search, Filter } from "lucide-react"

// Mock photo data
const generateMockPhotos = (startId: number, count: number) => {
  const events = ["Sangeet", "Engagement", "Reception", "Bride's Party", "Marriage Ceremony"]
  const photos = []

  for (let i = 0; i < count; i++) {
    const id = startId + i
    const event = events[Math.floor(Math.random() * events.length)]
    const width = 400 + Math.floor(Math.random() * 200)
    const height = 300 + Math.floor(Math.random() * 400)

    photos.push({
      id: `photo-${id}`,
      src: `/placeholder.svg?height=${height}&width=${width}&query=wedding ${event.toLowerCase()} celebration beautiful moment`,
      alt: `Beautiful moment from ${event} - capturing the joy and celebration of this special occasion`,
      width,
      height,
      event,
      likes: Math.floor(Math.random() * 50) + 5,
      isLiked: Math.random() > 0.7,
    })
  }

  return photos
}

const albumFilters = (
  <div className="space-y-6">
    {/* Search */}
    <div>
      <h3 className="text-sm font-medium mb-3">Search Photos</h3>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search moments..." className="pl-10" />
      </div>
    </div>

    {/* View Options */}
    <div>
      <h3 className="text-sm font-medium mb-3">View Options</h3>
      <div className="space-y-2">
        <Button variant="ghost" size="sm" className="w-full justify-start">
          <Grid className="h-4 w-4 mr-2" />
          Masonry Grid
        </Button>
        <Button variant="ghost" size="sm" className="w-full justify-start">
          <List className="h-4 w-4 mr-2" />
          List View
        </Button>
      </div>
    </div>

    {/* Filter by Event */}
    <div>
      <h3 className="text-sm font-medium mb-3">Filter by Event</h3>
      <div className="space-y-2">
        <Button variant="ghost" size="sm" className="w-full justify-start">
          All Photos
          <Badge variant="secondary" className="ml-auto">
            120
          </Badge>
        </Button>
        <Button variant="ghost" size="sm" className="w-full justify-start">
          Sangeet
          <Badge variant="secondary" className="ml-auto">
            25
          </Badge>
        </Button>
        <Button variant="ghost" size="sm" className="w-full justify-start">
          Engagement
          <Badge variant="secondary" className="ml-auto">
            18
          </Badge>
        </Button>
        <Button variant="ghost" size="sm" className="w-full justify-start">
          Reception
          <Badge variant="secondary" className="ml-auto">
            35
          </Badge>
        </Button>
        <Button variant="ghost" size="sm" className="w-full justify-start">
          Marriage Ceremony
          <Badge variant="secondary" className="ml-auto">
            28
          </Badge>
        </Button>
        <Button variant="ghost" size="sm" className="w-full justify-start">
          Bride's Party
          <Badge variant="secondary" className="ml-auto">
            14
          </Badge>
        </Button>
      </div>
    </div>

    {/* Sort Options */}
    <div>
      <h3 className="text-sm font-medium mb-3">Sort By</h3>
      <div className="space-y-2">
        <Button variant="ghost" size="sm" className="w-full justify-start">
          Most Recent
        </Button>
        <Button variant="ghost" size="sm" className="w-full justify-start">
          Most Liked
        </Button>
        <Button variant="ghost" size="sm" className="w-full justify-start">
          Event Order
        </Button>
      </div>
    </div>
  </div>
)

function AlbumsPage() {
  const [photos, setPhotos] = useState(() => generateMockPhotos(1, 20))
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const loadMorePhotos = async () => {
    if (loading || !hasMore) return

    setLoading(true)

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const newPhotos = generateMockPhotos(photos.length + 1, 12)
    setPhotos((prev) => [...prev, ...newPhotos])

    // Stop loading more after 100 photos for demo
    if (photos.length + newPhotos.length >= 100) {
      setHasMore(false)
    }

    setLoading(false)
  }

  return (
    <AppLayout secondarySidebar={albumFilters}>
      <div className="p-4 md:p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-serif font-bold text-primary mb-2">Photo Albums</h1>
              <p className="text-muted-foreground">Browse through our beautiful collection of memories</p>
            </div>

            <div className="hidden md:flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-6 text-sm text-muted-foreground">
            <span>{photos.length} photos loaded</span>
            <span>5 events covered</span>
            <span>Updated recently</span>
          </div>
        </div>

        {/* Photo Grid */}
        {isMobile ? (
          <MobileCarousel photos={photos} />
        ) : (
          <MasonryGrid photos={photos} onLoadMore={loadMorePhotos} hasMore={hasMore} loading={loading} />
        )}
      </div>
    </AppLayout>
  )
}

export default function Page() {
  return (
      <AlbumsPage />
  )
}
