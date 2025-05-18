import { notFound } from "next/navigation"
import { getProgressReportBySlug } from "@/lib/blog"
import { MDXRemote } from "next-mdx-remote/rsc"

type Props = {
  params: {
    slug: string
  }
}

export default function ProgressReport({ params }: Props) {
  const report = getProgressReportBySlug(params.slug)

  if (!report) return notFound()

  return (
    <main className="animate-fade-in-up relative">
      <h1 className="text-4xl font-bold mb-8 text-white">
        <span className="text-accent mr-2">*</span>
        {report.metadata.title}
      </h1>

      <p className="text-gray-400 mb-12 leading-relaxed">
        {report.metadata.date}
      </p>

      <article className="prose prose-invert max-w-3xl">
        <MDXRemote source={report.content} />
      </article>
    </main>
  )
}