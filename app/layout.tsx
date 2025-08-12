import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import { FeedbackPopup } from "@/components/feedback-popup"
import { CookieNotice } from "@/components/cookie-notice"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "WCAG Color Contrast Checker - Accessibility Tool by Danish Khan",
  description:
    "Free online WCAG color contrast checker tool. Test your color combinations for AA and AAA compliance. Ensure your designs meet accessibility standards.",
  keywords:
    "WCAG, color contrast, accessibility, AA, AAA, contrast ratio, web accessibility, color checker, Danish Khan",
  authors: [{ name: "Danish Khan" }],
  creator: "Danish Khan",
  publisher: "Danish Khan",
  openGraph: {
    title: "WCAG Color Contrast Checker - Free Accessibility Tool",
    description:
      "Professional color contrast checker for WCAG AA/AAA compliance. Test accessibility standards instantly.",
    type: "website",
    locale: "en_US",
    siteName: "WCAG Contrast Checker",
  },
  twitter: {
    card: "summary_large_image",
    title: "WCAG Color Contrast Checker",
    description: "Free tool to check color contrast ratios for web accessibility compliance",
    creator: "@danishkhan",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://wcag-contrast-checker.vercel.app",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "WCAG Color Contrast Checker",
              description: "Free online tool to check color contrast ratios for WCAG compliance",
              url: "https://wcag-contrast-checker.vercel.app",
              author: {
                "@type": "Person",
                name: "Danish Khan",
                url: "https://linkedin.com/in/danishkhan",
              },
              applicationCategory: "DesignApplication",
              operatingSystem: "Web Browser",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange={false}>
          <div className="min-h-screen bg-background text-foreground">
            <Navigation />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <FeedbackPopup />
            <CookieNotice />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
