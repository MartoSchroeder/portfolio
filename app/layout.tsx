// ============================================================================
// ROOT LAYOUT COMPONENT
// ============================================================================
// This is the root layout that wraps all pages in your Next.js app.
// It sets up:
// - Page metadata (title, description, icons)
// - Fonts (Geist and Geist Mono)
// - Analytics tracking
// - HTML structure and theme
//
// TO MODIFY PAGE METADATA:
// - Edit the "metadata" object below
// - Change title, description, and icon paths
// - This affects what shows up in browser tabs and search results
//
// TO CHANGE THEME:
// - The "dark" class on the <html> tag sets dark mode
// - Change "dark" to "light" or remove it for light mode
// ============================================================================

import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// FONT SETUP: These load the Geist fonts from Google Fonts
// You don't need to modify these unless you want different fonts
const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// ============================================================================
// PAGE METADATA
// ============================================================================
// This information appears in:
// - Browser tab title
// - Search engine results
// - Social media shares
// - Browser bookmarks
//
// TO EDIT: Change the title, description, and icon paths below
// ============================================================================
export const metadata: Metadata = {
  // PAGE TITLE - Shows in browser tab
  title: "Martin Schroeder | Production & Game Design",
  
  // PAGE DESCRIPTION - Shows in search results and social shares
  description: "Game Designer & Production specialist portfolio showcasing personal and professional projects",
  
  // GENERATOR - Usually left as is
  generator: "v0.app",
  
  // FAVICONS - Icons that show in browser tabs
  // Make sure these image files exist in /public/icons/ folder
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

// ============================================================================
// ROOT LAYOUT FUNCTION
// ============================================================================
// This wraps all pages in your app.
// The "children" prop is where your page content gets inserted.
// ============================================================================
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // HTML ROOT ELEMENT - lang="en" sets the language to English. className="dark" sets dark mode theme - change to "light" or remove for light mode
    <html lang="en" className="dark" suppressHydrationWarning>
      {/* BODY ELEMENT - Contains all page content */}
      <body className="font-sans antialiased" suppressHydrationWarning>
        {/* PAGE CONTENT - This is where your page components get rendered */}
        {children}
        
        {/* ANALYTICS - Tracks page views (Vercel Analytics). You can remove this if you don't want analytics */}
        <Analytics />
      </body>
    </html>
  )
}

