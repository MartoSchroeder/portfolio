"use client"

// ============================================================================
// PERSONAL PROJECTS LOGOS BANNER COMPONENT
// ============================================================================
// This component displays a scrolling banner of logos for personal projects.
// The logos scroll continuously from right to left in an infinite loop.
//
// TO MODIFY PERSONAL PROJECT LOGOS:
// - Edit the "logos" array below
// - Each logo needs: name (for alt text) and logo (path to image file)
// - Make sure logo images exist in the /public/logos/ folder
// - To add a logo: Add a new object to the array
// - To remove a logo: Delete its object from the array
// ============================================================================

export function PersonalLogosBanner() {
  // ============================================================================
  // LOGO DATA ARRAY
  // ============================================================================
  // This array contains all the logos you want to display.
  // Each logo object has:
  // - name: Logo name (used for accessibility/alt text)
  // - logo: Path to the logo image file (should be in /public/logos/ folder)
  // ============================================================================
  const logos = [
    { name: "Godot Logo", logo: "/logos/godot-logo.png" },
    { name: "Unreal Logo", logo: "/logos/unreal-logo.png" },
    { name: "Unity Logo", logo: "/logos/unity-logo.png" },
    { name: "Cursor Logo", logo: "/logos/cursor-logo.png" },
  ]

  // DUPLICATE LOGOS: Creates 3 copies of the array for seamless infinite scroll
  // The logos are duplicated so when one set scrolls off screen, another appears
  const duplicatedLogos = [...logos, ...logos, ...logos]

  // ============================================================================
  // RENDER SECTION
  // ============================================================================
  return (
    // BANNER CONTAINER - Dark background with border for the scrolling logo banner
    <div className="mb-16 overflow-hidden bg-black/80 py-8 backdrop-blur-sm border-y border-primary/20">
      <div className="relative flex items-center">
        {/* SCROLLING LOGOS CONTAINER */}
        {/* The "animate-scroll-left" class creates the scrolling animation */}
        <div className="flex animate-scroll-left gap-16 whitespace-nowrap">
          {/* MAP THROUGH DUPLICATED LOGOS */}
          {/* Creates a logo image for each logo (including duplicates) */}
          {duplicatedLogos.map((logoItem, index) => (
            <div
              key={`${logoItem.name}-${index}`}
              className="flex h-20 items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 flex-shrink-0"
            >
              {/* LOGO IMAGE */}
              {/* Logos are grayscale by default, become colored on hover */}
              {/* If logo file doesn't exist, shows placeholder */}
              <img
                src={logoItem.logo || "/icons/placeholder.svg"}
                alt={logoItem.name}
                className="h-full w-auto object-contain px-8"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

