"use client"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowUpDown, Check, X, Share2 } from "lucide-react"

interface ContrastResult {
  ratio: number
  aaSmallText: boolean
  aaLargeText: boolean
  aaaSmallText: boolean
  aaaLargeText: boolean
}

export default function ContrastChecker() {
  const [textColor, setTextColor] = useState("#ededed")
  const [backgroundColor, setBackgroundColor] = useState("#4a4a4a")
  const [contrastResult, setContrastResult] = useState<ContrastResult>({
    ratio: 0,
    aaSmallText: false,
    aaLargeText: false,
    aaaSmallText: false,
    aaaLargeText: false,
  })

  const textColorRef = useRef<HTMLInputElement>(null)
  const bgColorRef = useRef<HTMLInputElement>(null)

  // Calculate relative luminance
  const getLuminance = (hex: string): number => {
    const rgb = hexToRgb(hex)
    if (!rgb) return 0

    const [r, g, b] = [rgb.r, rgb.g, rgb.b].map((c) => {
      c = c / 255
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
    })

    return 0.2126 * r + 0.7152 * g + 0.0722 * b
  }

  // Convert hex to RGB
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
      ? {
          r: Number.parseInt(result[1], 16),
          g: Number.parseInt(result[2], 16),
          b: Number.parseInt(result[3], 16),
        }
      : null
  }

  // Calculate contrast ratio
  const calculateContrast = (color1: string, color2: string): number => {
    const lum1 = getLuminance(color1)
    const lum2 = getLuminance(color2)
    const brightest = Math.max(lum1, lum2)
    const darkest = Math.min(lum1, lum2)
    return (brightest + 0.05) / (darkest + 0.05)
  }

  // Update contrast calculations
  useEffect(() => {
    const ratio = calculateContrast(textColor, backgroundColor)
    setContrastResult({
      ratio,
      aaSmallText: ratio >= 4.5,
      aaLargeText: ratio >= 3,
      aaaSmallText: ratio >= 7,
      aaaLargeText: ratio >= 4.5,
    })
  }, [textColor, backgroundColor])

  // Swap colors
  const swapColors = () => {
    const temp = textColor
    setTextColor(backgroundColor)
    setBackgroundColor(temp)
  }

  const shareResults = async () => {
    const shareData = {
      title: "WCAG Color Contrast Results",
      text: `Contrast ratio: ${contrastResult.ratio.toFixed(2)} | Text: ${textColor} | Background: ${backgroundColor}`,
      url: window.location.href,
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch (err) {
        // Fallback to clipboard
        await navigator.clipboard.writeText(`${shareData.text} - ${shareData.url}`)
        alert("Results copied to clipboard!")
      }
    } else {
      // Fallback to clipboard
      await navigator.clipboard.writeText(`${shareData.text} - ${shareData.url}`)
      alert("Results copied to clipboard!")
    }
  }

  const ComplianceRow = ({
    level,
    textSize,
    isCompliant,
  }: {
    level: string
    textSize: string
    isCompliant: boolean
  }) => (
    <div className="flex items-center justify-between py-3 px-4 rounded-lg border border-border bg-card hover:bg-accent/50 transition-colors">
      <div className="flex items-center gap-3">
        <div
          className={`px-3 py-1 rounded-md text-sm font-medium border ${
            level === "AA"
              ? "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800"
              : "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800"
          }`}
        >
          {level}
        </div>
        <span className="text-foreground font-medium">{textSize}</span>
      </div>
      <div className="flex items-center gap-2">
        {isCompliant ? (
          <>
            <div className="bg-green-100 dark:bg-green-900 p-1 rounded-full">
              <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
            </div>
            <span className="text-green-600 dark:text-green-400 font-medium">Pass</span>
          </>
        ) : (
          <>
            <div className="bg-red-100 dark:bg-red-900 p-1 rounded-full">
              <X className="w-4 h-4 text-red-600 dark:text-red-400" />
            </div>
            <span className="text-red-600 dark:text-red-400 font-medium">Fail</span>
          </>
        )}
      </div>
    </div>
  )

  return (
    <div className="space-y-8">
      {/* Main Grid - Mobile First */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Left Panel - Contrast Results */}
        <Card className="p-6 border border-border bg-card">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-foreground mb-4">Contrast</h2>
            <div className="bg-muted p-6 rounded-lg border border-border">
              <div className="text-4xl font-bold text-foreground mb-2">{contrastResult.ratio.toFixed(2)}</div>
              <div className="flex gap-2">
                <Button onClick={shareResults} variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <ComplianceRow level="AA" textSize="Small Text" isCompliant={contrastResult.aaSmallText} />
            <ComplianceRow level="AA" textSize="Large Text" isCompliant={contrastResult.aaLargeText} />
            <ComplianceRow level="AAA" textSize="Small Text" isCompliant={contrastResult.aaaSmallText} />
            <ComplianceRow level="AAA" textSize="Large Text" isCompliant={contrastResult.aaaLargeText} />
          </div>
        </Card>

        {/* Right Panel - Preview */}
        <Card
          className="p-6 border border-border transition-all duration-300"
          style={{ backgroundColor: backgroundColor }}
        >
          <h2 className="text-xl font-bold mb-6" style={{ color: textColor }}>
            Preview
          </h2>

          <div className="space-y-6">
            <div>
              <p className="text-sm mb-2 opacity-75" style={{ color: textColor }}>
                This is level AA small text.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: textColor }}>
                This is how normal text appears with your selected colors.
              </p>
            </div>

            <div>
              <p className="text-sm mb-2 opacity-75" style={{ color: textColor }}>
                This is level AA large text.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: textColor }}>
                This is how large text appears with your colors.
              </p>
            </div>

            <div>
              <p className="text-sm mb-2 opacity-75" style={{ color: textColor }}>
                This is level AAA small text.
              </p>
              <p className="text-base font-medium leading-relaxed" style={{ color: textColor }}>
                This is level AAA large text.
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Color Selection - Moved to bottom */}
      <Card className="p-6 border border-border bg-card">
        <h3 className="text-lg font-bold text-foreground mb-6">Color Selection</h3>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Text Color */}
          <div className="space-y-3">
            <Label htmlFor="text-color" className="text-sm font-medium text-foreground">
              Text Color
            </Label>
            <div className="flex items-center gap-3">
              <div className="relative">
                <div
                  className="w-12 h-12 rounded-lg border-2 border-border cursor-pointer hover:scale-105 transition-transform"
                  style={{ backgroundColor: textColor }}
                  onClick={() => textColorRef.current?.click()}
                />
                <input
                  ref={textColorRef}
                  type="color"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  style={{ transform: "translateY(100%)" }}
                />
              </div>
              <Input
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="flex-1 font-mono text-sm"
                placeholder="#000000"
              />
            </div>
          </div>

          {/* Background Color */}
          <div className="space-y-3">
            <Label htmlFor="bg-color" className="text-sm font-medium text-foreground">
              Background Color
            </Label>
            <div className="flex items-center gap-3">
              <div className="relative">
                <div
                  className="w-12 h-12 rounded-lg border-2 border-border cursor-pointer hover:scale-105 transition-transform"
                  style={{ backgroundColor: backgroundColor }}
                  onClick={() => bgColorRef.current?.click()}
                />
                <input
                  ref={bgColorRef}
                  type="color"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  style={{ transform: "translateY(100%)" }}
                />
              </div>
              <Input
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
                className="flex-1 font-mono text-sm"
                placeholder="#ffffff"
              />
            </div>
          </div>

          {/* Action Button - Removed Random, kept only Swap */}
          <div className="space-y-3 sm:col-span-2 lg:col-span-1">
            <Label className="text-sm font-medium text-foreground">Actions</Label>
            <Button onClick={swapColors} className="w-full bg-transparent" variant="outline">
              <ArrowUpDown className="w-4 h-4 mr-2" />
              Swap
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
