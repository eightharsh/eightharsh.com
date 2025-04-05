import { ScrambleText } from "@/components/scramble-text"
import { ProjectCard } from "@/components/project-card"
import { Metadata } from "next"

const projects = [
  {
    title: "Nothing",
    description:
      "tesing",
    role: "testing",
    period: "0-0-0",
    achievements: [
      "still doing",
    ],
    technologies: [
      "typescript",
      "next.js",
      "trpc",
      "prisma",
      "tailwind css",
      "auth.js",
    ],
    href: "https://github.com/eightharsh",
  },
]

export default function ProjectsPage() {
  return (
    <main className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-8 text-white">
        <span className="text-accent mr-2">*</span>
        <ScrambleText text="projects" />
      </h1>

      <p className="text-gray-400 mb-12 leading-relaxed">
      these are a few projects i&apos;ve built out of curiosity and the urge to make things that feel useful. 
      each one taught me something — about code, design, or just how to think better.
      </p>

      <div className="space-y-12">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  )
}

export const metadata: Metadata = {
  title: "Projects",
  description: "Some of the projects I've worked on.",
  openGraph: {
    images: [
      {
        url: "https://www.eightharsh.com/og/home?title=projects",
      },
    ],
  },
}
