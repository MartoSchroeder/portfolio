"use client"

export function CompanyLogosBanner() {
  const companies = [
    { name: "Globant", logo: "/logos/globant-logo.png" },
    { name: "NetherRealm", logo: "/logos/netherrealm-logo.png" },
    { name: "Electronic Arts", logo: "/logos/electronic-arts-logo.png" },
    { name: "Disney", logo: "/logos/disney-logo.png" },
    { name: "Dedalord", logo: "/logos/dedalord-logo.png" },
    { name: "King", logo: "/logos/king-logo.png" },
  ]

  const duplicatedCompanies = [...companies, ...companies, ...companies]

  return (
    <div className="mb-16 overflow-hidden bg-black/80 py-8 backdrop-blur-sm border-y border-primary/20">
      <div className="relative flex items-center">
        <div className="flex animate-scroll-left gap-16 whitespace-nowrap">
          {duplicatedCompanies.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex h-20 items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 flex-shrink-0"
            >
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

