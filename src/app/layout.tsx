import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from "../components/navbar"
import { Analytics } from "@vercel/analytics/react"

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.eightharsh.com"),
  title: {
    default: "Harsh",
    template: "%s | Harsh",
  },
  description: "Developer, student and maker of things.",
  openGraph: {
    title: "Harsh",
    description: "Developer, student and maker of things.",
    url: "https://www.eightharsh.com",
    siteName: "eightharsh",
    locale: "en_US",
    type: "website",
    images: ["https://www.eightharsh.com/og/home"],
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  twitter: {
    title: "Harsh",
    card: "summary_large_image",
    creator: "@eightharsh",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} antialiased min-h-screen font-mono`}
      >
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Navbar />
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
