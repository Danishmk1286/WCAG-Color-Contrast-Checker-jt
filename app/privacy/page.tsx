import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Privacy Policy - WCAG Color Contrast Checker",
  description: "Privacy policy for the WCAG Color Contrast Checker tool by Danish Khan",
}

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground">How we handle your data and privacy</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Data Collection</CardTitle>
            <CardDescription>What information we collect and why</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Essential Cookies</h3>
              <p className="text-muted-foreground">
                We use essential cookies only to remember your theme preferences (light/dark mode) and cookie consent
                choices. These cookies are necessary for the basic functionality of the website.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">No Tracking</h3>
              <p className="text-muted-foreground">
                We do not use any analytics, tracking cookies, or third-party services that collect personal
                information. Your color contrast tests are processed entirely in your browser and are not stored or
                transmitted to our servers.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data Storage</CardTitle>
            <CardDescription>How your data is stored and protected</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Local Storage</h3>
              <p className="text-muted-foreground">
                All your preferences and settings are stored locally in your browser. We do not have access to this
                information, and it never leaves your device.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">No Personal Information</h3>
              <p className="text-muted-foreground">
                We do not collect, store, or process any personal information such as names, email addresses, or IP
                addresses.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Rights</CardTitle>
            <CardDescription>Your privacy rights and choices</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Cookie Control</h3>
              <p className="text-muted-foreground">
                You can decline cookies at any time through the cookie notice or by clearing your browser's local
                storage. This may affect some functionality like theme preferences.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Data Deletion</h3>
              <p className="text-muted-foreground">
                Since all data is stored locally in your browser, you can delete all associated data by clearing your
                browser's local storage for this website.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact</CardTitle>
            <CardDescription>Questions about this privacy policy</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              If you have any questions about this privacy policy, please contact Danish Khan through{" "}
              <a
                href="https://linkedin.com/in/danishkhan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>{" "}
              or{" "}
              <a
                href="https://github.com/danishkhan/wcag-contrast-checker"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
              .
            </p>
          </CardContent>
        </Card>

        <div className="text-center text-sm text-muted-foreground">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  )
}
