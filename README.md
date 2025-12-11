# Portfolio Website

A modern Next.js portfolio website for Martin Schroeder showcasing game design and production work.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── ui/            # Reusable UI components
│   └── *.tsx          # Page sections
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
└── public/            # Static assets
```

## Features

- Responsive design
- Smooth scroll navigation
- Project showcase with modals
- Skills and experience sections
- Contact form
- Dark mode support

