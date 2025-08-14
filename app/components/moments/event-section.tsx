import React from "react"
import { Card } from "@components/ui/card"
import { Badge } from "@components/ui/badge"
import { Button } from "@components/ui/button"
import { Play, Heart, Share2, Calendar, MapPin, Clock } from "lucide-react"

interface EventMedia {
  id: string
  type: "photo" | "video"
  src: string
  alt: string
  thumbnail?: string
}

interface EventSectionProps {
  id: string
  title: string
  subtitle: string
  description: string
  date: string
  time: string
  venue: string
  theme: {
    primary: string
    secondary: string
    accent: string
    gradient: string
    icon: React.ReactNode
  }
  media: EventMedia[]
  highlights: string[]
}

export function EventSection({
  id,
  title,
  subtitle,
  description,
  date,
  time,
  venue,
  theme,
  media,
  highlights,
}: EventSectionProps) {
  return (
    <section id={id} className="py-16 scroll-mt-20">
      {/* Section Header */}
      <div className={`relative overflow-hidden rounded-2xl mb-12 ${theme.gradient}`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative p-12 text-center text-white">
          <div className="flex justify-center mb-4">{theme.icon}</div>
          <h2 className="text-4xl font-serif font-bold mb-2">{title}</h2>
          <p className="text-xl font-light mb-6">{subtitle}</p>

          {/* Event Details */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{venue}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mb-12">
        <Card className="p-8 bg-gradient-to-r from-card to-muted/20">
          <p className="text-lg leading-relaxed text-muted-foreground">{description}</p>
        </Card>
      </div>

      {/* Highlights */}
      <div className="mb-12">
        <h3 className="text-2xl font-serif font-semibold mb-6" style={{ color: theme.primary }}>
          Event Highlights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {highlights.map((highlight, index) => (
            <Card key={index} className="p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: theme.accent }}
                ></div>
                <p className="text-sm text-muted-foreground">{highlight}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Media Gallery */}
      <div className="mb-12">
        <h3 className="text-2xl font-serif font-semibold mb-6" style={{ color: theme.primary }}>
          Photos & Videos
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {media.slice(0, 6).map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                      <Play className="h-6 w-6 text-gray-800 ml-1" />
                    </div>
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300">
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" style={{ borderColor: theme.secondary, color: theme.primary }}>
                    {item.type === "video" ? "Video" : "Photo"}
                  </Badge>
                  <p className="text-xs text-muted-foreground">{title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {media.length > 6 && (
          <div className="text-center mt-6">
            <Button variant="outline" style={{ borderColor: theme.primary, color: theme.primary }}>
              View All {media.length} Items
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
