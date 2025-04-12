import { Metadata } from "next"
import { ScrambleText } from "@/components/scramble-text"

export default function NowPage() {
  return (
    <main className="animate-fade-in-up bg-background text-foreground min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-white">
          <span className="text-accent mr-2">*</span>
          <ScrambleText text="now" />
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="bg-[#1a1a1a] border border-neutral-800 p-6 rounded-2xl shadow">
            <p className="text-xl mb-4 text-gray-300">
              🚀 <strong className="text-white">Currently diving into:</strong><br />
              Next.js, TypeScript, and serverless architecture. I'm building something to automate my daily workflows and get more time back for deep work.
            </p>
            <p className="text-lg text-gray-400">
              📚 <strong className="text-white">What I’m learning:</strong><br />
              Exploring machine learning, particularly NLP. Playing with TensorFlow, Hugging Face, and OpenAI APIs to build smarter tools.
            </p>
          </section>

          <section className="bg-[#1a1a1a] border border-neutral-800 p-6 rounded-2xl shadow">
            <p className="text-xl mb-4 text-gray-300">
              🎯 <strong className="text-white">Goals for this week:</strong><br />
              Ship my next mini-project — a side app to boost productivity. Also polishing React optimization and UI/UX techniques.
            </p>
            <p className="text-lg text-gray-400">
              🌍 <strong className="text-white">Living in:</strong><br />
              India — but collaborating globally. Exploring remote roles and international teamwork.
            </p>
          </section>

          <section className="bg-[#1a1a1a] border border-neutral-800 p-6 rounded-2xl shadow">
            <p className="text-xl mb-4 text-gray-300">
              ✨ <strong className="text-white">What excites me right now:</strong><br />
              The pace of AI in software dev is mind-blowing. I'm keeping up with breakthroughs and carving out my space in it.
            </p>
            <p className="text-lg text-gray-400">
              💭 <strong className="text-white">Mental state:</strong><br />
              Constant loop of building, breaking, refining. Energized and overwhelmed — but focused and hopeful.
            </p>
          </section>

          <section className="bg-[#1a1a1a] border border-neutral-800 p-6 rounded-2xl shadow">
            <p className="text-sm italic text-gray-500">
              Last updated: <span className="text-white">April 2025</span>
            </p>
          </section>
        </div>
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
