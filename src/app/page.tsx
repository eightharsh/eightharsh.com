import { Header } from "@/components/header"
import { Item, SectionList } from "@/components/section-list"
import { BlogSection } from "@/components/blog-section"
import { LinksSection } from "@/components/links-section"

const projectItems = [
  {
    title: "nothing",
    role: "nothing",
    description: "nothing",
    href: "https://github.com/eightharsh",
  },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <SectionList
        title="projects"
        items={projectItems}
        viewAllHref="/projects"
        viewAllText="all projects"
      />
      <BlogSection />
      <LinksSection />
      <footer className="text-sm text-gray-500 py-6 flex flex-col sm:flex-row sm:justify-between items-center mt-12">
        <p className="text-center sm:text-left">
          © 2025 eightharsh · <span className="text-gray-500">Chase the Unthinkable</span>
        </p>
      </footer>
    </>
  )
}
