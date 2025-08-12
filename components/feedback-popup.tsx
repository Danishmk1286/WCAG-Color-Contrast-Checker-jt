"use client"

import * as React from "react"
import { MessageCircle, X, Star, Github, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function FeedbackPopup() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [showInitial, setShowInitial] = React.useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowInitial(true)
    }, 10000)
    return () => clearTimeout(timer)
  }, [])

  const handleGitHubClick = () => {
    window.open("https://github.com/danishkhan", "_blank")
  }

  const handleStarClick = () => {
    window.open("https://github.com/danishkhan?tab=repositories", "_blank")
  }

  if (!showInitial && !isOpen) {
    return null
  }

  if (showInitial && !isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 animate-pulse"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">Open feedback</span>
        </Button>
      </div>
    )
  }

  if (!isOpen) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className="w-80 shadow-2xl border-2 bg-white dark:bg-gray-900">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-500" />
              <CardTitle className="text-lg dark:text-gray-100">Love this tool?</CardTitle>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="h-6 w-6 p-0">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <CardDescription className="dark:text-gray-300">
            Help improve this WCAG contrast checker and discover more accessibility tools!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button
            onClick={handleStarClick}
            className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white"
          >
            <Star className="mr-2 h-4 w-4" />
            Star My Repositories
          </Button>
          <Button onClick={handleGitHubClick} variant="outline" className="w-full bg-transparent dark:border-gray-600">
            <Github className="mr-2 h-4 w-4" />
            Visit GitHub Profile
          </Button>
          <div className="text-xs text-muted-foreground text-center pt-2 border-t dark:border-gray-700">
            <p className="mb-1">More accessibility tools coming soon!</p>
            <p>
              Created with ❤️ by <strong>Danish Khan</strong>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
