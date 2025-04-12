import { Metadata } from "next"
import { ScrambleText } from "@/components/scramble-text"

export default function NowPage() {
  return (
    <main className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-8 text-white">
        <span className="text-accent mr-2">*</span>
        <ScrambleText text="now" />
      </h1>

      <div className="space-y-12">
        {/* Currently Diving Into Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-400 p-6 rounded-xl shadow-lg">
          <p className="text-xl mb-4 text-white">
            🚀 <strong>Currently diving into:</strong>
            <span className="text-gray-200"> Next.js, TypeScript, and serverless architecture. I'm building something to automate my daily workflows and get more time back for deep work.</span>
          </p>
          <p className="text-lg text-gray-100">
            📚 <strong>What I’m learning:</strong> 
            <span className="text-gray-200"> Exploring machine learning, particularly around NLP (Natural Language Processing). Trying out tools like TensorFlow, Hugging Face, and OpenAI APIs. Also diving into creating smarter applications using AI models.</span>
          </p>
        </section>

        {/* Goals Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-400 p-6 rounded-xl shadow-lg">
          <p className="text-xl mb-4 text-white">
            🎯 <strong>Goals for this week:</strong> 
            <span className="text-gray-200"> Ship my next mini-project, a side app that helps manage productivity more effectively. I also want to explore deeper ways to optimize my React apps and improve my UI/UX skills. </span>
          </p>
          <p className="text-lg text-gray-100">
            🌍 <strong>Living in:</strong> 
            <span className="text-gray-200"> India, but constantly thinking globally. Currently exploring remote work possibilities with a few people from across the world.</span>
          </p>

          {/* Goal Progress Bar */}
          <div className="mt-6">
            <p className="text-gray-200">Progress:</p>
            <div className="w-full bg-gray-800 h-2 rounded-full mt-2">
              <div className="bg-green-500 h-2 rounded-full w-60%"></div> {/* Adjust width dynamically as progress */}
            </div>
          </div>
        </section>

        {/* Excitement Section */}
        <section className="bg-gradient-to-r from-pink-600 to-pink-400 p-6 rounded-xl shadow-lg">
          <p className="text-xl mb-4 text-white">
            ✨ <strong>What excites me right now:</strong>
            <span className="text-gray-200"> How close we are to an era of full-blown AI integration in software development. Every day, there's a new breakthrough. I'm watching all the big AI events closely and figuring out where I can fit in.</span>
          </p>
          <p className="text-lg text-gray-100">
            💭 <strong>Mental state:</strong> 
            <span className="text-gray-200"> Constantly shifting between building, breaking, and iterating on ideas. Excited, a little overwhelmed, but mostly optimistic about the potential of my current work.</span>
          </p>
        </section>

        {/* Update Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-indigo-400 p-6 rounded-xl shadow-lg">
          <p className="text-sm italic text-gray-400">
            <span className="text-white">Last updated: April 2025</span>
          </p>
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
