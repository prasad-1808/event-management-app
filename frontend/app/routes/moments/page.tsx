import { useEffect, useState } from "react"
import { AppLayout } from "@components/layout/app-layout"
import { EventSection } from "@components/moments/event-section"
import { Button } from "@components/ui/button"
import { Music, Heart, Users, Sparkles, Church } from "lucide-react"

// Mock media data generator (uses placehold.co instead of /placeholder.svg)
const generateEventMedia = (eventName: string, count: number) => {
  const media: { id: string; type: "video" | "photo"; src: string; alt: string; thumbnail?: string }[] = []
  for (let i = 1; i <= count; i++) {
    const isVideo = Math.random() > 0.7
    const width = 600
    const height = 400
    media.push({
      id: `${eventName.toLowerCase()}-${i}`,
      type: isVideo ? "video" : "photo",
      src: `https://placehold.co/${width}x${height}?text=${encodeURIComponent(eventName)}+${i}`,
      alt: `Beautiful moment from ${eventName} celebration`,
      thumbnail: isVideo
        ? `https://placehold.co/${width}x${height}?text=${encodeURIComponent(eventName)}+Video`
        : undefined,
    })
  }
  return media
}

const eventSections = [
  {
    id: "sangeet",
    title: "Sangeet Night",
    subtitle: "Music, Dance & Celebration",
    description:
      "The Sangeet ceremony was a vibrant celebration filled with traditional music, energetic dance performances, and joyful moments shared with family and friends. This pre-wedding ritual brought together both families in a night of cultural festivities, creating memories that will last a lifetime.",
    date: "December 12, 2024",
    time: "7:00 PM onwards",
    venue: "Grand Ballroom, Heritage Hotel",
    theme: {
      primary: "#8B5CF6",
      secondary: "#A78BFA",
      accent: "#C4B5FD",
      gradient: "bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800",
      icon: <Music className="h-12 w-12" />,
    },
    media: generateEventMedia("Sangeet", 12),
    highlights: [
      "Traditional folk dance performances by family members",
      "Live dhol and tabla music creating an authentic atmosphere",
      "Choreographed dance sequences by the bride and groom",
      "Colorful traditional attire and vibrant decorations",
      "Delicious regional cuisine and festive treats",
      "Heartwarming speeches and blessings from elders",
    ],
  },
  {
    id: "engagement",
    title: "Engagement Ceremony",
    subtitle: "A Promise of Forever",
    description:
      "The engagement ceremony marked the official beginning of our journey together. Surrounded by close family and friends, we exchanged rings and vows in an intimate setting filled with love, blessings, and the promise of a beautiful future ahead.",
    date: "December 13, 2024",
    time: "11:00 AM",
    venue: "Garden Pavilion, Heritage Hotel",
    theme: {
      primary: "#EC4899",
      secondary: "#F472B6",
      accent: "#FBCFE8",
      gradient: "bg-gradient-to-br from-pink-500 via-rose-600 to-red-600",
      icon: <Heart className="h-12 w-12" />,
    },
    media: generateEventMedia("Engagement", 10),
    highlights: [
      "Exchange of rings in a beautiful garden setting",
      "Intimate ceremony with close family and friends",
      "Traditional rituals and blessings from both families",
      "Professional photography capturing every precious moment",
      "Elegant floral arrangements and romantic decorations",
      "Celebration lunch with loved ones",
    ],
  },
  {
    id: "marriage-ceremony",
    title: "Marriage Ceremony",
    subtitle: "Sacred Vows & Eternal Bond",
    description:
      "The marriage ceremony was the most sacred and beautiful moment of our celebration. Following traditional rituals and customs, we took our vows in the presence of the divine and our loved ones, officially beginning our journey as husband and wife.",
    date: "December 15, 2024",
    time: "4:00 PM",
    venue: "Temple Courtyard, Heritage Hotel",
    theme: {
      primary: "#DC2626",
      secondary: "#EF4444",
      accent: "#FCA5A5",
      gradient: "bg-gradient-to-br from-red-600 via-orange-600 to-yellow-600",
      icon: <Church className="h-12 w-12" />,
    },
    media: generateEventMedia("Marriage Ceremony", 15),
    highlights: [
      "Sacred fire ceremony (Agni) as witness to our vows",
      "Traditional seven steps (Saptapadi) around the holy fire",
      "Exchange of garlands (Jaimala) in a joyous atmosphere",
      "Blessings from priests and family elders",
      "Beautiful traditional wedding attire and jewelry",
      "Emotional moments of joy and celebration",
    ],
  },
  {
    id: "reception",
    title: "Wedding Reception",
    subtitle: "Grand Celebration & Feast",
    description:
      "The wedding reception was a grand celebration where we welcomed all our friends, extended family, and well-wishers. It was an evening of joy, laughter, delicious food, and memorable moments as we celebrated our new beginning with everyone who matters to us.",
    date: "December 15, 2024",
    time: "7:00 PM onwards",
    venue: "Grand Ballroom, Heritage Hotel",
    theme: {
      primary: "#2563EB",
      secondary: "#3B82F6",
      accent: "#93C5FD",
      gradient: "bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800",
      icon: <Users className="h-12 w-12" />,
    },
    media: generateEventMedia("Reception", 18),
    highlights: [
      "Grand entrance of the newlywed couple",
      "Multi-cuisine dinner buffet with live cooking stations",
      "Live music and DJ entertainment throughout the evening",
      "Special dance performances and cultural programs",
      "Photo booth with props for memorable pictures",
      "Cake cutting ceremony and champagne toast",
    ],
  },
  {
    id: "brides-party",
    title: "Bride's Party",
    subtitle: "Girls' Night & Celebration",
    description:
      "The bride's party was a special celebration with the bride's closest friends and female family members. It was an intimate gathering filled with laughter, games, beauty rituals, and heartfelt moments as we prepared for the big day ahead.",
    date: "December 14, 2024",
    time: "2:00 PM",
    venue: "Bridal Suite, Heritage Hotel",
    theme: {
      primary: "#DB2777",
      secondary: "#EC4899",
      accent: "#F9A8D4",
      gradient: "bg-gradient-to-br from-rose-500 via-pink-600 to-fuchsia-700",
      icon: <Sparkles className="h-12 w-12" />,
    },
    media: generateEventMedia("Brides Party", 8),
    highlights: [
      "Henna (Mehndi) ceremony with intricate designs",
      "Beauty and spa treatments for the bridal party",
      "Traditional games and fun activities",
      "Sharing of memories and heartfelt conversations",
      "Special lunch prepared by family members",
      "Gift exchange and blessings for the bride",
    ],
  },
]

const MomentsPage = () => {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = eventSections.map((section) => section.id)
      const scrollPosition = window.scrollY + 100

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const momentsSidebar = (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-3">Event Timeline</h3>
        <div className="space-y-2">
          {eventSections.map((section) => (
            <Button
              key={section.id}
              variant={activeSection === section.id ? "secondary" : "ghost"}
              size="sm"
              className="w-full justify-start text-left h-auto p-3"
              onClick={() => {
                document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-3 h-3 rounded-full mt-1 flex-shrink-0"
                  style={{ backgroundColor: section.theme.primary }}
                ></div>
                <div>
                  <div className="font-medium text-sm">{section.title}</div>
                  <div className="text-xs text-muted-foreground">{section.date}</div>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t">
        <h3 className="text-sm font-medium mb-3">Quick Stats</h3>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex justify-between">
            <span>Total Events</span>
            <span>{eventSections.length}</span>
          </div>
          <div className="flex justify-between">
            <span>Photos & Videos</span>
            <span>
              {eventSections.reduce((acc, e) => acc + e.media.length, 0)}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Duration</span>
            <span>4 Days</span>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <AppLayout secondarySidebar={momentsSidebar}>
      <div className="max-w-6xl mx-auto p-4 md:p-8">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-serif font-bold text-primary mb-4">Wedding Moments</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Relive the magic of our celebration through each special milestone. From the vibrant Sangeet to the sacred
            ceremony, every moment tells our beautiful love story.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-yellow-500 to-red-500 rounded-full"></div>
          </div>
        </div>

        {/* Event Sections */}
        <div className="space-y-16">
          {eventSections.map((section) => (
            <EventSection key={section.id} {...section} />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 text-center py-12 border-t">
          <h2 className="text-2xl font-serif font-semibold text-primary mb-4">Thank You for Celebrating With Us</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            These moments wouldn't have been as special without the love and presence of our family and friends.
          </p>
        </div>
      </div>
    </AppLayout>
  )
}

export default function Page() {
  return <MomentsPage />
}
