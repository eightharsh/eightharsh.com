import { Metadata } from "next"
import { ScrambleText } from "@/components/scramble-text"

export default function NowPage() {
  return (
    <main className="animate-fade-in-up relative">
      <h1 className="text-4xl font-bold mb-4 text-white">
        <span className="text-accent mr-2">*</span>
        <ScrambleText text="now" />
      </h1>

      <p className="text-sm text-gray-400 mb-8">last updated: April 2025</p>

      <div className="space-y-8 text-gray-400 leading-relaxed text-base">
        <section>
          <h2 className="text-white text-lg font-semibold mb-2">🎯 focus</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>building mini tools with Next.js + serverless</li>
            <li>experimenting with automation workflows</li>
          </ul>
        </section>

        <section>
          <h2 className="text-white text-lg font-semibold mb-2">📚 learning</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>natural language processing & prompt engineering</li>
            <li>design systems + animation principles</li>
          </ul>
        </section>

        <section>
          <h2 className="text-white text-lg font-semibold mb-2">🛠 side projects</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>productivity tracker with AI suggestions</li>
            <li>blog redesign with MDX + Redis full-text search</li>
          </ul>
        </section>

        <section>
          <h2 className="text-white text-lg font-semibold mb-2">🌱 life</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>living in India, working async with a global crew</li>
            <li>daily deep work + walks to stay sane</li>
          </ul>
        </section>

        <section>
          <h2 className="text-white text-lg font-semibold mb-2">🤯 inspired by</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>new GPT-5 demos</li>
            <li>indie hackers shipping real things</li>
          </ul>
        </section>

        <section>
          <h2 className="text-white text-lg font-semibold mb-2">💭 mental state</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>calm, curious, caffeinated</li>
            <li>shifting between building, breaking, and refining</li>
          </ul>
        </section>
      </div>
    </main>
  )
}

export const metadata: Metadata = {
  title: "Now",
  description: "A snapshot of what Harsh is currently working on, learning, and thinking.",
  openGraph: {
    images: [
      {
        url: "https://www.eightharsh.com/og/home?title=now",
      },
    ],
  },
}
