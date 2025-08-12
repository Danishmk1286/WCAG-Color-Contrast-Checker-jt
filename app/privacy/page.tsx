import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Privacy Policy - WCAG Color Contrast Checker",
  description:
    "Privacy policy for the WCAG Color Contrast Checker tool by Danish Khan. Learn how we handle your data and protect your privacy.",
  keywords: "privacy policy, GDPR, cookies, data protection, Danish Khan, WCAG contrast checker",
}

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground">How we handle your data and protect your privacy</p>
          <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Data Collection & GDPR Compliance</CardTitle>
            <CardDescription>What information we collect and why</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Essential Cookies Only</h3>
              <p className="text-muted-foreground">
                We use essential cookies only to remember your theme preferences (light/dark mode) and cookie consent
                choices. These cookies are necessary for the basic functionality of the website and are GDPR compliant.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">No Tracking or Analytics</h3>
              <p className="text-muted-foreground">
                We do not use any analytics, tracking cookies, or third-party services that collect personal
                information. Your color contrast tests are processed entirely in your browser and are not stored or
                transmitted to our servers.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Cookie Consent</h3>
              <p className="text-muted-foreground">
                In compliance with GDPR, we ask for your consent before storing any cookies. You can withdraw your
                consent at any time by clearing your browser's local storage or contacting us.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data Storage & Security</CardTitle>
            <CardDescription>How your data is stored and protected</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Local Storage Only</h3>
              <p className="text-muted-foreground">
                All your preferences and settings are stored locally in your browser using localStorage. We do not have
                access to this information, and it never leaves your device.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">No Personal Information Collected</h3>
              <p className="text-muted-foreground">
                We do not collect, store, or process any personal information such as names, email addresses, IP
                addresses, or any other personally identifiable information.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Data Retention</h3>
              <p className="text-muted-foreground">
                Cookie consent choices are stored indefinitely in your browser's local storage until you clear them or
                withdraw consent.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Rights Under GDPR</CardTitle>
            <CardDescription>Your privacy rights and choices</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Right to Withdraw Consent</h3>
              <p className="text-muted-foreground">
                You can withdraw your cookie consent at any time by clearing your browser's local storage or by
                refreshing the page and declining cookies when prompted again.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Right to Data Deletion</h3>
              <p className="text-muted-foreground">
                Since all data is stored locally in your browser, you can delete all associated data by clearing your
                browser's local storage for this website.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Right to Information</h3>
              <p className="text-muted-foreground">
                You have the right to know what data we collect (none) and how we use it. This privacy policy provides
                complete transparency about our data practices.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>Questions about this privacy policy</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              If you have any questions about this privacy policy or our data practices, please contact Danish Khan:
            </p>
            <div className="space-y-2">
              <p>
                <strong>LinkedIn:</strong>{" "}
                <a
                  href="https://www.linkedin.com/in/danishmk1286/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://www.linkedin.com/in/danishmk1286/
                </a>
              </p>
              <p>
                <strong>GitHub:</strong>{" "}
                <a
                  href="https://github.com/Danishmk1286/WCAG-Color-Contrast-Checker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://github.com/Danishmk1286/WCAG-Color-Contrast-Checker
                </a>
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Changes to This Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We may update this privacy policy from time to time. Any changes will be posted on this page with an
              updated revision date. We encourage you to review this policy periodically.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
