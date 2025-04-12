import { Metadata } from "next"
import { ScrambleText } from "@/components/scramble-text"

export default function NowPage() {
  // Get the deployment date from environment variable and format it to "month day, year" with lowercase month
  const deployDate = process.env.NEXT_PUBLIC_DEPLOY_DATE
    ? new Date(process.env.NEXT_PUBLIC_DEPLOY_DATE).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).toLowerCase()
    : new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).toLowerCase();

  return (
    <main className="animate-fade-in-up relative">
      <h1 className="text-4xl font-bold mb-4 text-white">
        <span className="text-accent mr-2">*</span>
        <ScrambleText text="now" />
      </h1>

      <p className="text-sm text-gray-400 mb-8">last updated: {deployDate}</p>

      <section>
        <ul className="list-disc list-inside space-y-1">
          <li>building mini tools with Next.js + serverless</li>
        </ul>
      </section>
    </main>
  )
}

export const metadata: Metadata = {
  title: "Now",
  description: "A snapshot of what Harsh is currently working on.",
  openGraph: {
    images: [
      {
        url: "https://www.eightharsh.com/og/home?title=now",
      },
    ],
  },
}
