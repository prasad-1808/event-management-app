
import { Card } from "@components/ui/card"
import { Switch } from "@components/ui/switch"
import { AppLayout } from "@components/layout/app-layout"
export default function SettingsPage() {
  return (
    <AppLayout>
      <div className="min-h-full bg-gradient-to-br from-background via-muted/20 to-secondary/10 p-8">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 bg-card/95 backdrop-blur-sm border-2 border-primary/20 shadow-2xl space-y-8">
            {/* Header */}
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-serif font-bold text-primary">Settings</h1>
              <p className="text-muted-foreground text-sm">Manage your preferences</p>
            </div>

            {/* Preferences */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">Email Notifications</p>
                  <p className="text-sm text-muted-foreground">Receive updates about upcoming events</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">SMS Alerts</p>
                  <p className="text-sm text-muted-foreground">Get reminders directly on your phone</p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">Dark Mode</p>
                  <p className="text-sm text-muted-foreground">Enable dark theme for the app</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>

            {/* Footer */}
            <div className="text-center pt-6">
              <p className="text-sm text-muted-foreground">Changes are saved automatically</p>
            </div>
          </Card>
        </div>
      </div>
    </AppLayout>
  )
}
