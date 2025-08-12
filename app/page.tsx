import ContrastChecker from "@/components/contrast-checker"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">WCAG Color Contrast Checker</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ensure your color combinations meet WCAG accessibility standards for inclusive design
          </p>
        </div>
        <ContrastChecker />
      </div>
    </main>
  )
}
