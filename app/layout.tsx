import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Martin Schroeder | Production & Game Design",
  description: "Game Designer & Production specialist portfolio showcasing personal and professional projects",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icons/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icons/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icons/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/icons/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased dark`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

