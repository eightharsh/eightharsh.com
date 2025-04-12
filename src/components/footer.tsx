import Link from "next/link"

const links = [
  { title: "email", href: "mailto:contact@eightharsh.com" },
  { title: "x.com", href: "https://x.com/eightharsh" },
  { title: "github", href: "https://github.com/eightharsh" },
  { title: "linkedin", href: "https://www.linkedin.com/in/eightharsh" },
]

export function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-800 pt-8 text-sm">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} eightharsh</p>
        <div className="flex gap-4 flex-wrap">
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hover:text-accent transition-colors duration-200"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
