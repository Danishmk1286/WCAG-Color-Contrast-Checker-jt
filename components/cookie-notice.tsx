"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Cookie, X } from "lucide-react"

export function CookieNotice() {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("cookies-accepted")
    if (!hasAcceptedCookies) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookies-accepted", "true")
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookies-accepted", "false")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-white dark:bg-gray-900 border-t-2 border-gray-200 dark:border-gray-700 shadow-2xl">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Cookie Notice</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                We use essential cookies to remember your preferences and improve your experience. No tracking or
                analytics cookies are used.
                <a href="/privacy" className="ml-1 underline hover:no-underline text-blue-600 dark:text-blue-400">
                  Learn more
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Button onClick={acceptCookies} className="bg-green-600 hover:bg-green-700 text-white">
              Accept
            </Button>
            <Button onClick={declineCookies} variant="outline" className="bg-transparent dark:border-gray-600">
              Decline
            </Button>
            <Button variant="ghost" size="sm" onClick={declineCookies} className="h-8 w-8 p-0">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
