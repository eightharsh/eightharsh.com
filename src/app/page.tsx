import { Header } from "@/components/header"
import { Item, SectionList } from "@/components/section-list"
import { BlogSection } from "@/components/blog-section"
//import { LinksSection } from "@/components/links-section"



const projectItems = [
  {
    title: "nothing",
    role: "nothing",
    description:
      "nothing",
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
      {/* <LinksSection /> */}
    </>
  )
}
