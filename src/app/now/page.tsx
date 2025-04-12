import { Metadata } from "next"
import { ScrambleText } from "@/components/scramble-text"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function NowPage() {
  return (
    <>
      <Header />

      <main className="animate-fade-in-up bg-background text-foreground">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8 text-white">
            <span className="text-accent mr-2">*</span>
            <ScrambleText text="now" />
          </h1>

          <div className="space-y-8 leading-relaxed">
            <section>
              <p className="text-xl mb-4">
                🚀 <strong>Currently diving into:</strong>
                <span className="text-white">
                  Next.js, TypeScript, and serverless architecture. I'm building something to automate my daily workflows and get more time back for deep work.
                </span>
              </p>
              <p className="text-lg">
                📚 <strong>What I’m learning:</strong>
                <span className="text-white">
                  Exploring machine learning, particularly around NLP (Natural Language Processing). Trying out tools like TensorFlow, Hugging Face, and OpenAI APIs. Also diving into creating smarter applications using AI models.
                </span>
              </p>
            </section>

            <section>
              <p className="text-xl mb-4">
                🎯 <strong>Goals for this week:</strong>
                <span className="text-white">
                  Ship my next mini-project, a side app that helps manage productivity more effectively. I also want to explore deeper ways to optimize my React apps and improve my UI/UX skills.
                </span>
              </p>
              <p className="text-lg">
                🌍 <strong>Living in:</strong>
                <span className="text-white">
                  India, but constantly thinking globally. Currently exploring remote work possibilities with a few people from across the world.
                </span>
              </p>
            </section>

            <section>
              <p className="text-xl mb-4">
                ✨ <strong>What excites me right now:</strong>
                <span className="text-white">
                  How close we are to an era of full-blown AI integration in software development. Every day, there's a new breakthrough. I'm watching all the big AI events closely and figuring out where I can fit in.
                </span>
              </p>
              <p className="text-lg">
                💭 <strong>Mental state:</strong>
                <span className="text-white">
                  Constantly shifting between building, breaking, and iterating on ideas. Excited, a little overwhelmed, but mostly optimistic about the potential of my current work.
                </span>
              </p>
            </section>

            <section>
              <p className="text-sm italic text-gray-500">
                <span className="text-white">Last updated: April 2025</span>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
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
