import { Metadata } from "next"
import { ScrambleText } from "@/components/scramble-text"

export default function NowPage() {
  const deployDate = process.env.NEXT_PUBLIC_DEPLOY_DATE
    ? new Date(process.env.NEXT_PUBLIC_DEPLOY_DATE).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).toLowerCase()
    : new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).toLowerCase();

  return (
    <main className="animate-fade-in-up relative">
      <h1 className="text-4xl font-bold mb-4 text-white">
        <span className="text-accent mr-2">*</span>
        <ScrambleText text="now" />
      </h1>

      <p className="text-sm text-gray-400 mb-8">
        Updated {deployDate}, from my desk in India.
      </p>

      <section className="mb-12">
        <h2 className="text-white text-2xl font-semibold mb-4">working…</h2>

        <p className="text-gray-400 text-base leading-relaxed mb-4">
          My focus right now is deep. Less noise, more doing.
        </p>
        <p className="text-gray-400 text-base leading-relaxed mb-4">
          I’m exploring how to build simple but powerful tools for the web — clean interfaces, fast performance, and minimal fluff.
        </p>
        <p className="text-gray-400 text-base leading-relaxed mb-4">
          Learning every day, writing a lot of code, refining my thinking. Less content consumption, more creation.
        </p>
      </section>

      <section>
        <h2 className="text-white text-2xl font-semibold mb-4">today</h2>

        <p className="text-gray-400 text-base leading-relaxed mb-4">
          Today, I’m building out <a href="https://eightharsh.com" className="text-accent underline">eightharsh.com</a> — my digital home. It's where I’ll share my thoughts, projects, and experiments.
        </p>
        <p className="text-gray-400 text-base leading-relaxed mb-4">
          Also working on a general-purpose calculator site and learning Redis + MDX to handle dynamic content better.
        </p>
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
