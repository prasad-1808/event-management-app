import { Link } from "react-router"
import { Card } from "@components/ui/card"
import { Button } from "@components/ui/button"
import { AppLayout } from "@components/layout/app-layout"
import { Calendar, Clock, MapPin, Heart } from "lucide-react"

export default function InvitationPage() {
  return (
    <AppLayout>
      <div className="min-h-full bg-gradient-to-br from-background via-muted/20 to-secondary/10">
        <div className="flex items-center justify-center min-h-full p-8">
          <div className="w-full max-w-2xl">
            {/* Main Invitation Card */}
            <Card className="relative overflow-hidden bg-card/95 backdrop-blur-sm border-2 border-primary/20 shadow-2xl">
              {/* Decorative border pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-gold-rose" />
              <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-gold-rose" />

              <div className="relative p-12 text-center space-y-8">
                {/* Header ornament */}
                <div className="flex justify-center">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-px bg-gradient-gold-rose" />
                    <Heart className="h-6 w-6 text-primary fill-primary/20" />
                    <div className="w-12 h-px bg-gradient-gold-rose" />
                  </div>
                </div>

                {/* Main invitation text */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase">
                      You are cordially invited to celebrate
                    </p>
                    <h1 className="text-5xl font-serif font-bold text-primary leading-tight">
                      Our Wedding
                    </h1>
                    <p className="text-xl text-muted-foreground font-light">
                      A celebration of love, joy, and new beginnings
                    </p>
                  </div>

                  {/* Couple names */}
                  <div className="py-6">
                    <div className="text-3xl font-serif font-semibold text-foreground">
                      Priya & Arjun
                    </div>
                    <div className="mt-2 flex justify-center">
                      <div className="w-24 h-px bg-gradient-gold-rose" />
                    </div>
                  </div>
                </div>

                {/* Event details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
                  <div className="flex flex-col items-center space-y-2">
                    <Calendar className="h-8 w-8 text-primary" />
                    <div className="text-center">
                      <p className="font-semibold text-foreground">December 15, 2024</p>
                      <p className="text-sm text-muted-foreground">Saturday</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center space-y-2">
                    <Clock className="h-8 w-8 text-primary" />
                    <div className="text-center">
                      <p className="font-semibold text-foreground">4:00 PM</p>
                      <p className="text-sm text-muted-foreground">Ceremony begins</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center space-y-2">
                    <MapPin className="h-8 w-8 text-primary" />
                    <div className="text-center">
                      <p className="font-semibold text-foreground">Grand Ballroom</p>
                      <p className="text-sm text-muted-foreground">Heritage Hotel</p>
                    </div>
                  </div>
                </div>

                {/* Call to action */}
                <div className="space-y-4 pt-6">
                  <p className="text-muted-foreground">
                    Join us as we begin our journey together surrounded by family and friends
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/albums">
                      <Button
                        size="lg"
                        className="bg-gradient-gold-rose hover:gradient-gold-rose-hover text-white font-medium px-8"
                      >
                        View Photo Albums
                      </Button>
                    </Link>
                    <Link to="/moments">
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 bg-transparent"
                      >
                        Explore Moments
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Footer ornament */}
                <div className="flex justify-center pt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-px bg-gradient-gold-rose" />
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <div className="w-4 h-px bg-gradient-gold-rose" />
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <div className="w-4 h-px bg-gradient-gold-rose" />
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <div className="w-8 h-px bg-gradient-gold-rose" />
                  </div>
                </div>
              </div>
            </Card>

            {/* Additional celebration info */}
            <div className="mt-8 text-center space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-6 bg-card/80 backdrop-blur-sm border-accent/20">
                  <h3 className="font-serif font-semibold text-lg text-primary mb-2">
                    Multi-Day Celebration
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Experience the joy across multiple events - from Sangeet to Reception,
                    each moment captured and preserved for you to relive.
                  </p>
                </Card>

                <Card className="p-6 bg-card/80 backdrop-blur-sm border-secondary/20">
                  <h3 className="font-serif font-semibold text-lg text-primary mb-2">
                    Digital Memory Hub
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Browse through beautiful photo albums, watch special moments, and share
                    in the celebration from anywhere.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
