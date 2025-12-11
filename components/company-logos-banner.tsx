"use client"

// ============================================================================
// COMPANY LOGOS BANNER COMPONENT
// ============================================================================
// This component displays a scrolling banner of company logos.
// The logos scroll continuously from right to left in an infinite loop.
//
// TO MODIFY COMPANY LOGOS:
// - Edit the "companies" array below
// - Each company needs: name (for alt text) and logo (path to image file)
// - Make sure logo images exist in the /public/logos/ folder
// - To add a company: Add a new object to the array
// - To remove a company: Delete its object from the array
// ============================================================================

export function CompanyLogosBanner() {
  // ============================================================================
  // COMPANY DATA ARRAY
  // ============================================================================
  // This array contains all the companies you want to display.
  // Each company object has:
  // - name: Company name (used for accessibility/alt text)
  // - logo: Path to the logo image file (should be in /public/logos/ folder)
  // ============================================================================
  const companies = [
    { name: "Globant", logo: "/logos/globant-logo.png" },
    { name: "NetherRealm", logo: "/logos/netherrealm-logo.png" },
    { name: "Electronic Arts", logo: "/logos/electronic-arts-logo.png" },
    { name: "Disney", logo: "/logos/disney-logo.png" },
    { name: "Dedalord", logo: "/logos/dedalord-logo.png" },
    { name: "King", logo: "/logos/king-logo.png" },
  ]

  // DUPLICATE COMPANIES: Creates 3 copies of the array for seamless infinite scroll
  // The logos are duplicated so when one set scrolls off screen, another appears
  const duplicatedCompanies = [...companies, ...companies, ...companies]

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
          {/* MAP THROUGH DUPLICATED COMPANIES */}
          {/* Creates a logo image for each company (including duplicates) */}
          {duplicatedCompanies.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex h-20 items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 flex-shrink-0"
            >
              {/* COMPANY LOGO IMAGE */}
              {/* Logos are grayscale by default, become colored on hover */}
              {/* If logo file doesn't exist, shows placeholder */}
              <img
                src={company.logo || "/icons/placeholder.svg"}
                alt={company.name}
                className="h-full w-auto object-contain px-8"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

