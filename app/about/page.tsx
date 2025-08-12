import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Linkedin, Mail, Heart, Accessibility, Zap, Eye, Palette } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About WCAG Color Contrast Checker</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive tool to ensure your designs meet accessibility standards and create inclusive digital
            experiences.
          </p>
        </div>

        {/* Owner Section */}
        <Card className="p-8 mb-8 shadow-lg border-0 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              DK
            </div>
            <div className="text-center md:text-left flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Danish Khan</h2>
              <p className="text-gray-600 mb-4">
                Web Developer & Accessibility Advocate passionate about creating inclusive digital experiences. Built
                this tool to help designers and developers ensure their color choices meet WCAG standards.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href="https://linkedin.com/in/danish-khan" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn Profile
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="mailto:danish@example.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Me
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Tool Documentation */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 shadow-lg border-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-100 p-2 rounded-lg">
                <Accessibility className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">WCAG Standards</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Our tool follows the Web Content Accessibility Guidelines (WCAG) 2.1 standards:
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <strong>AA Normal Text:</strong> 4.5:1 contrast ratio
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <strong>AA Large Text:</strong> 3:1 contrast ratio
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <strong>AAA Normal Text:</strong> 7:1 contrast ratio
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <strong>AAA Large Text:</strong> 4.5:1 contrast ratio
              </li>
            </ul>
          </Card>

          <Card className="p-6 shadow-lg border-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Key Features</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <Eye className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Real-time Preview:</strong> See how your colors look together instantly
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Palette className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Color Picker:</strong> Easy-to-use color selection with hex input
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Accessibility className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Compliance Check:</strong> Automatic WCAG AA/AAA validation
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Mobile Responsive:</strong> Works perfectly on all devices
                </span>
              </li>
            </ul>
          </Card>
        </div>

        {/* How to Use */}
        <Card className="p-8 mb-8 shadow-lg border-0">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">How to Use This Tool</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Select Colors</h4>
              <p className="text-sm text-gray-600">
                Choose your text and background colors using the color pickers or enter hex values directly.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Check Compliance</h4>
              <p className="text-sm text-gray-600">
                View the contrast ratio and see which WCAG standards your color combination meets.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-pink-500 to-orange-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Preview & Adjust</h4>
              <p className="text-sm text-gray-600">
                See how your text looks in the live preview and adjust colors until you achieve compliance.
              </p>
            </div>
          </div>
        </Card>

        {/* Mission Statement */}
        <Card className="p-8 shadow-lg border-0 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 p-3 rounded-full">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Making the web accessible to everyone. This tool helps designers and developers create inclusive digital
              experiences by ensuring proper color contrast ratios that meet international accessibility standards.
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
