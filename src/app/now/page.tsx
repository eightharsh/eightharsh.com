import { Metadata } from "next"
import { ScrambleText } from "@/components/scramble-text"

export default function NowPage() {
  const deployDate = process.env.NEXT_PUBLIC_DEPLOY_DATE
    ? new Date(process.env.NEXT_PUBLIC_DEPLOY_DATE).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).toLowerCase()
    : new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).toLowerCase()

  return (
    <main className="animate-fade-in-up relative">
      <h1 className="text-4xl font-bold mb-4 text-white">
        <span className="text-accent mr-2">*</span>
        <ScrambleText text="now" />
      </h1>

      <p className="text-sm text-gray-400 mb-8">
        Last updated on {deployDate}, from my desk here in India.
      </p>

      <section className="mb-12">
        <h2 className="text-white text-2xl font-semibold mb-4">what i’m up to</h2>

        <p className="text-gray-400 text-base leading-relaxed mb-4">
          Lately, I’ve been keeping things simple. Less scrolling, more building. Less noise, more clarity.
        </p>
        <p className="text-gray-400 text-base leading-relaxed mb-4">
          I’m diving deep into the craft of making useful, elegant tools for the web—fast, clean, and thoughtful. I want the things I make to feel intuitive, with zero fluff.
        </p>
        <p className="text-gray-400 text-base leading-relaxed mb-4">
          Most days are spent learning, writing code, and figuring out how to express ideas better—through design, words, or software.
        </p>
      </section>

      <section>
        <h2 className="text-white text-2xl font-semibold mb-4">right now</h2>

        <p className="text-gray-400 text-base leading-relaxed mb-4">
          I’m currently building <a href="https://eightharsh.com" className="text-accent underline">eightharsh.com</a> — my little corner of the internet. It’s a space to think out loud, share projects, and document the journey.
        </p>
        <p className="text-gray-400 text-base leading-relaxed mb-4">
          On the side, I'm experimenting with a general-purpose calculator app, and learning how to better use tools like Redis and MDX for more dynamic, flexible content.
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
