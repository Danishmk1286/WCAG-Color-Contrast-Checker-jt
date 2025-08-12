"use client"

import { Github, Star, Heart, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const handleGitHubClick = () => {
    window.open("https://github.com/Danishmk1286", "_blank")
  }

  const handleRepoClick = () => {
    window.open("https://github.com/Danishmk1286/WCAG-Color-Contrast-Checker", "_blank")
  }

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/danishmk1286/", "_blank")
  }

  return (
    <footer className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* About Section */}
          <div>
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">WCAG Contrast Checker</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              A professional tool for checking color contrast compliance with WCAG accessibility standards.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Created with <Heart className="inline w-3 h-3 text-red-500" /> by{" "}
              <a
                href="https://www.linkedin.com/in/danishmk1286/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Danish Khan
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a
                href="/about"
                className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                About
              </a>
              <a
                href="/blog"
                className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Blog
              </a>
              <a
                href="/privacy"
                className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Support & Social Links */}
          <div>
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Connect & Support</h4>
            <div className="space-y-3">
              <Button
                onClick={handleRepoClick}
                variant="outline"
                size="sm"
                className="w-full justify-start bg-transparent dark:border-gray-600"
              >
                <Star className="mr-2 h-4 w-4" />
                Star this Project
              </Button>
              <Button
                onClick={handleGitHubClick}
                variant="outline"
                size="sm"
                className="w-full justify-start bg-transparent dark:border-gray-600"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub Profile
              </Button>
              <Button
                onClick={handleLinkedInClick}
                variant="outline"
                size="sm"
                className="w-full justify-start bg-transparent dark:border-gray-600"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn Profile
              </Button>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">More accessibility tools coming soon!</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2024 Danish Khan. Built for better web accessibility.
          </p>
        </div>
      </div>
    </footer>
  )
}
