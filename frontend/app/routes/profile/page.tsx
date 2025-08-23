import { Card } from "@components/ui/card"
import { Button } from "@components/ui/button"
import { AppLayout } from "@components/layout/app-layout"
import { User, Mail, Phone, Calendar } from "lucide-react"

export default function ProfilePage() {
  return (
    <AppLayout>
      <div className="min-h-full bg-gradient-to-br from-background via-muted/20 to-secondary/10 p-8">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 bg-card/95 backdrop-blur-sm border-2 border-primary/20 shadow-2xl space-y-8">
            {/* Header */}
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-serif font-bold text-primary">Profile</h1>
              <p className="text-muted-foreground text-sm">Your event profile information</p>
            </div>

            {/* User details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <User className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">Priya Sharma</p>
                  <p className="text-sm text-muted-foreground">Event Organizer</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">priya.sharma@email.com</p>
                  <p className="text-sm text-muted-foreground">Email Address</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">+91 98765 43210</p>
                  <p className="text-sm text-muted-foreground">Phone</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Calendar className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">Joined: Jan 2024</p>
                  <p className="text-sm text-muted-foreground">Member Since</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-center gap-4 pt-4">
              <Button>Edit Profile</Button>
              <Button variant="outline">Change Password</Button>
            </div>
          </Card>
        </div>
      </div>
    </AppLayout>
  )
}
