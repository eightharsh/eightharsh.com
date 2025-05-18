import { ScrambleText } from "@/components/scramble-text"
import { getProgressReports } from "@/lib/blog"
import Link from "next/link"
import { Metadata } from "next"

const reports = getProgressReports().sort(
  (a, b) =>
    new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
)

export default function ProgressReportsPage() {
  return (
    <main className="animate-fade-in-up relative">
      <h1 className="text-4xl font-bold mb-8 text-white">
        <span className="text-accent mr-2">*</span>
        <ScrambleText text="progress reports" />
      </h1>

      <ul className="space-y-6">
        {reports.map(({ slug, metadata }) => (
          <li key={slug}>
            <Link
              href={`/progress-reports/${slug}`}
              className="group block"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-accent transition-colors">
                {metadata.title}
              </h2>
              <time className="text-sm text-gray-500">
                {metadata.date}
              </time>
              <p className="text-gray-300 mt-1">{metadata.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

export const metadata: Metadata = {
  title: "Progress Reports",
  description: "Updates and personal reports on projects and learning.",
  openGraph: {
    images: [
      {
        url: "https://www.eightharsh.com/og/home?title=progress reports",
      },
    ],
  },
}
