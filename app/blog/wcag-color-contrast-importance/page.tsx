import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WCAGContrastBlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/blog" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </Button>

        {/* Article Header */}
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          <div className="p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                January 15, 2024
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />5 min read
              </div>
              <div className="text-blue-600 font-medium">by Danish Khan</div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Why WCAG Color Contrast Matters: Building Accessible Web Experiences
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Understanding the critical importance of color contrast in web accessibility and how it impacts millions
              of users worldwide.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["WCAG", "Accessibility", "Web Design", "UX"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What is Color Contrast?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Color contrast refers to the difference in luminance between foreground and background colors. In web
                design, this typically means the contrast between text and its background. The Web Content Accessibility
                Guidelines (WCAG) provide specific standards to ensure content is readable for users with various visual
                abilities.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Does It Matter?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Proper color contrast is crucial for several reasons:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>
                  <strong>Visual Impairments:</strong> Users with low vision, color blindness, or other visual
                  impairments rely on sufficient contrast to read content.
                </li>
                <li>
                  <strong>Environmental Factors:</strong> Bright sunlight, dim lighting, or screen glare can make
                  low-contrast text nearly impossible to read.
                </li>
                <li>
                  <strong>Aging Population:</strong> As people age, their ability to distinguish between similar colors
                  decreases.
                </li>
                <li>
                  <strong>Legal Compliance:</strong> Many countries require websites to meet accessibility standards,
                  including contrast requirements.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">WCAG Standards Explained</h2>
              <p className="text-gray-700 leading-relaxed mb-4">WCAG defines three levels of conformance:</p>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Contrast Ratio Requirements:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>AA Level (Minimum):</strong> 4.5:1 for normal text, 3:1 for large text
                  </li>
                  <li>
                    <strong>AAA Level (Enhanced):</strong> 7:1 for normal text, 4.5:1 for large text
                  </li>
                  <li>
                    <strong>Large Text:</strong> Defined as 18pt+ or 14pt+ bold
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Real-World Impact</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Consider this: over 285 million people worldwide have visual impairments. Additionally, temporary
                conditions like eye fatigue, bright environments, or aging can affect anyone's ability to read
                low-contrast text. By ensuring proper contrast, you're not just following guidelines—you're creating
                inclusive experiences for everyone.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Best Practices</h2>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Test your color combinations early in the design process</li>
                <li>Don't rely solely on color to convey information</li>
                <li>Consider how your design looks in different lighting conditions</li>
                <li>Use tools like contrast checkers to verify compliance</li>
                <li>Test with real users, including those with visual impairments</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Getting Started</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The good news is that checking color contrast is straightforward with the right tools. Our WCAG Contrast
                Checker makes it easy to test your color combinations and ensure they meet accessibility standards.
                Simply input your colors and get instant feedback on compliance levels.
              </p>
            </div>

            {/* Call to Action */}
            <div className="mt-12 p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white">
              <h3 className="text-xl font-bold mb-3">Ready to test your colors?</h3>
              <p className="text-blue-100 mb-4">
                Use our free WCAG contrast checker to ensure your designs are accessible to everyone.
              </p>
              <Button asChild variant="secondary">
                <Link href="/" className="flex items-center gap-2">
                  Try the Contrast Checker
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Share Section */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <p className="text-gray-600">Found this helpful? Share it with others!</p>
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </article>

        {/* Author Bio */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              DK
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Danish Khan</h3>
              <p className="text-gray-600 mb-4">
                Web developer and accessibility advocate passionate about creating inclusive digital experiences.
                Creator of the WCAG Contrast Checker tool.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="https://linkedin.com/in/danishkhan" target="_blank" rel="noopener noreferrer">
                  Connect on LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
